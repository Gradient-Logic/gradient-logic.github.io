import { useId, useState } from "react";
import type { Copy } from "@/content";

type ApproachCopy = Copy["approach"];

type ApproachPathProps = {
  approach: ApproachCopy;
};

const CAPTIONS = [
  "input → signals",
  "constraints → plan",
  "artifact → gates",
  "rollout → ownership",
] as const;

/**
 * How we work: blueprint panels. Click opens a stable drawer under the
 * grid (no column reflow) with engagement-derived detail.
 */
export function ApproachPath({ approach }: ApproachPathProps) {
  const { title, steps, expandHint, collapseHint, outputLabel, fromWorkLabel } =
    approach;
  const [expanded, setExpanded] = useState<number | null>(null);
  const labelId = useId();
  const open = expanded !== null ? steps[expanded] : null;

  const toggle = (i: number) => {
    setExpanded((cur) => (cur === i ? null : i));
    document.getElementById(`${labelId}-tab-${i}`)?.focus();
  };

  return (
    <div className="approach">
      <div className="section-head" data-reveal>
        <p className="eyebrow">/03 · approach</p>
        <h2 id="approach-title">{title}</h2>
      </div>

      <div className="blueprint-wrap" data-reveal>
        <div
          className="blueprint"
          role="list"
          aria-label={title}
          data-has-expanded={expanded !== null ? "1" : "0"}
        >
          {steps.map((s, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={s.title}
                role="listitem"
                id={`${labelId}-tab-${i}`}
                className="blueprint__panel"
                tabIndex={0}
                data-active={isOpen ? "1" : "0"}
                data-dimmed={expanded !== null && expanded !== i ? "1" : "0"}
                aria-expanded={isOpen}
                aria-controls={`${labelId}-drawer`}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(i);
                  } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = (i + 1) % steps.length;
                    setExpanded(next);
                    document.getElementById(`${labelId}-tab-${next}`)?.focus();
                  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                    e.preventDefault();
                    const prev = (i - 1 + steps.length) % steps.length;
                    setExpanded(prev);
                    document.getElementById(`${labelId}-tab-${prev}`)?.focus();
                  } else if (e.key === "Escape" && expanded !== null) {
                    e.preventDefault();
                    setExpanded(null);
                  }
                }}
              >
                <span className="blueprint__corners" aria-hidden="true" />
                <header className="blueprint__head">
                  <span className="blueprint__index mono">0{i + 1}</span>
                  <span className="blueprint__caption mono">{CAPTIONS[i]}</span>
                </header>
                <div className="blueprint__diagram" aria-hidden="true">
                  <StageDiagram
                    index={i}
                    active={isOpen || expanded === null}
                  />
                </div>
                <h3 className="blueprint__title">{s.title}</h3>
                <p className="blueprint__desc">{s.desc}</p>
                <p className="blueprint__hint mono">
                  {isOpen ? collapseHint : expandHint}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="blueprint-drawer"
          id={`${labelId}-drawer`}
          data-open={expanded !== null ? "1" : "0"}
          role="region"
          aria-live="polite"
          aria-hidden={expanded === null}
          aria-label={open ? open.title : undefined}
        >
          <div className="blueprint-drawer__inner">
            {open ? (
              <div className="blueprint-drawer__content">
                <header className="blueprint-drawer__head">
                  <p className="blueprint__detail-label mono">{fromWorkLabel}</p>
                  <p className="blueprint-drawer__stage mono">
                    0{(expanded ?? 0) + 1} · {open.title}
                  </p>
                </header>
                <ul className="blueprint__focus">
                  {open.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="blueprint__output mono">
                  <span>{outputLabel}:</span> {open.output}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Inline SVG schematics — readable at a glance, not icons. */
function StageDiagram({ index, active }: { index: number; active: boolean }) {
  const cls = active ? "blueprint-svg is-active" : "blueprint-svg";
  if (index === 0) {
    return (
      <svg viewBox="0 0 200 120" className={cls}>
        <g className="blueprint-svg__grid">
          {Array.from({ length: 5 }, (_, r) => (
            <line key={`h${r}`} x1="10" y1={20 + r * 20} x2="190" y2={20 + r * 20} />
          ))}
          {Array.from({ length: 10 }, (_, c) => (
            <line key={`v${c}`} x1={10 + c * 20} y1="20" x2={10 + c * 20} y2="100" />
          ))}
        </g>
        <line x1="40" y1="40" x2="90" y2="55" className="blueprint-svg__edge" />
        <line x1="90" y1="55" x2="150" y2="38" className="blueprint-svg__edge" />
        <line x1="90" y1="55" x2="120" y2="88" className="blueprint-svg__edge" />
        <line x1="40" y1="40" x2="70" y2="85" className="blueprint-svg__edge" />
        <circle cx="40" cy="40" r="4" className="blueprint-svg__node" />
        <circle cx="90" cy="55" r="5" className="blueprint-svg__node is-hot" />
        <circle cx="150" cy="38" r="4" className="blueprint-svg__node" />
        <circle cx="120" cy="88" r="4" className="blueprint-svg__node" />
        <circle cx="70" cy="85" r="3.5" className="blueprint-svg__node" />
        <text x="12" y="14" className="blueprint-svg__label">
          signals
        </text>
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 200 120" className={cls}>
        <g className="blueprint-svg__grid">
          {Array.from({ length: 5 }, (_, r) => (
            <line key={`h${r}`} x1="10" y1={20 + r * 20} x2="190" y2={20 + r * 20} />
          ))}
          {Array.from({ length: 10 }, (_, c) => (
            <line key={`v${c}`} x1={10 + c * 20} y1="20" x2={10 + c * 20} y2="100" />
          ))}
        </g>
        <line x1="24" y1="28" x2="176" y2="28" className="blueprint-svg__rail" />
        <line x1="24" y1="100" x2="176" y2="100" className="blueprint-svg__rail" />
        <rect x="36" y="42" width="52" height="36" className="blueprint-svg__box" />
        <rect x="100" y="42" width="64" height="36" className="blueprint-svg__box is-hot" />
        <line x1="88" y1="60" x2="100" y2="60" className="blueprint-svg__edge" />
        <polygon points="98,56 106,60 98,64" className="blueprint-svg__arrow" />
        <text x="44" y="64" className="blueprint-svg__tiny">
          iface
        </text>
        <text x="112" y="64" className="blueprint-svg__tiny">
          core
        </text>
        <text x="12" y="14" className="blueprint-svg__label">
          constraints
        </text>
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 200 120" className={cls}>
        <g className="blueprint-svg__grid">
          {Array.from({ length: 5 }, (_, r) => (
            <line key={`h${r}`} x1="10" y1={20 + r * 20} x2="190" y2={20 + r * 20} />
          ))}
          {Array.from({ length: 10 }, (_, c) => (
            <line key={`v${c}`} x1={10 + c * 20} y1="20" x2={10 + c * 20} y2="100" />
          ))}
        </g>
        <rect x="30" y="36" width="44" height="28" className="blueprint-svg__box" />
        <rect x="98" y="36" width="44" height="28" className="blueprint-svg__box is-hot" />
        <rect x="64" y="78" width="72" height="22" className="blueprint-svg__box" />
        <path
          d="M 74 50 H 98 M 142 50 C 168 50 168 89 136 89"
          className="blueprint-svg__edge"
          fill="none"
        />
        <path
          d="M 64 89 C 36 89 36 50 52 50"
          className="blueprint-svg__edge is-return"
          fill="none"
        />
        <text x="40" y="54" className="blueprint-svg__tiny">
          build
        </text>
        <text x="108" y="54" className="blueprint-svg__tiny">
          eval
        </text>
        <text x="84" y="92" className="blueprint-svg__tiny">
          gate
        </text>
        <text x="12" y="14" className="blueprint-svg__label">
          iterate
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" className={cls}>
      <g className="blueprint-svg__grid">
        {Array.from({ length: 5 }, (_, r) => (
          <line key={`h${r}`} x1="10" y1={20 + r * 20} x2="190" y2={20 + r * 20} />
        ))}
        {Array.from({ length: 10 }, (_, c) => (
          <line key={`v${c}`} x1={10 + c * 20} y1="20" x2={10 + c * 20} y2="100" />
        ))}
      </g>
      <rect x="78" y="30" width="44" height="24" className="blueprint-svg__box is-hot" />
      <text x="88" y="46" className="blueprint-svg__tiny">
        playbook
      </text>
      <path
        d="M 100 54 V 68 M 100 68 L 40 88 M 100 68 L 100 96 M 100 68 L 160 88"
        className="blueprint-svg__edge"
        fill="none"
      />
      <rect x="18" y="88" width="44" height="18" className="blueprint-svg__box" />
      <rect x="78" y="96" width="44" height="18" className="blueprint-svg__box" />
      <rect x="138" y="88" width="44" height="18" className="blueprint-svg__box" />
      <text x="26" y="100" className="blueprint-svg__tiny">
        BU-A
      </text>
      <text x="88" y="108" className="blueprint-svg__tiny">
        BU-B
      </text>
      <text x="146" y="100" className="blueprint-svg__tiny">
        BU-C
      </text>
      <text x="12" y="14" className="blueprint-svg__label">
        fan-out
      </text>
    </svg>
  );
}
