import React, { useState, useMemo, useEffect } from 'react';
import { ChevronRight, ShieldCheck, Truck, Sparkles, MapPin, HelpCircle, ChevronDown, ChevronUp, Phone, Mail, FileText, Globe, Building, Award, Activity, ArrowRight, Shield, Layers, FileCheck, HelpCircle as FaqIcon, CheckCircle2, Sliders, Cpu, Zap, Box } from 'lucide-react';
import { handleLinkClick } from '../utils/router';
import { customCityData } from '../data/customCityData';

// Premium Live Delivery Widget Component
const LiveDeliveryWidget = ({ city, state, country, transitLine, freightBasis }) => {
  const isInternational = country && country !== 'India';
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
            Supply Corridor
          </span>
        </div>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.05em' }}>
          {isInternational ? 'International Export Route' : 'Direct Works Dispatch'}
        </span>
      </div>

      {/* Destination description */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: '700' }}>
          Supply Route & Logistics
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Mumbai Works</div>
          <ArrowRight size={16} style={{ color: 'var(--primary-yellow)' }} />
          <div style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--primary-yellow)' }}>{city} Site</div>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
          {transitLine}
        </p>
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
          { label: 'Raw Steel QA Check & Heat Verification (PMI Tested)', status: 'complete' },
          { label: 'Cold Drawing & Dimensional Calibrations', status: 'complete' },
          { label: 'Electropolishing Process (Internal Ra ≤ 0.38 µm)', status: 'complete' },
          { label: 'Final Profilometer Inspection & MTC 3.1 Certification', status: 'complete' },
          { label: isInternational ? 'Export Packing in ISPM-15 Heat-Treated Crates' : 'Protective Packaging & Transit Dispatch', status: 'transit' },
        ].map((step, idx) => (
          <div key={idx} style={{ position: 'relative', fontSize: '0.85rem' }}>
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
                  {freightBasis}
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
          Dispatched with EN 10204 3.1 Mill Test Certificates, NABL lab chemical analysis & Ra profilometer mapping.
        </span>
      </div>
    </div>
  );
};

