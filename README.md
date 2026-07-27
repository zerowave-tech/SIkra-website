# Sikra — sikra.agency

Static single-page site (dc-runtime component), deployed on Vercel.

## Structure

```
index.html            ← single source of truth for the whole site
support.js             ← dc-runtime engine (generated, do not edit — see header comment)
vercel.json             ← security headers for Vercel
CNAME                  ← unused on Vercel, kept for GitHub Pages compatibility
_headers                ← unused on Vercel, kept for Netlify/Cloudflare Pages compatibility
robots.txt / sitemap.xml
404.html                ← generated fallback, auto-served by Vercel for unmatched routes

assets/                 ← images actually used by the live site
services/  stack/  about/  contact/  feedback/     ← English (root) pages
ru/  uk/  hu/                                      ← same 6 pages, per language
    └── index.html      ← generated per-language, per-page copies of index.html

scripts/
  build-pages.mjs       ← regenerates every page × language file + sitemap.xml + 404.html
```

### Why the page folders exist

The site uses path-based client routing (`/contact`, `/ru/stack`, …) via
`pushState`; language is parsed from the URL itself (`parseUrl()` /
`urlFor()` in the component), not from `localStorage` — a language switch is
a real navigation to a different URL, not a silent client-side swap. Since
this is static hosting with no server-side rewrites, every language × page
combination needs its own real `index.html` on disk so the host returns 200
instead of 404, and so each URL gets its own `<title>`/description/canonical/
hreflang for SEO.

Each generated file also gets a `<noscript>` block with real, translated text
and real `<a href>` links — the interactive app replaces `<x-dc>` wholesale on
mount (see `support.js`'s `boot()`), so this content only reaches users/crawlers
that don't run JS, which is exactly the point: it's what search engines see on
their first (non-JS) crawl pass, before — if ever — they render the JS app.

Translations for the noscript blocks and all meta tags are **not** duplicated
by hand — `build-pages.mjs` extracts them straight out of `index.html`'s own
`Component.buildDict()` at build time via Node's `vm` module. There is exactly
one place that owns the copy: `index.html`.

**After editing `index.html`, always regenerate everything:**

```bash
node scripts/build-pages.mjs
```

This is idempotent (safe to run repeatedly, including on its own output) —
it strips any previously-injected `<link rel="alternate">`/`<noscript>` tags
from `index.html` before treating it as the template again.

## Not tracked in git (builder-managed, local only)

`uploads/`, `export/`, `screenshots/`, `.thumbnail`, `Sikra Website (standalone).html`
are generated/managed by the dc-runtime builder app itself (asset library, project
thumbnail, standalone bundle export, QA screenshots). They aren't part of the
deployed site and are excluded via `.gitignore` — left in place on disk since the
builder expects them at these paths, just not versioned.

## Deploying (Vercel)

1. vercel.com → **Add New → Project** → import `zerowave-tech/SIkra-website`
   (works with a private repo, no GitHub Pages public-repo requirement).
2. Framework preset: **Other** (static site, no build command, no output dir override needed).
3. Deploy. Then **Project → Settings → Domains** → add `sikra.agency` and
   follow Vercel's DNS instructions (A record to `76.76.21.21` or CNAME to
   `cname.vercel-dns.com`, depending on whether it's the apex domain).
4. Every push to `main` auto-deploys. No build step for the site itself —
   only run `build-pages.mjs` locally before committing if you changed
   `index.html`.
