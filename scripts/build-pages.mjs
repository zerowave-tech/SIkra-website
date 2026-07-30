// Generates per-language, per-page static files (e.g. /ru/services/index.html)
// from the single index.html source, so static hosting serves a real 200 with
// correct <title>/canonical/hreflang/JSON-LD per URL, plus a <noscript>
// fallback with real crawlable text (translations are extracted straight out
// of index.html's own Component.buildDict(), so there is no separate copy of
// the copy to keep in sync).
//
// Run after every change to index.html:  node scripts/build-pages.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import vm from 'node:vm';

const SITE = 'https://sikra.agency';
const LANGS = ['en', 'ru', 'uk', 'hu'];
const OG_LOCALE = { en: 'en_US', ru: 'ru_RU', uk: 'uk_UA', hu: 'hu_HU' };
// Sitemap-worthy pages (feedback/privacy stay generated but unlisted, matching the hidden nav items)
const SITEMAP_PAGES = ['home', 'services', 'stack', 'about', 'contact'];
const ALL_PAGES = [...SITEMAP_PAGES, 'feedback', 'privacy'];

// index.html is both the hand-edited source AND (for lang=en/page=home) a
// build output — strip anything a previous run injected before treating it
// as the template, so re-running this script stays idempotent instead of
// stacking up duplicate <link>/<noscript> tags on every pass.
// Normalize to LF up front so every literal/regex match below behaves the
// same regardless of the checkout's line-ending config (e.g. Windows
// core.autocrlf=true rewrites the working tree to CRLF, which would
// otherwise make '\n'-based matches — and the noscript reinjection below —
// silently miss).
let src = readFileSync('index.html', 'utf8').replace(/\r\n/g, '\n');
src = src.replace(/<link rel="alternate"[^>]*>\n?/g, '');
src = src.replace(/<noscript>[\s\S]*?<\/noscript>\n?/g, '');

// ---- 1. Pull the live translation dictionary straight out of index.html ----
const scriptMatch = src.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/);
if (!scriptMatch) throw new Error('Could not find the dc component script in index.html');

class DCLogic {
  constructor(props) { this.props = props || {}; }
  setState() {}
}
const context = { DCLogic };
vm.createContext(context);
vm.runInContext(scriptMatch[1] + '\nvar __EXPORTED__ = Component;', context);
const inst = new context.__EXPORTED__({ defaultLang: 'en' });
const DICT = inst.buildDict();
const TOOLS = inst.TOOLS;

// Small strings computed at render-time in renderVals() rather than stored in
// buildDict() — mirrored here since they're not part of the extracted dict.
const EXTRA = {
  en: { locLabel: 'Location', calendarLabel: 'Book a call', calendarHint: 'Opens the calendar to pick a time' },
  ru: { locLabel: 'Локация', calendarLabel: 'Записаться на звонок', calendarHint: 'Откроется календарь для выбора времени' },
  uk: { locLabel: 'Локація', calendarLabel: 'Записатися на дзвінок', calendarHint: 'Відкриється календар для вибору часу' },
  hu: { locLabel: 'Helyszín', calendarLabel: 'Foglalj hívást', calendarHint: 'Megnyitja a naptárt az időpont kiválasztásához' },
};

// URL segment per language — kept separate from the hreflang/lang-attribute
// code, which must stay a valid ISO 639-1 tag ('uk' for Ukrainian; 'ua' is a
// country code, not a language code, and would be an invalid hreflang value).
const URL_SLUG = { en: '', ru: 'ru', uk: 'ua', hu: 'hu' };
const urlFor = (lang, page) => (URL_SLUG[lang] ? '/' + URL_SLUG[lang] : '') + (page === 'home' ? '/' : '/' + page);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---- 2. Build a real, crawlable <noscript> fragment per language × page ----
function navHtml(lang, page) {
  const L = DICT[lang];
  const navPages = ['services', 'stack', 'about', 'contact']; // feedback hidden, matches live nav
  const links = navPages.map((p) => {
    const label = L.nav[['services', 'stack', 'about', 'feedback', 'contact'].indexOf(p)];
    return `<a href="${urlFor(lang, p)}"${p === page ? ' aria-current="page"' : ''}>${esc(label)}</a>`;
  }).join(' · ');
  const home = `<a href="${urlFor(lang, 'home')}">Sikra</a>`;
  const langSwitch = LANGS.map(l => `<a href="${urlFor(l, page)}" hreflang="${l}">${(URL_SLUG[l] || 'en').toUpperCase()}</a>`).join(' ');
  return `<nav>${home} · ${links}</nav><p>${langSwitch}</p>`;
}

