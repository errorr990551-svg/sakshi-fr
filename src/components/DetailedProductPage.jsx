import React, { useState, useMemo } from 'react';
import { 
  ChevronRight, ShieldCheck, Truck, Sparkles, MessageSquare, ArrowRight, HelpCircle, 
  ChevronDown, ChevronUp, Info, AlertTriangle, Layers, Activity, FileText, Calendar, 
  CheckCircle2, XCircle, ArrowUpRight, Award, Zap, Package, Compass, Settings
} from 'lucide-react';
import { handleLinkClick } from '../utils/router';
import { parseKeySpecs } from '../utils/seo';
import categoriesData from '../data/categories.json';

export default function DetailedProductPage({ product, onEnquireClick }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(0);

  // Parse parent category slug for breadcrumbs
  const parentCategory = useMemo(() => {
    return categoriesData.find(
      (c) => c['Parent Category']?.toLowerCase() === product['Category']?.toLowerCase()
    );
  }, [product]);

  // Parse lists
  const parseSemicolonList = (str) => {
    if (!str) return [];
    return str.split(';').map(x => x.trim()).filter(Boolean);
  };

  const parseNewlineList = (str) => {
    if (!str) return [];
    return str.split('\n').map(x => x.replace(/^•\s*/, '').trim()).filter(Boolean);
  };

  const parsePipeSeparatedKeyValue = (str) => {
    if (!str) return [];
    return str.split(';').map(item => {
      const parts = item.split('|');
      return { key: parts[0]?.trim() || '', value: parts[1]?.trim() || '' };
    }).filter(x => x.key);
  };

  // Data helpers
  const trustBadges = useMemo(() => parseSemicolonList(product['Trust Badges (copy Remax style)']), [product]);
  const heroBullets = useMemo(() => parseNewlineList(product['3 Hero Key Feature Bullets']), [product]);
  const abbreviations = useMemo(() => parsePipeSeparatedKeyValue(product['Industry Abbreviations (Name | Abbr)']), [product]);
  const keyFacts = useMemo(() => parseNewlineList(product['Key Technical Facts (8 bullet points)']), [product]);
  
  const specsTable = useMemo(() => {
    const raw = product['Specs Table (Property | Detail rows — pipe-separated)'];
    if (!raw) return [];
    const parts = raw.split('|').map(x => x.trim()).filter(Boolean);
    const result = [];
    for (let i = 0; i < parts.length; i += 2) {
      if (parts[i] && parts[i+1]) {
        result.push({ key: parts[i], value: parts[i+1] });
      }
    }
    return result;
  }, [product]);

  const gradesTable = useMemo(() => parsePipeSeparatedKeyValue(product['Material Grades Table (Category | Grades — pipe-separated)']), [product]);
  const standardsTable = useMemo(() => parsePipeSeparatedKeyValue(product['Standards Table (Standard | Scope — pipe-separated)']), [product]);
  const endTypes = useMemo(() => parsePipeSeparatedKeyValue(product['Face / End Types (Name | Description — pipe-separated)']), [product]);
  const surfaceFinish = useMemo(() => parsePipeSeparatedKeyValue(product['Surface Finish / Coating Options (Name | Description — pipe-separated)']), [product]);

  const dimensionsTable = useMemo(() => {
    const colsRaw = product['Dimensions Table Columns'];
    const dataRaw = product['Dimensions Table Data (NPS rows — semicolon-separated)'];
    if (!colsRaw || !dataRaw) return null;
    const headers = colsRaw.split('|').map(x => x.trim()).filter(Boolean);
    const rows = dataRaw.split(';').map(r => r.split('|').map(c => c.trim())).filter(r => r.length > 0 && r[0]);
    return { headers, rows };
  }, [product]);

  const comparisonTable = useMemo(() => {
    const raw = product['Comparison Table (Feature vs 3 products — rows pipe-separated)'];
    if (!raw) return null;
    const rows = raw.split(';').map(r => r.split('|').map(c => c.trim())).filter(r => r.length > 0 && r[0]);
    return {
      headers: rows[0],
      rows: rows.slice(1)
    };
  }, [product]);

  const orderSteps = useMemo(() => parseNewlineList(product['How to Order Steps (8 numbered steps)']), [product]);
  const applications = useMemo(() => parseNewlineList(product['Primary Applications (10 bullet points)']), [product]);
  const notRecommended = useMemo(() => parseSemicolonList(product['NOT Recommended For (4 points)']), [product]);
  const sectors = useMemo(() => parsePipeSeparatedKeyValue(product['Industry Sectors (10 — Name | Description)']), [product]);
  const testingMethods = useMemo(() => parsePipeSeparatedKeyValue(product['Testing Methods (10 — Name | Description)']), [product]);
  const documents = useMemo(() => parsePipeSeparatedKeyValue(product['Documents / Certificates (10 — Name | Description)']), [product]);
  const limitations = useMemo(() => parseSemicolonList(product['Limitations (4 warning points)']), [product]);
  const usps = useMemo(() => parsePipeSeparatedKeyValue(product['Why Choose Us (10 USP points — Name | Description)']), [product]);

  const customFaqs = useMemo(() => {
    const list = [];
    for (let i = 1; i <= 4; i++) {
      const q = product[`FAQ ${i} Q`];
      const a = product[`FAQ ${i} A`];
      if (q && a) {
        list.push({ q, a });
      }
    }
    return list;
  }, [product]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="product-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
      {/* 1. Navigation / Breadcrumbs */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            {parentCategory ? (
              <a href={`/${parentCategory['Category Slug']}`} onClick={(e) => handleLinkClick(e, `/${parentCategory['Category Slug']}`)} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
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

      {/* 2. Premium Hero Banner */}
      <section style={{ padding: '5rem 0 4rem 0', background: 'radial-gradient(circle at 10% 20%, rgba(255, 193, 7, 0.04) 0%, transparent 60%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* Left Hero Pane */}
            <div>
              <span style={{ 
                backgroundColor: 'var(--primary-yellow-glow)', 
                color: 'var(--primary-yellow)', 
                border: '1px solid var(--primary-yellow-solid-glow)',
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: '700',
                padding: '0.3rem 0.8rem',
                borderRadius: '4px',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {product['Category']}
              </span>

              <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {product['H1 (Page Headline)'] || product['H1 Tag']}
              </h1>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: '1.5', fontWeight: '500', marginBottom: '2rem' }}>
                {product['Hero Sub-Headline']}
              </p>

              {/* 3 Hero Key Feature Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                {heroBullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--primary-yellow)' }} />
                    <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: '500' }}>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {trustBadges.map((badge, idx) => (
                  <span key={idx} style={{ 
                    backgroundColor: 'rgba(255,255,255,0.03)', 
                    border: '1px solid var(--border-color)', 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.85rem', 
                    padding: '0.4rem 0.85rem', 
                    borderRadius: '6px',
                    fontWeight: '600'
                  }}>
                    {badge}
                  </span>
                ))}
              </div>
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

              {/* Right Quick RFQ Pane */}
              <div style={{ 
                backgroundColor: 'var(--bg-dark-800)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '12px', 
                padding: '2.5rem', 
                boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div>
                  <span style={{ color: 'var(--primary-yellow)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                    Hygienic Steel Grade
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                    Request Price Quote
                  </h3>
                </div>

                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <ShieldCheck size={20} style={{ color: 'var(--primary-yellow)' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>MTC EN 10204 3.1 Included</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Truck size={20} style={{ color: 'var(--primary-yellow)' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Global Sea & Air Freight</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Sparkles size={20} style={{ color: 'var(--primary-yellow)' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Electro-Chemical Finish Certificate</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button 
                    onClick={() => onEnquireClick(product['Product Name'])} 
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '1rem 0' }}
                  >
                    {product['CTA Button 1 Text'] || 'Request a Quote'} <ArrowRight size={18} />
                  </button>
                  <button 
                    onClick={() => onEnquireClick('Catalogue Download: ' + product['Product Name'])} 
                    className="btn btn-secondary" 
                    style={{ width: '100%', padding: '1rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  >
                    {product['CTA Button 2 Text'] || 'Download Catalogue'}
                  </button>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Response turnaround: Under 2 hours
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Sticky Tab Navigation Bar */}
      <section style={{ 
        position: 'sticky', 
        top: '4.5rem', 
        backgroundColor: 'rgba(11, 12, 16, 0.95)', 
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--border-color)', 
        borderBottom: '1px solid var(--border-color)', 
        zIndex: 50,
        padding: '0' 
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            {[
              { id: 'overview', label: 'Overview', icon: <Info size={16} /> },
              { id: 'specs', label: 'Technical Specs', icon: <Settings size={16} /> },
              { id: 'dimensions', label: 'Dimensions & Ordering', icon: <Compass size={16} /> },
              { id: 'quality', label: 'Quality & Application', icon: <Activity size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1.25rem 0',
                  background: 'none',
                  border: 'none',
                  color: activeTab === tab.id ? 'var(--primary-yellow)' : 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  borderBottom: activeTab === tab.id ? '2px solid var(--primary-yellow)' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'var(--transition-fast)'
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dynamic Tab Panels Content */}
      <section style={{ padding: '4rem 0 3rem 0' }}>
        <div className="container">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'start' }}>
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                  Product Profile
                </h2>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                  {product['What Is This Product? (150-200 words)']}
                </div>

                {abbreviations.length > 0 && (
                  <div style={{ marginTop: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                      Terminology & Abbreviations
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      {abbreviations.map((abbr, idx) => (
                        <div key={idx} style={{ 
                          backgroundColor: 'var(--bg-dark-800)', 
                          border: '1px solid var(--border-color)', 
                          padding: '0.75rem 1.25rem', 
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}>
                          <strong style={{ color: 'var(--text-primary)' }}>{abbr.key}</strong>
                          <span style={{ color: 'var(--border-color)' }}>|</span>
                          <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>{abbr.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Key Technical Facts
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {keyFacts.map((fact, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <CheckCircle2 size={18} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL SPECS */}
          {activeTab === 'specs' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* Specs Table */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                  Technical Specifications
                </h3>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'var(--bg-dark-800)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <tbody>
                      {specsTable.map((spec, index) => (
                        <tr key={index} style={{ 
                          borderBottom: index < specsTable.length - 1 ? '1px solid var(--border-color)' : 'none',
                          backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent'
                        }}>
                          <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-primary)', width: '30%', fontSize: '0.9rem' }}>
                            {spec.key}
                          </td>
                          <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Grades and Standards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                
                {/* Grades */}
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.75rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    Material Grades
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {gradesTable.map((g, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: idx < gradesTable.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{g.key}</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--primary-yellow)', fontWeight: '600' }}>{g.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standards */}
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.75rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    Industry Standards
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {standardsTable.map((s, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: idx < standardsTable.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}>{s.key}</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Ends and Surface Finishes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                
                {/* Ends */}
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.75rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    End & Face Configurations
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {endTypes.map((e, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        <span style={{ fontSize: '0.95rem', color: 'var(--primary-yellow)', fontWeight: '600' }}>{e.key}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{e.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Surface Finishes */}
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.75rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    Surface Finish Options
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {surfaceFinish.map((sf, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: '600' }}>{sf.key}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{sf.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: DIMENSIONS & ORDERING */}
          {activeTab === 'dimensions' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              {/* Dimensions */}
              {dimensionsTable && (
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Size & Dimensions Matrix
                  </h3>
                  {product['Dimensions Table Note'] && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                      * {product['Dimensions Table Note']}
                    </p>
                  )}
                  <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'var(--bg-dark-800)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                          {dimensionsTable.headers.map((h, i) => (
                            <th key={i} style={{ padding: '1rem 1.5rem', color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.9rem' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dimensionsTable.rows.map((row, idx) => (
                          <tr key={idx} style={{ borderBottom: idx < dimensionsTable.rows.length - 1 ? '1px solid var(--border-color)' : 'none', backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                            {row.map((cell, i) => (
                              <td key={i} style={{ padding: '1rem 1.5rem', fontSize: '0.9rem', color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: i === 0 ? '600' : '400' }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Comparison Table */}
              {comparisonTable && (
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    Product Comparison
                  </h3>
                  <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'var(--bg-dark-800)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                          {comparisonTable.headers.map((h, i) => (
                            <th key={i} style={{ padding: '1rem 1.5rem', color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.9rem' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTable.rows.map((row, idx) => (
                          <tr key={idx} style={{ borderBottom: idx < comparisonTable.rows.length - 1 ? '1px solid var(--border-color)' : 'none', backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                            {row.map((cell, i) => (
                              <td key={i} style={{ padding: '1rem 1.5rem', fontSize: '0.9rem', color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: i === 0 ? '600' : '400' }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* How to Order & Lead Times */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '3rem', alignItems: 'start' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Ordering Checklist & Process
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {orderSteps.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                        <div style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '50%', 
                          backgroundColor: 'var(--primary-yellow-glow)', 
                          border: '1px solid var(--primary-yellow)', 
                          color: 'var(--primary-yellow)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '0.9rem',
                          flexShrink: 0
                        }}>
                          {idx + 1}
                        </div>
                        <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Calendar size={22} style={{ color: 'var(--primary-yellow)' }} />
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                      Lead Times & Dispatch
                    </h4>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {product['Lead Times']}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginTop: '1.5rem' }}>
                    * Urgent hot-tracked shipping is available for emergency pipeline shutdowns. Speak to our dispatch managers directly.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: QUALITY & APPLICATION */}
          {activeTab === 'quality' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              {/* Primary Applications and Warning Areas */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    Primary Applications
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {applications.map((app, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--primary-yellow)' }} />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Warning: Not Recommended */}
                  <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <AlertTriangle size={20} style={{ color: '#ef4444' }} />
                      <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ef4444', margin: 0 }}>
                        Not Recommended For:
                      </h4>
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      {notRecommended.map((nr, idx) => (
                        <li key={idx} style={{ marginBottom: '0.35rem' }}>{nr}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning: Limitations */}
                  <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '8px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <AlertTriangle size={20} style={{ color: '#f59e0b' }} />
                      <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f59e0b', margin: 0 }}>
                        Service Limitations:
                      </h4>
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      {limitations.map((limit, idx) => (
                        <li key={idx} style={{ marginBottom: '0.35rem' }}>{limit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Industry Sectors */}
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                  Industry Sectors & Usage
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  {sectors.map((sec, idx) => (
                    <div key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '1.25rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--primary-yellow)', marginBottom: '0.25rem' }}>{sec.key}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{sec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Testing & Documents */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                {/* Testing Methods */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    Testing Methods & Inspection
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {testingMethods.map((tm, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}>{tm.key}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{tm.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents & QA Certificates */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    Quality Assurance Documents
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {documents.map((doc, idx) => (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--primary-yellow)', fontWeight: '600' }}>{doc.key}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{doc.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* 5. Why Choose Us (USP Points Grid) */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <h2>Why Choose <span>Sakshi Forge</span></h2>
            <p>Our commitment to sterile, high-purity processing makes us a trusted manufacturing partner globally.</p>
            <div className="accent-line"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {usps.map((usp, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--bg-dark-900)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                padding: '1.5rem',
                transition: 'var(--transition-smooth)'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--primary-yellow-glow)', 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--primary-yellow)',
                  marginBottom: '1rem' 
                }}>
                  <Award size={22} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {usp.key}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {usp.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Collapsible FAQ Section */}
      {customFaqs.length > 0 && (
        <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '3.5rem' }}>
              <h2>Frequently Asked <span>Questions</span></h2>
              <p>Common technical and pricing queries regarding specifications and ordering.</p>
              <div className="accent-line"></div>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {customFaqs.map((faq, idx) => (
                <div key={idx} style={{ 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '8px', 
                  backgroundColor: 'var(--bg-dark-800)',
                  overflow: 'hidden'
                }}>
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
                    <div style={{ 
                      padding: '0 1.5rem 1.5rem 1.5rem', 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      borderTop: '1px solid var(--border-color)'
                    }}>
                      <p style={{ marginTop: '1rem' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
