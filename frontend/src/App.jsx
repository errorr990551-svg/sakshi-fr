import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductRange from './components/ProductRange';
import Infrastructure from './components/Infrastructure';
import WhyChooseUs from './components/WhyChooseUs';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import TamilNaduHubPage from './components/TamilNaduHubPage';
import KarnatakaHubPage from './components/KarnatakaHubPage';
import GujaratHubPage from './components/GujaratHubPage';
import TelanganaHubPage from './components/TelanganaHubPage';
import WestBengalHubPage from './components/WestBengalHubPage';
import { customCityData } from './data/customCityData';
import { maharashtraCityData } from './data/maharashtraCityData';
import { karnatakaCityData } from './data/karnatakaCityData';
import { gujaratCityData } from './data/gujaratCityData';
import { telanganaCityData } from './data/telanganaCityData';
import { westBengalCityData } from './data/westBengalCityData';
import MaharashtraCityPage from './components/MaharashtraCityPage';
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
import BlogPostPage from './components/BlogPostPage';
import { blogPosts } from './data/blogData';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsPage from './components/TermsPage';
import WeightCalculatorPage from './components/WeightCalculatorPage';
import MarketAreaPage from './components/MarketAreaPage';
import CityPage from './components/CityPage';
import marketCitiesData from './data/market_cities.json';

import ClientsPage from './components/ClientsPage';
import CataloguePage from './components/CataloguePage';
import TeamPage from './components/TeamPage';
import GradePage from './components/GradePage';
import StandardPage from './components/StandardPage';
import ChartToolsPage from './components/ChartToolsPage';
import ExportPage from './components/ExportPage';
import ElbowProductPage from './components/ElbowProductPage';
import GalleryPage from './components/GalleryPage';
import GallerySection from './components/GallerySection';
import { gradePages, standardPages } from './data/seo_master_data';
import epBuildSpecData from './data/ep_build_spec_data.json';
import EPBuildSpecRenderer from './components/EPBuildSpecRenderer';


