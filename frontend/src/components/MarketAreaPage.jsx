import React, { useMemo, useEffect } from 'react';
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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (window.location.pathname.includes('maharashtra')) {
      setTimeout(() => {
        const el = document.getElementById('maharashtra');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (window.location.pathname.includes('karnataka')) {
      setTimeout(() => {
        const el = document.getElementById('karnataka');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (window.location.pathname.includes('gujarat')) {
      setTimeout(() => {
        const el = document.getElementById('gujarat');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);

  return (
    <div className="market-area-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
      {/* 1. Hero Header Section */}
      <section style={{ 
        background: 'linear-gradient(to right, rgba(10, 14, 23, 0.82) 0%, rgba(10, 14, 23, 0.58) 55%, rgba(10, 14, 23, 0.38) 100%), linear-gradient(to bottom, rgba(10, 14, 23, 0.42) 0%, rgba(10, 14, 23, 0.10) 50%, rgba(10, 14, 23, 0.80) 100%), url("/sakshi-forge-banner.webp")',
        backgroundPosition: 'left top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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

      {/* Featured Regional Corridors */}
      <section style={{ padding: '1rem 0 2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Box 1: Tamil Nadu */}
            <div 
              onClick={() => handleLinkClick(null, '/tamil-nadu')}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.08) 0%, var(--bg-dark-800) 100%)',
                border: '1px solid var(--primary-yellow)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 193, 7, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary-yellow)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Regional Dedicated Hub
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0.5rem 0', color: 'var(--text-primary)' }}>Tamil Nadu Industrial Belts</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Dedicated supply across Chennai, Coimbatore, Hosur, Cuddalore, Trichy, Salem, Madurai, Thoothukudi, Erode, and Vellore.
                </p>
              </div>
              <a 
                href="/tamil-nadu" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleLinkClick(e, '/tamil-nadu');
                }}
                className="btn btn-primary"
                style={{ marginTop: '1.25rem', width: 'fit-content' }}
              >
                Explore Tamil Nadu Hub &rarr;
              </a>
            </div>

            {/* Box 2: Maharashtra */}
            <div 
              onClick={(e) => {
                if (e.target.closest('a')) return;
                const mhElem = document.getElementById('maharashtra');
                if (mhElem) {
                  mhElem.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#maharashtra');
                } else {
                  handleLinkClick(e, '#maharashtra');
                }
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, var(--bg-dark-800) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.25)';
                e.currentTarget.style.borderColor = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Direct Works Dispatch
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0.5rem 0', color: 'var(--text-primary)' }}>Maharashtra Industrial Corridors</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Factory-direct road transit from Taloja works to Pune MIDC, Mumbai, Thane-Belapur, Tarapur, Nashik, Aurangabad, and Amravati.
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  <a href="/market-area/pune" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/pune'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Pune</a>
                  <a href="/market-area/mumbai" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/mumbai'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Mumbai</a>
                  <a href="/market-area/thane" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/thane'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Thane</a>
                  <a href="/market-area/tarapur" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/tarapur'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Tarapur</a>
                  <a href="/market-area/nashik" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/nashik'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Nashik</a>
                  <a href="/market-area/aurangabad" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/aurangabad'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Aurangabad</a>
                  <a href="/market-area/amravati" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/amravati'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Amravati</a>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a 
                    href="#maharashtra" 
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      const mhElem = document.getElementById('maharashtra');
                      if (mhElem) {
                        mhElem.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#maharashtra');
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#60a5fa',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      textDecoration: 'none'
                    }}
                  >
                    View All Maharashtra Cities &darr;
                  </a>
                </div>
              </div>
            </div>

            {/* Box 3: Karnataka */}
            <div 
              onClick={(e) => {
                if (e.target.closest('a')) return;
                const ktElem = document.getElementById('karnataka');
                if (ktElem) {
                  ktElem.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#karnataka');
                } else {
                  handleLinkClick(e, '/karnataka');
                }
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, var(--bg-dark-800) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.25)';
                e.currentTarget.style.borderColor = '#34d399';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Pharma &amp; Biotech Corridors
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0.5rem 0', color: 'var(--text-primary)' }}>Karnataka Industrial Corridors</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Express direct dispatch across Bengaluru, Tumakuru, Mysuru, Mangaluru, Bidar, Hubballi-Dharwad, Belagavi, Hassan, Raichur, and Mandya.
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  <a href="/market-area/bengaluru" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/bengaluru'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Bengaluru</a>
                  <a href="/market-area/tumakuru" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/tumakuru'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Tumakuru</a>
                  <a href="/market-area/mysuru" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/mysuru'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Mysuru</a>
                  <a href="/market-area/mangaluru" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/mangaluru'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Mangaluru</a>
                  <a href="/market-area/bidar" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/bidar'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Bidar</a>
                  <a href="/market-area/hubballi-dharwad" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/hubballi-dharwad'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Hubballi</a>
                  <a href="/market-area/belagavi" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/belagavi'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Belagavi</a>
                  <a href="/market-area/hassan" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/hassan'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Hassan</a>
                  <a href="/market-area/raichur" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/raichur'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Raichur</a>
                  <a href="/market-area/mandya" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/mandya'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34d399'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Mandya</a>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="/karnataka" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLinkClick(e, '/karnataka');
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#34d399',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      textDecoration: 'none'
                    }}
                  >
                    Explore Karnataka Hub &rarr;
                  </a>
                  <a 
                    href="#karnataka" 
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      const ktElem = document.getElementById('karnataka');
                      if (ktElem) {
                        ktElem.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#karnataka');
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                  >
                    View All Cities &darr;
                  </a>
                </div>
              </div>
            </div>

            {/* Box 4: Gujarat */}
            <div 
              onClick={(e) => {
                if (e.target.closest('a')) return;
                const gjElem = document.getElementById('gujarat');
                if (gjElem) {
                  gjElem.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#gujarat');
                } else {
                  handleLinkClick(e, '/market-area/gujarat');
                }
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, var(--bg-dark-800) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(245, 158, 11, 0.25)';
                e.currentTarget.style.borderColor = '#fbbf24';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Chemical, Pharma &amp; Dairy Capital
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0.5rem 0', color: 'var(--text-primary)' }}>Gujarat Industrial Belts</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Direct manufacturer supply across Ahmedabad, Vadodara, Vapi, Sanand, Ankleshwar, Surat, Dahej PCPIR, Anand, and Mehsana.
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  <a href="/market-area/ahmedabad" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/ahmedabad'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Ahmedabad</a>
                  <a href="/market-area/vadodara" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/vadodara'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Vadodara</a>
                  <a href="/market-area/vapi" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/vapi'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Vapi</a>
                  <a href="/market-area/sanand" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/sanand'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Sanand</a>
                  <a href="/market-area/ankleshwar" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/ankleshwar'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Ankleshwar</a>
                  <a href="/market-area/surat" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/surat'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Surat</a>
                  <a href="/market-area/dahej" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/dahej'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Dahej</a>
                  <a href="/market-area/anand" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/anand'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Anand</a>
                  <a href="/market-area/mehsana" onClick={(e) => { e.stopPropagation(); handleLinkClick(e, '/market-area/mehsana'); }} style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', background: 'var(--bg-dark-700)', borderRadius: '4px', color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--border-color)', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>Mehsana</a>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="/market-area/gujarat" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLinkClick(e, '/market-area/gujarat');
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#fbbf24',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      textDecoration: 'none'
                    }}
                  >
                    Explore Gujarat Hub &rarr;
                  </a>
                  <a 
                    href="#gujarat" 
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      const gjElem = document.getElementById('gujarat');
                      if (gjElem) {
                        gjElem.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#gujarat');
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                  >
                    View All Cities &darr;
                  </a>
                </div>
              </div>
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
