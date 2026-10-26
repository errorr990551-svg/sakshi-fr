/**
 * Google Analytics 4 (GA4) & GTM Conversion & Key Event Tracking Utility
 * steelmanufacturer.in - Sakshi Forge
 */

// Helper to safely invoke gtag
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer if missing
  window.dataLayer = window.dataLayer || [];

  // 1. Send via gtag if available
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // 2. Also push event object directly to GTM dataLayer for GTM triggers
  window.dataLayer.push({
    event: eventName,
    ...params,
    timestamp: new Date().toISOString()
  });

  if (import.meta.env.DEV) {
    console.log(`[GA4 Track Event]: ${eventName}`, params);
  }
}

/**
 * Key Event: Lead Submission (Contact Form / RFQ / Quick Enquiry)
 * GA4 Standard Event: generate_lead
 */
export function trackLeadSubmission({ formType = 'general_enquiry', product = '', company = '', location = '' }) {
  trackEvent('generate_lead', {
    event_category: 'Lead Generation',
    event_label: formType,
    form_name: formType,
    product_interest: product || 'General Inquiry',
    company_name: company || 'Not Provided',
    user_location: location || 'Not Provided',
    currency: 'INR',
    value: 5000 // Nominal estimated B2B order value for conversion weighting
  });
}

/**
 * Key Event: Quote Request Button Click / Modal Open
 */
export function trackQuoteRequest({ product = '', source = 'button' }) {
  trackEvent('quote_request', {
    event_category: 'Inquiry',
    event_label: product || 'General Product',
    product_name: product,
    source: source
  });
}

/**
 * Key Event: Direct Phone Call Click
 */
export function trackPhoneClick(phoneNumber, placement = 'unknown') {
  trackEvent('phone_call_click', {
    event_category: 'Contact',
    event_label: phoneNumber,
    contact_method: 'phone',
    phone_number: phoneNumber,
    placement: placement
  });
}

/**
 * Key Event: Direct WhatsApp Chat Click
 */
export function trackWhatsAppClick(placement = 'unknown') {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: 'WhatsApp Chat',
    contact_method: 'whatsapp',
    placement: placement
  });
}

/**
 * Key Event: Direct Email Click
 */
export function trackEmailClick(emailAddress, placement = 'unknown') {
  trackEvent('email_click', {
    event_category: 'Contact',
    event_label: emailAddress,
    contact_method: 'email',
    email_address: emailAddress,
    placement: placement
  });
}

/**
 * Key Event: Catalogue Download
 */
export function trackCatalogueDownload(fileName = 'Sakshi_Forge_Master_Product_Catalogue.pdf') {
  trackEvent('file_download', {
    event_category: 'Downloads',
    event_label: fileName,
    file_name: fileName,
    file_extension: 'pdf'
  });
}

/**
 * Global auto-binder for tel:, mailto:, and whatsapp clicks sitewide
 */
export function initGlobalClickTracking() {
  if (typeof window === 'undefined') return;

  document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (!target) return;

    const href = target.getAttribute('href') || '';

    // Track phone clicks
    if (href.startsWith('tel:')) {
      const phone = href.replace('tel:', '');
      trackPhoneClick(phone, target.dataset.placement || target.className || 'link');
    }

    // Track email clicks
    else if (href.startsWith('mailto:')) {
      const email = href.replace('mailto:', '');
      trackEmailClick(email, target.dataset.placement || target.className || 'link');
    }

    // Track WhatsApp clicks
    else if (href.includes('api.whatsapp.com') || href.includes('wa.me')) {
      trackWhatsAppClick(target.dataset.placement || target.className || 'button');
    }

    // Track catalogue PDF download clicks
    else if (href.endsWith('.pdf')) {
      trackCatalogueDownload(href.split('/').pop());
    }
  });
}
