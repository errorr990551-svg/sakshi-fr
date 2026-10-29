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
            <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ padding: '0.6rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>{c}</td>)}</tr>
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

export default function CategoryGuide({ guide }) {
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
        <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Frequently Asked Questions</h2>
        {guide.faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{f.q}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{f.a}</p>
          </div>
        ))}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Last updated {guide.updated}</p>
      </div>
    </section>
  );
}
