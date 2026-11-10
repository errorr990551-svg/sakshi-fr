import React, { useMemo, useEffect } from 'react';
import { handleLinkClick, withSlash } from '../utils/router';
import { isRedirectedPath } from '../data/redirects';
import Breadcrumbs from './Breadcrumbs';

const getStateSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Groups cities by `key` (state or country), drops redirected pages and duplicates, sorts A-Z.
function groupBy(cities, key) {
  const grouped = {};
  const seen = new Set();
  cities.forEach((c) => {
    if (!c.path || isRedirectedPath(c.path)) return;
    const group = c[key] || 'Other';
    const id = `${group}::${(c.city || '').toLowerCase().trim()}`;
    if (seen.has(id)) return;
    seen.add(id);
    (grouped[group] = grouped[group] || []).push(c);
  });
  return Object.keys(grouped)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({ name, cities: grouped[name].sort((a, b) => a.city.localeCompare(b.city)) }));
}

const linkStyle = { color: 'var(--text-secondary)', textDecoration: 'none' };
const h2Style = {
  fontSize: '1.5rem', fontWeight: 800, margin: '0 0 1rem', color: 'var(--text-primary)',
  borderLeft: '3px solid var(--primary-yellow)', paddingLeft: '0.75rem',
};
const h3Style = { fontSize: '1.15rem', fontWeight: 700, margin: '0 0 0.75rem', color: 'var(--text-primary)' };
const listStyle = {
  listStyle: 'disc', paddingLeft: '1.25rem', margin: 0,
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))', gap: '0.45rem 1.5rem',
};
const boxStyle = {
  backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)',
  borderRadius: '10px', padding: '1.5rem', scrollMarginTop: '6.5rem',
};

function CityList({ cities }) {
  return (
    <ul style={listStyle}>
      {cities.map((c) => {
        const url = withSlash(c.path);
        return (
          <li key={c.slug || url}>
            <a href={url} onClick={(e) => handleLinkClick(e, url)} style={linkStyle}>
              {c.city}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

// `cities` ({ city, state, country, path, slug }) and `stateHubs` ({ State: url }) come from routes.js
export default function MarketAreaPage({ cities = [], stateHubs = {} }) {
  const states = useMemo(() => groupBy(cities.filter((c) => (c.country || 'India') === 'India'), 'state'), [cities]);
  const countries = useMemo(() => groupBy(cities.filter((c) => (c.country || 'India') !== 'India'), 'country'), [cities]);
  const indiaCount = states.reduce((n, s) => n + s.cities.length, 0);

  // Scroll to #state, or to the state named in the path (e.g. /market-area/odisha/)
  useEffect(() => {
    let target = window.location.hash ? window.location.hash.slice(1) : '';
    if (!target) {
      const last = window.location.pathname.replace(/\/+$/, '').split('/').pop();
      if (last && last !== 'market-area') target = last;
    }
    if (!target) return;
    const t = setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="market-area-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      <Breadcrumbs items={[{ name: 'Market Area', url: '/market-area/' }]} />

      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.2 }}>Market Area</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '820px', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 2.5rem' }}>
          Sakshi Forge supplies electropolished stainless steel pipes and tubes from Mumbai to the {states.length} Indian
          states and {indiaCount} cities listed below. Each city link opens a page on electropolished pipe and tube
          supply for that city. To ask about a city that is not listed, call +91 82913 66340, email
          info@steelmanufacturer.in or use the{' '}
          <a href="/contact-us/" onClick={(e) => handleLinkClick(e, '/contact-us/')} style={{ color: 'var(--primary-yellow)' }}>
            contact page
          </a>.
        </p>

        <section style={{ ...boxStyle, marginBottom: '2.5rem' }} aria-labelledby="states-heading">
          <h2 id="states-heading" style={h2Style}>Indian States We Serve</h2>
          <ul style={listStyle}>
            {states.map((s) => (
              <li key={s.name}>
                <a href={`#${getStateSlug(s.name)}`} style={linkStyle}>
                  {s.name} ({s.cities.length})
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {states.map((s) => {
            const hub = stateHubs[s.name] && !isRedirectedPath(stateHubs[s.name]) ? withSlash(stateHubs[s.name]) : null;
            return (
              <section key={s.name} id={getStateSlug(s.name)} style={boxStyle}>
                <h3 style={h3Style}>Cities of {s.name}</h3>
                <CityList cities={s.cities} />
                {hub && (
                  <p style={{ margin: '1rem 0 0' }}>
                    <a href={hub} onClick={(e) => handleLinkClick(e, hub)} style={{ color: 'var(--primary-yellow)', fontWeight: 700, textDecoration: 'none' }}>
                      Electropolished pipes across {s.name} →
                    </a>
                  </p>
                )}
              </section>
            );
          })}
        </div>

        {countries.length > 0 && (
          <>
            <h2 style={{ ...h2Style, marginTop: '3rem' }}>International Markets</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {countries.map((c) => (
                <section key={c.name} id={getStateSlug(c.name)} style={boxStyle}>
                  <h3 style={h3Style}>Cities of {c.name}</h3>
                  <CityList cities={c.cities} />
                </section>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
