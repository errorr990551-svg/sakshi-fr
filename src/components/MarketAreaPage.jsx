import React, { useMemo } from 'react';
import { handleLinkClick } from '../utils/router';
import marketCitiesData from '../data/market_cities.json';

export default function MarketAreaPage() {
  // Group cities by state and sort alphabetically
  const citiesByState = useMemo(() => {
    const grouped = {};
    marketCitiesData.forEach(city => {
      const state = city.state || 'Other';
      if (!grouped[state]) {
        grouped[state] = [];
      }
      grouped[state].push(city);
    });

    const sortedStates = Object.keys(grouped).sort();
    const result = {};
    sortedStates.forEach(state => {
      result[state] = grouped[state].sort((a, b) => a.city.localeCompare(b.city));
    });
    return result;
  }, []);

  const statesList = useMemo(() => Object.keys(citiesByState), [citiesByState]);

  const getStateSlug = (stateName) => {
    return stateName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <div className="market-area-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
      {/* 1. Hero Header Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.8), rgba(18, 21, 28, 0.95)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5.5rem 0 3.5rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ 
            backgroundColor: 'var(--primary-yellow-glow)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid var(--primary-yellow-solid-glow)',
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: '700',
            padding: '0.35rem 0.85rem',
            borderRadius: '50px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Domestic Presence
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            India Cities <span>We Serve</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Discover the commercial hubs, industrial zones, and major cities across India where Sakshi Forge supplies premium, high-precision electropolished steel pipes and fittings.
          </p>
        </div>
      </section>

      {/* 2. Jump To State Panel */}
      <section style={{ padding: '3rem 0 1rem 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: 'var(--bg-dark-800)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              letterSpacing: '0.1em',
              marginBottom: '1.25rem',
              borderLeft: '3px solid var(--primary-yellow)',
              paddingLeft: '0.75rem'
            }}>
              Jump to State
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem'
            }}>
              {statesList.map((state) => (
                <a
                  key={state}
                  href={`#${getStateSlug(state)}`}
                  style={{
                    backgroundColor: 'var(--bg-dark-700)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                    e.currentTarget.style.color = 'var(--primary-yellow)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-dark-600)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-dark-700)';
                  }}
                >
                  {state}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. States and Cities Directory */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {statesList.map((state) => {
            const slug = getStateSlug(state);
            const cities = citiesByState[state];

            return (
              <div key={state} id={slug} className="state-section" style={{ scrollMarginTop: '6.5rem' }}>
                {/* State Section Title */}
                <div style={{ marginBottom: '1.75rem', position: 'relative' }}>
                  <h2 style={{
                    fontSize: '1.6rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {state}
                  </h2>
                  <div style={{
                    height: '2px',
                    width: '60px',
                    backgroundColor: 'var(--primary-yellow)',
                    borderRadius: '2px'
                  }}></div>
                </div>

                {/* Cities Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '1.25rem'
                }}>
                  {cities.map((city) => (
                    <a
                      key={city.slug}
                      href={city.path}
                      onClick={(e) => handleLinkClick(e, city.path)}
                      style={{
                        backgroundColor: 'var(--bg-dark-800)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        padding: '1.25rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: 'var(--text-primary)',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        transition: 'var(--transition-smooth)',
                        display: 'block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                        e.currentTarget.style.boxShadow = '0 6px 16px var(--primary-yellow-glow)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      {city.city}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
