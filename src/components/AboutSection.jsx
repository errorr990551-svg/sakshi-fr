import React from 'react';

export default function AboutSection() {
  const metrics = [
    { number: '20+', label: 'Years of Excellence' },
    { number: '150+', label: 'Global Clients' },
    { number: '5k+', label: 'Tons Forged Annually' },
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Who We <span>Are</span>
            </h2>
            <div className="accent-line-left" style={{ marginBottom: '2rem' }}></div>
            
            <h3>
              Sakshi Forge - Industrial Flanges & <span>Forged Steel Manufacturer</span>
            </h3>
            
            <p className="about-p">
              Sakshi Forge is a trusted manufacturer and supplier of high-quality industrial flanges, butt weld fittings, forged fittings, pipes, tubes, round bars, and steel plates in India. We specialize in precision forging and machining solutions for the oil & gas, petrochemical, power generation, construction, and heavy engineering industries.
            </p>
            
            <p className="about-p">
              Our state-of-the-art facility combines advanced forging technology, CNC precision machining, and strict quality controls. We ensure superior mechanical strength, corrosion resistance, and exact dimensional tolerance for every product.
            </p>

            <div className="about-metrics">
              {metrics.map((m, idx) => (
                <div className="metric-item" key={idx}>
                  <div className="metric-number">{m.number}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="image-panel-container">
              <img src="/flanges_pipes.webp" alt="Stack of finished steel flanges and pipes" />
              <div className="image-panel-badge">
                <span className="number">20+</span>
                <span className="text">Years of Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
