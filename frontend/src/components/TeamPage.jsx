import React from 'react';
import { UserCheck, ShieldCheck, Award, ArrowRight, Microchip, Cpu, CheckCircle } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function TeamPage({ onEnquireClick }) {
  const leadership = [
    { name: 'Executive Leadership Team', role: 'Managing Directors & Founders', experience: '30+ Years Forging & Metallurgical Experience', desc: 'Over three decades of expertise in steel drop forging, heavy machining, and international B2B industrial piping supply.' },
    { name: 'Senior Metallurgical & Engineering Head', role: 'Head of Production & Engineering', experience: 'ASME & ASTM Standards Specialist', desc: 'Directs forging heat treatment, normalization, and precision CNC flange machining to ASME B16.5 & DIN specifications.' },
    { name: 'Quality Assurance & Inspection Lead', role: 'Chief QA/QC Auditor (ASNT Level II)', experience: 'PMI, MPI & Hydrostatic Testing Certified', desc: 'Oversees 100% material inspection using Olympus XRF Spectrometers, Ultrasonic flaw detectors, and MTC 3.1 verification.' }
  ];

  const testingProof = [
    { title: 'Positive Material Identification (PMI)', detail: 'Handheld XRF analyzer testing on 100% of alloy and stainless steel dispatches to guarantee chemical compliance.' },
    { title: 'Hydrostatic & Pneumatic Testing', detail: 'High-pressure water test benches for flange rating validation up to Class 2500.' },
    { title: 'Non-Destructive Testing (NDT)', detail: 'Magnetic Particle Inspection (MPI) and Dye Penetrant Testing (DPT) for defect-free surface integrity.' },
    { title: 'EN 10204 3.1 & 3.2 Certification', detail: 'Traceable raw material heat numbers mapped to physical test reports for full quality compliance.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      <Breadcrumbs items={[{ name: 'Leadership & Engineering Team', url: '/team/' }]} />

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
            E-E-A-T Technical Expertise
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0', lineHeight: '1.2' }}>
            The People Behind <span>Sakshi Forge</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Meet our directors, metallurgical engineers, and quality assurance specialists who ensure every flange, fitting, and pipe meets rigorous ASME, ASTM, and DIN standards.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2.5rem', textAlign: 'center' }}>
            Engineering Leadership
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {leadership.map((m, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <UserCheck size={28} style={{ color: 'var(--primary-yellow)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>{m.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--primary-yellow)', fontWeight: '600' }}>{m.role}</div>
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: '600', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Award size={14} /> {m.experience}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & QA Capabilities */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', textAlign: 'center' }}>
            Quality Assurance & Testing Rigor
          </h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
            Technical articles and product specifications published by Sakshi Forge are reviewed and verified by our accredited QA team.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {testingProof.map((t, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <ShieldCheck size={18} /> {t.title}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
