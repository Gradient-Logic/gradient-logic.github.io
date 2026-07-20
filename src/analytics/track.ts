/** Fire a GA4 custom event when gtag is available. Safe no-op otherwise. */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag === "function") {
    gtag("event", name, params);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
