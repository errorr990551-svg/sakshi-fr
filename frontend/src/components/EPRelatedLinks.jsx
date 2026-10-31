import { handleLinkClick } from '../utils/router';

// Renders the related EP page links resolved at build time (utils/epRelated.js via routes.js).
export default function EPRelatedLinks({ groups = [] }) {
  if (groups.length === 0) return null;

  return (
    <nav aria-label="Related electropolished pipe pages" style={{ padding: '3rem 0', borderTop: '1px solid var(--border-color, #1e293b)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {groups.map((group) => (
          <div key={group.heading} style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem' }}>{group.heading}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.links.map(({ url, label }) => (
                <li key={url}>
                  <a
                    href={url}
                    onClick={(e) => handleLinkClick(e, url)}
                    style={{ display: 'inline-block', padding: '0.4rem 0.85rem', border: '1px solid var(--border-color, #334155)', borderRadius: '4px', fontSize: '0.85rem', color: 'inherit', textDecoration: 'none' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
