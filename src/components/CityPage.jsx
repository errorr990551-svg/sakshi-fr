import React, { useState, useMemo } from 'react';
import { ChevronRight, ShieldCheck, Truck, Sparkles, MapPin, HelpCircle, ChevronDown, ChevronUp, Phone, Mail, FileText, Globe, Building, Award, Activity, ArrowRight, Shield, Layers, FileCheck, HelpCircle as FaqIcon } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

// Premium Live Delivery Widget Component
const LiveDeliveryWidget = ({ city, state }) => {
  return (
    <div style={{
      backgroundColor: 'var(--bg-dark-800)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '2.25rem',
      position: 'relative',
      boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
      background: 'linear-gradient(135deg, var(--bg-dark-800) 0%, var(--bg-dark-700) 100%)',
      overflow: 'hidden'
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        backgroundColor: 'rgba(255, 193, 7, 0.03)',
        filter: 'blur(50px)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      {/* Top Header Row with Active status pulsing */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '1.75rem', 
        borderBottom: '1px solid var(--border-color)', 
        paddingBottom: '1rem' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            display: 'inline-block',
            boxShadow: '0 0 10px #10b981'
          }}></span>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: '800', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em', 
            color: '#10b981' 
          }}>
            Active Supply Node
          </span>
        </div>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.05em' }}>
          SF-ROUTE: #{city.toUpperCase().substring(0,3)}-EP
        </span>
      </div>

      {/* Destination description */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: '700' }}>
          Supply Route
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Mumbai Works</div>
          <ArrowRight size={16} style={{ color: 'var(--primary-yellow)' }} />
          <div style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--primary-yellow)' }}>{city} Site</div>
        </div>
      </div>

      {/* Tracking Stepper */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', paddingLeft: '1.75rem' }}>
        
        {/* Stepper Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '6px',
          top: '8px',
          bottom: '8px',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--primary-yellow) 70%, var(--border-color) 100%)'
        }}></div>

        {[
          { label: 'Raw Steel QA Check & Heat Lock (PMI Verified)', status: 'complete' },
          { label: 'Cold Drawing & Dimensional Calibrations', status: 'complete' },
          { label: 'Electropolishing Purge (Internal Ra ≤ 0.4 µm)', status: 'complete' },
          { label: 'Final Profilometer Inspection & MTC 3.1 Generation', status: 'complete' },
          { label: 'Transit Dispatch & E-Way Bill Lock', status: 'transit' },
        ].map((step, idx) => (
          <div key={idx} style={{ position: 'relative', fontSize: '0.85rem' }}>
            {/* Step Check Dot */}
            <div style={{
              position: 'absolute',
              left: '-25px',
              top: '3px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: step.status === 'complete' ? 'var(--primary-yellow)' : (step.status === 'transit' ? 'var(--bg-dark-900)' : 'var(--bg-dark-600)'),
              border: '2px solid ' + (step.status === 'complete' ? 'var(--primary-yellow)' : (step.status === 'transit' ? 'var(--primary-yellow)' : 'var(--border-color)')),
              boxShadow: step.status === 'complete' ? '0 0 6px var(--primary-yellow)' : (step.status === 'transit' ? '0 0 10px var(--primary-yellow)' : 'none'),
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {step.status === 'complete' && (
                <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--bg-dark-900)', borderRadius: '50%' }}></div>
              )}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                color: step.status === 'complete' ? 'var(--text-primary)' : (step.status === 'transit' ? 'var(--primary-yellow)' : 'var(--text-muted)'),
                fontWeight: step.status === 'complete' || step.status === 'transit' ? '700' : '400'
              }}>
                {step.label}
              </span>
              {step.status === 'transit' && (
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.1rem', fontWeight: '500' }}>
                  Door delivery scheduled in 3 - 7 days
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer certificates list */}
      <div style={{ 
        marginTop: '2rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem', 
        backgroundColor: 'rgba(255, 193, 7, 0.03)', 
        padding: '0.85rem 1.1rem', 
        borderRadius: '8px', 
        border: '1px solid var(--primary-yellow-solid-glow)' 
      }}>
        <FileCheck size={18} style={{ color: 'var(--primary-yellow)', flexShrink: 0 }} />
        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4', fontWeight: '500' }}>
          Material dispatched with official EN 10204 3.1 Mill Test Certificates and NABL lab reports.
        </span>
      </div>
    </div>
  );
};

