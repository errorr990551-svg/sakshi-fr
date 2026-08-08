import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, ArrowRight, HelpCircle, Layers, Cpu } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function GradePage({ gradeData, onEnquireClick }) {
  if (!gradeData) return null;

  const { title, h1, gradeCode, category, desc, chemistryTable, mechanicalTable, applications, faqs, slug } = gradeData;

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      <Breadcrumbs items={[
        { name: 'Grade Catalog', url: '/products/' },
        { name: title, url: `/${slug}/` }
      ]} />

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
            Metallurgical Grade Specs
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0', lineHeight: '1.2' }}>
            {h1}
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            {desc}
          </p>
        </div>
      </section>

      {/* Grade Quick Overview & Chemical Composition */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
            Chemical Composition & Material Specifications ({gradeCode})
          </h2>

          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--bg-dark-800)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(255,180,0,0.1)', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-yellow)' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Grade / Element</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Carbon (C)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Chromium (Cr)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Nickel (Ni)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Molybdenum (Mo)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Other Elements</th>
                </tr>
              </thead>
              <tbody>
                {chemistryTable && chemistryTable.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '0.925rem' }}>
                    <td style={{ padding: '1rem', fontWeight: '700' }}>{row.grade}</td>
                    <td style={{ padding: '1rem' }}>{row.c}</td>
                    <td style={{ padding: '1rem' }}>{row.cr}</td>
                    <td style={{ padding: '1rem' }}>{row.ni}</td>
                    <td style={{ padding: '1rem' }}>{row.mo || '-'}</td>
                    <td style={{ padding: '1rem' }}>{row.other || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mechanical Properties */}
          {mechanicalTable && (
            <>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
                Mechanical & Physical Properties
              </h2>
              <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--bg-dark-800)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(255,180,0,0.1)', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-yellow)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Property</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Tensile Strength (MPa)</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Yield Strength 0.2% (MPa)</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Elongation (%)</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Hardness (HB / HRB)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mechanicalTable.map((m, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '0.925rem' }}>
                        <td style={{ padding: '1rem', fontWeight: '700' }}>{m.property}</td>
                        <td style={{ padding: '1rem' }}>{m.tensile}</td>
                        <td style={{ padding: '1rem' }}>{m.yield}</td>
                        <td style={{ padding: '1rem' }}>{m.elongation}</td>
                        <td style={{ padding: '1rem' }}>{m.hardness}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Applications Grid */}
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
            Primary Industry Applications for {gradeCode}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {applications && applications.map((app, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.5rem' }}>
                  <Layers size={18} /> {app.title}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                  {app.desc}
                </p>
              </div>
            ))}
          </div>

          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <div style={{ backgroundColor: 'var(--bg-dark-800)', borderRadius: '12px', padding: '2.5rem', border: '1px solid var(--border-color)' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <HelpCircle size={24} style={{ color: 'var(--primary-yellow)' }} /> Frequently Asked Questions ({gradeCode})
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', borderRadius: '8px', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{faq.q}</h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => onEnquireClick(`RFQ for ${gradeCode} Products`)} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Request Price Quote for {gradeCode} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
