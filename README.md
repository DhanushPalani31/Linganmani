# Lingannamani Matriculation & Higher Secondary School — Website (React Rebuild)

A modern rebuild of https://www.lingannamanischool.com using React, React
Router, and Tailwind CSS. Built to replace the previous static HTML site
while keeping the same content structure (Home, About with Vision & Mission
/ Motto / Trustees, Academics, Facilities, News & Events, Gallery,
Testimonials, Contact).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   Navbar, Footer, Chatbot, Illustrations (shared UI)
  pages/        Home, About, Academics, Facilities, Events, Gallery, Contact
  data/         content.js — all school facts, trustees, events, FAQ data
                (edit this file to update site content without touching UI code)
```

## Pushing to your GitHub repo

```bash
git remote add origin https://github.com/DhanushPalani31/Linganmani.git
git add .
git commit -m "Modern React rebuild of the school website"
git branch -M main
git push -u origin main
```

## Design system

- **Colors**: standard corporate/EdTech palette — blue primary
  (`brand-*`, #1e3a8a–#2563eb), amber accent, emerald success, slate
  neutrals. Defined as CSS variables in `src/index.css` (`@theme` block,
  Tailwind v4 syntax) — change values there to re-theme the whole site.
- **Type**: Sora (display/headings) + Inter (body), loaded from Google Fonts.
- **Images**: every photo slot (`ImageWithFallback.jsx`) points at a real
  file path under `public/images/...` and shows a soft placeholder until
  that file exists. See `IMAGE_PROMPTS.md` for the exact filenames and a
  ready-to-use prompt for each one.

## Chatbot widget (real Gemini integration)

`src/components/Chatbot.jsx` is a floating assistant backed by Google's
Gemini API. It calls `/api/chat` (`api/chat.js`), a serverless function that
keeps your `GEMINI_API_KEY` on the server — the browser never sees it.

**Setup:**
1. Get a free key at https://aistudio.google.com/apikey
2. Copy `.env.example` to `.env` and paste your key in as `GEMINI_API_KEY`
3. Run locally with `vercel dev` (not `npm run dev`) so the `/api/chat`
   function is actually served — see "Deploying" below
4. In production (Vercel/Netlify), set `GEMINI_API_KEY` as an environment
   variable in the project settings — never commit it

The function in `api/chat.js` uses `gemini-3.5-flash-lite` by default — a
fast, low-cost, generally-available Gemini model well suited to short FAQ
answers. Google renames/retires models periodically (`gemini-2.5-flash` and
`gemini-2.5-pro` are both scheduled to retire in October 2026), so check
https://ai.google.dev/gemini-api/docs/models before deploying and update the
`MODEL` constant if needed.

If the API call fails for any reason (no key configured, network issue, rate
limit), the widget falls back to the original keyword-matched FAQ answers in
`src/data/content.js` rather than going silent.

## Deploying (so `/api/chat` actually works)

This project needs a host that runs serverless functions, not a purely
static host:
- **Vercel** (recommended, zero config): `npm i -g vercel`, then `vercel` in
  the project root. It auto-detects the Vite frontend and the `api/`
  functions.
- **Netlify**: works too, but `api/chat.js` needs to move to
  `netlify/functions/chat.js` and use Netlify's handler signature instead of
  Vercel's — ask me if you want that version.

## Images

See **`IMAGE_PROMPTS.md`** for the full list of image files the site
expects, the exact path each one goes in, and a ready-to-use Gemini
(Nano Banana) prompt for generating each one. Until those files exist, every
image slot shows a soft placeholder instead of a broken-image icon.

## Content

All editable facts — trustee names, stats, events, testimonials, FAQ
answers — live in `src/data/content.js`. Update that file to refresh the
site without touching component code.

## Notes on migrating from the old site

- Old anchor links (`about.html#vm`, `about.html#motto`, `about.html#trustees`,
  `index.html#test`) are preserved as in-page anchors (`/about#vm`, etc.)
  with automatic scroll-to-section, so existing shared links/bookmarks and
  search-engine listings keep working once redirects are set up from the
  old URLs to the new ones.
- Real event history (90+ posts) and gallery photos from the old site
  should be migrated into `src/data/content.js` and `src/assets/gallery`
  respectively — see the earlier Website Modernisation Proposal for the
  step-by-step migration plan.
