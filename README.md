# Vibe Analyst Book Website

Single-book React/Vite website for **Vibe Analyst: How Non-Technical Professionals Use AI Agents to Double Their Output** by Arjun Pardasani.

## Run locally

This environment does not have a global `npm`, so commands can be run with the local npm bootstrap from the workspace root:

```bash
cd "/Users/devipardasani/Documents/New project 2/vibe-analyst-book-site"
node ../.codex_tools/npm/bin/npm-cli.js install
node ../.codex_tools/npm/bin/npm-cli.js run dev -- --port 5173
```

Then open `http://127.0.0.1:5173/`.

## Build

```bash
cd "/Users/devipardasani/Documents/New project 2/vibe-analyst-book-site"
node ../.codex_tools/npm/bin/npm-cli.js run build
```

## Publish with Vercel

Import this repository in Vercel and use:

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `dist`

## Amazon link

Update `AMAZON_URL` in `src/main.jsx` when the live Amazon/KDP listing is available.
