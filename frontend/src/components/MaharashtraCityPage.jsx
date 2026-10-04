import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowRight, ShieldCheck, Award, FileText, CheckCircle2, ChevronDown, 
  ChevronUp, MapPin, Phone, Mail, Clock, Download, ExternalLink, HelpCircle, 
  Layers, Factory, Globe, Truck, Check, AlertTriangle, MessageSquare, Calculator,
  SlidersHorizontal, Sparkles, Filter
} from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function MaharashtraCityPage({ cityData, onEnquireClick }) {
  const [openFaq, setOpenFaq] = useState(0);
  
  // Interactive Spec Table Filters
  const [selectedGrade, setSelectedGrade] = useState('ALL');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedOD, setSelectedOD] = useState('ALL');

  // Pipe Weight & Ra Converter Widget State
  const [calcGrade, setCalcGrade] = useState('0.02507'); // 316L default
  const [calcOD, setCalcOD] = useState('25.4');
  const [calcWT, setCalcWT] = useState('1.65');
  const [calcLen, setCalcLen] = useState('6');
  const [raUm, setRaUm] = useState('0.4');
  const [raUin, setRaUin] = useState('15.7');

  // RFQ Form State
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

  // Weight Calculation
  const weightResult = useMemo(() => {
    const k = parseFloat(calcGrade);
    const od = parseFloat(calcOD);
    const wt = parseFloat(calcWT);
    const len = parseFloat(calcLen);
    if (!(od > 0) || !(wt > 0) || wt >= od / 2) {
      return { error: 'Check OD and wall thickness.' };
    }
    const kgm = (od - wt) * wt * k;
    const total = len > 0 ? kgm * len : 0;
    return {
      kgm: kgm.toFixed(3),
      total: total.toFixed(2),
      length: len
    };
  }, [calcGrade, calcOD, calcWT, calcLen]);

  // Ra Calculations
  const handleRaUmChange = (val) => {
    setRaUm(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      const uin = (num * 39.3701).toFixed(1);
      setRaUin(uin);
    }
  };

  const handleRaUinChange = (val) => {
    setRaUin(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      const um = (num / 39.3701).toFixed(3);
      setRaUm(um);
    }
  };

  const rmsValue = useMemo(() => {
    const uin = parseFloat(raUin);
    if (isNaN(uin) || uin < 0) return '0.0';
    return (uin * 1.11).toFixed(1);
  }, [raUin]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (onEnquireClick) {
      onEnquireClick(`${cityData.city} RFQ: ${formData.gradeAndSize} (${formData.quantity}) - ${formData.company}`);
    }
  };

  const handleWidgetEnquiry = () => {
    const gradeName = calcGrade === '0.02491' ? 'SS 304L' : calcGrade === '0.02450' ? 'Duplex 2205' : 'SS 316L';
    const note = `${cityData.city} Calc: ${gradeName}, OD ${calcOD}mm x WT ${calcWT}mm, Length ${calcLen}m (Weight: ${weightResult.kgm} kg/m)`;
    if (onEnquireClick) {
      onEnquireClick(note);
    }
  };

  // Structured Schema Injection (LocalBusiness + Product + FAQPage)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const existingScript = document.getElementById('maharashtra-city-schema');
    if (existingScript) existingScript.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://steelmanufacturer.in/#org",
          "name": "Sakshi Forge",
          "url": "https://steelmanufacturer.in/",
          "telephone": "+918291366340",
          "email": "sakshiforge1737@gmail.com",
          "description": "ISO 9001:2015 certified manufacturer of electropolished stainless steel pipes and tubes, industrial flanges and forged fittings.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Balaji Industrial Compound, Taloja MIDC",
            "addressLocality": "Navi Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "410208",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "City", "name": cityData.city },
            { "@type": "AdministrativeArea", "name": "Maharashtra" }
          ]
        },
        {
          "@type": "Product",
          "@id": `https://steelmanufacturer.in${cityData.pageUrl}#product`,
          "name": `Electropolished SS 316L / 304L Pipes and Tubes - ${cityData.city}`,
          "description": `Welded and seamless electropolished stainless steel pipes and tubes supplied to ${cityData.city}, finished to Ra ≤0.4 µm with EN 10204 3.1 MTC and 100% PMI testing.`,
          "brand": { "@type": "Brand", "name": "Sakshi Forge" },
          "manufacturer": { "@id": "https://steelmanufacturer.in/#org" },
          "material": "SS 316L (UNS S31603 / 1.4404), SS 304L (UNS S30403 / 1.4307), Duplex 2205 (UNS S31803 / 1.4462)",
          "category": "Electropolished stainless steel pipes and tubes",
          "additionalProperty": [
            { "@type": "PropertyValue", "name": "Internal surface roughness (Ra)", "maxValue": 0.4, "unitCode": "4H", "unitText": "µm" },
            { "@type": "PropertyValue", "name": "Manufacturing standards", "value": "ASTM A269, ASTM A270, ASTM A790" },
            { "@type": "PropertyValue", "name": "Material certificate", "value": "EN 10204 3.1" },
            { "@type": "PropertyValue", "name": "Testing", "value": "100% PMI, Ra test, hydro test, passivation verification, ferrite check" },
            { "@type": "PropertyValue", "name": "Types", "value": "Welded and seamless" },
            { "@type": "PropertyValue", "name": "Size range (OD)", "value": "1/2 inch to 12 inch" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": (cityData.faqs || []).map(f => ({
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
    script.id = 'maharashtra-city-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('maharashtra-city-schema');
      if (el) el.remove();
    };
  }, [cityData]);

  // Core Specification table rows with filterable data attributes
  const coreSpecRows = [
    { grade: 'SS 316L', type: 'Welded', od: '½" to 2" (12.7–50.8 mm)', wt: '1.65 mm / SCH 10S', ra: '≤0.4 µm (SF4)', standard: 'ASTM A269 / A270, ASME BPE' },
    { grade: 'SS 316L', type: 'Seamless', od: '½" to 2" (12.7–50.8 mm)', wt: '1.65–2.77 mm / SCH 40S', ra: '≤0.4 µm (SF4)', standard: 'ASTM A269, ASME BPE' },
    { grade: 'SS 316L', type: 'Welded', od: '2½" to 6" (63.5–152.4 mm)', wt: '2.11–2.77 mm / SCH 10S', ra: '≤0.4 µm', standard: 'ASTM A269 / A270' },
    { grade: 'SS 316L', type: 'Seamless', od: '2½" to 6" (63.5–152.4 mm)', wt: '2.77–3.05 mm / SCH 40S', ra: '≤0.4 µm', standard: 'ASTM A269' },
    { grade: 'SS 304L', type: 'Welded', od: '½" to 2" (12.7–50.8 mm)', wt: '1.65 mm / SCH 10S', ra: '≤0.4 µm', standard: 'ASTM A269 / A270' },
    { grade: 'SS 304L', type: 'Seamless', od: '½" to 2" (12.7–50.8 mm)', wt: '1.65–2.11 mm', ra: '≤0.4 µm', standard: 'ASTM A269' },
    { grade: 'SS 304L', type: 'Welded', od: '2½" to 6" (63.5–152.4 mm)', wt: '2.11–2.77 mm', ra: '≤0.4 µm', standard: 'ASTM A269 / A270' },
    { grade: 'SS 304L', type: 'Welded', od: '8" to 12" (219.1–323.9 mm)', wt: '2.77–3.05 mm', ra: '≤0.4 µm', standard: 'ASTM A269' },
    { grade: 'Duplex 2205', type: 'Welded', od: '½" to 2" (12.7–50.8 mm)', wt: '1.65–2.11 mm', ra: '≤0.4 µm', standard: 'ASTM A790' },
    { grade: 'Duplex 2205', type: 'Seamless', od: '½" to 4" (12.7–101.6 mm)', wt: '2.11–3.05 mm', ra: '≤0.4 µm', standard: 'ASTM A790' },
    { grade: 'Duplex 2205', type: 'Welded', od: '4" to 8" (101.6–219.1 mm)', wt: '2.77–3.76 mm', ra: '≤0.4 µm', standard: 'ASTM A790' }
  ];

  const filteredSpecRows = useMemo(() => {
    return coreSpecRows.filter(row => {
      if (selectedGrade !== 'ALL' && !row.grade.includes(selectedGrade)) return false;
      if (selectedType !== 'ALL' && row.type !== selectedType) return false;
      if (selectedOD === 'SMALL' && !row.od.includes('½" to 2"')) return false;
      if (selectedOD === 'MEDIUM' && !row.od.includes('2½" to 6"') && !row.od.includes('½" to 4"')) return false;
      if (selectedOD === 'LARGE' && !row.od.includes('8" to 12"') && !row.od.includes('4" to 8"')) return false;
      return true;
    });
  }, [selectedGrade, selectedType, selectedOD]);

  const nearbyCities = [
    { name: 'Mumbai', path: '/electropolished-pipe-manufacturer-mumbai' },
    { name: 'Thane', path: '/electropolished-pipe-manufacturer-thane' },
    { name: 'Pune', path: '/electropolished-pipe-manufacturer-pune' },
    { name: 'Tarapur', path: '/electropolished-pipe-manufacturer-tarapur' },
    { name: 'Nashik', path: '/electropolished-pipe-manufacturer-nashik' },
    { name: 'Aurangabad', path: '/electropolished-pipe-manufacturer-aurangabad' }
  ].filter(c => c.name.toLowerCase() !== cityData.slug);

  return (
    <div className="maharashtra-city-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingTop: '5.5rem' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        background: 'linear-gradient(rgba(10, 14, 23, 0.92), rgba(10, 14, 23, 0.96)), url("/hero_forge.webp") center/cover',
        padding: '5rem 0 3.5rem 0',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative'
      }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <a href="/" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <a href="/electropolished-pipes" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Electropolished Pipes</a>
            <span>›</span>
            <span>Maharashtra</span>
            <span>›</span>
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>{cityData.city}</span>
          </div>

          <div style={{ maxWidth: '980px' }}>
            <span style={{ 
              backgroundColor: 'rgba(255, 193, 7, 0.1)', 
              color: 'var(--primary-yellow)', 
              border: '1px solid rgba(255, 193, 7, 0.3)',
              padding: '0.4rem 1rem', 
              borderRadius: '4px', 
              fontSize: '0.8rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.25rem'
            }}>
              <Factory size={14} />
              ISO 9001:2015 Manufacturer · Taloja MIDC Works
            </span>

            <h1 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              fontWeight: '850', 
              lineHeight: '1.18', 
              marginBottom: '1.25rem',
              color: '#ffffff'
            }}>
              {cityData.h1}
            </h1>

            <p style={{ color: '#cbd5e1', fontSize: '1.12rem', lineHeight: '1.75', marginBottom: '2rem' }}>
              {cityData.subHeadline}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button 
                onClick={() => onEnquireClick(`Hero Quote Request for ${cityData.city}`)} 
                className="btn btn-primary btn-lg" 
                style={{ padding: '0.9rem 1.85rem', fontWeight: '700' }}
              >
                Get a {cityData.city} Quote in 30 Minutes <ArrowRight size={16} />
              </button>
              <a 
                href="/catalogue" 
                onClick={handleLinkClick} 
                className="btn btn-outline btn-lg" 
                style={{ padding: '0.9rem 1.85rem', fontWeight: '600' }}
              >
                <Download size={16} /> Download Catalogue
              </a>
              <a 
                href="https://wa.me/918291366340?text=Hello%20Sakshi%20Forge,%20I%20need%20a%20quote%20for%20electropolished%20pipes%20for%20our%20plant" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline" 
                style={{ padding: '0.9rem 1.5rem', fontWeight: '600', color: '#25D366', borderColor: '#25D366' }}
              >
                <MessageSquare size={16} /> WhatsApp Sales
              </a>
            </div>

            {/* Trust strip */}
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.04)', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              borderRadius: '8px', 
              padding: '0.9rem 1.25rem', 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              gap: '0.75rem 1.25rem', 
              fontSize: '0.85rem', 
              color: '#e2e8f0' 
            }}>
              <span style={{ color: 'var(--primary-yellow)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Verified Quality:</span>
              {cityData.trustStrip.map((item, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span style={{ color: 'var(--text-muted)' }}>•</span>}
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL SUPPLY CAPABILITY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Regional Capability</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              {cityData.regionalCapability.title}
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '1.5rem' }}></div>

            <p style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
              {cityData.regionalCapability.description}
            </p>

            {/* Zone Mapping Table */}
            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '2.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-dark-700)', color: 'var(--primary-yellow)' }}>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Zone / MIDC</th>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Typical End-Use</th>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Application</th>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Our Usual Spec</th>
                  </tr>
                </thead>
                <tbody>
                  {cityData.regionalCapability.zones.map((z, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'var(--bg-dark-900)' : 'transparent' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#fff' }}>{z.zone}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>{z.endUse}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>{z.application}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--primary-yellow)', fontWeight: '600' }}>{z.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Application Blurbs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {cityData.regionalCapability.applications.map((app, idx) => (
                <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-yellow)', marginBottom: '0.5rem' }}>
                    {app.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Local Buying Notes */}
            <div style={{ backgroundColor: 'var(--bg-dark-900)', borderLeft: '4px solid var(--primary-yellow)', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
              <div style={{ color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Local Buying Notes for {cityData.city}:
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.7' }}>
                {cityData.regionalCapability.localNotes.map((note, idx) => (
                  <li key={idx} style={{ marginBottom: '0.35rem' }}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATION TABLES */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Technical Parameters</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Technical Specification Tables
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2.5rem' }}></div>

            {/* 4A. Grades Table */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '1rem' }}>
                4A. Stainless Steel & Duplex Material Grades
              </h3>
              <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-dark-800)', color: 'var(--primary-yellow)' }}>
                      <th style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Grade</th>
                      <th style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>UNS</th>
                      <th style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>WNR (EN)</th>
                      <th style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Typical Process Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: '700', color: '#fff' }}>SS 316L</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>S31603</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>1.4404</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: '#e2e8f0' }}>Pharma, biotech, WFI loops, chloride or aggressive cleaning chemicals</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: '700', color: '#fff' }}>SS 304L</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>S30403</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>1.4307</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: '#e2e8f0' }}>Dairy, food, beverage, winery, general hygienic & utility lines</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: '700', color: '#fff' }}>Duplex 2205</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>S31803 / S32205</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>1.4462</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: '#e2e8f0' }}>High yield strength, extreme chloride resistance, chemical & coastal duty</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: '700', color: '#fff' }}>Super Duplex</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>S32750 / S32760</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>1.4410 / 1.4501</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: '#e2e8f0' }}>High-pressure aggressive acids, offshore, harsh petrochemical streams</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4B. Surface Roughness Table */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '1rem' }}>
                4B. Surface Roughness: Industry Reference vs Sakshi Forge Offer
              </h3>
              <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '0.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-dark-800)', color: 'var(--primary-yellow)' }}>
                      <th style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Service</th>
                      <th style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Typical Industry Band</th>
                      <th style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Ra µin (exact)</th>
                      <th style={{ padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Sakshi Forge Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: '700', color: '#fff' }}>Pharma / biotech</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>Ra ≤0.25 to ≤0.4 µm</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>9.8 to 15.7 µin</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--primary-yellow)', fontWeight: '600', backgroundColor: 'rgba(255, 193, 7, 0.04)' }}>Standard: ≤0.4 µm (ASME BPE SF4)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: '700', color: '#fff' }}>Dairy / food / beverage</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>Ra ≤0.6 to ≤0.8 µm</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>23.6 to 31.5 µin</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--primary-yellow)', fontWeight: '600', backgroundColor: 'rgba(255, 193, 7, 0.04)' }}>Within standard offer (≤0.4 µm)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: '700', color: '#fff' }}>Semiconductor / UHP</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>Ra ≤0.13 to ≤0.25 µm</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--text-secondary)' }}>5.1 to 9.8 µin</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--primary-yellow)', fontWeight: '600', backgroundColor: 'rgba(255, 193, 7, 0.04)' }}>Available on custom drawing spec</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <small style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>
                Conversions: 1 µm = 39.3701 µin; RMS (µin) ≈ Ra (µin) × 1.11. Example: Ra 0.4 µm = 15.75 µin Ra ≈ 17.5 µin RMS.
              </small>
            </div>

            {/* 4C. Weight Formula and Illustrative Dimensions */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.5rem' }}>
                4C. Weight Formula and Illustrative Dimensions
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1rem' }}>
                Weight (kg/m) = (OD − WT) × WT × K, where K = 0.02491 (304/304L, 7.93 g/cm³), 0.02507 (316/316L, 7.98 g/cm³) and 0.02450 (Duplex 2205, 7.80 g/cm³).
              </p>
              <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-dark-800)', color: 'var(--primary-yellow)' }}>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Nominal Size</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>OD (mm)</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>WT (mm)</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>304L (kg/m)</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>316L (kg/m)</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Duplex 2205 (kg/m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { nom: '½"', od: '12.7', wt: '1.65', w304: '0.454', w316: '0.457', wDup: '0.447' },
                      { nom: '¾"', od: '19.05', wt: '1.65', w304: '0.715', w316: '0.720', wDup: '0.703' },
                      { nom: '1"', od: '25.4', wt: '1.65', w304: '0.976', w316: '0.982', wDup: '0.960' },
                      { nom: '1½"', od: '38.1', wt: '1.65', w304: '1.498', w316: '1.508', wDup: '1.473' },
                      { nom: '2"', od: '50.8', wt: '1.65', w304: '2.020', w316: '2.033', wDup: '1.987' }
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'var(--bg-dark-900)' : 'transparent' }}>
                        <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: '#fff' }}>{row.nom}</td>
                        <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>{row.od}</td>
                        <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>{row.wt}</td>
                        <td style={{ padding: '0.85rem 1.25rem', color: '#e2e8f0' }}>{row.w304}</td>
                        <td style={{ padding: '0.85rem 1.25rem', color: 'var(--primary-yellow)', fontWeight: '600' }}>{row.w316}</td>
                        <td style={{ padding: '0.85rem 1.25rem', color: '#e2e8f0' }}>{row.wDup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4D. Interactive Filterable Core Specification Table */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: '#fff', margin: 0 }}>
                    4D. Core Technical Specifications
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                    Interactive specification explorer with live filters (DOM-preserved for search indexing)
                  </p>
                </div>

                {/* Filters */}
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary-yellow)', fontSize: '0.8rem', fontWeight: '700' }}>
                    <Filter size={14} /> Filter:
                  </div>
                  <select 
                    value={selectedGrade} 
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', padding: '0.4rem 0.65rem', borderRadius: '4px', fontSize: '0.82rem' }}
                  >
                    <option value="ALL">All Grades</option>
                    <option value="316L">SS 316L</option>
                    <option value="304L">SS 304L</option>
                    <option value="Duplex">Duplex 2205</option>
                  </select>

                  <select 
                    value={selectedType} 
                    onChange={(e) => setSelectedType(e.target.value)}
                    style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', padding: '0.4rem 0.65rem', borderRadius: '4px', fontSize: '0.82rem' }}
                  >
                    <option value="ALL">All Types</option>
                    <option value="Welded">Welded</option>
                    <option value="Seamless">Seamless</option>
                  </select>

                  <select 
                    value={selectedOD} 
                    onChange={(e) => setSelectedOD(e.target.value)}
                    style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', padding: '0.4rem 0.65rem', borderRadius: '4px', fontSize: '0.82rem' }}
                  >
                    <option value="ALL">All ODs</option>
                    <option value="SMALL">½" to 2"</option>
                    <option value="MEDIUM">2½" to 6"</option>
                    <option value="LARGE">8" to 12"</option>
                  </select>
                </div>
              </div>

              <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-dark-800)', color: 'var(--primary-yellow)' }}>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Grade</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Type</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>OD Range</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Wall / Schedule</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Internal Ra</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Standards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coreSpecRows.map((row, idx) => {
                      const isVisible = filteredSpecRows.includes(row);
                      return (
                        <tr 
                          key={idx} 
                          data-grade={row.grade}
                          data-type={row.type}
                          data-od={row.od}
                          data-ra={row.ra}
                          data-standard={row.standard}
                          style={{ 
                            borderBottom: '1px solid var(--border-color)', 
                            display: isVisible ? 'table-row' : 'none',
                            backgroundColor: idx % 2 === 0 ? 'var(--bg-dark-900)' : 'transparent'
                          }}
                        >
                          <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: row.grade.includes('316') ? 'var(--primary-yellow)' : '#fff' }}>{row.grade}</td>
                          <td style={{ padding: '0.85rem 1.25rem', color: '#cbd5e1' }}>{row.type}</td>
                          <td style={{ padding: '0.85rem 1.25rem', color: '#cbd5e1' }}>{row.od}</td>
                          <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>{row.wt}</td>
                          <td style={{ padding: '0.85rem 1.25rem', color: 'var(--primary-yellow)', fontWeight: '600' }}>{row.ra}</td>
                          <td style={{ padding: '0.85rem 1.25rem', color: '#94a3b8' }}>{row.standard}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Service Limits */}
              <div style={{ marginTop: '1.25rem', padding: '1rem 1.25rem', backgroundColor: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <AlertTriangle size={16} /> Service Limitations (Told Upfront):
                </div>
                <div style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  Avoid use with hydrofluoric acid. Not recommended for abrasive transport or abrasive slurries. Not for structural applications or high-impact wear. Handle with protective sleeves to avoid mechanical scratch damage.
                </div>
              </div>
            </div>

            {/* 4E. LIVE WIDGET: PIPE WEIGHT & Ra CONVERTER */}
            <div style={{ margin: '3rem 0', padding: '2rem', backgroundColor: 'var(--bg-dark-800)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.1)' }}>Engineering Utility</span>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', margin: '0.5rem 0' }}>
                  Live Pipe Weight & Ra Surface Roughness Calculator
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  Instant dimension calculation and Ra unit conversions for engineering procurement
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {/* Weight Calculator Card */}
                <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
                  <h4 style={{ color: 'var(--primary-yellow)', fontSize: '1.1rem', margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calculator size={18} /> Pipe Weight Calculator
                  </h4>
                  
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                    Grade:
                    <select 
                      value={calcGrade} 
                      onChange={(e) => setCalcGrade(e.target.value)}
                      style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '4px' }}
                    >
                      <option value="0.02491">SS 304 / 304L (7.93 g/cm³)</option>
                      <option value="0.02507">SS 316 / 316L (7.98 g/cm³)</option>
                      <option value="0.02450">Duplex 2205 (≈7.80 g/cm³)</option>
                    </select>
                  </label>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      OD (mm):
                      <input 
                        type="number" 
                        step="0.01" 
                        value={calcOD} 
                        onChange={(e) => setCalcOD(e.target.value)}
                        style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '4px' }}
                      />
                    </label>
                    <label style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Wall WT (mm):
                      <input 
                        type="number" 
                        step="0.01" 
                        value={calcWT} 
                        onChange={(e) => setCalcWT(e.target.value)}
                        style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '4px' }}
                      />
                    </label>
                  </div>

                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '1rem' }}>
                    Length (meters):
                    <input 
                      type="number" 
                      step="0.1" 
                      value={calcLen} 
                      onChange={(e) => setCalcLen(e.target.value)}
                      style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '4px' }}
                    />
                  </label>

                  <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.08)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-yellow)', marginBottom: '0.5rem' }}>
                    {weightResult.error ? (
                      <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>{weightResult.error}</span>
                    ) : (
                      <div style={{ fontWeight: '700', fontSize: '1rem', color: '#fff' }}>
                        {weightResult.kgm} kg/m  ·  {weightResult.total} kg for {weightResult.length} m
                      </div>
                    )}
                  </div>
                  <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Weight formula: (OD − WT) × WT × K</small>
                </div>

                {/* Ra Converter Card */}
                <div style={{ backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ color: 'var(--primary-yellow)', fontSize: '1.1rem', margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={18} /> Ra Surface Roughness Converter
                    </h4>

                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                      Surface Ra (µm):
                      <input 
                        type="number" 
                        step="0.01" 
                        min="0" 
                        value={raUm} 
                        onChange={(e) => handleRaUmChange(e.target.value)}
                        style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '4px' }}
                      />
                    </label>

                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '1rem' }}>
                      Surface Ra (µin):
                      <input 
                        type="number" 
                        step="0.1" 
                        min="0" 
                        value={raUin} 
                        onChange={(e) => handleRaUinChange(e.target.value)}
                        style={{ width: '100%', padding: '0.6rem', marginTop: '0.3rem', backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '4px' }}
                      />
                    </label>

                    <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.08)', padding: '0.85rem', borderRadius: '6px', borderLeft: '3px solid var(--primary-yellow)', marginBottom: '0.5rem' }}>
                      <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--primary-yellow)' }}>
                        ≈ {rmsValue} µin RMS
                      </div>
                    </div>
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>1 µm = 39.3701 µin · RMS ≈ Ra × 1.11</small>
                  </div>

                  <button 
                    onClick={handleWidgetEnquiry}
                    className="btn btn-primary"
                    style={{ marginTop: '1.25rem', width: '100%', padding: '0.75rem', fontWeight: '700', fontSize: '0.88rem' }}
                  >
                    Enquire About These Dimensions <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 5-STEP ELECTROPOLISHING AND PASSIVATION PROCESS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>In-House Workflow</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              The 5-Step Electropolishing and Passivation Process
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2.5rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { step: '01', title: 'Degreasing and Cleaning', desc: 'Oils, cutting fluids and drawing residues are completely removed first. The finish is only as good as the chemical preparation.' },
                { step: '02', title: 'Pickling / Activation', desc: 'Where weld heat tint or surface oxide is present, it is etched and activated so the pipe surface electropolishes uniformly.' },
                { step: '03', title: 'Anodic Electropolishing Bath', desc: 'The pipe acts as anode in an electrolytic acid bath. High microscopic peaks dissolve first, levelling the surface and stripping free iron.' },
                { step: '04', title: 'Passivation Stabilisation', desc: 'The chromium-rich passive layer is stabilised per ASTM A967 / ASTM B912 to prevent future pitting and galvanic attack.' },
                { step: '05', title: 'DI Water Rinse and Drying', desc: 'High-purity deionised water rinse removes all electrolytic residues, followed by hot air drying, capping and clean poly-sleeving.' }
              ].map((s, idx) => (
                <div key={idx} style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', position: 'relative' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY ASSURANCE AND DOCUMENTATION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Auditable Records</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: '1.25' }}>
              Quality Assurance and Documentation
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>

            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-dark-800)', color: 'var(--primary-yellow)' }}>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Document / Test</th>
                    <th style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)' }}>Status / Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { doc: 'MTC EN 10204 3.1 with heat-number traceability', status: 'Confirmed (Standard with every dispatch)' },
                    { doc: '100% PMI test and certificate', status: 'Confirmed (Handheld XRF on every pipe length)' },
                    { doc: 'Ra surface roughness test (stylus profilometer) & surface report', status: 'Confirmed (Supplied with measured Ra values)' },
                    { doc: 'Hydro (leak and pressure) test & certificate', status: 'Confirmed (Hydrostatic tested per ASTM spec)' },
                    { doc: 'Passivation verification and ferrite check', status: 'Confirmed (Reported in quality dossier)' },
                    { doc: 'QA inspection report and mill traceability', status: 'Confirmed (Approved origin mills)' },
                    { doc: 'Third-party inspection (TÜV / Bureau Veritas / SGS / DNV)', status: 'Accepted upon customer request' }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'var(--bg-dark-800)' : 'transparent' }}>
                      <td style={{ padding: '0.9rem 1.25rem', fontWeight: '600', color: '#fff' }}>{row.doc}</td>
                      <td style={{ padding: '0.9rem 1.25rem', color: 'var(--primary-yellow)', fontWeight: '600' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Check size={16} /> {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={() => onEnquireClick(`Sample Test Certificate Request for ${cityData.city}`)} 
                className="btn btn-primary"
                style={{ padding: '0.85rem 2rem', fontWeight: '700' }}
              >
                Request a Sample Test Certificate →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs ACCORDION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-800)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Questions & Answers</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.25rem', lineHeight: '1.25' }}>
              Frequently Asked Questions: {cityData.city}
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2.5rem' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cityData.faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    backgroundColor: 'var(--bg-dark-900)', 
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

      {/* 7. FINAL CTA AND CONTACT */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>30-Minute Guarantee</span>
              <h2 style={{ fontSize: '2.3rem', margin: '0.75rem 0' }}>
                Specify Electropolished Pipe for Your {cityData.city} Plant
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
                Send your grade, OD × wall, Ra requirement, length and quantity. We'll quote within 30 minutes.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
              {/* Form */}
              <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <CheckCircle2 size={48} style={{ color: '#10b981', margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>RFQ Received for {cityData.city}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Thank you. Our engineering team is preparing your factory-direct quote with 3.1 MTC and transit schedule.
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
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Company *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Plant / Company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
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
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
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
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Grade & OD × WT *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. 316L, 1 inch OD, 1.65 WT"
                          value={formData.gradeAndSize}
                          onChange={(e) => setFormData({...formData, gradeAndSize: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Quantity / Length *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. 100 meters / 20 pcs"
                          value={formData.quantity}
                          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                          style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Media / drawing / finish notes</label>
                      <textarea 
                        rows="3"
                        placeholder="Mention fluid, temperature, Ra requirements (SF4/SF1), delivery location..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-dark-900)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', resize: 'vertical' }}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem', fontWeight: '700', width: '100%', marginTop: '0.5rem' }}>
                      Request {cityData.city} Quote in 30 Min <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <MapPin size={18} /> Direct Manufacturing Works
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Balaji Industrial Compound, Taloja MIDC, Navi Mumbai, Maharashtra 410208
                  </p>
                  <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '0.35rem' }}>
                    {cityData.transitInfo}
                  </small>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <Phone size={18} /> Call / WhatsApp Direct
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', fontWeight: '600' }}>
                    <a href="tel:+918291366340" style={{ color: '#fff', textDecoration: 'none' }}>+91 82913 66340</a> | <a href="tel:+917976476375" style={{ color: '#fff', textDecoration: 'none' }}>+91 79764 76375</a>
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <Mail size={18} /> Email
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    <a href="mailto:sakshiforge1737@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>sakshiforge1737@gmail.com</a>
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-dark-800)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-yellow)', fontWeight: '700', marginBottom: '0.4rem' }}>
                    <Clock size={18} /> Delivery Schedule
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Same-day to next-day road transit from Taloja works. Urgent site deliveries supported.
                  </p>
                </div>
              </div>
            </div>

            {/* Areas Covered line */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Industrial Areas & Belts Served:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                {cityData.areas.map((area, idx) => (
                  <span key={idx} style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Also supplying nearby */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <div style={{ color: '#cbd5e1', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                Also Supplying Across Maharashtra Industrial Hubs:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem' }}>
                {nearbyCities.map((nc, idx) => (
                  <a 
                    key={idx} 
                    href={nc.path} 
                    onClick={handleLinkClick}
                    style={{ color: 'var(--primary-yellow)', textDecoration: 'underline' }}
                  >
                    Electropolished pipes in {nc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
