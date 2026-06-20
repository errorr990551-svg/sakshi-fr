import React from 'react';
import { ShieldCheck, Globe, Cpu, Clock, ArrowRight } from 'lucide-react';

export default function Hero({ onEnquireClick }) {
  const cards = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Quality Assurance',
      desc: 'Our zero-defect policy is backed by rigorous testing. Every component undergoes ultrasonic, hydro, and chemical analysis.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Global Export Hub',
      desc: 'Strategically located to serve global markets. Delivering seamless logistics to USA, UAE, Europe, and Southeast Asia.',
    },
    {
      icon: <Cpu size={28} />,
      title: 'Custom Forging Solutions',
      desc: 'We provide bespoke manufacturing for special alloys, including Stainless Steel, Carbon Steel, and Duplex steel.',
    },
    {
      icon: <Clock size={28} />,
      title: '24/7 Technical Support',
      desc: 'Our engineering team provides round-the-clock consultancy to help you select the exact grade and pressure ratings.',
    },
  ];

  return (
    <>
      <section className="hero-sec">
        <div className="hero-bg-overlay"></div>
        <div className="container">
          <div className="hero-content fade-in-on-load">
            <span className="hero-tag">ISO 9001:2015 Certified Manufacturer</span>
            <h1 className="hero-title">
              Industrial Flanges, 
              <span>Pipes & Plates</span> 
              Manufacturer in India
            </h1>
            <p className="hero-desc">
              Sakshi Forge specializes in manufacturing high-quality forged flanges, industrial pipes, steel plates, and custom components for demanding industrial applications. Engineered for extreme strength, durability, and reliability.
            </p>
            <div className="hero-btns">
              <a href="#products" className="btn btn-primary">
                Our Products <ArrowRight size={16} />
              </a>
              <button onClick={onEnquireClick} className="btn btn-outline">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="overlapping-sec">
        <div className="container">
          <div className="cards-grid slide-up-on-load">
            {cards.map((card, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
