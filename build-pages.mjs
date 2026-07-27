// Generates per-page folders (/services, /stack, /about, /feedback, /contact)
// and 404.html from index.html, so GitHub Pages serves real URLs with 200.
// Run after every change to index.html:  node build-pages.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const SITE = 'https://sikra.agency';
const seo = {
  services: { title: 'Services: Web Development, Mobile Apps, Design | Sikra', desc: 'Sikra services: turnkey products, mobile apps, UI/UX design, Supabase backend and deployment. We take your product from idea to launch.' },
  stack:    { title: 'Technology Stack | Sikra', desc: "Sikra's tech stack: React, TypeScript, Supabase, PostgreSQL, React Native — proven tools for web and mobile products." },
  about:    { title: 'About Sikra — Software Development Studio', desc: 'Sikra is a small full-cycle software studio. Transparent timelines, engineering culture and products that solve real business problems.' },
  feedback: { title: 'Client Feedback | Sikra', desc: 'What clients say about working with Sikra — MVP launches, Supabase migrations, mobile apps and design systems.' },
  contact:  { title: 'Contact Us — Start a Project | Sikra', desc: 'Get in touch with Sikra to discuss your project. We reply within one business day with a plan for first steps.' },
};

const src = readFileSync('index.html', 'utf8');

for (const [page, m] of Object.entries(seo)) {
  const url = `${SITE}/${page}`;
  const out = src
    .replace(/<title>[^<]*<\/title>/, `<title>${m.title}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${url}$2`)
    .replace(/(<meta name="description" content=")[^"]*(">)/, `$1${m.desc}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${m.title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${m.desc}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(">)/, `$1${m.title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(">)/, `$1${m.desc}$2`);
  mkdirSync(page, { recursive: true });
  writeFileSync(`${page}/index.html`, out);
  console.log(`wrote ${page}/index.html`);
}

writeFileSync('404.html', src);
console.log('wrote 404.html');
