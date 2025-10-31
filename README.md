# Twisha Patel — Personal Portfolio (twisha-portfolio)

Digital study in violet dusk — a minimal, academic portfolio scaffold built with React + Vite + TailwindCSS and deployed via GitHub Pages.

## Quick start

1. Install dependencies

```bash
npm install
```

2. Local development

```bash
npm run dev
```

3. Build

```bash
npm run build
```

4. Manual deploy

```bash
npm run deploy
```

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys `dist/` to the `gh-pages` branch whenever `main` is pushed.

## Project structure

Key files and folders:

- `public/` — favicon, og-image, robots
- `src/` — React app, components, data
  - `src/components/` — Navbar, Hero, Projects, Research, Blog, Contact, Footer
  - `src/data/` — `projects.json`, `research.json`, `blog.json` (add entries here)

## Adding content

- Projects: add objects to `src/data/projects.json` with fields: `id`, `title`, `description`, `link`, `tags`.
- Research: add entries to `src/data/research.json` (Markdown-ready `abstract` / `links`).
- Blog: add preview items to `src/data/blog.json`; full posts can be synced from Obsidian/Markdown later.

## Notes & future integrations

- Placeholders for GitHub API fetch (live stars), MathJax/KaTeX support, Obsidian sync, and a dynamic “Lab / Vault” area are present in code comments.

---

Built with care for accessibility and a calm, mysterious aesthetic.
