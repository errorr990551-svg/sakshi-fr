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
    <div style={{ overflowX: 'auto', margin: '1.25rem 0 1.5rem', containerType: 'inline-size' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        {/* Pinned and capped to the visible width, so a wide table on a phone does not clip its caption. */}
        <caption style={{ textAlign: 'left', color: 'var(--text-secondary)', marginBottom: '0.5rem', position: 'sticky', left: 0, maxWidth: '100cqw' }}>{table.caption}</caption>
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
      {block.figure && (
        <figure style={{ margin: '1.25rem 0 1.5rem' }}>
          <img src={block.figure.src} alt={block.figure.alt} width={block.figure.width} height={block.figure.height} loading="lazy" decoding="async" style={{ width: '100%', maxWidth: `${block.figure.width}px`, height: 'auto', display: 'block' }} />
          <figcaption style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{block.figure.caption}</figcaption>
        </figure>
      )}
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
  // ASME pages opened and checked 2026-11-27
  [/\bB16\.11\b/, 'https://www.asme.org/codes-standards/find-codes-standards/b16-11-forged-fittings-socket-welding-threaded', 'ASME B16.11: Forged Fittings, Socket-Welding and Threaded (ASME)'],
  [/\bB31\.3\b/, 'https://www.asme.org/codes-standards/find-codes-standards/b31-3-process-piping', 'ASME B31.3: Process Piping (ASME)'],
  // ASME pages opened and checked 2026-11-28
  [/\bB16\.5\b/, 'https://www.asme.org/codes-standards/find-codes-standards/b16-5-pipe-flanges-flanged-fittings-nps-1-2-nps-24-metric-inch-standard', 'ASME B16.5: Pipe Flanges and Flanged Fittings, NPS 1/2 through NPS 24 (ASME)'],
  [/\bB16\.9\b/, 'https://www.asme.org/codes-standards/find-codes-standards/b16-9-factory-made-wrought-buttwelding-fittings', 'ASME B16.9: Factory-Made Wrought Buttwelding Fittings (ASME)'],
  [/\bB16\.36\b/, 'https://www.asme.org/codes-standards/find-codes-standards/b16-36-orifice-flanges', 'ASME B16.36: Orifice Flanges (ASME)'],
  [/\bB16\.48\b/, 'https://www.asme.org/codes-standards/find-codes-standards/b16-48-line-blanks', 'ASME B16.48: Line Blanks (ASME)'],
  [/\bB1\.20\.1\b/, 'https://www.asme.org/codes-standards/find-codes-standards/b1201-pipe-threads-general-purpose-inch', 'ASME B1.20.1: Pipe Threads, General Purpose, Inch (ASME)'],
  // ASTM store page opened and checked 2026-11-28 (the www.astm.org/Standards/ link for B139 returns 403)
  [/\bB139\b/, 'https://store.astm.org/b0139_b0139m-12r24.html', 'ASTM B139/B139M: Phosphor Bronze Rod, Bar, and Shapes (ASTM International)'],
  [/\bBPE\b/, 'https://www.asme.org/codes-standards/find-codes-standards/bpe-bioprocessing-equipment', 'ASME BPE: Bioprocessing Equipment standard (ASME)'],
];
const SOURCE_TITLES = {
  'https://alloys.copper.org/alloy/C51000': 'C51000 alloy data: composition, properties, typical uses (Copper Development Association)',
  'https://alloys.copper.org/alloy/C52100': 'C52100 alloy data: composition, properties, typical uses (Copper Development Association)',
  'https://alloys.copper.org/alloy/C54400': 'C54400 alloy data: composition, properties, typical uses (Copper Development Association)',
  'https://alloys.copper.org/alloy/C90700': 'C90700 alloy data: composition, specifications, typical uses (Copper Development Association)',
  'https://knowledge.bsigroup.com/products/specification-for-copper-alloy-ingots-and-copper-alloy-and-high-conductivity-copper-castings': 'BS 1400:1985, Copper alloy ingots and castings: status withdrawn (BSI Knowledge)',
  'https://knowledge.bsigroup.com/products/copper-and-copper-alloys-ingots-and-castings-3': 'BS EN 1982:2024, Copper and copper alloys: Ingots and castings (BSI Knowledge)',
  'https://cdn.standards.iteh.ai/samples/28874/fe79ece3e6d34bb493d9f1bfbcc16ff2/SIST-EN-1982-2008.pdf': 'EN 1982:2008 public preview: scope, designation and ordering clauses (iTeh Standards)',
  'https://www.smithmetal.com/pdf/bronze/pb1.pdf': 'BS1400 PB1 technical datasheet (Smiths Metal Centres)',
  'https://www.smithmetal.com/pdf/bronze/pb2.pdf': 'PB2 phosphor bronze product datasheet (Smiths Metal Centres)',
  'https://vulcan.co/wp-content/uploads/VUL_Engineering_Bronze.pdf': 'Engineering bronze datasheets, including PB-1 (Vulcan Engineering Steels)',
  'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en': 'EudraLex Volume 4: EU Good Manufacturing Practice guidelines (European Commission)',
  'https://www.3-a.org/': '3-A Sanitary Standards, Inc.',
  'https://www.3-a.org/newsletter-article/the-right-finish-for-a-food-contact-surface-are-we-protecting-consumers': 'The Right Finish for a Food Contact Surface: Are We Protecting Consumers? (3-A Sanitary Standards newsletter)',
  'https://dairyprocessinghandbook.tetrapak.com/chapter/cleaning-dairy-equipment': 'Dairy Processing Handbook, chapter 22: Cleaning of dairy equipment (Tetra Pak)',
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
