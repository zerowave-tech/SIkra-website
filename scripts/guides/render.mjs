// Renders the static /guides pages. Unlike the rest of the site these are
// plain HTML with no dc-runtime/React: the whole point is long-form copy that
// search engines index on the first, non-JS crawl pass, so nothing here should
// depend on script execution. Styling mirrors the app's dark tokens and reuses
// the same self-hosted fonts (the @font-face block is passed in from
// build-pages.mjs, read out of index.html, so it can never drift).
import { GUIDE_SLUGS, GUIDES_PUBLISHED, GUIDES_MODIFIED, UI } from './ui.mjs';
import en from './en.mjs';
import ru from './ru.mjs';
import uk from './uk.mjs';
import hu from './hu.mjs';

export const GUIDES = { en, ru, uk, hu };
export { GUIDE_SLUGS };

for (const [lang, set] of Object.entries(GUIDES)) {
  for (const slug of GUIDE_SLUGS) {
    if (!set[slug]) throw new Error(`guide "${slug}" is missing for lang "${lang}"`);
  }
}

const SITE = 'https://sikra.agency';
const LANGS = ['en', 'ru', 'uk', 'hu'];
const URL_SLUG = { en: '', ru: 'ru', uk: 'ua', hu: 'hu' };
const OG_LOCALE = { en: 'en_US', ru: 'ru_RU', uk: 'uk_UA', hu: 'hu_HU' };

const prefix = (lang) => (URL_SLUG[lang] ? '/' + URL_SLUG[lang] : '');
export const pageUrl = (lang, page) => prefix(lang) + (page === 'home' ? '/' : '/' + page);
export const hubUrl = (lang) => prefix(lang) + '/guides';
export const guideUrl = (lang, slug) => hubUrl(lang) + '/' + slug;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const ORG = { '@type': 'Organization', name: 'Sikra', url: SITE + '/', logo: SITE + '/assets/sikra-logo-dark.png' };

const CSS = `
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:#0A0A0B;color:#F6F6F5;font-family:'Space Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased;line-height:1.65}
::selection{background:#F6F6F5;color:#0A0A0B}
a{color:inherit}
.wrap{max-width:1120px;margin:0 auto;padding:0 32px}
header.top{position:sticky;top:0;z-index:10;background:rgba(10,10,11,.86);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.10)}
header.top .wrap{height:66px;display:flex;align-items:center;justify-content:space-between;gap:20px}
header.top img{height:24px;width:auto;display:block}
.nav{display:flex;align-items:center;gap:22px;font-size:14px}
.nav .pages{display:contents}
.nav a{text-decoration:none;color:#c9c9cf}
.nav a:hover,.nav a[aria-current]{color:#F6F6F5}
.nav a.btn,.nav a.btn:hover{color:#0A0A0B}
.langs{display:flex;border:1px solid rgba(255,255,255,.12);border-radius:6px;overflow:hidden}
.langs a{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;padding:6px 8px;text-decoration:none;color:#9C9CA2}
.langs a[aria-current]{background:#F6F6F5;color:#0A0A0B}
.btn{display:inline-block;font-weight:600;font-size:15px;padding:13px 24px;border-radius:7px;background:#F6F6F5;color:#0A0A0B;text-decoration:none;white-space:nowrap}
.btn:hover{opacity:.9}
.crumbs{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.04em;color:#5B5B61;margin:40px 0 22px}
.crumbs a{color:#9C9CA2;text-decoration:none}
.crumbs a:hover{color:#F6F6F5}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#9C9CA2}
h1,h2,h3{font-family:'Chakra Petch',sans-serif;line-height:1.15;letter-spacing:-.005em;text-wrap:balance}
h1{font-size:clamp(32px,4.2vw,52px);font-weight:700;margin:14px 0 22px}
h2{font-size:clamp(23px,2.4vw,30px);font-weight:600;margin:52px 0 16px;scroll-margin-top:90px}
h3{font-size:20px;font-weight:600;margin:0 0 10px}
.lead{font-size:19px;color:#c9c9cf;max-width:760px;margin:0}
.layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:64px;align-items:start;padding-bottom:40px}
article p,article li{font-size:17px;color:#d4d4d8}
article p{margin:0 0 16px}
article ul,article ol{margin:0 0 16px;padding-left:22px}
article li{margin:0 0 9px}
article li::marker{color:#5B5B61}
.toc{position:sticky;top:96px;border:1px solid rgba(255,255,255,.10);border-radius:12px;padding:20px 22px;background:#101012}
.toc .eyebrow{display:block;margin-bottom:12px;font-size:11px}
.toc ol{margin:0;padding-left:18px;font-size:14px;line-height:1.5}
.toc li{margin:0 0 8px;color:#5B5B61}
.toc a{color:#9C9CA2;text-decoration:none}
.toc a:hover{color:#F6F6F5}
details{border-top:1px solid rgba(255,255,255,.10);padding:16px 0}
details:last-of-type{border-bottom:1px solid rgba(255,255,255,.10)}
summary{cursor:pointer;font-weight:600;font-size:17px;list-style:none;display:flex;justify-content:space-between;gap:16px}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-family:'JetBrains Mono',monospace;color:#9C9CA2;flex:0 0 auto}
details[open] summary::after{content:'\\2212'}
details p{margin:12px 0 0}
.cta{margin:56px 0 0;border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:36px;background:#101012;display:flex;justify-content:space-between;align-items:center;gap:28px;flex-wrap:wrap}
.cta h2{margin:0 0 8px;font-size:26px}
.cta p{margin:0;color:#9C9CA2;max-width:560px}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin:0 0 20px}
.card{display:flex;flex-direction:column;gap:10px;border:1px solid rgba(255,255,255,.10);border-radius:12px;padding:24px;background:#101012;text-decoration:none;transition:border-color .2s,transform .2s}
.card:hover{border-color:rgba(255,255,255,.3);transform:translateY(-2px)}
.card .no{font-family:'JetBrains Mono',monospace;font-size:12px;color:#5B5B61}
.card p{margin:0;font-size:15px;color:#9C9CA2;line-height:1.55}
.card .more{margin-top:auto;font-size:14px;font-weight:600}
.related{border-top:1px solid rgba(255,255,255,.10);margin-top:64px;padding-top:8px}
footer.bottom{border-top:1px solid rgba(255,255,255,.10);margin-top:72px}
footer.bottom .wrap{padding-top:36px;padding-bottom:36px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-size:14px;color:#9C9CA2}
footer.bottom p{margin:0;max-width:420px}
footer.bottom nav{display:flex;gap:18px;flex-wrap:wrap}
footer.bottom a{color:#9C9CA2;text-decoration:none}
footer.bottom a:hover{color:#F6F6F5}
.meta{font-family:'JetBrains Mono',monospace;font-size:12px;color:#5B5B61;margin-top:18px}
@media (max-width:900px){
  .nav .pages{display:none}
  .layout{grid-template-columns:1fr;gap:0}
  .toc{position:static;margin:28px 0 0}
}
@media (max-width:560px){
  .wrap{padding:0 18px}
  header.top .btn{display:none}
  .cta{padding:26px}
}`;

