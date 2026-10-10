import React, { useEffect } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Phone, Mail, Award, CheckCircle2, Factory } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function AndhraPradeshHubPage({ onEnquireClick, onShowContactDetails }) {
  const handleShowContact = onShowContactDetails || (() => onEnquireClick && onEnquireClick('Andhra Pradesh State Hub Contact Request'));
  
  const cities = [
    {
      name: "Visakhapatnam (Vizag)",
      slug: "visakhapatnam",
      path: "/market-area/visakhapatnam",
      clusters: "Visakhapatnam SEZ (Duvvada), Aganampudi APIIC Park, Chippada Pharma SEZ, Port, Steel & Refinery Belt, Gajuwaka",
      focus: "Formulation Pharma, WFI Loops, Port & Seawater Utility, High-Chloride Coastal Duty (Duplex 2205 & 316L, Ra ≤0.4 µm)",
      tag: "Port & Industrial Capital"
    },
    {
      name: "Anakapalle & Parawada",
      slug: "anakapalle",
      path: "/market-area/anakapalle",
      clusters: "Jawaharlal Nehru Pharma City (Parawada 2,400 acres), APSEZ Atchutapuram & Rambilli (5,595 acres), Nakkapalli, Lankelapalem",
      focus: "India's Densest Bulk-Drug Cluster: API Synthesis Clean Utilities, WFI Systems, Coastal Duplex 2205 & EPC Contractor Packs",
      tag: "JN Pharma City & Mega APSEZ"
    },
    {
      name: "Tirupati & Sri City",
      slug: "tirupati",
      path: "/market-area/tirupati",
      clusters: "Sri City Integrated Township (7,500+ acres), EMC Tirupati & Renigunta, Srikalahasti, Attivaram APIIC Park",
      focus: "Multinational Food & FMCG Lines, Pharma Purified Water, Electronics Clean Utilities & Chennai Corridor Consolidated Supply",
      tag: "Sri City Multi-Product & FMCG Hub"
    },
    {
      name: "Kakinada",
      slug: "kakinada",
      path: "/market-area/kakinada",
      clusters: "Kakinada SEZ, Pharma SEZ (Kakinada Rural), Deep-Water Port & Liquid Terminals, Fertiliser & Chemical Belt, Peddapuram",
      focus: "Seafood Brine & Processing Lines, Liquid Terminal Utilities, Chemical DM Water & Coastal Duplex 2205",
      tag: "Deep-Water Port & Marine Processing"
    },
    {
      name: "Vijayawada & Krishna Delta",
      slug: "vijayawada",
      path: "/market-area/vijayawada",
      clusters: "Autonagar Engineering Hub, Krishna Mega Food Park, Kanuru, Gannavaram–Mallavalli, Jaggayyapeta API Belt",
      focus: "Autonagar Fabricator Traceable Supply, Mango & Fruit-Pulp Transfer Lines, Dairy Clean Utilities & Pharma Systems",
      tag: "Commercial Capital & Autonagar Hub"
    },
    {
      name: "Guntur",
      slug: "guntur",
      path: "/market-area/guntur",
      clusters: "Spices Park (Edlapadu mandal 125 acres), Karlapalem Mega Food Park, Guntur Autonagar, Mangalagiri, Tenali",
      focus: "Chilli Paste & Sauce Acid-Resistant Piping (SS 316L), Spice Steam & Wash Lines, Edible-Oil Refined Utilities",
      tag: "India's Chilli & Spices Capital"
    },
    {
      name: "Rajahmundry",
      slug: "rajahmundry",
      path: "/market-area/rajahmundry",
      clusters: "Rajahmundry & Kadiyam Pulp & Paper Mills, Godavari Coconut & Fruit Belt, KG Basin Energy Ancillaries, Rajanagaram",
      focus: "Paper Mill Boiler-Feed & DM Water, Coconut & Edible-Oil Lines, Acidic Banana/Mango Puree & Delta-Humid Packaged Piping",
      tag: "Godavari Agro & Paper Mill Centre"
    },
    {
      name: "Chittoor",
      slug: "chittoor",
      path: "/market-area/chittoor",
      clusters: "Chittoor Mango-Pulp Cluster (Totapuri belt), Srini Mega Food Park (Mogili), Madanapalle Tomato Belt, Piler",
      focus: "Mango-Pulp Transfer & Aseptic Systems, Tomato Puree Lines, Inter-Season Factory Maintenance & Traceable Cut Lengths",
      tag: "India's Mango-Pulp Capital"
    },
    {
      name: "Nellore & Krishnapatnam",
      slug: "nellore",
      path: "/market-area/nellore",
      clusters: "Krishnapatnam Industrial Area (KRIS City 2,500 acres), IFFCO Kisan Agro-SEZ (2,776 acres), Krishnapatnam Deep-Water Port, Kavali Coastal Belt",
      focus: "Duplex 2205 High-Chloride Coastal Duty, Food & Seafood Brine Lines, Agro-Park Clean Utilities & Design-Stage EPC Project Supply",
      tag: "Deep-Water Port & Agro-SEZ Hub"
    },
    {
      name: "Kurnool & Orvakal",
      slug: "kurnool",
      path: "/market-area/kurnool",
      clusters: "Orvakal Mega Industrial Node (HBIC Corridor), Kurnool Mega Food Park (Tangadacha 758 acres), Guttapadu Industrial Estate, Jupadu Bungalow",
      focus: "Bulk-Drug Purified Water & WFI Loops, Food-Park & Maize Clean Utilities, DM/DI Water Piping & Solapur-Kurnool Consolidated Supply",
      tag: "HBIC Mega Industrial Node"
    }
  ];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = "Electropolished Stainless Steel Pipe Manufacturer Across Andhra Pradesh | Sakshi Forge";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Sakshi Forge supplies electropolished SS 316L, 304L and duplex 2205 pipes across Andhra Pradesh industrial corridors: Visakhapatnam Vizag SEZ, Anakapalle Parawada Pharma City, Tirupati Sri City, Kakinada Port SEZ, Vijayawada Autonagar, Guntur Spices Park, Rajahmundry, Chittoor, Nellore Krishnapatnam and Kurnool Orvakal.");
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
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <a href="/market-area" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Market Areas</a>
            <span>›</span>
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>Andhra Pradesh State Hub</span>
          </div>

          <div style={{ maxWidth: '980px' }}>
            <span style={{ 
              backgroundColor: 'rgba(255, 193, 7, 0.1)', 
              color: 'var(--primary-yellow)', 
              border: '1px solid rgba(255, 193, 7, 0.3)',
              padding: '0.4rem 1rem', 
              borderRadius: '4px', 
              fontSize: '0.8rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.25rem'
            }}>
              <Factory size={14} />
              Taloja MIDC Factory Direct · Fast Dispatch to Andhra Pradesh
            </span>

            <h1 style={{ 
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', 
              fontWeight: '850', 
              lineHeight: '1.18', 
              marginBottom: '1.25rem',
              color: '#ffffff'
            }}>
              Electropolished Stainless Steel Pipe & Tube Manufacturer Supplying <span style={{ color: 'var(--primary-yellow)' }}>Andhra Pradesh</span>
            </h1>

            <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.75', marginBottom: '2rem', maxWidth: '880px' }}>
              Direct manufacturer supply of electropolished SS 316L, 304L and duplex 2205 pipes and tubes (Ra ≤0.4 µm) from our Taloja MIDC works. Serving Jawaharlal Nehru Pharma City at Parawada, Visakhapatnam SEZ, Sri City, Kakinada Port SEZ, Krishna Delta food processing, Guntur Spices Park and Autonagar fabricators with 100% PMI testing and EN 10204 3.1 MTC.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={handleShowContact}
                style={{
                  backgroundColor: 'var(--primary-yellow)',
                  color: '#000',
                  fontWeight: '700',
                  padding: '0.9rem 2rem',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.95rem'
                }}
              >
                Get Andhra Pradesh Quote in 30 Min
              </button>
              <a 
                href="https://wa.me/918291366340?text=Hi%20Sakshi%20Forge,%20I%20need%20a%20quote%20for%20Electropolished%20Pipes%20in%20Andhra%20Pradesh" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontWeight: '600',
                  padding: '0.9rem 1.8rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div style={{ backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600' }}>
          <span>ISO 9001:2015 Certified</span>
          <span>•</span>
          <span>EN 10204 3.1 MTC on Every Heat</span>
          <span>•</span>
          <span>100% PMI Tested</span>
          <span>•</span>
          <span>Internal Ra ≤0.4 µm (SF4)</span>
          <span>•</span>
          <span>ASTM A269 / A270 / A790 (Duplex)</span>
          <span>•</span>
          <span>Coastal Sea-Salt Barrier Packaging</span>
        </div>
      </div>

      {/* Cities Directory Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem', color: '#ffffff' }}>
              Andhra Pradesh Industrial Hubs & Manufacturing Belts
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Select your specific Andhra Pradesh industrial estate or city below for local technical application guides, zone mappings, grade recommendations, weight calculators, and direct dispatch timelines.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {cities.map((c) => (
              <div 
                key={c.slug}
                style={{
                  backgroundColor: 'var(--bg-dark-800)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
                      {c.name}
                    </h3>
                    <span style={{ 
                      fontSize: '0.7rem', 
                      fontWeight: '700', 
                      backgroundColor: 'rgba(255, 193, 7, 0.12)', 
                      color: 'var(--primary-yellow)', 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap'
                    }}>
                      {c.tag}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: '600', marginBottom: '0.85rem', lineHeight: '1.5' }}>
                    <MapPin size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {c.clusters}
                  </p>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                    {c.focus}
                  </p>
                </div>

                <a 
                  href={c.path}
                  onClick={(e) => handleLinkClick(e, c.path)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary-yellow)',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '1.25rem'
                  }}
                >
                  View {c.name} Landing Page <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sakshi Forge for Andhra Pradesh */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff' }}>
              Why Andhra Pradesh Pharma & Food Exporters Choose Sakshi Forge
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Local honesty: We manufacture and electropolish in-house at our Taloja MIDC works near Mumbai, supplying Andhra Pradesh's coastal and inland corridors directly with verified Ra reports, mill traceability and coastal protective packing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-dark-700)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }}><CheckCircle2 size={28} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem', color: '#ffffff' }}>Coastal & Marine Duty Alloys</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                On the Bay of Bengal coast (Vizag, Parawada, Kakinada), salt spray and chloride water cause pitting in plain 304. We manufacture electropolished 316L and duplex 2205 tubing specifically engineered for marine atmosphere and brine resistance.
              </p>
            </div>

            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-dark-700)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }}><ShieldCheck size={28} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem', color: '#ffffff' }}>Audited Pharma Validation Pack</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                For audited API and formulation exporters in JN Pharma City Parawada and Visakhapatnam SEZ, every length ships with MTC EN 10204 3.1, heat numbers, Ra profilometer surface reports, hydro test results and passivation records.
              </p>
            </div>

            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-dark-700)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }}><Award size={28} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem', color: '#ffffff' }}>Central Quoting for HQ Buyers</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Many Andhra Pradesh plants have corporate procurement teams in Hyderabad or Mumbai. We quote centrally against your corporate formats and deliver directly to site in Vizag, Sri City or the Godavari delta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff' }}>
            Consolidate Your Andhra Pradesh Requirement
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 2rem', fontSize: '1rem', lineHeight: '1.6' }}>
            Operating sister units in Visakhapatnam, Parawada, Sri City, Vijayawada or Guntur? Send your combined bill of materials for consolidated freight, single document formatting and fast turnaround.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a 
              href="tel:+918291366340" 
              style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}
            >
              <Phone size={16} style={{ color: 'var(--primary-yellow)' }} /> +91 82913 66340
            </a>
            <a 
              href="mailto:sakshiforge1737@gmail.com" 
              style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}
            >
              <Mail size={16} style={{ color: 'var(--primary-yellow)' }} /> sakshiforge1737@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
