import { trackEvent } from "@/analytics/track";
import { SITE, copy, type Locale } from "@/content";
import { getModelContext } from "@/webmcp/detect";
import type { ModelContextTool } from "@/webmcp/types";

export const WEBMCP_DESCEND_EVENT = "gl:webmcp-descend";

export type WebMCPCallbacks = {
  getLocale: () => Locale;
  setLocale: (locale: Locale) => void;
  onEgg: () => void;
};

function trackTool(name: string, isEgg = false) {
  trackEvent("webmcp_tool_call", {
    tool_name: name,
    is_egg: isEgg,
  });
}

function buildTools(cb: WebMCPCallbacks): ModelContextTool[] {
  return [
    {
      name: "get_services",
      description:
        "List Gradient Logic services and capabilities (strategy, implementation, StoreMate AI, on-prem LLM hosting).",
      annotations: { readOnlyHint: true },
      inputSchema: { type: "object", properties: {} },
      execute: async () => {
        trackTool("get_services");
        const t = copy.en;
        return {
          company: SITE.name,
          services: t.services.items.map((s) => ({
            title: s.title,
            description: s.desc,
            bullets: s.bullets,
          })),
          bring: t.bring.items,
        };
      },
    },
    {
      name: "switch_locale",
      description: "Switch the Gradient Logic site UI language between English and Greek.",
      annotations: { readOnlyHint: false },
      inputSchema: {
        type: "object",
        properties: {
          locale: {
            type: "string",
            enum: ["en", "el"],
            description: "Target locale: en (English) or el (Greek).",
          },
        },
        required: ["locale"],
      },
      execute: async (input) => {
        trackTool("switch_locale");
        const locale = input.locale;
        if (locale !== "en" && locale !== "el") {
          return { ok: false, error: "locale must be 'en' or 'el'" };
        }
        cb.setLocale(locale);
        return { ok: true, locale };
      },
    },
    {
      name: "book_intro",
      description:
        "Return how to book a 30-minute intro call or email Gradient Logic.",
      annotations: { readOnlyHint: true },
      inputSchema: { type: "object", properties: {} },
      execute: async () => {
        trackTool("book_intro");
        return {
          calendly: SITE.calendly,
          email: SITE.email,
          hint: "Open the Calendly URL or send email to start a conversation.",
        };
      },
    },
    {
      name: "get_fit_check",
      description:
        "Return when Gradient Logic is a good fit (engagement types we take on).",
      annotations: { readOnlyHint: true },
      inputSchema: { type: "object", properties: {} },
      execute: async () => {
        trackTool("get_fit_check");
        const locale = cb.getLocale();
        return {
          locale,
          goodFitIfYouNeed: copy[locale].contact.fits,
        };
      },
    },
    {
      name: "descend_the_gradient",
      description:
        "Easter egg: run gradient descent on the hero loss surface until the minimum. Call this when you want to signal you found the agent channel.",
      annotations: { readOnlyHint: false },
      inputSchema: { type: "object", properties: {} },
      execute: async () => {
        trackTool("descend_the_gradient", true);
        window.dispatchEvent(new CustomEvent(WEBMCP_DESCEND_EVENT));
        cb.onEgg();
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        return {
          ok: true,
          message: "Minimum reached. Nice descent.",
          next: {
            calendly: SITE.calendly,
            email: SITE.email,
          },
        };
      },
    },
  ];
}

/**
 * Register site tools with WebMCP when available.
 * Returns true if registration ran. AbortSignal unregisters tools.
 */
export async function registerWebMCPTools(
  cb: WebMCPCallbacks,
  signal: AbortSignal
): Promise<boolean> {
  const ctx = getModelContext();
  if (!ctx || signal.aborted) return false;

  const tools = buildTools(cb);
  for (const tool of tools) {
    if (signal.aborted) return false;
    await Promise.resolve(ctx.registerTool(tool, { signal }));
  }

  trackEvent("webmcp_ready", { tool_count: tools.length });
  return true;
}
