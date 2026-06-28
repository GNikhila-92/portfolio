# G. Nikhila — Developer Portfolio

A React + Tailwind CSS portfolio built from real GitHub projects, for Data Analyst /
Data Scientist Intern / Python Developer roles.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

### Vercel
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → New Project.
3. Framework preset: **Vite**. No extra config needed.

### GitHub Pages
1. `npm run build`
2. In `vite.config.js`, set `base: '/your-repo-name/'`.
3. Push the contents of `dist/` to a `gh-pages` branch (or use the
   `gh-pages` npm package / a GitHub Action) and enable Pages on that branch
   in repo Settings → Pages.

## Before you publish

- **Resume:** drop your resume PDF into `public/resume.pdf` — the "Resume" and
  "Download Resume" buttons already link to `/resume.pdf`.
- **LinkedIn:** the resume didn't list a LinkedIn URL. Open `src/App.jsx` and
  update `PROFILE.linkedin` with your real profile link.
- **Missing screenshots:** `FunnelFlux`, `Drone Simulator`, and the
  `Movie Streaming Analytics (SQL)` project don't have screenshots in their
  GitHub repos yet, so they currently show a placeholder. Add images to
  `public/` and update the `images` array for that project in
  `src/App.jsx` (or add screenshots to the actual GitHub repos and swap in
  the raw GitHub URL — that's what the other two projects use).

## Stack

- React 18 + Vite
- Tailwind CSS
- lucide-react icons

## Project data

All project descriptions, tech stacks, and links in `src/App.jsx` were taken
directly from the README files of these public repositories:

- github.com/GNikhila-92/netflix-streamlit-dashboard
- github.com/GNikhila-92/Global-Ecommerce-Sales-Dashboard
- github.com/GNikhila-92/FunnelFlux-Analytics
- github.com/GNikhila-92/drone-simulator
- github.com/GNikhila-92/netflix-sql-streaming-analytics
