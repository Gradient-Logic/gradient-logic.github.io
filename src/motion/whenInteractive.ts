/** Resolves on first user interaction, or after a long idle fallback. */
export function whenInteractive(fallbackMs = 10000): Promise<void> {
  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      window.removeEventListener("scroll", finish);
      window.removeEventListener("pointerdown", finish);
      window.removeEventListener("keydown", finish);
      window.clearTimeout(timer);
      resolve();
    };
    window.addEventListener("scroll", finish, { passive: true });
    window.addEventListener("pointerdown", finish);
    window.addEventListener("keydown", finish);
    const timer = window.setTimeout(finish, fallbackMs);
  });
}
