import { buildCountryNotes } from '../data/countryLayer.js';

// Country-level facts for foreign market-area pages: time zone vs Mumbai, main container ports
// and the tube standards a local drawing may name. Every fact is from a source listed under it.
const sectionStyle = { padding: '4.5rem 0', backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)' };
const h2Style = { fontSize: '2rem', fontWeight: '800', marginTop: 0, marginBottom: '1.25rem', letterSpacing: '-0.02em' };
const h3Style = { fontSize: '1.15rem', fontWeight: '800', margin: '1.6rem 0 0.6rem 0', color: 'var(--primary-yellow)' };
const pStyle = { color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '1rem' };

export default function CityCountryNotes({ cityData }) {
  const notes = buildCountryNotes(cityData);
  if (!notes) return null;
  return (
    <section style={sectionStyle}>
      <div className="container" style={{ maxWidth: '980px' }}>
        <h2 style={h2Style}>{notes.heading}</h2>
        {notes.blocks.map((b) => (
          <div key={b.title}>
            <h3 style={h3Style}>{b.title}</h3>
            {b.paras.map((p) => <p key={p} style={pStyle}>{p}</p>)}
          </div>
        ))}
        <p style={{ ...pStyle, fontSize: '0.85rem', marginTop: '1.5rem', marginBottom: 0 }}>
          Sources:{' '}
          {notes.sources.map((s, i) => (
            <span key={s.url}>{i > 0 && ' · '}<a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></span>
          ))}
        </p>
      </div>
    </section>
  );
}
