import React from 'react';
import { FileText, Calendar, ArrowRight, User } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    { title: 'The Ultimate Guide to Electropolishing Stainless Steel Pipes', date: 'July 08, 2026', desc: 'Understand the electrochemical process that reduces surface roughness to Ra <= 0.4 um, critical for bioprocess and pharma systems.' },
    { title: 'ASME B16.5 Flange Dimensions & Pressure Ratings Explained', date: 'June 24, 2026', desc: 'A comprehensive engineering guide on Class 150 to Class 2500 Weld Neck, Slip-On, and Blind flange specifications.' },
    { title: 'Understanding Pipe Schedules: Standard Wall vs Extra Strong (XS)', date: 'May 18, 2026', desc: 'A technical analysis of pipe dimensional tolerances, wall thickness values, and pressure calculations under ASTM A312.' },
    { title: 'Grade Selection Guide: SS 304L vs SS 316L for Corrosive Environments', date: 'April 11, 2026', desc: 'Analyze mechanical attributes and pitting resistance equivalence numbers (PREN) of popular steel grades.' }
  ];

  return (
    <div className="blog-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
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
            Technical Knowledge Hub
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Steel <span>Knowledge Hub & Guides</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Technical briefings, sizing tables, and metallurgical guides curated by Sakshi Forge engineers.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {posts.map((p, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--bg-dark-800)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} /> {p.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={12} /> Engineering Team</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
                <div>
                  <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '600' }}>
                    Read Full Article <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
