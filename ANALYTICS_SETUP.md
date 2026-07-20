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
- **WebMCP custom events** (see below)

Outbound Calendly, email and social clicks rely on Enhanced measurement outbound clicks.

## WebMCP events

When a visitor's browser exposes WebMCP and our tools register / run:

| Event | Params | Meaning |
|-------|--------|---------|
| `webmcp_ready` | `tool_count` | Tools registered successfully |
| `webmcp_tool_call` | `tool_name`, `is_egg` | A tool `execute` ran |

Egg tool name: `descend_the_gradient` (`is_egg: true`).

In GA4: **Admin → Custom definitions** (optional) to register `tool_name` / `is_egg` as event-scoped custom dimensions, then explore in **Reports → Engagement → Events**.

These are anonymous (session / device). WebMCP does not identify the agent or person.

## WebMCP setup (production)

1. Register the origin trial for WebMCP at [Chrome Origin Trials](https://developer.chrome.com/origintrials) for `https://gradient-logic.com`.
2. Set `VITE_WEBMCP_ORIGIN_TRIAL=<token>` in the GitHub Actions build env (or local `.env`) so the token is injected at runtime.
3. Local testing without a token: Chrome flag `chrome://flags/#enable-webmcp-testing` + [Model Context Tool Inspector](https://developer.chrome.com/docs/ai/webmcp).

Tools live in `src/webmcp/registerTools.ts`.

## Verify

1. Open [GA4 Realtime](https://analytics.google.com)
2. Visit https://gradient-logic.com/ (incognito if you use an ad blocker)
3. Confirm the session appears; in DevTools Network, look for `googletagmanager.com/gtag/js?id=G-MQTH1GW250`
4. With WebMCP available, call a tool from the inspector and confirm `webmcp_tool_call` in Realtime → Events
