import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { seoPrerenderPlugin } from "./seoPrerenderPlugin";

export default defineConfig({
  plugins: [react(), seoPrerenderPlugin()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
