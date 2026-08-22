import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, CheckCircle2, Share2, HelpCircle, ChevronDown, ChevronUp, FileText, Send } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { getRelatedPosts } from '../data/blogData';
import { handleLinkClick } from '../utils/router';

export default function BlogPostPage({ post, onEnquireClick }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center', color: 'var(--text-primary)' }}>
        <h2>Article Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The requested blog post could not be located in our database.</p>
        <a 
          href="/blog" 
          onClick={(e) => handleLinkClick(e, '/blog')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--primary-yellow)', color: '#000', fontWeight: '700', borderRadius: '4px', textDecoration: 'none' }}
        >
          <ArrowLeft size={16} /> Return to Knowledge Hub
        </a>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const breadcrumbItems = [
    { name: 'Steel Knowledge Hub', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  return (
    <div className="blog-post-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Article Header Hero */}
      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.88), rgba(18, 21, 28, 0.98)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 0 3rem 0',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <span style={{ 
              backgroundColor: 'var(--primary-yellow-glow)', 
              color: 'var(--primary-yellow)', 
              border: '1px solid var(--primary-yellow-solid-glow)',
              fontSize: '0.8rem',
              fontWeight: '700',
              padding: '0.35rem 0.9rem',
              borderRadius: '50px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {post.category}
            </span>

            <button 
              onClick={handleShare} 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                padding: '0.4rem 0.9rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Share2 size={14} /> {copied ? 'Link Copied!' : 'Share Article'}
            </button>
          </div>

          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', lineHeight: '1.25', marginBottom: '1.25rem', color: '#fff' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={15} style={{ color: 'var(--primary-yellow)' }} />
              <strong>{post.author}</strong> ({post.authorRole})
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={15} style={{ color: 'var(--primary-yellow)' }} />
              {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={15} style={{ color: 'var(--primary-yellow)' }} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Main Post Container */}
      <section style={{ paddingTop: '3rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Back to hub link */}
          <div style={{ marginBottom: '2rem' }}>
            <a 
              href="/blog" 
              onClick={(e) => handleLinkClick(e, '/blog')}
              style={{ color: 'var(--primary-yellow)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '600' }}
            >
              <ArrowLeft size={16} /> Back to Steel Knowledge Hub
            </a>
          </div>

          {/* Featured Image if available */}
          {post.image && (
            <div style={{ 
              borderRadius: '12px', 
              overflow: 'hidden', 
              marginBottom: '2.5rem', 
              border: '1px solid var(--border-color)',
              maxHeight: '400px',
              backgroundColor: 'var(--bg-dark-800)'
            }}>
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>
          )}

          {/* Key Takeaways Card */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div style={{ 
              backgroundColor: 'var(--bg-dark-800)', 
              border: '1px solid var(--primary-yellow-solid-glow)',
              borderLeft: '4px solid var(--primary-yellow)',
              borderRadius: '8px', 
              padding: '1.75rem 2rem', 
              marginBottom: '3rem' 
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-yellow)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Executive Key Takeaways
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {post.keyTakeaways.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Formatted Body */}
          <article 
            className="blog-content-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ 
              lineHeight: '1.8', 
              fontSize: '1.05rem', 
              color: 'var(--text-secondary)'
            }}
          />

          {/* Post Tags */}
          {post.tags && post.tags.length > 0 && (
            <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600', marginRight: '0.5rem' }}>Tags:</span>
              {post.tags.map((t, idx) => (
                <span key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Technical FAQs Accordion */}
          {post.faqs && post.faqs.length > 0 && (
            <div style={{ marginTop: '3.5rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <HelpCircle size={24} style={{ color: 'var(--primary-yellow)' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                  Frequently Asked Technical Questions
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {post.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      style={{ 
                        border: '1px solid var(--border-color)', 
                        borderRadius: '6px', 
                        overflow: 'hidden',
                        backgroundColor: 'var(--bg-dark-900)'
                      }}
                    >
                      <button 
                        onClick={() => toggleFaq(idx)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '1.25rem',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: 'var(--text-primary)',
                          fontWeight: '700',
                          fontSize: '1rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem'
                        }}
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp size={18} style={{ color: 'var(--primary-yellow)' }} /> : <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />}
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Engineering Assistance CTA Banner */}
          <div style={{ 
            marginTop: '4rem',
            background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.15) 0%, rgba(18, 21, 28, 0.95) 100%)',
            border: '1px solid var(--primary-yellow)',
            borderRadius: '12px',
            padding: '2.5rem 2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Need Custom Forgings or Electropolished Piping Supplies?
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 1.5rem auto', fontSize: '1rem', lineHeight: '1.6' }}>
              Consult with Sakshi Forge QA metallurgists for ASME pressure calculations, MTC EN 10204 3.1 verification, or custom dimensional machining.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onEnquireClick ? onEnquireClick(post.title) : null}
                style={{
                  backgroundColor: 'var(--primary-yellow)',
                  color: '#000',
                  border: 'none',
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px var(--primary-yellow-glow)'
                }}
              >
                <Send size={16} /> Request Engineering RFQ
              </button>
              <a 
                href="/catalogue"
                onClick={(e) => handleLinkClick(e, '/catalogue')}
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <FileText size={16} /> Download Specs Catalogue
              </a>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                Related Technical Briefings
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {relatedPosts.map((rel) => (
                  <div 
                    key={rel.slug}
                    onClick={(e) => handleLinkClick(e, `/blog/${rel.slug}`)}
                    style={{
                      backgroundColor: 'var(--bg-dark-800)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.2s ease, border-color 0.2s ease'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary-yellow)', textTransform: 'uppercase' }}>
                        {rel.category}
                      </span>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                        {rel.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {rel.desc}
                      </p>
                    </div>
                    <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '600' }}>
                      Read Briefing <ArrowRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Global CSS for article styling */}
      <style>{`
        .blog-content-body h2 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .blog-content-body h3 {
          color: var(--primary-yellow);
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .blog-content-body p {
          margin-bottom: 1.25rem;
        }
        .blog-content-body ul, .blog-content-body ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .blog-content-body li {
          margin-bottom: 0.5rem;
        }
        .table-responsive {
          overflow-x: auto;
          margin: 2rem 0;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }
        .tech-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
          background-color: var(--bg-dark-800);
        }
        .tech-table th {
          background-color: #161b22;
          color: var(--primary-yellow);
          padding: 0.9rem 1rem;
          font-weight: 700;
          border-bottom: 2px solid var(--border-color);
          white-space: nowrap;
        }
        .tech-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-secondary);
        }
        .tech-table tr:last-child td {
          border-bottom: none;
        }
        .tech-table tr:hover td {
          background-color: rgba(255, 255, 255, 0.02);
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
}
