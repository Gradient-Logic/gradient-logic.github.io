import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Strategy: wireframe graph settling into a tree. */
export function StrategyGlyph({ active }: { active: boolean }) {
  const root = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const settle = useRef(0);

  const nodes = useMemo(() => {
    const graph = [
      [0, 0.55, 0],
      [-0.55, 0.15, 0.2],
      [0.5, 0.2, -0.15],
      [-0.25, -0.35, 0.25],
      [0.35, -0.4, -0.2],
      [0.05, -0.05, 0.4],
    ] as [number, number, number][];
    const tree = [
      [0, 0.55, 0],
      [-0.4, 0.15, 0],
      [0.4, 0.15, 0],
      [-0.55, -0.35, 0],
      [0.55, -0.35, 0],
      [0, -0.1, 0],
    ] as [number, number, number][];
    return { graph, tree };
  }, []);

  const edges = useMemo(
    () =>
      [
        [0, 1],
        [0, 2],
        [1, 3],
        [2, 4],
        [0, 5],
      ] as [number, number][],
    []
  );

  const lineGeos = useMemo(() => {
    return edges.map(() => {
      const g = new THREE.BufferGeometry();
      g.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(6), 3)
      );
      return g;
    });
  }, [edges]);

  useFrame((_, delta) => {
    settle.current = THREE.MathUtils.damp(
      settle.current,
      active ? 1 : 0.12,
      5,
      delta
    );
    const t = settle.current;
    if (root.current) root.current.rotation.y += delta * 0.25;

    const posAt = (i: number): [number, number, number] => [
      nodes.graph[i][0] + (nodes.tree[i][0] - nodes.graph[i][0]) * t,
      nodes.graph[i][1] + (nodes.tree[i][1] - nodes.graph[i][1]) * t,
      nodes.graph[i][2] + (nodes.tree[i][2] - nodes.graph[i][2]) * t,
    ];

    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const p = posAt(i);
      mesh.position.set(p[0], p[1], p[2]);
    });

    edges.forEach(([a, b], i) => {
      const pa = posAt(a);
      const pb = posAt(b);
      const arr = lineGeos[i].attributes.position.array as Float32Array;
      arr[0] = pa[0];
      arr[1] = pa[1];
      arr[2] = pa[2];
      arr[3] = pb[0];
      arr[4] = pb[1];
      arr[5] = pb[2];
      lineGeos[i].attributes.position.needsUpdate = true;
    });
  });

  return (
    <group ref={root} scale={1.15}>
      {nodes.graph.map((p, i) => (
        <mesh
          key={i}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          position={p}
        >
          <sphereGeometry args={[0.06, 10, 10]} />
          <meshBasicMaterial color="#4FD1B0" />
        </mesh>
      ))}
      {lineGeos.map((geo, i) => (
        <lineSegments key={i} geometry={geo}>
          <lineBasicMaterial color="#8A96A8" transparent opacity={0.85} />
        </lineSegments>
      ))}
    </group>
  );
}

/** Implementation: nodes handshaking (agent orchestration). */
export function ImplementationGlyph({ active }: { active: boolean }) {
  const left = useRef<THREE.Group>(null);
  const right = useRef<THREE.Group>(null);
  const beam = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const reach = active ? 0.22 : 0.08;
    const pulse = Math.sin(t * (active ? 5 : 2)) * 0.5 + 0.5;
    if (left.current) left.current.position.x = -0.45 + reach * pulse;
    if (right.current) right.current.position.x = 0.45 - reach * pulse;
    if (beam.current) {
      const mat = beam.current.material as THREE.MeshBasicMaterial;
      mat.opacity = active ? 0.25 + pulse * 0.45 : 0.08;
      beam.current.scale.x = active ? 0.6 + pulse * 0.5 : 0.35;
    }
  });

  return (
    <group>
      <group ref={left} position={[-0.45, 0, 0]}>
        <mesh>
          <icosahedronGeometry args={[0.18, 0]} />
          <meshBasicMaterial color="#4FD1B0" wireframe />
        </mesh>
      </group>
      <group ref={right} position={[0.45, 0, 0]}>
        <mesh>
          <icosahedronGeometry args={[0.18, 0]} />
          <meshBasicMaterial color="#8A96A8" wireframe />
        </mesh>
      </group>
      <mesh ref={beam} scale={[0.5, 0.02, 0.02]}>
        <boxGeometry />
        <meshBasicMaterial color="#4FD1B0" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

/** StoreMate: storefront outline scanned by a beam. */
export function StoreMateGlyph({ active }: { active: boolean }) {
  const scan = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!scan.current) return;
    const t = clock.getElapsedTime();
    scan.current.position.y = active ? Math.sin(t * 2.2) * 0.35 : -0.2;
    const mat = scan.current.material as THREE.MeshBasicMaterial;
    mat.opacity = active ? 0.55 : 0.15;
  });

  const frame = useMemo(() => {
    const pts = [
      new THREE.Vector3(-0.45, -0.4, 0),
      new THREE.Vector3(-0.45, 0.35, 0),
      new THREE.Vector3(-0.15, 0.55, 0),
      new THREE.Vector3(0.15, 0.55, 0),
      new THREE.Vector3(0.45, 0.35, 0),
      new THREE.Vector3(0.45, -0.4, 0),
      new THREE.Vector3(-0.45, -0.4, 0),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <group>
      <lineLoop geometry={frame}>
        <lineBasicMaterial color="#8A96A8" />
      </lineLoop>
      <mesh position={[0, -0.15, 0]}>
        <planeGeometry args={[0.22, 0.35]} />
        <meshBasicMaterial color="#4FD1B0" transparent opacity={0.2} />
      </mesh>
      <mesh ref={scan} position={[0, 0, 0.02]} scale={[0.9, 0.03, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#4FD1B0" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export function OfferGlyph({
  index,
  active,
}: {
  index: number;
  active: boolean;
}) {
  if (index === 0) return <StrategyGlyph active={active} />;
  if (index === 1) return <ImplementationGlyph active={active} />;
  return <StoreMateGlyph active={active} />;
}
