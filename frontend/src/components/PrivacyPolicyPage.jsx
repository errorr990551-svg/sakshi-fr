import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
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
            Privacy <span>Policy</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.5' }}>
            Compliance with the Digital Personal Data Protection (DPDP) Act 2023 of India.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>1. Data Collection & Processing</h3>
          <p>
            Sakshi Forge collects minimal contact details (name, email address, telephone number, and company name) supplied voluntarily via our Request for Quote (RFQ) forms. We process this data solely to submit commercial steel quotations and fulfill shipping orders.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>2. Consent & Consent Mode v2</h3>
          <p>
            By submitting an RFQ or using our cookies consent tool, you agree to our processing. We support Google Consent Mode v2; analytics codes (such as GA4) are fired only after you explicitly click "Accept" on our Cookie consent banner.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>3. Data Storage & Security</h3>
          <p>
            All commercial communication is stored securely in line with corporate database protection rules in India. We do not sell, rent, or lease customer lists to third parties.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>4. Your Rights</h3>
          <p>
            Under India's DPDP Act 2023, you have the right to withdraw consent, request rectification, or ask for the deletion of your personal contact records from our active sales directory. To exercise these rights, email us at <a href="mailto:info@sakshiforge.in" style={{ color: 'var(--primary-yellow)', textDecoration: 'none' }}>info@sakshiforge.in</a>.
          </p>
        </div>
      </section>

    </div>
  );
}
