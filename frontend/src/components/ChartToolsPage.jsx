import { ArrowRight } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import CategoryGuide from './CategoryGuide';
import { CHART_GUIDES } from '../data/chartGuides';

export default function ChartToolsPage({ toolType, onEnquireClick }) {
  const toolsData = {
    'flange-dimension-chart': {
      title: 'ASME B16.5 Flange Dimension Chart: Class 150-2500',
      h1: 'ASME B16.5 Flange Dimension Chart (Class 150)',
      desc: 'Outside diameter, bolt circle and bolt holes for Class 150 weld neck, slip-on, socket weld and blind flanges, NPS 1/2 to 12.',
      cta: 'Request a Flange Quote',
      breadcrumb: 'Flange Dimension Chart',
      slug: 'flange-dimension-chart'
    },
    'flange-weight-chart': {
      title: 'Flange Weight Chart (kg)',
      h1: 'Flange Weight Chart (Class 150, 300 and 600)',
      desc: 'Approximate weights in kg for ASME B16.5 flanges, NPS 1/2 to 12, to compare sizes and classes.',
      cta: 'Request a Flange Quote',
      breadcrumb: 'Flange Weight Chart',
      slug: 'flange-weight-chart'
    },
    'flange-bolt-chart': {
      title: 'Flange Bolt Chart: Bolt Size and Quantity',
      h1: 'ASME B16.5 Flange Bolt Chart (Class 150)',
      desc: 'Bolt diameter and number of bolts for Class 150 flanges, NPS 1/2 to 12, and what decides stud length and torque.',
      cta: 'Request a Flange Quote',
      breadcrumb: 'Flange Bolt Chart',
      slug: 'flange-bolt-chart'
    },
    'pipe-schedule-chart': {
      title: 'Pipe Schedule Chart: Sch 5S to XXS Wall Thickness',
      h1: 'Pipe Schedule & Wall Thickness Dimensions (mm & inches)',
      desc: 'Outside diameter and wall thickness for Sch 5S, 10S, 40S, 80S, 40, 80, 160 and XXS, NPS 1/2 to 12.',
      cta: 'Request a Pipe Quote',
      breadcrumb: 'Pipe Schedule Chart',
      slug: 'pipe-schedule-chart'
    }
  };

  const currentTool = toolsData[toolType] || toolsData['flange-dimension-chart'];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem', paddingTop: '5.5rem' }}>
      <Breadcrumbs items={[
        { name: 'Engineering Tools & Charts', url: '/weight-calculator/' },
        { name: currentTool.breadcrumb, url: `/${currentTool.slug}/` }
      ]} />

      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.85), rgba(18, 21, 28, 0.95)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 0 3rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ 
            backgroundColor: 'var(--primary-yellow-glow)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid var(--primary-yellow-solid-glow)',
            fontSize: '0.8rem',
            fontWeight: '700',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Technical Sizing Chart
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0', lineHeight: '1.2' }}>
            {currentTool.h1}
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            {currentTool.desc}
          </p>
        </div>
      </section>

      <CategoryGuide guide={CHART_GUIDES[currentTool.slug]} />

      <section style={{ padding: '0 0 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => onEnquireClick(`${currentTool.breadcrumb} enquiry`)} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              {currentTool.cta} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
