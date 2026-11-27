// Pure helpers for the shared 2-step RFQ form (RfqForm.jsx). No React, so node --test can run them.

export const PRODUCTS = ['EP tube', 'EP pipe', 'EP fittings', 'Other'];
export const GRADES = ['304/304L', '316/316L', '904L', 'Not sure'];
export const FINISHES = ['SF1', 'SF4', 'Not sure'];

export const EMPTY_RFQ = {
  product: '', otherProduct: '', grade: '', finish: '', quantity: '', city: '', details: '',
  name: '', company: '', email: '', phone: '',
  website: '' // honeypot: hidden from people, bots fill it
};

// Start step 1 from the page's product label, e.g. "SS 316L Electropolished Pipe" or "SS 304 Round Bar"
// Button labels that name a place on the site, not a product ("About Page Hero Quote", "RFQ for Pune")
const NOT_PRODUCT = /quote|rfq|request|contact|inquiry|enquiry|page\b|general|download|catalogue|calc:/i;

export function guessFromLabel(label = '') {
  const s = String(label);
  const out = {};
  const ep = /electropolish|\bEP\b|BPE|sanitary|hygienic/i.test(s);
  if (!ep && NOT_PRODUCT.test(s)) { /* leave product for the visitor */ }
  else if (/fitting|elbow|\btee\b|ferrule|reducer|clamp|valve|cap\b|bend/i.test(s)) out.product = 'EP fittings';
  else if (ep && /tub/i.test(s)) out.product = 'EP tube';
  else if (ep) out.product = 'EP pipe';
  else if (s.trim()) { out.product = 'Other'; out.otherProduct = s.trim(); }
  if (/904L/i.test(s)) out.grade = '904L';
  else if (/316/.test(s)) out.grade = '316/316L';
  else if (/304/.test(s)) out.grade = '304/304L';
  if (/SF4/i.test(s)) out.finish = 'SF4';
  else if (/SF1/i.test(s)) out.finish = 'SF1';
  return out;
}

export function step1Errors(d) {
  const e = {};
  if (!d.product) e.product = 'Pick a product';
  else if (d.product === 'Other' && !d.otherProduct.trim()) e.otherProduct = 'Which product do you need?';
  if (!d.quantity.trim()) e.quantity = 'Quantity is required';
  if (!d.city.trim()) e.city = 'Delivery city is required';
  return e;
}

export function step2Errors(d) {
  const e = {};
  if (!d.name.trim()) e.name = 'Name is required';
  if (!d.company.trim()) e.company = 'Company is required';
  if (!d.email.trim()) e.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(d.email)) e.email = 'Valid email is required';
  if (!d.phone.trim()) e.phone = 'Phone is required';
  // Count digits, so "+91 022 2345 6789" or "(022) 2345-6789" are accepted
  else if (!/^\+?[\d\s().-]+$/.test(d.phone.trim()) || !/^\d{8,15}$/.test(d.phone.replace(/\D/g, ''))) e.phone = 'Valid phone number is required';
  return e;
}

export const isBot = (d) => Boolean(d.website && d.website.trim());

// The Worker takes one free-text message, so step 1 travels inside it (no backend change)
export function buildRfqMessage(d, page = '', source = '') {
  const product = d.product === 'Other' ? d.otherProduct.trim() : d.product;
  return [
    'RFQ (gift card + 30-minute quote test)',
    `Product: ${product}`,
    d.grade && `Grade: ${d.grade}`,
    d.finish && `Finish: ${d.finish}`,
    `Quantity: ${d.quantity.trim()}`,
    `Delivery city: ${d.city.trim()}`,
    d.details.trim() && `Size & details: ${d.details.trim()}`,
    page && `Page: ${page}`,
    source && `Clicked: ${source}`
  ].filter(Boolean).join('\n');
}

export function toPayload(d, page = '', source = '') {
  return {
    name: d.name.trim(),
    email: d.email.trim(),
    phone: d.phone.trim(),
    company: d.company.trim(),
    location: d.city.trim(),
    message: buildRfqMessage(d, page, source)
  };
}
