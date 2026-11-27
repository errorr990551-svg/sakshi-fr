import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { ADDRESS_LINE } from '../data/business.js';
import GoogleReviews from './GoogleReviews';
import RfqForm from './RfqForm';

export default function ContactPage({ onEnquireClick, hasUnlockedContact = false, onShowContactDetails }) {
  return (
    <div className="contact-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
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
            Get In Touch
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Contact <span>Sakshi Forge</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Get a firm commercial quotation within 30 minutes. Contact our Mumbai sales desk or send your details using the form below.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="product-simple-grid" style={{ gap: '3rem' }}>
            
            {/* Left: Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Sales & Support Desk</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Our team is ready to assist you with material selection, technical drawings, and custom pricing inquiries.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {hasUnlockedContact ? (
                  <>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: 'var(--primary-yellow)' }}>
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Phone Number</h3>
                        <p style={{ fontWeight: '600', fontSize: '1.05rem' }}>
                          <a href="tel:+918291366340" style={{ color: 'inherit', textDecoration: 'none' }}>+91 82913 66340</a>
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: 'var(--primary-yellow)' }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Email</h3>
                        <p style={{ fontWeight: '600', fontSize: '1.05rem' }}>
                          <a href="mailto:info@steelmanufacturer.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@steelmanufacturer.in</a><br />
                          <a href="mailto:sakshiforge1737@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>sakshiforge1737@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <button
                      onClick={onShowContactDetails}
                      className="btn btn-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.85rem 1.6rem',
                        fontSize: '0.85rem',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        boxShadow: '0 4px 15px rgba(255, 193, 7, 0.2)',
                        cursor: 'pointer'
                      }}
                    >
                      <Phone size={16} /> Show Contact Details
                    </button>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: 'var(--primary-yellow)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Registered Head Office</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                      {ADDRESS_LINE}, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: 'var(--primary-yellow)' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Business Hours</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      Monday - Saturday: 9:00 AM - 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <ShieldCheck size={24} style={{ color: 'var(--primary-yellow)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  ISO 9001:2015 Registered Manufacturer. EN 10204 3.1 Traceable Consignments.
                </span>
              </div>
            </div>

            {/* Right: RFQ Form */}
            <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>Request a Quote</h2>
              <RfqForm formType="contact_page_form" />
            </div>

          </div>
        </div>
      </section>

      {/* Google Business Profile reviews */}
      <section style={{ padding: '0 0 4rem' }}>
        <div className="container">
          <GoogleReviews />
        </div>
      </section>

    </div>
  );
}
