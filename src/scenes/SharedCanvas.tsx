import { useEffect, useState, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, View } from "@react-three/drei";
import { useWebGL } from "@/webgl/WebGLContext";
import { isMobileViewport } from "@/webgl/detectWebGL";
import { HeroWorld } from "@/scenes/HeroWorld";
import { OfferGlyph } from "@/scenes/OfferGlyphs";
import { EngagementGlobe } from "@/scenes/EngagementGlobe";
import { StoreMateWorld } from "@/scenes/StoreMateWorld";
import { ContactWorld } from "@/scenes/ContactWorld";

/**
 * Single shared WebGL context. All section scenes render via tracked Views.
 * Lazy-loaded after first paint.
 */
export default function SharedCanvas() {
  const { eventSource, tracks, setReady, hoveredGlyph } = useWebGL();
  const [mounted, setMounted] = useState(false);
  const mobile = isMobileViewport();
  const dpr = mobile
    ? 1
    : Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !eventSource.current) return null;

  const hero = tracks.hero;
  const globe = tracks.globe;
  const storemate = tracks.storemate;
  const contact = tracks.contact;

  return (
    <Canvas
      className="shared-canvas"
      eventSource={eventSource as RefObject<HTMLElement>}
      eventPrefix="client"
      dpr={dpr}
      gl={{
        antialias: !mobile,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      {hero?.current ? (
        <View track={hero as RefObject<HTMLElement>}>
          <PerspectiveCamera makeDefault position={[0, 2.4, 5.2]} fov={42} />
          <HeroWorld onReady={() => setReady(true)} animate />
        </View>
      ) : null}

      {([0, 1, 2] as const).map((i) => {
        const track = tracks[`glyph-${i}`];
        if (!track?.current) return null;
        return (
          <View key={i} track={track as RefObject<HTMLElement>}>
            <PerspectiveCamera makeDefault position={[0, 0, 2.4]} fov={40} />
            <OfferGlyph index={i} active={hoveredGlyph === i} />
          </View>
        );
      })}

      {globe?.current ? (
        <View track={globe as RefObject<HTMLElement>}>
          <PerspectiveCamera makeDefault position={[0, 0, 3.2]} fov={40} />
          <EngagementGlobe />
        </View>
      ) : null}

      {storemate?.current ? (
        <View track={storemate as RefObject<HTMLElement>}>
          <PerspectiveCamera makeDefault position={[0, 0.1, 2.8]} fov={38} />
          <StoreMateWorld />
        </View>
      ) : null}

      {contact?.current ? (
        <View track={contact as RefObject<HTMLElement>}>
          <PerspectiveCamera makeDefault position={[0, 1.6, 4.2]} fov={42} />
          <ContactWorld />
        </View>
      ) : null}
    </Canvas>
  );
}
