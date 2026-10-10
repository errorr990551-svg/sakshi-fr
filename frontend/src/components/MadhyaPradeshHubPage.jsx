import React, { useEffect } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Phone, Mail, Award, CheckCircle2, Factory } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function MadhyaPradeshHubPage({ onEnquireClick, onShowContactDetails }) {
  const handleShowContact = onShowContactDetails || (() => onEnquireClick && onEnquireClick('Madhya Pradesh State Hub Contact Request'));
  
  const cities = [
    {
      name: "Indore",
      slug: "indore",
      path: "/market-area/indore",
      clusters: "Sanwer Road (Sector E), Rau Road, Pigdamber, Lasudia Mori (Dewas Naka), Kanadia Road, Sukhliya",
      focus: "Pharma WFI, Purified Water, Clean Utilities, Food & Snack Product Lines (SS 316L / 304L, Ra ≤0.4 µm)",
      tag: "Commercial & Pharma Capital"
    },
    {
      name: "Pithampur & Indore SEZ",
      slug: "pithampur",
      path: "/market-area/pithampur",
      clusters: "Indore SEZ Pharma Zone (Phase II, Sector III), Pithampur Phases I, II & III, Sector 7",
      focus: "Audited Export Pharma, Auto Clean Utilities (DM/DI Water) & Skid Assemblies with MTC EN 10204 3.1",
      tag: "Detroit of India & Pharma SEZ"
    },
    {
      name: "Dewas",
      slug: "dewas",
      path: "/market-area/dewas",
      clusters: "Dewas Industrial Area No. 3, Agra-Bombay Road, Engineering, Tractor & Gear Belts",
      focus: "Pharma Purified Water, Food & Beverage Processing, Engineering DM Water & Expansion Projects",
      tag: "Historic Engineering & Pharma Belt"
    },
    {
      name: "Ujjain & Vikram Udyogpuri",
      slug: "ujjain",
      path: "/market-area/ujjain",
      clusters: "Vikram Udyogpuri DMIC Integrated Township, Medical Device Park, Maxi Road",
      focus: "Design-Stage Project Specs, Dairy Milk Loops, Medical-Device Clean Utilities & EPC Document Packs",
      tag: "DMIC Smart Township & Dairy Hub"
    },
    {
      name: "Mandideep",
      slug: "mandideep",
      path: "/market-area/mandideep",
      clusters: "Mandideep Industrial Area (1,102 ha, 450+ Units), Hoshangabad Road, Raisen District",
      focus: "Formulation & Bulk-Drug Pharma, Specialty Chemical Utilities, Food Processing & Fabrication Skids",
      tag: "Central MP's Largest Industrial Estate"
    },
    {
      name: "Bhopal",
      slug: "bhopal",
      path: "/market-area/bhopal",
      clusters: "Govindpura Industrial Area, Bhopal Industrial Area, Acharpura, Capital Institutions & Hospitals",
      focus: "Institutional Clean Utilities, Laboratory Lines, Formal Tender Procurement & Food Processing",
      tag: "State Capital & Institutional Centre"
    },
    {
      name: "Ratlam",
      slug: "ratlam",
      path: "/market-area/ratlam",
      clusters: "Karmadi Namkeen Cluster, Ratlam Industrial Areas, Ratlam–Nagda DMIC Node",
      focus: "Snack & Frying-Oil Transfer, Soya Clean-Side Processing, Wash Water & MSME Fabricator Supply",
      tag: "Namkeen Cluster & Agro-Processing Hub"
    },
    {
      name: "Gwalior & Malanpur",
      slug: "gwalior",
      path: "/market-area/gwalior",
      clusters: "Malanpur Industrial Area (1,389 ha with Dry Port), Banmore, Gwalior Engineering Belt",
      focus: "Formulation Pharma, Dairy Milk Transfer, Clean Utilities & Dry Port Export Documentation",
      tag: "Malanpur Dry Port & Northern MP Hub"
    },
    {
      name: "Jabalpur",
      slug: "jabalpur",
      path: "/market-area/jabalpur",
      clusters: "Gwarighat, Richhai, Maneri, Khamaria, Precision Engineering & Defence Vendor Ecosystem",
      focus: "Pharma WFI, Dairy Processing, Precision Metalwork Clean Utilities & Formal Tender Inspection",
      tag: "Eastern MP & Precision Support Hub"
    },
    {
      name: "Neemuch",
      slug: "neemuch",
      path: "/market-area/neemuch",
      clusters: "Neemuch Industrial Area, Sandiya, Morka (Jawad), Malwa Spice & Herb Mandi Corridor",
      focus: "Herbal Extract Lines, Soy-Milk & Paneer Product Lines, Garlic/Onion Wash & Clean Utilities",
      tag: "Herbal Extracts & Soya Processing"
    }
  ];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = "Electropolished Pipe Manufacturer Across Madhya Pradesh | Sakshi Forge";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Sakshi Forge supplies electropolished SS 316L and 304L pipes across Madhya Pradesh industrial corridors: Indore, Pithampur SEZ, Dewas, Ujjain Vikram Udyogpuri, Mandideep, Bhopal, Ratlam, Gwalior Malanpur, Jabalpur and Neemuch.");
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
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <a href="/electropolished-pipes" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Electropolished Pipes</a>
            <span>›</span>
            <a href="/market-area" onClick={handleLinkClick} style={{ color: 'inherit', textDecoration: 'none' }}>Market Directory</a>
            <span>›</span>
            <span style={{ color: 'var(--primary-yellow)', fontWeight: '600' }}>Madhya Pradesh</span>
          </div>

          <span style={{ 
            backgroundColor: 'rgba(255, 193, 7, 0.1)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid rgba(255, 193, 7, 0.3)',
            padding: '0.35rem 0.85rem', 
            borderRadius: '4px', 
            fontSize: '0.78rem', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <Factory size={14} /> Direct Works Road Transit · Taloja Works to MP Industrial Corridors
          </span>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '850', lineHeight: '1.2', marginBottom: '1rem', color: '#fff' }}>
            Electropolished Stainless Steel Pipes in <span style={{ color: 'var(--primary-yellow)' }}>Madhya Pradesh</span>
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            Direct manufacturer supply of ASTM A269 and ASTM A270 compliant SS 316L and 304L electropolished pipes and tubes to Madhya Pradesh's key industrial hubs: Indore, the Pithampur SEZ pharma corridor, Dewas, Vikram Udyogpuri, Bhopal, Ratlam, Malanpur, Jabalpur, and Neemuch. In-house electropolished at our Taloja MIDC works with certified internal Ra ≤0.4 µm, 100% PMI testing, and full MTC EN 10204 3.1 traceability on every order.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button 
              onClick={() => onEnquireClick('Madhya Pradesh Statewide Supply Quote')} 
              className="btn btn-primary btn-lg"
              style={{ padding: '0.85rem 1.75rem', fontWeight: '700' }}
            >
              Request MP Quote in 30 Min <ArrowRight size={16} />
            </button>
            <button 
              onClick={handleShowContact}
              className="btn btn-outline"
              style={{ padding: '0.85rem 1.5rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Phone size={16} /> Contact Works Desk
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
            <span>✓ ISO 9001:2015 Works</span>
            <span>✓ EN 10204 3.1 Heat Traceability</span>
            <span>✓ 100% PMI Handheld XRF Verified</span>
            <span>✓ Internal Ra ≤0.4 µm (SF4 / Mirror Finish)</span>
            <span>✓ 1–2 Day Express Road Transit from Taloja</span>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem' }}>
              Select Your Madhya Pradesh Industrial Belt
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1rem' }}>
              Explore estate-by-estate mapping, media compatibility notes, specification tables, and factory-direct supply routes for your location:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {cities.map((city) => (
              <a
                key={city.slug}
                href={city.path}
                onClick={(e) => handleLinkClick(e, city.path)}
                style={{
                  backgroundColor: 'var(--bg-dark-800)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-yellow)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: '800', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.06em', 
                      color: 'var(--primary-yellow)',
                      backgroundColor: 'rgba(255, 193, 7, 0.08)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px'
                    }}>
                      {city.tag}
                    </span>
                    <MapPin size={16} style={{ color: 'var(--primary-yellow)' }} />
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#fff', marginBottom: '0.6rem' }}>
                    {city.name}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                    <strong style={{ color: '#cbd5e1' }}>Estates:</strong> {city.clusters}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 1.25rem 0' }}>
                    {city.focus}
                  </p>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: 'var(--primary-yellow)', 
                  fontWeight: '700', 
                  fontSize: '0.88rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '0.85rem'
                }}>
                  View {city.name} Spec & Inventory <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Statewide Manufacturing & Supply Notes */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', padding: '3.5rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Direct Manufacturer Advantage</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '850', marginTop: '0.5rem' }}>
              Why Madhya Pradesh Plants Source Directly from Sakshi Forge Taloja
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                1–2 Day Express Road Transit
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Our Taloja MIDC works sits roughly 570–660 km from the Indore–Pithampur–Dewas–Ujjain belt. Urgent top-up lots, replacement spools and witnessed factory testing are fast and seamless via direct highway dispatches.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Consolidated Belt Dispatches
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Indore, Pithampur, Dewas and Ujjain sit within 100 km of each other. If your enterprise operates sister plants across multiple locations, combine requirements into a single consolidated dispatch with uniform 3.1 MTC documentation.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-dark-900)', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-yellow)', fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Full Regulatory Document Pack
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Audited export pharma units and food processors receive heat-number traceability, profilometer Ra surface reports (internal Ra ≤0.4 µm), 100% PMI certificates, hydro test certificates, and passivation records on every single lot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
