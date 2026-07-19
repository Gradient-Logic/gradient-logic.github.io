import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { whenInteractive } from "@/motion/whenInteractive";

type Step = { title: string; desc: string };

type ApproachPathProps = {
  title: string;
  steps: readonly Step[];
};

/** How-we-work: SVG path strokes on scroll; nodes light --signal. */
export function ApproachPath({ title, steps }: ApproachPathProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const path = pathRef.current;
    if (!root || !path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = reduced ? "0" : `${length}`;

    if (reduced) {
      root
        .querySelectorAll<HTMLElement>(".approach-path__node")
        .forEach((el) => {
          el.dataset.lit = "1";
        });
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

      const nodes = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".approach-path__node")
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "bottom 55%",
          scrub: 0.45,
        },
      });

      tl.to(path, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0);
      nodes.forEach((node, i) => {
        tl.to(
          node,
          {
            onStart: () => {
              node.dataset.lit = "1";
            },
            onReverseComplete: () => {
              node.dataset.lit = "0";
            },
            duration: 0.01,
          },
          (i + 1) / (nodes.length + 1)
        );
      });

      kill = () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    })();

    return () => {
      cancelled = true;
      kill?.();
    };
  }, [reduced, steps]);

  const w = 1000;
  const y = 40;
  const xs = [80, 360, 640, 920];
  const d = `M ${xs[0]} ${y} C 200 ${y}, 240 ${y}, ${xs[1]} ${y} S 520 ${y}, ${xs[2]} ${y} S 800 ${y}, ${xs[3]} ${y}`;

  return (
    <div className="approach" ref={rootRef}>
      <div className="section-head" data-reveal>
        <p className="eyebrow">/03 · approach</p>
        <h2 id="approach-title">{title}</h2>
      </div>

      <div className="approach-path" aria-hidden="true">
        <svg
          className="approach-path__svg"
          viewBox={`0 0 ${w} 80`}
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="approach-path__nodes">
          {steps.map((s, i) => (
            <span
              key={s.title}
              className="approach-path__node"
              data-node
              data-lit="0"
              style={{ left: `${(xs[i] / w) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="approach-grid">
        {steps.map((a, i) => (
          <article
            key={a.title}
            className="approach-card"
            data-reveal
            data-reveal-delay={(i * 0.06).toFixed(2)}
          >
            <p className="eyebrow">0{i + 1}</p>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
