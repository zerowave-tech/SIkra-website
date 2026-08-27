// Pulls the woff2 files Google Fonts would serve and rewrites the @font-face
// CSS to point at local copies. All three families are SIL OFL, so shipping
// them with the site is allowed.
import { writeFileSync, mkdirSync } from 'node:fs';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';

// Only the subsets the site can actually render. Chakra Petch and Space Grotesk
// have no Cyrillic at all; JetBrains Mono does, and the RU/UA marquee needs it.
const FAMILIES = [
  { spec: 'Chakra+Petch:wght@500;600;700', keep: ['latin', 'latin-ext'] },
  { spec: 'Space+Grotesk:wght@400;500;600;700', keep: ['latin', 'latin-ext'] },
  { spec: 'JetBrains+Mono:wght@400;500', keep: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'] },
];

mkdirSync('assets/fonts', { recursive: true });

let out = [
  '/* Self-hosted Google Fonts (SIL Open Font License).',
  '   Generated from the fonts.googleapis.com css2 payload — see',
  '   scripts/fetch-fonts.mjs. Served same-origin so the stylesheet is not a',
  '   render-blocking cross-origin request and no third party sees visitors. */',
  '',
].join('\n');

let total = 0;
for (const { spec, keep } of FAMILIES) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${spec}&display=swap`, {
    headers: { 'User-Agent': UA },
  })).text();

  // The payload is a flat list of "/* subset */ @font-face {...}" pairs.
  const blocks = [...css.matchAll(/\/\* ([\w-]+) \*\/\s*(@font-face \{[^}]*\})/g)];
  if (!blocks.length) throw new Error(`no @font-face blocks parsed for ${spec}`);

  for (const [, subset, block] of blocks) {
    if (!keep.includes(subset)) continue;
    const url = block.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)[1];
    const weight = block.match(/font-weight:\s*(\d+)/)[1];
    const family = block.match(/font-family:\s*'([^']+)'/)[1];
    const name = `${family.toLowerCase().replace(/\s+/g, '-')}-${weight}-${subset}.woff2`;

    const bin = Buffer.from(await (await fetch(url, { headers: { 'User-Agent': UA } })).arrayBuffer());
    writeFileSync(`assets/fonts/${name}`, bin);
    total += bin.length;

    out += `/* ${family} ${weight} ${subset} */\n`
         + block.replace(/url\([^)]+\)/, `url(/assets/fonts/${name})`)
                .replace(/\s+/g, ' ')
                .replace('{ ', '{\n  ')
                .replace(/; /g, ';\n  ')
                .replace(/;\n {2}\}/, ';\n}')
         + '\n\n';
    console.log(`${name.padEnd(42)} ${(bin.length / 1024).toFixed(1)} KiB`);
  }
}

writeFileSync('assets/fonts.css', out);
console.log(`\n${(total / 1024).toFixed(1)} KiB of woff2 across all subsets -> assets/fonts.css`);
