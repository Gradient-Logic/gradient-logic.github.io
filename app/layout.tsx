import type { Metadata } from "next";
import Script from "next/script";
import { Literata, Source_Sans_3 } from "next/font/google";
import "./globals.css";

/* Literata + Source Sans 3 both ship Greek glyphs (needed for EL copy). */
const literata = Literata({
  subsets: ["latin", "greek"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "greek"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gradient-logic.com"),
  title: {
    default: "Gradient Logic — AI systems that ship",
    template: "%s · Gradient Logic",
  },
  description:
    "Boutique AI consultancy in Athens. Enterprise AI strategy, agents, RAG, and StoreMate AI for physical stores. From idea to production in weeks.",
  keywords: [
    "AI consultancy",
    "Athens",
    "enterprise AI",
    "RAG",
    "agents",
    "StoreMate AI",
    "Gradient Logic",
    "Pavlos Polydoras",
  ],
  authors: [{ name: "Pavlos Polydoras" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: ["en_US"],
    url: "https://gradient-logic.com",
    siteName: "Gradient Logic",
    title: "Gradient Logic — AI systems that ship",
    description:
      "Enterprise AI strategy & production systems. Based in Athens. Book a call.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gradient Logic — AI systems that ship",
    description:
      "Enterprise AI strategy & production systems. Based in Athens.",
  },
  robots: { index: true, follow: true },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-MQTH1GW250";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className={`${literata.variable} ${sourceSans.variable}`}>
      <body className="font-body">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
