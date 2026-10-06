import React, { useEffect } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function TamilNaduHubPage({ onEnquireClick, onShowContactDetails }) {
  const handleShowContact = onShowContactDetails || (() => onEnquireClick && onEnquireClick('Tamil Nadu State Hub Contact Request'));
  const cities = [
    {
      name: "Chennai",
      slug: "chennai",
      path: "/market-area/chennai",
      clusters: "Manali, Ambattur, Sriperumbudur, Oragadam, Ennore",
      focus: "Pharma, Biotech, Chemical & Electronics EP Pipes (SS 316L, 304, Duplex)",
      tag: "Coastal & Pharma Hub"
    },
    {
      name: "Coimbatore",
      slug: "coimbatore",
      path: "/market-area/coimbatore",
      clusters: "Kurichi SIDCO, Peelamedu, Sulur, CODISSIA Engineering Belt",
      focus: "Pump, Motor, Food Machinery & Skid Fabrication EP Pipes & Tubes",
      tag: "Engineering & OEM Capital"
    },
    {
      name: "Hosur",
      slug: "hosur",
      path: "/market-area/hosur",
      clusters: "SIPCOT Hosur Phase 1 & 2, Zuzuvadi, Bagalur Corridor",
      focus: "Pharma Formulations, High-Purity Electronics & Clean Utility Lines",
      tag: "SIPCOT Precision Belt"
    },
    {
      name: "Cuddalore",
      slug: "cuddalore",
      path: "/market-area/cuddalore",
      clusters: "SIPCOT Cuddalore Phase 1 & 2, Kudikadu Coastal Complex",
      focus: "Duplex 2205 & Super Duplex for Chemical, Petrochemical & Coastal Duty",
      tag: "Chemical & Marine Hub"
    },
    {
      name: "Tiruchirappalli (Trichy)",
      slug: "tiruchirappalli",
      path: "/market-area/tiruchirappalli",
      clusters: "Thuvakudi, Thiruverumbur, BHEL Ancillary Belt",
      focus: "Fabricator Spools, Boilers, Power Plant Utility & Process Assemblies",
      tag: "Heavy Fabrication Belt"
    },
    {
      name: "Salem",
      slug: "salem",
      path: "/market-area/salem",
      clusters: "Ammapet, Mallur, Omalur, Attur, Mettur",
      focus: "Sago, Starch, Agro-Food, Textile Dyeing & Process Water SS 304L/316L",
      tag: "Stainless & Food Belt"
    },
    {
      name: "Madurai",
      slug: "madurai",
      path: "/market-area/madurai",
      clusters: "Nilakottai Food SIPCOT, Thirumangalam, Dindigul Corridor",
      focus: "Food, Fruit Processing, Small-Batch Fabricators & Agro Assemblies",
      tag: "Agro & Food Processing"
    },
    {
      name: "Thoothukudi",
      slug: "thoothukudi",
      path: "/market-area/thoothukudi",
      clusters: "SIPCOT Thoothukudi, Port Logistics, Gulf of Mannar Coast",
      focus: "Duplex, Super Duplex & SS 316L for Seawater, Port & Seafood Plants",
      tag: "Deepwater Port & Marine"
    },
    {
      name: "Vellore",
      slug: "vellore",
      path: "/market-area/vellore",
      clusters: "Ranipet SIPCOT, Katpadi Industrial Area",
      focus: "Leather Chemical, Process Water & Pharmaceutical Utility Lines",
      tag: "Northern Industrial Belt"
    },
    {
      name: "Erode",
      slug: "erode",
      path: "/market-area/erode",
      clusters: "Perundurai SIPCOT, Textile Processing Zones",
      focus: "Textile Wet-Processing, Food Processing & Chemical Transfer Lines",
      tag: "Textile & Process Hub"
    }
  ];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = "Electropolished Pipe Supplier Across Tamil Nadu | Sakshi Forge";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Sakshi Forge supplies electropolished SS 316L, 304L and duplex pipes across Tamil Nadu industrial hubs: Chennai, Coimbatore, Hosur, Cuddalore, Trichy, Salem, Madurai and Thoothukudi.");
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
          <span style={{ 
            backgroundColor: 'rgba(255, 193, 7, 0.1)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid rgba(255, 193, 7, 0.3)',
            padding: '0.4rem 1rem', 
            borderRadius: '50px', 
            fontSize: '0.8rem', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em',
            display: 'inline-block',
            marginBottom: '1rem'
          }}>
            State Industrial Supply Hub · Tamil Nadu
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', lineHeight: '1.2', color: '#fff', marginBottom: '1.25rem' }}>
            Electropolished Pipe Supplier Across Tamil Nadu
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '2rem' }}>
            Sakshi Forge supplies high-purity electropolished stainless steel pipes, tubes, sanitary fittings and ASME B16.5 flanges factory-direct from Mumbai to all major industrial districts across Tamil Nadu. Every order ships with 100% PMI testing and EN 10204 3.1 certification.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => onEnquireClick('Tamil Nadu State Hub RFQ')} className="btn btn-primary" style={{ padding: '0.85rem 1.85rem', fontWeight: '700' }}>
              Request Tamil Nadu Quote <ArrowRight size={16} />
            </button>
            <button 
              onClick={handleShowContact} 
              className="btn btn-outline" 
              style={{ 
                padding: '0.85rem 1.85rem', 
                fontWeight: '700', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem' 
              }}
            >
              <Phone size={16} /> Show Contact Details
            </button>
          </div>
        </div>
      </section>

      {/* Cities Directory Grid */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.75rem' }}>
              10 Major Industrial Belts We Supply in Tamil Nadu
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>
              Select your industrial region to view localized specifications, local realities, checklists and technical test certificate protocols:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {cities.map((c, idx) => (
              <div 
                key={idx}
                onClick={(e) => handleLinkClick(e, c.path)}
                style={{
                  backgroundColor: 'var(--bg-dark-800)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', margin: 0 }}>{c.name}</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'rgba(255, 193, 7, 0.1)', color: 'var(--primary-yellow)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>
                      {c.tag}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <MapPin size={14} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Industrial Zones:</strong> {c.clusters}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {c.focus}
                  </p>
                </div>

                <a 
                  href={c.path}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLinkClick(e, c.path);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg-dark-900)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    color: 'var(--primary-yellow)',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.88rem'
                  }}
                >
                  <span>Explore {c.name} Specifications</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
