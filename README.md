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
  vendor/               ← self-hosted React + ReactDOM (generated, see below)
  vendor.js             ← points the dc-runtime at those copies (generated)
services/  stack/  about/  contact/  feedback/     ← English (root) pages
ru/  ua/  hu/                                      ← same 6 pages, per language (ua = Ukrainian)
    └── index.html      ← generated per-language, per-page copies of index.html

scripts/
  build-pages.mjs       ← regenerates every page × language file + sitemap.xml + 404.html
  fetch-fonts.mjs       ← re-downloads the self-hosted woff2 files + assets/fonts.css
  fetch-vendor.mjs      ← re-downloads the self-hosted React UMD bundles + assets/vendor.js
```

### Fonts are self-hosted

The three Google Fonts (all SIL OFL, so redistribution is fine) live in
`assets/fonts/`, and their `@font-face` rules are inlined into `<head>`. A
`<link rel=stylesheet>` pointing at fonts.googleapis.com is render-blocking and
chains into a second cold connection to fonts.gstatic.com for the woff2 itself;
inlining removes both. It also means no visitor data reaches Google Fonts, so
the privacy policy does not have to account for it.

`assets/fonts.css` is the source of that inlined block. To change weights or
subsets, edit the family list in `scripts/fetch-fonts.mjs`, re-run it, then copy
the regenerated CSS into the `<style>` in `index.html`'s `<head>`.

### React is self-hosted too

`support.js` boots the page with React 18, and out of the box it injects two
`<script>` tags pointing at **unpkg.com** every time `window.React` is missing —
which is every cold page load. That put a third-party CDN on the critical render
path: an unpkg outage would leave every URL on the site a blank page, and even on
a good day it cost a DNS + TLS + fetch round trip to another origin before the
app could boot.

`scripts/fetch-vendor.mjs` mirrors the two UMD bundles into `assets/vendor/` and
writes `assets/vendor.js`, a three-line shim setting `window.__resources`. The
runtime checks that map in its `cdnScriptFor()` before falling back to the CDN,
so no patching of the generated `support.js` is needed. `assets/vendor.js` is
loaded by a `defer` script placed *before* the `support.js` tag — deferred
scripts run in document order, so the map is always populated in time.

The URLs and their SRI hashes are read out of `support.js` itself rather than
hardcoded, and every download is checked against the hash the runtime already
commits to. So if a regenerated `support.js` bumps React, just re-run:

```bash
node scripts/fetch-vendor.mjs
node scripts/build-pages.mjs
```

The first command also rewrites the `<!-- vendor-preload -->` block in
`index.html` in place, so the `rel=preload` hints can never point at a stale
version. `https://unpkg.com` is deliberately left in the CSP `script-src`: the
CDN path stays available as a fallback, and it is SRI-pinned, so a compromised
unpkg still cannot execute.

### The analytics init is a file, not an inline script

`assets/analytics.js` holds the gtag bootstrap. It cannot be inline: the CSP in
`vercel.json` sets `script-src` without `'unsafe-inline'`, so the browser
refuses to run an inline block and gtag never gets configured.

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

### Guides (`/guides`, `/ru/guides`, …)

Long-form SEO articles targeting searches like "технический стек для агентства",
"создание бизнеса", "tech stack for an agency". Unlike the app pages they are
plain static HTML with no JS, so their full text is indexed on the first crawl.

- Copy lives in `scripts/guides/{en,ru,uk,hu}.mjs`, one object per slug.
- Slugs, their order and the shared chrome strings live in `scripts/guides/ui.mjs`.
- `scripts/guides/render.mjs` renders the hub and article pages (Article,
  FAQPage and BreadcrumbList JSON-LD, hreflang, related links).
- `build-pages.mjs` writes them, adds them to `sitemap.xml` and links them from
  every page's `<noscript>` block. The app footer links to them too — if you add
  or rename a guide, update `GUIDE_SLUGS`/`guideLabels` in `index.html`'s
  `renderVals()` as well.

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

## Contact form (`api/brief.js`)

The brief form on `/contact` POSTs to `/api/brief`, a Vercel Node function that
forwards the submission by email through Resend. Same-origin, so it satisfies the
`connect-src 'self'` CSP in `vercel.json` without changes.

Set these in **Project → Settings → Environment Variables**:

| Variable | Required | Default |
|---|---|---|
| `RESEND_API_KEY` | yes | — |
| `BRIEF_TO` | no | `hello@sikra.agency` |
| `BRIEF_FROM` | no | `Sikra <noreply@sikra.agency>` |

`BRIEF_FROM` must be on a domain verified in Resend, otherwise Resend rejects the
send and the form shows its error state. Without `RESEND_API_KEY` the endpoint
returns 500 and the form falls back to offering a `mailto:` link.

The function has no npm dependencies — it calls the Resend REST API with `fetch`,
so the repo stays build-free.
