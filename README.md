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
services/  stack/  about/  contact/  feedback/
    └── index.html      ← generated per-page copies of index.html (see below)

scripts/
  build-pages.mjs       ← regenerates the page folders + 404.html from index.html
```

### Why the page folders exist

The site uses path-based client routing (`/contact`, `/stack`, …) via `pushState`.
Since this is static hosting with no server-side rewrites, each route needs a
real `index.html` on disk so GitHub Pages returns 200 instead of 404, and so
each page gets its own `<title>`/description/canonical for SEO.

**After editing `index.html`, always regenerate the stubs:**

```bash
node scripts/build-pages.mjs
```

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
