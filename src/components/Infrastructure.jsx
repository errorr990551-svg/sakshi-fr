import React from 'react';
import { Award, Flame, Cpu, ShieldAlert } from 'lucide-react';

export default function Infrastructure() {
  return (
    <section id="infra" className="infra-wrapper section-padding">
      <div className="container">
        
        {/* Row 1: Precision-Engineered Products */}
        <div className="infra-grid" style={{ marginBottom: '8rem' }}>
          <div className="infra-content">
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Precision Forging</span>
            <h3>Precision-Engineered <span>Forged Steel Products</span></h3>
            <p>
              Sakshi Forge specializes in manufacturing high-quality forged flanges, industrial pipes, steel plates, and custom steel components for demanding industrial applications. Our manufacturing processes combine advanced forging technology, precision machining, and strict quality control to ensure superior strength and dimensional accuracy.
            </p>
            <p>
              We cater to critical sectors including oil & gas extraction, petrochemical refining, power generation, infrastructure development, marine transport, and heavy engineering, delivering products that meet international standards.
            </p>
            <div className="infra-feature-list">
              <div className="infra-feature-item">
                <div className="infra-feature-icon"><Award size={20} /></div>
                <div>
                  <h4>Certified Standards Compliance</h4>
                  <p style={{ fontSize: '0.9rem' }}>All materials are certified under EN 10204 3.1 MTC (Material Test Certificate) verifying chemistry and mechanical properties.</p>
                </div>
              </div>
              <div className="infra-feature-item">
                <div className="infra-feature-icon"><Cpu size={20} /></div>
                <div>
                  <h4>High-Precision CNC Machining</h4>
                  <p style={{ fontSize: '0.9rem' }}>Utilizing automated CNC lathes and milling machines to guarantee strict dimensional tolerances on raised-face flanges and grooved joints.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="infra-image-wrap">
            <img src="/hero_forge.png" alt="Heavy duty forging hook crane moving glowing metal cylinder" />
          </div>
        </div>

        {/* Row 2: Manufacturing Infrastructure */}
        <div className="infra-grid infra-reverse">
          <div className="infra-image-wrap">
            <img src="/molten_furnace.png" alt="Molten steel manufacturing forge furnace glowing" />
          </div>
          <div className="infra-content">
            <span className="hero-tag" style={{ border: 'none', backgroundColor: 'rgba(255, 193, 7, 0.08)' }}>Infrastructure</span>
            <h3>Advanced Manufacturing <span>Infrastructure</span></h3>
            <p>
              Sakshi Forge operates with advanced forging equipment, precision machining systems, and modern manufacturing infrastructure to produce high-quality industrial steel components. Our facility is equipped to handle bulk production requirements while maintaining strict quality standards and dimensional accuracy for every product.
            </p>
            <p>
              Our manufacturing capabilities combine hydraulic forging hammers, automated heat treatment furnaces, and state-of-the-art metal sawing centers. By vertically integrating forging, normalization annealing, machining, and material testing under one roof, we eliminate supplier lag and deliver premium quality on schedule.
            </p>
            <div className="infra-feature-list">
              <div className="infra-feature-item">
                <div className="infra-feature-icon"><Flame size={20} /></div>
                <div>
                  <h4>Controlled Heating & Annealing</h4>
                  <p style={{ fontSize: '0.9rem' }}>Microprocessor-controlled furnace heating cycles ensure uniform internal structures, avoiding cold spots and brittleness in forged items.</p>
                </div>
              </div>
              <div className="infra-feature-item">
                <div className="infra-feature-icon"><ShieldAlert size={20} /></div>
                <div>
                  <h4>Strict Non-Destructive Testing</h4>
                  <p style={{ fontSize: '0.9rem' }}>Equipped with specialized magnetic particle inspection (MPI) and ultrasonic testing equipment to detect internal defects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
