import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const id = import.meta.env.VITE_GA_ID || "G-MQTH1GW250";

  useEffect(() => {
    if (!id || document.getElementById("ga-gtag")) return;

    const script = document.createElement("script");
    script.id = "ga-gtag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.id = "ga-config";
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    `;
    document.head.appendChild(inline);
  }, [id]);

  return null;
}
