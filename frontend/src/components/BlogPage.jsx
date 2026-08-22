import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, FileText, Sparkles, Filter } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { blogPosts } from '../data/blogData';
import { handleLinkClick } from '../utils/router';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract categories
  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const gridPosts = filteredPosts;

  const breadcrumbItems = [
    { name: 'Steel Knowledge Hub', url: '/blog' }
  ];

  return (
    <div className="blog-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem' }}>
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Header */}
      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.85), rgba(18, 21, 28, 0.95)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 0 3.5rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ 
            backgroundColor: 'var(--primary-yellow-glow)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid var(--primary-yellow-solid-glow)',
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: '700',
            padding: '0.35rem 0.9rem',
            borderRadius: '50px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Technical Knowledge Hub & Metallurgical Guides
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Steel <span>Knowledge Hub & Guides</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 2rem auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Deep technical briefings, ASME dimension matrices, surface electropolishing standards, and metallurgical grade selection guides curated by Sakshi Forge engineers.
          </p>

          {/* Search Box */}
          <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search articles by standard, grade, or keyword (e.g. B16.5, 316L, Electropolish)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.9rem 1rem 0.9rem 3rem',
                backgroundColor: 'var(--bg-dark-800)',
                border: '1px solid var(--border-color)',
                borderRadius: '50px',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          
          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: isActive ? 'var(--primary-yellow)' : 'var(--bg-dark-800)',
                    color: isActive ? '#000' : 'var(--text-secondary)',
                    border: isActive ? '1px solid var(--primary-yellow)' : '1px solid var(--border-color)',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Featured Article Card (Shown when on "All" and no search query) */}
          {selectedCategory === 'All' && searchQuery === '' && featuredPost && (
            <div 
              onClick={(e) => handleLinkClick(e, `/blog/${featuredPost.slug}`)}
              style={{
                backgroundColor: 'var(--bg-dark-800)',
                border: '1px solid var(--primary-yellow-solid-glow)',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '3.5rem',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                transition: 'transform 0.25 ease, border-color 0.25s ease'
              }}
              className="featured-post-card"
            >
              <div style={{ height: '100%', minHeight: '260px', overflow: 'hidden', backgroundColor: '#12151c' }}>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ backgroundColor: 'var(--primary-yellow-glow)', color: 'var(--primary-yellow)', border: '1px solid var(--primary-yellow-solid-glow)', fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '50px', textTransform: 'uppercase' }}>
                    Featured Guide
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{featuredPost.date}</span>
                </div>
                
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', lineHeight: '1.3' }}>
                  {featuredPost.title}
                </h2>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {featuredPost.desc}
                </p>

                <div style={{ paddingTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.95rem' }}>
                  Read Featured Article <ArrowRight size={16} />
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)' }}>
              {selectedCategory === 'All' ? 'All Technical Articles' : `${selectedCategory} Articles`} ({gridPosts.length})
            </h3>
          </div>

          {gridPosts.length === 0 ? (
            <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <FileText size={40} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
              <h4>No Articles Found</h4>
              <p style={{ margin: '0.5rem 0 1.5rem 0' }}>No technical articles match your current search filter "{searchQuery}".</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                style={{ backgroundColor: 'var(--primary-yellow)', color: '#000', border: 'none', padding: '0.6rem 1.25rem', borderRadius: '4px', fontWeight: '700', cursor: 'pointer' }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {gridPosts.map((post) => (
                <div 
                  key={post.slug} 
                  onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                  className="blog-card"
                  style={{ 
                    backgroundColor: 'var(--bg-dark-800)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '10px', 
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <div>
                    {post.image && (
                      <div style={{ height: '180px', overflow: 'hidden', backgroundColor: '#12151c', borderBottom: '1px solid var(--border-color)' }}>
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                          className="card-img"
                        />
                      </div>
                    )}
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                        <span style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', color: 'var(--primary-yellow)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.75rem' }}>
                          {post.category}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Calendar size={12} /> {post.date}
                        </span>
                      </div>
                      
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                        {post.title}
                      </h3>
                      
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {post.desc}
                      </p>
                    </div>
                  </div>

                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <a 
                      href={`/blog/${post.slug}`} 
                      onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)} 
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-yellow)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '700' }}
                    >
                      Read Article <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <style>{`
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-yellow) !important;
          box-shadow: 0 8px 25px rgba(245, 166, 35, 0.15);
        }
        .blog-card:hover .card-img {
          transform: scale(1.05);
        }
        .featured-post-card:hover {
          border-color: var(--primary-yellow) !important;
          transform: translateY(-2px);
        }
      `}</style>

    </div>
  );
}
