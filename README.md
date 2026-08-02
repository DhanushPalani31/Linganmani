# Lingannamani Matriculation School — Website (React Rebuild)

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
- **Illustrations**: `src/components/Illustrations.jsx` contains original
  flat-style SVG graphics used in place of photography. This build
  environment has no AI image-generation tool, so these are hand-built
  vector placeholders, not photos and not AI-generated images. Before
  launch, replace them with:
  - real campus photography, or
  - images generated with an image-gen tool of your choice (Midjourney,
    DALL·E, Claude's image tools, etc.), dropped into `src/assets/`.
  The Gallery page (`src/pages/Gallery.jsx`) also uses colored tiles as
  placeholders for the same reason — same fix applies.

## Chatbot widget

`src/components/Chatbot.jsx` is a floating assistant that answers common
questions (admissions, fees, contact, coaching, trustees) using a simple
keyword matcher in `src/data/content.js` (`chatbotFaqs`) — no backend
required, works immediately.

To upgrade it to a real AI assistant:
1. Add a small server route (e.g. `/api/chat`) that calls the Anthropic or
   OpenAI API, with your API key kept server-side (never in the browser).
2. Replace the body of `getAnswer()` in `Chatbot.jsx` with a `fetch()` call
   to that route, passing the message history and rendering the reply.

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
