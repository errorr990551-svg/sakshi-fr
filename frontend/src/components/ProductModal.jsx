import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ProductModal({ product, onClose, onEnquireTrigger }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-wrap" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className="modal-header-wrap">
          <h2><span>{product.name}</span> Details</h2>
          <p>Technical Specifications & Manufacturing Capabilities</p>
        </div>

        <div className="modal-body-wrap">
          <div className="product-details-wrap">
            <img src={product.image} alt={product.name} className="details-hero-img" />
            
            <div className="details-content">
              <p>{product.longDesc}</p>
              
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-yellow)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                Technical Parameters
              </h3>
              
              <table className="details-spec-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Specification Details</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((s, idx) => (
                    <tr key={idx}>
                      <td>{s.key}</td>
                      <td>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
              <button onClick={onClose} className="btn btn-secondary">
                Back to Products
              </button>
              <button 
                onClick={() => {
                  onEnquireTrigger(product.name);
                }} 
                className="btn btn-primary"
              >
                Send Enquiry <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
