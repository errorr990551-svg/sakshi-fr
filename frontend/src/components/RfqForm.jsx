import { useState, useId } from 'react';
import { CheckCircle2, Loader2, AlertCircle, Phone, Mail, MapPin, Gift, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { trackEvent, trackLeadSubmission } from '../utils/analytics';
import { ADDRESS_LINE } from '../data/business.js';
import { PRODUCTS, GRADES, FINISHES, EMPTY_RFQ, guessFromLabel, step1Errors, step2Errors, isBot, toPayload } from '../utils/rfq.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://sakshi-fr.errorr990551.workers.dev';
const RFQ_VERSION = 'giftcard_30min';

// One RFQ form for the pop-up and every on-page form. prefill: { name, phone, message } typed elsewhere (calculator, old cards)
export default function RfqForm({ formType, product = '', prefill = null, onDone, onUnlockContact = () => {} }) {
  const uid = useId();
  const [data, setData] = useState(() => ({
    ...EMPTY_RFQ,
    ...guessFromLabel(product),
    details: prefill?.message || '',
    name: prefill?.name || '',
    phone: prefill?.phone || ''
  }));
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [started, setStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const page = typeof window === 'undefined' ? '' : window.location.pathname;
  const id = (name) => `${uid}-${name}`;

  // Counted on first touch, not on render: inline forms render on every page view
  const markStarted = () => {
    if (started) return;
    setStarted(true);
    trackEvent('rfq_start', { form_name: formType, page, rfq_version: RFQ_VERSION });
  };

  const set = (name, value) => {
    markStarted();
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };
  const onChange = (e) => set(e.target.name, e.target.value);

  const next = (e) => {
    e.preventDefault();
    const errs = step1Errors(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    trackEvent('rfq_step1_done', { form_name: formType, page, product_interest: data.product, rfq_version: RFQ_VERSION });
    setStep(2);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError('');
    const errs = step2Errors(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // Bot filled the hidden field: show success, send nothing
    if (isBot(data)) { setIsSubmitted(true); return; }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toPayload(data, page, product))
      });
      const res = await response.json();
      if (response.ok && res.success) {
        setIsSubmitted(true);
        // The RFQ was sent: a blocked storage must not turn that into an error message
        try { localStorage.setItem('contactDetailsUnlocked', 'true'); } catch { /* storage blocked */ }
        trackLeadSubmission({
          formType,
          product: data.product === 'Other' ? data.otherProduct : data.product,
          company: data.company,
          location: data.city,
          rfqVersion: RFQ_VERSION
        });
        onUnlockContact();
      } else {
        setSubmitError(res?.message || 'Failed to send your RFQ. Please try again.');
      }
    } catch (err) {
      console.error('API Error submitting RFQ form:', err);
      setSubmitError('Unable to connect to server. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="success-banner rfq-success" role="status">
        <div className="success-icon-circle"><CheckCircle2 size={40} style={{ color: 'var(--primary-yellow)' }} /></div>
        <h3>Got it, {data.name.trim()}.</h3>
        <p>Your quote is on its way within 30 minutes.</p>
        <div className="rfq-contact">
          <div><Phone size={16} /> <a href="tel:+918291366340">+91 82913 66340</a></div>
          <div><Mail size={16} /> <a href="mailto:info@steelmanufacturer.in">info@steelmanufacturer.in</a> · <a href="mailto:sakshiforge1737@gmail.com">sakshiforge1737@gmail.com</a></div>
          <div><MapPin size={16} /> <span>{ADDRESS_LINE}</span></div>
        </div>
        {onDone && <button type="button" onClick={onDone} className="btn btn-primary">Done</button>}
      </div>
    );
  }

  const Err = ({ name }) => (errors[name] ? <span className="form-error-msg" id={id(`${name}-err`)}>{errors[name]}</span> : null);
  const input = (name, placeholder, type = 'text', extra = {}) => (
    <div className="form-group">
      <label htmlFor={id(name)} className="sr-only">{placeholder}</label>
      <input id={id(name)} name={name} type={type} placeholder={placeholder} value={data[name]} onChange={onChange}
        onFocus={markStarted} className={`form-input ${errors[name] ? 'error' : ''}`}
        aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? id(`${name}-err`) : undefined} {...extra} />
      <Err name={name} />
    </div>
  );
  const chips = (name, legend, options) => (
    <fieldset className="rfq-chips">
      <legend>{legend}</legend>
      <div>
        {options.map((o) => (
          <button key={o} type="button" className="rfq-chip" aria-pressed={data[name] === o}
            onClick={() => set(name, data[name] === o && name !== 'product' ? '' : o)}>{o}</button>
        ))}
      </div>
      <Err name={name} />
    </fieldset>
  );

  return (
    <div className="rfq">
      <div className="rfq-badges">
        <span className="rfq-badge"><Clock size={14} /> Quote in 30 minutes, 24×7</span>
        <span className="rfq-badge"><Gift size={14} /> ₹500 Amazon gift card when your RFQ becomes an order</span>
      </div>
      <div className="rfq-progress">
        <span>Step {step} of 2 · {step === 1 ? 'What do you need?' : 'Where do we send the quote?'}</span>
        <div className="rfq-bar"><span style={{ width: step === 1 ? '50%' : '100%' }} /></div>
      </div>

      {submitError && (
        <div className="rfq-alert" role="alert"><AlertCircle size={16} /> <span>{submitError}</span></div>
      )}

      {step === 1 ? (
        <form onSubmit={next} className="enquiry-form rfq-form" noValidate>
          {chips('product', 'Product *', PRODUCTS)}
          {data.product === 'Other' && input('otherProduct', 'Which product? *')}
          {chips('grade', 'Grade', GRADES)}
          {chips('finish', 'Finish', FINISHES)}
          <div className="form-group-row">
            {input('quantity', 'Quantity * (m or pcs)')}
            {input('city', 'Delivery city *', 'text', { autoComplete: 'address-level2' })}
          </div>
          <div className="form-group">
            <label htmlFor={id('details')} className="sr-only">Size and details</label>
            <textarea id={id('details')} name="details" rows={2} className="form-input" value={data.details} onChange={onChange}
              onFocus={markStarted} placeholder="Size & details (OD × wall or NPS × schedule)" />
          </div>
          <button type="submit" className="btn btn-primary rfq-submit">Next: where to send the quote <ArrowRight size={16} /></button>
        </form>
      ) : (
        <form onSubmit={submit} className="enquiry-form rfq-form" noValidate>
          <button type="button" className="rfq-back" onClick={() => { setErrors({}); setStep(1); }}><ArrowLeft size={14} /> Back</button>
          <div className="form-group-row">
            {input('name', 'Your name *', 'text', { autoComplete: 'name' })}
            {input('company', 'Company *', 'text', { autoComplete: 'organization' })}
          </div>
          <div className="form-group-row">
            {input('email', 'Work email *', 'email', { autoComplete: 'email' })}
            {input('phone', 'Phone *', 'tel', { autoComplete: 'tel' })}
          </div>
          <div className="rfq-hp" aria-hidden="true">
            <label htmlFor={id('website')}>Website</label>
            <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={onChange} />
          </div>
          <button type="submit" disabled={isSubmitting} className="btn btn-primary rfq-submit">
            {isSubmitting ? <><Loader2 size={18} className="rfq-spin" /> Sending...</> : <>Get my quote in 30 minutes <ArrowRight size={16} /></>}
          </button>
          <p className="rfq-fine">Gift card: paid by email after the order is confirmed. One card per order.</p>
        </form>
      )}
    </div>
  );
}
