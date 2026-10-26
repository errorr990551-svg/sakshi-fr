import React from 'react';
import { Layers, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { handleLinkClick, withSlash } from '../utils/router';
import { EP_PRODUCT_PILLARS } from '../data/priorityCities';

export default function CityProductPillars({ cityName = 'Your Facility' }) {
  return (
    <section 
      aria-label="Core Electropolished Product Specifications"
      style={{
        padding: '3.5rem 0',
        backgroundColor: 'var(--bg-dark-900, #0a0f1d)',
        borderTop: '1px solid var(--border-color, #1e293b)',
        borderBottom: '1px solid var(--border-color, #1e293b)'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            backgroundColor: 'rgba(255, 193, 7, 0.1)', 
            color: 'var(--primary-yellow, #ffc107)', 
            padding: '0.35rem 0.85rem', 
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.75rem'
          }}>
            <Sparkles size={14} />
            National Manufacturing Specifications
          </div>
          <h2 style={{ 
            fontSize: '1.85rem', 
            fontWeight: '800', 
            color: '#ffffff', 
            marginBottom: '0.75rem',
            lineHeight: '1.25'
          }}>
            Electropolished Stainless Steel Pipes Supplied to {cityName}
          </h2>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '0.98rem', 
            maxWidth: '850px', 
            lineHeight: '1.65',
            margin: 0
          }}>
            Every pipe dispatched to {cityName} from our Taloja facility adheres to strict international hygienic standards. Explore our core product specifications, Ra roughness certifications, and alloy grade properties:
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {EP_PRODUCT_PILLARS.map((pillar, idx) => (
            <a
              key={idx}
              href={withSlash(pillar.path)}
              onClick={(e) => handleLinkClick(e, pillar.path)}
              style={{
                backgroundColor: 'var(--bg-dark-800, #0f172a)',
                border: '1px solid var(--border-color, #1e293b)',
                borderRadius: '12px',
                padding: '1.75rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-yellow, #ffc107)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color, #1e293b)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    color: 'var(--primary-yellow, #ffc107)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    backgroundColor: 'rgba(255, 193, 7, 0.08)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px'
                  }}>
                    {pillar.tag}
                  </span>
                  <Layers size={18} style={{ color: '#64748b' }} />
                </div>

                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '750',
                  color: '#f8fafc',
                  marginBottom: '0.65rem',
                  lineHeight: '1.35'
                }}>
                  {pillar.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {pillar.desc}
                </p>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'var(--primary-yellow, #ffc107)',
                fontSize: '0.88rem',
                fontWeight: '700'
              }}>
                View Full Engineering Specs
                <ArrowRight size={15} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
