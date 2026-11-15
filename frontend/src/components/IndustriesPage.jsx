import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

// Industry hub for electropolished pipe and tube. Recommendations match the individual
// industry guides (src/data/industryGuides.js, specGuides.js); company claims are limited to
// facts confirmed by the owner.
const INDUSTRIES = [
  {
    title: 'Pharmaceutical & API',
    href: '/industries/pharmaceutical-electropolished-pipes/',
    lines: 'Purified water, WFI and clean steam loops, process transfer, CIP',
    spec: '316L, ASTM A270 S2 / ASME BPE, SF4 (Ra 0.38 µm) electropolished bore',
  },
  {
    title: 'Biotechnology & Biopharma',
    href: '/industries/biotech-electropolished-pipes/',
    lines: 'Media and buffer prep, bioreactor feeds, harvest and purification',
    spec: '316L to ASME BPE, SF4; 304L only for plant utilities',
  },
  {
    title: 'Dairy & Milk Processing',
    href: '/industries/dairy-electropolished-pipes/',
    lines: 'Reception, pasteuriser, separator, filler and CIP circuits',
    spec: '304L SF1 on most product lines; 316L SF4 on CIP loops and salted products',
  },
  {
    title: 'Food Processing',
    href: '/industries/food-processing-electropolished-pipes/',
    lines: 'Sauces, ready meals, allergen-changeover lines and CIP',
    spec: '304L sanitary tube for most products; 316L for salt, acid and hot CIP',
  },
  {
    title: 'Beverage & Juice',
    href: '/industries/beverage-electropolished-pipes/',
    lines: 'Juice, carbonated drinks, RTD tea and coffee, bottled water',
    spec: '316L for acidic juices and lines that stand full; 304L for water and neutral drinks',
  },
  {
    title: 'Mango Pulp & Fruit Processing',
    href: '/industries/mango-pulp-electropolished-pipes/',
    lines: 'Pulper discharge, concentration, aseptic sterilisation and filling',
    spec: '316L electropolished, because pulp is acidic, fibrous and held hot',
  },
  {
    title: 'Breweries & Distilleries',
    href: '/industries/brewery-electropolished-pipes/',
    lines: 'Wort, fermentation, bright beer, yeast handling and CIP',
    spec: '304L for most of the plant; 316L where hot acid CIP or chloride is present',
  },
  {
    title: 'Cosmetics & Personal Care',
    href: '/industries/cosmetics-electropolished-pipes/',
    lines: 'Creams, lotions, shampoos and purified water',
    spec: '316L electropolished, for chloride-bearing products and sanitisers',
  },
  {
    title: 'Medical Device Manufacturing',
    href: '/industries/medical-devices-electropolished-pipes/',
    lines: 'Purified water, clean compressed air and process gas utilities',
    spec: '316L electropolished tube with heat-number traceability for the device file',
  },
  {
    title: 'Specialty Chemicals',
    href: '/industries/specialty-chemicals-electropolished-pipes/',
    lines: 'High-purity reagents, solvents, sampling and instrument lines',
    spec: '316L electropolished; 904L supplied electropolished for acid and chloride service',
  },
  {
    title: 'PW & WFI Water Systems',
    href: '/high-purity-stainless-steel-pipes/',
    lines: 'Generation, storage and distribution loops for purified water and WFI',
    spec: '316L, ASME BPE, SF4 electropolished, orbitally welded',
  },
  {
    title: 'Semiconductor & Electronics',
    href: '/ultra-high-purity-ep-tubes/',
    lines: 'Process gas and high-purity chemical distribution',
    spec: 'Ultra-high-purity 316L electropolished tube to the owner’s gas specification',
  },
];

const ENQUIRY = [
  'The industry and the circuits involved, for example WFI distribution, CIP return or a pulp line after the pulper.',
  'Product standard and grade: ASTM A270 / ASME BPE tube, A269 instrument tube or A312 pipe, in 304L or 316L.',
  'Sizes as tube OD x wall or pipe NPS and schedule, with metres per size.',
  'ID finish as an ASME BPE designation (SF1, SF4) or a maximum Ra, and the OD finish.',
  'The documents your quality team files: we supply an EN 10204 3.1 certificate traced to heat number, NABL-lab chemical analysis, PMI on every length and an Ra report for each electropolished lot.',
  'Delivery location. Dispatch and transit are confirmed in writing with the quotation.',
];

const card = {
  backgroundColor: 'var(--bg-dark-800)',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};