function head({ lang, title, desc, path, alternates, fontCss, jsonLd, type = 'website' }) {
  const url = SITE + path;
  const hreflang = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE}${alternates(l)}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${SITE}${alternates('en')}">`;
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/assets/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="/assets/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#0A0A0B">
<meta name="referrer" content="strict-origin-when-cross-origin">
<link rel="canonical" href="${url}">
${hreflang}
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="Sikra">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE}/assets/og-image.png">
${jsonLd.map(ld).join('\n')}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VM756WGCL0"></script>
<script src="/assets/analytics.js" defer></script>
${fontCss}
<style>${CSS}</style>
</head>
<body>`;
}

function topBar(lang, langHref) {
  const U = UI[lang];
  const langs = LANGS.map((l) => `<a href="${langHref(l)}" hreflang="${l}"${l === lang ? ' aria-current="true"' : ''}>${URL_SLUG[l] || 'en'}</a>`).join('');
  return `<header class="top"><div class="wrap">
<a href="${pageUrl(lang, 'home')}" aria-label="Sikra"><img src="/assets/sikra-logo-dark.webp" width="180" height="80" alt="Sikra"></a>
<nav class="nav" aria-label="Sikra">
<span class="pages">
<a href="${pageUrl(lang, 'services')}">${esc(U.services)}</a>
<a href="${pageUrl(lang, 'stack')}">${esc(U.stack)}</a>
<a href="${hubUrl(lang)}" aria-current="page">${esc(U.guides)}</a>
</span>
<span class="langs">${langs}</span>
<a class="btn" href="${pageUrl(lang, 'contact')}" style="padding:9px 18px;font-size:13.5px">${esc(U.ctaBtn)}</a>
</nav>
</div></header>`;
}

function ctaBox(lang) {
  const U = UI[lang];
  return `<aside class="cta"><div><h2>${esc(U.ctaTitle)}</h2><p>${esc(U.ctaSub)}</p></div><a class="btn" href="${pageUrl(lang, 'contact')}">${esc(U.ctaBtn)}</a></aside>`;
}

function footer(lang) {
  const U = UI[lang];
  return `<footer class="bottom"><div class="wrap">
