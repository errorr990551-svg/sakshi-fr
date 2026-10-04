import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, Award, FileText, CheckCircle2, ChevronDown, 
  ChevronUp, MapPin, Phone, Mail, Clock, Download, ExternalLink, HelpCircle, 
  Layers, Factory, Globe, Truck, Check, AlertTriangle, MessageSquare
} from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function HomePage({ onEnquireClick }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    gradeAndSize: '',
    quantity: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (onEnquireClick) {
      onEnquireClick(`Homepage RFQ: ${formData.gradeAndSize} (${formData.quantity}) - ${formData.company}`);
    }
  };

  const faqs = [
    {
      q: "What is an electropolished pipe?",
      a: "It is a stainless steel pipe finished by an electrochemical process that removes a thin surface layer, including free iron and imperfections. The result is a smoother, more passive surface that resists corrosion and cleans far more easily than a mechanically polished one."
    },
    {
      q: "Which is better for EP pipe, 316L or 304?",
      a: "316L for pharma, biotech and chloride-exposed lines, because it resists pitting better. 304 is a sound, lower-cost option for most dairy, food and beverage lines."
    },
    {
      q: "What surface finish do your pipes have?",
      a: "Internal Ra ≤0.4 µm, electropolished inside and out. We test Ra and supply a surface report."
    },
    {
      q: "What sizes do you make?",
      a: "SS 304 welded pipe from ½\" to 12\", and duplex from ½\" to 8\". SS 316/316L and seamless pipes from ½\" to 12\". Custom sizes and drawings are supported."
    },
    {
      q: "Which standards do you manufacture to?",
      a: "ASTM A269 and A270 for austenitic grades, and ASTM A790 for duplex, with ASME BPE options."
    },
    {
      q: "Do you do the electropolishing yourselves?",
      a: "Yes. Electropolishing is done in-house, so we control surface quality and delivery."
    },
    {
      q: "Which documents come with the order?",
      a: "A 3.1 MTC, mill traceability, QA inspection report, surface report (Ra), and PMI and hydro test certificates."
    },
    {
      q: "Is electropolished pipe suitable for every application?",
      a: "No. Avoid hydrofluoric acid, abrasive slurries, structural use and high-impact wear."
    },
    {
      q: "What is your minimum order quantity?",
      a: "It depends on product and size. We also quote small project lots."
    },
    {
      q: "Can I get a sample test certificate?",
      a: "Yes. Use the button above or send us your request."
    },
    {
      q: "Do you export?",
      a: "Yes, to the USA, UAE, Europe and Southeast Asia."
    },
    {
      q: "How fast can I get a quote?",
      a: "Within 30 minutes during working hours."
    }
  ];

  // Schema Injection for FAQPage, Organization, and LocalBusiness
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const existingScript = document.getElementById('homepage-seo-schema');
    if (existingScript) existingScript.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://steelmanufacturer.in/#organization",
          "name": "Sakshi Forge",
          "url": "https://steelmanufacturer.in/",
          "logo": "https://steelmanufacturer.in/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Balaji Industrial Compound, Taloja MIDC",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "410208",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-8291366340",
              "contactType": "sales",
              "areaServed": ["IN", "US", "AE", "EU", "SG", "MY"],
              "availableLanguage": ["English", "Hindi"]
            }
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://steelmanufacturer.in/#localbusiness",
          "name": "Sakshi Forge",
          "image": "https://steelmanufacturer.in/hero_bg.webp",
          "telephone": "+91-8291366340",
          "email": "sakshiforge1737@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Balaji Industrial Compound, Taloja MIDC",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "410208",
            "addressCountry": "IN"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Sa 09:00-19:00"
        },
        {
          "@type": "FAQPage",
          "@id": "https://steelmanufacturer.in/#faq",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        }
      ]
    };

    const script = document.createElement('script');
    script.id = 'homepage-seo-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('homepage-seo-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="homepage-wrapper">
      {/* 1. HERO */}
      <section className="hero-sec" style={{ position: 'relative', background: 'linear-gradient(rgba(10, 14, 23, 0.92), rgba(10, 14, 23, 0.95)), url(/hero_bg.webp) center/cover' }}>
        <div className="container" style={{ padding: '5rem 1rem 3.5rem' }}>
          <div style={{ maxWidth: '980px' }}>
            <span className="hero-tag" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', color: 'var(--primary-yellow)', border: '1px solid rgba(255,193,7,0.3)', padding: '0.4rem 1rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', fontWeight: '700', display: 'inline-block', marginBottom: '1.25rem' }}>
              ISO 9001:2015 Certified Manufacturer · Taloja, Mumbai
            </span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)', fontWeight: '800', lineHeight: '1.18', color: '#fff', marginBottom: '1.25rem' }}>
              Electropolished Pipe Manufacturer in India: Hygienic, Corrosion-Resistant, Fully Certified
            </h1>
            <p className="hero-desc" style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '2rem' }}>
              Sakshi Forge makes electropolished stainless steel pipes and fittings in-house at our Taloja, Mumbai facility. Welded and seamless, in SS 304, 316L and duplex grades, finished to Ra ≤0.4 µm inside and out. Every order ships with 100% PMI-tested material and an EN 10204 3.1 certificate.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button onClick={() => onEnquireClick('Hero: Get a Quote in 30 Minutes')} className="btn btn-primary btn-lg" style={{ padding: '0.9rem 1.85rem', fontWeight: '700' }}>
                Get a Quote in 30 Minutes <ArrowRight size={16} />
              </button>
              <a href="/catalogue" onClick={handleLinkClick} className="btn btn-outline btn-lg" style={{ padding: '0.9rem 1.85rem', fontWeight: '600' }}>
                Download the Catalogue
              </a>
            </div>

            {/* Trust strip */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem 1.25rem', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem 1.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
              <span style={{ color: 'var(--primary-yellow)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Trust Highlights:</span>
              <span>ISO 9001:2015 Certified</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>ASTM A269 / A270</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>EN 10204 3.1 MTC</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>100% PMI Tested</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>Exports to USA, UAE, Europe, Southeast Asia</span>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', paddingTop: '1.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>10+ Years</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem', fontWeight: '600' }}>Manufacturing Heritage</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>100+ Clients</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem', fontWeight: '600' }}>Global & Domestic</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>500+ Projects</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem', fontWeight: '600' }}>Supplied & Installed</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>5,000+ Tons</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem', fontWeight: '600' }}>Forged Annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY BUYERS TRUST US */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '850px', marginBottom: '2.5rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Auditor Compliance</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Built Around What Your QA and Procurement Teams Check
            </h2>
            <div className="accent-line-left"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem 1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }}><FileText size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>Documents your auditor will ask for</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                Every order comes with a 3.1 MTC, mill traceability, a QA inspection report, a surface report with Ra values, and PMI and hydro test certificates.
              </p>
            </div>

            <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem 1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }}><Clock size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>A quote in 30 minutes</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                Send grade, size and quantity. You get a priced quote from someone who can discuss technical details on the same call.
              </p>
            </div>

            <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem 1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }}><Layers size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>Made to your drawing</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                Custom sizes and engineered drawings, alongside standard stock.
              </p>
            </div>

            <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem 1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1rem' }}><Globe size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>Export-ready</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                Packing and documentation for the USA, UAE, Europe and Southeast Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ELECTROPOLISHED PIPES (hero product) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '900px', marginBottom: '2.5rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Hero Product</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Our Electropolished Pipes and Tubes
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.25rem' }}></div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              When a line must be cleaned, sterilised and trusted, the pipe surface matters as much as the grade. We electropolish in-house, inside and outside, so we control the surface from preparation to final inspection.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.6rem' }}>
                <a href="/electropolished-pipes" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                  SS 304 / 304L Electropolished Pipes (Welded and Seamless)
                </a>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                An ultra-smooth, easy-to-clean surface for dairy, food, beverage and general hygienic service.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.6rem' }}>
                <a href="/electropolished-pipes" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                  SS 316 / 316L Electropolished Pipes
                </a>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                The standard choice for pharma, biotech and chloride-exposed lines. Used for WFI, purified water and sterile bioprocess systems.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.6rem' }}>
                <a href="/electropolished-pipes" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Duplex 2205 Electropolished Pipes
                </a>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                High yield strength and extreme chloride resistance for marine, chemical and desalination piping.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.6rem' }}>
                Super Duplex Electropolished Pipes
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                For the most aggressive chloride and high-pressure environments (UNS S32750 / S32760).
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.6rem' }}>
                ASTM A270 Sanitary and ASME BPE Electropolished Tubes
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Hygienic tubing for bioprocess, pharma and semiconductor systems.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.6rem' }}>
                Electropolished Pipe Fittings
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Elbows (45°, 90°, 180°) and related fittings finished to match your pipe.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.6rem' }}>
                Stainless Steel Honed Pipe
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Precision micro-honed interior finish pipes for high-pressure cylinders, actuators, and ultra-smooth fluid motion applications.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/electropolished-pipes" onClick={handleLinkClick} className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontWeight: '700' }}>
              Explore Electropolished Pipes →
            </a>
          </div>
        </div>
      </section>

      {/* 4. EDUCATION BLOCK */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Technical Insight</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              What Electropolishing Does, and Why It Matters on a Process Line
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
              Mechanical polishing drags metal across the surface. It looks smooth, but it leaves microscopic scratches that trap product residue, bacteria and chlorides. Electropolishing works the other way. An electrochemical process removes a thin layer of surface metal, including free iron and imperfections, so the surface levels out and a clean, passive, chromium-rich layer is left behind.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-yellow)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.25rem' }}>A smoother surface:</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>internal Ra ≤0.4 µm, so there are fewer places for contamination to hide.</span>
              </div>
              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-yellow)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.25rem' }}>Better corrosion resistance:</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>a highly passive surface that resists pitting.</span>
              </div>
              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-yellow)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.25rem' }}>Faster, more reliable cleaning:</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>minimal particle adhesion for rapid CIP sterilisation.</span>
              </div>
              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-yellow)' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.25rem' }}>A mirror-like finish:</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>defects are easy to spot under borescope inspections.</span>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '1rem' }}>
              Electropolished vs Mechanically Polished vs Pickled Pipe
            </h3>
            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-dark-700)', color: 'var(--primary-yellow)' }}>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Feature</th>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Electropolished</th>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Mechanically polished</th>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Pickled / passivated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>Surface</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', backgroundColor: 'rgba(255, 193, 7, 0.04)', fontWeight: '600' }}>Smooth, levelled, mirror-like</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Smooth-looking, micro-scratched</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Matte, unchanged</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>Corrosion resistance</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', backgroundColor: 'rgba(255, 193, 7, 0.04)', fontWeight: '600' }}>Highest</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Moderate</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Good</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>Cleanability</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', backgroundColor: 'rgba(255, 193, 7, 0.04)', fontWeight: '600' }}>Excellent</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Fair</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Fair</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>Typical use</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', backgroundColor: 'rgba(255, 193, 7, 0.04)', fontWeight: '600' }}>Pharma, biotech, dairy, UPW</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>General hygienic</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>General industrial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPECIFICATIONS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Technical Parameters</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Electropolished Pipe Specifications
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '2.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-dark-700)', color: 'var(--primary-yellow)' }}>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', width: '30%' }}>Parameter</th>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { p: 'Grades', d: 'SS 304 (UNS S30400), 304L, 316, 316L, Duplex 2205 (UNS S31803), Super Duplex (UNS S32750 / S32760)' },
                    { p: 'Type', d: 'Welded and seamless' },
                    { p: 'Finish', d: 'Electropolished internally and externally, mirror-like' },
                    { p: 'Surface roughness', d: 'Internal Ra ≤0.4 µm' },
                    { p: 'Standards', d: 'ASTM A269 / A270 (austenitic grades), ASTM A790 (duplex), ASME BPE' },
                    { p: 'Size range', d: 'SS 304 welded: ½" to 12" · Duplex: ½" to 8" · SS 316/316L & seamless ranges: ½" to 12"' },
                    { p: 'Customisation', d: 'Custom sizes and engineered drawings on request' },
                    { p: 'Wall thickness', d: 'Schedule 5S, 10S, 40S, 80S and custom wall thicknesses' },
                    { p: 'End types', d: 'Plain end, bevelled end, tri-clamp sanitary ends' },
                    { p: 'Testing', d: 'PMI, Ra value test, hydro test, passivation verification, ferrite check, visual and dimensional inspection, chemical and mechanical analysis' },
                    { p: 'Documents', d: 'MTC EN 10204 3.1, mill test traceability, QA inspection report, surface report (Ra), hydro test certificate, PMI certificate' },
                    { p: 'MOQ', d: 'Depends on product and size. Small project lots accepted.' }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'var(--bg-dark-900)' : 'transparent' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: '#fff' }}>{row.p}</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#cbd5e1' }}>{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Service limitations */}
            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <AlertTriangle size={20} style={{ color: '#ef4444' }} />
                <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Service limitations (we tell you upfront)</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.7' }}>
                <li>Avoid use with hydrofluoric acid.</li>
                <li>Not recommended for abrasive transport or abrasive slurries.</li>
                <li>Not for structural applications or high-impact wear.</li>
                <li>Handle and install carefully to avoid mechanical damage to the finished surface.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Application Fields</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Where Our Electropolished Pipes Go to Work
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Pharmaceutical and Biotechnology</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Sterile bioprocess lines, WFI, purified water and fermentation systems.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Food, Dairy and Beverage</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Hygienic transfer, clean piping and milk systems.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Semiconductor</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Ultra-pure water (UPW) delivery and high-purity gas lines.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Chemical Processing and Water Purification</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Process fluid transfer and purified water systems.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Cosmetics and Laboratories</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Production lines and research facilities.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Marine and Desalination</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Duplex EP pipe for chloride-heavy service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE SAKSHI FORGE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Why Plants Choose Us</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Why Plants Order Electropolished Pipes from Sakshi Forge
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Everything under one roof</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Forging, machining, electropolishing and testing are all in-house, so there is no outsourcing delay.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Traceable material</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Certified raw material from approved mills, 100% PMI testing, and 3.1 certificates tied to heat numbers.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Tested beyond PMI</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Ra value testing, hydro testing, passivation verification and ferrite check, each reported in your documents.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>One supplier for pipes, fittings and flanges</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>EP pipes sit alongside ASME B16.5 flanges and B16.11 forged fittings: one vendor, one set of documents, one dispatch.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Custom work without the runaround</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Special sizes, non-standard lengths and special alloys quoted against your drawing.</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Quotes in minutes</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>A 30-minute quote guarantee, so your project doesn't wait.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR PROCESS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>8-Stage Production Flow</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              From Raw Material to Finished EP Pipe, All Under One Roof
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {[
                { step: '01', title: 'Material verification', desc: 'Certified stainless from approved mills, checked by PMI.' },
                { step: '02', title: 'Cutting and sizing', desc: 'Cut to your required lengths, ODs and wall dimensions.' },
                { step: '03', title: 'Cleaning and degreasing', desc: 'Oils and weld discolouration are removed first.' },
                { step: '04', title: 'Electropolishing', desc: 'In our controlled electrolytic bath, internal and external.' },
                { step: '05', title: 'Rinse and passivation', desc: 'Residues are removed and the corrosion-resistant layer is stabilised.' },
                { step: '06', title: 'Testing', desc: 'Ra measurement, passivation verification, ferrite check, hydro test, and dimensional and visual inspection.' },
                { step: '07', title: 'Documentation', desc: 'MTC 3.1, QA inspection report, surface report, PMI and hydro certificates.' },
                { step: '08', title: 'Protective packing', desc: 'Capped and sleeved to protect the finish through transport and export.' }
              ].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', position: 'relative' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-yellow)', fontFamily: 'monospace', marginBottom: '0.4rem' }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. QUALITY ASSURANCE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Strict Inspection</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Quality That Stands Up to an Audit
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {[
                'ISO 9001:2015 certified quality management system',
                '100% PMI testing before dispatch',
                'Ra surface roughness testing, with a surface report supplied',
                'Hydro (leak and pressure) testing and passivation verification',
                'Chemical composition analysis and mechanical property testing',
                'EN 10204 3.1 certificates and full mill traceability',
                'Third-party inspection accepted on request (SGS, TUV, BV, DNV, Lloyd\'s)'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'var(--bg-dark-900)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.5' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ textAlign: 'center' }}>
              <button onClick={() => onEnquireClick('Sample Test Certificate Request')} className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontWeight: '700' }}>
                Request a Sample Test Certificate →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FULL PRODUCT RANGE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Complete Portfolio</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Our Complete Industrial Steel Range
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '2rem' }}>
              Alongside electropolished pipes, we make 17 certified product categories in carbon, alloy and stainless steel:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-yellow)', marginBottom: '0.35rem' }}>
                  <a href="/industrial-flanges" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                    Industrial Flanges
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Weld neck, slip-on, blind, socket weld, threaded, lap joint (ASME B16.5)</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-yellow)', marginBottom: '0.35rem' }}>
                  <a href="/forged-fittings" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                    Forged Fittings & Buttweld
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>ASME B16.11 forged fittings and butt weld fittings</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-yellow)', marginBottom: '0.35rem' }}>
                  <a href="/stainless-steel-elbow" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                    SS Elbows
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>45°, 90°, 180° seamless and welded elbows</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-yellow)', marginBottom: '0.35rem' }}>
                  <a href="/round-bars" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                    SS Round Bars and Rods
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Precision turned, forged and hot-rolled round bars</p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-color)', gridColumn: 'span 2' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-yellow)', marginBottom: '0.35rem' }}>
                  Pipes, Tubes and Plates
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Including SS 304/304L, 316/316L and Duplex 2205 products across all schedules and thicknesses</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <a href="/products" onClick={handleLinkClick} className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontWeight: '700' }}>
                View All Products →
              </a>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>Reference Tools:</span>
                <a href="/pipe-schedule-chart" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}>Pipe Schedule Chart</a>
                <a href="/flange-dimension-chart" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}>Flange Dimension Chart</a>
                <a href="/flange-weight-chart" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}>Flange Weight Chart</a>
                <a href="/flange-bolt-chart" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}>Flange Bolt Chart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. EXPORT AND CITIES SERVED */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Global & Domestic Reach</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Supplying India and the World from Mumbai
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              We ship across India and export to the USA, UAE, Europe and Southeast Asia, with export-grade packing and documentation.
            </p>

            <div>
              <div style={{ color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                Cities we serve:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {[
                  { name: 'Mumbai', path: '/market-area/mumbai' },
                  { name: 'Delhi NCR', path: '/market-area/delhi' },
                  { name: 'Hyderabad', path: '/market-area/hyderabad' },
                  { name: 'Visakhapatnam', path: '/market-area/visakhapatnam' },
                  { name: 'Indore', path: '/market-area/indore' },
                  { name: 'Chennai', path: '/market-area/chennai' },
                  { name: 'Coimbatore', path: '/market-area/coimbatore' },
                  { name: 'Hosur', path: '/market-area/hosur' },
                  { name: 'Cuddalore', path: '/market-area/cuddalore' },
                  { name: 'Tiruchirappalli', path: '/market-area/tiruchirappalli' },
                  { name: 'Salem', path: '/market-area/salem' },
                  { name: 'Madurai', path: '/market-area/madurai' },
                  { name: 'Thoothukudi', path: '/market-area/thoothukudi' }
                ].map((c, idx) => (
                  <a
                    key={idx}
                    href={c.path}
                    onClick={handleLinkClick}
                    style={{
                      backgroundColor: 'var(--bg-dark-900)',
                      border: '1px solid var(--border-color)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '4px',
                      color: '#e2e8f0',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: '500'
                    }}
                  >
                    {c.name}
                  </a>
                ))}
                <a href="/market-area" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', fontSize: '0.82rem', padding: '0.4rem 0.5rem', textDecoration: 'underline' }}>
                  and 50+ more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. ABOUT US */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Corporate Profile</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              About Sakshi Forge
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
              Sakshi Forge is an ISO 9001:2015 certified manufacturer of electropolished pipes, industrial flanges, forged fittings, round bars and stainless steel components, based in Mumbai, Maharashtra. For 10+ years we have supplied oil and gas, petrochemical, power, pharma and heavy engineering customers who need material they can trust and paperwork they can show an auditor.
            </p>

            {/* Identity notice */}
            <div style={{ backgroundColor: 'var(--bg-dark-800)', borderLeft: '4px solid var(--primary-yellow)', padding: '1.25rem 1.5rem', borderRadius: '0 8px 8px 0' }}>
              <div style={{ color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                Identity notice:
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Sakshi Forge (Mumbai) is an independent, GST-registered manufacturer. It is not affiliated with Sakshi Tube Fitting (Digha) or Sakshi Metal Industries (Ahmedabad).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. GALLERY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Facility Audit</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Inside Our Facility
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '2rem' }}>
              Watch our material inventory, machining, electropolishing and testing areas before you place an order.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img 
                  src="/WhatsApp Image 2026-10-03 at 9.37.31 PM.jpeg" 
                  alt="SS 316L seamless end caps 50NB SCH40 with heat number SFE50 and SF stamp manufactured at Sakshi Forge, Taloja" 
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{ padding: '0.85rem', fontSize: '0.85rem', color: '#e2e8f0', fontWeight: '500' }}>
                  50NB SCH40 Seamless End Caps (GR. 316L, Heat No: SFE50) with mill stamp
                </div>
              </div>

              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img 
                  src="/WhatsApp Image 2026-10-03 at 9.37.32 PM.jpeg" 
                  alt="Internal and external electropolished surface and bevelled edge inspection of seamless end caps" 
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{ padding: '0.85rem', fontSize: '0.85rem', color: '#e2e8f0', fontWeight: '500' }}>
                  Internal bore & bevelled edge inspection of high-purity seamless pipe end caps
                </div>
              </div>

              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img 
                  src="/WhatsApp Image 2026-10-03 at 9.43.30 PM.jpeg" 
                  alt="Sakshi Forge certified 50NB SCH40 seamless pipe end cap grade 316L with laser marking" 
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{ padding: '0.85rem', fontSize: '0.85rem', color: '#e2e8f0', fontWeight: '500' }}>
                  Sakshi Forge certified 50NB SCH40 316L seamless end cap for process lines
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="/gallery" onClick={handleLinkClick} className="btn btn-outline" style={{ padding: '0.85rem 2rem', fontWeight: '600' }}>
                View Full Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQs */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Questions & Answers</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Electropolished Pipe: Your Questions Answered
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2.5rem' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    backgroundColor: 'var(--bg-dark-800)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '8px', 
                    overflow: 'hidden' 
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      color: openFaq === idx ? 'var(--primary-yellow)' : '#fff',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openFaq === idx && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.7', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA AND CONTACT */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>30-Minute Guarantee</span>
              <h2 style={{ fontSize: '2.3rem', margin: '0.75rem 0' }}>
                Tell Us What You Need. We'll Quote in 30 Minutes.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', maxWidth: '700px', margin: '0 auto' }}>
                Send your grade, size, quantity and finish requirement. You'll get a clear price from a real person, not a form-letter reply.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
              {/* Form */}
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <CheckCircle2 size={48} style={{ color: '#10b981', margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>RFQ Received</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Thank you. Our engineering team is reviewing your requirements and will quote within 30 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Company *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Phone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+91..."
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Email *</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="procurement@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Grade and Size *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. SS 316L, 2 inch, Sch 10"
                          value={formData.gradeAndSize}
                          onChange={(e) => setFormData({...formData, gradeAndSize: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Quantity *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. 500 meters / 20 pieces"
                          value={formData.quantity}
                          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Message / drawing details</label>
                      <textarea 
                        rows="3"
                        placeholder="Mention standard (ASTM A270/A269), Ra requirements, delivery location, etc."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', resize: 'vertical' }}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem', fontWeight: '700', width: '100%', marginTop: '0.5rem' }}>
                      Submit RFQ for 30-Min Quote <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Info & Map */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <MapPin size={18} /> Factory Address
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Balaji Industrial Compound, Taloja MIDC, Mumbai, Maharashtra 410208
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <Phone size={18} /> Phone / WhatsApp
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    +91 82913 66340 | +91 79764 76375
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <Mail size={18} /> Email
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    sakshiforge1737@gmail.com
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <Clock size={18} /> Working Hours
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Monday – Saturday: 9:00 AM – 7:00 PM IST (Quotes processed 24/7)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Factory Pin */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', height: '320px', width: '100%' }}>
              <iframe
                title="Sakshi Forge Factory Location Taloja MIDC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5562725359196!2d73.1257!3d19.0392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9db863c5f2d%3A0xc3e1c6b1a134a4bc!2sTaloja%20MIDC!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 16. FOOTER TEXT NOTICE */}
      <section style={{ backgroundColor: 'var(--bg-dark-900)', borderTop: '1px solid var(--border-color)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7' }}>
            Sakshi Forge is an ISO 9001:2015 certified manufacturer of electropolished pipes, industrial flanges, forged fittings, round bars and stainless steel components in Mumbai, India. We deliver 100% PMI-tested material with EN 10204 3.1 MTCs to customers across India and worldwide.
          </div>
        </div>
      </section>
    </div>
  );
}
