import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EPRelatedLinks from './components/EPRelatedLinks';
import CityDeepContent from './components/CityDeepContent';
import ProductModal from './components/ProductModal';
import EnquiryModal from './components/EnquiryModal';
import { ArrowRight } from 'lucide-react';
import { REDIRECTED_PATHS } from './data/redirects';
import { navigate } from './utils/router';

// Helper kept for backward compatibility
export const isTrailingSlashCityPath = () => false;

// `route` ({ type, data, ... }) comes from routes.js: resolved at build time and embedded in
// each prerendered page. `Page` is that route type's component (see pages.js).
function App({ path, route, Page }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState('');
  const [enquiryCustomTitle, setEnquiryCustomTitle] = useState('');
  const [hasUnlockedContact, setHasUnlockedContact] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem('contactDetailsUnlocked') === 'true';
  });
  const currentPath = path;
  const resolvedRoute = route;

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
      }, 25000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Every URL is a prerendered page, so links load the next page. A history entry with a
  // different path (pushed by older code) is shown by loading that page.
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname !== currentPath) window.location.reload();
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPath]);

  // Unknown URLs get the 404 page: send stray, merged and legacy URLs on to the right page
  useEffect(() => {
    if (resolvedRoute.type !== '404') return;
    const clean = currentPath.split('?')[0].split('#')[0];

    if (clean === '/sitemap' || clean === '/sitemap.xml') {
      window.location.replace('/sitemap.xml');
      return;
    }
    if (['/robots', '/robots.txt', '/robts', '/robts.txt'].includes(clean)) {
      window.location.replace('/robots.txt');
      return;
    }
    const slashed = clean.endsWith('/') ? clean : `${clean}/`;
    if (REDIRECTED_PATHS[slashed]) {
      window.location.replace(REDIRECTED_PATHS[slashed]);
      return;
    }
    import('./routes').then(({ getLegacyRedirect }) => {
      const legacyDest = getLegacyRedirect(clean);
      if (legacyDest) window.location.replace(legacyDest);
    });
  }, [currentPath, resolvedRoute.type]);

  // Scroll to hash element if present (e.g. /#products)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [currentPath]);

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
        onNavigate={navigate} 
        onEnquireClick={() => handleOpenEnquiry('')} 
      />

      {/* Main Body Routing */}
      {resolvedRoute.type === 'home' && (
        <Page onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'tamil-nadu-hub' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'karnataka-hub' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'gujarat-hub' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'telangana-hub' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'west-bengal-hub' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'madhya-pradesh-hub' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'andhra-pradesh-hub' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'gallery' && (
        <Page onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'about' && (
        <Page 
          onEnquireClick={() => handleOpenEnquiry('')} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'category' && (
        <Page 
          category={resolvedRoute.data} 
          products={resolvedRoute.products}
          crossLinkSlugs={resolvedRoute.crossLinkSlugs}
          onEnquireClick={handleOpenEnquiry} 
        />
      )}

      {resolvedRoute.type === 'product' && (
        <Page 
          product={resolvedRoute.data} 
          relatedProducts={resolvedRoute.relatedProducts}
          onEnquireClick={handleOpenEnquiry} 
        />
      )}

      {resolvedRoute.type === 'products' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
        />
      )}

      {resolvedRoute.type === 'quality-assurance' && (
        <Page onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'industries' && (
        <Page />
      )}

      {resolvedRoute.type === 'contact-us' && (
        <Page 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'certifications' && (
        <Page />
      )}

      {resolvedRoute.type === 'blog' && (
        <Page />
      )}

      {resolvedRoute.type === 'blog-post' && (
        <Page post={resolvedRoute.data} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'privacy-policy' && (
        <Page />
      )}

      {resolvedRoute.type === 'terms-and-conditions' && (
        <Page />
      )}

      {resolvedRoute.type === 'weight-calculator' && (
        <Page onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'market-area' && (
        <Page cities={resolvedRoute.cities} />
      )}

      {resolvedRoute.type === 'market-city' && (
        <Page 
          cityData={resolvedRoute.data} 
          custom={resolvedRoute.custom}
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'maharashtra-city' && (
        <Page 
          cityData={resolvedRoute.data} 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'clients' && (
        <Page onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'catalogue' && (
        <Page onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'team' && (
        <Page onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'stainless-steel-elbow' && (
        <Page onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'grade' && (
        <Page gradeData={resolvedRoute.data} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'standard' && (
        <Page standardData={resolvedRoute.data} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'chart-tool' && (
        <Page toolType={resolvedRoute.data.toolType} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'export' && (
        <Page countryType={resolvedRoute.data.countryType} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'ep-spec' && (
        <Page 
          pageData={resolvedRoute.data} 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}


      {resolvedRoute.type === '404' && (
        <Page />
      )}

      {/* Call To Action Banner */}
      {resolvedRoute.type !== 'contact-us' && resolvedRoute.type !== 'market-city' && resolvedRoute.type !== 'maharashtra-city' && resolvedRoute.type !== 'home' && resolvedRoute.type !== 'about' && resolvedRoute.type !== 'tamil-nadu-hub' && resolvedRoute.type !== 'karnataka-hub' && resolvedRoute.type !== 'gujarat-hub' && resolvedRoute.type !== 'telangana-hub' && resolvedRoute.type !== 'west-bengal-hub' && resolvedRoute.type !== 'madhya-pradesh-hub' && resolvedRoute.type !== 'andhra-pradesh-hub' && (
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

      {(resolvedRoute.type === 'market-city' || resolvedRoute.type === 'maharashtra-city') && currentPath.startsWith('/market-area/') && (
        <CityDeepContent slug={currentPath.replace(/^\/market-area\/|\/$/g, '')} />
      )}
      {resolvedRoute.type !== '404' && <EPRelatedLinks groups={resolvedRoute.related} />}

      {/* Footer Sitemap */}
      <Footer 
        onNavigate={navigate} 
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

