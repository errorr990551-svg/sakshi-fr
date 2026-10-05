import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, Award, FileText, CheckCircle2, ChevronDown, 
  ChevronUp, MapPin, Phone, Mail, Clock, Download, ExternalLink, HelpCircle, 
  Layers, Factory, Globe, Truck, Check, AlertTriangle, MessageSquare,
  Play, Sparkles, Package, Cpu, Scissors, Zap, Droplet, Building2, FlaskConical,
  Compass, ArrowUpRight
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
      a: "It is a stainless steel pipe finished by an electrochemical process that removes a thin surface layer, including free iron and microscopic imperfections. The result is a smoother, highly passive surface (Ra ≤0.4 µm) that resists pitting corrosion and cleans far more reliably than mechanical polish."
    },
    {
      q: "Which is better for EP pipe, 316L or 304?",
      a: "SS 316L is preferred for pharmaceutical, biotech, and chloride-exposed lines due to superior molybdenum pitting resistance. SS 304/304L is a dependable, cost-effective standard for food, dairy, and beverage process piping."
    },
    {
      q: "What surface finish do your electropolished pipes provide?",
      a: "Internal roughness is guaranteed at Ra ≤0.4 µm (and down to Ra ≤0.2 µm on request), electropolished inside and out. Every dispatch includes calibrated surface profilometer reports."
    },
    {
      q: "What sizes do you manufacture?",
      a: "SS 304/316L welded and seamless pipes from ½\" NB up to 12\" NB, and duplex/super duplex pipes from ½\" up to 8\" NB across Schedules 5S, 10S, 40S, and 80S. Custom lengths and drawings are fully supported."
    },
    {
      q: "Which standards do you manufacture to?",
      a: "ASTM A269 and ASTM A270 for sanitary austenitic grades, ASTM A790 for duplex and super duplex, alongside ASME BPE compliance options."
    },
    {
      q: "Do you perform electropolishing in-house?",
      a: "Yes. Our complete chemical pickling, passivation, and electrolytic polishing baths operate in-house at Taloja MIDC, ensuring stringent quality control and fast lead times."
    },
    {
      q: "Which documents accompany an order?",
      a: "Every order ships with an EN 10204 3.1 MTC, 100% PMI spectro report, hydro test certificate, surface roughness (Ra) profile report, and complete mill heat traceability."
    },
    {
      q: "Is electropolished pipe suitable for every application?",
      a: "No. Avoid hydrofluoric acid, aggressive abrasive slurry transport, and heavy structural wear applications where mechanical abrasion damages the passive oxide layer."
    },
    {
      q: "What is your minimum order quantity (MOQ)?",
      a: "MOQ depends on specific diameter and alloy grade. We actively quote and deliver both full project shipments and smaller maintenance lots."
    },
    {
      q: "Can I receive a sample test certificate prior to ordering?",
      a: "Yes. Click 'Request a Sample Test Certificate' on this page or submit an RFQ, and our QA desk will share representative certified documentation."
    },
    {
      q: "Do you export internationally?",
      a: "Yes, we regularly supply EPC contractors and industrial plants across the USA, UAE, Europe, and Southeast Asia with seaworthy export packing."
    },
    {
      q: "How fast can I get a formal quote?",
      a: "Within 30 minutes during standard working hours directly from our technical sales metallurgists."
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
      {/* 1. HERO BANNER (Fixed Cut-Off Issue & Unconstrained Height) */}
      <section 
        className="hero-sec" 
        style={{ 
          position: 'relative', 
          minHeight: 'auto', 
          height: 'auto',
          background: 'linear-gradient(rgba(10, 14, 23, 0.93), rgba(10, 14, 23, 0.96)), url(/hero_bg.webp) center/cover',
          overflow: 'visible',
          padding: '6.5rem 1rem 4.5rem'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', color: 'var(--primary-yellow)', border: '1px solid rgba(255,193,7,0.3)', padding: '0.45rem 1.15rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.82rem', fontWeight: '700', display: 'inline-block', marginBottom: '1.25rem' }}>
              ISO 9001:2015 Certified Manufacturer · Taloja MIDC, Mumbai
            </span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.5rem)', fontWeight: '800', lineHeight: '1.18', color: '#fff', marginBottom: '1.35rem' }}>
              Electropolished Pipe Manufacturer in India: Hygienic, Corrosion-Resistant, Fully Certified
            </h1>
            <p className="hero-desc" style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.75', marginBottom: '2.25rem', maxWidth: '920px' }}>
              Sakshi Forge manufactures electropolished stainless steel pipes and sanitary fittings in-house at our Taloja, Mumbai facility. Available in welded and seamless SS 304, 316L, and duplex alloys finished to Ra ≤0.4 µm inside and out. Every order ships with 100% PMI testing and an EN 10204 3.1 inspection certificate.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button onClick={() => onEnquireClick('Hero: Get a Quote in 30 Minutes')} className="btn btn-primary btn-lg" style={{ padding: '0.95rem 2rem', fontWeight: '700' }}>
                Get a Quote in 30 Minutes <ArrowRight size={17} />
              </button>
              <a href="/catalogue" onClick={handleLinkClick} className="btn btn-outline btn-lg" style={{ padding: '0.95rem 2rem', fontWeight: '600' }}>
                Download Catalogue PDF
              </a>
            </div>

            {/* 2. TRUST HIGHLIGHTS (Styled like 'Why Choose IOT Sense' with modern card grid) */}
            <div style={{ marginTop: '2.5rem', marginBottom: '2.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ height: '2px', width: '28px', backgroundColor: 'var(--primary-yellow)', display: 'inline-block' }}></span>
                <span style={{ color: 'var(--primary-yellow)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.85rem' }}>
                  Why Choose Sakshi Forge • Trust Highlights
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {[
                  { icon: <ShieldCheck size={26} style={{ color: 'var(--primary-yellow)' }} />, title: "ISO 9001:2015 Certified", subtitle: "Audited zero-defect manufacturing" },
                  { icon: <FileText size={26} style={{ color: 'var(--primary-yellow)' }} />, title: "EN 10204 3.1 MTC", subtitle: "100% heat traceability guaranteed" },
                  { icon: <Sparkles size={26} style={{ color: 'var(--primary-yellow)' }} />, title: "ASTM A269 / A270", subtitle: "Sanitary bioprocess Ra ≤0.4 µm" },
                  { icon: <Award size={26} style={{ color: 'var(--primary-yellow)' }} />, title: "100% PMI Tested", subtitle: "Thermo Niton XRF verified" },
                  { icon: <Globe size={26} style={{ color: 'var(--primary-yellow)' }} />, title: "Global & Domestic", subtitle: "Exports to USA, UAE, Europe, SE Asia" }
                ].map((item, idx) => (
                  <div key={idx} className="trust-highlight-card">
                    <div style={{ flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fff', margin: '0 0 2px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0, lineHeight: '1.4' }}>{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Band */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div>
                <div style={{ fontSize: '2.3rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>10+ Years</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.35rem', fontWeight: '600' }}>Manufacturing Heritage</div>
              </div>
              <div>
                <div style={{ fontSize: '2.3rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>100+ Clients</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.35rem', fontWeight: '600' }}>Global & Domestic Plants</div>
              </div>
              <div>
                <div style={{ fontSize: '2.3rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>500+ Projects</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.35rem', fontWeight: '600' }}>Process Lines Commissioned</div>
              </div>
              <div>
                <div style={{ fontSize: '2.3rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>5,000+ Tons</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.35rem', fontWeight: '600' }}>Manufactured Annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUDITOR COMPLIANCE (Centre-Aligned as Requested) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Auditor Compliance</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Built Around What Your QA and Procurement Teams Check
            </h2>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: '0 auto' }}>
              Every order leaves our Taloja factory with airtight documentation, verified heat tracking, and physical test reports ready for rigorous third-party inspection sign-off.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.75rem' }}>
            <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2.25rem 1.75rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}><FileText size={38} /></div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>Documents your auditor will ask for</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                Every order comes with a 3.1 MTC, mill traceability, a QA inspection report, a surface report with Ra values, and PMI and hydro test certificates.
              </p>
            </div>

            <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2.25rem 1.75rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}><Clock size={38} /></div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>A quote in 30 minutes</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                Send grade, size and quantity. You get a priced quote from an engineer who can discuss metallurgical and dimensional specs on the same call.
              </p>
            </div>

            <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2.25rem 1.75rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}><Layers size={38} /></div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>Made to your drawing</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                Custom fabrication, special wall thickness schedules, and custom engineered spool drawings alongside standard stock dimensions.
              </p>
            </div>

            <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2.25rem 1.75rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ color: 'var(--primary-yellow)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}><Globe size={38} /></div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>Export-ready</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                Treated wooden boxes, protective PVC end caps, and complete customs documentation for the USA, UAE, Europe and Southeast Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HERO PRODUCT (Centre-Aligned Content + Linked to Existing Products with Real Photos) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Hero Product</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Our Electropolished Pipes and Tubes
            </h2>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }}></div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: '0 auto' }}>
              When a process line must be sterilized and trusted, the microscopic pipe surface matters as much as the steel grade. We electropolish inside and outside at our Mumbai facility, guaranteeing internal Ra ≤0.4 µm.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              {
                title: "SS 304 / 304L Electropolished Pipes",
                sub: "Welded and Seamless (½\" to 12\" NB)",
                desc: "An ultra-smooth, easy-to-clean Ra ≤0.4 µm surface for dairy, food, beverage and hygienic process pipelines.",
                img: "/electropolished-pipes.jpg",
                link: "/electropolished-pipes"
              },
              {
                title: "SS 316 / 316L Electropolished Pipes",
                sub: "Pharmaceutical Grade High-Purity",
                desc: "The global benchmark for pharma, biotech, WFI loops, purified water, and chloride-exposed bioprocess systems.",
                img: "/electropolish_pipes.webp",
                link: "/electropolished-pipes"
              },
              {
                title: "Duplex 2205 Electropolished Pipes",
                sub: "UNS S31803 / S32205 High-Strength",
                desc: "High yield strength and extreme chloride pitting resistance for marine, chemical, and offshore desalination plants.",
                img: "/Duplex 2205 Pipe Fittings.webp",
                link: "/electropolished-pipes"
              },
              {
                title: "Super Duplex Electropolished Pipes",
                sub: "UNS S32750 / S32760 High Corrosion",
                desc: "Engineered for harsh acidic, high-pressure, and severe offshore seawater environments requiring maximum PREN.",
                img: "/Duplex 2507 F53-F55 Flange.webp",
                link: "/electropolished-pipes"
              },
              {
                title: "ASTM A270 Sanitary & ASME BPE Tubes",
                sub: "Tri-Clamp Ready & Sterile Process",
                desc: "High-purity hygienic tubing and fittings for bioprocessing, pharmaceutical manufacturing, and semiconductor UPW.",
                img: "/SS Dairy Fittings.webp",
                link: "/electropolished-pipes"
              },
              {
                title: "Electropolished Pipe Fittings & Elbows",
                sub: "45°, 90°, 180° Bends & Sanitary Tees",
                desc: "Seamless and welded elbows, tees, and reducers finished to identical Ra roughness to match your pipe runs.",
                img: "/Stainless Steel Elbow.webp",
                link: "/stainless-steel-elbow"
              }
            ].map((prod, idx) => (
              <div 
                key={idx} 
                className="product-card" 
                style={{ 
                  backgroundColor: 'var(--bg-dark-900)', 
                  borderRadius: '14px', 
                  border: '1px solid var(--border-color)', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
              >
                <div style={{ height: '220px', width: '100%', overflow: 'hidden', backgroundColor: '#070a10', position: 'relative' }}>
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', display: 'flex', justifyContent: 'center' }}>
                    <span style={{ backgroundColor: 'rgba(10, 14, 23, 0.85)', backdropFilter: 'blur(4px)', color: 'var(--primary-yellow)', fontSize: '0.75rem', fontWeight: '700', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(255,193,7,0.3)' }}>
                      {prod.sub}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.75rem', fontWeight: '700' }}>
                    <a href={prod.link} onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {prod.title}
                    </a>
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 1.5rem', flexGrow: 1 }}>
                    {prod.desc}
                  </p>
                  <a 
                    href={prod.link} 
                    onClick={handleLinkClick} 
                    className="btn btn-outline" 
                    style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    View Specifications <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/electropolished-pipes" onClick={handleLinkClick} className="btn btn-primary btn-lg" style={{ padding: '0.9rem 2.25rem', fontWeight: '700' }}>
              Explore Full Electropolished Range <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL INSIGHT (Content moved to Far Left Margin + Embedded Video) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3.5rem', alignItems: 'start', marginBottom: '3.5rem' }}>
            {/* Left Content Column (Far Left) */}
            <div style={{ textAlign: 'left' }}>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)', marginBottom: '1rem' }}>
                Technical Insight
              </span>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem', lineHeight: '1.25', color: '#fff' }}>
                What Electropolishing Does, and Why It Matters on a Process Line
              </h2>
              <div className="accent-line-left" style={{ marginBottom: '1.75rem' }}></div>

              <p style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                Mechanical polishing drags abrasive grit across the surface. It looks shiny, but microscopic examination reveals scratches that trap chlorides, bio-film, and bacteria. 
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '2rem' }}>
                Electropolishing is an electrochemical process. Controlled electrolytic removal levels microscopic peaks and strips free iron from the surface, leaving a chromium-rich, ultra-passive oxide barrier behind.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '8px', borderLeft: '3px solid var(--primary-yellow)' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '0.25rem', fontSize: '0.95rem' }}>A smoother surface:</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Internal Ra ≤0.4 µm eliminates entrapment zones.</span>
                </div>
                <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '8px', borderLeft: '3px solid var(--primary-yellow)' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '0.25rem', fontSize: '0.95rem' }}>Anti-Corrosion Passivation:</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Elevated Cr/Fe oxide ratio resists localized pitting.</span>
                </div>
                <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '8px', borderLeft: '3px solid var(--primary-yellow)' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '0.25rem', fontSize: '0.95rem' }}>Faster CIP Sterilisation:</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Reduced cleaning chemical and steam downtime.</span>
                </div>
                <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.25rem', borderRadius: '8px', borderLeft: '3px solid var(--primary-yellow)' }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '0.25rem', fontSize: '0.95rem' }}>Mirror Borescope Inspection:</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Flawless video borescopes for clean validation.</span>
                </div>
              </div>
            </div>

            {/* Right Video Player Column */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 193, 7, 0.25)', boxShadow: '0 12px 35px rgba(0,0,0,0.6)', backgroundColor: '#070a10' }}>
                <video 
                  src="/technical insight.mp4" 
                  controls 
                  playsInline 
                  autoPlay 
                  muted 
                  loop 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', color: '#94a3b8', fontSize: '0.88rem' }}>
                <Play size={15} style={{ color: 'var(--primary-yellow)' }} />
                <span>Sakshi Forge In-House Electropolishing & Surface Finishing Lab</span>
              </div>
            </div>
          </div>

          {/* Full Width Comparison Table */}
          <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '1.25rem', textAlign: 'left' }}>
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
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>Surface Geometry</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', backgroundColor: 'rgba(255, 193, 7, 0.04)', fontWeight: '600' }}>Smooth, microscopic leveling, mirror-like</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Scratched peaks & embedded grit</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Matte, etched grain boundaries</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>Corrosion Resistance</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', backgroundColor: 'rgba(255, 193, 7, 0.04)', fontWeight: '600' }}>Highest (Chromium-rich oxide layer)</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Moderate (Surface stressed)</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Standard mill passivated</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>CIP Cleanability</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', backgroundColor: 'rgba(255, 193, 7, 0.04)', fontWeight: '600' }}>Superior: Zero bacterial entrapment</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Fair: Risk of bio-film buildup</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>Fair: Rougher Ra</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>Typical Applications</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', backgroundColor: 'rgba(255, 193, 7, 0.04)', fontWeight: '600' }}>Pharma, WFI loops, UPW, Dairy, Biotech</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>General commercial food service</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>General industrial water handling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL PARAMETERS (Content moved to Far Right Margin + Pic on Left with Service Parameters Below) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            {/* Left Side: Pic + Service Parameters Underneath */}
            <div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', marginBottom: '1.75rem', backgroundColor: 'var(--bg-dark-900)' }}>
                <img 
                  src="/technical parameter.webp" 
                  alt="Technical Parameters - Sakshi Forge Electropolished Pipe" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                />
              </div>

              {/* Service Parameters Box Under The Pic */}
              <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '12px', padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                  <AlertTriangle size={22} style={{ color: '#ef4444' }} />
                  <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0, fontWeight: '700' }}>
                    Service Limitations (We Tell You Upfront)
                  </h3>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.4rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.75' }}>
                  <li>Avoid service with hydrofluoric (HF) acid and aggressive halogen compounds.</li>
                  <li>Not recommended for slurry lines carrying heavy abrasive grit or continuous sediment.</li>
                  <li>Not designed for primary structural framing or severe mechanical impact service.</li>
                  <li>Careful handling and soft slings are required during crane lifts to preserve electropolished mirror finish.</li>
                </ul>
              </div>
            </div>

            {/* Right Side: Content Aligned Towards Right Margin */}
            <div>
              <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Technical Parameters</span>
                <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', lineHeight: '1.25', color: '#fff' }}>
                  Electropolished Pipe Specifications
                </h2>
                <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>
              </div>

              <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 6px 20px rgba(0,0,0,0.2)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-dark-700)', color: 'var(--primary-yellow)' }}>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)', width: '32%' }}>Parameter</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { p: 'Grades', d: 'SS 304, 304L, 316, 316L, Duplex 2205 (UNS S31803), Super Duplex (UNS S32750 / S32760)' },
                      { p: 'Type', d: 'Seamless and Welded (TIG / Laser)' },
                      { p: 'Finish', d: 'Electropolished internally & externally to mirror finish' },
                      { p: 'Surface Roughness', d: 'Internal Ra ≤0.4 µm (Ra ≤0.2 µm on request)' },
                      { p: 'Standards', d: 'ASTM A269, ASTM A270 (austenitic), ASTM A790 (duplex), ASME BPE' },
                      { p: 'Size Range', d: 'SS 304/316L: ½" to 12" NB · Duplex: ½" to 8" NB' },
                      { p: 'Wall Thickness', d: 'Schedule 5S, 10S, 40S, 80S and custom wall dimensions' },
                      { p: 'End Types', d: 'Plain ends, bevelled welding ends, tri-clamp sanitary ferrule ends' },
                      { p: 'Testing', d: '100% PMI, Ra profilometer surface scan, hydro test, passivation check' },
                      { p: 'Documents', d: 'EN 10204 3.1 MTC, heat code traceability, surface Ra report, PMI cert' },
                      { p: 'MOQ', d: 'Project lots and small maintenance quantities quoted directly' }
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'var(--bg-dark-900)' : 'transparent' }}>
                        <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: '#fff' }}>{row.p}</td>
                        <td style={{ padding: '0.85rem 1.25rem', color: '#cbd5e1' }}>{row.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPLICATION FIELDS (Broader Container & Centered as Agrifuture India Livestock Application Section) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.25rem' }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Application Fields</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Where Our Electropolished Pipes Go to Work
            </h2>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: '0 auto' }}>
              Engineered sanitary and corrosion-resistant solutions for sterile bioprocess, ultra-pure water, and severe industrial operating environments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.75rem' }}>
            {[
              {
                title: "💊 Pharmaceutical & Biotechnology",
                desc: "Sterile bioprocess loops, Water for Injection (WFI), purified water, and clean fermentation systems.",
                bg: "/Pharmaceutical and Biotechnology.webp",
                icon: <FlaskConical size={26} />,
                pills: ["SS 316L EP PIPE", "WFI SYSTEMS", "ASME BPE"]
              },
              {
                title: "🥛 Food, Dairy & Beverage",
                desc: "Hygienic milk lines, brewery filtration, and automated CIP sanitization lines requiring zero bacterial adhesion.",
                bg: "/Food, Dairy and Beverage.jpg.jpeg",
                icon: <Droplet size={26} />,
                pills: ["SS 304 / 304L", "CIP PIPING", "DAIRY FITTINGS"]
              },
              {
                title: "⚡ Semiconductor & UPW Systems",
                desc: "Ultra-pure water (UPW) distribution, high-purity microelectronics gas manifolds, and cleanroom supply lines.",
                bg: "/semiconductor.jpg.jpeg",
                icon: <Cpu size={26} />,
                pills: ["UPW LINES", "HIGH PURITY GAS", "RA ≤ 0.2 µM"]
              },
              {
                title: "🧪 Chemical & Water Purification",
                desc: "Corrosive chemical dosing, reverse osmosis desalination, and high-purity water treatment skid fabrication.",
                bg: "/Chemical Processing and Water Purification.jpg.jpeg",
                icon: <Layers size={26} />,
                pills: ["CORROSION RESISTANT", "ACID PROCESS", "DESALINATION"]
              },
              {
                title: "🔬 Cosmetics & Research Laboratories",
                desc: "Sanitary cream mixing tanks, high-shear formulation lines, and automated laboratory sample transfer.",
                bg: "/Cosmetics and Laboratories.jpg.jpeg",
                icon: <Sparkles size={26} />,
                pills: ["STERILE TRANSFER", "SAMPLE VALVES", "POLISHED TUBES"]
              },
              {
                title: "⚓ Marine & Desalination",
                desc: "Duplex 2205 and Super Duplex piping designed for extreme seawater salinity and coastal chloride exposure.",
                bg: "/Marine and Desalination.jpg.jpeg",
                icon: <Globe size={26} />,
                pills: ["DUPLEX 2205", "SUPER DUPLEX", "CHLORIDE RESISTANT"]
              }
            ].map((app, idx) => (
              <div 
                key={idx} 
                className="app-field-card"
                style={{ backgroundImage: `url('${app.bg}')` }}
              >
                <div className="app-field-overlay"></div>
                <div className="app-field-content">
                  <div className="app-field-icon">{app.icon}</div>
                  <h3 className="app-field-title">{app.title}</h3>
                  <p className="app-field-desc">{app.desc}</p>
                  <div className="app-field-pills">
                    {app.pills.map((pill, pIdx) => (
                      <span key={pIdx} className="app-pill">{pill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY PLANTS CHOOSE US (Cards styled like Iotaflow 'Leave your UTILITIES for us to Measure' with big icons) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
            <h2 style={{ borderLeft: '4px solid var(--primary-yellow)', paddingLeft: '14px', fontSize: '2.2rem', fontWeight: '800', color: '#fff', margin: 0 }}>
              Why Plants Order Electropolished Pipes from Sakshi Forge
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {[
              {
                icon: "/1st card.png",
                title: "Everything under one roof",
                desc: "Forging, machining, electropolishing and testing are all in-house, so there is no outsourcing delay or divided responsibility."
              },
              {
                icon: "/2nd card.png",
                title: "Traceable material",
                desc: "Certified raw material from approved primary mills, 100% PMI spectro testing, and EN 10204 3.1 certificates tied directly to mill heat numbers."
              },
              {
                icon: "/3rd card.png",
                title: "Tested beyond PMI",
                desc: "Profilometer Ra roughness scans, hydrostatic leak checks, passivation verification, and ferrite checks reported directly in your QA pack."
              },
              {
                icon: "/4th card.png",
                title: "One supplier for pipes, fittings and flanges",
                desc: "Electropolished pipes sit alongside ASME B16.5 flanges and B16.11 forged fittings: one vendor, one unified document trail, one coordinated dispatch."
              },
              {
                icon: "/5th card.png",
                title: "Custom work without the runaround",
                desc: "Special wall thicknesses, non-standard spool lengths, and specialty corrosion-resistant alloys quoted accurately against your engineering drawing."
              },
              {
                icon: "/6th card.png",
                title: "Quotes in minutes",
                desc: "Our guaranteed 30-minute quote turnaround ensures your plant shutdown, maintenance, or project procurement timeline never waits."
              }
            ].map((card, idx) => (
              <div key={idx} className="utility-plant-card">
                <div className="utility-icon-box">
                  <img src={card.icon} alt={card.title} className="utility-icon-img" />
                  <h3 className="utility-title">{card.title}</h3>
                </div>
                <div className="utility-details">
                  <p style={{ margin: 0 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 8-STAGE PRODUCTION FLOW (Styled like Iotaflow 'How to Get Started' Step Cards) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>8-Stage Production Flow</span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#fff', margin: '0.5rem 0 0' }}>
                From Raw Material to Finished EP Pipe
              </h2>
              {/* Iotaflow-inspired Arrow Underline */}
              <div style={{ display: 'flex', alignItems: 'center', width: '240px', marginTop: '0.85rem' }}>
                <div style={{ height: '5px', backgroundColor: 'var(--primary-yellow)', flexGrow: 1, borderRadius: '4px 0 0 4px' }}></div>
                <div style={{ width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '12px solid var(--primary-yellow)' }}></div>
              </div>
            </div>

            <button 
              onClick={() => onEnquireClick('8-Stage Process Enquiry')} 
              className="btn btn-primary"
              style={{ borderRadius: '50px', padding: '0.8rem 1.85rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Start Your Order <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {[
              { num: '01', title: 'Material Verification', desc: 'Certified prime stainless billets & mother hollows from approved mills, verified by PMI spectro analysis.', icon: <CheckCircle2 size={24} style={{ color: '#000' }} /> },
              { num: '02', title: 'Cutting & Sizing', desc: 'Precision cold cutting to specified lengths, ODs, and calibrated wall thicknesses.', icon: <Scissors size={24} style={{ color: '#000' }} /> },
              { num: '03', title: 'Degreasing & Chemical Wash', desc: 'Industrial alkaline cleaning eliminates surface oils, welding scales, and carbon residues.', icon: <Sparkles size={24} style={{ color: '#000' }} /> },
              { num: '04', title: 'In-House Electropolishing', desc: 'Controlled electrolytic acid bath levels microscopic peaks internally and externally.', icon: <Zap size={24} style={{ color: '#000' }} /> },
              { num: '05', title: 'Rinse & Acid Passivation', desc: 'Demineralized high-pressure wash stabilizes a high-chromium protective oxide barrier.', icon: <Droplet size={24} style={{ color: '#000' }} /> },
              { num: '06', title: 'Multi-Point QA Testing', desc: 'Profilometer Ra testing, hydrostatic pressure test, ferrite analysis, and borescope inspection.', icon: <ShieldCheck size={24} style={{ color: '#000' }} /> },
              { num: '07', title: 'Traceable Documentation', desc: 'MTC EN 10204 3.1 compiled with chemical, mechanical, and Ra roughness records.', icon: <FileText size={24} style={{ color: '#000' }} /> },
              { num: '08', title: 'Protective Capping & Packing', desc: 'Clean PVC end-capping, heat-shrink sleeves, and seaworthy wooden crating for safe dispatch.', icon: <Package size={24} style={{ color: '#000' }} /> }
            ].map((step, idx) => (
              <div key={idx} className="stage-step-card">
                <div className="stage-badge-circle">
                  {step.icon}
                  <div className="stage-num-tag">
                    {step.num}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: '700', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. STRICT INSPECTION (Styled like Iotaflow Careers 'Why Join Us' Section) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Left 1/3 column */}
            <div>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Strict Inspection</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.25', margin: '0.75rem 0' }}>
                Quality That Stands Up to an Audit
              </h2>
              {/* Rounded Accent Bar like iotaflow/careers */}
              <span style={{ display: 'block', height: '6px', width: '90px', backgroundColor: 'var(--primary-yellow)', borderRadius: '50px', margin: '1rem 0 1.5rem' }}></span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Our zero-defect testing regime ensures every pipe, fitting, and flange leaves our factory with complete chemical, mechanical, and surface records that any auditor or third-party inspection agency can sign off on.
              </p>
              <button 
                onClick={() => onEnquireClick('Sample Test Certificate Request')} 
                className="btn btn-primary" 
                style={{ padding: '0.9rem 2rem', fontWeight: '700' }}
              >
                Request Sample Test Certificate →
              </button>
            </div>

            {/* Right 2/3 column: Grid of inspection checks */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {[
                  "ISO 9001:2015 certified quality management system",
                  "100% PMI spectro testing before any material dispatch",
                  "Ra surface roughness profilometer testing with full surface report",
                  "Hydrostatic leak & proof-pressure testing and passivation check",
                  "Chemical composition spectro analysis and mechanical tensile testing",
                  "EN 10204 3.1 certificates tied directly to mill heat numbers",
                  "Third-party inspection warmly accepted (SGS, TUV, BV, DNV, Lloyd's)"
                ].map((item, idx) => (
                  <div key={idx} className="inspection-card">
                    <span className="inspection-check-badge">
                      <Check size={18} strokeWidth={3} />
                    </span>
                    <span style={{ color: '#e2e8f0', fontSize: '0.92rem', lineHeight: '1.5' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. COMPLETE PORTFOLIO (Normal Product Range with Images Linking to Categories) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Complete Portfolio</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Our Complete Industrial Steel Range
            </h2>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }}></div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: '0 auto' }}>
              Alongside electropolished pipes, Sakshi Forge manufactures 17 certified product categories in stainless, carbon, and duplex alloys:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
            {[
              {
                title: "Industrial Flanges",
                desc: "Weld neck, slip-on, blind, socket weld, lap joint, and threaded flanges to ASME B16.5 & EN 1092.",
                img: "/Stainless Steel Flanges.webp",
                link: "/flanges"
              },
              {
                title: "Forged Steel Fittings",
                desc: "High-pressure forged socket weld and threaded fittings to ASME B16.11 (3000#, 6000#, 9000#).",
                img: "/flanges_pipes.webp",
                link: "/forged-fittings"
              },
              {
                title: "Stainless Steel Elbows",
                desc: "45°, 90°, and 180° return bends in seamless and welded construction for critical directional flow.",
                img: "/Stainless Steel Elbow.webp",
                link: "/stainless-steel-elbow"
              },
              {
                title: "SS Round Bars & Rods",
                desc: "Cold drawn, centerless ground, and precision peeled round bars in SS 304, 316L, 17-4 PH, and Duplex.",
                img: "/Stainless Steel Round Bar.webp",
                link: "/stainless-steel-round-bar"
              },
              {
                title: "Electropolished Pipes & Tubes",
                desc: "Sanitary ASTM A270 & A269 seamless and welded process pipes finished to Ra ≤0.4 µm inside and out.",
                img: "/electropolish_pipes.webp",
                link: "/electropolished-pipes"
              },
              {
                title: "Stainless Fasteners & Coils",
                desc: "Precision hex bolts, heavy nuts, washers, threaded studs, and slit coils in austenitic & duplex grades.",
                img: "/Stainless Steel Fasteners.webp",
                link: "/products"
              }
            ].map((cat, idx) => (
              <div 
                key={idx}
                className="product-card"
                style={{
                  backgroundColor: 'var(--bg-dark-800)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
              >
                <div style={{ height: '200px', width: '100%', overflow: 'hidden', backgroundColor: '#000' }}>
                  <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem', fontWeight: '700' }}>
                    <a href={cat.link} onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {cat.title}
                    </a>
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 1.25rem', flexGrow: 1 }}>
                    {cat.desc}
                  </p>
                  <a 
                    href={cat.link} 
                    onClick={handleLinkClick} 
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.65rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}
                  >
                    Explore Category <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Reference Tools Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border-color)' }}>
            <a href="/products" onClick={handleLinkClick} className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontWeight: '700' }}>
              View All 17 Categories →
            </a>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.88rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>Reference Tools:</span>
              <a href="/pipe-schedule-chart" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}>Pipe Schedule Chart</a>
              <a href="/flange-dimension-chart" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}>Flange Dimension Chart</a>
              <a href="/flange-weight-chart" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}>Flange Weight Chart</a>
              <a href="/flange-bolt-chart" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}>Flange Bolt Chart</a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. GLOBAL & DOMESTIC REACH (Left-aligned Content + Right Image) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left Content */}
            <div style={{ textAlign: 'left' }}>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Global & Domestic Reach</span>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem', lineHeight: '1.25', color: '#fff' }}>
                Supplying India and the World from Mumbai
              </h2>
              <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

              <p style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                Strategically headquartered near Nhava Sheva (JNPT) sea port and Mumbai air freight corridor, we dispatch daily across Indian industrial MIDC belts and export with seaworthy crating to 25+ global countries.
              </p>

              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.92rem', marginBottom: '0.85rem' }}>
                  Major Hubs & Cities We Serve:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {[
                    { name: 'Mumbai Works', path: '/market-area/mumbai' },
                    { name: 'Delhi NCR', path: '/market-area/delhi' },
                    { name: 'Hyderabad', path: '/market-area/hyderabad' },
                    { name: 'Visakhapatnam', path: '/market-area/visakhapatnam' },
                    { name: 'Chennai', path: '/market-area/chennai' },
                    { name: 'Coimbatore', path: '/market-area/coimbatore' },
                    { name: 'Hosur', path: '/market-area/hosur' },
                    { name: 'Cuddalore', path: '/market-area/cuddalore' },
                    { name: 'Pune MIDC', path: '/market-area/pune' },
                    { name: 'Tarapur', path: '/market-area/tarapur' }
                  ].map((c, idx) => (
                    <a
                      key={idx}
                      href={c.path}
                      onClick={handleLinkClick}
                      style={{
                        backgroundColor: 'var(--bg-dark-900)',
                        border: '1px solid var(--border-color)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '6px',
                        color: '#e2e8f0',
                        textDecoration: 'none',
                        fontSize: '0.82rem',
                        fontWeight: '500'
                      }}
                    >
                      {c.name}
                    </a>
                  ))}
                  <a href="/market-area" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', padding: '0.4rem 0.5rem', textDecoration: 'underline', fontWeight: '700' }}>
                    and all 50+ Cities in Directory →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <img 
                  src="/global section.png" 
                  alt="Sakshi Forge Global and Domestic Supply Map" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.5))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CORPORATE PROFILE (Left Image + Right Content + Learn More Button) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left Image */}
            <div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 12px 35px rgba(0,0,0,0.4)', minHeight: '360px' }}>
                <img 
                  src="/about_structure.webp" 
                  alt="Sakshi Forge Corporate Facility Taloja MIDC" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div style={{ textAlign: 'left' }}>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Corporate Profile</span>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem', lineHeight: '1.25', color: '#fff' }}>
                About Sakshi Forge
              </h2>
              <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

              <p style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Sakshi Forge is an ISO 9001:2015 certified manufacturer of electropolished pipes, industrial flanges, forged fittings, round bars and stainless steel components, based in Mumbai, Maharashtra. For 10+ years we have supplied oil and gas, petrochemical, power, pharma and heavy engineering customers who need material they can trust and paperwork they can show an auditor.
              </p>

              {/* Identity notice */}
              <div style={{ backgroundColor: 'var(--bg-dark-800)', borderLeft: '4px solid var(--primary-yellow)', padding: '1.25rem 1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '2rem' }}>
                <div style={{ color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  Independent Identity Notice:
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  Sakshi Forge (Mumbai) is an independent, GST-registered manufacturer. It is not affiliated with Sakshi Tube Fitting (Digha) or Sakshi Metal Industries (Ahmedabad).
                </p>
              </div>

              {/* Learn More Button */}
              <a 
                href="/about-us" 
                onClick={handleLinkClick} 
                className="btn btn-primary"
                style={{ padding: '0.85rem 2rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Learn More About Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FACILITY AUDIT (3 Real Gallery Images with Description Removed) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Facility Audit</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Inside Our Facility
            </h2>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }}></div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: '0 auto' }}>
              Inspect our material inventory, heavy forging presses, in-house electropolishing lab, and QA verification areas.
            </p>
          </div>

          {/* 3 Real Gallery Photos with descriptions removed */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)', height: '280px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img 
                src="/WhatsApp Image 2026-08-13 at 1.35.50 PM.webp" 
                alt="Forged Steel Flange Stock & Machining Facility" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
              />
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)', height: '280px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img 
                src="/WhatsApp Image 2026-08-13 at 1.38.01 PM.webp" 
                alt="Hot Precision Forging Hammer & Furnace Operations" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
              />
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)', height: '280px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img 
                src="/WhatsApp Image 2026-08-13 at 1.48.03 PM.webp" 
                alt="Finished Electropolished Products and Warehouse Inventory" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
              />
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/gallery" onClick={handleLinkClick} className="btn btn-outline" style={{ padding: '0.85rem 2.25rem', fontWeight: '600' }}>
              View Full Gallery & Video Tour →
            </a>
          </div>
        </div>
      </section>

      {/* 15. FAQs (Replaced Questions and Answers with FAQs + Centre-Aligned) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>FAQs</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Electropolished Pipe: Frequently Asked Questions (FAQs)
            </h2>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: '0 auto' }}>
              Technical clarifications regarding electropolishing standards, surface roughness (Ra), alloys, and certified document packs.
            </p>
          </div>

          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: 'var(--bg-dark-800)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '10px', 
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
      </section>

      {/* 16. 30-MINUTE GUARANTEE (Hide direct phone, email, address + Google Maps Link) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>30-Minute Guarantee</span>
              <h2 style={{ fontSize: '2.4rem', margin: '0.75rem 0' }}>
                Tell Us What You Need. We'll Quote in 30 Minutes.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', maxWidth: '750px', margin: '0 auto' }}>
                Submit your grade, size, quantity and surface finish requirements. An engineer will formulate a firm, transparent quotation within 30 minutes.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', alignItems: 'start', marginBottom: '3rem' }}>
              {/* RFQ Form */}
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '2.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                    <CheckCircle2 size={52} style={{ color: '#10b981', margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.5rem' }}>RFQ Received Successfully</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Thank you. Our technical metallurgical team is reviewing your requirements and will return your quote within 30 minutes.
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
                          placeholder="Company / Plant Name"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Phone Number *</label>
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
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Grade & Size *</label>
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
                          placeholder="e.g. 500 meters / 40 lengths"
                          value={formData.quantity}
                          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Message / Spool Drawing Details</label>
                      <textarea 
                        rows="3"
                        placeholder="Mention standard (ASTM A270/A269), Ra roughness requirements, delivery destination, etc."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', resize: 'vertical' }}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem', fontWeight: '700', width: '100%', marginTop: '0.5rem' }}>
                      Submit RFQ for 30-Min Quote <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>

              {/* Location & Map Card (Hidden direct address/phone/email as requested + Google Maps Link) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    <MapPin size={22} /> Factory Location & Navigation
                  </div>
                  <p style={{ margin: '0 0 1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    Our manufacturing unit and testing laboratory is conveniently accessible in the Taloja MIDC industrial corridor, Mumbai. Click below to view live route navigation:
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/yzWiJgEDNj3iNwsB9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 1.2rem', fontWeight: '700', fontSize: '0.9rem' }}
                  >
                    <Compass size={18} style={{ color: 'var(--primary-yellow)' }} /> Open in Google Maps <ExternalLink size={15} />
                  </a>
                </div>

                {/* Embedded Interactive Map Frame */}
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', height: '280px', width: '100%', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
                  <iframe
                    title="Sakshi Forge Factory Location Google Maps"
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
          </div>
        </div>
      </section>

      {/* 17. FOOTER TEXT NOTICE */}
      <section style={{ backgroundColor: 'var(--bg-dark-900)', borderTop: '1px solid var(--border-color)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7' }}>
            Sakshi Forge is an ISO 9001:2015 certified manufacturer of electropolished pipes, industrial flanges, forged fittings, round bars and stainless steel components in Mumbai, India. We deliver 100% PMI-tested material with EN 10204 3.1 MTCs to customers across India and worldwide.
          </div>
        </div>
      </section>

      {/* 18. SIGNATURE ERRORR STRIP LINE AT BOTTOM OF HOMEPAGE */}
      <div 
        className="homepage-errorr-strip" 
        style={{ 
          backgroundColor: '#06080d', 
          borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
          padding: '1.15rem 1rem', 
          textAlign: 'center', 
          fontSize: '0.84rem', 
          color: '#94a3b8' 
        }}
      >
        Designed and Promoted by <a href="https://errorr.in/" rel="nofollow" target="_blank" style={{ color: 'var(--primary-yellow)', fontWeight: '700', textDecoration: 'none' }}>errorr.in</a> • Best Digital Marketing Company in India
      </div>
    </div>
  );
}
