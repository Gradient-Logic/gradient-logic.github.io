/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_ID?: string;
  /** Chrome WebMCP origin-trial token for https://gradient-logic.com */
  readonly VITE_WEBMCP_ORIGIN_TRIAL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
