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

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync state with browser URL navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Resolve current route and data
  const route = useEffect(() => {
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
    if (currentPath === '/' || currentPath === '') {
      return { type: 'home', data: null };
    }
    if (currentPath === '/about') {
      return { type: 'about', data: null };
    }
    if (currentPath === '/products') {
      return { type: 'products', data: null };
    }
    
    const slug = currentPath.substring(1);
    
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

  const handleOpenEnquiry = (productName = '') => {
    setPreselectedProduct(productName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setPreselectedProduct('');
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

      {resolvedRoute.type === '404' && (
        <NotFoundPage />
      )}

      {/* Call To Action Banner */}
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

      {/* Footer Sitemap */}
      <Footer 
        onNavigate={(path) => {
          window.history.pushState(null, '', path);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }} 
        onEnquireClick={() => handleOpenEnquiry('')} 
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
      {/* (Handles both general enquiries and specific product/category requests) */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={handleCloseEnquiry} 
        preselectedProduct={preselectedProduct}
      />
    </>
  );
}

export default App;