// Helper to check if a pathname is a city/market-area path with a trailing slash
export const isTrailingSlashCityPath = (pathname) => {
  if (!pathname || pathname === '/' || typeof pathname !== 'string') {
    return false;
  }
  const purePath = pathname.split('?')[0].split('#')[0];
  if (!purePath.endsWith('/')) {
    return false;
  }
  const clean = purePath.replace(/\/+$/, '');
  if (clean === '/market-area' || clean.startsWith('/market-area/')) {
    return true;
  }
  const slug = clean.replace(/^\//, '');
  if (
    (maharashtraCityData && maharashtraCityData[slug]) ||
    (karnatakaCityData && karnatakaCityData[slug]) ||
    (gujaratCityData && gujaratCityData[slug]) ||
    (telanganaCityData && telanganaCityData[slug]) ||
    (westBengalCityData && westBengalCityData[slug]) ||
    (customCityData && customCityData[slug]) ||
    (marketCitiesData && marketCitiesData.some(c => c.slug === slug || c.path === clean || c.path === '/' + slug))
  ) {
    return true;
  }
  return false;
};

function App(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState('');
  const [enquiryCustomTitle, setEnquiryCustomTitle] = useState('');
  const [hasUnlockedContact, setHasUnlockedContact] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem('contactDetailsUnlocked') === 'true';
  });
  const [currentPath, setCurrentPath] = useState(() => {
    if (props.path) {
      if (isTrailingSlashCityPath(props.path)) {
        return '/';
      }
      return props.path;
    }
    if (typeof window !== 'undefined') {
      if (isTrailingSlashCityPath(window.location.pathname)) {
        window.history.replaceState(null, '', '/');
        return '/';
      }
      return window.location.pathname;
    }
    return '/';
  });

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
      const path = window.location.pathname;
      if (isTrailingSlashCityPath(path)) {
        window.history.replaceState(null, '', '/');
        setCurrentPath('/');
      } else {
        setCurrentPath(path);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle static assets/redirection paths that might land in the SPA router
  useEffect(() => {
    if (typeof window !== 'undefined' && (isTrailingSlashCityPath(window.location.pathname) || isTrailingSlashCityPath(currentPath))) {
      window.history.replaceState(null, '', '/');
      if (currentPath !== '/') {
        setCurrentPath('/');
      }
      return;
    }
    if (currentPath === '/sitemap' || currentPath === '/sitemap.xml') {
      window.location.replace('/sitemap.xml');
    } else if (
      currentPath === '/robots' || 
      currentPath === '/robots.txt' || 
      currentPath === '/robts' || 
      currentPath === '/robts.txt'
    ) {
      window.location.replace('/robots.txt');
    } else if (currentPath.includes('electropolished-pipe-manufacturer-')) {
      const clean = currentPath.replace(/\/$/, '');
      const idx = clean.indexOf('electropolished-pipe-manufacturer-');
      const cityKey = clean.substring(idx + 'electropolished-pipe-manufacturer-'.length);
      window.location.replace(`/market-area/${cityKey}`);
    } else if (currentPath.includes('electropolished-pipe-supplier-')) {
      const clean = currentPath.replace(/\/$/, '');
      const idx = clean.indexOf('electropolished-pipe-supplier-');
      const cityKey = clean.substring(idx + 'electropolished-pipe-supplier-'.length);
      window.location.replace(`/market-area/${cityKey}`);
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
    if (isTrailingSlashCityPath(currentPath)) {
      return { type: 'home', data: null };
    }
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
    if (cleanPath.startsWith('/blog/')) {
      const blogSlug = cleanPath.replace(/^\/blog\//, '').replace(/\/$/, '');
      const post = blogPosts.find(p => p.slug === blogSlug || p.id === blogSlug);
      if (post) {
        return { type: 'blog-post', data: post };
      }
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
    if (cleanPath === '/clients') {
      return { type: 'clients', data: null };
    }
    if (cleanPath === '/catalogue') {
      return { type: 'catalogue', data: null };
    }
    if (cleanPath === '/team') {
      return { type: 'team', data: null };
    }
    if (cleanPath === '/stainless-steel-elbow') {
      return { type: 'stainless-steel-elbow', data: null };
    }
    if (cleanPath === '/gallery' || cleanPath === '/media-gallery') {
      return { type: 'gallery', data: null };
    }
    
    // Check chart tool slugs
    if (['/flange-dimension-chart', '/flange-weight-chart', '/flange-bolt-chart', '/pipe-schedule-chart'].includes(cleanPath)) {
      const toolType = cleanPath.substring(1);
      return { type: 'chart-tool', data: { toolType, slug: toolType } };
    }

    // Check export slugs
    if (['/flange-exporter-usa', '/flange-supplier-uae', '/flange-supplier-saudi-arabia'].includes(cleanPath)) {
      const countryType = cleanPath === '/flange-exporter-usa' ? 'usa' : cleanPath === '/flange-supplier-uae' ? 'uae' : 'saudi-arabia';
      return { type: 'export', data: { countryType, slug: cleanPath.substring(1) } };
    }

    const slug = cleanPath.substring(1);

    // Check grade pages
    if (gradePages[slug]) {
      return { type: 'grade', data: gradePages[slug] };
    }

    // Check standard pages
    if (standardPages[slug]) {
      return { type: 'standard', data: standardPages[slug] };
    }
    
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
    
    if (cleanPath === '/tamil-nadu' || cleanPath === '/market-area/tamil-nadu') {
      return { type: 'tamil-nadu-hub', data: null };
    }

    if (cleanPath === '/karnataka' || cleanPath === '/market-area/karnataka') {
      return { type: 'karnataka-hub', data: null };
    }

    if (cleanPath === '/gujarat' || cleanPath === '/market-area/gujarat') {
      return { type: 'gujarat-hub', data: null };
    }

    if (cleanPath === '/telangana' || cleanPath === '/market-area/telangana') {
      return { type: 'telangana-hub', data: null };
    }

    if (cleanPath === '/west-bengal' || cleanPath === '/market-area/west-bengal') {
      return { type: 'west-bengal-hub', data: null };
    }

    if (cleanPath === '/maharashtra' || cleanPath === '/market-area/maharashtra') {
      return { type: 'market-area', data: null };
    }

    // Redirect legacy electropolished-pipe-manufacturer-* and supplier-* to /market-area/*
    if (cleanPath.startsWith('/electropolished-pipe-manufacturer-')) {
      const cityKey = cleanPath.replace('/electropolished-pipe-manufacturer-', '');
      if (typeof window !== 'undefined') {
        window.location.replace(`/market-area/${cityKey}`);
      }
      return { type: '404', data: null };
    }
    if (cleanPath.startsWith('/electropolished-pipe-supplier-')) {
      const cityKey = cleanPath.replace('/electropolished-pipe-supplier-', '');
      if (typeof window !== 'undefined') {
        window.location.replace(`/market-area/${cityKey}`);
      }
      return { type: '404', data: null };
    }

    // Check if market-area path is for Maharashtra, Karnataka, Gujarat, Telangana, or West Bengal rich cities
    if (cleanPath.startsWith('/market-area/')) {
      const marketCityKey = cleanPath.replace('/market-area/', '');
      if (maharashtraCityData[marketCityKey]) {
        return { type: 'maharashtra-city', data: maharashtraCityData[marketCityKey] };
      }
      if (karnatakaCityData[marketCityKey]) {
        return { type: 'maharashtra-city', data: karnatakaCityData[marketCityKey] };
      }
      if (gujaratCityData[marketCityKey]) {
        return { type: 'maharashtra-city', data: gujaratCityData[marketCityKey] };
      }
      if (telanganaCityData[marketCityKey]) {
        return { type: 'maharashtra-city', data: telanganaCityData[marketCityKey] };
      }
      if (westBengalCityData[marketCityKey]) {
        return { type: 'maharashtra-city', data: westBengalCityData[marketCityKey] };
      }
    }

    // Check if direct slug matches Karnataka, Gujarat, Telangana, or West Bengal rich cities
    if (karnatakaCityData[slug]) {
      return { type: 'maharashtra-city', data: karnatakaCityData[slug] };
    }
    if (gujaratCityData[slug]) {
      return { type: 'maharashtra-city', data: gujaratCityData[slug] };
    }
    if (telanganaCityData[slug]) {
      return { type: 'maharashtra-city', data: telanganaCityData[slug] };
    }
    if (westBengalCityData[slug]) {
      return { type: 'maharashtra-city', data: westBengalCityData[slug] };
    }

    // Check custom rich city data (Tamil Nadu, Canberra, Abu Dhabi, etc.)
    const customCityKey = cleanPath.startsWith('/market-area/') ? cleanPath.replace('/market-area/', '') : slug;
    if (customCityData[customCityKey]) {
      return { type: 'market-city', data: customCityData[customCityKey] };
    }

    // Check if matching market city slug from standard dataset
    let city = marketCitiesData.find(c => c.slug === slug || c.path === cleanPath || c.path === '/' + slug);
    if (city) {
      return { type: 'market-city', data: city };
    }

    // Check if matching EP Build Spec page (106 URLs)
    const epPage = epBuildSpecData.find(p => p.url === cleanPath || p.url === `${cleanPath}/` || p.url === `/${slug}` || p.url === `/${slug}/`);
    if (epPage) {
      return { type: 'ep-spec', data: epPage };
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
        <HomePage onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'tamil-nadu-hub' && (
        <TamilNaduHubPage 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'karnataka-hub' && (
        <KarnatakaHubPage 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'gujarat-hub' && (
        <GujaratHubPage 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'telangana-hub' && (
        <TelanganaHubPage 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'west-bengal-hub' && (
        <WestBengalHubPage 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'gallery' && (
        <GalleryPage onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'about' && (
        <AboutPage 
          onEnquireClick={() => handleOpenEnquiry('')} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
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

      {resolvedRoute.type === 'blog-post' && (
        <BlogPostPage post={resolvedRoute.data} onEnquireClick={handleOpenEnquiry} />
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
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'maharashtra-city' && (
        <MaharashtraCityPage 
          cityData={resolvedRoute.data} 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}

      {resolvedRoute.type === 'clients' && (
        <ClientsPage onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'catalogue' && (
        <CataloguePage onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'team' && (
        <TeamPage onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'stainless-steel-elbow' && (
        <ElbowProductPage onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'grade' && (
        <GradePage gradeData={resolvedRoute.data} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'standard' && (
        <StandardPage standardData={resolvedRoute.data} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'chart-tool' && (
        <ChartToolsPage toolType={resolvedRoute.data.toolType} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'export' && (
        <ExportPage countryType={resolvedRoute.data.countryType} onEnquireClick={handleOpenEnquiry} />
      )}

      {resolvedRoute.type === 'ep-spec' && (
        <EPBuildSpecRenderer 
          path={currentPath} 
          onEnquireClick={handleOpenEnquiry} 
          hasUnlockedContact={hasUnlockedContact}
          onShowContactDetails={handleOpenContactDetailsForm}
        />
      )}


      {resolvedRoute.type === '404' && (
        <NotFoundPage />
      )}

      {/* Call To Action Banner */}
      {resolvedRoute.type !== 'contact-us' && resolvedRoute.type !== 'market-city' && resolvedRoute.type !== 'maharashtra-city' && resolvedRoute.type !== 'home' && resolvedRoute.type !== 'about' && resolvedRoute.type !== 'tamil-nadu-hub' && resolvedRoute.type !== 'karnataka-hub' && (
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

