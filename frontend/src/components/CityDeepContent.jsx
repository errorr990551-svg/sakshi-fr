import { useEffect, useState } from 'react';
import { handleLinkClick, withSlash } from '../utils/router';

// In-depth, researched content for one city, stored in public/city-content/<slug>.json.
// prerender.js embeds the file in that city's HTML (script#city-deep-data) and exposes it
// as globalThis.__CITY_DEEP__ while rendering, so the server HTML and hydration match;
// on client-side navigation the file is fetched instead. Nothing renders without a file.
function initialData(slug) {
  const g = typeof globalThis !== 'undefined' ? globalThis.__CITY_DEEP__ : null;
  if (g && g.slug === slug) return g;
  if (typeof document !== 'undefined') {
    const el = document.getElementById('city-deep-data');
    if (el) {
      try {
        const data = JSON.parse(el.textContent);
        if (data.slug === slug) return data;
      } catch {
        // ignore malformed embed
      }
    }
  }
  return null;
}

const h2Style = { fontSize: '1.9rem', fontWeight: '800', marginTop: 0, marginBottom: '1rem', letterSpacing: '-0.02em' };
const pStyle = { color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '1rem' };

export default function CityDeepContent({ slug }) {
  const [data, setData] = useState(() => initialData(slug));

  useEffect(() => {
    if (data && data.slug === slug) return;
    let cancelled = false;
    fetch(`/city-content/${slug}.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => { if (!cancelled) setData(json || { slug, none: true }); })
      .catch(() => { if (!cancelled) setData({ slug, none: true }); });
    return () => { cancelled = true; };
  }, [slug, data]);

  if (!data || data.slug !== slug || data.none) return null;

  return (
    <article style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-dark-900)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        {data.sections.map((section) => (
          <section key={section.heading} style={{ marginBottom: '2.75rem' }}>
            <h2 style={h2Style}>{section.heading}</h2>
            {(section.paragraphs || []).map((p) => <p key={p.slice(0, 40)} style={pStyle}>{p}</p>)}
            {section.bullets && (
              <ul style={{ ...pStyle, paddingLeft: '1.25rem' }}>
                {section.bullets.map((b) => <li key={b.slice(0, 40)} style={{ marginBottom: '0.5rem' }}>{b}</li>)}
              </ul>
            )}
            {section.links && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {section.links.map((l) => (
                  <li key={l.href}>
                    <a href={withSlash(l.href)} onClick={(e) => handleLinkClick(e, l.href)} style={{ display: 'inline-block', padding: '0.45rem 0.9rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '0.9rem' }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {data.sources && data.sources.length > 0 && (
          <section>
            <h2 style={{ ...h2Style, fontSize: '1.2rem' }}>Sources for the local information on this page</h2>
            <ul style={{ ...pStyle, fontSize: '0.9rem', paddingLeft: '1.25rem' }}>
              {data.sources.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>
              ))}
            </ul>
            {data.updated && <p style={{ ...pStyle, fontSize: '0.85rem' }}>Local information last reviewed: {data.updated}</p>}
          </section>
        )}
      </div>
    </article>
  );
}
