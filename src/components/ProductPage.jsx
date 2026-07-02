import React, { useState, useMemo } from 'react';
import { ChevronRight, ShieldCheck, Truck, Sparkles, MessageSquare, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Package } from 'lucide-react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import { handleLinkClick } from '../utils/router';
import { parseKeySpecs } from '../utils/seo';
import DetailedProductPage from './DetailedProductPage';

export default function ProductPage({ product, onEnquireClick }) {
  const isDetailed = !!product['What Is This Product? (150-200 words)'];

  if (isDetailed) {
    return <DetailedProductPage product={product} onEnquireClick={onEnquireClick} />;
  }
  const [openFaq, setOpenFaq] = useState(0);

  // Parse Key Specs
  const specs = useMemo(() => {
    const list = parseKeySpecs(product['Key Specs']);
    if (product['Standards'] && !list.some(item => item.key.toLowerCase().includes('std') || item.key.toLowerCase().includes('standard'))) {
      list.push({ key: 'Standards', value: product['Standards'] });
    }
    if (product['Available Grades']) {
      list.push({ key: 'Available Grades', value: product['Available Grades'] });
    }
    return list;
  }, [product]);

  // Parse Target Industries
  const industries = useMemo(() => {
    const raw = product['Target Industries'];
    if (!raw) return [];
    return raw.split('|').map((item) => item.trim()).filter(Boolean);
  }, [product]);

  // Find category object to get category slug
  const parentCategory = useMemo(() => {
    return categoriesData.find(
      (c) => c['Parent Category']?.toLowerCase() === product['Category']?.toLowerCase()
    );
  }, [product]);

  // Parse Internal Links into actual product objects
  const relatedProducts = useMemo(() => {
    const raw = product['Internal Links'];
    if (!raw) return [];
    const linkNames = raw.split('|').map((item) => item.trim().toLowerCase());
    
    // Find matching products in productsData
    return productsData.filter((p) => {
      const name = p['Product Name']?.toLowerCase();
      const cat = p['Category']?.toLowerCase();
      return linkNames.some(link => name.includes(link) || link.includes(name) || cat === link);
    }).slice(0, 3); // limit to 3 related items
  }, [product]);

  // Dynamic FAQ Q&As
  const faqs = useMemo(() => {
    return [
      {
        q: `What are the specifications of ${product['Product Name']}?`,
        a: `${product['Product Name']} features key specifications including: ${product['Key Specs']}. It conforms to national and international standards and is optimized for use in ${product['Target Industries']} industries.`
      },
      {
        q: `Which industries target ${product['Product Name']}?`,
        a: `${product['Product Name']} is widely supplied to the ${product['Target Industries']} sectors due to its high tensile strength, dimensional accuracy, and durability under high-stress conditions.`
      },
      {
        q: `Does Sakshi Forge provide Material Test Certificates (MTC) for ${product['Product Name']}?`,
        a: "Yes. Sakshi Forge provides EN 10204 3.1 Material Test Certificates (MTC) for all shipments of our products. We also accommodate third-party inspection audits (TPIA) from companies like SGS, TUV, DNV, or LLOYDS to verify material compliance."
      }
    ];
  }, [product]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="product-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem', paddingTop: '5.5rem' }}>
      {/* 1. Top Navigation & Breadcrumbs */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexWrap: 'wrap',
              gap: '0.5rem', 
              color: 'var(--text-secondary)', 
              fontSize: '0.85rem' 
            }}
          >
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            {parentCategory ? (
              <a 
                href={`/${parentCategory['Category Slug']}`} 
                onClick={(e) => handleLinkClick(e, `/${parentCategory['Category Slug']}`)}
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                {product['Category']}
              </a>
            ) : (
              <span>{product['Category']}</span>
            )}
            <ChevronRight size={14} />
            <span style={{ color: 'var(--primary-yellow)' }}>{product['Product Name']}</span>
          </div>
        </div>
      </section>

      {/* 2. Product Hero */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'radial-gradient(circle at 10% 20%, rgba(255, 193, 7, 0.03) 0%, transparent 50%)' }}>
        <div className="container">
          <div className="product-simple-grid">
            
            {/* Left Column: Title & Specs */}
            <div>
              <div 
                style={{ 
                  backgroundColor: 'var(--primary-yellow-glow)', 
                  color: 'var(--primary-yellow)',
                  border: '1px solid var(--primary-yellow-solid-glow)',
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '4px',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {product['Category']}
              </div>

              <h1 
                style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  lineHeight: '1.2', 
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)'
                }}
              >
                {product['H1 Tag']}
              </h1>

              <p 
                style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem' 
                }}
              >
                {product['Product Description'] || product['Meta Description (<=160 chars)']}
              </p>

              {product['Key Features'] && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Key Features
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                    {product['Key Features'].split(';').map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <ShieldCheck size={16} style={{ color: 'var(--primary-yellow)' }} />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{feat.trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications Table */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                  Technical Specifications
                </h2>
                <div 
                  style={{ 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '8px', 
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-dark-800)'
                  }}
                >
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <tbody>
                      {specs.map((s, index) => (
                        <tr 
                          key={index} 
                          style={{ 
                            borderBottom: index < specs.length - 1 ? '1px solid var(--border-color)' : 'none',
                            backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent'
                          }}
                        >
                          <td style={{ padding: '1rem 1.25rem', fontWeight: '600', color: 'var(--text-primary)', width: '35%', fontSize: '0.9rem' }}>
                            {s.key}
                          </td>
                          <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            {s.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Target Industries Section */}
              {industries.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Target Application Industries
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {industries.map((ind, index) => (
                      <span 
                        key={index}
                        style={{
                          backgroundColor: 'var(--bg-dark-800)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '4px'
                        }}
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product['Applications'] && (
                <div style={{ marginBottom: '3rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Applications & Service Areas
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {product['Applications'].split(',').map((app, index) => (
                      <span 
                        key={index}
                        style={{
                          backgroundColor: 'rgba(255,193,7,0.03)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '4px'
                        }}
                      >
                        {app.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Image and CTA/RFQ Card */}
            <div style={{ position: 'sticky', top: '7rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Product Image Box */}
              <div style={{
                backgroundColor: 'var(--bg-dark-800)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                aspectRatio: '16/10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: product.Image ? '0' : '1rem',
                background: 'radial-gradient(circle at center, rgba(255, 193, 7, 0.04) 0%, transparent 70%), var(--bg-dark-800)',
                padding: product.Image ? '0' : '2rem',
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                overflow: 'hidden'
              }}>
                {product.Image ? (
                  <img 
                    src={product.Image} 
                    alt={product['Product Name']}
                    className="product-detail-image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                ) : (
                  <>
                    <Package size={48} style={{ color: 'var(--primary-yellow)', opacity: 0.8 }} />
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>
                        {product['Category']}
                      </span>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem', fontWeight: '500' }}>
                        {product['Product Name']}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Quick Quotation Card */}
              <div 
                style={{ 
                  backgroundColor: 'var(--bg-dark-800)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '2.5rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem'
                }}
              >
                <div>
                  <span style={{ color: 'var(--primary-yellow)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Quick Quotation
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                    Request Price & Specs
                  </h3>
                </div>

                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <ShieldCheck size={20} style={{ color: 'var(--primary-yellow)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>MTC EN 10204 3.1 & Inspection provided</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Truck size={20} style={{ color: 'var(--primary-yellow)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Pan-India & global sea-freight dispatch</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Sparkles size={20} style={{ color: 'var(--primary-yellow)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Custom dimensions/drawings supported</span>
                  </div>
                </div>

                <button 
                  onClick={() => onEnquireClick(product['Product Name'])}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1rem 0' }}
                >
                  {product['CTA'] || 'Get a Quote'} <ArrowRight size={18} />
                </button>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Response time: Less than 2 hours
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Product FAQs Accordion */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2>Frequently Asked <span>Questions</span></h2>
            <p>Read commonly asked questions about specifying and ordering {product['Product Name']}.</p>
            <div className="accent-line"></div>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{ 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '8px', 
                  backgroundColor: 'var(--bg-dark-900)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} style={{ color: 'var(--primary-yellow)' }} />
                    {faq.q}
                  </span>
                  {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openFaq === idx && (
                  <div 
                    style={{ 
                      padding: '0 1.5rem 1.5rem 1.5rem', 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      borderTop: '1px solid var(--border-color)'
                    }}
                  >
                    <p style={{ marginTop: '1rem' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Related Products (Internal Linking) */}
      {relatedProducts.length > 0 && (
        <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-primary)' }}>
              Related Products
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {relatedProducts.map((p) => (
                <div 
                  key={p['URL Slug']}
                  style={{
                    backgroundColor: 'var(--bg-dark-800)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div>
                    <span style={{ color: 'var(--primary-yellow)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase' }}>
                      {p['Category']}
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                      {p['Product Name']}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      {p['Meta Description (<=160 chars)']}
                    </p>
                  </div>

                  <a 
                    href={`/${p['URL Slug']}`}
                    onClick={(e) => handleLinkClick(e, `/${p['URL Slug']}`)}
                    className="btn btn-outline"
                    style={{ fontSize: '0.8rem', padding: '0.5rem 0', textAlign: 'center', justifyContent: 'center' }}
                  >
                    View Details <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
