import { useEffect } from "react";
import { whenInteractive } from "@/motion/whenInteractive";

/** Fade/slide section reveals via ScrollTrigger (gsap loaded async). */
export function useSectionReveals(reducedMotion: boolean) {
  useEffect(() => {
    if (reducedMotion) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    let cancelled = false;
    let revert: (() => void) | undefined;

    (async () => {
      await whenInteractive();
      if (cancelled) return;
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        targets.forEach((el) => {
          const delay = Number(el.dataset.revealDelay ?? 0);
          gsap.fromTo(
            el,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });
      });
      ScrollTrigger.refresh();
      revert = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [reducedMotion]);
}
