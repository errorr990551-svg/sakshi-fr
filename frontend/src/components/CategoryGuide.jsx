import { handleLinkClick, withSlash } from '../utils/router';

// Renders "[anchor](/path/)" markup inside guide text as internal links.
function RichText({ text }) {
  const parts = [];
  const re = /\[([^\]]+)\]\((\/[^)]*)\)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const href = m[2];
    parts.push(
      <a key={m.index} href={withSlash(href)} onClick={(e) => handleLinkClick(e, href)} style={{ color: 'var(--primary-yellow)' }}>{m[1]}</a>
    );
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Table({ table }) {
  return (
    <div style={{ overflowX: 'auto', margin: '1.25rem 0 1.5rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <caption style={{ textAlign: 'left', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{table.caption}</caption>
        <thead>
          <tr>{table.head.map((h) => <th key={h} scope="col" style={{ textAlign: 'left', padding: '0.6rem', borderBottom: '2px solid var(--border-color)', color: 'var(--primary-yellow)' }}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((r) => (
            <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ padding: '0.6rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)', whiteSpace: c.length <= 14 ? 'nowrap' : undefined }}><RichText text={c} /></td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({ block }) {
  return (
    <>
      {block.paragraphs?.map((p, i) => <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}><RichText text={p} /></p>)}
      {block.table && <Table table={block.table} />}
      {block.bullets && (
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.75, paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          {block.bullets.map((b, i) => <li key={i} style={{ marginBottom: '0.4rem' }}><RichText text={b} /></li>)}
        </ul>
      )}
    </>
  );
}

// Official pages for the standards a guide names, plus titles for the sources guides list.
// The www.astm.org/Standards/ links redirect to the current edition (checked 2026-11-21).
const STANDARDS = [
  [/\bA270\b/, 'https://www.astm.org/Standards/A270.htm', 'ASTM A270/A270M: Stainless Steel Sanitary Tubing (ASTM International)'],
  [/\bA269\b/, 'https://www.astm.org/Standards/A269.htm', 'ASTM A269/A269M: Stainless Steel Tubing for General Service (ASTM International)'],
  [/\bA249\b/, 'https://www.astm.org/Standards/A249.htm', 'ASTM A249/A249M: Welded Austenitic Steel Boiler, Heat-Exchanger and Condenser Tubes (ASTM International)'],
  [/\bA312\b/, 'https://www.astm.org/Standards/A312.htm', 'ASTM A312/A312M: Seamless, Welded and Heavily Cold Worked Stainless Steel Pipes (ASTM International)'],
  [/\bA967\b/, 'https://www.astm.org/Standards/A967.htm', 'ASTM A967/A967M: Chemical Passivation Treatments for Stainless Steel Parts (ASTM International)'],
  [/\bBPE\b/, 'https://www.asme.org/codes-standards/find-codes-standards/bpe-bioprocessing-equipment', 'ASME BPE: Bioprocessing Equipment standard (ASME)'],
];
const SOURCE_TITLES = {
  'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en': 'EudraLex Volume 4: EU Good Manufacturing Practice guidelines (European Commission)',
  'https://www.3-a.org/': '3-A Sanitary Standards, Inc.',
  'https://www.alfalaval.com/products/fluid-handling/din-11850-en-10357/': 'DIN 11850 and EN 10357 hygienic tube (Alfa Laval)',
  'https://www.dinmedia.de/en/standard/din-32676/392760456': 'DIN 32676: clamp connections for stainless steel tubes (DIN Media)',
  'https://www.iso.org/standard/6810.html': 'ISO 2037:1992 Stainless steel tubes for the food industry, withdrawn (ISO)',
  'https://www.ehedg.org/guidelines-working-groups/guidelines': 'EHEDG hygienic design guidelines',
  'https://apeda.gov.in/node/31': 'Mango pulp export information (APEDA)',
  'https://en.wikipedia.org/wiki/Clean-in-place': 'Clean-in-place (Wikipedia)',
  'https://en.wikipedia.org/wiki/Good_manufacturing_practice': 'Good manufacturing practice (Wikipedia)',
  'https://en.wikipedia.org/wiki/ISO_13485': 'ISO 13485 (Wikipedia)',
  'https://en.wikipedia.org/wiki/ISO_14644': 'ISO 14644 cleanroom standards (Wikipedia)',
  'https://en.wikipedia.org/wiki/Water_for_injection': 'Water for injection (Wikipedia)',
};

function references(guide) {
  const text = JSON.stringify(guide.sections) + JSON.stringify(guide.faqs || []);
  const refs = STANDARDS.filter(([re]) => re.test(text)).map(([, url, title]) => ({ url, title }));
  for (const url of guide.sources || []) {
    if (!refs.some((r) => r.url === url)) refs.push({ url, title: SOURCE_TITLES[url] || url });
  }
  return refs;
}

export default function CategoryGuide({ guide }) {
  const refs = references(guide);
  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-dark-900)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {guide.sections.map((s) => (
          <div key={s.h2} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{s.h2}</h2>
            <Block block={s} />
            {s.subsections?.map((sub) => (
              <div key={sub.h3}>
                <h3 style={{ fontSize: '1.2rem', margin: '1.5rem 0 0.75rem', color: 'var(--text-primary)' }}>{sub.h3}</h3>
                <Block block={sub} />
              </div>
            ))}
            {s.cta && (
              <a href={withSlash(s.cta.href)} onClick={(e) => handleLinkClick(e, s.cta.href)} className="btn btn-primary" style={{ display: 'inline-block', marginTop: '0.5rem' }}>{s.cta.label}</a>
            )}
          </div>
        ))}
        {guide.faqs?.length > 0 && <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Frequently Asked Questions</h2>}
        {guide.faqs?.map((f) => (
          <div key={f.q} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{f.q}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{f.a}</p>
          </div>
        ))}
        {refs.length > 0 && (
          <>
            <h2 style={{ fontSize: '1.2rem', margin: '2rem 0 0.75rem', color: 'var(--text-primary)' }}>References</h2>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.75, paddingLeft: '1.25rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
              {refs.map((r) => <li key={r.url}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-yellow)' }}>{r.title}</a></li>)}
            </ul>
          </>
        )}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Last updated {guide.updated}</p>
      </div>
    </section>
  );
}
