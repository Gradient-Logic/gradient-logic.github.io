import { useEffect, useRef } from "react";
import { whenInteractive } from "@/motion/whenInteractive";

const LOSS_START = 2.417;
const LOSS_END = 0.031;

type ProgressRailProps = {
  reducedMotion: boolean;
};

/**
 * Desktop-only descent progress rail.
 * Mutates DOM refs (no React state per scroll frame).
 */
export function ProgressRail({ reducedMotion }: ProgressRailProps) {
  const fillRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLParagraphElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const readout = readoutRef.current;
    const root = rootRef.current;
    if (!fill || !readout || !root) return;

    if (reducedMotion) {
      fill.style.transform = "scaleY(1)";
      readout.textContent = "converged ✓";
      root.classList.add("is-converged");
      return;
    }

    let cancelled = false;
    let kill: (() => void) | undefined;

    (async () => {
      await whenInteractive();
      if (cancelled) return;
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const contact = document.querySelector("#contact");
      const st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const p = self.progress;
          fill.style.transform = `scaleY(${p})`;

          const contactTop = contact
            ? (contact as HTMLElement).offsetTop
            : Number.POSITIVE_INFINITY;
          const nearContact =
            window.scrollY + window.innerHeight * 0.55 >= contactTop ||
            p > 0.94;

          if (nearContact) {
            readout.textContent = "converged ✓";
            root.classList.add("is-converged");
            return;
          }

          root.classList.remove("is-converged");
          const loss = LOSS_START + (LOSS_END - LOSS_START) * p;
          readout.textContent = `loss: ${loss.toFixed(3)}`;
        },
      });
      ScrollTrigger.refresh();
      kill = () => st.kill();
    })();

    return () => {
      cancelled = true;
      kill?.();
    };
  }, [reducedMotion]);

  return (
    <aside ref={rootRef} className="progress-rail" aria-hidden="true">
      <div className="progress-rail__track">
        <div ref={fillRef} className="progress-rail__fill" />
      </div>
      <p ref={readoutRef} className="progress-rail__readout mono">
        loss: {LOSS_START.toFixed(3)}
      </p>
    </aside>
  );
}
