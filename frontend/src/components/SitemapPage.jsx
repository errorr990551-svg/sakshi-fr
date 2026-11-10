import React from 'react';
import { handleLinkClick, withSlash } from '../utils/router';
import Breadcrumbs from './Breadcrumbs';

const linkStyle = { color: 'var(--text-secondary)', textDecoration: 'none' };
const headLinkStyle = { color: 'var(--text-primary)', textDecoration: 'none' };
const listStyle = { listStyle: 'disc', paddingLeft: '1.25rem', margin: '0.5rem 0 0', lineHeight: 1.8 };

function Item({ name, url, style = linkStyle }) {
  const href = withSlash(url);
  return (
    <a href={href} onClick={(e) => handleLinkClick(e, href)} style={style}>
      {name}
    </a>
  );
}

function Links({ links }) {
  if (!links || !links.length) return null;
  return (
    <ul style={listStyle}>
      {links.map((l) => (
        <li key={l.url}>
          <Item name={l.name} url={l.url} />
        </li>
      ))}
    </ul>
  );
}

// `groups` ([{ title, url?, links, children? }]) is built from live pages only, in routes.js
export default function SitemapPage({ groups = [] }) {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      <Breadcrumbs items={[{ name: 'Sitemap', url: '/sitemap/' }]} />

      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.2 }}>Sitemap</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '820px', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 2.5rem' }}>
          Every page on steelmanufacturer.in, grouped by section. The XML version for search engines is at{' '}
          <a href="/sitemap.xml" style={{ color: 'var(--primary-yellow)' }}>/sitemap.xml</a>.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {groups.map((g) => (
            <li key={g.title}>
              <section style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, borderLeft: '3px solid var(--primary-yellow)', paddingLeft: '0.75rem' }}>
                  {g.url ? <Item name={g.title} url={g.url} style={headLinkStyle} /> : g.title}
                </h2>
                <Links links={g.links} />
                {g.children && g.children.length > 0 && (
                  <ul style={{ ...listStyle, listStyle: 'none', paddingLeft: 0, marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '1.25rem' }}>
                    {g.children.map((c) => (
                      <li key={c.title}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>
                          {c.url ? <Item name={c.title} url={c.url} style={headLinkStyle} /> : c.title}
                        </h3>
                        <Links links={c.links} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
