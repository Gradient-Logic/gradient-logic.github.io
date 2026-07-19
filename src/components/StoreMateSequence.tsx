import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { whenInteractive } from "@/motion/whenInteractive";
import { useWebGLOptional } from "@/webgl/WebGLContext";
import { ViewSlot } from "@/webgl/ViewSlot";

const DEMO_URL = "https://cafe.example.com";

const CHAT = [
  { lang: "el", q: "Τι ώρα ανοίγετε σήμερα;", a: "Ανοίγουμε 09:00-22:00." },
  {
    lang: "en",
    q: "Do you have oat milk?",
    a: "Yes, oat milk is available.",
  },
] as const;

type Step = { label: string; desc: string };

type StoreMateSequenceProps = {
  title: string;
  steps: readonly Step[];
};

/**
 * StoreMate product moment: pinned scrubbed sequence (desktop),
 * stepped fades on mobile / reduced-motion.
 */
export function StoreMateSequence({ title, steps }: StoreMateSequenceProps) {
  const reduced = usePrefersReducedMotion();
  const ctx = useWebGLOptional();
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const urlRef = useRef<HTMLParagraphElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLParagraphElement>(null);
  const [mobileStep, setMobileStep] = useState(0);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    let cancelled = false;
    let kill: (() => void) | undefined;

    const progressRef = ctx?.storemateProgress;

    const applyOverlays = (p: number) => {
      const idx = Math.min(3, Math.floor(p * 4));
      if (activeRef.current && steps[idx]) {
        activeRef.current.textContent = `0${idx + 1} · ${steps[idx].label}`;
      }

      if (urlRef.current) {
        const t = Math.min(1, Math.max(0, p / 0.25));
        const n = Math.floor(t * DEMO_URL.length);
        urlRef.current.textContent =
          DEMO_URL.slice(0, n) + (t > 0 && t < 1 ? "▍" : "");
        urlRef.current.dataset.visible = p < 0.35 && p > 0.02 ? "1" : "0";
      }

      if (chatRef.current) {
        const t = Math.min(1, Math.max(0, (p - 0.75) / 0.25));
        chatRef.current.dataset.visible = t > 0.05 ? "1" : "0";
        const bubbles =
          chatRef.current.querySelectorAll<HTMLElement>("[data-bubble]");
        bubbles.forEach((el, i) => {
          const threshold = (i + 1) / (bubbles.length + 0.5);
          el.dataset.show = t >= threshold ? "1" : "0";
        });
      }

      section.querySelectorAll<HTMLElement>("[data-sm-step]").forEach((el) => {
        const i = Number(el.dataset.smStep);
        el.dataset.active = i === idx ? "1" : "0";
        el.dataset.done = i < idx ? "1" : "0";
      });
    };

    const setProgress = (p: number) => {
      if (progressRef) progressRef.current = p;
      applyOverlays(p);
    };

    (async () => {
      await whenInteractive();
      if (cancelled) return;
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      if (reduced || isNarrow) {
        setProgress(reduced ? 1 : 0);
        const triggers = steps.map((_, i) =>
          ScrollTrigger.create({
            trigger: section.querySelector(`[data-sm-step="${i}"]`),
            start: "top 75%",
            end: "bottom 40%",
            onEnter: () => {
              setMobileStep(i);
              setProgress((i + 0.5) / 4);
            },
            onEnterBack: () => {
              setMobileStep(i);
              setProgress((i + 0.5) / 4);
            },
          })
        );
        kill = () => triggers.forEach((t) => t.kill());
        return;
      }

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=220%",
        pin,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => setProgress(self.progress),
      });

      setProgress(0);
      ScrollTrigger.refresh();
      kill = () => st.kill();
    })();

    return () => {
      cancelled = true;
      kill?.();
    };
  }, [ctx, reduced, isNarrow, steps]);

  return (
    <div className="sm-sequence" ref={sectionRef}>
      <div className="sm-sequence__pin" ref={pinRef}>
        <div className="sm-stage">
          <ViewSlot id="storemate" className="sm-view" />
          <div className="sm-overlay" aria-hidden="true">
            <p className="sm-url mono" ref={urlRef} data-visible="0" />
            <p className="sm-active-step mono" ref={activeRef}>
              01 · {steps[0]?.label}
            </p>
            <div className="sm-chat" ref={chatRef} data-visible="0">
              {CHAT.map((c, i) => (
                <div key={c.q} className="sm-chat__pair">
                  <div
                    className="sm-bubble sm-bubble--q"
                    data-bubble
                    data-show="0"
                    data-i={i}
                  >
                    <span className="mono">{c.lang.toUpperCase()}</span> {c.q}
                  </div>
                  <div
                    className="sm-bubble sm-bubble--a"
                    data-bubble
                    data-show="0"
                    data-i={i}
                  >
                    {c.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sm-rail">
          <h3 className="sm-rail__title">{title}</h3>
          <ol className="sm-rail__steps">
            {steps.map((s, i) => (
              <li
                key={s.label}
                data-sm-step={i}
                data-active={mobileStep === i ? "1" : "0"}
                className="sm-rail__step"
              >
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <strong>{s.label}</strong>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
