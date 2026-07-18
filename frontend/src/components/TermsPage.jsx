import React from 'react';

export default function TermsPage() {
  return (
    <div className="terms-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
      {/* Hero Header */}
      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.8), rgba(18, 21, 28, 0.95)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 0 2.5rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Terms & <span>Conditions</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.5' }}>
            Standard commercial terms of supply and quotation validity.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>1. Validity of Quotations</h3>
          <p>
            Due to volatility in nickel, chromium, and raw steel commodity rates, all written and verbal price quotations issued by Sakshi Forge sales engineers are valid for 5 business days from the date of the quote unless specified otherwise in the official proforma invoice.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>2. Material Testing & Certification</h3>
          <p>
            We guarantee all materials correspond to the agreed ASTM, ASME, or EN standards. Quality reports including EN 10204 3.1 Mill Test Certificates (MTC), NDT reports, and heat trace logs are handed over alongside delivery documents. Any third-party inspection (SGS/BV/TUV) charges are to the buyer's account unless otherwise negotiated.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>3. Shipping & Delivery</h3>
          <p>
            Ex-stock catalog items ship from our Mumbai stockyard in 2-4 working days. Made-to-order forged flanges or large-volume production timelines will be explicitly declared. Sakshi Forge is not liable for transport delays caused by maritime congestion, custom clearance holdups at destination ports, or domestic courier disruptions.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>4. Payment Terms</h3>
          <p>
            Standard billing terms: 30% advance deposit at the time of order booking, with the remaining 70% balance payable against material readiness inspection at our facility or scan of shipping bills, prior to release of logistics files.
          </p>
        </div>
      </section>

    </div>
  );
}
