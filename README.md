# Gradient Logic

Boutique AI consultancy site for [gradient-logic.com](https://gradient-logic.com).

## Stack

- Vite + React 19 + TypeScript
- Vanilla CSS design tokens
- Static deploy to GitHub Pages

## Develop

```bash
npm install
npm run dev
```

## Build / preview

```bash
npm run build
npm run preview
```

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml` (builds `dist/`, copies `CNAME`).

## SEO

Build injects an English HTML shell + JSON-LD into `index.html` so crawlers see content without executing JS. Canonical language is English; the EL toggle is UI-only. See `public/llms.txt` and `public/sitemap.xml`.
