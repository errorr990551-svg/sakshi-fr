import React from 'react';
import { Mail, Phone, MapPin, Globe, Lock } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function Footer({ onNavigate, onEnquireClick, hasUnlockedContact = false, onShowContactDetails }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-sec">
      <div className="container">
        <div className="footer-top">

          <div className="footer-about">
            <a
              href="/"
              className="logo-link"
              style={{ marginBottom: '0.5rem' }}
              onClick={(e) => handleLinkClick(e, '/')}
            >
              <div className="logo-icon-wrap">SF</div>
              <span className="logo-text">Sakshi <span>Forge</span></span>
            </a>
            <p>
              Sakshi Forge is an ISO 9001:2015 certified manufacturer of industrial flanges, forged fittings, electropolished pipes, round bars, and stainless steel components in Mumbai, India. Delivering 100% PMI-tested metallurgy with EN 10204 3.1 MTCs globally.
            </p>

            {hasUnlockedContact ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <Phone size={16} className="infra-feature-icon" />
                  <span style={{ fontSize: '0.9rem' }}>
                    <a href="tel:+918291366340" style={{ color: 'inherit', textDecoration: 'none' }}>+91 82913 66340</a> /{' '}
                    <a href="tel:+917976476375" style={{ color: 'inherit', textDecoration: 'none' }}>+91 79764 76375</a>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <Mail size={16} className="infra-feature-icon" />
                  <span style={{ fontSize: '0.9rem' }}>
                    <a href="mailto:sakshiforge1737@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>sakshiforge1737@gmail.com</a>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={16} className="infra-feature-icon" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                    <strong>Office Address:</strong><br />
                    113 / 117, Dr. M. G. Mahimtura Marg, 3rd Kumbharwada, Shop No. 5, Ground Floor, Mumbai - 400 004.
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ marginTop: '1rem' }}>
                <button
                  onClick={onShowContactDetails}
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.8rem 1.4rem',
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 15px rgba(255, 193, 7, 0.2)'
                  }}
                >
                  <Phone size={16} /> Show Contact Details
                </button>
              </div>
            )}
          </div>

          {/* Key Product Hubs */}
          <div className="footer-col">
            <h4>Products & Standards</h4>
            <ul className="footer-links">
              <li><a href="/flanges" onClick={(e) => handleLinkClick(e, '/flanges')}>Industrial Flanges Hub</a></li>
              <li><a href="/forged-fittings" onClick={(e) => handleLinkClick(e, '/forged-fittings')}>Forged Steel Fittings</a></li>
              <li><a href="/electropolished-pipes" onClick={(e) => handleLinkClick(e, '/electropolished-pipes')}>Electropolished Pipes</a></li>
              <li><a href="/stainless-steel-round-bar" onClick={(e) => handleLinkClick(e, '/stainless-steel-round-bar')}>SS Round Bars & Rods</a></li>
              <li><a href="/stainless-steel-elbow" onClick={(e) => handleLinkClick(e, '/stainless-steel-elbow')}>SS Elbows (45°/90°/180°)</a></li>
              <li><a href="/asme-b16-11-forged-fittings" onClick={(e) => handleLinkClick(e, '/asme-b16-11-forged-fittings')}>ASME B16.11 Standard</a></li>
              <li><a href="/asme-b16-5-flanges" onClick={(e) => handleLinkClick(e, '/asme-b16-5-flanges')}>ASME B16.5 Standard</a></li>
            </ul>
          </div>

          {/* Engineering Tools & Trust */}
          <div className="footer-col">
            <h4>Tools & Company</h4>
            <ul className="footer-links">
              <li><a href="/flange-dimension-chart" onClick={(e) => handleLinkClick(e, '/flange-dimension-chart')}>Flange Dimension Chart</a></li>
              <li><a href="/flange-weight-chart" onClick={(e) => handleLinkClick(e, '/flange-weight-chart')}>Flange Weight Chart</a></li>
              <li><a href="/flange-bolt-chart" onClick={(e) => handleLinkClick(e, '/flange-bolt-chart')}>Flange Bolt Chart</a></li>
              <li><a href="/pipe-schedule-chart" onClick={(e) => handleLinkClick(e, '/pipe-schedule-chart')}>Pipe Schedule Chart</a></li>
              <li><a href="/catalogue" onClick={(e) => handleLinkClick(e, '/catalogue')}>Download Catalogue PDF</a></li>
              <li><a href="/team" onClick={(e) => handleLinkClick(e, '/team')}>Leadership & QA Team</a></li>
              <li><a href="/clients" onClick={(e) => handleLinkClick(e, '/clients')}>Our Clients & Industries</a></li>
            </ul>
          </div>

          {/* Key Cities We Serve */}
          <div className="footer-col">
            <h4>Top Cities Served</h4>
            <ul className="footer-links">
              <li><a href="/electropolished-pipes-manufacturer-in-mumbai" onClick={(e) => handleLinkClick(e, '/electropolished-pipes-manufacturer-in-mumbai')}>Mumbai Flange Supplier</a></li>
              <li><a href="/electropolished-pipes-manufacturer-in-delhi" onClick={(e) => handleLinkClick(e, '/electropolished-pipes-manufacturer-in-delhi')}>Delhi NCR Steel Supply</a></li>
              <li><a href="/electropolished-pipes-manufacturer-in-hyderabad" onClick={(e) => handleLinkClick(e, '/electropolished-pipes-manufacturer-in-hyderabad')}>Hyderabad Pharma Piping</a></li>
              <li><a href="/electropolished-pipes-manufacturer-in-visakhapatnam" onClick={(e) => handleLinkClick(e, '/electropolished-pipes-manufacturer-in-visakhapatnam')}>Visakhapatnam Port Supply</a></li>
              <li><a href="/electropolished-pipes-manufacturer-in-indore" onClick={(e) => handleLinkClick(e, '/electropolished-pipes-manufacturer-in-indore')}>Indore MP Flanges</a></li>
              <li><a href="/market-area" onClick={(e) => handleLinkClick(e, '/market-area')}>All 50+ Cities Directory</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Sakshi Forge. All Rights Reserved. Manufactured in India.</p>
          <div className="footer-bottom-links">
            <a href="/sitemap.xml" target="_blank">Sitemap</a>
            <a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')}>Privacy Policy</a>
            <a href="/terms-and-conditions" onClick={(e) => handleLinkClick(e, '/terms-and-conditions')}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
