/** Minimal WebMCP Imperative API typings (Chrome origin trial / Canary). */

export type JsonSchema = {
  type: string;
  properties?: Record<string, unknown>;
  required?: string[];
  [key: string]: unknown;
};

export type ModelContextTool = {
  name: string;
  description: string;
  inputSchema?: JsonSchema;
  annotations?: {
    readOnlyHint?: boolean;
    untrustedContentHint?: boolean;
  };
  execute: (input: Record<string, unknown>) => unknown | Promise<unknown>;
};

export type ModelContext = {
  registerTool(
    tool: ModelContextTool,
    options?: { signal?: AbortSignal; exposedTo?: string[] }
  ): void | Promise<void>;
};

declare global {
  interface Document {
    modelContext?: ModelContext;
  }
  interface Navigator {
    /** @deprecated Prefer document.modelContext (Chrome 150+). */
    modelContext?: ModelContext;
  }
}

export {};
