import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { lossGradient, lossHeight } from "@/webgl/lossField";
import { isMobileViewport } from "@/webgl/detectWebGL";

const SEGMENTS_DESKTOP = 96;
const SEGMENTS_MOBILE = 48;

const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uResolve;
varying vec3 vNormalW;
varying float vHeight;
varying vec3 vView;

float lossH(vec2 p, float t) {
  float bowl = 0.12 * dot(p, p);
  float ripple =
    sin(p.x * 1.35 + t * 0.12) * cos(p.y * 1.15) * 0.32 +
    sin(p.x * 2.55 - p.y * 1.85 + t * 0.08) * 0.16 +
    sin((p.x + p.y) * 0.75 + t * 0.05) * 0.1;
  float basin = -0.22 * exp(-(p.x * p.x + (p.y - 0.6) * (p.y - 0.6)) * 1.4);
  float noiseBoost = mix(1.65, 1.0, uResolve);
  return bowl + ripple * noiseBoost + basin;
}

void main() {
  vec3 pos = position;
  float h = lossH(pos.xz, uTime);
  pos.y = h;

  float e = 0.05;
  float hx = lossH(pos.xz + vec2(e, 0.0), uTime);
  float hz = lossH(pos.xz + vec2(0.0, e), uTime);
  vec3 tangent = normalize(vec3(e, hx - h, 0.0));
  vec3 bitangent = normalize(vec3(0.0, hz - h, e));
  vec3 n = normalize(cross(bitangent, tangent));

  vec4 world = modelMatrix * vec4(pos, 1.0);
  vNormalW = normalize(mat3(modelMatrix) * n);
  vHeight = h;
  vView = cameraPosition - world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const fragmentShader = /* glsl */ `
varying vec3 vNormalW;
varying float vHeight;
varying vec3 vView;
uniform float uResolve;

void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(vView);
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.2);

  float t = clamp((vHeight + 0.45) / 1.1, 0.0, 1.0);
  vec3 cool = vec3(0.169, 0.180, 0.431);
  vec3 warm = vec3(0.310, 0.820, 0.690);
  vec3 base = mix(cool, warm, t);

  float alpha = mix(0.18, 0.42, fresnel) * mix(0.55, 1.0, uResolve);
  vec3 color = base + fresnel * warm * 0.35;
  gl_FragColor = vec4(color, alpha);
}
`;

type ResolveRef = { current: number };

function LossSurface({ resolveRef }: { resolveRef: ResolveRef }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const segments = isMobileViewport() ? SEGMENTS_MOBILE : SEGMENTS_DESKTOP;
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolve: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    const resolve = resolveRef.current;
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
      matRef.current.uniforms.uResolve.value = resolve;
    }
    if (wireRef.current) {
      const mat = wireRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.22 + resolve * 0.2;
    }
  });

  return (
    <group>
      <mesh rotation={[-Math.PI * 0.12, 0, 0]} scale={[1.55, 1, 1.55]}>
        <planeGeometry args={[6, 6, segments, segments]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        ref={wireRef}
        rotation={[-Math.PI * 0.12, 0, 0]}
        scale={[1.55, 1, 1.55]}
      >
        <planeGeometry args={[6, 6, 48, 48]} />
        <meshBasicMaterial
          color="#4FD1B0"
          wireframe
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function DescentParticle({ resolveRef }: { resolveRef: ResolveRef }) {
  const ref = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const state = useRef({
    x: -1.8,
    z: 1.4,
    stepTimer: 0,
    overshoot: 1,
  });

  useFrame(({ clock }, delta) => {
    if (resolveRef.current < 0.35) return;
    const s = state.current;
    const time = clock.getElapsedTime();
    s.stepTimer += delta;

    if (s.stepTimer > 0.085) {
      s.stepTimer = 0;
      const [gx, gz] = lossGradient(s.x, s.z, time);
      const len = Math.hypot(gx, gz) || 1;
      const lr = 0.11 * s.overshoot;
      s.x -= (gx / len) * lr;
      s.z -= (gz / len) * lr;
      s.x = THREE.MathUtils.clamp(s.x, -2.4, 2.4);
      s.z = THREE.MathUtils.clamp(s.z, -2.4, 2.4);
      s.overshoot = s.overshoot > 1 ? 0.72 : 1.28;
    }

    const y = lossHeight(s.x, s.z, time) + 0.06;
    if (ref.current) ref.current.position.set(s.x * 1.55, y, s.z * 1.55);
    if (glowRef.current) {
      glowRef.current.position.set(s.x * 1.55, y, s.z * 1.55);
      glowRef.current.scale.setScalar(0.85 + Math.sin(time * 4.2) * 0.15);
    }
  });

  return (
    <group rotation={[-Math.PI * 0.12, 0, 0]}>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#4FD1B0" transparent opacity={0.35} />
      </mesh>
      <mesh ref={ref}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#E8EDF4" />
      </mesh>
    </group>
  );
}

function SceneRig({
  resolveRef,
  animate,
}: {
  resolveRef: ResolveRef;
  animate: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const { pointer, size } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    if (animate) group.current.rotation.y += delta * 0.045;
    const max = THREE.MathUtils.degToRad(3);
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.y * max * 0.6,
      4,
      delta
    );
    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      -pointer.x * max * 0.35,
      4,
      delta
    );
    const scale = size.width < 720 ? 0.78 : 1;
    group.current.scale.setScalar(
      THREE.MathUtils.damp(group.current.scale.x, scale, 3, delta)
    );
  });

  return (
    <group ref={group} position={[0.35, -0.35, 0]}>
      <LossSurface resolveRef={resolveRef} />
      <DescentParticle resolveRef={resolveRef} />
    </group>
  );
}

/** Hero world content for a tracked View (no Canvas wrapper). */
export function HeroWorld({
  onReady,
  animate = true,
}: {
  onReady?: () => void;
  animate?: boolean;
}) {
  const resolveRef = useRef(animate ? 0 : 1);
  const readySent = useRef(false);

  useEffect(() => {
    if (!readySent.current) {
      readySent.current = true;
      requestAnimationFrame(() => onReady?.());
    }
  }, [onReady]);

  useFrame((_, delta) => {
    if (!animate) {
      resolveRef.current = 1;
      return;
    }
    if (resolveRef.current < 1) {
      resolveRef.current = Math.min(1, resolveRef.current + delta * 0.55);
    }
  });

  return <SceneRig resolveRef={resolveRef} animate={animate} />;
}
