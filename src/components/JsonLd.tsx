import { SITE } from "@/content";

/** Organization + StoreMate SoftwareApplication JSON-LD. */
export function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Gradient Logic",
      url: "https://gradient-logic.com",
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
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "StoreMate AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Turnkey AI customer assistant for restaurants, cafes and retail. Crawl a store website, build a knowledge base, deploy multilingual chat.",
      url: "https://gradient-logic.com/#storemate",
      offers: {
        "@type": "Offer",
        url: "https://gradient-logic.com/#contact",
      },
      provider: {
        "@type": "Organization",
        name: "Gradient Logic",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
