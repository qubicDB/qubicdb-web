# qubicdb-web

Official website for [qubicDB](https://github.com/qubicDB/qubicdb) — a brain-like recursive memory database for LLMs.

Built with Next.js 14, TailwindCSS, and Framer Motion. Deployed as a static SPA on GitHub Pages.

## Live

https://qubicdb.github.io/qubicdb-web/

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → out/
```

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically via `.github/workflows/deploy.yml`.

Requires **GitHub Pages** enabled on the repo with source set to **GitHub Actions**.

## Stack

- Next.js 14 (`output: 'export'` — fully static)
- TailwindCSS 3
- Framer Motion 11
- Lucide React icons
