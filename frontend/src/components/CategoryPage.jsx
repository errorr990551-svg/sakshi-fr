import React, { useMemo } from 'react';
import { ArrowRight, ArrowLeftRight, ChevronRight, FileText } from 'lucide-react';
import productsData from '../data/products.json';
import { handleLinkClick, withSlash } from '../utils/router';
import { getParentCategoryName } from '../utils/categories';
import { PRIORITY_30_CITIES } from '../data/priorityCities';
import { CATEGORY_GUIDES } from '../data/categoryGuides.js';
import CategoryGuide from './CategoryGuide';

export default function CategoryPage({ category, onEnquireClick }) {
  // Filter products that belong to this category
  const filteredProducts = useMemo(() => {
    return productsData.filter(
      (p) => getParentCategoryName(p).toLowerCase() === category['Parent Category']?.toLowerCase()
    );
  }, [category]);

  // Parse cross-links
  const crossLinks = useMemo(() => {
    const raw = category['Key Sub-Products to Cross-Link'];
    if (!raw) return [];
    return raw.split('|').map((item) => item.trim()).filter(Boolean);
  }, [category]);

  return (
    <div className="category-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingTop: '5.5rem' }}>
      {/* 1. Category Hero Banner */}
      <section 
        className="category-hero" 
        style={{ 
          background: 'linear-gradient(rgba(11, 12, 16, 0.8), rgba(18, 21, 28, 0.95)), url("/hero_forge.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4.5rem 0 4rem 0',
          borderBottom: '1px solid var(--border-color)',
          position: 'relative'
        }}
      >
        <div className="container">
          {/* Breadcrumbs */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--text-secondary)', 
              fontSize: '0.85rem', 
              marginBottom: '2rem' 
            }}
          >
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--primary-yellow)' }}>{category['Parent Category']}</span>
          </div>

          <span 
            className="hero-tag" 
            style={{ 
              backgroundColor: 'var(--primary-yellow-glow)', 
              color: 'var(--primary-yellow)',
              border: '1px solid var(--primary-yellow-solid-glow)',
              padding: '0.35rem 0.85rem',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'inline-block',
              marginBottom: '1rem'
            }}
          >
            {category['Primary KW']}
          </span>

          <h1 
            style={{ 
              fontSize: '2.5rem', 
              fontWeight: '800', 
              marginBottom: '1.25rem', 
              lineHeight: '1.2',
              color: 'var(--text-primary)'
            }}
          >
            {category['Category H1']}
          </h1>

          <p 
            style={{ 
              color: 'var(--text-secondary)', 
              maxWidth: '800px', 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              marginBottom: '0' 
            }}
          >
            {category['Category Meta Description']}
          </p>
        </div>
      </section>

      {/* 2. Products Grid */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <h2>Available <span>{category['Parent Category']} Products</span></h2>
            <p>We supply a wide range of industrial configurations for this category. Click any product to check full technical specs and request a quote.</p>
            <div className="accent-line"></div>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
              No products found in this category.
            </div>
          ) : (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2.25rem'
              }}
            >
              {filteredProducts.map((prod) => (
                <div 
                  className="product-card" 
                  key={prod['URL Slug']}
                  style={{
                    backgroundColor: 'var(--bg-dark-800)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'var(--transition-smooth)',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    if (e.target.tagName === 'A' || e.target.closest('a')) return;
                    window.history.pushState(null, '', `/${prod['URL Slug']}/`);
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                >
                  <div>
                    {prod.Image && (
                      <div style={{ width: '100%', aspectRatio: '3/2', overflow: 'hidden', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                        <img loading="lazy" 
                          src={prod.Image} 
                          alt={prod['Product Name']} 
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain', 
                            objectPosition: 'center',
                            transition: 'transform 0.5s ease' 
                          }}
                          className="product-card-image"
                          width={800}
                          height={600}
                        />
                      </div>
                    )}
                    <div style={{ padding: '2rem' }}>
                      <div 
                        style={{
                          backgroundColor: 'var(--primary-yellow-glow)',
                          color: 'var(--primary-yellow)',
                          display: 'inline-block',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '4px',
                          marginBottom: '1rem',
                          textTransform: 'uppercase'
                        }}
                      >
                        {prod['Category']}
                      </div>

                      <h3 
                        style={{ 
                          fontSize: '1.25rem', 
                          fontWeight: '700', 
                          marginBottom: '0.75rem',
                          color: 'var(--text-primary)',
                          lineHeight: '1.3'
                        }}
                      >
                        {prod['Product Name']}
                      </h3>

                      <p 
                        style={{ 
                          color: 'var(--text-secondary)', 
                          fontSize: '0.9rem', 
                          lineHeight: '1.5',
                          marginBottom: '1.25rem',
                          display: '-webkit-box',
                          WebkitLineClamp: '3',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {prod['Meta Description (<=160 chars)']}
                      </p>


                    </div>
                  </div>

                  <div style={{ padding: '0 2rem 2rem 2rem' }}>
                    <a 
                      href={`/${prod['URL Slug']}/`}
                      onClick={(e) => handleLinkClick(e, `/${prod['URL Slug']}/`)}
                      className="btn btn-outline"
                      style={{ width: '100%', padding: '0.65rem 0', display: 'flex', justifyContent: 'center' }}
                    >
                      View Specs & Details <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {CATEGORY_GUIDES[category['Category Slug']] && <CategoryGuide guide={CATEGORY_GUIDES[category['Category Slug']]} />}

      {/* 2.5 Dedicated Forged Fittings Technical Guide & Pressure Classes (Increases Content Depth for /forged-fittings/) */}
      {category['Category Slug'] === 'forged-fittings' && (
        <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', marginBottom: '2.5rem' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Technical Specification & Manufacturing Standards
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginTop: '0.5rem', color: '#fff' }}>
                ASME B16.11 High-Pressure Forged Fittings Engineering Matrix
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginTop: '0.75rem' }}>
                Sakshi Forge manufactures hot-forged, precision-machined pipe fittings engineered to withstand high cyclic pressures, thermal shocks, and aggressive chemicals. Fully compliant with <strong>ASME B16.11</strong>, <strong>BS 3799</strong>, and <strong>MSS-SP-79/83/95/97</strong> standards.
              </p>
            </div>

            {/* Pressure Rating & Dimensions Table */}
            <div style={{ overflowX: 'auto', marginBottom: '3rem', backgroundColor: 'var(--bg-dark-900)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255, 193, 7, 0.08)', borderBottom: '2px solid var(--border-color)', color: 'var(--primary-yellow)' }}>
                    <th style={{ padding: '1rem 1.25rem' }}>Fitting Type</th>
                    <th style={{ padding: '1rem 1.25rem' }}>Pressure Class</th>
                    <th style={{ padding: '1rem 1.25rem' }}>Size Range (NPS)</th>
                    <th style={{ padding: '1rem 1.25rem' }}>Standard Ends</th>
                    <th style={{ padding: '1rem 1.25rem' }}>Primary Materials</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-secondary)' }}>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.9rem 1.25rem', color: '#fff', fontWeight: '600' }}>Socket Weld (Elbows, Tees, Crosses, Couplings)</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>Class 3000, 6000, 9000</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>1/8" to 4" (DN 6 - DN 100)</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>Counter-bored socket weld</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>ASTM A182 F304/L, F316/L, F321, Duplex 2205</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.9rem 1.25rem', color: '#fff', fontWeight: '600' }}>Threaded / Screwed (NPT, BSPT, BSPP)</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>Class 2000, 3000, 6000</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>1/8" to 4"</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>ASME B1.20.1 NPT taper threads</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>A182 F316L, A105 Carbon Steel, Alloy 20</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.9rem 1.25rem', color: '#fff', fontWeight: '600' }}>Branch Outlets (Weldolet, Sockolet, Thredolet)</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>STD, XS, Sch 160, Class 3000/6000</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>1/2" run up to 36" header</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>Buttweld / SW / Threaded</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>ASTM A182 F316/L, F51, Inconel 625</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.9rem 1.25rem', color: '#fff', fontWeight: '600' }}>Plugs, Bushings & Unions</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>Class 3000, 6000</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>1/4" to 3"</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>Hex head, square head, round head</td>
                    <td style={{ padding: '0.9rem 1.25rem' }}>SS 304, SS 316, ASTM A105, Monel 400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quality and Contextual Navigation Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.75rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.75rem' }}>100% PMI & MTC Documentation</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Every forged fitting shipment includes EN 10204 3.1 inspection certification with full melt chemistry, mechanical tensile test data, and heat treatment traceability.
                </p>
                <a href="/quality-assurance/" onClick={(e) => handleLinkClick(e, '/quality-assurance/')} style={{ color: 'var(--primary-yellow)', fontSize: '0.88rem', fontWeight: '700', textDecoration: 'underline' }}>
                  Explore Quality Assurance & Testing →
                </a>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.75rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.75rem' }}>ASME B16.11 Dimension Standards</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Detailed bore diameter, socket depth, wall thickness, and thread engagement matrices for engineering layout and piping fabrication projects.
                </p>
                <a href="/asme-b16-11-forged-fittings/" onClick={(e) => handleLinkClick(e, '/asme-b16-11-forged-fittings/')} style={{ color: 'var(--primary-yellow)', fontSize: '0.88rem', fontWeight: '700', textDecoration: 'underline' }}>
                  View ASME B16.11 Fittings Guide →
                </a>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.75rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.75rem' }}>Complementary Industrial Products</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Complete your piping assembly with matching <a href="/flanges/" onClick={(e) => handleLinkClick(e, '/flanges/')} style={{ color: 'var(--primary-yellow)' }}>Forged Flanges</a> and <a href="/stainless-steel-pipe/" onClick={(e) => handleLinkClick(e, '/stainless-steel-pipe/')} style={{ color: 'var(--primary-yellow)' }}>Stainless Steel Pipes</a>.
                </p>
                <a href="/catalogue/" onClick={(e) => handleLinkClick(e, '/catalogue/')} style={{ color: 'var(--primary-yellow)', fontSize: '0.88rem', fontWeight: '700', textDecoration: 'underline' }}>
                  Download Complete Product Catalogue →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Cross-Linking & Sub-Products Tags */}
      {crossLinks.length > 0 && (
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h3 
              style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                color: 'var(--text-primary)', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <ArrowLeftRight size={18} style={{ color: 'var(--primary-yellow)' }} /> Related Sub-Products & Grades
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {crossLinks.map((tag, index) => {
                // Check if this tag matches any product slug or name to link to it
                // We'll search if tag is a product name
                const matchingProd = productsData.find(
                  (p) => p['Product Name']?.toLowerCase() === tag.toLowerCase() || p['URL Slug']?.replace(/-/g, ' ').toLowerCase() === tag.toLowerCase()
                );
                
                if (matchingProd) {
                  return (
                    <a
                      key={index}
                      href={`/${matchingProd['URL Slug']}/`}
                      onClick={(e) => handleLinkClick(e, `/${matchingProd['URL Slug']}/`)}
                      style={{
                        backgroundColor: 'var(--bg-dark-700)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        transition: 'var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                        e.currentTarget.style.color = 'var(--primary-yellow)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                    >
                      {tag}
                    </a>
                  );
                } else {
                  return (
                    <span
                      key={index}
                      style={{
                        backgroundColor: 'var(--bg-dark-700)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem'
                      }}
                    >
                      {tag}
                    </span>
                  );
                }
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3.5 Priority Industrial Cities Linking Map */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ marginBottom: '1.75rem' }}>
            <span style={{ color: 'var(--primary-yellow)', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Pan-India Supply Network
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '750', marginTop: '0.35rem', color: '#fff' }}>
              Supply & Express Dispatch to 30 Major Industrial Hubs
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              Sakshi Forge manufactures at Taloja MIDC, Mumbai and dispatches electropolished stainless steel pipes, fittings and flanges directly to engineering and process plants across India:
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0.75rem' }}>
            {PRIORITY_30_CITIES.map((c) => (
              <a
                key={c.slug}
                href={`/market-area/${c.slug}/`}
                onClick={(e) => handleLinkClick(e, `/market-area/${c.slug}/`)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-dark-900)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '0.65rem 0.9rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                  e.currentTarget.style.color = 'var(--primary-yellow)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <span>{c.name}</span>
                <ChevronRight size={13} style={{ color: 'var(--primary-yellow)' }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RFQ Category CTA */}
       <section className="cta-sec section-padding" style={{ borderTop: '1px solid var(--border-color)' }}>
         <div className="container">
           <div className="cta-grid">
             <div className="cta-left">
               <h2>Request Quote for <span>{category['Parent Category']}</span></h2>
               <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                 Get certified material specifications, competitive volume pricing, and guaranteed delivery schedules from India's trusted custom steel manufacturers.
               </p>
             </div>
             <div className="cta-btn-wrap">
               <button 
                 onClick={() => onEnquireClick(category['Parent Category'])} 
                 className="btn btn-primary btn-lg"
               >
                 Request RFQ <ArrowRight size={18} />
               </button>
             </div>
           </div>
         </div>
       </section>
    </div>
  );
}
