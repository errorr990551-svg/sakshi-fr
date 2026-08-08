import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function Header({ currentPage, onNavigate, onEnquireClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a 
          href="/" 
          className="logo-link"
          onClick={(e) => handleLinkClick(e, '/')}
        >
          <div className="logo-icon-wrap">
            SF
          </div>
          <span className="logo-text">Sakshi <span>Forge</span></span>
        </a>

        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a 
                href="/" 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
                onClick={(e) => {
                  closeMenu();
                  handleLinkClick(e, '/');
                }}
              >
                Home
              </a>
            </li>

            {/* Products Dropdown */}
            <li className="nav-dropdown-item" style={{ position: 'relative' }}>
              <a 
                href="/products" 
                className={`nav-link ${currentPage === 'products' ? 'active' : ''}`} 
                onClick={(e) => {
                  closeMenu();
                  handleLinkClick(e, '/products');
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
              >
                Products <ChevronDown size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/flanges" onClick={(e) => { closeMenu(); handleLinkClick(e, '/flanges'); }}>Industrial Flanges</a></li>
                <li><a href="/forged-fittings" onClick={(e) => { closeMenu(); handleLinkClick(e, '/forged-fittings'); }}>Forged Steel Fittings</a></li>
                <li><a href="/electropolished-pipes" onClick={(e) => { closeMenu(); handleLinkClick(e, '/electropolished-pipes'); }}>Electropolished Pipes</a></li>
                <li><a href="/stainless-steel-round-bar" onClick={(e) => { closeMenu(); handleLinkClick(e, '/stainless-steel-round-bar'); }}>Round Bars & Rods</a></li>
                <li><a href="/stainless-steel-elbow" onClick={(e) => { closeMenu(); handleLinkClick(e, '/stainless-steel-elbow'); }}>SS Elbows (45°/90°/180°)</a></li>
                <li><a href="/asme-b16-11-forged-fittings" onClick={(e) => { closeMenu(); handleLinkClick(e, '/asme-b16-11-forged-fittings'); }}>ASME B16.11 Fittings</a></li>
                <li><a href="/asme-b16-5-flanges" onClick={(e) => { closeMenu(); handleLinkClick(e, '/asme-b16-5-flanges'); }}>ASME B16.5 Flanges</a></li>
                <li><a href="/ss-304-pipe-fittings-flanges" onClick={(e) => { closeMenu(); handleLinkClick(e, '/ss-304-pipe-fittings-flanges'); }}>SS 304/304L Grade</a></li>
                <li><a href="/ss-316-316l-pipe-fittings-flanges" onClick={(e) => { closeMenu(); handleLinkClick(e, '/ss-316-316l-pipe-fittings-flanges'); }}>SS 316/316L Grade</a></li>
                <li><a href="/duplex-2205-products" onClick={(e) => { closeMenu(); handleLinkClick(e, '/duplex-2205-products'); }}>Duplex 2205 Products</a></li>
              </ul>
            </li>

            {/* Resources & Engineering Tools */}
            <li className="nav-dropdown-item" style={{ position: 'relative' }}>
              <a 
                href="/weight-calculator" 
                className="nav-link"
                onClick={(e) => {
                  closeMenu();
                  handleLinkClick(e, '/weight-calculator');
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
              >
                Resources <ChevronDown size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/flange-dimension-chart" onClick={(e) => { closeMenu(); handleLinkClick(e, '/flange-dimension-chart'); }}>Flange Dimension Chart</a></li>
                <li><a href="/flange-weight-chart" onClick={(e) => { closeMenu(); handleLinkClick(e, '/flange-weight-chart'); }}>Flange Weight Chart</a></li>
                <li><a href="/flange-bolt-chart" onClick={(e) => { closeMenu(); handleLinkClick(e, '/flange-bolt-chart'); }}>Flange Bolt Chart</a></li>
                <li><a href="/pipe-schedule-chart" onClick={(e) => { closeMenu(); handleLinkClick(e, '/pipe-schedule-chart'); }}>Pipe Schedule Chart</a></li>
                <li><a href="/catalogue" onClick={(e) => { closeMenu(); handleLinkClick(e, '/catalogue'); }}>Product Catalogue (PDF)</a></li>
                <li><a href="/blog" onClick={(e) => { closeMenu(); handleLinkClick(e, '/blog'); }}>Steel Knowledge Hub</a></li>
              </ul>
            </li>

            {/* Cities We Serve */}
            <li>
              <a 
                href="/market-area" 
                className={`nav-link ${currentPage === 'market-area' ? 'active' : ''}`} 
                onClick={(e) => {
                  closeMenu();
                  handleLinkClick(e, '/market-area');
                }}
              >
                Cities We Serve
              </a>
            </li>

            {/* About & Trust Dropdown */}
            <li className="nav-dropdown-item" style={{ position: 'relative' }}>
              <a 
                href="/about-us" 
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} 
                onClick={(e) => {
                  closeMenu();
                  handleLinkClick(e, '/about-us');
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
              >
                About <ChevronDown size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a href="/about-us" onClick={(e) => { closeMenu(); handleLinkClick(e, '/about-us'); }}>Corporate Overview</a></li>
                <li><a href="/team" onClick={(e) => { closeMenu(); handleLinkClick(e, '/team'); }}>Leadership & QA Team</a></li>
                <li><a href="/clients" onClick={(e) => { closeMenu(); handleLinkClick(e, '/clients'); }}>Clients & Industries</a></li>
                <li><a href="/quality-assurance" onClick={(e) => { closeMenu(); handleLinkClick(e, '/quality-assurance'); }}>Quality Assurance</a></li>
                <li><a href="/certifications" onClick={(e) => { closeMenu(); handleLinkClick(e, '/certifications'); }}>ISO & Standards Certs</a></li>
              </ul>
            </li>

            <li>
              <a 
                href="/contact-us" 
                className={`nav-link ${currentPage === 'contact-us' ? 'active' : ''}`} 
                onClick={(e) => {
                  closeMenu();
                  handleLinkClick(e, '/contact-us');
                }}
              >
                Contact Us
              </a>
            </li>

            <li>
              <button 
                onClick={() => {
                  closeMenu();
                  onEnquireClick();
                }} 
                className="btn btn-primary"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
              >
                Enquire Now
              </button>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
