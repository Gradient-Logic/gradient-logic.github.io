/**
 * Shared analytic loss surface. Must stay in sync with the GLSL displacement.
 * Bowl + ripples so a visible minimum exists for gradient descent.
 */
export function lossHeight(x: number, z: number, time = 0): number {
  const bowl = 0.12 * (x * x + z * z);
  const ripple =
    Math.sin(x * 1.35 + time * 0.12) * Math.cos(z * 1.15) * 0.32 +
    Math.sin(x * 2.55 - z * 1.85 + time * 0.08) * 0.16 +
    Math.sin((x + z) * 0.75 + time * 0.05) * 0.1;
  // Soft secondary basin so descent isn't trivial
  const basin = -0.22 * Math.exp(-(x * x + (z - 0.6) * (z - 0.6)) * 1.4);
  return bowl + ripple + basin;
}

export function lossGradient(
  x: number,
  z: number,
  time = 0,
  eps = 0.04
): [number, number] {
  const dx = (lossHeight(x + eps, z, time) - lossHeight(x - eps, z, time)) / (2 * eps);
  const dz = (lossHeight(x, z + eps, time) - lossHeight(x, z - eps, time)) / (2 * eps);
  return [dx, dz];
}
