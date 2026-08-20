import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize2, Video, Image as ImageIcon, ArrowRight, X, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { galleryItems } from '../data/galleryData';
import { handleLinkClick } from '../utils/router';

function HomeGalleryCard({ item, index, onSelect }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (item.type === 'video' && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Autoplay issue:', err));
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
      className="gallery-item-card"
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
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </div>
              <span className="video-badge-text">
                {isPlaying ? 'PLAYING' : 'HOVER TO PLAY'}
              </span>
            </div>
            <div className="media-type-badge video-badge">
              <Video size={12} /> VIDEO
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
                <Maximize2 size={18} />
              </div>
            </div>
            <div className="media-type-badge image-badge">
              <ImageIcon size={12} /> PHOTO
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function GallerySection({ onEnquireClick }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Show a curated mix of videos and photos on home page (e.g. 6 items)
  const homePreviewItems = [
    galleryItems[0], // Video 1
    galleryItems[1], // Video 2
    galleryItems[2], // Forged steel flange stock
    galleryItems[4], // CNC lathe turning
    galleryItems[8], // Quality testing
    galleryItems[10] // Finished fittings inventory
  ].filter(Boolean);

  const handleCloseLightbox = () => setLightboxIndex(null);

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? homePreviewItems.length - 1 : prev - 1));
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === homePreviewItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = lightboxIndex !== null ? homePreviewItems[lightboxIndex] : null;

  return (
    <section className="home-gallery-section section-padding">
      <div className="container">
        <div className="section-header-wrap">
          <div>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>LIVE FACTORY FOOTAGE & GALLERY</span>
            <h2 className="section-title">
              Inside Our <span>Forging & Manufacturing Facility</span>
            </h2>
            <p className="section-subtitle">
              Hover over video clips to watch our high-precision hydraulic forging, heating furnaces, CNC lathe machinery, and raw material inventory live in action.
            </p>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <a
              href="/gallery"
              className="btn btn-outline"
              onClick={(e) => handleLinkClick(e, '/gallery')}
            >
              View Full Gallery ({galleryItems.length}) <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="gallery-masonry-grid home-gallery-grid">
          {homePreviewItems.map((item, idx) => (
            <HomeGalleryCard
              key={item.id}
              item={item}
              index={idx}
              onSelect={(i) => setLightboxIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="lightbox-backdrop" onClick={handleCloseLightbox}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={handleCloseLightbox}>
              <X size={24} />
            </button>

            <button className="lightbox-nav-btn lightbox-prev" onClick={handlePrevLightbox}>
              <ChevronLeft size={32} />
            </button>

            <button className="lightbox-nav-btn lightbox-next" onClick={handleNextLightbox}>
              <ChevronRight size={32} />
            </button>

            <div className="lightbox-media-container">
              {currentItem.type === 'video' ? (
                <video src={currentItem.src} controls autoPlay className="lightbox-video" />
              ) : (
                <img src={currentItem.src} alt={currentItem.title} className="lightbox-image" />
              )}
            </div>

            <div className="lightbox-info-bar">
              <div className="lightbox-action-btn" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleCloseLightbox();
                    if (onEnquireClick) onEnquireClick(currentItem.title);
                  }}
                >
                  Inquire Now <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
