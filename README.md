# Twisha Patel — Personal Portfolio (twisha-portfolio)

Digital study in violet dusk — a multi-page portfolio built with React + Vite + TailwindCSS and deployed via GitHub Pages.

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

- `public/` — favicon, og-image, robots, 404.html for routing
- `src/pages/` — Individual page components (Home, About, Projects, etc.)
- `src/components/` — Reusable components (Navbar, Footer, cards)
- `src/data/` — JSON files for projects, research, blog posts

## Navigation & Routing

The site uses React Router for multi-page navigation:

- `/` — Home/landing page
- `/about` — About section
- `/projects` — Projects grid
- `/research` — Research publications
- `/blog` — Blog posts (Markdown-ready)
- `/contact` — Contact form and links
- `/archive` — Legacy works (optional)

Each page is lazy-loaded for performance. GitHub Pages routing is handled via `404.html` fallback.

## Adding content

- **Projects**: Add objects to `src/data/projects.json` with `id`, `title`, `description`, `link`, `tags`
- **Research**: Add entries to `src/data/research.json` (abstract, links)
- **Blog**: Add previews to `src/data/blog.json`; full posts can be integrated with Markdown later
 - **Blog**: Add previews to `src/data/blog.json`; each post should include a `slug` and `content` (Markdown). Generic detail pages are generated client-side from JSON: add new items to the JSON and use their `slug` to link
- **New Pages**: Create in `src/pages/`, add route in `App.jsx`, and link in `Navbar.jsx`

### Adding new projects / research / blog posts (quick)

1. Add an entry to the appropriate JSON file in `src/data/` using the `slug` field (URL-friendly lower-case, hyphen-separated).
2. Include `content` (Markdown) for full-page rendering.
3. Link to the item from lists with `/projects/:slug`, `/research/:slug`, or `/blog/:slug`.

The site uses a generic detail component that renders pages from JSON at runtime. If you prefer build-time static pages for SEO, run the optional generator (not included by default).

## Notes & future integrations

- Placeholders for GitHub API (live stats), MathJax/KaTeX (academic papers), Obsidian sync, and dynamic "Lab / Vault" area
- Blog supports Markdown via `react-markdown`

---

Built with care for accessibility and a calm, mysterious aesthetic.
