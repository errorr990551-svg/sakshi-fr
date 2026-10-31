import React from 'react';
import { MapPin, Star, ExternalLink, PenLine } from 'lucide-react';
import { GBP } from '../data/business.js';

// Our Google Business Profile: Google's own map card shows the live star rating and review
// count, so nothing on this page has to be typed in by hand or goes out of date.
// Google shows that card only when the map is at least ~300px tall and ~400px wide (desktop/tablet);
// on narrow phones it shows the map alone, so the review buttons above stay visible.
export default function GoogleReviews({ title = 'Reviews on Google', intro, showWrite = true, mapHeight = 380 }) {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', margin: '0 0 0.5rem', fontSize: '1.1rem' }}>
        <Star size={20} /> {title}
      </h3>
      <p style={{ margin: '0 0 1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
        {intro || 'See our star rating and read what customers say about Sakshi Forge on our Google Business Profile.'}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <a href={GBP.reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
          style={{ flex: '1 1 200px', justifyContent: 'center', gap: '0.5rem', padding: '0.8rem 1.2rem', fontWeight: '700', fontSize: '0.9rem' }}>
          <Star size={16} /> Read our Google reviews <ExternalLink size={14} />
        </a>
        {showWrite && (
          <a href={GBP.writeReviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline"
            style={{ flex: '1 1 200px', justifyContent: 'center', gap: '0.5rem', padding: '0.8rem 1.2rem', fontWeight: '700', fontSize: '0.9rem' }}>
            <PenLine size={16} /> Write a review <ExternalLink size={14} />
          </a>
        )}
        <a href={GBP.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline"
          style={{ flex: '1 1 200px', justifyContent: 'center', gap: '0.5rem', padding: '0.8rem 1.2rem', fontWeight: '700', fontSize: '0.9rem' }}>
          <MapPin size={16} /> Open in Google Maps <ExternalLink size={14} />
        </a>
      </div>
      <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', height: `${mapHeight}px`, width: '100%' }}>
        <iframe
          title="Sakshi Forge on Google Maps, with Google rating and reviews"
          src={GBP.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
