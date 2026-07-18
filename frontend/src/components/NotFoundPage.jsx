import React, { useState } from 'react';
import { Home, Search, FileText, ArrowRight, CornerDownRight } from 'lucide-react';
import { handleLinkClick } from '../utils/router';
import categoriesData from '../data/categories.json';

export default function NotFoundPage() {
  const [query, setQuery] = useState('');

  // Top 6 Categories from new inventory
  const topCategories = categoriesData.slice(0, 6);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.history.pushState(null, '', `/products?q=${encodeURIComponent(query)}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div 
      className="not-found-wrapper" 
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem 2rem',
        background: 'radial-gradient(circle at center, var(--bg-dark-800) 0%, var(--bg-dark-900) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Glow */}
      <div 
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.04) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div 
        className="glass-card"
        style={{
          background: 'rgba(26, 30, 39, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '3.5rem 2.5rem',
          maxWidth: '680px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <span 
            style={{
              fontSize: '5.5rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fff 30%, var(--primary-yellow) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
              lineHeight: 1,
              marginBottom: '0.5rem',
              letterSpacing: '-0.05em'
            }}
          >
            404
          </span>

          <h1 
            style={{ 
              fontSize: '1.8rem', 
              fontWeight: '800', 
              marginBottom: '1rem',
              textTransform: 'uppercase',
              color: 'var(--text-primary)'
            }}
          >
            Page Not Found
          </h1>

          <p 
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.95rem', 
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}
          >
            The page you are looking for might have been moved or is temporarily unavailable. Let us help you locate the right industrial steel products.
          </p>
        </div>

        {/* 1. Search Box */}
        <form onSubmit={handleSearchSubmit} style={{ position: 'relative', maxWidth: '500px', margin: '0 auto 2.5rem auto' }}>
          <input 
            type="text" 
            placeholder="Search our product catalog..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.9rem 3.5rem 0.9rem 1.25rem',
              backgroundColor: 'var(--bg-dark-900)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '0.95rem'
            }}
          />
          <button 
            type="submit" 
            style={{
              position: 'absolute',
              right: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--primary-yellow)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </form>

        {/* 2. Top Categories Links */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', fontWeight: '700' }}>
            Browse Top Product Categories
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {topCategories.map((c) => (
              <a
                key={c['Category Slug']}
                href={`/${c['Category Slug']}`}
                onClick={(e) => handleLinkClick(e, `/${c['Category Slug']}`)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  padding: '0.6rem 0.8rem',
                  backgroundColor: 'var(--bg-dark-900)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <CornerDownRight size={14} style={{ color: 'var(--primary-yellow)' }} />
                {c['Parent Category']}
              </a>
            ))}
          </div>
        </div>

        {/* 3. Action Buttons & Quote CTA */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
          <a 
            href="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className="btn btn-outline"
            style={{ padding: '0.8rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Home size={16} /> Back to Home
          </a>
          
          <a 
            href="/contact-us"
            onClick={(e) => handleLinkClick(e, '/contact-us')}
            className="btn btn-primary"
            style={{ padding: '0.8rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Request Quotation <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}
