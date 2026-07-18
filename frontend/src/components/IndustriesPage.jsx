import React from 'react';
import { Layers, Activity, ShieldAlert, Zap, Compass, CheckCircle } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    { title: 'Pharmaceutical & Biotech', desc: 'ASME BPE compliant electropolished tubes and fittings (Ra <= 0.4 um, controlled sulfur) optimized for WFI loops and bioprocess skids.' },
    { title: 'Food, Dairy & Beverage', desc: '3-A and BS 4825 sanitary tubes, dairy bends, and TC clamp fittings for hygienic processing and cleaning-in-place (CIP) circuits.' },
    { title: 'Oil, Gas & Petrochemicals', desc: 'High pressure forged flanges (Class 150 to 2500, ASTM A182) and buttweld elbows designed for extreme chemical resistance.' },
    { title: 'Semiconductor UHP Piping', desc: 'Ultra-high purity (UHP) electropolished stainless steel pipes meeting class 10 cleanroom purging specifications.' }
  ];

  return (
    <div className="industries-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
      {/* Hero Header */}
      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.8), rgba(18, 21, 28, 0.95)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0 3rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ 
            backgroundColor: 'var(--primary-yellow-glow)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid var(--primary-yellow-solid-glow)',
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: '700',
            padding: '0.35rem 0.85rem',
            borderRadius: '50px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Global Service Sectors
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Industries <span>We Serve</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            From high-purity pharmaceutical piping to heavy-pressure oil and gas projects, Sakshi Forge engineered products meet the strict criteria of critical sectors.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {industries.map((ind, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--bg-dark-800)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--primary-yellow)' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{ind.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