const h2 = { fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.25' };
const p = { color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '820px' };

export default function IndustriesPage() {
  return (
    <div className="industries-page-wrapper" style={{ backgroundColor: 'var(--bg-dark-900)', color: 'var(--text-primary)', paddingBottom: '6rem', paddingTop: '5.5rem' }}>

      {/* Hero Header */}
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
            Electropolished Pipe &amp; Tube by Industry
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Industries <span>We Serve</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '760px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Electropolished stainless steel pipes and tubes for pharmaceutical, biotech, dairy, food, beverage, brewery, cosmetics, medical device and chemical plants across India, supplied from Mumbai with an EN 10204 3.1 certificate and PMI on every length.
          </p>
          <a href="/contact-us/" className="btn btn-primary" style={{ marginTop: '1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Request a quotation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Industry grid */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <h2 style={h2}>The Right Grade and Finish for Each Industry</h2>
          <p style={{ ...p, marginBottom: '2rem' }}>
            The same 316L tube can be the right answer in a WFI loop and an expensive one in a brewery cellar. Each industry below links to a guide covering the lines that need an electropolished bore, the grade and finish to specify, design points that decide whether the line cleans and validates, and what to send with an enquiry.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '1.5rem' }}>
            {INDUSTRIES.map((ind) => (
              <a key={ind.href} href={ind.href} style={{ ...card, textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--primary-yellow)', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{ind.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Typical lines:</strong> {ind.lines}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Usual specification:</strong> {ind.spec}
                </p>
                <span style={{ color: 'var(--primary-yellow)', fontSize: '0.85rem', fontWeight: '700', marginTop: 'auto' }}>
                  Read the {ind.title.toLowerCase()} guide →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Decision guidance */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <h2 style={h2}>304L or 316L, SF1 or SF4: How Industries Decide</h2>
          <p style={p}>
            Three questions settle most choices. First, is chloride present, from salted product, brine, hard-water CIP or chlorinated sanitiser, especially at temperature? If so, 316L, because its molybdenum resists the pitting that attacks 304L at welds and in lines that stand full. Second, must the line be validated, as in pharmaceutical water, bioprocess and medical device utilities? Validation favours an SF4 electropolished bore (Ra 0.38 µm maximum) with documented roughness, because it cleans and sanitises reproducibly and resists rouge. Third, what does the product leave behind? Fibre, sugar, protein and viscous creams anchor in the grain lines of a mechanically polished surface, so pulp, cosmetics and some food lines are electropolished even where no regulation demands it.
          </p>
          <p style={{ ...p, marginTop: '1rem' }}>
            Where none of these apply, as on many dairy product lines and most of a brewery, 304L tube with an SF1 polished bore (Ra 0.51 µm maximum) is the economical and proven choice. The <a href="/standards/" style={{ color: 'var(--primary-yellow)' }}>standards overview</a> explains which product standard each industry orders against, and the <a href="/asme-bpe-electropolished-tubes/" style={{ color: 'var(--primary-yellow)' }}>ASME BPE guide</a> sets out the SF designations.
          </p>
        </div>
      </section>

      {/* What every industry receives */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <h2 style={h2}>Documents Every Industry Receives</h2>
          <p style={p}>
            Auditors in different industries ask different questions, but they all ask for evidence. Every electropolished order is supplied under our ISO 9001:2015 quality system with an <a href="/en-10204-31-mtc/" style={{ color: 'var(--primary-yellow)' }}>EN 10204 3.1 certificate</a> traced to heat number, chemical analysis by a NABL-accredited laboratory, PMI on every length and an internal Ra report for each electropolished lot. <a href="/testing-inspection/" style={{ color: 'var(--primary-yellow)' }}>Testing and inspection</a> explains what each document proves.
          </p>
        </div>
      </section>

      {/* Enquiry checklist */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <h2 style={h2}>What to Send With Your Enquiry</h2>
          <ul style={{ ...p, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {ENQUIRY.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p style={{ ...p, marginTop: '1rem' }}>
            We reply with a quotation within 24 hours of a complete enquiry. Plants that need forged flanges or buttweld fittings alongside the tube can find them under <a href="/flanges/" style={{ color: 'var(--primary-yellow)' }}>flanges</a> and <a href="/buttweld-fittings/" style={{ color: 'var(--primary-yellow)' }}>buttweld fittings</a>.
          </p>
          <a href="/contact-us/" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Send your line list <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
}
