import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Layers, Tag, Compass, FileText } from 'lucide-react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import { handleLinkClick } from '../utils/router';

export default function ProductsPage({ onEnquireClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Compute product count per category dynamically
  const categoryCounts = useMemo(() => {
    const counts = { all: productsData.length };
    productsData.forEach((p) => {
      const cat = p.Category || 'Other';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered products list based on category tab & search query
  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchesCategory =
        activeCategory === 'all' ||
        p.Category?.toLowerCase().trim() === activeCategory?.toLowerCase().trim();

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        p['Product Name']?.toLowerCase().includes(query) ||
        p['Category']?.toLowerCase().includes(query) ||
        p['Key Specs']?.toLowerCase().includes(query) ||
        p['Product Description']?.toLowerCase().includes(query) ||
        p['URL Slug']?.toLowerCase().includes(query) ||
        p['Standards']?.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="products-catalog-page" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem' }}>
      
      {/* 1. Page Header Hero Section */}
      <section 
        style={{ 
          background: 'linear-gradient(rgba(11, 12, 16, 0.85), rgba(18, 21, 28, 0.98)), url("/hero_forge.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '8.5rem 0 4rem 0',
          borderBottom: '1px solid var(--border-color)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span style={{ 
            backgroundColor: 'var(--primary-yellow-glow)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid var(--primary-yellow-solid-glow)',
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: '700',
            padding: '0.35rem 0.85rem',
            borderRadius: '50px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Products Catalog
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Our Complete <span>Industrial Range</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Browse through our extensive selection of forged flanges, pipes, tubes, fittings, coils, round bars, and sheets. Filter by category or search specifications instantly.
          </p>
        </div>
      </section>

      {/* 2. Controls Section (Search & Filter) */}
      <section style={{ padding: '3rem 0 2rem 0', backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          
          {/* Search Box */}
          <div style={{ maxWidth: '600px', margin: '0 auto 3rem auto', position: 'relative' }}>
            <Search 
              size={20} 
              style={{ 
                position: 'absolute', 
                left: '1.25rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: 'var(--text-muted)' 
              }} 
            />
            <input 
              type="text"
              placeholder="Search by product name, standards, grades, or specifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1.1rem 1.25rem 1.1rem 3.25rem',
                backgroundColor: 'var(--bg-dark-800)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'var(--transition-smooth)'
              }}
              className="search-input-box"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs / Filters */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
              Filter by Category
            </h3>
            
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem', 
                paddingBottom: '1rem', 
                borderBottom: '1px solid var(--border-color)' 
              }}
            >
              {/* 'All' Tab */}
              <button
                onClick={() => setActiveCategory('all')}
                style={{
                  backgroundColor: activeCategory === 'all' ? 'var(--primary-yellow)' : 'var(--bg-dark-800)',
                  color: activeCategory === 'all' ? 'var(--bg-dark-900)' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: activeCategory === 'all' ? 'var(--primary-yellow)' : 'var(--border-color)',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'var(--transition-fast)'
                }}
              >
                All Products 
                <span style={{ 
                  backgroundColor: activeCategory === 'all' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.06)', 
                  padding: '0.1rem 0.4rem', 
                  borderRadius: '10px',
                  fontSize: '0.75rem' 
                }}>
                  {categoryCounts.all}
                </span>
              </button>

              {/* Dynamic categories */}
              {categoriesData.map((cat) => {
                const catName = cat['Parent Category'];
                const count = categoryCounts[catName] || 0;
                
                return (
                  <button
                    key={cat['Category Slug']}
                    onClick={() => setActiveCategory(catName)}
                    style={{
                      backgroundColor: activeCategory === catName ? 'var(--primary-yellow)' : 'var(--bg-dark-800)',
                      color: activeCategory === catName ? 'var(--bg-dark-900)' : 'var(--text-secondary)',
                      border: '1px solid',
                      borderColor: activeCategory === catName ? 'var(--primary-yellow)' : 'var(--border-color)',
                      padding: '0.5rem 1.1rem',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    {catName}
                    <span style={{ 
                      backgroundColor: activeCategory === catName ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.06)', 
                      padding: '0.1rem 0.4rem', 
                      borderRadius: '10px',
                      fontSize: '0.75rem' 
                    }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Showing {filteredProducts.length} of {productsData.length} products
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0', border: '1px dashed var(--border-color)', borderRadius: '12px', color: 'var(--text-secondary)' }}>
              <Layers size={40} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
              <h3>No products found matching your criteria.</h3>
              <p style={{ marginTop: '0.5rem' }}>Try refining your search query or choosing another category.</p>
            </div>
          ) : (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                gap: '2rem'
              }}
            >
              {filteredProducts.map((p) => {
                // Determine description to show
                const desc = p['Product Description'] || p['Meta Description (<=160 chars)'] || '';
                
                return (
                  <div 
                    key={p['URL Slug']}
                    style={{
                      backgroundColor: 'var(--bg-dark-800)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'var(--transition-smooth)',
                      position: 'relative'
                    }}
                    className="catalog-product-card"
                  >
                    <div style={{ padding: '2rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                        <div>
                          <span style={{ 
                            backgroundColor: 'var(--primary-yellow-glow)', 
                            color: 'var(--primary-yellow)', 
                            fontSize: '0.7rem', 
                            fontWeight: '700', 
                            padding: '0.2rem 0.5rem', 
                            borderRadius: '4px',
                            textTransform: 'uppercase',
                            display: 'inline-block'
                          }}>
                            {p.Category}
                          </span>
                        </div>
                        
                        {p.Standards && (
                          <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--text-muted)' }}>
                            {p.Standards}
                          </div>
                        )}
                      </div>

                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                        {p['Product Name']}
                      </h3>

                      <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '0.85rem', 
                        lineHeight: '1.5', 
                        marginBottom: '1.5rem',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        height: '4.5em'
                      }}>
                        {desc}
                      </p>

                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                        <strong style={{ color: 'var(--primary-yellow)', fontSize: '0.75rem', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                          Specifications:
                        </strong>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4', display: 'block' }}>
                          {p['Key Specs']}
                        </span>
                      </div>
                    </div>

                    <div style={{ padding: '0 2rem 2rem 2rem' }}>
                      <a 
                        href={`/${p['URL Slug']}`}
                        onClick={(e) => handleLinkClick(e, `/${p['URL Slug']}`)}
                        className="btn btn-outline"
                        style={{ width: '100%', padding: '0.65rem 0', display: 'flex', justifyContent: 'center', fontSize: '0.85rem' }}
                      >
                        View Details <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
