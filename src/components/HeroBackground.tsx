import { useWebGLOptional } from "@/webgl/WebGLContext";
import { ViewSlot } from "@/webgl/ViewSlot";

/**
 * Hero background: CSS placeholder + tracked View slot for shared canvas.
 */
export function HeroBackground() {
  const ctx = useWebGLOptional();
  const ready = ctx?.ready ?? false;
  const enabled = ctx?.enabled ?? false;

  return (
    <div className="hero__stage" aria-hidden="true">
      <div className={`hero__bg${ready && enabled ? " is-dimmed" : ""}`} />
      {enabled ? (
        <ViewSlot
          id="hero"
          className={`hero__canvas${ready ? " is-ready" : ""}`}
        />
      ) : null}
    </div>
  );
}
