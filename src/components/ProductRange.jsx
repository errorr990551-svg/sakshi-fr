import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import categoriesData from '../data/categories.json';
import { handleLinkClick } from '../utils/router';

export default function ProductRange() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % categoriesData.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + categoriesData.length) % categoriesData.length);
  };

  const getVisibleCategories = () => {
    if (categoriesData.length <= 3) {
      return categoriesData;
    }
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const idx = (startIndex + i) % categoriesData.length;
      visible.push(categoriesData[idx]);
    }
    return visible;
  };

  const visibleCategories = getVisibleCategories();
  const showArrows = categoriesData.length > 3;

  const getCategoryImage = (catName) => {
    const name = catName.toLowerCase();
    if (name.includes('flange') || name.includes('fitting')) {
      return '/flanges_pipes.png';
    }
    return '/molten_furnace.png';
  };

  return (
    <section id="products" className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Our Industrial <span>Product Range</span></h2>
          <p>
            Sakshi Forge manufactures a complete suite of carbon steel, alloy steel, and stainless steel products across 17 certified categories, serving critical global energy and infrastructure markets.
          </p>
          <div className="accent-line"></div>
        </div>

        <div className="products-carousel-container">
          {showArrows && (
            <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide} aria-label="Previous products">
              <ChevronLeft size={24} />
            </button>
          )}

          <div 
            className="products-grid carousel-active"
            style={{
              gridTemplateColumns: categoriesData.length === 1 
                ? '1fr' 
                : categoriesData.length === 2 
                ? '1fr 1fr' 
                : 'repeat(3, 1fr)',
              maxWidth: categoriesData.length === 1 
                ? '380px' 
                : categoriesData.length === 2 
                ? '780px' 
                : '100%',
              margin: '0 auto',
              width: '100%'
            }}
          >
            {visibleCategories.map((c) => (
              <div className="product-card" key={c['Category Slug']}>
                <div className="product-img-wrap">
                  <img src={getCategoryImage(c['Parent Category'])} alt={c['Parent Category']} />
                </div>
                <div className="product-info">
                  <div>
                    <h3>{c['Parent Category']}</h3>
                    <p style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {c['Category Meta Description']}
                    </p>
                  </div>
                  <a 
                    href={`/${c['Category Slug']}`} 
                    onClick={(e) => handleLinkClick(e, `/${c['Category Slug']}`)}
                    className="btn btn-outline" 
                    style={{ width: '100%', padding: '0.65rem 0', display: 'flex', justifyContent: 'center' }}
                  >
                    Explore Products <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {showArrows && (
            <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide} aria-label="Next products">
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

