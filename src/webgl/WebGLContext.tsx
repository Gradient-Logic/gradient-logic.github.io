import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

export type ViewId =
  | "hero"
  | "glyph-0"
  | "glyph-1"
  | "glyph-2"
  | "globe"
  | "storemate"
  | "contact";

type TrackMap = Partial<Record<ViewId, RefObject<HTMLElement | null>>>;

type WebGLContextValue = {
  enabled: boolean;
  ready: boolean;
  setReady: (v: boolean) => void;
  tracks: TrackMap;
  registerTrack: (id: ViewId, ref: RefObject<HTMLElement | null>) => void;
  hoveredGlyph: number | null;
  setHoveredGlyph: (i: number | null) => void;
  eventSource: RefObject<HTMLElement | null>;
  /** Shared 0–1 StoreMate sequence progress (mutated, no React state). */
  storemateProgress: RefObject<number>;
};

const WebGLContext = createContext<WebGLContextValue | null>(null);

export function useWebGL() {
  const ctx = useContext(WebGLContext);
  if (!ctx) throw new Error("useWebGL must be used within WebGLProvider");
  return ctx;
}

export function useWebGLOptional() {
  return useContext(WebGLContext);
}

type ProviderProps = {
  enabled: boolean;
  children: ReactNode;
};

/** DOM-only provider — no Three imports. Track refs feed the lazy SharedCanvas. */
export function WebGLProvider({ enabled, children }: ProviderProps) {
  const eventSource = useRef<HTMLElement | null>(null);
  const tracksRef = useRef<TrackMap>({});
  const storemateProgress = useRef(0);
  const [, bump] = useState(0);
  const [ready, setReady] = useState(false);
  const [hoveredGlyph, setHoveredGlyph] = useState<number | null>(null);

  const registerTrack = useCallback(
    (id: ViewId, ref: RefObject<HTMLElement | null>) => {
      tracksRef.current[id] = ref;
      bump((n) => n + 1);
    },
    []
  );

  const value = useMemo<WebGLContextValue>(
    () => ({
      enabled,
      ready,
      setReady,
      tracks: tracksRef.current,
      registerTrack,
      hoveredGlyph,
      setHoveredGlyph,
      eventSource,
      storemateProgress,
    }),
    [enabled, ready, registerTrack, hoveredGlyph]
  );

  return (
    <WebGLContext.Provider value={value}>
      <div ref={eventSource as RefObject<HTMLDivElement>} className="webgl-root">
        {children}
      </div>
    </WebGLContext.Provider>
  );
}
