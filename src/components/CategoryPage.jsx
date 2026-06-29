import React, { useMemo } from 'react';
import { ArrowRight, ArrowLeftRight, ChevronRight, FileText } from 'lucide-react';
import productsData from '../data/products.json';
import { handleLinkClick } from '../utils/router';

export default function CategoryPage({ category, onEnquireClick }) {
  // Filter products that belong to this category
  const filteredProducts = useMemo(() => {
    return productsData.filter(
      (p) => p.Category?.toLowerCase() === category['Parent Category']?.toLowerCase()
    );
  }, [category]);

  // Parse cross-links
  const crossLinks = useMemo(() => {
    const raw = category['Key Sub-Products to Cross-Link'];
    if (!raw) return [];
    return raw.split('|').map((item) => item.trim()).filter(Boolean);
  }, [category]);

  return (
    <div className="category-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)' }}>
      {/* 1. Category Hero Banner */}
      <section 
        className="category-hero" 
        style={{ 
          background: 'linear-gradient(rgba(11, 12, 16, 0.8), rgba(18, 21, 28, 0.95)), url("/hero_forge.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 0 4rem 0',
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
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
                    transition: 'var(--transition-smooth)'
                  }}
                >
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

                    <div 
                      style={{ 
                        borderTop: '1px solid rgba(255,255,255,0.05)', 
                        paddingTop: '1rem',
                        marginTop: '1rem'
                      }}
                    >
                      <h4 style={{ fontSize: '0.8rem', color: 'var(--primary-yellow)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Key Specs:
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>
                        {prod['Key Specs']}
                      </p>
                    </div>
                  </div>

                  <div style={{ padding: '0 2rem 2rem 2rem' }}>
                    <a 
                      href={`/${prod['URL Slug']}`}
                      onClick={(e) => handleLinkClick(e, `/${prod['URL Slug']}`)}
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
                      href={`/${matchingProd['URL Slug']}`}
                      onClick={(e) => handleLinkClick(e, `/${matchingProd['URL Slug']}`)}
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

      {/* 4. RFQ Category CTA */}
      <section className="cta-sec" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2>Request Quote for <span>{category['Parent Category']}</span></h2>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                Get certified material specifications, competitive volume pricing, and guaranteed delivery schedules from India's trusted custom steel manufacturers.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
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
