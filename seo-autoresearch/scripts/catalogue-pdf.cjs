// Prints frontend/public/Sakshi_Forge_Master_Product_Catalogue.pdf (the /catalogue/ download) from the checked guide data
// of /resources/download-ep-pipe-catalogue/ and /resources/ep-pipe-size-chart/, so the PDF states nothing the site does not.
// Run from the repo root after editing those guides: node seo-autoresearch/scripts/catalogue-pdf.cjs
const { chromium } = require('playwright');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '../..');
const OUT = path.join(ROOT, 'frontend/public/Sakshi_Forge_Master_Product_Catalogue.pdf');
const SITE = 'https://steelmanufacturer.in';
const EDITION = 'November 2026';
const PAGES = 3; // stated on /catalogue/

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Guide text links as [anchor](/path/); in the PDF they point at the live page
const md = (s) => esc(s).replace(/\[([^\]]+)\]\((\/[^)]*)\)/g, (_, a, h) => `<a href="${SITE}${h}">${a}</a>`);
const ul = (items) => `<ul>${items.map((b) => `<li>${md(b)}</li>`).join('')}</ul>`;
const table = (head, rows, caption) =>
  `<table><caption>${esc(caption)}</caption><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>` +
  `<tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;

(async () => {
  const { STANDARD_GUIDES } = await import(pathToFileURL(path.join(ROOT, 'frontend/src/data/standardGuides.js')).href);
  const section = (page, h2) => {
    const s = STANDARD_GUIDES[page].sections.find((x) => x.h2 === h2);
    if (!s) throw new Error(`${page} has no section "${h2}"; update this script`);
    return s;
  };
  const CAT = '/resources/download-ep-pipe-catalogue/';
  const SIZES = '/resources/ep-pipe-size-chart/';
  const range = section(CAT, 'Electropolished Pipe and Tube Range at a Glance').table;
  // The Details column becomes a link on the product name
  const rangeRows = range.rows.map(([product, std, grades, finish, details]) => {
    const href = (details.match(/\((\/[^)]*)\)/) || [])[1];
    return [href ? `[${product}](${href})` : product, std, grades, finish];
  });
  const tube = section(SIZES, 'Hygienic Tube: ASME BPE OD Series With Weight').table;
  const pipeSection = section(SIZES, 'Stainless Steel Pipe: ASME B36.19M Schedules With Weight');
  const pipe = pipeSection.table;

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Sakshi Forge – Electropolished Pipes and Tubes: Product and Specification Sheet (${EDITION})</title>
<style>
  @page { size: A4; margin: 16mm 15mm 18mm; }
  body { font-family: Inter, 'DejaVu Sans', sans-serif; color: #1f2937; font-size: 9.5pt; line-height: 1.45; margin: 0; }
  header { border-bottom: 3px solid #d4a017; padding-bottom: 8px; margin-bottom: 12px; }
  header .brand { font-size: 10pt; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #9a7400; }
  h1 { font-size: 19pt; margin: 2px 0 2px; color: #111827; }
  header .sub { color: #4b5563; }
  h2 { font-size: 12.5pt; margin: 16px 0 6px; color: #111827; break-after: avoid; }
  p { margin: 0 0 6px; }
  ul { margin: 0 0 6px; padding-left: 16px; } li { margin: 0 0 3px; }
  table { width: 100%; border-collapse: collapse; margin: 4px 0 8px; font-size: 8.8pt; break-inside: avoid; }
  caption { text-align: left; font-weight: 600; color: #374151; padding-bottom: 3px; }
  th { background: #f3f4f6; text-align: left; font-weight: 600; }
  th, td { border: 1px solid #d1d5db; padding: 3px 6px; vertical-align: top; }
  a { color: #8a6500; text-decoration: none; }
  .note { color: #4b5563; font-size: 8.8pt; }
  .page-break { break-before: page; }
  .keep { break-inside: avoid; }
  .contact { border: 1px solid #d1d5db; border-left: 4px solid #d4a017; padding: 8px 12px; margin-top: 14px; break-inside: avoid; }
  .contact strong { color: #111827; }
</style></head><body>
<header>
  <div class="brand">Sakshi Forge · Mumbai</div>
  <h1>Electropolished Pipes and Tubes</h1>
  <div class="sub">Product and specification sheet · ${EDITION} edition · <a href="${SITE}/">steelmanufacturer.in</a></div>
</header>
<p>This sheet lists the electropolished (EP) stainless steel pipes and tubes we quote: products, standards, grades and finishes, the documents supplied with every order, the standard size series, and what to include in an enquiry. We reply with a quotation within 24 hours of a complete enquiry.</p>

<h2>1. Products, standards and grades</h2>
${table(['Product', 'Standards', 'Grades', 'Finish options'], rangeRows, range.caption)}

<h2>2. Finishes we quote</h2>
${ul(section(CAT, 'Finishes We Quote').bullets)}

<h2>3. Documents with every order</h2>
${ul(section(CAT, 'Documents With Every Order').bullets)}

<h2 class="page-break">4. Standard sizes</h2>
<p>${md(section(CAT, 'Sizes').paragraphs[0])}</p>
${table(tube.head, tube.rows, tube.caption)}
<p class="note">${md(pipeSection.paragraphs[0])}</p>
${table(pipe.head, pipe.rows, pipe.caption)}

<div class="keep">
<h2>5. What to include in your enquiry</h2>
${ul(section(CAT, 'What to Include in Your Enquiry').bullets)}

<div class="contact">
  <strong>Sakshi Forge</strong><br>
  Shop No. 05, Ground Floor, 113/117, Dr. MG Mahimtura Marg, 3rd Kumbharwada, Mumbai, Maharashtra 400004<br>
  Phone: +91 82913 66340 · Email: <a href="mailto:info@steelmanufacturer.in">info@steelmanufacturer.in</a> · Enquiries: <a href="${SITE}/contact-us/">steelmanufacturer.in/contact-us/</a><br>
  Quotation within 24 hours of a complete enquiry. Dispatch and transit are confirmed in writing with each quotation.
</div>
</div>
</body></html>`;

  // Self-check: the PDF must not carry claims the site may not make (owner rules)
  const text = html.replace(/<[^>]+>/g, ' ');
  for (const bad of [/\bDIN\b/, /\bEN 10357\b/, /\bSMS\b/, /sales@/i, /\bin stock\b/i, /\bMOQ\b/, /₹|\bRs\.?\s?\d/, /\bTaloja\b/i]) {
    if (bad.test(text)) throw new Error(`catalogue text matches ${bad}; fix the guide data first`);
  }
  for (const must of ['info@steelmanufacturer.in', '+91 82913 66340', 'EN 10204 3.1', 'ISO 9001:2015']) {
    if (!text.includes(must)) throw new Error(`catalogue text lacks "${must}"`);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  const pdf = await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="font-family: Inter, 'DejaVu Sans', sans-serif; font-size: 7.5pt; color: #6b7280; width: 100%; padding: 0 15mm; display: flex; justify-content: space-between;">
      <span>Sakshi Forge · steelmanufacturer.in · +91 82913 66340 · info@steelmanufacturer.in</span>
      <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
    margin: { top: '16mm', bottom: '18mm', left: '15mm', right: '15mm' },
  });
  await browser.close();
  // CataloguePage.jsx states the page count, so a layout change that adds a page must update that page too
  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page\b(?!s)/g) || []).length;
  if (pages !== PAGES) throw new Error(`PDF has ${pages} pages, CataloguePage.jsx says ${PAGES}; update both`);
  console.log(`wrote ${path.relative(ROOT, OUT)} (${pages} pages)`);
})().catch((e) => { console.error(e.message); process.exit(1); });
