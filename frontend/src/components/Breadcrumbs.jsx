import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      style={{
        backgroundColor: 'var(--bg-dark-900)',
        borderBottom: '1px solid var(--border-color)',
        padding: '0.75rem 0',
        fontSize: '0.85rem'
      }}
    >
      <div className="container">
        <ol 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '0.5rem', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0 
          }}
        >
          <li style={{ display: 'inline-flex', alignItems: 'center' }}>
            <a 
              href="/" 
              style={{ 
                color: 'var(--text-muted)', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.25rem', 
                textDecoration: 'none' 
              }}
            >
              <Home size={14} /> Home
            </a>
          </li>
          
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <ChevronRight size={14} style={{ color: 'var(--text-muted)' }} />
                {isLast ? (
                  <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <a 
                    href={item.url} 
                    style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
