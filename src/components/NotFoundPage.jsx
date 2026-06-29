import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function NotFoundPage() {
  return (
    <div 
      className="not-found-wrapper" 
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'radial-gradient(circle at center, var(--bg-dark-800) 0%, var(--bg-dark-900) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Glow */}
      <div 
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.05) 0%, transparent 70%)',
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
          background: 'rgba(26, 30, 39, 0.65)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '4rem 3rem',
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          zIndex: 2
        }}
      >
        <span 
          style={{
            fontSize: '6.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #fff 30%, var(--primary-yellow) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'block',
            lineHeight: 1,
            marginBottom: '1rem',
            letterSpacing: '-0.05em'
          }}
        >
          404
        </span>

        <h1 
          style={{ 
            fontSize: '1.8rem', 
            fontWeight: '700', 
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
            fontSize: '1rem', 
            lineHeight: '1.6',
            marginBottom: '2.5rem'
          }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let us get you back on track.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a 
            href="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className="btn btn-primary"
            style={{ padding: '0.8rem 1.6rem' }}
          >
            <Home size={18} /> Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