<p>${esc(U.footer)}</p>
<nav>
<a href="${pageUrl(lang, 'home')}">${esc(U.home)}</a>
<a href="${pageUrl(lang, 'services')}">${esc(U.services)}</a>
<a href="${pageUrl(lang, 'stack')}">${esc(U.stack)}</a>
<a href="${hubUrl(lang)}">${esc(U.guides)}</a>
<a href="${pageUrl(lang, 'contact')}">${esc(U.contact)}</a>
<a href="${pageUrl(lang, 'privacy')}">${esc(U.privacy)}</a>
</nav>
</div></footer>
</body>
</html>
`;
}

function cards(lang, slugs) {
  const U = UI[lang];
  return `<div class="cards">${slugs.map((slug) => {
    const g = GUIDES[lang][slug];
    const no = String(GUIDE_SLUGS.indexOf(slug) + 1).padStart(2, '0');
    return `<a class="card" href="${guideUrl(lang, slug)}"><span class="no">${no}</span><h3>${esc(g.title)}</h3><p>${esc(g.desc)}</p><span class="more">${esc(U.read)} →</span></a>`;
  }).join('')}</div>`;
}

function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + path })),
  };
}

export function renderHub(lang, fontCss) {
  const U = UI[lang];
  const path = hubUrl(lang);
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'CollectionPage', name: U.hubTitle, description: U.hubDesc,
      url: SITE + path, inLanguage: lang, publisher: ORG,
      hasPart: GUIDE_SLUGS.map((s) => ({ '@type': 'Article', headline: GUIDES[lang][s].title, url: SITE + guideUrl(lang, s) })),
    },
    breadcrumbLd([[U.home, pageUrl(lang, 'home')], [U.guides, path]]),
  ];
  return head({ lang, title: U.hubSeoTitle, desc: U.hubDesc, path, alternates: hubUrl, fontCss, jsonLd })
    + topBar(lang, hubUrl)
    + `<main class="wrap">
<div class="crumbs"><a href="${pageUrl(lang, 'home')}">${esc(U.home)}</a> / ${esc(U.guides)}</div>
<span class="eyebrow">${esc(U.guides)}</span>
<h1>${esc(U.hubTitle)}</h1>
<p class="lead" style="margin-bottom:44px">${esc(U.hubIntro)}</p>
${cards(lang, GUIDE_SLUGS)}
${ctaBox(lang)}
</main>`
    + footer(lang);
}

export function renderGuide(lang, slug, fontCss) {
  const U = UI[lang];
  const g = GUIDES[lang][slug];
  const path = guideUrl(lang, slug);
  const ids = g.sections.map((_, i) => `s${i + 1}`);
  const faqId = 'faq';

  const body = g.sections.map((s, i) => {
    const ps = (s.p || []).map((t) => `<p>${esc(t)}</p>`).join('\n');
    const list = s.list ? `<ul>${s.list.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : '';
    return `<section><h2 id="${ids[i]}">${esc(s.h)}</h2>\n${ps}\n${list}</section>`;
  }).join('\n');

  const faq = g.faq.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n');

  const toc = `<nav class="toc" aria-label="${esc(U.onThisPage)}"><span class="eyebrow">${esc(U.onThisPage)}</span><ol>${
    g.sections.map((s, i) => `<li><a href="#${ids[i]}">${esc(s.h)}</a></li>`).join('')
  }<li><a href="#${faqId}">${esc(U.faq)}</a></li></ol></nav>`;

  // Three neighbours, wrapping around, so every guide links to others and
  // the internal link graph has no dead ends.
  const at = GUIDE_SLUGS.indexOf(slug);
  const related = [1, 2, 3].map((d) => GUIDE_SLUGS[(at + d) % GUIDE_SLUGS.length]);

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      headline: g.title, description: g.desc, inLanguage: lang,
      mainEntityOfPage: SITE + path, url: SITE + path,
      image: SITE + '/assets/og-image.png',
      datePublished: GUIDES_PUBLISHED, dateModified: GUIDES_MODIFIED,
      author: ORG, publisher: ORG,
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: g.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    breadcrumbLd([[U.home, pageUrl(lang, 'home')], [U.guides, hubUrl(lang)], [g.title, path]]),
  ];

  return head({ lang, title: g.seoTitle, desc: g.desc, path, alternates: (l) => guideUrl(l, slug), fontCss, jsonLd, type: 'article' })
    + topBar(lang, (l) => guideUrl(l, slug))
    + `<main class="wrap">
<div class="crumbs"><a href="${pageUrl(lang, 'home')}">${esc(U.home)}</a> / <a href="${hubUrl(lang)}">${esc(U.guides)}</a></div>
<span class="eyebrow">${esc(U.guides)}</span>
<h1>${esc(g.title)}</h1>
<p class="lead">${esc(g.lead)}</p>
<p class="meta">Sikra · ${esc(U.updated)} <time datetime="${GUIDES_MODIFIED}">${GUIDES_MODIFIED}</time></p>
<div class="layout">
<article>
${body}
<section><h2 id="${faqId}">${esc(U.faq)}</h2>
${faq}
</section>
${ctaBox(lang)}
</article>
${toc}
</div>
<section class="related"><h2>${esc(U.related)}</h2>${cards(lang, related)}</section>
</main>`
    + footer(lang);
}
