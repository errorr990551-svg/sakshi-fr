import React, { useEffect } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Phone, Mail, Award, CheckCircle2, Factory } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function WestBengalHubPage({ onEnquireClick, onShowContactDetails }) {
  const handleShowContact = onShowContactDetails || (() => onEnquireClick && onEnquireClick('West Bengal State Hub Contact Request'));
  
  const cities = [
    {
      name: "Kolkata",
      slug: "kolkata",
      path: "/market-area/kolkata",
      clusters: "Falta Pharma Park & SEZ, Garden Reach, Taratala, Bidhannagar (Salt Lake), Amtala Food Park",
      focus: "Pharma WFI/Purified Water, Port-Belt Saline Clean Utility, EPC Contractor Procurement for Eastern India (SS 316L / 304L)",
      tag: "Eastern India's Business & Pharma Hub"
    },
    {
      name: "Haldia",
      slug: "haldia",
      path: "/market-area/haldia",
      clusters: "Haldia Petrochemical Complex, Refinery Belt, Haldia Industrial Park (Durga Chawk), Dock Terminals",
      focus: "Petrochemical DM Water, Sampling & Analytical Stations, Coastal Estuary Chloride Resistance (Duplex 2205 & SS 316L)",
      tag: "Petrochemical & Coastal Port Belt"
    },
    {
      name: "Kalyani",
      slug: "kalyani",
      path: "/market-area/kalyani",
      clusters: "Kalyani Industrial Park Phases I–III, Haringhata Industrial Park, Gayespur, Chakdaha",
      focus: "Dairy Reception & Transfer, Edible Oil & Mustard Processing, Agro-Food CIP Loops & Chemical Clean Utility",
      tag: "Planned Industrial & Nadia Dairy Belt"
    },
    {
      name: "Howrah",
      slug: "howrah",
      path: "/market-area/howrah",
      clusters: "Sankrail Food Parks (Phases I–III), Uluberia Industrial Park, Bagnan, Amta, Ankurhati",
      focus: "Sanitary Food-Park Process Lines, Caustic/Acid CIP Draining, Process Equipment & Skid Fabrication",
      tag: "Sankrail Food Parks & Engineering Twin"
    },
    {
      name: "Dankuni",
      slug: "dankuni",
      path: "/market-area/dankuni",
      clusters: "Kolkata Central Dairy (Operation Flood), Modular Food Park, NH-19 Biscuit & FMCG Belt, Hooghly",
      focus: "Dairy Milk Transfer, Bakery & Biscuit Plant Utilities, FMCG Clean Water & Eastern Logistics Dispatch",
      tag: "Dairy & FMCG Logistics Gateway"
    },
    {
      name: "Durgapur",
      slug: "durgapur",
      path: "/market-area/durgapur",
      clusters: "SAIL Durgapur Steel Plant, Alloy Steel Plant, Rajbandh Complex, Panagarh Industrial Park",
      focus: "Steel Plant Demineralised (DM) Water Loops, Boiler-Chemistry Sampling, Power Generation Clean Utility",
      tag: "Steel City & Panagarh Industrial Corridor"
    },
    {
      name: "Siliguri",
      slug: "siliguri",
      path: "/market-area/siliguri",
      clusters: "Dabgram Industrial Park (Fulbari), Matigara, Phansidewa, North Bengal Fruit Belt",
      focus: "Acidic Fruit Pulp (Pineapple/Orange/Tomato), Ready-to-Drink Tea Lines, Dairy & Sikkim/NE Forward Delivery",
      tag: "North Bengal Agro-Food & NE Gateway"
    },
    {
      name: "Kharagpur",
      slug: "kharagpur",
      path: "/market-area/kharagpur",
      clusters: "Kharagpur Industrial Park, Salboni, Goaltor, IIT Research Labs, Railway Workshops",
      focus: "Institutional & Analytical Pilot Labs, Engineering Plant Process Water, Western Corridor Transit",
      tag: "Engineering, R&D & Western Gateway"
    },
    {
      name: "Asansol",
      slug: "asansol",
      path: "/market-area/asansol",
      clusters: "SAIL IISCO Steel Plant (Burnpur), Eastern Coalfields (ECL), Raniganj Industrial Belt, Jamuria, Kulti",
      focus: "Integrated Steel Works DM-Water Loops, Steam-Condensate Sampling, Mining Workshop Analytical Spools",
      tag: "Coal Belt, IISCO Steel & Heavy Industry"
    },
    {
      name: "Bardhaman",
      slug: "bardhaman",
      path: "/market-area/bardhaman",
      clusters: "Bardhaman Town (Burdwan), Memari, Guskara, Kalna, Katwa, Rice & Potato Belt",
      focus: "Potato Washing & Blanching Lines (SS 304L / 316L), Edible Oil Refineries, Dairy Clean Utility & Local Fabricator Skids",
      tag: "Rice Bowl & Potato Processing Belt"
    }
  ];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = "Electropolished Pipe Manufacturer Across West Bengal | Sakshi Forge";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Sakshi Forge supplies electropolished SS 316L, 304L and duplex 2205 pipes across West Bengal industrial corridors: Kolkata, Haldia, Kalyani, Howrah, Dankuni, Durgapur, Siliguri, Kharagpur, Asansol and Bardhaman.");
    }
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingTop: '5.5rem', paddingBottom: '3rem' }}>
      {/* Hero */}
      <section style={{ 
        background: 'linear-gradient(to right, rgba(10, 14, 23, 0.82) 0%, rgba(10, 14, 23, 0.58) 55%, rgba(10, 14, 23, 0.38) 100%), linear-gradient(to bottom, rgba(10, 14, 23, 0.42) 0%, rgba(10, 14, 23, 0.10) 50%, rgba(10, 14, 23, 0.80) 100%), url("/sakshi-forge-banner.webp")',
        backgroundPosition: 'left top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '5rem 0 3.5rem',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '2rem' }}>
            <a href="/" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <a href="/market-area" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Market Areas</a>
            <span>›</span>
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>West Bengal Regional Hub</span>
          </div>

          <div style={{ maxWidth: '960px' }}>
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
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              Direct Supply from Taloja MIDC, Navi Mumbai to Eastern India
            </span>

            <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.25rem', color: '#fff' }}>
              Electropolished Stainless Steel Pipes & Tubes Across <span style={{ color: 'var(--primary-yellow)' }}>West Bengal</span>
            </h1>

            <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '880px' }}>
              West Bengal is eastern India's industrial backbone and gateway to the North-East, spanning Kolkata's business & pharma headquarters, the Falta Pharma SEZ, Haldia's coastal petrochemical complex, Nadia's dairy belt, Sankrail's food parks, Purba Bardhaman's rice and potato processing belt, and the Durgapur–Asansol steel corridor. We manufacture and electropolish SS 316L, 304L and duplex 2205 pipes in-house at Taloja MIDC (Navi Mumbai) and supply engineering buyers, EPC contractors and manufacturing plants across West Bengal with EN 10204 3.1 MTC, 100% PMI testing and certified Ra ≤0.4 µm surface reports.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onEnquireClick && onEnquireClick('West Bengal Quote Request')}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.8rem', fontSize: '0.95rem', fontWeight: '700' }}
              >
                Request West Bengal Quote (30 Min)
                <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={handleShowContact}
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.6rem', fontSize: '0.95rem', fontWeight: '600' }}
              >
                <Phone size={17} />
                +91 82913 66340
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} color="var(--primary-yellow)" /> ISO 9001:2015 Certified
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={16} color="var(--primary-yellow)" /> EN 10204 3.1 MTC Traceability
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--primary-yellow)" /> 100% PMI Spectro Tested
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Factory size={16} color="var(--primary-yellow)" /> Internal Ra ≤0.4 µm (SF4)
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--primary-yellow)" /> ASTM A269 / A270 / A790
            </span>
          </div>
        </div>
      </section>

      {/* Industrial Clusters Grid */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', marginBottom: '0.75rem' }}>
              West Bengal Industrial Corridors We Serve
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.6' }}>
              Select your industrial zone below to inspect local application fit, technical grade recommendations (316L, 304L, Duplex 2205), transit schedules from Taloja, and live dimensional calculators.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.75rem' }}>
            {cities.map((c) => (
              <div 
                key={c.slug}
                style={{
                  backgroundColor: 'var(--bg-dark-800)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                      {c.name}
                    </h3>
                    <span style={{ 
                      fontSize: '0.72rem', 
                      backgroundColor: 'rgba(255, 193, 7, 0.1)', 
                      color: 'var(--primary-yellow)', 
                      border: '1px solid rgba(255, 193, 7, 0.3)',
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '4px',
                      fontWeight: '700'
                    }}>
                      {c.tag}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                    <strong style={{ color: 'var(--text-secondary)' }}>Industrial Estates: </strong>
                    {c.clusters}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '1.5rem' }}>
                    <strong style={{ color: '#fff' }}>Key Applications: </strong>
                    {c.focus}
                  </p>
                </div>

                <a 
                  href={c.path}
                  onClick={(e) => handleLinkClick(e, c.path)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    backgroundColor: 'var(--bg-dark-700)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--primary-yellow)',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-yellow)';
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-dark-700)';
                    e.currentTarget.style.color = 'var(--primary-yellow)';
                  }}
                >
                  <span>Explore {c.name} Landing Page</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Logistics Section */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Transparent Manufacturing & Dispatch Policy
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#fff', marginTop: '0.5rem' }}>
              Manufacturing at Taloja MIDC (Navi Mumbai) with Consolidated Road Dispatch
            </h2>
          </div>

          <div style={{ backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '2rem', lineHeight: '1.7', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#fff' }}>Local Honesty Notice: </strong> 
              Sakshi Forge operates our state-of-the-art pipe manufacturing, cold-drawing, and automated electropolishing facility in <strong style={{ color: 'var(--primary-yellow)' }}>Taloja MIDC, Navi Mumbai, Maharashtra (PIN 410208)</strong>. We do not operate local warehouse stockists or sales showrooms in West Bengal.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#fff' }}>Why Eastern India Plants Choose Sakshi Forge: </strong> 
              While plain unpolished commercial pipe is readily available from local Kolkata merchants, high-purity pharma and process lines require audited mill traceability, measured profilometer Ra surface reports (Ra ≤0.4 µm internal), passivation verification, and genuine EN 10204 3.1 material test certificates. We supply made-to-drawing spools, custom wall thicknesses, and high-spec electropolished tubes with complete documentation packs.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#fff' }}>Packaging & Transit Protection: </strong> 
              West Bengal is roughly 1,800 to 2,500 km from our factory. Every single pipe length is capped at both ends with heavy-duty PE push caps, individually wrapped in protective poly-sleeves to guard against humid estuarine air, and packed into reinforced wooden crates or rigid steel cages for damage-free delivery via direct national freight corridors.
            </p>
          </div>
        </div>
      </section>

      {/* State Final CTA */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', marginBottom: '1rem' }}>
            Specify Electropolished Stainless Steel for Your West Bengal Project
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Share your bill of materials, media chemistry, OD × wall thickness, Ra requirement, and project drawings. Our engineering team responds with technical validation and competitive commercial quotations within 30 minutes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onEnquireClick && onEnquireClick('West Bengal Master RFQ')}
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', fontSize: '1rem', fontWeight: '700' }}
            >
              Get a Fast Technical Quote
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={handleShowContact}
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.8rem', fontSize: '1rem', fontWeight: '600' }}
            >
              <Phone size={17} />
              Call Technical Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
