import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize2, X, ChevronLeft, ChevronRight, Video, Image as ImageIcon, Send, Filter } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { galleryItems } from '../data/galleryData';

function GalleryCard({ item, index, onSelect }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (item.type === 'video' && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Autoplay prevented on hover:', err);
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`gallery-item-card ${item.type === 'video' ? 'video-card' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(index)}
    >
      <div className="gallery-media-wrapper">
        {item.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
              muted
              loop
              playsInline
              preload="metadata"
              className="gallery-media-video"
            />
            <div className={`gallery-video-overlay ${isPlaying ? 'playing' : ''}`}>
              <div className="play-pulse-btn">
                {isPlaying ? <Pause size={22} className="icon-pulse" /> : <Play size={22} className="icon-pulse" />}
              </div>
              <span className="video-badge-text">
                {isPlaying ? 'PLAYING VIDEO' : 'HOVER TO PLAY'}
              </span>
            </div>
            <div className="media-type-badge video-badge">
              <Video size={13} /> VIDEO
            </div>
          </>
        ) : (
          <>
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="gallery-media-img"
            />
            <div className="gallery-image-hover-overlay">
              <div className="zoom-icon-circle">
                <Maximize2 size={20} />
              </div>
            </div>
            <div className="media-type-badge image-badge">
              <ImageIcon size={13} /> PHOTO
            </div>
          </>
        )}
      </div>

      <div className="gallery-card-body">
        <span className="gallery-category-pill">{item.category}</span>
        <h4 className="gallery-card-title">{item.title}</h4>
        <p className="gallery-card-desc">{item.description}</p>
      </div>
    </div>
  );
}

export default function GalleryPage({ onEnquireClick }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = ['All', 'Videos', 'Factory & Forging', 'Products & Stock', 'Quality Assurance'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.filterTag === activeFilter || item.category === activeFilter);

  const handleOpenLightbox = (indexInFiltered) => {
    // Map index in filteredItems back to global or keep filtered view
    setLightboxIndex(indexInFiltered);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <main className="gallery-page-container">
      {/* Hero Header Section */}
      <section className="gallery-hero-section">
        <div className="container">
          <Breadcrumbs customCrumbs={[{ label: 'Home', path: '/' }, { label: 'Media & Factory Gallery' }]} />
          
          <div className="gallery-hero-header">
            <span className="hero-tag">FACTORY & INFRASTRUCTURE VISUALS</span>
            <h1 className="gallery-hero-title">
              Sakshi Forge <span>Manufacturing & Media Gallery</span>
            </h1>
            <p className="gallery-hero-subtitle">
              Explore live videos and high-definition photography showcasing our hot forging presses, high-precision CNC machining centers, raw material inventory, and export-ready forged steel products.
            </p>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="gallery-filter-bar">
            <div className="filter-label">
              <Filter size={16} /> <span>Filter Media:</span>
            </div>
            <div className="filter-buttons">
              {filters.map((filter) => {
                const count = filter === 'All'
                  ? galleryItems.length
                  : galleryItems.filter(item => item.filterTag === filter || item.category === filter).length;

                return (
                  <button
                    key={filter}
                    className={`gallery-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter} <span className="filter-count">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="gallery-grid-section section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="gallery-masonry-grid">
            {filteredItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={idx}
                onSelect={handleOpenLightbox}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-media-found">
              <p>No media files matching the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="gallery-cta-banner">
        <div className="container">
          <div className="gallery-cta-box">
            <div>
              <h3>Need Custom Forged Steel Components or Factory Audit?</h3>
              <p>Contact our engineering team to request sample material test certificates, plant visit arrangements, or detailed technical RFQ quotes.</p>
            </div>
            <button className="btn btn-primary btn-lg" onClick={() => onEnquireClick('Gallery Enquiry')}>
              Request RFQ / Quote <Send size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal View */}
      {currentItem && (
        <div className="lightbox-backdrop" onClick={handleCloseLightbox}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={handleCloseLightbox} aria-label="Close Lightbox">
              <X size={24} />
            </button>

            <button className="lightbox-nav-btn lightbox-prev" onClick={handlePrevLightbox} aria-label="Previous Media">
              <ChevronLeft size={32} />
            </button>

            <button className="lightbox-nav-btn lightbox-next" onClick={handleNextLightbox} aria-label="Next Media">
              <ChevronRight size={32} />
            </button>

            <div className="lightbox-media-container">
              {currentItem.type === 'video' ? (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  className="lightbox-video"
                />
              ) : (
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="lightbox-image"
                />
              )}
            </div>

            <div className="lightbox-info-bar">
              <div className="lightbox-info-text">
                <div className="lightbox-meta-top">
                  <span className="gallery-category-pill">{currentItem.category}</span>
                  <span className="lightbox-counter">{lightboxIndex + 1} of {filteredItems.length}</span>
                </div>
                <h3>{currentItem.title}</h3>
                <p>{currentItem.description}</p>
              </div>
              <div className="lightbox-action-btn">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleCloseLightbox();
                    onEnquireClick(currentItem.title);
                  }}
                >
                  Inquire For This Product <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
