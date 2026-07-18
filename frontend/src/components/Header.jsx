import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
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

  const handleProductsClick = (e) => {
    setIsMenuOpen(false);
    handleLinkClick(e, '/products');
  };

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
                  setIsMenuOpen(false);
                  handleLinkClick(e, '/');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about-us" 
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} 
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleLinkClick(e, '/about-us');
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/products" 
                className={`nav-link ${currentPage === 'products' ? 'active' : ''}`} 
                onClick={handleProductsClick}
              >
                Products
              </a>
            </li>
            <li>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
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