export default function CityPage({ cityData, onEnquireClick }) {
  const [openFaq, setOpenFaq] = useState(0);
  const custom = customCityData[cityData.slug];
  const isInternational = cityData.country && cityData.country !== 'India';
  const rfqData = custom?.rfq || custom?.rfqBlock;
  const closingData = custom?.closing || custom?.closingBlock;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Inject structured JSON-LD schemas
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Breadcrumb schema
    const breadcrumbList = custom?.breadcrumb ? custom.breadcrumb.map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.name,
      "item": `https://steelmanufacturer.in${b.path}`
    })) : [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://steelmanufacturer.in" },
      { "@type": "ListItem", "position": 2, "name": "Market Directory", "item": "https://steelmanufacturer.in/market-area" },
      { "@type": "ListItem", "position": 3, "name": cityData.city, "item": cityData.fullPageUrl || `https://steelmanufacturer.in${cityData.path}` }
    ];

    // Organization & Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbList
        },
        {
          "@type": "Service",
          "name": `Electropolished Pipes & Tubes Supply in ${cityData.city}`,
          "provider": {
            "@type": "Organization",
            "name": "Sakshi Forge",
            "url": "https://steelmanufacturer.in",
            "logo": "https://steelmanufacturer.in/favicon.svg"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": cityData.city,
            "containedInPlace": { "@type": "AdministrativeArea", "name": cityData.state }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Electropolished Stainless Steel Pipes Catalog",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "ASTM A270 Electropolished SS 316L Pipe", "material": "SS 316L", "brand": "Sakshi Forge" } },
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "ASME BPE SF4 Sanitary Electropolished Tubing", "material": "SS 304 / 316L", "brand": "Sakshi Forge" } }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": (cityData.faqs || []).map(f => ({
            "@type": "Question",
            "name": f.question || f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer || f.a }
          }))
        },
        ...(custom?.logistics?.videoId ? [{
          "@type": "VideoObject",
          "@id": `https://steelmanufacturer.in${cityData.path}#video`,
          "name": "Electropolished Stainless Steel Pipes Manufacturing & Testing",
          "description": "Electropolishing process, borescope internal inspection and Ra profilometer testing for high-purity stainless steel tube at Sakshi Forge Mumbai works.",
          "thumbnailUrl": `https://i.ytimg.com/vi/${custom.logistics.videoId}/hqdefault.jpg`,
          "uploadDate": "2026-01-01T08:00:00+05:30",
          "embedUrl": `https://www.youtube.com/embed/${custom.logistics.videoId}`
        }] : [])
      ]
    };

    const existingScript = document.getElementById('city-jsonld-schema');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'city-jsonld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('city-jsonld-schema');
      if (s) s.remove();
    };
  }, [cityData, custom]);

  // Icons mapping for Why Choose Us
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

  // Why points fallback if section2 string present
  const whyPoints = useMemo(() => {
    if (custom?.whyUs?.cards && custom.whyUs.cards.length > 0) {
      return custom.whyUs.cards;
    }
    if (custom?.whyPoints && custom.whyPoints.length > 0) {
      return custom.whyPoints;
    }
    const text = cityData.section2_whyChooseUs;
    if (!text) return [
      { num: '1', title: 'Ultra-Smooth Internal Surface (Ra ≤ 0.38 µm / SF4)', desc: 'Electrochemical dissolution eliminates micro-burrs and microscopic crevices, preventing bio-film accumulation.' },
      { num: '2', title: '100% PMI & EN 10204 3.1 MTC Certified', desc: 'Every batch undergoes Positive Material Identification (PMI) and hydrostatic pressure testing before dispatch.' },
      { num: '3', title: 'Fast Road Transit from Mumbai Plant', desc: `${cityData.transitLine || 'Direct daily dispatch via express road lanes to ' + cityData.city + '.'}` },
      { num: '4', title: 'Comprehensive Sanitary Fittings & Flanges Stock', desc: 'Single-source procurement for EP pipes, tri-clamp fittings, weld neck flanges, and high-purity valves.' },
      { num: '5', title: 'Protective Export-Grade Crate Packaging', desc: 'All pipes are end-capped, polyethylene sleeved, and packed in reinforced wooden crates to ensure pristine delivery.' }
    ];
    const points = [];
    const regex = /\((\d+)\)\s*(.*?)(?=\s*\(\d+\)|$)/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const parts = match[2].split(" - ");
      points.push({
        num: match[1],
        title: parts[0]?.trim() || "",
        desc: parts[1]?.trim() || ""
      });
    }
    return points;
  }, [cityData, custom]);

  return (
    <div className="city-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '2rem', paddingTop: '5.5rem' }}>
      
      {/* 1. Hero / Header & Intro */}
      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.88), rgba(18, 21, 28, 0.99)), url("/hero_forge.webp")',
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
            {(custom?.breadcrumb || [
              { name: 'Home', path: '/' },
              { name: 'Market Directory', path: '/market-area' },
              { name: cityData.city, path: cityData.fullPageUrl || cityData.path }
            ]).map((b, i, arr) => (
              <React.Fragment key={i}>
                {i < arr.length - 1 ? (
                  <>
                    <a href={b.path} onClick={(e) => handleLinkClick(e, b.path)} style={{ color: 'inherit', textDecoration: 'none', transition: 'var(--transition-fast)' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-yellow)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>{b.name}</a>
                    <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
                  </>
                ) : (
                  <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>{b.name}</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: custom ? 'minmax(0, 1.25fr) minmax(0, 0.75fr)' : '1fr',
            gap: '3rem',
            alignItems: 'center'
          }} className="hero-grid-responsive">
            <div>
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
                {custom?.eyebrow || `Industrial Supply Location • ${cityData.state}${cityData.country && cityData.country !== 'India' ? ', ' + cityData.country : ''}`}
              </div>
              
              {/* Custom Gradient H1 */}
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '850', 
                marginBottom: custom?.reviewerByline ? '0.75rem' : '1.5rem', 
                lineHeight: '1.15', 
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 50%, var(--primary-yellow) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {custom?.h1 || cityData.h1}
              </h1>

              {custom?.reviewerByline && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--primary-yellow)', flexShrink: 0 }} />
                  <span>{custom.reviewerByline}</span>
                </div>
              )}
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '2rem', fontWeight: '400' }}>
                {custom?.heroIntro ? (
                  <span>{custom.heroIntro}</span>
                ) : (
                  <>Sakshi Forge is a premier manufacturer and supplier of ASTM A270 &amp; ASME BPE compliant <strong>electropolished stainless steel pipes</strong> for pharmaceutical, biotechnology, semiconductor, and high-purity chemical units in <strong>{cityData.city}</strong>. We deliver 100% PMI-tested SS 304, 316L, and 904L EP tubing with internal surface roughness Ra ≤ 0.38 µm (SF4) directly from our Mumbai manufacturing plant.</>
                )}
              </p>

              {/* Trust Badges */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {(custom?.trustBadges || [
                  'ISO 9001:2015 Certified',
                  'EN 10204 3.1 MTC Provided',
                  '100% PMI Tested Metallurgy',
                  `Fast Road Transit to ${cityData.city}`
                ]).map((badge, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'var(--bg-dark-800)',
                    border: '1px solid var(--border-color)',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--primary-yellow)' }} />
                    {badge}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  onClick={() => onEnquireClick(custom?.h1 || cityData.h1)} 
                  className="btn btn-primary btn-lg" 
                  style={{ 
                    padding: '1rem 2rem', 
                    fontSize: '0.95rem', 
                    fontWeight: '700', 
                    boxShadow: '0 4px 14px var(--primary-yellow-glow)'
                  }}
                >
                  {custom?.primaryBtnText || `Request Localized Quote for ${cityData.city}`}
                </button>
                {custom?.whatsappLink && (
                  <a
                    href={custom.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                    style={{
                      padding: '1rem 1.6rem',
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      borderColor: '#25D366',
                      color: '#25D366'
                    }}
                  >
                    <Phone size={16} />
                    WhatsApp Your RFQ
                  </a>
                )}
                <a
                  href="mailto:sales@steelmanufacturer.in"
                  className="btn btn-secondary btn-lg"
                  style={{
                    padding: '1rem 1.6rem',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Mail size={16} />
                  Email Sales Team
                </a>
              </div>
            </div>

            {/* Product image on the right */}
            {custom && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <figure className="ep-photo" style={{ margin: 0, maxWidth: '440px', width: '100%' }}>
                  <img
                    src="/electropolished-pipes.jpg"
                    alt="Electropolished pipes"
                    width="500"
                    height="500"
                    fetchPriority="high"
                    decoding="async"
                    style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 12px 35px rgba(0,0,0,0.5)' }}
                  />
                  <figcaption style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.65rem', textAlign: 'center', fontWeight: '600' }}>
                    Electropolished Pipes
                  </figcaption>
                </figure>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 1.5 Jump Links Bar (E-E-A-T navigation) */}
      {custom?.jumpLinks && (
        <nav style={{ backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)', padding: '0.85rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', overflowX: 'auto', paddingBottom: '0.2rem', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '800', color: 'var(--primary-yellow)' }}>On this page:</span>
              {custom.jumpLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    backgroundColor: 'var(--bg-dark-900)',
                    border: '1px solid var(--border-color)',
                    fontWeight: '600'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* 2. Local Intent & Industrial Relevance Paragraph */}
      <section id="al-ain" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '4.5rem', alignItems: 'center' }} className="about-market-grid">
            <div>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {custom?.localBlock?.eyebrow || 'LOCAL INDUSTRIAL INTEGRATION'}
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                {custom?.localBlock?.title || `Supplying High-Purity EP Tubing Across ${cityData.city} Estates`}
              </h2>
              <div className="accent-line" style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary-yellow)', borderRadius: '2px', marginBottom: '1.75rem' }}></div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                {custom?.localBlock?.body || (
                  <>Our electropolished sanitary pipes and fittings are specifically engineered for high-purity water (PW/WFI), clean steam, and sterile fluid transfers in key industrial zones across {cityData.city}, including <strong>{cityData.industrialAreas}</strong>.</>
                )}
              </p>

              {/* Sector cards if present (e.g. Al Ain) */}
              {custom?.localBlock?.sectors && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  {custom.localBlock.sectors.map((sec, idx) => (
                    <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '1rem' }}>
                      <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-yellow)', fontWeight: '800', margin: '0 0 0.35rem 0' }}>{sec.title}</h4>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}><strong>Plant runs:</strong> {sec.runs}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}><strong>We supply:</strong> {sec.supply}</div>
                    </div>
                  ))}
                </div>
              )}

              {custom?.localBlock?.points && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {custom.localBlock.points.map((pt, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Local Info Cards */}
              {custom?.localBlock?.infoCards ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                  {custom.localBlock.infoCards.map((card, idx) => (
                    <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '1rem' }}>
                      <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', fontWeight: '700', margin: '0 0 0.35rem 0' }}>{card.title}</h4>
                      <p style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: '600', margin: 0, lineHeight: '1.4' }}>{card.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="about-sub-grid-responsive">
                  <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <Building size={16} style={{ color: 'var(--primary-yellow)' }} />
                      <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', fontWeight: '700', margin: 0 }}>Named Industrial Zones</h4>
                    </div>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '700', margin: 0, lineHeight: '1.4' }}>
                      {cityData.industrialAreas}
                    </p>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <Activity size={16} style={{ color: 'var(--primary-yellow)' }} />
                      <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', fontWeight: '700', margin: 0 }}>Dominant Industry Mix</h4>
                    </div>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '700', margin: 0, lineHeight: '1.4' }}>
                      {cityData.keyIndustries}
                    </p>
                  </div>
                </div>
              )}

              {/* Honest Advice Callout if present */}
              {custom?.localBlock?.honestAdvice && (
                <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.05)', border: '1px solid var(--primary-yellow-solid-glow)', borderRadius: '10px', padding: '1.2rem', marginBottom: '1.25rem' }}>
                  <h4 style={{ color: 'var(--primary-yellow)', fontSize: '0.9rem', fontWeight: '800', margin: '0 0 0.5rem 0' }}>
                    {custom.localBlock.honestAdvice.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                    {custom.localBlock.honestAdvice.body}
                  </p>
                </div>
              )}

              {custom?.localBlock?.relatedPagesText && (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                  {custom.localBlock.relatedPagesText}
                </p>
              )}
            </div>

            {/* Live Logistics Widget */}
            <div>
              <LiveDeliveryWidget 
                city={cityData.city} 
                state={cityData.state} 
                country={cityData.country}
                transitLine={cityData.transitLine} 
                freightBasis={cityData.freightBasis} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Surface Roughness & Electropolishing Comparison Table */}
      <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TECHNICAL COMPARISON</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Electropolished (EP) vs Mechanically Polished (MP) Stainless Steel Pipe
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto' }}>
              {custom?.comparison?.intro || "Electropolishing removes a thin surface layer electrochemically, levelling peaks and leaving a chromium-enriched passive film. Mechanical polishing only abrades the surface."}
            </p>
          </div>

          <div style={{ overflowX: 'auto', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-dark-700)', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-yellow)' }}>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: '800' }}>Surface Property</th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: '800' }}>Electropolished (EP) Finish</th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: '800' }}>Mechanically Polished (MP) Finish</th>
                  <th style={{ padding: '1rem 1.25rem', fontWeight: '800' }}>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {custom?.comparison?.rows ? (
                  custom.comparison.rows.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 1 ? 'rgba(255, 255, 255, 0.015)' : 'transparent' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>{row.property}</td>
                      <td style={{ padding: '1rem 1.25rem', color: '#10b981', fontWeight: '700' }}>{row.ep}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>{row.mp}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>{row.why}</td>
                    </tr>
                  ))
                ) : (
                  <>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>Internal Ra (ASME BPE)</td>
                      <td style={{ padding: '1rem 1.25rem', color: '#10b981', fontWeight: '700' }}>SF4 ≤ 0.38 µm (15 µin) · SF5 ≤ 0.51 µm (20 µin) · SF6 ≤ 0.64 µm (25 µin)</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>SF1 ≤ 0.51 µm (20 µin) · SF2 ≤ 0.64 µm (25 µin) · SF3 ≤ 0.76 µm (30 µin)</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Lower Ra resists bacterial adhesion and biofilm in sanitary loops</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255, 255, 255, 0.015)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>Surface Structure</td>
                      <td style={{ padding: '1rem 1.25rem', color: '#10b981', fontWeight: '700' }}>Levelled, no directional lay</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>Directional abrasive scratches</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Faster, more reliable Clean-In-Place (CIP) and Sterilize-In-Place (SIP) cycles</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>Passive Layer</td>
                      <td style={{ padding: '1rem 1.25rem', color: '#10b981', fontWeight: '700' }}>Chromium-enriched passive layer</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>Standard passive layer unless separately passivated</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Better resistance against rouging and pitting corrosion</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>Typical Specification</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', fontWeight: '700' }}>ASTM A270 + ASME BPE SF4–SF6</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>ASTM A270 + ASME BPE SF1–SF3</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Commonly specified for regulated pharmaceutical, biotech and food-grade loops</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Grade Chemistry & Specifications */}
      <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>METALLURGY & STANDARDS</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Chemical Composition & Grade Availability
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto' }}>
              {custom?.grades?.intro || `All electropolished stainless steel pipes dispatched to ${cityData.city} conform to strict ASTM A270, ASTM A269, and ASME BPE material specifications.`}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {custom?.grades?.cards ? (
              custom.grades.cards.map((card, idx) => (
                <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: idx === 0 ? 'var(--primary-yellow)' : 'var(--text-primary)' }}>{card.title}</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', backgroundColor: 'rgba(255, 193, 7, 0.1)', color: 'var(--primary-yellow)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>{card.tag}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {card.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {card.specs.map((sp, i) => (
                      <li key={i}>{sp}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <>
                <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--primary-yellow)' }}>SS 316L EP Tubing</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', backgroundColor: 'rgba(255, 193, 7, 0.1)', color: 'var(--primary-yellow)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>PHARMA GRADE</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    Low carbon molybdenum-bearing grade designed for high-purity water loops, WFI systems, and biopharma reactors.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li><strong>Cr:</strong> 16.0 – 18.0% | <strong>Ni:</strong> 10.0 – 14.0%</li>
                    <li><strong>Mo:</strong> 2.0 – 3.0% | <strong>C:</strong> ≤ 0.030% max</li>
                    <li><strong>Surface Finish:</strong> Ra ≤ 0.38 µm (SF4) & Ra ≤ 0.51 µm (SF1)</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-primary)' }}>SS 304 / 304L EP Tubing</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', backgroundColor: 'var(--bg-dark-700)', color: 'var(--text-secondary)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>FOOD & DAIRY</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    Standard 18/8 austenitic stainless steel grade widely utilized in dairy, brewery, food processing, and general chemical lines.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li><strong>Cr:</strong> 18.0 – 20.0% | <strong>Ni:</strong> 8.0 – 11.0%</li>
                    <li><strong>C:</strong> ≤ 0.030% max (304L) | <strong>Mn:</strong> ≤ 2.0%</li>
                    <li><strong>Surface Finish:</strong> Ra ≤ 0.51 µm (20 µin) Internal</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#10b981' }}>904L & Specialty EP</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>CORROSIVE ACID</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    High-nickel super austenitic steel for handling aggressive sulfuric acid, chloride, and specialty chemical environments in {cityData.city}.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li><strong>Ni:</strong> 23.0 – 28.0% | <strong>Cr:</strong> 19.0 – 23.0%</li>
                    <li><strong>Mo:</strong> 4.0 – 5.0% | <strong>Cu:</strong> 1.0 – 2.0%</li>
                    <li><strong>PREN Index:</strong> &gt; 35 (High Pitting Resistance)</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4.5 Sizes Table (if custom city provides sizes) */}
      {custom?.sizesTable && (
        <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-900)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>DIMENSIONS & SIZES</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                {custom.sizesTable.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '750px', margin: '0 auto' }}>
                {custom.sizesTable.intro}
              </p>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto', overflowX: 'auto', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-dark-700)', color: 'var(--primary-yellow)', borderBottom: '1px solid var(--border-color)' }}>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: '800' }}>OD (inch)</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: '800' }}>OD (mm)</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: '800' }}>Wall Thickness (mm)</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: '800' }}>Standard Length</th>
                  </tr>
                </thead>
                <tbody>
                  {custom.sizesTable.rows.map((r, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>{r.inch}</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>{r.mm}</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>{r.wall}</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#10b981', fontWeight: '600' }}>{r.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 4.6 Logistics, Route & Video (if custom city provides logistics) */}
      {custom?.logistics && (
        <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>EXPORT SUPPLY CHAIN</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                {custom.logistics.title}
              </h2>
            </div>

            {/* Route graphic */}
            {custom.logistics.routeNodes && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                {custom.logistics.routeNodes.map((node, i, arr) => (
                  <React.Fragment key={i}>
                    <div style={{
                      backgroundColor: 'var(--bg-dark-900)',
                      border: '1px solid var(--border-color)',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '8px',
                      color: i === arr.length - 1 ? 'var(--primary-yellow)' : 'var(--text-primary)',
                      fontWeight: '700',
                      fontSize: '0.9rem'
                    }}>
                      {node}
                    </div>
                    {i < arr.length - 1 && <ArrowRight size={18} style={{ color: 'var(--primary-yellow)' }} />}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Process steps */}
            {custom.logistics.processSteps && (
              <div style={{ maxWidth: '850px', margin: '0 auto 2.5rem auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {custom.logistics.processSteps.map((step) => (
                  <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', backgroundColor: 'var(--bg-dark-900)', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--primary-yellow-glow)', color: 'var(--primary-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.85rem', flexShrink: 0 }}>
                      {step.num}
                    </div>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* YouTube Process Video */}
            {custom.logistics.videoId && (
              <div style={{ maxWidth: '800px', margin: '2.5rem auto 3rem auto' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${custom.logistics.videoId}?rel=0`}
                    title="Electropolished Tube Manufacturing & Testing"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Limitations Callout if present */}
            {custom.logistics.limitations && (
              <div style={{ maxWidth: '850px', margin: '0 auto 2.5rem auto', backgroundColor: 'rgba(255, 193, 7, 0.04)', border: '1px solid var(--primary-yellow-solid-glow)', borderRadius: '10px', padding: '1.25rem' }}>
                <h4 style={{ color: 'var(--primary-yellow)', fontSize: '0.95rem', fontWeight: '800', margin: '0 0 0.5rem 0' }}>
                  {custom.logistics.limitations.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                  {custom.logistics.limitations.body}
                </p>
              </div>
            )}

            {/* Logistics Info Cards */}
            {custom.logistics.infoRows && (
              <div style={{ maxWidth: '850px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {custom.logistics.infoRows.map((info, idx) => (
                  <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '1.2rem' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary-yellow)', fontWeight: '800', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{info.label}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5' }}>{info.value}</div>
                  </div>
                ))}
              </div>
            )}

            {custom.logistics.footnote && (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '2rem', maxWidth: '750px', margin: '2rem auto 0 auto' }}>
                {custom.logistics.footnote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 4.7 Specification Guide & Inspection Checklist (e.g. Al Ain) */}
      {custom?.specGuide && (
        <section id="spec-guide" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-900)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{custom.specGuide.eyebrow || 'SPECIFICATION GUIDE'}</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                {custom.specGuide.title}
              </h2>
              {custom.specGuide.intro && (
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '750px', margin: '0 auto' }}>
                  {custom.specGuide.intro}
                </p>
              )}
            </div>

            <div style={{ maxWidth: '950px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
              {custom.specGuide.checklist && (
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-yellow)', marginBottom: '1rem' }}>
                    8-Point RFQ Checklist
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {(Array.isArray(custom.specGuide.checklist) ? custom.specGuide.checklist : (custom.specGuide.checklist.items || [])).map((it, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {custom.specGuide.mistakes && (
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ef4444', marginBottom: '1rem' }}>
                    Common Mistakes to Avoid in EP RFQs
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {(Array.isArray(custom.specGuide.mistakes) ? custom.specGuide.mistakes : (custom.specGuide.mistakes.items || [])).map((it, i) => (
                      <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        • {it}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Application & Finish Selection Matrix */}
            {custom.specGuide.finishGuide && (
              <div style={{ maxWidth: '950px', margin: '2.5rem auto 0 auto', overflowX: 'auto', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-yellow)', marginBottom: '1rem' }}>
                  Application & Surface Finish Selection Matrix
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-dark-700)', color: 'var(--primary-yellow)', borderBottom: '1px solid var(--border-color)' }}>
                      <th style={{ padding: '0.75rem 1rem' }}>Application / Process Line</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Recommended Grade</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Surface Finish</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Is Electropolishing Needed?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {custom.specGuide.finishGuide.map((fg, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)', fontWeight: '600' }}>{fg.app}</td>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{fg.grade}</td>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--primary-yellow)' }}>{fg.finish}</td>
                        <td style={{ padding: '0.75rem 1rem', color: (fg.needed.includes('Rarely') || fg.needed.includes('No')) ? 'var(--text-muted)' : '#10b981', fontWeight: '700' }}>{fg.needed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4.8 Quality Control & Inspection Section (e.g. Al Ain) */}
      {custom?.inspection && (
        <section id="inspection" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{custom.inspection.eyebrow || 'QUALITY CONTROL'}</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                {custom.inspection.title}
              </h2>
            </div>

            {/* QC Stages Table */}
            {custom.inspection.table && (
              <div style={{ maxWidth: '950px', margin: '0 auto 2.5rem auto', overflowX: 'auto', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-dark-700)', color: 'var(--primary-yellow)', borderBottom: '1px solid var(--border-color)' }}>
                      <th style={{ padding: '0.75rem 1rem' }}>Stage</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Check</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Method / Tool</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Documentation Issued</th>
                    </tr>
                  </thead>
                  <tbody>
                    {custom.inspection.table.map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: i % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)', fontWeight: '700' }}>{row.stage}</td>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{row.check}</td>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{row.method}</td>
                        <td style={{ padding: '0.75rem 1rem', color: '#10b981', fontWeight: '600' }}>{row.receives}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* TPI Note */}
            {custom.inspection.tpiNote && (
              <div style={{ maxWidth: '950px', margin: '0 auto 2rem auto', backgroundColor: 'rgba(255, 193, 7, 0.04)', border: '1px solid var(--primary-yellow-solid-glow)', borderRadius: '10px', padding: '1.25rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                  <strong>Third-Party Inspection:</strong> {custom.inspection.tpiNote}
                </p>
              </div>
            )}

            {/* Storage Guidelines */}
            {custom.inspection.storageGuidelines && (
              <div style={{ maxWidth: '950px', margin: '0 auto', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-yellow)', marginBottom: '1rem' }}>
                  Site Storage Guidelines for Desert & Warm Climates
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {custom.inspection.storageGuidelines.map((g, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4.9 Corporate Background & Honest Scope (About Sakshi Forge) */}
      {custom?.about && (
        <section id="about" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-dark-900)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{custom.about.eyebrow || 'WHO WE ARE'}</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                {custom.about.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '750px', margin: '0 auto' }}>
                {custom.about.body}
              </p>
            </div>

            <div style={{ maxWidth: '950px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {custom.about.companyFacts && (
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-yellow)', marginBottom: '1rem' }}>
                    Verified Corporate Details
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                    {custom.about.companyFacts.map((f, i) => (
                      <div key={i} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '700' }}>{f.field}</div>
                        <div style={{ color: 'var(--text-primary)', fontWeight: '600', marginTop: '0.2rem' }}>{f.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {custom.about.notSupply && (
                <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Honest Scope — What We Don't Supply
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {custom.about.notSupply.map((ns, i) => (
                      <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <ShieldCheck size={16} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{ns}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. Value Proposition / Why Points Grid */}
      {whyPoints.length > 0 && (
        <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>ENGINEERED EXCELLENCE</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                {custom?.whyUs?.title || `Why Industrial Plants in ${cityData.city} Partner with Sakshi Forge`}
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

                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
                    backgroundColor: 'var(--primary-yellow-glow)', 
                    color: 'var(--primary-yellow)', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid var(--primary-yellow-solid-glow)'
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

      {/* 6. Technical FAQs Accordion */}
      {cityData.faqs && cityData.faqs.length > 0 && (
        <section id="faq" style={{ 
          backgroundColor: 'var(--bg-dark-800)', 
          borderTop: '1px solid var(--border-color)', 
          borderBottom: '1px solid var(--border-color)', 
          padding: '6.5rem 0' 
        }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TECHNICAL Q&A</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                Frequently Asked Questions — Supply to {cityData.city}
              </h2>
              <div className="accent-line" style={{ margin: '0 auto', width: '80px', height: '3px', backgroundColor: 'var(--primary-yellow)', borderRadius: '2px' }}></div>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cityData.faqs.map((faq, idx) => {
                const isActive = openFaq === idx;
                const questionText = faq.question || faq.q;
                const answerText = faq.answer || faq.a;

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
                        {questionText}
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
                        <p style={{ marginTop: '1.25rem', margin: '1.25rem 0 0 0' }}>{answerText}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. Action / CTA Block */}
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
            <h2 style={{ fontSize: '2.5rem', fontWeight: '850', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              {rfqData?.title || `Request Direct Manufacturer Quotation for ${cityData.city}`}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto 3rem auto', lineHeight: '1.7', fontWeight: '400' }}>
              {rfqData?.body || (isInternational
                ? `Get FOB Nhava Sheva, CIF or DAP pricing on ASTM A270 electropolished 316L and 304L tube, sanitary fittings and flanges. Quotes within one business day with full EN 10204 3.1 certification.`
                : `Get competitive ex-works & FOR doorstep pricing on ASTM A270 electropolished SS 316L pipes, sanitary fittings, and forged flanges.`)}
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onEnquireClick(custom?.h1 || cityData.h1)} 
                className="btn btn-primary btn-lg"
                style={{ padding: '1rem 2.25rem', fontSize: '0.95rem', fontWeight: '750', boxShadow: '0 4px 14px var(--primary-yellow-glow)' }}
              >
                Submit RFQ Form
              </button>
              
              {custom?.whatsappLink && (
                <a 
                  href={custom.whatsappLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.6rem',
                    padding: '1rem 2.25rem',
                    fontSize: '0.95rem',
                    fontWeight: '750',
                    borderColor: '#25D366',
                    color: '#25D366'
                  }}
                >
                  <Phone size={18} />
                  WhatsApp Your RFQ
                </a>
              )}

              <a 
                href="mailto:sales@steelmanufacturer.in" 
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
                Email Sales Team
              </a>
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '2rem', fontWeight: '500' }}>
              * {rfqData?.footnote || 'Official EN 10204 3.1 Mill Test Certificates and NABL lab profilometer reports supplied with every dispatch.'}
            </p>
          </div>
        </div>
      </section>

      {/* 7.5 Closing block if present */}
      {closingData && (
        <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.9rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--primary-yellow)' }}>
              {closingData.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {closingData.body}
            </p>
            <button
              onClick={() => onEnquireClick(closingData.title || cityData.h1)}
              className="btn btn-primary btn-lg"
              style={{ padding: '0.9rem 2.2rem', fontWeight: '750' }}
            >
              {closingData.buttonText || 'Contact Us'}
            </button>
          </div>
        </section>
      )}

      {/* 8. Sibling Cluster Links (Internal Linking Map) */}
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
                Sibling Supply Destinations ({cityData.state}):
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
                    EP Pipes in {spoke.city}
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
