import React from 'react';
import { ShieldCheck, CheckCircle, FileText, Zap, Award, Users } from 'lucide-react';

export default function QualityPage({ onEnquireClick }) {
  const tests = [
    { name: 'Positive Material Identification (PMI)', desc: 'Handheld XRF/OES analysis to verify chemical composition (Cr, Ni, Mo, etc.) before and after manufacturing.' },
    { name: 'Hydrostatic Testing', desc: 'Pressure testing of pipes up to 10,000 PSI to ensure zero leakage and structure integrity under operating conditions.' },
    { name: 'Ultrasonic Testing (UT)', desc: 'Volumetric NDT scan to detect internal defects, voids, or inclusions in forged bars and heavy flanges.' },
    { name: 'Dye Penetrant Testing (DP)', desc: 'Surface defect detection on weld areas, bevel edges, and machined surfaces of pipe fittings.' },
    { name: 'Radiography Testing (RT)', desc: 'X-ray inspection of butt weld joints to guarantee 100% penetration and defect-free welding.' },
    { name: 'Ra Roughness Profilometer', desc: 'Direct stylus measurement of electropolished bore surfaces to confirm roughness is Ra <= 0.4 um.' }
  ];

  return (
    <div className="quality-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
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
            Quality Management
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Quality <span>Assurance & Testing</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Zero-defect compliance. Every order from Sakshi Forge is shipped with complete traceability, EN 10204 3.1 Mill Test Certificates, and certified testing.
          </p>
        </div>
      </section>

      {/* Trust Blocks */}
      <section style={{ padding: '4rem 0 2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem' }}>
              <FileText size={32} style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>EN 10204 3.1 Traceability</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                We provide Mill Test Certificates (MTC) conforming to EN 10204 3.1 standards, logging exact chemical composition, physical attributes, and heat code identity.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem' }}>
              <ShieldCheck size={32} style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>In-House Testing Lab</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Equipped with dynamic raw material analysis, pressure loops, hardness testers, and calibrated roughness profilometers to verify every specification.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem' }}>
              <Users size={32} style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>Third-Party Inspection</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                We welcome inspection visits from globally recognized agencies like SGS, Bureau Veritas, TUV, DNV, and Lloyds to audit and approve orders before dispatch.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NDT / testing table */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2>Testing <span>Methods & NDT Protocols</span></h2>
            <p>Our quality control process implements strict non-destructive testing at multiple stages.</p>
            <div className="accent-line"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {tests.map((t, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '0.15rem' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{t.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => onEnquireClick('Quality Assurance Enquiry')} className="btn btn-primary btn-lg">
              Download Sample MTC <FileText size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
