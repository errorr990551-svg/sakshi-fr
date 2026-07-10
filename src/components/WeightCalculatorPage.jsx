import React, { useState } from 'react';
import { ArrowRight, Calculator, Sparkles, Scale, Info } from 'lucide-react';
import { handleLinkClick } from '../utils/router';

export default function WeightCalculatorPage({ onEnquireClick }) {
  const [shape, setShape] = useState('pipe');
  const [grade, setGrade] = useState('304');
  const [dimensions, setDimensions] = useState({
    od: '',
    wall: '',
    length: '',
    width: '',
    thickness: '',
    diameter: '',
    outerDiameter: '',
    innerDiameter: '',
    quantity: '1'
  });
  const [result, setResult] = useState(null);

  // Density map (g/cm3)
  const densities = {
    '304': 7.93,
    '316': 7.98,
    '321': 7.93,
    '310': 7.98,
    'duplex': 7.82,
    'carbon': 7.85
  };

  const handleInputChange = (name, val) => {
    setDimensions(prev => ({ ...prev, [name]: val }));
  };

  const calculateWeight = (e) => {
    e.preventDefault();
    const d = densities[grade] || 7.93;
    const qty = parseFloat(dimensions.quantity) || 1;
    let weight = 0; // in kg

    if (shape === 'pipe') {
      const od = parseFloat(dimensions.od);
      const wall = parseFloat(dimensions.wall);
      const len = parseFloat(dimensions.length);
      if (od && wall && len) {
        // formula: weight (kg) = (OD - Wall) * Wall * 0.02466 * length * density_ratio (compared to 7.93 base)
        const densityRatio = d / 7.93;
        weight = (od - wall) * wall * 0.02466 * len * densityRatio;
      }
    } else if (shape === 'bar') {
      const dia = parseFloat(dimensions.diameter);
      const len = parseFloat(dimensions.length);
      if (dia && len) {
        // formula: weight = dia^2 * 0.006165 * length * density_ratio
        const densityRatio = d / 7.93;
        weight = dia * dia * 0.006165 * len * densityRatio;
      }
    } else if (shape === 'sheet') {
      const w = parseFloat(dimensions.width); // in mm
      const len = parseFloat(dimensions.length); // in meters
      const thk = parseFloat(dimensions.thickness); // in mm
      if (w && len && thk) {
        // formula: weight = width (mm) * length (m) * thickness (mm) * density / 1000
        weight = (w * len * thk * d) / 1000;
      }
    } else if (shape === 'flange') {
      const od = parseFloat(dimensions.outerDiameter);
      const id = parseFloat(dimensions.innerDiameter);
      const thk = parseFloat(dimensions.thickness);
      if (od && thk) {
        const inner = id || 0;
        // volume = pi * (R^2 - r^2) * h
        const R = od / 20; // in cm
        const r = inner / 20; // in cm
        const h = thk / 10; // in cm
        const volume = Math.PI * (R * R - r * r) * h;
        weight = (volume * d) / 1000;
      }
    }

    if (weight > 0) {
      setResult({
        single: weight.toFixed(2),
        total: (weight * qty).toFixed(2),
        quantity: qty
      });
    } else {
      setResult(null);
    }
  };

  return (
    <div className="calculator-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>
      
      {/* 1. Header Banner */}
      <section style={{ 
        background: 'linear-gradient(rgba(11, 12, 16, 0.8), rgba(18, 21, 28, 0.95)), url("/hero_forge.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0 3rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ 
            backgroundColor: 'var(--primary-yellow-glow)', 
            color: 'var(--primary-yellow)', 
            border: '1px solid var(--primary-yellow-solid-glow)',
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: '700',
            padding: '0.35rem 0.85rem',
            borderRadius: '50px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Engineering Tools
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Metal <span>Weight Calculator</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Quickly calculate the theoretical weight of stainless steel pipes, round bars, sheets, plates, and flanges in various grades instantly.
          </p>
        </div>
      </section>

      {/* 2. Calculator Main Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="product-simple-grid" style={{ gap: '3rem' }}>
            
            {/* Left: Input Form */}
            <div style={{ backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem' }}>
              <form onSubmit={calculateWeight} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Shape Selection */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Select Shape</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                    {[
                      { id: 'pipe', label: 'Pipe / Tube' },
                      { id: 'bar', label: 'Round Bar' },
                      { id: 'sheet', label: 'Sheet / Plate' },
                      { id: 'flange', label: 'Flange' }
                    ].map(s => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => { setShape(s.id); setResult(null); }}
                        style={{
                          padding: '0.75rem 0.25rem',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          backgroundColor: shape === s.id ? 'var(--primary-yellow)' : 'var(--bg-dark-700)',
                          color: shape === s.id ? '#000' : 'var(--text-primary)',
                          border: shape === s.id ? '1px solid var(--primary-yellow)' : '1px solid var(--border-color)',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grade Selection */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Material Grade</label>
                  <select
                    value={grade}
                    onChange={(e) => { setGrade(e.target.value); setResult(null); }}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      backgroundColor: 'var(--bg-dark-700)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      fontSize: '0.95rem'
                    }}
                  >
                    <option value="304">SS 304 / 304L (Density 7.93)</option>
                    <option value="316">SS 316 / 316L (Density 7.98)</option>
                    <option value="321">SS 321 (Density 7.93)</option>
                    <option value="310">SS 310S (Density 7.98)</option>
                    <option value="duplex">Duplex 2205 (Density 7.82)</option>
                    <option value="carbon">Carbon Steel (Density 7.85)</option>
                  </select>
                </div>

                {/* Dynamic Dimension Inputs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {shape === 'pipe' && (
                    <>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Outer Diameter (OD) - mm</label>
                        <input type="number" step="any" required placeholder="e.g. 50.8" value={dimensions.od} onChange={(e) => handleInputChange('od', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Wall Thickness - mm</label>
                        <input type="number" step="any" required placeholder="e.g. 2.0" value={dimensions.wall} onChange={(e) => handleInputChange('wall', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                      <div style={{ gridColumn: 'span 2' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Length (meters)</label>
                        <input type="number" step="any" required placeholder="e.g. 6" value={dimensions.length} onChange={(e) => handleInputChange('length', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                    </>
                  )}

                  {shape === 'bar' && (
                    <>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Diameter - mm</label>
                        <input type="number" step="any" required placeholder="e.g. 25" value={dimensions.diameter} onChange={(e) => handleInputChange('diameter', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Length (meters)</label>
                        <input type="number" step="any" required placeholder="e.g. 3" value={dimensions.length} onChange={(e) => handleInputChange('length', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                    </>
                  )}

                  {shape === 'sheet' && (
                    <>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Thickness - mm</label>
                        <input type="number" step="any" required placeholder="e.g. 3" value={dimensions.thickness} onChange={(e) => handleInputChange('thickness', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Width - mm</label>
                        <input type="number" step="any" required placeholder="e.g. 1250" value={dimensions.width} onChange={(e) => handleInputChange('width', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                      <div style={{ gridColumn: 'span 2' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Length (meters)</label>
                        <input type="number" step="any" required placeholder="e.g. 2.5" value={dimensions.length} onChange={(e) => handleInputChange('length', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                    </>
                  )}

                  {shape === 'flange' && (
                    <>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Outer Diameter - mm</label>
                        <input type="number" step="any" required placeholder="e.g. 150" value={dimensions.outerDiameter} onChange={(e) => handleInputChange('outerDiameter', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Inner Diameter - mm</label>
                        <input type="number" step="any" placeholder="e.g. 50 (optional)" value={dimensions.innerDiameter} onChange={(e) => handleInputChange('innerDiameter', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                      <div style={{ gridColumn: 'span 2' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Thickness - mm</label>
                        <input type="number" step="any" required placeholder="e.g. 18" value={dimensions.thickness} onChange={(e) => handleInputChange('thickness', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Quantity</label>
                  <input type="number" min="1" required value={dimensions.quantity} onChange={(e) => handleInputChange('quantity', e.target.value)} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-dark-700)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-primary)' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem 0', justifyContent: 'center' }}>
                  Calculate Weight <Calculator size={18} style={{ marginLeft: '0.5rem' }} />
                </button>

              </form>
            </div>

            {/* Right: Results Display */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
              
              {result ? (
                <div style={{
                  backgroundColor: 'var(--bg-dark-800)',
                  border: '1px solid var(--primary-yellow-solid-glow)',
                  borderRadius: '12px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                  textAlign: 'center',
                  background: 'radial-gradient(circle at center, rgba(255, 193, 7, 0.03) 0%, transparent 75%), var(--bg-dark-800)'
                }}>
                  <Scale size={48} style={{ color: 'var(--primary-yellow)', margin: '0 auto 1.5rem auto' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '700' }}>
                    Calculated Weight
                  </span>
                  
                  <div style={{ margin: '1.5rem 0' }}>
                    <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--primary-yellow)', lineHeight: '1' }}>
                      {result.total} <span style={{ fontSize: '1.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>kg</span>
                    </div>
                    {result.quantity > 1 && (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                        Single Unit Weight: {result.single} kg (Qty: {result.quantity})
                      </p>
                    )}
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Material:</span>
                      <span style={{ fontWeight: '600' }}>Stainless Steel {grade}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Shape Profile:</span>
                      <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{shape}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onEnquireClick(`SS ${grade} ${shape.charAt(0).toUpperCase() + shape.slice(1)} - Weight: ${result.total}kg`)}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '2rem', padding: '0.9rem 0' }}
                  >
                    Request Quote for this Spec <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <div style={{
                  backgroundColor: 'var(--bg-dark-800)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Info size={40} style={{ opacity: 0.4 }} />
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    Enter dimensions on the left and click Calculate to view theoretical metal weights.
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                    Note: Values are calculated based on standard material density tolerances.
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
