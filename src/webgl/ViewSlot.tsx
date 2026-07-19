import { useEffect, useRef } from "react";
import { useWebGLOptional, type ViewId } from "@/webgl/WebGLContext";

type ViewSlotProps = {
  id: ViewId;
  className?: string;
};

/** Tracking div for a drei View. No Three dependency. */
export function ViewSlot({ id, className }: ViewSlotProps) {
  const ctx = useWebGLOptional();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ctx?.enabled) return;
    ctx.registerTrack(id, ref);
  }, [ctx, id]);

  if (!ctx?.enabled) return null;

  return (
    <div
      ref={ref}
      className={className}
      aria-hidden="true"
      role="presentation"
    />
  );
}
