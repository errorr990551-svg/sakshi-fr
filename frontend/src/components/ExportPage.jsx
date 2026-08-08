import React from 'react';
import { Globe2, ShieldCheck, CheckCircle2, ArrowRight, Anchor, Truck, Plane, HelpCircle } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function ExportPage({ countryType, onEnquireClick }) {
  const exportData = {
    'usa': {
      title: 'Indian Flange & Fittings Exporter to USA | Sakshi Forge',
      h1: 'Exporting ASME Flanges & Forged Fittings to USA',
      countryName: 'United States of America',
      flag: '🇺🇸',
      desc: 'ISO 9001:2015 certified manufacturer exporting ASME B16.5 flanges, B16.11 forged fittings, and ASTM A312 pipes to Houston, Texas, California, and US industrial ports.',
      slug: 'flange-exporter-usa',
      highlights: [
        'Complete ASME B16.5, B16.47, and B16.11 compliance with US thread standards (NPT).',
        'Incoterms support: DDP, CIF Houston / Los Angeles / New York, FOB Nhava Sheva.',
        'Seaworthy VCI anti-rust wooden crate packaging with heat treatment IPPC marking.',
        'EN 10204 3.1 & 3.2 test certificates with 100% PMI heat number traceability.'
      ]
    },
    'uae': {
      title: 'Flange & Pipe Fittings Supplier to UAE | Sakshi Forge',
      h1: 'Supplying Flanges & Steel Piping to UAE & GCC Projects',
      countryName: 'United Arab Emirates & GCC',
      flag: '🇦🇪',
      desc: 'Direct manufacturer supplying high-pressure flanges, duplex 2205 fittings, and EP pipes to Jebel Ali Port, Dubai, Abu Dhabi, and Sharjah energy projects.',
      slug: 'flange-supplier-uae',
      highlights: [
        'Rapid 7-day sea freight transit from Nhava Sheva to Jebel Ali Port (Dubai).',
        'NACE MR0175 / ISO 15156 sour gas compliance for UAE oil & gas fields.',
        'Custom heavy forging capabilities for high-pressure oilfield manifolds.',
        'Competitive USD / AED commercial quotes returned within 30 minutes.'
      ]
    },
    'saudi-arabia': {
      title: 'Flange Supplier to Saudi Arabia | Aramco Spec Ready',
      h1: 'Exporting Forged Flanges & Fittings to Saudi Arabia',
      countryName: 'Kingdom of Saudi Arabia',
      flag: '🇸🇦',
      desc: 'Supplying Aramco specification ready ASME B16.5 weld neck flanges, socket weld fittings, and stainless steel pipes to Jubail, Dammam, and Yanbu industrial hubs.',
      slug: 'flange-supplier-saudi-arabia',
      highlights: [
        'Aramco-spec ready metallurgy and NACE MR0175 corrosion resistant testing.',
        'Fast shipping to Dammam Port and King Abdulaziz Port.',
        'EN 10204 3.1 MTC with mechanical, chemical, and hydro testing reports.',
        'Export packing in steel-banded seaworthy wooden boxes with moisture protection.'
      ]
    }
  };

  const current = exportData[countryType] || exportData['usa'];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      <Breadcrumbs items={[
        { name: 'Global Export Hub', url: '/market-area' },
        { name: current.h1, url: `/${current.slug}/` }
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
            fontSize: '0.85rem',
            fontWeight: '700',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {current.flag} International Export Gateway
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0', lineHeight: '1.2' }}>
            {current.h1}
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            {current.desc}
          </p>
        </div>
      </section>

      {/* Export Logistics & Compliance */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2.5rem', textAlign: 'center' }}>
            Why Import Flanges & Fittings from Sakshi Forge India
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {current.highlights.map((h, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: '#4ade80' }} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>Export Advantage #{idx + 1}</h3>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  {h}
                </p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'var(--bg-dark-800)', borderRadius: '12px', padding: '2.5rem', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <Globe2 size={48} style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>
              Request USD / Global Currency Export Quote
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
              Get direct mill prices, shipping freight options, and dispatch timelines within 30 minutes.
            </p>
            <button onClick={() => onEnquireClick(`Export RFQ for ${current.countryName}`)} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Contact Export Sales Team <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
