# Google Analytics 4

Gradient Logic uses GA4 via the standard gtag.js snippet.

## Configuration

- Measurement ID: `G-MQTH1GW250`
- Stream URL (GA admin): `https://gradient-logic.com`
- Code: `src/components/Analytics.tsx`
- Optional override: set `VITE_GA_ID` in a local `.env` (defaults to the ID above)

## What is tracked

- Default page views on load
- Enhanced measurement in GA4 (scrolls, outbound clicks, etc.) if enabled on the data stream

There are no custom click events in the site code. Outbound Calendly, email and social clicks rely on Enhanced measurement outbound clicks.

## Verify

1. Open [GA4 Realtime](https://analytics.google.com)
2. Visit https://gradient-logic.com/ (incognito if you use an ad blocker)
3. Confirm the session appears; in DevTools Network, look for `googletagmanager.com/gtag/js?id=G-MQTH1GW250`
