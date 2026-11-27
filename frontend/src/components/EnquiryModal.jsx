import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import RfqForm from './RfqForm';

export default function EnquiryModal({ isOpen, onClose, preselectedProduct = '', customTitle = '', prefill = null, onUnlockContact = () => {} }) {
  const isContactDetailsForm = customTitle.includes('phone') || customTitle.includes('contact');

  useEffect(() => {
    if (isOpen) trackEvent('rfq_open', { page: window.location.pathname, product_interest: preselectedProduct || 'none', rfq_version: 'giftcard_30min' });
  }, [isOpen, preselectedProduct]);

  // Unmounting on close resets the form, so every open starts from the page's own prefill
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-wrap enquiry-modal-custom" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="modal-header-wrap" style={{ borderBottom: 'none', paddingBottom: '0.25rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', lineHeight: '1.25', color: '#ffffff', textTransform: 'none', marginBottom: '0.35rem' }}>
            {customTitle || <>Get your quote in <span>30 minutes</span></>}
          </h2>
          {isContactDetailsForm && (
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              Send your RFQ and our phone and email show right away.
            </p>
          )}
        </div>

        <div className="modal-body-wrap" style={{ paddingTop: '1rem' }}>
          <RfqForm
            formType={isContactDetailsForm ? 'unlock_contact_modal' : 'quick_enquiry_modal'}
            product={preselectedProduct}
            prefill={prefill}
            onDone={onClose}
            onUnlockContact={onUnlockContact}
          />
        </div>
      </div>
    </div>
  );
}
