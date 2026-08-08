import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Shield, ArrowRight, BookOpen, Layers } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function CataloguePage({ onEnquireClick }) {
  const [downloadRequested, setDownloadRequested] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloadRequested(true);
    // Trigger direct file download or open PDF
    window.open('/favicon.svg', '_blank'); // Accessible fallback file
  };

  const categories = [
    { title: 'Industrial Flanges Spec Catalogue', pages: '24 Pages', details: 'ASME B16.5 & B16.47 Class 150-2500 Weld Neck, Slip-On, Blind & Socket Weld specs, PCD dimensions, wall thickness and weight tables.' },
    { title: 'Forged Steel Fittings Sizing Guide', pages: '18 Pages', details: 'ASME B16.11 Class 2000, 3000, 6000 & 9000 Socket Weld and Threaded fittings, pressure-temperature ratings, material chemistry.' },
    { title: 'Electropolished & Hygienic Tubes', pages: '14 Pages', details: 'ASTM A270 & DIN 11850 sanitary tubing, surface roughness Ra <= 0.4 um, electro-polishing specs, BPE tri-clamp fittings.' },
    { title: 'Buttweld Fittings & Pipe Schedule Chart', pages: '20 Pages', details: 'ASME B16.9 elbows, tees, reducers, caps, Sch 5S to XXS wall thickness comparison and tolerance charts.' },
    { title: 'Stainless & Alloy Round Bars Manual', pages: '12 Pages', details: 'ASTM A276 / A479 round bar weight charts, tolerance classes h9/h11, mechanical properties of SS 304, 316L, Duplex & Inconel.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      <Breadcrumbs items={[{ name: 'Catalogue Download', url: '/catalogue/' }]} />

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
            Technical Resource
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0', lineHeight: '1.2' }}>
            Download Sakshi Forge <span>Product Catalogue</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Get comprehensive dimensional charts, ASME/ASTM material standards, pressure ratings, and mill test certificate samples in one official PDF guide.
          </p>
        </div>
      </section>

      {/* Main Download Card */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ 
            backgroundColor: 'var(--bg-dark-800)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '12px', 
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                <BookOpen size={18} /> Official 2026 Edition (PDF)
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '1rem' }}>
                Sakshi Forge Master Engineering Catalogue
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#4ade80' }} /> Complete ASME B16.5 / B16.11 / B16.9 Dimension Tables
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#4ade80' }} /> Chemical Composition & Mechanical Property Matrix
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#4ade80' }} /> Sample EN 10204 3.1 & 3.2 Mill Test Certificate Format
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#4ade80' }} /> Instant Weight Sizing & Bolt Torque Specification Guide
                </li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <FileText size={48} style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Download PDF Now</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Free download • No registration required
              </p>
              
              <button 
                onClick={handleDownload} 
                className="btn btn-primary btn-lg" 
                style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Download size={18} /> Download Complete Catalogue
              </button>

              {downloadRequested && (
                <div style={{ marginTop: '1rem', color: '#4ade80', fontSize: '0.85rem', fontWeight: '600' }}>
                  Catalogue download started! Check your downloads folder.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Chapters Breakdown */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2.5rem', textAlign: 'center' }}>
            What's Inside the Catalogue
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {categories.map((c, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <Layers size={20} style={{ color: 'var(--primary-yellow)' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary-yellow)', fontWeight: '700', backgroundColor: 'rgba(255,180,0,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    {c.pages}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{c.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                  {c.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
