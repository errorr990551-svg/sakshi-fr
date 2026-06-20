import React, { useState } from 'react';
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

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState('');

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

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Navigation Header */}
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onEnquireClick={() => handleOpenEnquiry('')} 
      />

      {currentPage === 'home' ? (
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
      ) : (
        <AboutPage onEnquireClick={() => handleOpenEnquiry('')} />
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
      <Footer onNavigate={handleNavigate} onEnquireClick={() => handleOpenEnquiry('')} />

      {/* Interactive Detail Modal for Products */}
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
      />
    </>
  );
}

export default App;
