import React from 'react';

// Ordering facts shared by the state hub pages. Only owner-confirmed facts: no stock, transit days, MOQ, customers or prices.
export default function HubOrderingSection({ state, onEnquireClick }) {
  const card = { backgroundColor: 'var(--bg-dark-800)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem' };
  const h3 = { fontSize: '1.15rem', fontWeight: '700', color: '#fff', marginBottom: '0.75rem' };
  const li = { color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '0.4rem' };
  return (
    <section style={{ padding: '0 0 4.5rem' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem' }}>
          Ordering Electropolished Pipes and Tubes in {state}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '2rem' }}>
          Sakshi Forge manufactures and electropolishes stainless steel pipes and tubes in Mumbai and supplies buyers across {state}.
          Send your requirement and we reply with a quotation within 24 hours. Dispatch and transit are confirmed in writing with each quotation.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '1.5rem' }}>
          <div style={card}>
            <h3 style={h3}>Grades and Standards</h3>
            <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
              <li style={li}>Grades 304, 304L, 316 and 316L; 904L is also supplied electropolished.</li>
              <li style={li}>ASTM A270 for sanitary tubing and ASTM A269 for general-service tubing.</li>
              <li style={li}>ASTM A249 for welded tubes and ASTM A312 for process pipe.</li>
              <li style={li}>316L is the usual choice for product-contact lines; 304L suits many plant utilities.</li>
            </ul>
          </div>
          <div style={card}>
            <h3 style={h3}>Surface Finish (ASME BPE)</h3>
            <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
              <li style={li}>SF1: mechanically polished bore, Ra up to 0.51 µm (20 µin).</li>
              <li style={li}>SF4: mechanically polished and electropolished bore, Ra up to 0.38 µm (15 µin).</li>
              <li style={li}>Electropolishing removes a thin surface layer, leaving a smoother, chromium-rich passive film that is easier to clean.</li>
              <li style={li}>Name the finish designation on the order so the Ra limit is checked against it.</li>
            </ul>
          </div>
          <div style={card}>
            <h3 style={h3}>Documents with Every Order</h3>
            <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
              <li style={li}>EN 10204 3.1 mill test certificate traced to the heat number.</li>
              <li style={li}>PMI (positive material identification) on every length.</li>
              <li style={li}>Internal Ra report for each electropolished lot.</li>
              <li style={li}>ISO 9001:2015 quality system; testing in a NABL-accredited lab.</li>
            </ul>
          </div>
          <div style={card}>
            <h3 style={h3}>What to Send for a Quote</h3>
            <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
              <li style={li}>Grade and standard, for example 316L to ASTM A270.</li>
              <li style={li}>Outside diameter, wall thickness and length per piece.</li>
              <li style={li}>Quantity in metres or pieces, and the finish (SF1 or SF4).</li>
              <li style={li}>Delivery city in {state} and the date you need the material on site.</li>
            </ul>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => onEnquireClick(`${state} State Hub RFQ`)} style={{ marginTop: '2rem', padding: '0.85rem 1.6rem' }}>
          Request a Quote for {state}
        </button>
      </div>
    </section>
  );
}
