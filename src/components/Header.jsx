import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

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
    if (currentPage !== 'home') {
      e.preventDefault();
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a 
          href="#" 
          className="logo-link"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
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
                href="#" 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('about');
                  setIsMenuOpen(false);
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#products" 
                className="nav-link" 
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
