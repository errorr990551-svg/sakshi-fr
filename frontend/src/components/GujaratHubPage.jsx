import React, { useEffect } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Phone, Mail, Award, CheckCircle2, Factory } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function GujaratHubPage({ onEnquireClick, onShowContactDetails }) {
  const handleShowContact = onShowContactDetails || (() => onEnquireClick && onEnquireClick('Gujarat State Hub Contact Request'));
  
  const cities = [
    {
      name: "Ahmedabad",
      slug: "ahmedabad",
      path: "/market-area/ahmedabad",
      clusters: "Naroda GIDC, Vatva, Odhav, Narol, Sarkhej, Matoda, Thaltej R&D",
      focus: "Pharma, Biotech WFI Loops, Clean Utility & Dye/Chemical Process Lines (SS 316L / 304L)",
      tag: "Pharma & Biotech Capital"
    },
    {
      name: "Vadodara (Baroda)",
      slug: "vadodara",
      path: "/market-area/vadodara",
      clusters: "Makarpura GIDC, Nandesari, Savli (Halol–Savli SIR), Waghodia, Koyali–Padra",
      focus: "Equipment OEMs, Chemical Skids, Refinery Clean Utilities & Pharma PW/WFI Lines",
      tag: "Engineering & Machinery OEM Hub"
    },
    {
      name: "Vapi",
      slug: "vapi",
      path: "/market-area/vapi",
      clusters: "Vapi GIDC (Phases I-IV), Sarigam, Umbergaon, Atul, Daman & Silvassa Corridor",
      focus: "Duplex 2205 & 316L for Specialty Chemical, Dyes, Pesticides & Fast Same-Day Express Supply",
      tag: "Chemical & Dye Capital"
    },
    {
      name: "Sanand & Changodar",
      slug: "sanand",
      path: "/market-area/sanand",
      clusters: "Sanand I & II (Bol), Khoraj (Japan Industrial Township), Changodar, Bavla, Dholka",
      focus: "New-Build Design-Stage Projects, Auto DM Water & High-Purity Pharma API Units",
      tag: "Automotive, Electronics & New-Build SIR"
    },
    {
      name: "Ankleshwar, Panoli & Jhagadia",
      slug: "ankleshwar",
      path: "/market-area/ankleshwar",
      clusters: "Ankleshwar GIDC Mega Estate, Panoli GIDC, Jhagadia, Valia Complex",
      focus: "API, Pharma, Dyes, Pesticides & High Chloride Process Utilities (316L & Duplex 2205)",
      tag: "Chemical Capital of India"
    },
    {
      name: "Surat & Hazira",
      slug: "surat",
      path: "/market-area/surat",
      clusters: "Sachin GIDC, Pandesara, Hazira Heavy Industry Coast, Kosamba, Palsana",
      focus: "Textile Dye-House Wet Lines, Steam Condensate, Textile Machinery & Coastal Hazira Utilities",
      tag: "Textile Wet-Processing & Coastal Hub"
    },
    {
      name: "Dahej PCPIR & Bharuch",
      slug: "dahej",
      path: "/market-area/dahej",
      clusters: "Dahej I-III (PCPIR Core), Dahej SEZ, Vilayat GIDC, Saykha, Bharuch Works",
      focus: "Severe Coastal Salt-Air Duty, Petrochemical Clean Utilities & EPC / Fabricator 3.1 Traceability",
      tag: "PCPIR & Marine Terminal SEZ"
    },
    {
      name: "Anand & Vitthal Udyognagar",
      slug: "anand",
      path: "/market-area/anand",
      clusters: "Vitthal Udyognagar GIDC, Karamsad, Mogar Processing Area, Nadiad GIDC",
      focus: "ASTM A270 Sanitary Dairy Lines, Milk Handling & Dairy-Machinery OEM Cut-to-Drawing Tube",
      tag: "Dairy Capital & Food Machinery Hub"
    },
    {
      name: "Mehsana, Kadi & Patan",
      slug: "mehsana",
      path: "/market-area/mehsana",
      clusters: "Dediyasan GIDC, Kadi Dahi/Dairy Belt, Kalol, Patan, Sidhpur, Unjha",
      focus: "Cooperative Dairy Milk Loops, Curd & Buttermilk Processing Lines (Ra ≤0.4 µm)",
      tag: "North Gujarat Dairy & Food Belt"
    }
  ];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = "Electropolished Pipe Manufacturer Across Gujarat | Sakshi Forge";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Sakshi Forge manufactures and supplies electropolished SS 316L, 304L and duplex pipes across Gujarat industrial corridors: Ahmedabad, Vadodara, Vapi, Sanand, Ankleshwar, Surat, Dahej, Anand, and Mehsana.");
    }
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingTop: '5.5rem', paddingBottom: '3rem' }}>
      {/* Hero */}
      <section style={{ 
        background: 'linear-gradient(to right, rgba(10, 14, 23, 0.82) 0%, rgba(10, 14, 23, 0.58) 55%, rgba(10, 14, 23, 0.38) 100%), linear-gradient(to bottom, rgba(10, 14, 23, 0.42) 0%, rgba(10, 14, 23, 0.10) 50%, rgba(10, 14, 23, 0.80) 100%), url("/sakshi-forge-banner.webp")',
        backgroundPosition: 'left top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '5rem 0 3.5rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <a href="/electropolished-pipes" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Electropolished Pipes</a>
            <span>›</span>
            <a href="/market-area" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Market Directory</a>
            <span>›</span>
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>Gujarat</span>
          </div>

          <span style={{ 
            backgroundColor: 'rgba(255, 193, 7, 0.1)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid rgba(255, 193, 7, 0.3)',
            padding: '0.35rem 0.85rem', 
            borderRadius: '4px', 
            fontSize: '0.78rem', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <Factory size={14} /> Direct Works Road Transit · Taloja Works to Gujarat Corridor
          </span>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '850', lineHeight: '1.2', marginBottom: '1rem', color: '#fff' }}>
            Electropolished Stainless Steel Pipes in <span style={{ color: 'var(--primary-yellow)' }}>Gujarat</span>
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            Direct manufacturer supply of ASTM A270 and ASME BPE compliant SS 316L, 304L and duplex 2205 electropolished tubes to Gujarat's premier pharma, chemical, dairy, textile and EPC infrastructure clusters. In-house electropolished at Taloja MIDC with certified Ra ≤0.4 µm, 100% PMI testing, and EN 10204 3.1 MTCs on every order.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button 
              onClick={() => onEnquireClick('Gujarat Statewide Supply Quote')} 
              className="btn btn-primary btn-lg"
              style={{ padding: '0.85rem 1.75rem', fontWeight: '700' }}
            >
              Request Gujarat Quote in 30 Min <ArrowRight size={16} />
            </button>
            <button 
              onClick={handleShowContact}
              className="btn btn-outline"
              style={{ padding: '0.85rem 1.5rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Phone size={16} /> Contact Works Desk
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
            <span>✓ ISO 9001:2015 Works</span>
            <span>✓ EN 10204 3.1 Heat Traceability</span>
            <span>✓ 100% PMI Verified</span>
            <span>✓ Internal Ra ≤0.4 µm (SF4)</span>
            <span>✓ NH48 Expressway Dispatch</span>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem' }}>
              Select Your Gujarat Industrial Belt
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1rem' }}>
              Explore detailed specifications, estate-by-estate mapping, grade selection guides, and transit timelines for your specific industrial estate:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {cities.map((city) => (
              <a
                key={city.slug}
                href={city.path}
                onClick={(e) => handleLinkClick(e, city.path)}
                style={{
                  backgroundColor: 'var(--bg-dark-800)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 193, 7, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--primary-yellow)', letterSpacing: '0.06em' }}>
                      {city.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} /> Gujarat
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.75rem', color: '#fff' }}>
                    {city.name}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '0.85rem' }}>
                    <strong style={{ color: '#cbd5e1' }}>Estates:</strong> {city.clusters}
                  </p>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                    {city.focus}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.9rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  View {city.name} Specifications &amp; Supply <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>

          {/* Statewide CTA Bar */}
          <div style={{
            marginTop: '3.5rem',
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.08) 0%, var(--bg-dark-800) 100%)',
            border: '1px solid var(--primary-yellow)',
            borderRadius: '12px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>
                Procuring for Multiple Gujarat Facilities?
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We frequently combine shipments across Ahmedabad, Sanand, Vadodara, Ankleshwar, Dahej and Vapi into consolidated dispatch consignments, saving significant road freight costs with unified EN 10204 3.1 documentation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                onClick={() => onEnquireClick('Consolidated Multi-Site Gujarat Enquiry')} 
                className="btn btn-primary"
                style={{ padding: '0.8rem 1.6rem', fontWeight: '700' }}
              >
                Quote Consolidated Dispatch
              </button>
              <a 
                href="/market-area" 
                onClick={handleLinkClick} 
                className="btn btn-outline"
                style={{ padding: '0.8rem 1.4rem' }}
              >
                Back to All India Directory
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
