import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductRange from './components/ProductRange';
import Infrastructure from './components/Infrastructure';
import WhyChooseUs from './components/WhyChooseUs';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import EnquiryModal from './components/EnquiryModal';
import { ArrowRight } from 'lucide-react';

// SEO and Router imports
import { updateSEO } from './utils/seo';
import productsData from './data/products.json';
import categoriesData from './data/categories.json';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import NotFoundPage from './components/NotFoundPage';
import ProductsPage from './components/ProductsPage';
import QualityPage from './components/QualityPage';
import IndustriesPage from './components/IndustriesPage';
import ContactPage from './components/ContactPage';
import CertificationsPage from './components/CertificationsPage';
import BlogPage from './components/BlogPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsPage from './components/TermsPage';
import WeightCalculatorPage from './components/WeightCalculatorPage';
import MarketAreaPage from './components/MarketAreaPage';
import CityPage from './components/CityPage';
import marketCitiesData from './data/market_cities.json';


function App(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState('');
  const [enquiryCustomTitle, setEnquiryCustomTitle] = useState('');
  const [hasUnlockedContact, setHasUnlockedContact] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem('contactDetailsUnlocked') === 'true';
  });
  const [currentPath, setCurrentPath] = useState(
    props.path || (typeof window !== 'undefined' ? window.location.pathname : '/')
  );

  const handleOpenContactDetailsForm = () => {
    if (hasUnlockedContact) return;
    setEnquiryCustomTitle('Fill details to get email & phone number');
    setPreselectedProduct('');
    setIsEnquiryOpen(true);
  };

  const handleOpenEnquiry = (productName = '') => {
    setEnquiryCustomTitle('');
    setPreselectedProduct(productName || '');
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryCustomTitle('');
  };

  // Trigger automatic Enquiry Popup for new visitors on any page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hasSeenPopup = sessionStorage.getItem('hasSeenEnquiryPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsEnquiryOpen(true);
        sessionStorage.setItem('hasSeenEnquiryPopup', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Sync state with browser URL navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle static assets/redirection paths that might land in the SPA router
  useEffect(() => {
    if (currentPath === '/sitemap' || currentPath === '/sitemap.xml') {
      window.location.replace('/sitemap.xml');
    } else if (
      currentPath === '/robots' || 
      currentPath === '/robots.txt' || 
      currentPath === '/robts' || 
      currentPath === '/robts.txt'
    ) {
      window.location.replace('/robots.txt');
    }
  }, [currentPath]);

  // Resolve current route and data
  useEffect(() => {
    // Scroll to top of the page on route change
    window.scrollTo(0, 0);

    // Scroll to hash element if present (e.g. /#products)
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [currentPath]);

  // Determine current page type and parameters
  const resolvedRoute = (() => {
    const cleanPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
    
    if (cleanPath === '/' || cleanPath === '') {
      return { type: 'home', data: null };
    }
    if (cleanPath === '/about-us' || cleanPath === '/about') {
      return { type: 'about', data: null };
    }
    if (cleanPath === '/products') {
      return { type: 'products', data: null };
    }
    if (cleanPath === '/quality-assurance') {
      return { type: 'quality-assurance', data: null };
    }
    if (cleanPath === '/industries') {
      return { type: 'industries', data: null };
    }
    if (cleanPath === '/contact-us') {
      return { type: 'contact-us', data: null };
    }
    if (cleanPath === '/certifications') {
      return { type: 'certifications', data: null };
    }
    if (cleanPath === '/blog') {
      return { type: 'blog', data: null };
    }
    if (cleanPath === '/privacy-policy') {
      return { type: 'privacy-policy', data: null };
    }
    if (cleanPath === '/terms-and-conditions') {
      return { type: 'terms-and-conditions', data: null };
    }
    if (cleanPath === '/weight-calculator') {
      return { type: 'weight-calculator', data: null };
    }
    
    if (cleanPath === '/market-area') {
      return { type: 'market-area', data: null };
    }
    
    // Check if matching city path e.g. /electropolished-pipes-manufacturer-in-mumbai
    const matchedCity = marketCitiesData.find(c => c.path === cleanPath);
    if (matchedCity) {
      return { type: 'market-city', data: matchedCity };
    }

    const slug = cleanPath.substring(1);
    
    // Check if matching category slug
    const category = categoriesData.find(c => c['Category Slug'] === slug);
    if (category) {
      return { type: 'category', data: category };
    }
    
    // Check if matching product slug
    const product = productsData.find(p => p['URL Slug'] === slug);
    if (product) {
      return { type: 'product', data: product };
    }
    
    return { type: '404', data: null };
  })();

  // Update SEO Meta Tags & structured schemas
  useEffect(() => {
    updateSEO({ type: resolvedRoute.type, data: resolvedRoute.data });
  }, [currentPath, resolvedRoute.type, resolvedRoute.data]);

  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  const handleProductEnquiryTrigger = (productName) => {
    setSelectedProduct(null); // Close product modal
    handleOpenEnquiry(productName); // Open enquiry modal
  };

  return (
    <>
      {/* Navigation Header */}
      <Header 
        currentPage={resolvedRoute.type} 
        onNavigate={(path) => {
          // Fallback legacy navigation if any header link calls it
          window.history.pushState(null, '', path);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }} 
        onEnquireClick={() => handleOpenEnquiry('')} 
      />

      {/* Main Body Routing */}
      {resolvedRoute.type === 'home' && (
        <>
          {/* Hero Presentation Section & Capabilities */}
          <Hero onEnquireClick={() => handleOpenEnquiry('')} />

          {/* About Corporate Overview */}
          <AboutSection />

          {/* Products Inventory Grid */}
          <ProductRange onProductSelect={handleOpenProduct} />

          {/* Value Pillars List */}
          <WhyChooseUs />

          {/* Factory and Machinery Infrastructure */}
          <Infrastructure />
        </>
      )}

      {resolvedRoute.type === 'about' && (
        <AboutPage onEnquireClick={() => handleOpenEnquiry('')} />
      )}

      {resolvedRoute.type === 'category' && (
        <CategoryPage 
          category={resolvedRoute.data} 
          onEnquireClick={handleOpenEnquiry} 
        />
      )}

      {resolvedRoute.type === 'product' && (
        <ProductPage 
          product={resolvedRoute.data} 
          onEnquireClick={handleOpenEnquiry} 
        />
      )}

      {resolvedRoute.type === 'products' && (
        <ProductsPage 
          onEnquireClick={handleOpenEnquiry} 
        />
      )}

      {resolvedRoute.type === 'quality-assurance' && (
        <QualityPage onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'industries' && (
        <IndustriesPage />
      )}

      {resolvedRoute.type === 'contact-us' && (
        <ContactPage 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'certifications' && (
        <CertificationsPage />
      )}

      {resolvedRoute.type === 'blog' && (
        <BlogPage />
      )}

      {resolvedRoute.type === 'privacy-policy' && (
        <PrivacyPolicyPage />
      )}

      {resolvedRoute.type === 'terms-and-conditions' && (
        <TermsPage />
      )}

      {resolvedRoute.type === 'weight-calculator' && (
        <WeightCalculatorPage onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'market-area' && (
        <MarketAreaPage />
      )}

      {resolvedRoute.type === 'market-city' && (
        <CityPage 
          cityData={resolvedRoute.data} 
          onEnquireClick={handleOpenEnquiry} 
        />
      )}


      {resolvedRoute.type === '404' && (
        <NotFoundPage />
      )}

      {/* Call To Action Banner */}
      {resolvedRoute.type !== 'contact-us' && (
        <section className="cta-sec section-padding">
          <div className="container">
            <div className="cta-grid">
              <div className="cta-left">
                <h2>Partner with Sakshi Forge for <span>Reliable Industrial Steel Solutions</span></h2>
                <p style={{ marginTop: '0.5rem' }}>
                  Delivering precision-engineered flanges, pipes, and forged steel components designed for strength, durability, and performance in critical high-pressure industrial applications.
                </p>
              </div>
              <div className="cta-btn-wrap">
                <button onClick={() => handleOpenEnquiry('')} className="btn btn-primary btn-lg">
                  Contact Us <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer Sitemap */}
      <Footer 
        onNavigate={(path) => {
          window.history.pushState(null, '', path);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }} 
        onEnquireClick={() => handleOpenEnquiry('')} 
        hasUnlockedContact={hasUnlockedContact}
        onShowContactDetails={handleOpenContactDetailsForm}
      />

      {/* Interactive Detail Modal for Products (Legacy Fallback) */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseProduct} 
          onEnquireTrigger={handleProductEnquiryTrigger}
        />
      )}

      {/* Global RFQ/Enquiry Form Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={handleCloseEnquiry} 
        preselectedProduct={preselectedProduct}
        customTitle={enquiryCustomTitle}
        onUnlockContact={() => setHasUnlockedContact(true)}
      />
    </>
  );
}

export default App;

