import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, Layers, Table } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function ElbowProductPage({ onEnquireClick }) {
  const elbowDims = [
    { nps: '1/2"', od: '21.3 mm', lrCenter90: '38.1 mm', srCenter90: '21.3 mm', wallSch40: '2.77 mm', wallSch80: '3.73 mm' },
    { nps: '3/4"', od: '26.7 mm', lrCenter90: '38.1 mm', srCenter90: '26.7 mm', wallSch40: '2.87 mm', wallSch80: '3.91 mm' },
    { nps: '1"', od: '33.4 mm', lrCenter90: '38.1 mm', srCenter90: '33.4 mm', wallSch40: '3.38 mm', wallSch80: '4.55 mm' },
    { nps: '1-1/2"', od: '48.3 mm', lrCenter90: '57.2 mm', srCenter90: '48.3 mm', wallSch40: '3.68 mm', wallSch80: '5.08 mm' },
    { nps: '2"', od: '60.3 mm', lrCenter90: '76.2 mm', srCenter90: '60.3 mm', wallSch40: '3.91 mm', wallSch80: '5.54 mm' },
    { nps: '3"', od: '88.9 mm', lrCenter90: '114.3 mm', srCenter90: '88.9 mm', wallSch40: '5.49 mm', wallSch80: '7.62 mm' },
    { nps: '4"', od: '114.3 mm', lrCenter90: '152.4 mm', srCenter90: '114.3 mm', wallSch40: '6.02 mm', wallSch80: '8.56 mm' },
    { nps: '6"', od: '168.3 mm', lrCenter90: '228.6 mm', srCenter90: '168.3 mm', wallSch40: '7.11 mm', wallSch80: '10.97 mm' },
    { nps: '8"', od: '219.1 mm', lrCenter90: '304.8 mm', srCenter90: '219.1 mm', wallSch40: '8.18 mm', wallSch80: '12.70 mm' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      <Breadcrumbs items={[
        { name: 'Buttweld & Forged Fittings', url: '/products/' },
        { name: 'Stainless Steel Elbow', url: '/stainless-steel-elbow/' }
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
            ISO 9001:2015 Manufacturer
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0', lineHeight: '1.2' }}>
            Stainless Steel Elbow Manufacturer (45°, 90°, 180°)
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Manufacturing high-quality ASME B16.9 buttweld elbows and ASME B16.11 forged socket weld & threaded elbows in SS 304, 304L, 316L, 321, Duplex 2205, and Nickel Alloys with EN 10204 3.1 MTC.
          </p>
        </div>
      </section>

      {/* Product Spec Table */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
            ASME B16.9 90° Long Radius (LR) & Short Radius (SR) Elbow Dimensions
          </h2>

          <div style={{ overflowX: 'auto', marginBottom: '3.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--bg-dark-800)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(255,180,0,0.1)', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-yellow)' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>NPS Size</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Outside Diameter</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>LR Center-to-End (90°)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>SR Center-to-End (90°)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Sch 40 Wall</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Sch 80 Wall</th>
                </tr>
              </thead>
              <tbody>
                {elbowDims.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '0.925rem' }}>
                    <td style={{ padding: '1rem', fontWeight: '700' }}>{row.nps}</td>
                    <td style={{ padding: '1rem' }}>{row.od}</td>
                    <td style={{ padding: '1rem' }}>{row.lrCenter90}</td>
                    <td style={{ padding: '1rem' }}>{row.srCenter90}</td>
                    <td style={{ padding: '1rem' }}>{row.wallSch40}</td>
                    <td style={{ padding: '1rem' }}>{row.wallSch80}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button onClick={() => onEnquireClick('SS Elbow Product Inquiry')} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Request Elbow Price Quote <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
