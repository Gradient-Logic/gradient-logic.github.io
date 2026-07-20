import type { ModelContext } from "@/webmcp/types";

/** Feature-detect WebMCP. Prefer document.modelContext; fall back to navigator. */
export function getModelContext(): ModelContext | null {
  const docCtx = document.modelContext;
  if (docCtx && typeof docCtx.registerTool === "function") return docCtx;

  const navCtx = navigator.modelContext;
  if (navCtx && typeof navCtx.registerTool === "function") return navCtx;

  return null;
}

export function hasWebMCP(): boolean {
  return getModelContext() !== null;
}
