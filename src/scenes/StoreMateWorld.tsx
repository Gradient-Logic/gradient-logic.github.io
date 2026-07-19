import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWebGL } from "@/webgl/WebGLContext";

type Frag = {
  mesh: THREE.Mesh;
  home: THREE.Vector3;
  scatter: THREE.Vector3;
};

/**
 * StoreMate storefront card — progress-driven beats:
 * 0–0.25 idle/url, 0.25–0.5 scan+scatter, 0.5–0.75 KB grid, 0.75–1 chat pose.
 */
export function StoreMateWorld() {
  const { storemateProgress } = useWebGL();
  const root = useRef<THREE.Group>(null);
  const scan = useRef<THREE.Mesh>(null);
  const frags = useRef<Frag[]>([]);
  const grid = useRef<THREE.Group>(null);

  const fragmentMeshes = useMemo(() => {
    const items: { key: number; color: string; size: [number, number] }[] = [];
    for (let i = 0; i < 12; i++) {
      items.push({
        key: i,
        color: i % 3 === 0 ? "#4FD1B0" : "#8A96A8",
        size: [0.18 + (i % 3) * 0.05, 0.1 + (i % 2) * 0.04],
      });
    }
    return items;
  }, []);

  const cardEdges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(1.6, 1.15, 0.08)),
    []
  );

  useFrame((_, delta) => {
    const p = storemateProgress.current;
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.damp(
        root.current.rotation.y,
        -0.25 + Math.sin(p * Math.PI) * 0.08,
        4,
        delta
      );
    }

    // Beat ranges
    const scanT = THREE.MathUtils.clamp((p - 0.22) / 0.28, 0, 1);
    const scatterT = THREE.MathUtils.clamp((p - 0.28) / 0.22, 0, 1);
    const gridT = THREE.MathUtils.clamp((p - 0.5) / 0.25, 0, 1);
    const chatT = THREE.MathUtils.clamp((p - 0.75) / 0.25, 0, 1);

    if (scan.current) {
      scan.current.position.y = THREE.MathUtils.lerp(0.55, -0.55, scanT);
      const mat = scan.current.material as THREE.MeshBasicMaterial;
      mat.opacity = scatterT > 0.95 ? 0 : scanT * 0.7;
      scan.current.visible = p > 0.2 && p < 0.55;
    }

    frags.current.forEach((f, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const gridPos = new THREE.Vector3(
        -0.45 + col * 0.3,
        0.35 - row * 0.28,
        0.12
      );
      const from = f.home;
      const mid = f.scatter;
      let target: THREE.Vector3;
      if (gridT > 0) {
        target = mid.clone().lerp(gridPos, gridT);
      } else if (scatterT > 0) {
        target = from.clone().lerp(mid, scatterT);
      } else {
        target = from;
      }
      f.mesh.position.lerp(target, 1 - Math.exp(-10 * delta));
      f.mesh.rotation.z = scatterT * (1 - gridT) * (i % 2 === 0 ? 0.4 : -0.35);
      f.mesh.visible = p > 0.25;
      const mat = f.mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = THREE.MathUtils.lerp(0.15, 0.9, Math.max(scatterT, gridT));
    });

    if (grid.current) {
      grid.current.visible = gridT > 0.05;
      grid.current.scale.setScalar(0.85 + gridT * 0.15);
      const mats = grid.current.children;
      mats.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshBasicMaterial;
          mat.opacity = 0.15 + gridT * 0.35 + chatT * 0.15;
        }
      });
    }
  });

  return (
    <group ref={root} position={[0, -0.05, 0]}>
      {/* Storefront card */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 1.15, 0.08]} />
        <meshBasicMaterial color="#111722" />
      </mesh>
      <lineSegments geometry={cardEdges}>
        <lineBasicMaterial color="#4FD1B0" />
      </lineSegments>

      {/* Awning / roof */}
      <mesh position={[0, 0.62, 0.02]}>
        <boxGeometry args={[1.7, 0.12, 0.12]} />
        <meshBasicMaterial color="#2B2E6E" />
      </mesh>

      {/* Door */}
      <mesh position={[0, -0.22, 0.05]}>
        <planeGeometry args={[0.35, 0.5]} />
        <meshBasicMaterial color="#4FD1B0" transparent opacity={0.25} />
      </mesh>

      {/* Window panes */}
      <mesh position={[-0.45, 0.15, 0.05]}>
        <planeGeometry args={[0.4, 0.35]} />
        <meshBasicMaterial color="#26303F" />
      </mesh>
      <mesh position={[0.45, 0.15, 0.05]}>
        <planeGeometry args={[0.4, 0.35]} />
        <meshBasicMaterial color="#26303F" />
      </mesh>

      {/* Scan beam */}
      <mesh ref={scan} position={[0, 0.55, 0.08]} scale={[1.5, 0.04, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#4FD1B0" transparent opacity={0.5} />
      </mesh>

      {/* Page fragments */}
      {fragmentMeshes.map((f, i) => {
        const home = new THREE.Vector3(
          ((i % 4) - 1.5) * 0.28,
          0.2 - Math.floor(i / 4) * 0.15,
          0.1
        );
        const scatter = new THREE.Vector3(
          home.x + (i % 2 === 0 ? -0.55 : 0.55),
          home.y + 0.35 - (i % 3) * 0.2,
          0.35 + (i % 4) * 0.05
        );
        return (
          <mesh
            key={f.key}
            position={home}
            visible={false}
            ref={(el) => {
              if (el) {
                frags.current[i] = { mesh: el, home, scatter };
              }
            }}
          >
            <planeGeometry args={f.size} />
            <meshBasicMaterial
              color={f.color}
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}

      {/* KB grid frame */}
      <group ref={grid} position={[0, 0, 0.14]} visible={false}>
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <mesh
              key={`${row}-${col}`}
              position={[-0.45 + col * 0.3, 0.35 - row * 0.28, 0]}
            >
              <planeGeometry args={[0.26, 0.22]} />
              <meshBasicMaterial
                color="#4FD1B0"
                transparent
                opacity={0.2}
                wireframe
              />
            </mesh>
          ))
        )}
      </group>
    </group>
  );
}
