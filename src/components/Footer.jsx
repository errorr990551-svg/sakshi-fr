import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer({ onNavigate, onEnquireClick }) {
  const currentYear = new Date().getFullYear();

  const handleProductsLink = (e) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleScrollLink = (e, targetId) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <footer className="footer-sec">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-about">
            <a 
              href="#" 
              className="logo-link" 
              style={{ marginBottom: '0.5rem' }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              <div className="logo-icon-wrap">SF</div>
              <span className="logo-text">Sakshi <span>Forge</span></span>
            </a>
            <p>
              Sakshi Forge is a leading manufacturer and supplier of industrial flanges, butt weld fittings, forged fittings, pipes, tubes, round bars, and steel plates. We deliver precision-engineered steel products designed for strength, durability, and reliable industrial performance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Phone size={16} className="infra-feature-icon" />
                <span style={{ fontSize: '0.9rem' }}>+91 22 6639 4232</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Mail size={16} className="infra-feature-icon" />
                <span style={{ fontSize: '0.9rem' }}>sales@sakshiforge.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} className="infra-feature-icon" style={{ alignSelf: 'flex-start', marginTop: '0.2rem' }} />
                <span style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Office No. 12, Steel Market Chamber, Kalbadevi, Mumbai - 400004, India</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Menu</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo(0, 0); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); window.scrollTo(0, 0); }}>About Us</a></li>
              <li><a href="#" onClick={handleProductsLink}>Products Range</a></li>
              <li><a href="#" onClick={(e) => handleScrollLink(e, 'infra')}>Manufacturing Facility</a></li>
              <li><a href="#" onClick={(e) => handleScrollLink(e, 'why-choose')}>Why Choose Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onEnquireClick(); }}>Get Quotation</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Disclaimer</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Stay updated with our latest metal pricing, inventory additions, and mill expansions.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Follow us on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Follow us on LinkedIn">
                <Globe size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Sakshi Forge. All Rights Reserved. Manufactured in India.</p>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => e.preventDefault()}>Sitemap</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
