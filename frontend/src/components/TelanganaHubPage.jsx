import React, { useEffect } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Phone, Mail, Award, CheckCircle2, Factory } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function TelanganaHubPage({ onEnquireClick, onShowContactDetails }) {
  const handleShowContact = onShowContactDetails || (() => onEnquireClick && onEnquireClick('Telangana State Hub Contact Request'));
  
  const cities = [
    {
      name: "Hyderabad",
      slug: "hyderabad",
      path: "/market-area/hyderabad",
      clusters: "Jeedimetla, Balanagar, Cherlapally, Bachupally, Kukatpally, Mallapur, Nacharam, Genome Valley",
      focus: "Pharma, Biotech, Bulk Drug Clean Utilities, WFI Loops, Purified Water (SS 316L / 304L, ASME BPE)",
      tag: "Bulk-Drug & Life Sciences Capital"
    },
    {
      name: "Sangareddy",
      slug: "sangareddy",
      path: "/market-area/sangareddy",
      clusters: "Patancheru, Pashamylaram, Bollaram, Gaddapotharam, Medical Devices Park (Sultanpur), Zaheerabad",
      focus: "API & Chemical Synthesis Clean Side, Medical Device Precision Tubing & Zaheerabad Corridor Projects",
      tag: "Western Pharma & Medical Devices"
    },
    {
      name: "Karimnagar",
      slug: "karimnagar",
      path: "/market-area/karimnagar",
      clusters: "Karimnagar IDA, Jammikunta Food Park, Choppadandi, Huzurabad, Manakondur",
      focus: "Sanitary SS Tubes for Dairy Reception, Curd & Milk Processing, Caustic/Acid CIP Lines (Ra ≤0.4 µm)",
      tag: "Dairy & Agro-Food Hub"
    },
    {
      name: "Mahabubnagar",
      slug: "mahabubnagar",
      path: "/market-area/mahabubnagar",
      clusters: "Jadcherla Pharma SEZ, Divitipally (NH 44), Kothur, Shadnagar, Vemula–Moosapet",
      focus: "NH 44 Corridor Pharma SEZ, Battery Plant DM-Water Utility & Mega Food Park Hygienic Transfer",
      tag: "NH 44 Industrial Corridor"
    },
    {
      name: "Warangal",
      slug: "warangal",
      path: "/market-area/warangal",
      clusters: "Kakatiya Mega Textile Park (PM MITRA Shayampet), Hanamkonda, Kazipet, Sangem",
      focus: "Textile Wet-Processing Salt/Dye Liquor Lines (SS 316L), Steam Condensate, Agro & Chilli Wash Lines",
      tag: "PM MITRA Mega Textile Hub"
    },
    {
      name: "Nizamabad",
      slug: "nizamabad",
      path: "/market-area/nizamabad",
      clusters: "Mega Food Park (Nandipet), Bodhan Sugar & Distillery (Shakkarnagar), Sarangapur, Armoor",
      focus: "Food Park Tenant Lines, Sugar & Ethanol Clean-Side Process Water, Condensate & CIP Loops",
      tag: "Mega Food Park & Agro Hub"
    },
    {
      name: "Siddipet",
      slug: "siddipet",
      path: "/market-area/siddipet",
      clusters: "Genome Valley Phase III (Karkapatla Biotech Park), Gajwel Special Food Zone, Markook",
      focus: "BSL3 Biologics & Veterinary Vaccine WFI/Clean Steam Loops, ASME BPE Tubing, Food Zone Clean Utility",
      tag: "Genome Valley Phase III Biotech"
    },
    {
      name: "Ramagundam",
      slug: "ramagundam",
      path: "/market-area/ramagundam",
      clusters: "NTPC Super Thermal Power Station, Godavarikhani, Peddapalli, Basanthnagar",
      focus: "Power Station Demineralised (DM) Water Loops, Boiler-Chemistry Sampling & Maintenance Shutdown Spools",
      tag: "Thermal Power & Heavy Utility"
    },
    {
      name: "Khammam",
      slug: "khammam",
      path: "/market-area/khammam",
      clusters: "Buggapadu Mega Food Park, Khammam City IDA, Kothagudem & Paloncha Belt, Bhadrachalam",
      focus: "Chilli & Spice Paste Lines (SS 316L Pitting Resistance), Mega Food Park CIP & Heavy Industry DM Water",
      tag: "Food Park & Spices Hub"
    }
  ];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = "Electropolished Pipe Manufacturer Across Telangana | Sakshi Forge";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Sakshi Forge manufactures and supplies electropolished SS 316L, 304L and duplex pipes to Telangana industrial corridors: Hyderabad, Sangareddy, Patancheru, Karimnagar, Mahabubnagar, Warangal, Nizamabad, Siddipet, Ramagundam and Khammam.");
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
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>Telangana</span>
          </div>

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
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <Factory size={14} />
            State Industrial Supply Hub · Telangana Corridors
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '850', lineHeight: '1.2', color: '#fff', marginBottom: '1.25rem' }}>
            Electropolished Stainless Steel Pipe Manufacturer Across Telangana
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '2rem' }}>
            Sakshi Forge manufactures and electropolishes SS 316L, 304L, and Duplex 2205 pipes and tubes in-house at Taloja MIDC, supplying Telangana’s bulk-drug, vaccine, biotechnology, medical-device, textile, food-park, and thermal-utility plants directly with EN 10204 3.1 MTCs, 100% PMI testing, and guaranteed internal Ra ≤0.4 µm.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button onClick={() => onEnquireClick('Telangana State Hub RFQ')} className="btn btn-primary btn-lg" style={{ padding: '0.9rem 1.85rem', fontWeight: '700' }}>
              Request Telangana Quote in 30 Min <ArrowRight size={16} />
            </button>
            <button 
              onClick={handleShowContact} 
              className="btn btn-outline btn-lg" 
              style={{ 
                padding: '0.9rem 1.85rem', 
                fontWeight: '700', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem' 
              }}
            >
              <Phone size={16} /> Show Contact Details
            </button>
          </div>

          {/* Trust Strip */}
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.04)', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '8px', 
            padding: '0.9rem 1.25rem', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '0.75rem 1.25rem', 
            fontSize: '0.85rem', 
            color: '#e2e8f0' 
          }}>
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Factory Direct:</span>
            <span>ISO 9001:2015</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span>EN 10204 3.1 MTC</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span>100% PMI Tested</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span>Internal Ra ≤0.4 µm (ASME BPE SF4)</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span>ASTM A269 / A270 / A790</span>
          </div>
        </div>
      </section>

      {/* Cities Directory Grid */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.75rem' }}>
              9 Major Industrial Belts We Supply Across Telangana
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>
              Select your industrial zone to view dedicated regional capabilities, zone-by-zone specifications, local buying guides, and technical test certificate protocols:
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
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 193, 7, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', margin: 0 }}>{c.name}</h3>
                    <span style={{ fontSize: '0.72rem', fontWeight: '700', backgroundColor: 'rgba(255, 193, 7, 0.1)', color: 'var(--primary-yellow)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>
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
