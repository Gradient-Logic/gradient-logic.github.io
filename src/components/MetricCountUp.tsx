import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { whenInteractive } from "@/motion/whenInteractive";

type MetricCountUpProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

/** Mono metric that counts up on scroll; snaps to final if reduced motion. */
export function MetricCountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: MetricCountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();

  const format = (n: number) =>
    `${prefix}${decimals > 0 ? n.toFixed(decimals) : Math.round(n)}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.textContent = format(value);
      return;
    }

    let cancelled = false;
    let kill: (() => void) | undefined;
    // Keep final value in the DOM until the count-up actually starts.
    el.textContent = format(value);

    (async () => {
      await whenInteractive();
      if (cancelled) return;
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const state = { n: 0 };
      const tween = gsap.to(state, {
        n: value,
        duration: 0.85,
        ease: "power3.out",
        paused: true,
        onUpdate: () => {
          el.textContent = format(state.n);
        },
      });

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          el.textContent = format(0);
          tween.play(0);
        },
      });

      kill = () => {
        st.kill();
        tween.kill();
      };
    })();

    return () => {
      cancelled = true;
      kill?.();
    };
    // format closes over props used in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, suffix, prefix, decimals, reduced]);

  return (
    <span ref={ref} className={className ?? "metric"}>
      {format(value)}
    </span>
  );
}
