import React, { useState } from 'react';
import { Table, Download, Calculator, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function ChartToolsPage({ toolType, onEnquireClick }) {
  const [selectedClass, setSelectedClass] = useState('150');

  const toolsData = {
    'flange-dimension-chart': {
      title: 'ASME B16.5 Flange Dimension Chart: Class 150-2500',
      h1: 'ASME B16.5 Flange Dimension Charts & Size Specs',
      desc: 'Interactive dimension lookup table for Class 150, 300, 600, 900, 1500, and 2500 Weld Neck, Slip-On, and Blind flanges.',
      breadcrumb: 'Flange Dimension Chart',
      slug: 'flange-dimension-chart'
    },
    'flange-weight-chart': {
      title: 'Flange Weight Chart & Calculator (kg & lbs)',
      h1: 'Flange Weight Chart (Class 150 to Class 2500)',
      desc: 'Calculate exact weights in kg and lbs for ASME B16.5 flanges across nominal pipe sizes 1/2" to 24".',
      breadcrumb: 'Flange Weight Chart',
      slug: 'flange-weight-chart'
    },
    'flange-bolt-chart': {
      title: 'Flange Bolt Chart: Size, Quantity & Torque Specs',
      h1: 'ASME B16.5 Flange Bolt & Stud Sizing Chart',
      desc: 'Determine required bolt diameter, length, quantity, and recommended torque per flange class and NPS.',
      breadcrumb: 'Flange Bolt Chart',
      slug: 'flange-bolt-chart'
    },
    'pipe-schedule-chart': {
      title: 'Pipe Schedule Chart: Sch 5S to XXS Wall Thickness',
      h1: 'Pipe Schedule & Wall Thickness Dimensions (mm & inches)',
      desc: 'Complete wall thickness and inside diameter values across Standard (STD), Extra Strong (XS), Double Extra Strong (XXS), and Sch 5S to 160.',
      breadcrumb: 'Pipe Schedule Chart',
      slug: 'pipe-schedule-chart'
    }
  };

  const currentTool = toolsData[toolType] || toolsData['flange-dimension-chart'];

  const flangeDimensions = [
    { nps: '1/2"', od: '89', pcd: '60.3', holes: '4', holeDia: '15.9', c150wt: '0.9', c300wt: '1.4', c600wt: '1.8' },
    { nps: '3/4"', od: '98', pcd: '69.8', holes: '4', holeDia: '15.9', c150wt: '1.2', c300wt: '1.8', c600wt: '2.4' },
    { nps: '1"', od: '108', pcd: '79.4', holes: '4', holeDia: '15.9', c150wt: '1.4', c300wt: '2.3', c600wt: '3.0' },
    { nps: '1-1/4"', od: '117', pcd: '88.9', holes: '4', holeDia: '15.9', c150wt: '1.8', c300wt: '3.0', c600wt: '4.1' },
    { nps: '1-1/2"', od: '127', pcd: '98.4', holes: '4', holeDia: '15.9', c150wt: '2.3', c300wt: '3.6', c600wt: '5.2' },
    { nps: '2"', od: '152', pcd: '120.6', holes: '4', holeDia: '19.0', c150wt: '3.2', c300wt: '4.5', c600wt: '7.3' },
    { nps: '2-1/2"', od: '178', pcd: '139.7', holes: '4', holeDia: '19.0', c150wt: '4.5', c300wt: '6.8', c600wt: '10.5' },
    { nps: '3"', od: '190', pcd: '152.4', holes: '4', holeDia: '19.0', c150wt: '5.2', c300wt: '8.2', c600wt: '13.2' },
    { nps: '4"', od: '229', pcd: '190.5', holes: '8', holeDia: '19.0', c150wt: '7.5', c300wt: '13.0', c600wt: '21.0' },
    { nps: '6"', od: '279', pcd: '241.3', holes: '8', holeDia: '22.2', c150wt: '11.0', c300wt: '21.0', c600wt: '37.0' },
    { nps: '8"', od: '343', pcd: '298.5', holes: '8', holeDia: '22.2', c150wt: '18.0', c300wt: '34.0', c600wt: '61.0' },
    { nps: '10"', od: '406', pcd: '362.0', holes: '12', holeDia: '25.4', c150wt: '26.0', c300wt: '52.0', c600wt: '92.0' },
    { nps: '12"', od: '483', pcd: '431.8', holes: '12', holeDia: '25.4', c150wt: '40.0', c300wt: '78.0', c600wt: '132.0' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
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

      {/* Class Selector Bar */}
      <section style={{ padding: '2rem 0 0 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {['150', '300', '600', '900', '1500', '2500'].map((cls) => (
            <button 
              key={cls}
              onClick={() => setSelectedClass(cls)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: selectedClass === cls ? 'var(--primary-yellow)' : 'var(--bg-dark-800)',
                color: selectedClass === cls ? '#000' : 'var(--text-primary)',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Class {cls}
            </button>
          ))}
        </div>
      </section>

      {/* Main Data Table */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ overflowX: 'auto', backgroundColor: 'var(--bg-dark-800)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(255,180,0,0.1)', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-yellow)' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>NPS (Inches)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Outside Dia (OD mm)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Bolt Circle (PCD mm)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>No. of Bolt Holes</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Hole Dia (mm)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Est. Weight (kg)</th>
                </tr>
              </thead>
              <tbody>
                {flangeDimensions.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '0.925rem' }}>
                    <td style={{ padding: '1rem', fontWeight: '700' }}>{row.nps}</td>
                    <td style={{ padding: '1rem' }}>{row.od}</td>
                    <td style={{ padding: '1rem' }}>{row.pcd}</td>
                    <td style={{ padding: '1rem' }}>{row.holes}</td>
                    <td style={{ padding: '1rem' }}>{row.holeDia}</td>
                    <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--primary-yellow)' }}>
                      {selectedClass === '150' ? row.c150wt : selectedClass === '300' ? row.c300wt : row.c600wt} kg
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => onEnquireClick(`Flange Chart Request - Class ${selectedClass}`)} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Get Mill Price Quote for Class {selectedClass} Flanges <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
