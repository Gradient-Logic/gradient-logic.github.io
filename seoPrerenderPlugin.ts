import type { Plugin } from "vite";
import { buildJsonLdGraph } from "./src/seo/jsonLd";
import { buildStaticShell } from "./src/seo/staticShell";

/** Injects crawlable EN shell + JSON-LD into index.html at build/dev time. */
export function seoPrerenderPlugin(): Plugin {
  return {
    name: "gradient-seo-prerender",
    transformIndexHtml(html) {
      const graph = buildJsonLdGraph();
      const json = JSON.stringify(graph);
      const shell = buildStaticShell();

      let out = html.replace(
        "</head>",
        `    <script type="application/ld+json">${json}</script>\n  </head>`
      );

      if (out.includes('<div id="root"></div>')) {
        out = out.replace(
          '<div id="root"></div>',
          `<div id="root">${shell}</div>`
        );
      } else if (out.includes('<div id="root">')) {
        out = out.replace(
          /<div id="root">[\s\S]*?<\/div>\s*(?=<script)/,
          `<div id="root">${shell}</div>\n    `
        );
      }

      return out;
    },
  };
}
