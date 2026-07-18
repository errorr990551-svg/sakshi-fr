import React from 'react';
import { Calendar, CheckSquare, Truck, Handshake, Shield, HelpCircle, FileText, ArrowRight } from 'lucide-react';

export default function AboutPage({ onEnquireClick }) {
  const stats = [
    {
      icon: <Calendar size={28} />,
      number: '10+',
      label: 'Years of Experience',
    },
    {
      icon: <CheckSquare size={28} />,
      number: '500+',
      label: 'Projects Supplied',
    },
    {
      icon: <Truck size={28} />,
      number: '1,000+',
      label: 'Tons Supply Capacity',
    },
    {
      icon: <Handshake size={28} />,
      number: '100+',
      label: 'Satisfied Clients',
    },
  ];

  const processes = [
    {
      num: '01',
      title: 'Billet Sizing & Cutting',
      desc: 'Raw steel bars and blocks from certified mills are sliced to custom weights and dimensions.',
    },
    {
      num: '02',
      title: 'Induction Heating',
      desc: 'Sized steel pieces are heated uniformly in electronic induction furnaces to optimum hot-forging temperatures.',
    },
    {
      num: '03',
      title: 'Closed & Open Die Forging',
      desc: 'Heated steel is compressed under heavy hydraulic hammer dies, enhancing internal grain flow and density.',
    },
    {
      num: '04',
      title: 'Normalization Annealing',
      desc: 'Forged components undergo controlled thermal cycles to stress-relieve the steel and maximize mechanical toughness.',
    },
    {
      num: '05',
      title: 'Precision CNC Machining',
      desc: 'Flanges and joints are turned on automated CNC lathing centers to match nominal ASME/DIN specifications.',
    },
    {
      num: '06',
      title: 'Drilling & Facings',
      desc: 'Bolt holes are drilled and joint faces are textured (raised face, RTJ, flat face) with strict precision.',
    },
    {
      num: '07',
      title: 'Non-Destructive Testing',
      desc: 'Ultrasonic, chemical analysis, and hardness tests verify structural integrity and composition specs.',
    },
    {
      num: '08',
      title: 'Inspections & Packaging',
      desc: 'Final visual check, dimension auditing, stamping, rust protection coating, and timber boxing for shipping.',
    },
  ];

  return (
    <div className="about-page-wrapper">
      
      {/* 1. Header Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content container">
          <div className="about-badge-wrap">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      {/* 2. Our History Section */}
      <section style={{ backgroundColor: 'var(--bg-dark-900)', padding: '4rem 0' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-right about-history-image">
              <div className="image-panel-container" style={{ aspectRatio: '16/11' }}>
                <img src="/about_history.webp" alt="Stacked steel warehouse corridor" style={{ objectPosition: 'center center' }} />
              </div>
            </div>

            <div className="about-left about-history-text">
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Our Legacy</span>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                The Establishment of <br /><span>Sakshi Forge</span>
              </h3>
              <div className="accent-line-left" style={{ marginBottom: '1.25rem' }}></div>

              <p className="about-p">
                Sakshi Forge is a trusted manufacturer and supplier of industrial flanges, butt weld fittings, forged fittings, pipes, tubes, round bars, and steel plates. With a strong focus on quality, precision engineering, and reliable supply, we cater to the demanding requirements of oil & gas, petrochemical, power generation, and heavy engineering industries.
              </p>
              
              <p className="about-p" style={{ marginBottom: '1.5rem' }}>
                Our commitment to advanced manufacturing practices and strict quality control ensures that every product meets national and international industry standards.
              </p>

              <div className="about-sub-grid-responsive">
                <div>
                  <h4 style={{ color: 'var(--primary-yellow)', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Growth and Expansion
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Over the years, Sakshi Forge has expanded its product portfolio and manufacturing capabilities to serve diverse industrial requirements. From standard components to custom-engineered solutions, we ensure consistent quality and timely delivery.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-yellow)', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Our Mission
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Our mission is to deliver high-performance industrial steel products with uncompromised quality, competitive pricing, and dependable service, building long-term partnerships with our clients.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-yellow)', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Why Choose Us?
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    We combine quality materials, precision manufacturing, and timely supply to deliver reliable industrial steel solutions for critical applications.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-yellow)', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Get a Free Quote
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    Contact us today to get a free quote for your industrial need met at Sakshi Forge.
                  </p>
                  <button onClick={onEnquireClick} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                    Request RFQ <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Strength in Numbers Banner */}
      <section style={{ backgroundColor: 'var(--primary-yellow)', padding: '3.5rem 0', color: 'var(--bg-dark-900)' }}>
        <div className="container">
          <h2 style={{ color: 'var(--bg-dark-900)', textAlign: 'center', textTransform: 'uppercase', marginBottom: '3rem', fontSize: '2.25rem' }}>
            Our Strength in Numbers
          </h2>
          <div className="about-stats-grid" style={{ textAlign: 'center' }}>
            {stats.map((s, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ color: 'var(--bg-dark-900)' }}>{s.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1' }}>{s.number}</div>
                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trusted Name Detail Grid */}
      <section style={{ backgroundColor: 'var(--bg-dark-800)', padding: '4rem 0' }}>
        <div className="container">
          <div className="about-market-grid">
            <div className="about-left">
              <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Market Leadership</span>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Sakshi Forge - A Trusted Name in <br /><span>Industrial Steel Manufacturing</span>
              </h3>
              <div className="accent-line-left" style={{ marginBottom: '1.25rem' }}></div>

              <p className="about-p">
                Sakshi Forge is a leading manufacturer and supplier of industrial flanges, butt weld fittings, forged fittings, pipes, tubes, round bars, and steel plates. With a strong focus on precision engineering and advanced manufacturing processes, we deliver products built for strength, durability, and reliable performance in demanding industrial environments.
              </p>
              <p className="about-p">
                Our manufacturing operations are driven by technical expertise, modern machinery, and strict quality control systems to ensure every product meets required specifications and industry standards. From raw material selection to final inspection, we maintain consistency and accuracy at every stage of production.
              </p>
              <p className="about-p">
                We cater to a wide range of industrial requirements by offering a comprehensive portfolio of steel products suitable for critical applications. Our product range includes various types of flanges such as slip-on, weld neck, blind, threaded, lap joint, and socket weld flanges, along with butt weld fittings, forged fittings, pipes, tubes, round bars, and plates in multiple steel grades and specifications.
              </p>
              <p className="about-p" style={{ marginBottom: '0' }}>
                At Sakshi Forge, we understand the importance of dimensional accuracy, material integrity, and on-time delivery. Our team works closely with clients to provide customized solutions that align with project requirements while ensuring compliance with national and international standards.
              </p>
            </div>

            <div className="about-right">
              <div className="image-panel-container" style={{ aspectRatio: '16/11' }}>
                <img src="/about_structure.webp" alt="Industrial blast furnace chimney network" style={{ objectPosition: 'center center' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Process Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Manufacturing <span>Process</span></h2>
            <p>Here is Our Manufacturing Process</p>
            <div className="accent-line"></div>
          </div>

          <div className="about-process-grid">
            {processes.map((p, idx) => (
              <div 
                key={idx} 
                className="feature-card" 
                style={{ 
                  backgroundColor: 'var(--bg-dark-800)', 
                  padding: '2rem 1.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.75rem',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: 'rgba(255, 193, 7, 0.15)', fontFamily: 'monospace' }}>
                    {p.num}
                  </span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-yellow)' }}></span>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: '1' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
