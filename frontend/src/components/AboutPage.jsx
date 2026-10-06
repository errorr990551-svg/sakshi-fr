import React, { useEffect } from 'react';
import { Calendar, CheckSquare, Truck, Handshake, Shield, HelpCircle, FileText, ArrowRight, Phone, MessageSquare, MapPin, Mail, Award, CheckCircle, Factory, ShieldCheck, Cpu } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function AboutPage({ onEnquireClick, hasUnlockedContact = false, onShowContactDetails }) {
  const handleShowContact = onShowContactDetails || (() => onEnquireClick && onEnquireClick('About Page Contact Request'));
  const stats = [
    { number: '10+', label: 'Years' },
    { number: '100+', label: 'Clients' },
    { number: '500+', label: 'Projects Supplied' },
    { number: '5,000+', label: 'Tons Forged Annually' }
  ];

  const processes = [
    { num: '01', title: 'Billet Sizing & Cutting', desc: 'Raw steel bars and blocks from certified mills are sliced to custom weights and dimensions.' },
    { num: '02', title: 'Induction Heating', desc: 'Sized steel pieces are heated uniformly in electronic induction furnaces to optimum hot-forging temperatures.' },
    { num: '03', title: 'Closed & Open Die Forging', desc: 'Heated steel is compressed under heavy hydraulic hammer dies, enhancing internal grain flow and density.' },
    { num: '04', title: 'Normalization Annealing', desc: 'Forged components undergo controlled thermal cycles to stress-relieve the steel and maximize mechanical toughness.' },
    { num: '05', title: 'Precision CNC Machining', desc: 'Flanges and joints are turned on automated CNC lathing centers to match nominal ASME/DIN specifications.' },
    { num: '06', title: 'Drilling & Facings', desc: 'Bolt holes are drilled and joint faces are textured (raised face, RTJ, flat face) with strict precision.' },
    { num: '07', title: 'Non-Destructive Testing (NDT)', desc: 'Ultrasonic, MPI, chemical analysis, and hardness tests verify structural integrity and composition specs.' },
    { num: '08', title: 'Inspections & Packaging', desc: 'Final visual check, dimension auditing, stamping, rust protection coating, and timber boxing for shipping.' }
  ];

  const industries = [
    { name: 'Pharmaceutical and Biotechnology', path: '/industries' },
    { name: 'Food, Dairy and Beverage', path: '/industries' },
    { name: 'Semiconductor', path: '/industries' },
    { name: 'Chemical Processing', path: '/industries' },
    { name: 'Oil and Gas', path: '/industries' },
    { name: 'Petrochemical', path: '/industries' },
    { name: 'Power Generation', path: '/industries' },
    { name: 'Marine and Desalination', path: '/industries' },
    { name: 'Construction and Heavy Engineering', path: '/industries' }
  ];

  const cities = [
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
  ];

  // Schema Injection for AboutPage & Organization
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const existingScript = document.getElementById('about-page-schema');
    if (existingScript) existingScript.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://steelmanufacturer.in/about-us/#webpage",
          "url": "https://steelmanufacturer.in/about-us/",
          "name": "About Sakshi Forge | Electropolished Pipe & Forged Flange Manufacturer, Mumbai",
          "description": "Sakshi Forge is an ISO 9001:2015 manufacturer in Taloja, Mumbai. 10+ years making electropolished pipes, flanges and forged fittings with 100% PMI testing.",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://steelmanufacturer.in/#website",
            "name": "Sakshi Forge",
            "url": "https://steelmanufacturer.in/"
          }
        },
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
          ],
          "sameAs": [
            "https://www.linkedin.com/company/sakshi-forge",
            "https://www.indiamart.com/sakshiforge/"
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.id = 'about-page-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('about-page-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="about-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingTop: '5.5rem' }}>
      {/* 1. HERO */}
      <section className="about-hero" style={{ 
        background: 'linear-gradient(rgba(10, 14, 23, 0.92), rgba(10, 14, 23, 0.95)), url(/hero_bg.webp) center/cover',
        padding: '4.5rem 0 3.5rem 0',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '950px' }}>
            <span className="hero-tag" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', color: 'var(--primary-yellow)', border: '1px solid rgba(255,193,7,0.3)', padding: '0.4rem 1rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', fontWeight: '700', display: 'inline-block', marginBottom: '1.25rem' }}>
              ISO 9001:2015 Certified Manufacturer · Taloja MIDC, Mumbai
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', lineHeight: '1.2', color: '#fff', marginBottom: '1.25rem' }}>
              About Sakshi Forge: Electropolished Pipe and Forged Steel Manufacturer in Mumbai
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '2rem' }}>
              We make stainless steel pipes, flanges and fittings for the people who have to sign off on them. Every product leaves our Taloja facility with its test certificate, its heat number and a surface report you can put in front of an auditor.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button onClick={() => onEnquireClick('About Page Hero Quote')} className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontWeight: '700' }}>
                Request a Quote <ArrowRight size={16} />
              </button>
              <a href="/catalogue" onClick={handleLinkClick} className="btn btn-outline" style={{ padding: '0.85rem 1.75rem', fontWeight: '600' }}>
                Download Catalogue
              </a>
            </div>

            {/* Stats strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', paddingTop: '1.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
              {stats.map((s, idx) => (
                <div key={idx} style={{ borderLeft: '3px solid var(--primary-yellow)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1.1' }}>{s.number}</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem', fontWeight: '600' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Direct Manufacturer</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              A Manufacturer You Can Visit, Question and Audit
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>
            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Sakshi Forge is an ISO 9001:2015 certified manufacturer based in Taloja MIDC, Mumbai, Maharashtra. We make electropolished stainless steel pipes and tubes, industrial flanges, forged fittings, butt weld fittings, SS elbows, round bars and plates.
            </p>
            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Most buyers know us first for electropolished pipes, the clean, mirror-finish tubing used in pharma, food, dairy, semiconductor and chemical plants. Our forging work supplies oil and gas, petrochemical, power and heavy engineering customers who need the same thing: material that matches its paperwork.
            </p>
            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 0 }}>
              We are not a trading house. We forge, machine, electropolish and test in our own facility, so when you ask a question about your order, the person answering has actually seen the material.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & PULL-QUOTE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Our Journey</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              How Sakshi Forge Got Here
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>
            
            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Sakshi Forge started with a simple idea: industrial buyers should get steel that matches its paperwork. Over 10+ years, we have built that idea into a manufacturing business in Taloja, Mumbai.
            </p>
            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              We began with forged flanges and fittings, products where tolerance, material grade and traceability decide whether a pipeline is safe. That discipline shaped everything we did next.
            </p>
            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              As customers in pharma, food, dairy and process industries asked for cleaner, more corrosion-resistant piping, we moved into <a href="/electropolished-pipes" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'underline', fontWeight: '600' }}>electropolished pipes and tubes</a> and built the process in-house. Controlling forging, machining, electropolishing and testing ourselves meant we could stand behind every certificate we issued.
            </p>
            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Today we supply 100+ clients across India and export to the USA, UAE, Europe and Southeast Asia. We have delivered 500+ projects, and the aim is still the same as on day one: material you can trust and answers you can rely on.
            </p>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', borderLeft: '4px solid var(--primary-yellow)', padding: '1.25rem 1.5rem', borderRadius: '0 8px 8px 0', margin: '1.5rem 0 2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-yellow)', marginBottom: '0.4rem' }}>10+ years of growth</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                From standard flanges to custom-engineered components and a full electropolished range, we have grown by doing the basics well: right material, right testing, right delivery.
              </p>
            </div>

            {/* Pull Quote Block */}
            <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.05)', border: '1px solid rgba(255, 193, 7, 0.3)', borderRadius: '12px', padding: '2.5rem', textAlign: 'center', margin: '2.5rem 0' }}>
              <blockquote style={{ fontSize: '1.4rem', fontStyle: 'italic', fontWeight: '600', color: '#fff', lineHeight: '1.6', margin: '0 0 1rem' }}>
                "We don't want to be the cheapest supplier. We want to be the one whose certificates you never have to question."
              </blockquote>
              <div style={{ fontWeight: '800', color: 'var(--primary-yellow)', fontSize: '1.05rem' }}>Rahul Jain</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CEO, Sakshi Forge</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION AND VALUES */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Foundational Values</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              What We Stand For
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p style={{ fontSize: '1.15rem', color: '#fff', fontWeight: '600', lineHeight: '1.7', marginBottom: '2rem', padding: '1.25rem', backgroundColor: 'var(--bg-dark-800)', borderRadius: '8px', borderLeft: '4px solid var(--primary-yellow)' }}>
              <strong>Our mission:</strong> To deliver high-performance industrial steel products with uncompromised quality, competitive pricing and dependable service, and to build long-term partnerships with our clients.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Honest paperwork</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Every claim on a certificate is something we have tested. If a product is not suitable for an application, we say so. That is why our product pages list service limitations.
                </p>
              </div>

              <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Precision over speed</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  We would rather reject a batch than ship one that is slightly out of tolerance.
                </p>
              </div>

              <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Straight answers</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Technical questions get technical answers, and quotes come within 30 minutes.
                </p>
              </div>

              <div className="feature-card" style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Long relationships</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  We win repeat orders by consistency, not discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE MANUFACTURE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Manufacturing Capabilities</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Our Product Range
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
                  <a href="/electropolished-pipes" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'none' }}>
                    Electropolished Pipes and Tubes
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                  SS 304/304L, 316/316L, Duplex 2205 and Super Duplex. Welded and seamless. Ra ≤0.4 µm, inside and out.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
                  <a href="/industrial-flanges" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'none' }}>
                    Industrial Flanges
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                  Weld neck, slip-on, blind, socket weld, threaded and lap joint flanges to ASME B16.5.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
                  <a href="/forged-fittings" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'none' }}>
                    Forged Steel Fittings
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                  ASME B16.11 forged fittings and butt weld fittings.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
                  <a href="/stainless-steel-elbow" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'none' }}>
                    SS Elbows
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                  45°, 90° and 180° in seamless and welded construction.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
                  <a href="/round-bars" onClick={handleLinkClick} style={{ color: 'var(--primary-yellow)', textDecoration: 'none' }}>
                    Round Bars, Rods and Plates
                  </a>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                  Carbon, alloy and stainless steel in standard and forged condition.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
                  Custom Forged Components
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                  Made to your drawing in stainless, carbon and duplex steel.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="/products" onClick={handleLinkClick} className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontWeight: '700' }}>
                View All Products <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR FACILITY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Facility Audit</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Inside Our Taloja Manufacturing Facility
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.75rem' }}>
              Forging, machining, heat treatment, electropolishing and testing all happen under one roof. That means no outsourced steps, no waiting on third parties and no gaps in traceability.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {[
                'Hydraulic forging and induction heating for consistent grain flow and density',
                'Controlled heat treatment (normalising and annealing) for uniform structure',
                'CNC machining for tight tolerances on faces, bores and bolt holes',
                'In-house electropolishing line for pipes and fittings, inside and out',
                'Testing and inspection area for PMI, Ra, hydro, ultrasonic and chemical analysis',
                'Material storage and export packing area'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'var(--bg-dark-800)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.5' }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Facility & Product Inspection Photos Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img src="/about_history.webp" alt="Heavy hydraulic forging press and billet inventory at Sakshi Forge, Taloja MIDC" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', fontSize: '0.82rem', color: '#e2e8f0' }}>Heavy hydraulic forging press and billet inventory at Taloja Works</div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img src="/about_structure.webp" alt="CNC machining and turning line for ASME B16.5 flanges at Sakshi Forge, Taloja" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', fontSize: '0.82rem', color: '#e2e8f0' }}>CNC automated machining centers & facing lathes</div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img src="/WhatsApp Image 2026-10-03 at 9.37.31 PM.webp" alt="SS 316L seamless end caps 50NB SCH40 with heat number SFE50 stamped at Sakshi Forge" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', fontSize: '0.82rem', color: '#e2e8f0' }}>SS 316L 50NB SCH40 seamless end caps with Heat No: SFE50 mill stamp</div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img src="/WhatsApp Image 2026-10-03 at 9.37.32 PM.webp" alt="Internal electropolished surface and bevelled edge inspection of seamless pipe end caps" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', fontSize: '0.82rem', color: '#e2e8f0' }}>Internal bore & bevelled edge inspection of high-purity end caps</div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img src="/WhatsApp Image 2026-10-03 at 9.43.30 PM.webp" alt="Sakshi Forge laser branded 50NB SCH40 316L seamless end cap for process lines" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', fontSize: '0.82rem', color: '#e2e8f0' }}>Sakshi Forge branded 50NB SCH40 316L seamless end cap</div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark-900)' }}>
                <img src="/electropolish_pipes.webp" alt="In-house electropolishing line, QA inspection and export staging area at Sakshi Forge" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-dark-800)', fontSize: '0.82rem', color: '#e2e8f0' }}>Electropolishing line, QA inspection and export staging area</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR MANUFACTURING PROCESS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Process Workflow</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              From Billet to Dispatch
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.08)', border: '1px solid rgba(255, 193, 7, 0.25)', padding: '1.25rem 1.5rem', borderRadius: '8px', marginBottom: '2.5rem' }}>
              <p style={{ margin: 0, color: '#fff', fontSize: '1rem', lineHeight: '1.6' }}>
                "For electropolished pipes, the process adds cleaning, electropolishing, passivation and Ra testing after machining, so the finished surface is verified before it leaves the plant."
              </p>
            </div>

            <div className="about-process-grid">
              {processes.map((p, idx) => (
                <div 
                  key={idx} 
                  className="feature-card" 
                  style={{ 
                    backgroundColor: 'var(--bg-dark-900)', 
                    padding: '1.75rem 1.25rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.75rem',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-yellow)', fontFamily: 'monospace' }}>
                      {p.num}
                    </span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-yellow)' }}></span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-primary)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: '1', margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. QUALITY AND CERTIFICATIONS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Auditable Standards</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Quality You Can Verify
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.75rem' }}></div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {[
                'ISO 9001:2015 certified quality management system',
                '100% PMI testing on every consignment',
                'EN 10204 3.1 MTCs with full mill traceability',
                'Ra surface roughness, hydro, passivation and ferrite testing on electropolished products',
                'Ultrasonic and MPI testing on forged items',
                'Chemical and mechanical analysis to the specified standard',
                'Third-party inspection accepted on request (SGS, TUV, BV, DNV, Lloyd\'s)'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'var(--bg-dark-800)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--primary-yellow)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.5' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ textAlign: 'center' }}>
              <button onClick={() => onEnquireClick('Sample Test Certificate Request')} className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontWeight: '700' }}>
                Request a Sample Test Certificate <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES WE SERVE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Sectors</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Industries That Rely on Sakshi Forge
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              {industries.map((ind, idx) => (
                <a 
                  key={idx} 
                  href={ind.path} 
                  onClick={handleLinkClick}
                  style={{
                    backgroundColor: 'var(--bg-dark-900)',
                    border: '1px solid var(--border-color)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '50px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary-yellow)'; e.currentTarget.style.color = 'var(--primary-yellow)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = '#fff'; }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-yellow)' }}></span>
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. LEADERSHIP AND TEAM */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Our Leadership & Plant Team</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              The People Behind the Product
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(255, 193, 7, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary-yellow)' }}>
                  <Award size={28} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.25rem' }}>Rahul Jain</h3>
                <div style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>CEO, Sakshi Forge</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Rahul leads Sakshi Forge with a focus on quality, transparency and long-term customer relationships. He believes a manufacturer earns trust by sharing test data openly, answering technical questions directly and delivering what was promised.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(255, 193, 7, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary-yellow)' }}>
                  <ShieldCheck size={28} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.25rem' }}>Quality and Technical Team</h3>
                <div style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Metallurgical & QA Division</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Our QA and engineering team checks every consignment before it leaves the plant. They run PMI, surface roughness, hydro and chemical tests, and prepare the certificates and inspection reports that come with your order. They are also the people who answer your technical questions when you call.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(255, 193, 7, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary-yellow)' }}>
                  <Factory size={28} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.25rem' }}>Production and Dispatch Team</h3>
                <div style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Shop-Floor & Logistics Unit</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  From forging and CNC machining to electropolishing, packing and export documentation, our shop-floor team handles each order in-house, so there are no handoffs to outside vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHY PARTNER WITH US */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Client Benefits</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Why Customers Come Back
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.4rem' }}>One vendor for pipes, fittings and flanges</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>One set of documents, one dispatch.</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.4rem' }}>In-house control</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Forging, machining, electropolishing and testing under one roof.</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.4rem' }}>Custom work done properly</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Special sizes, alloys and drawings supported.</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.4rem' }}>Fast, clear quotes</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>30-minute quote guarantee.</p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-yellow)', marginBottom: '0.4rem' }}>Export experience</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Supplying the USA, UAE, Europe and Southeast Asia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHERE WE SUPPLY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Logistics Network</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Based in Mumbai, Supplying India and the World
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p className="about-p" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We deliver across India, with regular supply to Mumbai, Delhi NCR, Hyderabad, Visakhapatnam and Indore, and export to the USA, UAE, Europe and Southeast Asia.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
              {cities.map((c, idx) => (
                <a 
                  key={idx} 
                  href={c.path} 
                  onClick={handleLinkClick}
                  style={{
                    backgroundColor: 'var(--bg-dark-800)',
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    color: 'var(--primary-yellow)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. IDENTITY NOTICE */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2.5rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto', backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>Please Note</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Sakshi Forge (Mumbai) is an independent, GST-registered manufacturer. It is not affiliated with Sakshi Tube Fitting (Digha) or Sakshi Metal Industries (Ahmedabad).
            </p>
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto', backgroundColor: 'var(--bg-dark-800)', padding: '3rem 2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Get a Factory-Direct Quote</span>
              <h2 style={{ fontSize: '2.2rem', margin: '0.75rem 0' }}>Let's Talk About Your Project</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                Send us your grade, size, quantity and standard. We'll quote within 30 minutes.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <button onClick={() => onEnquireClick('About Page Bottom RFQ')} className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontWeight: '700' }}>
                  Request RFQ <ArrowRight size={16} />
                </button>
                <button 
                  onClick={handleShowContact} 
                  className="btn btn-outline" 
                  style={{ padding: '0.85rem 2rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
                >
                  <Phone size={16} /> Show Contact Details
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                  <MapPin size={16} /> Factory Address
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  Balaji Industrial Compound, Taloja MIDC, Mumbai, Maharashtra 410208
                </p>
              </div>

              {hasUnlockedContact ? (
                <>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                      <Phone size={16} /> Direct Phones
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      <a href="tel:+918291366340" style={{ color: 'inherit', textDecoration: 'none' }}>+91 82913 66340</a> | <a href="tel:+917976476375" style={{ color: 'inherit', textDecoration: 'none' }}>+91 79764 76375</a>
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                      <Mail size={16} /> Email
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      <a href="mailto:sales@steelmanufacturer.in" style={{ color: 'inherit', textDecoration: 'none' }}>sales@steelmanufacturer.in</a>
                    </p>
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button
                    onClick={handleShowContact}
                    className="btn btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.8rem 1.4rem',
                      fontSize: '0.85rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      boxShadow: '0 4px 15px rgba(255, 193, 7, 0.2)'
                    }}
                  >
                    <Phone size={16} /> Show Contact Details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
