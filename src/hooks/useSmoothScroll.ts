import { useEffect, useRef } from "react";
import type Lenis from "lenis";
import { whenInteractive } from "@/motion/whenInteractive";

export type SmoothScrollApi = {
  lenis: Lenis | null;
  scrollTo: (target: string | number, options?: { offset?: number }) => void;
};

/**
 * Lenis smooth scroll synced with GSAP ScrollTrigger.
 * Libraries are dynamically imported after mount.
 */
export function useSmoothScroll(reducedMotion: boolean): SmoothScrollApi {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add("motion-reduce");
      document.documentElement.classList.remove("motion-ready");
      return;
    }

    let cancelled = false;
    let ticker: ((time: number) => void) | null = null;
    let onClick: ((event: MouseEvent) => void) | null = null;
    let gsapMod: typeof import("gsap") | null = null;

    (async () => {
      await whenInteractive();
      if (cancelled) return;
      const [{ default: Lenis }, gsap, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis/dist/lenis.css"),
      ]);
      if (cancelled) return;

      gsapMod = gsap;
      gsap.default.registerPlugin(ScrollTrigger);
      document.documentElement.classList.remove("motion-reduce");
      document.documentElement.classList.add("motion-ready");

      const lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);

      ticker = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.default.ticker.add(ticker);
      gsap.default.ticker.lagSmoothing(0);

      onClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement | null;
        const anchor = target?.closest?.(
          "a[href^='#']"
        ) as HTMLAnchorElement | null;
        if (!anchor) return;
        const hash = anchor.getAttribute("href");
        if (!hash || hash === "#") return;
        const el = document.querySelector(hash);
        if (!el) return;
        event.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -64 });
      };
      document.addEventListener("click", onClick);
    })();

    return () => {
      cancelled = true;
      if (onClick) document.removeEventListener("click", onClick);
      if (ticker && gsapMod) gsapMod.default.ticker.remove(ticker);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  return {
    lenis: lenisRef.current,
    scrollTo: (target, options) => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(target, { offset: options?.offset ?? -64 });
        return;
      }
      if (typeof target === "string") {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    },
  };
}
