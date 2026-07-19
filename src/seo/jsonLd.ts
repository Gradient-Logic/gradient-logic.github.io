import { SITE, copy } from "../content";

const ORG_ID = "https://gradient-logic.com/#organization";
const WEBSITE_ID = "https://gradient-logic.com/#website";

/** JSON-LD graph for index.html (static; do not also inject client-side). */
export function buildJsonLdGraph() {
  const t = copy.en;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        url: "https://gradient-logic.com/",
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Athens",
          addressCountry: "GR",
        },
        founder: {
          "@type": "Person",
          name: "Pavlos Polydoras",
          sameAs: [SITE.linkedin],
        },
        sameAs: [SITE.linkedin, SITE.github],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE.name,
        url: "https://gradient-logic.com/",
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
        description: t.hero.sub,
      },
      {
        "@type": "SoftwareApplication",
        name: "StoreMate AI",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: t.storemate.sub,
        url: "https://gradient-logic.com/#storemate",
        provider: { "@id": ORG_ID },
      },
    ],
  };
}
