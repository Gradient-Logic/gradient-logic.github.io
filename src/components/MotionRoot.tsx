import {
  lazy,
  Suspense,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ProgressRail } from "@/components/ProgressRail";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useSectionReveals } from "@/hooks/useSectionReveals";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { whenInteractive } from "@/motion/whenInteractive";
import { detectWebGL } from "@/webgl/detectWebGL";
import { WebGLProvider } from "@/webgl/WebGLContext";

const SharedCanvas = lazy(() => import("@/scenes/SharedCanvas"));

/** Boots Lenis, reveals, progress rail and lazy shared WebGL. */
export function MotionRoot({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  useSmoothScroll(reducedMotion);
  useSectionReveals(reducedMotion);

  const [webgl, setWebgl] = useState(false);
  const [load3d, setLoad3d] = useState(false);

  useEffect(() => {
    setWebgl(detectWebGL());
  }, []);

  useEffect(() => {
    if (reducedMotion || !webgl) return;
    let cancelled = false;

    // Gate Three behind first interaction (same gate as GSAP) so LCP/TBT stay clean.
    whenInteractive(12000).then(() => {
      if (!cancelled) setLoad3d(true);
    });

    return () => {
      cancelled = true;
    };
  }, [reducedMotion, webgl]);

  const enabled = webgl && !reducedMotion;

  return (
    <WebGLProvider enabled={enabled}>
      <ProgressRail reducedMotion={reducedMotion} />
      {children}
      {enabled && load3d ? (
        <Suspense fallback={null}>
          <SharedCanvas />
        </Suspense>
      ) : null}
    </WebGLProvider>
  );
}
