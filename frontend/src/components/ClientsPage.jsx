import React from 'react';
import { ShieldCheck, Building2, Award, ArrowRight, CheckCircle2, Factory, Globe2 } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function ClientsPage({ onEnquireClick }) {
  const industries = [
    { title: 'Oil & Gas and Offshore Energy', desc: 'Supplying ASTM A182 NACE MR0175 compliant weld neck and blind flanges for high-pressure subsea and refinery pipelines.', projects: 'Refinery Expansions, Offshore Platforms' },
    { title: 'Pharmaceutical & Biotechnology', desc: 'Electropolished sanitary tubes (Ra <= 0.4 um) and hygienic BPE fittings for sterile WFI and CIP systems.', projects: 'API Plants, Bioprocess Cleanrooms' },
    { title: 'Petrochemical & Chemical Processing', desc: 'Duplex 2205 and Hastelloy flanges designed for highly acidic and corrosive chemical environments.', projects: 'Fertilizer Plants, Chemical Reactors' },
    { title: 'Power Generation & Nuclear', desc: 'Heavy forged fittings and high-temperature alloy flanges complying with ASME Section III standards.', projects: 'Thermal & Nuclear Power Utilities' },
    { title: 'Marine & Shipbuilding', desc: 'C95800 Nickel Aluminium Bronze round bars and CuNi 90/10 fittings for seawater piping systems.', projects: 'Naval Dockyards, Commercial Vessels' },
    { title: 'Heavy Infrastructure & Steel Mills', desc: 'Large diameter ASME B16.47 forged flanges up to 60 inches for water treatment and steel production.', projects: 'Water Transmission, Heavy Engineering' }
  ];

  const clientHighlights = [
    { name: 'Leading EPC Contractor', region: 'Mumbai / Pan-India', supply: 'ASME B16.5 Class 300/600 SS Flanges', MTC: 'EN 10204 3.1 & PMI Verified' },
    { name: 'Global Pharma Machinery OEM', region: 'Hyderabad / Gujarat', supply: 'ASTM A270 Electropolished Sanitary Tubing', MTC: 'Ra Surface Test & Material Cert' },
    { name: 'Offshore Piping Integrator', region: 'UAE / GCC Region', supply: 'Heavy Forged Steel Fittings Class 6000', MTC: 'Third Party Inspection Approved' },
    { name: 'Marine Equipment Manufacturer', region: 'Visakhapatnam Port', supply: 'C95800 Bronze Round Bars & Marine Fittings', MTC: 'Mill Test Certificate 3.1' }
  ];

  const testimonials = [
    { text: 'Sakshi Forge provided fast 30-minute quotes and delivered 100% PMI-tested SS 316L flanges on tight project deadlines.', client: 'Procurement Manager', company: 'Industrial Piping EPC Firm' },
    { text: 'The Ra surface finish on their electropolished tubes met our exact pharmaceutical cleanroom specs with complete 3.1 test certificates.', client: 'QA/QC Lead', company: 'Pharma Engineering System OEM' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      <Breadcrumbs items={[{ name: 'Clients & Industries', url: '/clients/' }]} />

      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.85), rgba(18, 21, 28, 0.95)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 0 3rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ 
            backgroundColor: 'var(--primary-yellow-glow)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid var(--primary-yellow-solid-glow)',
            fontSize: '0.8rem',
            fontWeight: '700',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Trusted B2B Steel Partner
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0', lineHeight: '1.2' }}>
            Our Clients & <span>Industries We Serve</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Sakshi Forge supplies ISO 9001:2015 certified industrial flanges, forged steel fittings, and electropolished pipes to leading EPCs, refineries, and manufacturing plants across India, North America, and the Middle East.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>
            Key Industrial Sectors Served
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {industries.map((ind, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--bg-dark-800)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                padding: '1.75rem' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Factory size={22} style={{ color: 'var(--primary-yellow)' }} />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>{ind.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                  {ind.desc}
                </p>
                <div style={{ fontSize: '0.825rem', color: 'var(--primary-yellow)', fontWeight: '600', backgroundColor: 'rgba(255,180,0,0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px' }}>
                  Typical Scope: {ind.projects}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Project Supply Highlights */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', textAlign: 'center' }}>
            Recent Project Supply Highlights
          </h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
            Every batch dispatched undergoes strict Positive Material Identification (PMI) and quality checks accompanied by EN 10204 3.1 MTCs.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {clientHighlights.map((c, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  <Building2 size={16} /> {c.region}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{c.name}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  <strong>Supplied:</strong> {c.supply}
                </p>
                <span style={{ fontSize: '0.8rem', color: '#4ade80', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CheckCircle2 size={14} /> {c.MTC}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2.5rem', textAlign: 'center' }}>
            What Our B2B Buyers Say
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {testimonials.map((t, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem', position: 'relative' }}>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  "{t.text}"
                </p>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{t.client}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => onEnquireClick('General RFQ - Clients Page')} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Request Client References & RFQ <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
