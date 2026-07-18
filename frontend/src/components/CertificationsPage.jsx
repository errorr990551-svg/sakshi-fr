import React from 'react';
import { Award, ShieldCheck, FileCheck, Layers, Landmark } from 'lucide-react';

export default function CertificationsPage() {
  const certifications = [
    { icon: <Award size={36} />, name: 'ISO 9001:2015 Certification', body: 'Quality Management Systems certified for the manufacture, stocking, and supply of forged flanges, fittings, and stainless steel pipes.' },
    { icon: <FileCheck size={36} />, name: 'EN 10204 3.1 & 3.2 Compliance', body: 'Full chemical and physical traceability certificates supplied with every dispatch. Heat-code markings checked at dispatch.' },
    { icon: <ShieldCheck size={36} />, name: 'ASME B16.5 & ASME BPE Standards', body: 'Dimensional compliance audit sheets generated for all flanges and sanitary electropolished tubes to ensure direct site fitting.' },
    { icon: <Landmark size={36} />, name: 'IEC Export Registry & GST Compliance', body: 'Fully registered exporter from India (Mumbai Port) with regular shipping documentation compliance to GCC and SE Asia.' }
  ];

  return (
    <div className="certifications-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
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
            Compliance & Auditing
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Certifications & <span>Standards Compliance</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            We adhere to strict international standard audits including ASME, ASTM, DIN, and EN specifications. Check our compliance credentials below.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {certifications.map((c, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                backgroundColor: 'var(--bg-dark-800)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                padding: '2.25rem',
                alignItems: 'center'
              }}>
                <div style={{ color: 'var(--primary-yellow)', flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{c.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
