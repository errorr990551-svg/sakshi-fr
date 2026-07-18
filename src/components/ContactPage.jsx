import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, MessageSquare } from 'lucide-react';

export default function ContactPage({ onEnquireClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: '', email: '', phone: '', company: '', product: '', message: '' });
    }, 4000);
  };

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
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Sales & Support Desk</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Our team is ready to assist you with material selection, technical drawings, and custom pricing inquiries.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: 'var(--primary-yellow)' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Phone Numbers</h4>
                    <p style={{ fontWeight: '600', fontSize: '1.05rem' }}>
                      <a href="tel:+918045815130" style={{ color: 'inherit', textDecoration: 'none' }}>+91-8045815130</a> / <a href="tel:+918291366340" style={{ color: 'inherit', textDecoration: 'none' }}>+91-8291366340</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: 'var(--primary-yellow)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Email Addresses</h4>
                    <p style={{ fontWeight: '600', fontSize: '1.05rem' }}>
                      <a href="mailto:info@sakshiforge.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@sakshiforge.in</a> / <a href="mailto:sakshiforge1737@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>sakshiforge1737@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: 'var(--primary-yellow)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Registered Head Office</h4>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                      113/117 Dr. M.G. Mahimtura Marg, 3rd Kumbharwada, Shop No. 5, Ground Floor, Mumbai, Maharashtra 400004, India.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.75rem', color: 'var(--primary-yellow)' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Business Hours</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      Monday - Saturday: 9:00 AM - 7:00 PM IST (WhatsApp Desk open 24/7)
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
            <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Request a Quote</h3>
              
              {success ? (
                <div style={{
                  backgroundColor: 'rgba(255, 193, 7, 0.05)',
                  border: '1px solid var(--primary-yellow)',
                  padding: '2rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  color: 'var(--text-primary)'
                }}>
                  <MessageSquare size={36} style={{ color: 'var(--primary-yellow)', margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Quote Request Sent!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    Thank you for reaching out. A sales engineer has been assigned and will reply with a detailed pricing sheet shortly (usually within 30 minutes).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Your Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} 
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Company / City</label>
                      <input 
                        type="text" 
                        value={formData.company} 
                        onChange={(e) => setFormData({...formData, company: e.target.value})} 
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} 
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Product / Requirements</label>
                    <input 
                      type="text" 
                      placeholder='e.g. 2" Class 150 Slip-On Flanges SS316L' 
                      value={formData.product} 
                      onChange={(e) => setFormData({...formData, product: e.target.value})} 
                      style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} 
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Detailed Specifications & Quantity</label>
                    <textarea 
                      rows="4" 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})} 
                      placeholder="Please specify size list, schedule/pressure rating, steel grade, and quantity..."
                      style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)', resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem 0', justifyContent: 'center' }}>
                    Send RFQ <Send size={16} style={{ marginLeft: '0.5rem' }} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