function pageBody(lang, page) {
  const L = DICT[lang];
  const X = EXTRA[lang];
  switch (page) {
    case 'home':
      return `
<h1>${esc(L.hero.title)}</h1>
<p>${esc(L.hero.sub)}</p>
<section><h2>${esc(L.secServices.title)}</h2><p>${esc(L.secServices.sub)}</p>
${L.services.map(s => `<article><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></article>`).join('\n')}
</section>
<section><h2>${esc(L.secTech.title)}</h2><p>${esc(L.secTech.sub)}</p>
${L.tech.map(t => `<article><h3>${esc(t.t)}</h3><p>${esc(t.d)}</p></article>`).join('\n')}
</section>
<p>${esc(L.ctaBand.title)} ${esc(L.ctaBand.sub)}</p>`;
    case 'services':
      return `
<h1>${esc(L.secServices.title)}</h1>
<p>${esc(L.secServices.sub)}</p>
${L.services.map(s => `<article><h2>${esc(s.t)}</h2><p>${esc(s.d)}</p><p>${s.tags.map(esc).join(', ')}</p></article>`).join('\n')}`;
    case 'stack':
      return `
<h1>${esc(L.secTech.title)}</h1>
<p>${esc(L.secTech.sub)}</p>
${L.tech.map((t, i) => {
        const key = ['front', 'back', 'uiux', 'mobile'][i];
        return `<article><h2>${esc(t.t)}</h2><p>${esc(t.d)}</p><p>${(TOOLS[key] || []).map(esc).join(', ')}</p></article>`;
      }).join('\n')}`;
    case 'about':
      return `
<h1>${esc(L.secAbout.title)}</h1>
<p>${esc(L.secAbout.p1)}</p>
<p>${esc(L.secAbout.p2)}</p>
<h2>${esc(L.valuesTitle)}</h2>
${L.values.map(v => `<article><h3>${esc(v.t)}</h3><p>${esc(v.d)}</p></article>`).join('\n')}
<h2>${esc(L.processTitle)}</h2>
${L.process.map(p => `<article><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></article>`).join('\n')}`;
    case 'contact':
      return `
<h1>${esc(L.secContact.title)}</h1>
<p>${esc(L.secContact.sub)}</p>
<p><a href="https://cal.com/sikra-agency/30min">${esc(X.calendarLabel)}</a> — ${esc(X.calendarHint)}</p>
<p>${esc(X.locLabel)}: Budapest · Kyiv · Remote</p>`;
    case 'feedback':
      return `
<h1>${esc(L.secFeed.title)}</h1>
<p>${esc(L.secFeed.sub)}</p>
${L.feed.map(f => `<blockquote><p>${esc(f.q)}</p><footer>${esc(f.n)}, ${esc(f.r)}</footer></blockquote>`).join('\n')}`;
    case 'privacy':
      return `
<h1>${esc(L.secPrivacy.title)}</h1>
<p>${esc(L.secPrivacy.updated)}</p>
<p>${esc(L.secPrivacy.intro)}</p>
${L.secPrivacy.sections.map(s => {
        const items = (s.items || []).length ? `<ul>${s.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : '';
        const tail = s.d2 ? `<p>${esc(s.d2)}</p>` : '';
        return `<article><h2>${esc(s.t)}</h2><p>${esc(s.d)}</p>${items}${tail}</article>`;
      }).join('\n')}`;
    default:
      return '';
  }
}

function noscriptBlock(lang, page) {
  return `<noscript><div style="max-width:800px;margin:0 auto;padding:32px;font-family:sans-serif;color:#F6F6F5;background:#0A0A0B;">${navHtml(lang, page)}${pageBody(lang, page)}</div></noscript>`;
}

// ---- 3. Assemble one static file per language × page ----
function buildFile(lang, page) {
  const L = DICT[lang];
  const seo = L.seo[page] || L.seo.home;
  const url = SITE + urlFor(lang, page);

  let html = src;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(seo.title)}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(">)/, `$1${esc(seo.desc)}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:locale" content=")[^"]*(">)/, `$1${OG_LOCALE[lang]}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${esc(seo.title)}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${esc(seo.desc)}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${url}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(">)/, `$1${esc(seo.title)}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(">)/, `$1${esc(seo.desc)}$2`);
  html = html.replace(/("description":")[^"]*(",)/, `$1${esc(seo.desc)}$2`);
  html = html.replace(/("url":")https:\/\/sikra\.agency\/("[,}])/, `$1${url}$2`);

  // hreflang alternates go in the *real* <head>, not the dc <helmet> — the
  // runtime's helmet mounter dedupes <link> tags by href alone, and hreflang
  // "en"/"x-default" share a href with <link rel="canonical">, so they'd get
  // silently dropped if placed inside <helmet> like the other SEO tags.
  const hreflangTags = LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${SITE}${urlFor(l, page)}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${SITE}${urlFor('en', page)}">`;
  html = html.replace('</head>', `${hreflangTags}\n</head>`);

  // real crawlable content + internal links, sitting outside <x-dc> (untouched by the JS mount)
  html = html.replace('<body>\n<x-dc>', `<body>\n${noscriptBlock(lang, page)}\n<x-dc>`);

  return html;
}

for (const lang of LANGS) {
  for (const page of ALL_PAGES) {
    const slug = URL_SLUG[lang];
    const dir = page === 'home' ? (slug || '.') : (slug ? `${slug}/${page}` : page);
    if (dir !== '.') mkdirSync(dir, { recursive: true });
    const outPath = dir === '.' ? 'index.html' : `${dir}/index.html`;
    writeFileSync(outPath, buildFile(lang, page));
    console.log(`wrote ${outPath}`);
  }
}

// 404.html stays English, at root
writeFileSync('404.html', buildFile('en', 'home'));
console.log('wrote 404.html');

// ---- 4. Sitemap with hreflang alternates per URL ----
const urlBlocks = [];
for (const page of SITEMAP_PAGES) {
  for (const lang of LANGS) {
    const alternates = LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${urlFor(l, page)}"/>`).join('\n')
      + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${urlFor('en', page)}"/>`;
    urlBlocks.push(`  <url>
    <loc>${SITE}${urlFor(lang, page)}</loc>
${alternates}
    <changefreq>${page === 'home' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === 'home' ? '1.0' : page === 'contact' ? '0.9' : '0.7'}</priority>
  </url>`);
  }
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlBlocks.join('\n')}
</urlset>
`;
writeFileSync('sitemap.xml', sitemap);
console.log('wrote sitemap.xml');