export default function CityPage({ cityData, onEnquireClick }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Maps custom, highly relevant icons to Why Choose Us cards based on title keywords
  const getWhyIcon = (num, title) => {
    const t = title.toLowerCase();
    if (t.includes('finish') || t.includes('quality') || t.includes('ra') || t.includes('guarantee')) {
      return <ShieldCheck size={22} />;
    }
    if (t.includes('price') || t.includes('pricing') || t.includes('rate') || t.includes('mill') || t.includes('cost')) {
      return <Award size={22} />;
    }
    if (t.includes('doc') || t.includes('mtc') || t.includes('cert') || t.includes('audit')) {
      return <FileText size={22} />;
    }
    if (t.includes('speed') || t.includes('time') || t.includes('day') || t.includes('deliver') || t.includes('dispatch')) {
      return <Truck size={22} />;
    }
    return <Layers size={22} />;
  };

  // Parse Section 2: Why Choose Us (Extract the 5 numbered points)
  const whyPoints = useMemo(() => {
    const text = cityData.section2_whyChooseUs;
    if (!text) return [];
    const points = [];
    const regex = /\((\d+)\)\s*(.*?)(?=\s*\(\d+\)|$)/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const parts = match[2].split(" — ");
      points.push({
        num: match[1],
        title: parts[0]?.trim() || "",
        desc: parts[1]?.trim() || ""
      });
    }
    return points;
  }, [cityData.section2_whyChooseUs]);

  // Parse Section 4: Products Promo (Extract introduction, list of products, and outro)
  const productPromo = useMemo(() => {
    const text = cityData.section4_productsPromo;
    if (!text) return { intro: "", items: [], outro: "" };
    
    const colonIdx = text.indexOf(":");
    if (colonIdx === -1) {
      return { intro: text, items: [], outro: "" };
    }
    
    const intro = text.substring(0, colonIdx + 1).trim();
    const afterIntro = text.substring(colonIdx + 1).trim();
    
    const outroStart = afterIntro.indexOf("Ordering the full package");
    let itemsText = afterIntro;
    let outro = "";
    
    if (outroStart !== -1) {
      itemsText = afterIntro.substring(0, outroStart).trim();
      outro = afterIntro.substring(outroStart).trim();
    }
    
    const items = itemsText
      .split(";")
      .map(item => item.trim())
      .filter(Boolean);
      
    return { intro, items, outro };
  }, [cityData.section4_productsPromo]);

  // Helper to parse individual product promo strings into Title, Standard, and Tags
  const parseProductItem = (itemText) => {
    let title = itemText;
    let standard = "";
    let tag = "";
    
    if (itemText.includes(" (") && itemText.includes(")")) {
      const openIdx = itemText.indexOf(" (");
      const closeIdx = itemText.indexOf(")", openIdx);
      
      title = itemText.substring(0, openIdx).trim();
      standard = itemText.substring(openIdx + 2, closeIdx).trim();
      
      const afterClose = itemText.substring(closeIdx + 1).trim();
      if (afterClose) {
        tag = afterClose.replace(/^for\s+/i, "").trim();
      }
    } else {
      const dashIdx = itemText.indexOf(" — ");
      if (dashIdx !== -1) {
        title = itemText.substring(0, dashIdx).trim();
        standard = itemText.substring(dashIdx + 3).trim();
      }
    }
    
    return { title, standard, tag };
  };

  // Generate WhatsApp message link
  const whatsappUrl = useMemo(() => {
    const text = `Hello Sakshi Forge, I would like to request a quotation for electropolished pipes for delivery to ${cityData.city}, ${cityData.state}.`;
    return `https://wa.me/918291366340?text=${encodeURIComponent(text)}`;
  }, [cityData.city, cityData.state]);

  return (
    <div className="city-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '2rem', paddingTop: '5.5rem' }}>
      
      {/* 1. Hero / Header & Intro */}
      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.85), rgba(18, 21, 28, 0.99)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6.5rem 0 5rem 0',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative'
      }}>
        {/* Glow overlay for top aesthetic */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          width: '80%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, var(--primary-yellow-solid-glow), transparent)'
        }}></div>

        <div className="container">
          
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap', fontWeight: '500' }}>
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} style={{ color: 'inherit', textDecoration: 'none', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-yellow)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Home</a>
            <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
            <a href="/market-area" onClick={(e) => handleLinkClick(e, '/market-area')} style={{ color: 'inherit', textDecoration: 'none', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-yellow)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Market Area</a>
            <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>{cityData.city}</span>
          </div>

          <div style={{ maxWidth: '900px' }}>
            <div style={{ 
              backgroundColor: 'var(--primary-yellow-glow)', 
              color: 'var(--primary-yellow)', 
              border: '1px solid var(--primary-yellow-solid-glow)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: '800',
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              backdropFilter: 'blur(5px)'
            }}>
              <Globe size={12} />
              Industrial Supply Location • {cityData.state}
            </div>
            
            {/* Custom Gradient H1 */}
            <h1 style={{ 
              fontSize: '3.2rem', 
              fontWeight: '850', 
              marginBottom: '1.5rem', 
              lineHeight: '1.15', 
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 50%, var(--primary-yellow) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {cityData.h1}
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.75', marginBottom: '3rem', fontWeight: '400', maxWidth: '800px' }}>
              {cityData.section1_heroIntro}
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onEnquireClick(cityData.h1)} 
                className="btn btn-primary btn-lg" 
                style={{ 
                  padding: '1rem 2rem', 
                  fontSize: '0.95rem', 
                  fontWeight: '700', 
                  boxShadow: '0 4px 14px var(--primary-yellow-glow)'
                }}
              >
                Request Localized Quote
              </button>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-lg" 
                style={{ 
                  borderColor: '#10b981', 
                  color: '#10b981', 
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.6rem',
                  padding: '1rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: '700'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#10b981';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
                  e.currentTarget.style.color = '#10b981';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                WhatsApp Inquiry
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Value Proposition (Why Choose Us) */}
      {whyPoints.length > 0 && (
        <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Engineered Excellence</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                {cityData.h2_2 || 'Why Choose Sakshi Forge'}
              </h2>
              <div className="accent-line" style={{ margin: '0 auto', width: '80px', height: '3px', backgroundColor: 'var(--primary-yellow)', borderRadius: '2px' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {whyPoints.map((point) => (
                <div key={point.num} style={{ 
                  backgroundColor: 'var(--bg-dark-800)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '14px', 
                  padding: '2.5rem 2.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
                className="hover-card"
                >
                  {/* Floating transparent large number */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-5px',
                    fontSize: '6.5rem',
                    fontWeight: '900',
                    color: 'rgba(255, 193, 7, 0.025)',
                    lineHeight: '1',
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }}>
                    {point.num}
                  </div>

                  {/* Icon Wrapper */}
                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
                    backgroundColor: 'var(--primary-yellow-glow)', 
                    color: 'var(--primary-yellow)', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid var(--primary-yellow-solid-glow)',
                    boxShadow: 'inset 0 0 10px rgba(255, 193, 7, 0.05)'
                  }}>
                    {getWhyIcon(point.num, point.title)}
                  </div>
                  
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '750', color: 'var(--text-primary)', letterSpacing: '-0.01em', marginTop: '0.25rem' }}>
                    {point.title}
                  </h3>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0, fontWeight: '400' }}>
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Industrial Context & Live Dispatch Dashboard */}
      <section style={{ 
        padding: '6.5rem 0', 
        backgroundColor: 'var(--bg-dark-800)', 
        borderTop: '1px solid var(--border-color)', 
        borderBottom: '1px solid var(--border-color)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '5rem', alignItems: 'center' }} className="about-market-grid">
            
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Local Demand & Integration</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  {cityData.h2_3 || `Industrial Context in ${cityData.city}`}
                </h2>
                <div className="accent-line" style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary-yellow)', borderRadius: '2px' }}></div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '2.5rem', fontWeight: '400' }}>
                {cityData.section3_industrialContext}
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }} className="about-sub-grid-responsive">
                
                <div style={{ 
                  backgroundColor: 'var(--bg-dark-900)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '12px', 
                  padding: '1.5rem',
                  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Building size={16} style={{ color: 'var(--primary-yellow)' }} />
                    <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', fontWeight: '700', margin: 0 }}>Industrial Belts</h4>
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '700', margin: 0, lineHeight: '1.4' }}>
                    {cityData.industrialAreas}
                  </p>
                </div>

                <div style={{ 
                  backgroundColor: 'var(--bg-dark-900)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '12px', 
                  padding: '1.5rem',
                  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Activity size={16} style={{ color: 'var(--primary-yellow)' }} />
                    <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', fontWeight: '700', margin: 0 }}>Core Applications</h4>
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '700', margin: 0, lineHeight: '1.4' }}>
                    {cityData.keyIndustries}
                  </p>
                </div>

              </div>
            </div>

            {/* Premium Live Tracker Widget */}
            <div style={{ position: 'relative' }}>
              <LiveDeliveryWidget city={cityData.city} state={cityData.state} />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Products Promo */}
      <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
            <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Comprehensive Supply</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              {cityData.h2_4 || 'Products Available for Supply'}
            </h2>
            <div className="accent-line" style={{ margin: '0 auto', width: '80px', height: '3px', backgroundColor: 'var(--primary-yellow)', borderRadius: '2px' }}></div>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '3.5rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
              {productPromo.intro}
            </p>

            {productPromo.items.length > 0 && (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '1.5rem',
                marginBottom: '4rem'
              }}>
                {productPromo.items.map((item, idx) => {
                  const { title, standard, tag } = parseProductItem(item);
                  
                  return (
                    <div key={idx} style={{ 
                      backgroundColor: 'var(--bg-dark-800)', 
                      border: '1px solid var(--border-color)', 
                      borderLeft: '3.5px solid var(--primary-yellow)',
                      borderRadius: '8px', 
                      padding: '1.5rem 1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      transition: 'var(--transition-smooth)'
                    }}
                    className="hover-card"
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <Shield size={18} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '0.15rem' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.4' }}>
                            {title}
                          </span>
                          {standard && (
                            <span style={{ 
                              color: 'var(--primary-yellow)', 
                              fontSize: '0.75rem', 
                              fontWeight: '700',
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                              marginTop: '0.1rem'
                            }}>
                              {standard}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {tag && (
                        <div style={{ 
                          marginTop: '0.25rem',
                          display: 'inline-flex',
                          alignSelf: 'flex-start',
                          backgroundColor: 'var(--bg-dark-900)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '4px',
                          fontWeight: '600',
                          textTransform: 'capitalize'
                        }}>
                          {tag}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {productPromo.outro && (
              <div style={{ 
                backgroundColor: 'var(--bg-dark-800)', 
                borderLeft: '4px solid var(--primary-yellow)', 
                borderTop: '1px solid var(--border-color)',
                borderRight: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
                borderRadius: '12px', 
                padding: '1.75rem 2.25rem',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.7',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '800', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Award size={18} />
                  Procurement Guideline
                </div>
                {productPromo.outro}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      {cityData.faqs && cityData.faqs.length > 0 && (
        <section style={{ 
          backgroundColor: 'var(--bg-dark-800)', 
          borderTop: '1px solid var(--border-color)', 
          borderBottom: '1px solid var(--border-color)', 
          padding: '6.5rem 0' 
        }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Technical Q&A</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                {cityData.h2_5_faqHeading || 'Frequently Asked Questions'}
              </h2>
              <div className="accent-line" style={{ margin: '0 auto', width: '80px', height: '3px', backgroundColor: 'var(--primary-yellow)', borderRadius: '2px' }}></div>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cityData.faqs.map((faq, idx) => {
                const isActive = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    style={{ 
                      border: '1px solid ' + (isActive ? 'var(--primary-yellow-solid-glow)' : 'var(--border-color)'), 
                      borderRadius: '10px', 
                      backgroundColor: isActive ? 'var(--bg-dark-700)' : 'var(--bg-dark-900)',
                      boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.15)' : 'none',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: '100%',
                        padding: '1.4rem 1.75rem',
                        backgroundColor: 'transparent',
                        border: 'none',
                        textAlign: 'left',
                        color: isActive ? 'var(--primary-yellow)' : 'var(--text-primary)',
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1.25rem',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <FaqIcon size={18} style={{ color: isActive ? 'var(--primary-yellow)' : 'var(--text-muted)', flexShrink: 0 }} />
                        {faq.q}
                      </span>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '1px solid ' + (isActive ? 'var(--primary-yellow)' : 'var(--border-color)'),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {isActive ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </div>
                    </button>
                    {isActive && (
                      <div 
                        style={{ 
                          padding: '0 1.75rem 1.75rem 1.75rem', 
                          color: 'var(--text-secondary)',
                          fontSize: '0.95rem',
                          lineHeight: '1.7',
                          borderTop: '1px solid var(--border-color)',
                          backgroundColor: 'rgba(0,0,0,0.1)'
                        }}
                      >
                        <p style={{ marginTop: '1.25rem', margin: '1.25rem 0 0 0' }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. CTA / Action Block */}
      <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: 'var(--bg-dark-800)', 
            border: '1px solid var(--border-color)',
            borderTop: '3px solid var(--primary-yellow)',
            borderRadius: '16px',
            padding: '4.5rem 3.5rem',
            textAlign: 'center',
            boxShadow: '0 15px 45px rgba(0,0,0,0.35)',
            background: 'linear-gradient(180deg, var(--bg-dark-800) 0%, rgba(18, 21, 28, 0.4) 100%)',
            maxWidth: '950px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background design accents */}
            <div style={{
              position: 'absolute',
              bottom: '-100px',
              left: '-100px',
              width: '250px',
              height: '250px',
              backgroundColor: 'rgba(255, 193, 7, 0.015)',
              filter: 'blur(80px)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}></div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: '850', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              Request Localized Quotation for {cityData.city}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: '1.7', fontWeight: '400' }}>
              Get direct manufacturer rates on electropolished SS pipes, sanitary tubing, fittings, and forged flanges. Receive a locked-in quotation within 2 business hours.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onEnquireClick(cityData.h1)} 
                className="btn btn-primary btn-lg"
                style={{ padding: '1rem 2.25rem', fontSize: '0.95rem', fontWeight: '750', boxShadow: '0 4px 14px var(--primary-yellow-glow)' }}
              >
                Submit RFQ Form
              </button>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-lg" 
                style={{ 
                  borderColor: '#25D366', 
                  color: '#25D366', 
                  backgroundColor: 'rgba(37, 211, 102, 0.05)',
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.6rem',
                  padding: '1rem 2.25rem',
                  fontSize: '0.95rem',
                  fontWeight: '750'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.05)';
                  e.currentTarget.style.color = '#25D366';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                WhatsApp Sales Desk
              </a>

              <a 
                href="mailto:sakshiforge1737@gmail.com" 
                className="btn btn-secondary btn-lg"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.6rem',
                  padding: '1rem 2.25rem',
                  fontSize: '0.95rem',
                  fontWeight: '750'
                }}
              >
                <Mail size={18} />
                Email Sales
              </a>
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '2rem', fontWeight: '500' }}>
              * Complimentary raw material profilometer report (Ra surface mapping) provided with first order.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Also Serving (Nearby Spokes) */}
      {cityData.nearbyCitySpokes && cityData.nearbyCitySpokes.length > 0 && (
        <section style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <span style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.8rem', 
                fontWeight: '800', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <MapPin size={14} style={{ color: 'var(--primary-yellow)' }} />
                Supply Node Hub coverage:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cityData.nearbyCitySpokes.map((spoke, idx) => (
                  <a
                    key={idx}
                    href={spoke.path}
                    onClick={(e) => handleLinkClick(e, spoke.path)}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      backgroundColor: 'var(--bg-dark-800)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                      e.currentTarget.style.color = 'var(--primary-yellow)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-dark-700)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-dark-800)';
                    }}
                  >
                    {spoke.city}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
