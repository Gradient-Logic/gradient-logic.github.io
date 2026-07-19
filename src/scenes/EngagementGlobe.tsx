import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const POINT_COUNT = 50;

/** Slow-rotating wireframe globe with ~50 pulsing signal points. */
export function EngagementGlobe() {
  const group = useRef<THREE.Group>(null);
  const dots = useRef<(THREE.Mesh | null)[]>([]);

  const positions = useMemo(() => {
    const out: [number, number, number][] = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      const y = 1 - (i / (POINT_COUNT - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      out.push([Math.cos(theta) * r * 1.02, y * 1.02, Math.sin(theta) * r * 1.02]);
    }
    return out;
  }, []);

  const phases = useMemo(
    () => Float32Array.from({ length: POINT_COUNT }, () => Math.random() * Math.PI * 2),
    []
  );

  useFrame(({ clock }, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
    const t = clock.getElapsedTime();
    dots.current.forEach((mesh, i) => {
      if (!mesh) return;
      const pulse = 0.55 + (Math.sin(t * 2.4 + phases[i]) * 0.5 + 0.5) * 0.7;
      mesh.scale.setScalar(pulse);
    });
  });

  return (
    <group ref={group} scale={1.15}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#4FD1B0" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.98, 24, 24]} />
        <meshBasicMaterial color="#2B2E6E" transparent opacity={0.15} />
      </mesh>
      {positions.map((p, i) => (
        <mesh
          key={i}
          ref={(el) => {
            dots.current[i] = el;
          }}
          position={p}
        >
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#4FD1B0" />
        </mesh>
      ))}
    </group>
  );
}
