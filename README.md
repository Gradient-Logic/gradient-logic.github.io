# Gradient Logic

Boutique AI consultancy site — [gradient-logic.com](https://gradient-logic.com).

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
