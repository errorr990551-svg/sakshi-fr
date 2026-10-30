import { CheckCircle2 } from 'lucide-react';

// City-specific sections for market-area pages built from verified research
// (see src/data/cityContent.js). Renders nothing when there is no research row.
const sectionStyle = (alt) => ({
  padding: '4.5rem 0',
  backgroundColor: alt ? 'var(--bg-dark-800)' : 'var(--bg-dark-900)',
  borderBottom: '1px solid var(--border-color)'
});
const h2Style = { fontSize: '2rem', fontWeight: '800', marginTop: 0, marginBottom: '1.25rem', letterSpacing: '-0.02em' };
const pStyle = { color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '1.1rem' };
const cardStyle = { backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.4rem' };

export default function CityLocalSections({ content, city }) {
  if (!content) return null;
  const { intro, industries, angle, compliance, manufacturer, supplier, wholesaler } = content;

  return (
    <>
      <section style={sectionStyle(false)}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <h2 style={h2Style}>Industry in {city} and Where Electropolished Tube Is Used</h2>
          <p style={pStyle}>{intro}</p>
          {industries.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1.1rem', marginTop: '1.5rem' }}>
              {industries.map((item) => (
                <div key={item.label} style={cardStyle}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-yellow)', margin: '0 0 0.6rem 0' }}>{item.label}</h3>
                  <p style={{ ...pStyle, fontSize: '0.95rem', marginBottom: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={sectionStyle(true)}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <h2 style={h2Style}>{angle.heading}</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {angle.points.map((point) => (
              <li key={point} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', ...pStyle, marginBottom: 0 }}>
                <CheckCircle2 size={18} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '4px' }} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          {compliance.length > 0 && (
            <>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '1.5rem 0 0.75rem 0' }}>Standards and approvals buyers in {city} work to</h3>
              {compliance.map((note) => (
                <p key={note} style={{ ...pStyle, marginBottom: '0.6rem' }}>{note}</p>
              ))}
            </>
          )}
        </div>
      </section>

      <section style={sectionStyle(false)}>
        <div className="container" style={{ maxWidth: '980px' }}>
          {[manufacturer, supplier, wholesaler].map((block) => (
            <div key={block.heading} style={{ marginBottom: '2.25rem' }}>
              <h2 style={{ ...h2Style, fontSize: '1.6rem' }}>{block.heading}</h2>
              <p style={pStyle}>{block.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
