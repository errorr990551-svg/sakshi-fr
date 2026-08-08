import React from 'react';
import { FileText, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, Table, Layers } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function StandardPage({ standardData, onEnquireClick }) {
  if (!standardData) return null;

  const { title, h1, standardCode, desc, pressureClasses, dimensionSummary, materialGrades, faqs, slug } = standardData;

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      <Breadcrumbs items={[
        { name: 'Standards & Specifications', url: '/products/' },
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
            Manufacturing Standard Guide
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0', lineHeight: '1.2' }}>
            {h1}
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            {desc}
          </p>
        </div>
      </section>

      {/* Pressure Rating & Dimensions */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
            Pressure Classes & Dimensional Scope ({standardCode})
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {pressureClasses && pressureClasses.map((cls, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  <ShieldCheck size={20} /> {cls.class}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                  {cls.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Dimension Summary Table */}
          {dimensionSummary && (
            <>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
                Nominal Pipe Size (NPS) Dimension Overview
              </h2>
              <div style={{ overflowX: 'auto', marginBottom: '3.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--bg-dark-800)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(255,180,0,0.1)', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-yellow)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>NPS (Inches)</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Outside Dia (mm)</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Class 150 / 2000 Rating</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Class 300 / 3000 Rating</th>
                      <th style={{ padding: '1rem', textAlign: 'left' }}>Class 600 / 6000 Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dimensionSummary.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '0.925rem' }}>
                        <td style={{ padding: '1rem', fontWeight: '700' }}>{row.nps}</td>
                        <td style={{ padding: '1rem' }}>{row.od}</td>
                        <td style={{ padding: '1rem' }}>{row.c150}</td>
                        <td style={{ padding: '1rem' }}>{row.c300}</td>
                        <td style={{ padding: '1rem' }}>{row.c600}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <div style={{ backgroundColor: 'var(--bg-dark-800)', borderRadius: '12px', padding: '2.5rem', border: '1px solid var(--border-color)' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <HelpCircle size={24} style={{ color: 'var(--primary-yellow)' }} /> Frequently Asked Questions ({standardCode})
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
            <button onClick={() => onEnquireClick(`RFQ for ${standardCode} Products`)} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Request Instant Quote for {standardCode} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
