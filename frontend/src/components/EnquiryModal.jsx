import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, preselectedProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        product: preselectedProduct
      }));
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen, preselectedProduct]);

  if (!isOpen) return null;

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.company.trim()) tempErrors.company = 'Company Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.product) tempErrors.product = 'Please select a product category';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API submit
      console.log('Enquiry Data Submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-wrap" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="modal-header-wrap">
          <h2>Request an <span>Enquiry</span></h2>
          <p>Get bulk rates, dimensional estimates, and custom drawings from our engineering team.</p>
        </div>

        <div className="modal-body-wrap">
          {isSubmitted ? (
            <div className="success-banner">
              <div className="success-icon-circle">
                <CheckCircle2 size={40} />
              </div>
              <h3>Enquiry Sent Successfully!</h3>
              <p>
                Thank you for reaching out, <strong>{formData.name}</strong>. Your RFQ has been logged. Our metallurgy and technical sales engineers are reviewing your specifications and will respond at <strong>{formData.email}</strong> with pricing within 2 hours.
              </p>
              <button 
                onClick={onClose} 
                className="btn btn-primary" 
                style={{ marginTop: '1rem', minWidth: '150px' }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="company">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className={`form-input ${errors.company ? 'error' : ''}`}
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Reliance, L&T, etc."
                  />
                  {errors.company && <span className="form-error-msg">{errors.company}</span>}
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@company.com"
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="product">Product of Interest *</label>
                  <select
                    id="product"
                    name="product"
                    className={`form-input ${errors.product ? 'error' : ''}`}
                    value={formData.product}
                    onChange={handleChange}
                    style={{ appearance: 'none', background: 'var(--bg-dark-900) url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%239ca3af\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e") no-repeat right 1rem center / 1.25rem' }}
                  >
                    <option value="">Select a Product</option>
                    <option value="Industrial Flanges">Industrial Flanges</option>
                    <option value="Steel Plates">Steel Plates</option>
                    <option value="Industrial Pipes">Industrial Pipes</option>
                    <option value="Precision Tubes">Precision Tubes</option>
                    <option value="Round Bars & Shafts">Round Bars & Shafts</option>
                    <option value="Buttweld Fittings">Buttweld Fittings</option>
                    <option value="High-Pressure Forged Fittings">High-Pressure Forged Fittings</option>
                    <option value="Custom Forged Component">Custom Forged Component (Per Drawings)</option>
                  </select>
                  {errors.product && <span className="form-error-msg">{errors.product}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="quantity">Est. Quantity / Tonnes</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-input"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 500 pcs or 10 Tonnes"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message / Custom Dimensions / Alloy Grades</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide any specific standards (ASME, DIN, JIS), schedules, heat treatments, or coating requirements."
                  rows={4}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                Submit RFP Enquiry <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
