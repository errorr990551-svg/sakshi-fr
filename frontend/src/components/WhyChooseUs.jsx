import React from 'react';
import { Award, Wrench, ShieldCheck, Truck, Scale, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Award size={32} />,
      title: 'Premium Grade Raw Materials',
      desc: 'We use certified carbon steel, alloy steel, and stainless steel from verified, approved mills to ensure exceptional durability and mechanical strength.',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Custom Manufacturing Solutions',
      desc: 'Forged components manufactured exactly as per client drawings, technical specifications, custom dimensions, and national/international industry standards.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Industrial Applications',
      desc: 'Expertly serving high-pressure pipelines in oil & gas, petrochemical, power generation, heavy infrastructure, and general marine engineering sectors.',
    },
    {
      icon: <Truck size={32} />,
      title: 'Timely Production & Delivery',
      desc: 'Streamlined manufacturing pipelines and logistics connections ensure on-time dispatch for both bulk recurring requirements and urgent project orders.',
    },
    {
      icon: <Scale size={32} />,
      title: 'Cost-Effective Solutions',
      desc: 'Highly competitive pricing achieved through efficient manufacturing overhead control, without compromising raw material quality or engineering testing.',
    },
    {
      icon: <Handshake size={32} />,
      title: 'Trusted Manufacturing Partner',
      desc: 'Committed to forming long-term business partnerships built on consistent chemical composition, dimensional reliability, and transparent communications.',
    },
  ];

  return (
    <section id="why-choose" className="section-padding" style={{ backgroundColor: 'var(--bg-dark-900)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Why Choose <span>Sakshi Forge?</span></h2>
          <p>
            Delivering high-performance forged steel products designed for demanding industrial applications across multiple critical sectors.
          </p>
          <div className="accent-line"></div>
        </div>

        <div className="why-grid">
          {points.map((p, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
