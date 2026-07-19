import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SEGMENTS = 64;

const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uBreath;
varying float vHeight;
varying vec3 vNormalW;
varying vec3 vView;

float h(vec2 p, float t) {
  float bowl = 0.04 * dot(p, p);
  float wave = sin(p.x * 1.2 + t * 0.2) * cos(p.y * 1.1 + t * 0.15) * 0.08 * uBreath;
  return bowl + wave;
}

void main() {
  vec3 pos = position;
  float height = h(pos.xz, uTime);
  pos.y = height;
  float e = 0.06;
  float hx = h(pos.xz + vec2(e, 0.0), uTime);
  float hz = h(pos.xz + vec2(0.0, e), uTime);
  vec3 n = normalize(cross(
    normalize(vec3(0.0, hz - height, e)),
    normalize(vec3(e, hx - height, 0.0))
  ));
  vec4 world = modelMatrix * vec4(pos, 1.0);
  vHeight = height;
  vNormalW = normalize(mat3(modelMatrix) * n);
  vView = cameraPosition - world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const fragmentShader = /* glsl */ `
varying float vHeight;
varying vec3 vNormalW;
varying vec3 vView;

void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(vView);
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.4);
  vec3 cool = vec3(0.169, 0.180, 0.431);
  vec3 warm = vec3(0.310, 0.820, 0.690);
  float t = clamp((vHeight + 0.15) / 0.4, 0.0, 1.0);
  vec3 color = mix(cool, warm, t) + fresnel * warm * 0.25;
  gl_FragColor = vec4(color, 0.22 + fresnel * 0.2);
}
`;

/** Contact payoff: calm, slowly breathing settled surface. */
export function ContactWorld() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const group = useRef<THREE.Group>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBreath: { value: 1 },
    }),
    []
  );

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = t;
      matRef.current.uniforms.uBreath.value = 0.75 + Math.sin(t * 0.55) * 0.25;
    }
    if (group.current) {
      group.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      <mesh rotation={[-Math.PI * 0.18, 0, 0]} scale={[1.8, 1, 1.8]}>
        <planeGeometry args={[5, 5, SEGMENTS, SEGMENTS]} />
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[-Math.PI * 0.18, 0, 0]} scale={[1.8, 1, 1.8]}>
        <planeGeometry args={[5, 5, 32, 32]} />
        <meshBasicMaterial
          color="#4FD1B0"
          wireframe
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
