// Custom Rich City Content Data for International EP Pipes Handoff Pages
// Built specifically for Canberra (Australia), Abu Dhabi (UAE), and Al Ain (UAE)
import { tamilNaduCityData } from './tamilNaduCityData.js';
import { ADDRESS_LINE } from './business.js';

export const customCityData = {
  'canberra-australia': {
    slug: 'canberra-australia',
    city: 'Canberra',
    state: 'ACT',
    country: 'Australia',
    pageTitle: 'Electropolished Pipes for Canberra – Quote in 30 Min',
    metaDescription: 'SF4 electropolished 316L and 304L tube for Canberra labs, hospitals and breweries. Quote in 30 minutes, 24×7. 3.1 traced to heat number. Shipped from Mumbai.',
    h1: 'Electropolished Pipes & Tubes for Canberra',
    eyebrow: 'Export Supply · Canberra, ACT, Australia',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Market Directory', path: '/market-area/' },
      { name: 'Australia', path: '/market-area/#australia' },
      { name: 'Canberra', path: '/market-area/canberra-australia' }
    ],
    heroIntro: 'Sakshi Forge, Mumbai, supplies ASTM A270 / ASME BPE electropolished stainless steel tubing to buyers in Canberra. We quote SS 316L and 304L EP tube finished to SF4 (internal Ra ≤ 0.38 µm). Every length is PMI-checked and ships with an EN 10204 3.1 certificate traced to heat number, for pharma, laboratory, hospital, brewery and food process lines.',
    trustBadges: [
      'ISO 9001:2015 Certified',
      'EN 10204 3.1 Traced to Heat No.',
      'PMI on Every Length',
      'Ra Report per EP Lot'
    ],
    primaryBtnText: 'Request a Quote for Canberra',
    localBlock: {
      eyebrow: 'CANBERRA & ACT SUPPLY',
      title: "Electropolished Tubing for Canberra's Labs, Hospitals & Breweries",
      body: "Canberra is not a heavy-industry city. Demand for electropolished tubing here comes from research, healthcare and craft beverage production. We supply EP tube for:",
      points: [
        'Research laboratories — purified water, specialty gas and clean utility lines.',
        'Hospital pharmacy and sterile services — PW/WFI and clean-steam distribution.',
        'Craft breweries and distilleries — product transfer and CIP lines in 304L and 316L.',
        'Food producers — sanitary process piping.'
      ],
      infoCards: [
        { title: 'Key Buyer Sectors', text: 'Research labs · Hospitals · Craft brewing & distilling · Food production' },
        { title: 'Documents', text: 'EN 10204 3.1 certificate traced to heat number · Ra report per EP lot' }
      ],
      relatedPagesText: 'Also supplying: Electropolished Pipes for Sydney · Melbourne · All Australia'
    },
    logistics: {
      title: 'How We Ship Electropolished Pipes from Mumbai to Canberra',
      processSteps: [
        { num: 1, text: 'Heat number checked against the EN 10204 3.1 certificate' },
        { num: 2, text: 'PMI on every length' },
        { num: 3, text: 'Electropolishing to SF4 (internal Ra ≤ 0.38 µm)' },
        { num: 4, text: 'Ra report issued for the EP lot' },
        { num: 5, text: 'Ends capped and tube sleeved, then packed and dispatched from Mumbai' }
      ],
      videoId: 'SJqbbUzYjXg',
      infoRows: [
        { label: 'Dispatch and transit', value: 'Depend on size, quantity and stock; confirmed in writing with each quotation' },
        { label: 'Documents', value: 'EN 10204 3.1 certificate traced to heat number · Ra report per EP lot' }
      ],
      footnote: 'Each dispatch carries an EN 10204 3.1 certificate traced to heat number, and each electropolished lot an Ra report, tested in a NABL-accredited lab.'
    },
    comparison: {
      intro: 'Electropolishing removes a thin surface layer electrochemically, levelling peaks and leaving a chromium-enriched passive film. Mechanical polishing only abrades the surface.',
      headers: ['Surface Property', 'Electropolished (EP)', 'Mechanically Polished (MP)', 'Why It Matters'],
      rows: [
        {
          property: 'Internal Ra (ASME BPE)',
          ep: 'SF4 ≤ 0.38 µm (15 µin) · SF5 ≤ 0.51 µm (20 µin) · SF6 ≤ 0.64 µm (25 µin)',
          mp: 'SF1 ≤ 0.51 µm (20 µin) · SF2 ≤ 0.64 µm (25 µin) · SF3 ≤ 0.76 µm (30 µin)',
          why: 'Lower Ra resists bacterial adhesion and biofilm in sanitary loops'
        },
        {
          property: 'Surface structure',
          ep: 'Levelled, no directional lay',
          mp: 'Directional abrasive scratches',
          why: 'Faster, more reliable CIP and SIP cycles'
        },
        {
          property: 'Passive layer',
          ep: 'Chromium-enriched passive layer',
          mp: 'Standard passive layer unless separately passivated',
          why: 'Better resistance to rouging and pitting'
        },
        {
          property: 'Typical specification',
          ep: 'ASTM A270 + ASME BPE SF4–SF6',
          mp: 'ASTM A270 + ASME BPE SF1–SF3',
          why: 'Commonly specified for TGA (PIC/S), EU-GMP and FDA-regulated product-contact systems'
        }
      ]
    },
    grades: {
      intro: 'All electropolished tube dispatched to Canberra conforms to ASTM A270 and ASME BPE. Chemistry shown is the ASTM limit; your MTC shows the actual heat analysis.',
      cards: [
        {
          title: 'SS 316L EP Tubing',
          tag: 'PHARMA & BIOTECH',
          desc: 'Low-carbon, molybdenum-bearing grade for purified water, WFI and clean-steam systems.',
          specs: [
            'Cr: 16.0–18.0% | Ni: 10.0–14.0% | Mo: 2.0–3.0% | C: ≤ 0.035% max',
            'S: 0.005–0.017% for orbital weldability (ASME BPE)',
            'Surface finish: SF4 (Ra ≤ 0.38 µm) electropolished'
          ]
        },
        {
          title: 'SS 304L EP Tubing',
          tag: 'FOOD, DAIRY & BREWERY',
          desc: 'Low-carbon 18/8 austenitic grade for brewery, dairy and food product lines.',
          specs: [
            'Cr: 18.0–20.0% | Ni: 8.0–12.0% | C: ≤ 0.035% max',
            'Surface finish: SF4 electropolished, or SF1 (Ra ≤ 0.51 µm) mechanically polished'
          ]
        }
      ]
    },
    whyUs: {
      title: 'Why Canberra Buyers Choose Sakshi Forge',
      cards: [
        {
          num: '1',
          title: 'Ultra-Smooth Internal Surface',
          desc: 'Electropolished to Ra ≤ 0.38 µm (SF4), removing the micro-burrs and crevices where biofilm starts.'
        },
        {
          num: '2',
          title: 'PMI on Every Length, 3.1 per Heat',
          desc: 'Every length is PMI-checked and ships with an EN 10204 3.1 certificate traced to its heat number.'
        },
        {
          num: '3',
          title: 'Quote in 30 Minutes, 24×7',
          desc: 'Send OD × wall, grade, finish and quantity; a written quote comes back within 30 minutes, any hour.'
        },
        {
          num: '4',
          title: 'EP Tube and EP Fittings on One Quote',
          desc: 'EP tube plus EP elbows, tees and reducers, quoted together so the finish matches across the line.'
        },
        {
          num: '5',
          title: 'Ends Capped, Tube Sleeved',
          desc: 'Ends are capped and each tube is sleeved before packing, so the bore arrives clean.'
        }
      ]
    },
    faqs: [
      {
        q: 'Do you supply EN 10204 3.1 certified electropolished pipes to Canberra?',
        a: 'Yes. Every shipment carries an EN 10204 3.1 certificate traced to the heat number, with PMI on every length and an Ra report for each electropolished lot, tested in a NABL-accredited lab.'
      },
      {
        q: 'What surface roughness (Ra) finishes are available for Canberra pharma and lab projects?',
        a: 'We supply electropolished SF4 (Ra ≤ 0.38 µm / 15 µin), and mechanically polished SF1 (Ra ≤ 0.51 µm / 20 µin) for lines that do not need an electropolished bore.'
      },
      {
        q: 'What is the delivery time to Canberra?',
        a: 'Dispatch and transit depend on size, quantity and stock. Both are confirmed in writing with each quotation.'
      },
      {
        q: 'My drawing says AS 1528. Can you quote it?',
        a: 'We supply tube to ASTM A270 outside diameters. If your drawing names AS 1528, send it with the RFQ and check the equivalence with your engineer before ordering.'
      },
      {
        q: 'How do I order electropolished pipes from Australia?',
        a: 'Send the grade, OD × wall, finish, length and quantity through the RFQ form, by phone on +91 82913 66340, or to info@steelmanufacturer.in. A written quote comes back within 30 minutes, 24×7.'
      }
    ],
    rfq: {
      title: 'Request a Manufacturer Quotation for Canberra',
      body: 'Send OD × wall, grade, finish and quantity for ASTM A270 electropolished 316L or 304L tube and EP fittings. Quote within 30 minutes, 24×7, with dispatch and transit confirmed in writing.',
      email: 'info@steelmanufacturer.in',
      footnote: 'EN 10204 3.1 certificate traced to heat number with every dispatch, and an Ra report for each electropolished lot.'
    },
    closing: {
      title: 'Specify Electropolished Tube for Your Next ACT Project',
      body: 'Send your grade, OD × wall, finish and quantity. A written quote comes back within 30 minutes, 24×7, with dispatch and transit confirmed in writing.',
      buttonText: 'Contact Us'
    }
  },

  'abu-dhabi-uae': {
    slug: 'abu-dhabi-uae',
    city: 'Abu Dhabi',
    state: 'Abu Dhabi',
    country: 'UAE',
    pageTitle: 'EP Stainless Tube for Abu Dhabi – Quote in 30 Min',
    metaDescription: 'SF4 electropolished 316L and 304L tube for Abu Dhabi pharma, hospital and food plants. Quote in 30 minutes, 24×7. 3.1 traced to heat number. Shipped from Mumbai.',
    h1: 'Electropolished Pipes & Tubes for Abu Dhabi',
    eyebrow: 'Export Supply · Abu Dhabi, United Arab Emirates',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Market Directory', path: '/market-area/' },
      { name: 'UAE', path: '/market-area/#uae' },
      { name: 'Abu Dhabi', path: '/market-area/abu-dhabi-uae' }
    ],
    heroIntro: 'Sakshi Forge, Mumbai, supplies ASTM A270 / ASME BPE electropolished stainless steel tubing to buyers in Abu Dhabi. We quote SS 316L and 304L EP tube finished to SF4 (internal Ra ≤ 0.38 µm). Every length is PMI-checked and ships with an EN 10204 3.1 certificate traced to heat number, for pharmaceutical, biotech, hospital, laboratory, dairy and food process lines.',
    trustBadges: [
      'ISO 9001:2015 Certified',
      'EN 10204 3.1 Traced to Heat No.',
      'PMI on Every Length',
      'Ra Report per EP Lot'
    ],
    primaryBtnText: 'Request a Quote for Abu Dhabi',
    localBlock: {
      eyebrow: 'ABU DHABI & UAE SUPPLY',
      title: "Electropolished Tubing for Abu Dhabi's Pharma, Biotech & Food Plants",
      body: "Pharmaceutical, biotech and hospital plants run purified water, WFI and clean-steam systems, where electropolished tube is specified. Food and beverage lines often need only a mechanically polished bore. We quote EP tube for:",
      points: [
        'Pharmaceutical and biotech plants — PW/WFI loops, clean steam and CIP/SIP lines in 316L SF4.',
        'Hospitals and hospital pharmacies — purified water and sterile services.',
        'Research laboratories and universities — purified water, specialty gas and clean utility lines.',
        'Dairy, juice and bottled-water producers — sanitary product and CIP lines in 304L and 316L.'
      ],
      infoCards: [
        { title: 'Key Buyer Sectors', text: 'Pharma & biotech · Hospitals · Research labs · Dairy & beverages' },
        { title: 'Documents', text: 'EN 10204 3.1 certificate traced to heat number · Ra report per EP lot' }
      ],
      relatedPagesText: 'Also supplying: Electropolished Pipes for Dubai · Sharjah · All UAE'
    },
    logistics: {
      title: 'How We Ship Electropolished Pipes from Mumbai to Abu Dhabi',
      processSteps: [
        { num: 1, text: 'Heat number checked against the EN 10204 3.1 certificate' },
        { num: 2, text: 'PMI on every length' },
        { num: 3, text: 'Electropolishing to SF4 (internal Ra ≤ 0.38 µm)' },
        { num: 4, text: 'Ra report issued for the EP lot' },
        { num: 5, text: 'Ends capped and tube sleeved, then packed and dispatched from Mumbai' }
      ],
      videoId: 'SJqbbUzYjXg',
      infoRows: [
        { label: 'Dispatch and transit', value: 'Depend on size, quantity and stock; confirmed in writing with each quotation' },
        { label: 'Documents', value: 'EN 10204 3.1 certificate traced to heat number · Ra report per EP lot' }
      ],
      footnote: 'Each dispatch carries an EN 10204 3.1 certificate traced to heat number, and each electropolished lot an Ra report, tested in a NABL-accredited lab.'
    },
    comparison: {
      intro: 'Electropolishing removes a thin surface layer electrochemically, levelling peaks and leaving a chromium-enriched passive film. Mechanical polishing only abrades the surface. If your specification says "electropolished", a mirror-polished pipe does not meet it.',
      headers: ['Surface Property', 'Electropolished (EP)', 'Mechanically Polished (MP)', 'Why It Matters'],
      rows: [
        {
          property: 'Internal Ra (ASME BPE)',
          ep: 'SF4 ≤ 0.38 µm (15 µin) · SF5 ≤ 0.51 µm (20 µin) · SF6 ≤ 0.64 µm (25 µin)',
          mp: 'SF1 ≤ 0.51 µm (20 µin) · SF2 ≤ 0.64 µm (25 µin) · SF3 ≤ 0.76 µm (30 µin)',
          why: 'Lower Ra resists bacterial adhesion and biofilm in sanitary loops'
        },
        {
          property: 'Surface structure',
          ep: 'Levelled, no directional lay',
          mp: 'Directional abrasive scratches',
          why: 'Faster, more reliable CIP and SIP cycles'
        },
        {
          property: 'Passive layer',
          ep: 'Chromium-enriched passive layer',
          mp: 'Standard passive layer unless separately passivated',
          why: 'Better resistance to rouging and pitting'
        },
        {
          property: 'Typical specification',
          ep: 'ASTM A270 + ASME BPE SF4–SF6',
          mp: 'ASTM A270 + ASME BPE SF1–SF3',
          why: 'Commonly specified for EDE-licensed (UAE), EU-GMP and FDA-regulated product-contact systems'
        }
      ]
    },
    grades: {
      intro: 'All electropolished tube we ship conforms to ASTM A270 and ASME BPE. Chemistry shown is the ASTM limit; your MTC shows the actual heat analysis.',
      cards: [
        {
          title: 'SS 316L EP Tubing',
          tag: 'PHARMA & BIOTECH',
          desc: 'Low-carbon, molybdenum-bearing grade for purified water, WFI and clean-steam systems.',
          specs: [
            'Cr: 16.0–18.0% | Ni: 10.0–14.0% | Mo: 2.0–3.0% | C: ≤ 0.035% max',
            'S: 0.005–0.017% for orbital weldability (ASME BPE)',
            'Surface finish: SF4 (Ra ≤ 0.38 µm) electropolished'
          ]
        },
        {
          title: 'SS 304L EP Tubing',
          tag: 'DAIRY, FOOD & BEVERAGE',
          desc: 'Low-carbon 18/8 austenitic grade for dairy, juice, bottled-water and food product lines.',
          specs: [
            'Cr: 18.0–20.0% | Ni: 8.0–12.0% | C: ≤ 0.035% max',
            'Surface finish: SF4 electropolished, or SF1 (Ra ≤ 0.51 µm) mechanically polished'
          ]
        }
      ]
    },
    whyUs: {
      title: 'Why UAE Buyers Choose Sakshi Forge',
      cards: [
        {
          num: '1',
          title: 'Ultra-Smooth Internal Surface',
          desc: 'Electropolished to Ra ≤ 0.38 µm (SF4), removing the micro-burrs and crevices where biofilm starts.'
        },
        {
          num: '2',
          title: 'PMI on Every Length, 3.1 per Heat',
          desc: 'Every length is PMI-checked and ships with an EN 10204 3.1 certificate traced to its heat number.'
        },
        {
          num: '3',
          title: 'Shipped from Mumbai',
          desc: 'Dispatch and transit depend on size, quantity and stock, and are confirmed in writing with each quotation.'
        },
        {
          num: '4',
          title: 'EP Tube and EP Fittings on One Quote',
          desc: 'EP tube plus EP elbows, tees and reducers, quoted together so the finish matches across the line.'
        },
        {
          num: '5',
          title: 'Ends Capped, Tube Sleeved',
          desc: 'Ends are capped and each tube is sleeved before packing, so the bore arrives clean.'
        },
        {
          num: '6',
          title: 'Quote in 30 Minutes, 24×7',
          desc: 'Send OD × wall, grade, finish and quantity; a written quote comes back within 30 minutes, any hour.'
        }
      ]
    },
    faqs: [
      {
        q: 'Do you supply EN 10204 3.1 certified electropolished pipes to Abu Dhabi?',
        a: 'Yes. Every shipment carries an EN 10204 3.1 certificate traced to the heat number, with PMI on every length and an Ra report for each electropolished lot, tested in a NABL-accredited lab.'
      },
      {
        q: 'What surface roughness (Ra) finishes are available for pharma and biotech projects?',
        a: 'We supply electropolished SF4 (Ra ≤ 0.38 µm / 15 µin), and mechanically polished SF1 (Ra ≤ 0.51 µm / 20 µin) for lines that do not need an electropolished bore.'
      },
      {
        q: 'How long does delivery to Abu Dhabi take?',
        a: 'Dispatch and transit depend on size, quantity and stock. Both are confirmed in writing with each quotation.'
      },
      {
        q: 'How do I order electropolished pipes for Abu Dhabi?',
        a: 'Send the grade, OD × wall, finish, length and quantity through the RFQ form, by phone on +91 82913 66340, or to info@steelmanufacturer.in. A written quote comes back within 30 minutes, 24×7.'
      }
    ],
    rfq: {
      title: 'Request a Manufacturer Quotation for Abu Dhabi',
      body: 'Send OD × wall, grade, finish and quantity for ASTM A270 electropolished 316L or 304L tube and EP fittings. Quote within 30 minutes, 24×7, with dispatch and transit confirmed in writing.',
      email: 'info@steelmanufacturer.in',
      footnote: 'EN 10204 3.1 certificate traced to heat number with every dispatch, and an Ra report for each electropolished lot.'
    },
    closing: {
      title: 'Specify Electropolished Tube for Your Next UAE Project',
      body: 'Send your grade, OD × wall, finish and quantity. A written quote comes back within 30 minutes, 24×7, with dispatch and transit confirmed in writing.',
      buttonText: 'Contact Us'
    }
  },

  'al-ain-uae': {
    slug: 'al-ain-uae',
    city: 'Al Ain',
    state: 'Abu Dhabi',
    country: 'UAE',
    pageTitle: 'Electropolished Tube for Al Ain | 3.1 Cert per Heat',
    metaDescription: 'EP or polished 316L/304L tube for Al Ain dairy, water, food and pharma lines, and honest advice on which you need. Quote in 30 minutes, 24×7. Shipped from Mumbai.',
    h1: 'Electropolished Pipes & Tubes for Al Ain',
    eyebrow: 'Export Supply · Al Ain, Abu Dhabi Emirate, UAE',
    reviewerByline: 'Technically reviewed by Quality Assurance Team · Metallurgy & High-Purity Piping · Last reviewed: 29 Sep 2026',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Market Directory', path: '/market-area/' },
      { name: 'UAE', path: '/market-area/#uae' },
      { name: 'Al Ain', path: '/market-area/al-ain-uae' }
    ],
    heroIntro: 'Sakshi Forge, Mumbai, supplies ASTM A270 / ASME BPE electropolished stainless steel tubing to process plants in Al Ain. Our 316L and 304L EP tube is finished to SF4 (internal Ra ≤ 0.38 µm), PMI-checked on every length and shipped with an EN 10204 3.1 certificate traced to heat number. This page explains how to specify it for dairy, water, food and pharma lines, and what arrives with every shipment.',
    trustBadges: [
      'ISO 9001:2015 Certified',
      'EN 10204 3.1 Traced to Heat No.',
      'PMI on Every Length',
      'Ra Report per EP Lot',
    ],
    primaryBtnText: 'Request a Quote for Al Ain',
    jumpLinks: [
      { label: 'Al Ain industries we supply', href: '#al-ain' },
      { label: 'How we make EP tube', href: '#process' },
      { label: 'EP vs mechanically polished', href: '#ep-vs-mp' },
      { label: 'Grades and sizes', href: '#grades' },
      { label: 'Specification guide', href: '#spec-guide' },
      { label: 'Inspection and testing', href: '#inspection' },
      { label: 'Shipping to Al Ain', href: '#shipping' },
      { label: 'About Sakshi Forge', href: '#about' },
      { label: 'FAQ', href: '#faq' }
    ],
    localBlock: {
      eyebrow: 'AL AIN & EASTERN REGION SUPPLY',
      title: "Electropolished and Sanitary Tube for Al Ain's Food, Water and Healthcare Plants",
      body: "Dairy and farm processing, bottled water and juice, date processing, hospitals and university labs all run stainless process lines. They don't all need the same tube, and the table below says which finish each one usually calls for.",
      sectors: [
        {
          title: 'Dairy & Farm Processing',
          runs: 'Milk reception, pasteurisation, filling and CIP circuits',
          supply: '304L or 316L sanitary tube, mechanically polished to 3-A levels, or electropolished SF4 where your specification calls for it'
        },
        {
          title: 'Bottled Water & Beverages',
          runs: 'Treated-water lines, filler feed and CIP returns',
          supply: '316L sanitary tube; electropolished only when your specification requires it'
        },
        {
          title: 'Hospitals & Hospital Pharmacies',
          runs: 'Purified-water generation and loops, sterile-services supply',
          supply: '316L electropolished tube, SF4'
        },
        {
          title: 'University & Research Labs',
          runs: 'Purified water, clean utilities and specialty-gas lines',
          supply: '316L electropolished tube, SF4'
        },
        {
          title: 'Dates & Food Processing',
          runs: 'Syrup, paste and product-transfer lines',
          supply: '304L or 316L mechanically polished sanitary tube'
        }
      ],
      honestAdvice: {
        title: "When you don't need electropolished tube",
        body: "Many dairy, water and food lines don't. 3-A and EHEDG hygienic-design guidance sets product-contact surfaces at Ra 0.8 µm (32 µin) or smoother. A good mechanically polished sanitary tube meets that at lower cost. Electropolishing earns its price in pharmaceutical, hospital and laboratory water systems, where corrosion resistance and a passive, low-particle surface matter. Send us your specification and we'll tell you honestly which one it calls for — even when that means the cheaper tube.",
        text: "Many dairy, water and food lines don't. 3-A and EHEDG hygienic-design guidance sets product-contact surfaces at Ra 0.8 µm (32 µin) or smoother. A good mechanically polished sanitary tube meets that at lower cost. Electropolishing earns its price in pharmaceutical, hospital and laboratory water systems, where corrosion resistance and a passive, low-particle surface matter. Send us your specification and we'll tell you honestly which one it calls for — even when that means the cheaper tube."
      },
      infoCards: [
        { title: 'Documents', text: 'EN 10204 3.1 certificate traced to heat number · Ra report per EP lot' },
        { title: 'Buyer Sectors', text: 'Dairy · Bottled water · Hospitals · Research labs · Food' }
      ],
      relatedPagesText: 'Also supplying: Electropolished Pipes for Abu Dhabi · Dubai · All UAE'
    },
    comparison: {
      intro: 'Both finishes can be smooth. The difference is how the surface was made: mechanical polishing abrades it, electropolishing dissolves it. That changes the structure and the chemistry of the surface, not just the Ra number.',
      headers: ['Surface Property', 'Electropolished (EP)', 'Mechanically Polished (MP)', 'Why It Matters'],
      rows: [
        {
          property: 'Internal Ra (ASME BPE)',
          ep: 'SF4 ≤ 0.38 µm (15 µin) · SF5 ≤ 0.51 µm (20 µin) · SF6 ≤ 0.64 µm (25 µin)',
          mp: 'SF1 ≤ 0.51 µm (20 µin) · SF2 ≤ 0.64 µm (25 µin) · SF3 ≤ 0.76 µm (30 µin)',
          why: 'Both meet the 0.8 µm food-contact level; EP adds a passive, low-particle surface'
        },
        {
          property: 'Surface structure',
          ep: 'Levelled, no directional lay',
          mp: 'Directional abrasive scratches',
          why: 'Fewer sites for residue and biofilm to hold'
        },
        {
          property: 'Passive layer',
          ep: 'Chromium-enriched passive layer',
          mp: 'Standard passive layer unless separately passivated',
          why: 'Better resistance to rouging and pitting'
        },
        {
          property: 'Typical use',
          ep: 'ASTM A270 + BPE SF4–SF6: pharma, hospital and lab water',
          mp: 'ASTM A270 + BPE SF1–SF3: dairy, water and food lines',
          why: 'Commonly specified for EDE-licensed (UAE), EU-GMP and FDA-regulated systems (EP) and 3-A / EHEDG food lines (MP)'
        }
      ]
    },
    grades: {
      intro: 'Choose the grade for the fluid and the cleaning chemistry first, then the finish. Chemistry below is the ASTM limit; your MTC shows the actual heat analysis.',
      cards: [
        {
          title: 'SS 316L EP Tubing',
          tag: 'PHARMA, HOSPITAL & LAB',
          desc: 'The default for purified water, WFI and clean steam. The 2–3% molybdenum improves pitting resistance, which also makes it the safer choice for CIP circuits where chlorides are present.',
          specs: [
            'Cr: 16.0–18.0% | Ni: 10.0–14.0% | Mo: 2.0–3.0% | C: ≤ 0.035% max',
            'S: 0.005–0.017% for orbital weldability (ASME BPE)',
            'Finish: SF4 (Ra ≤ 0.38 µm) electropolished'
          ]
        },
        {
          title: 'SS 304L Sanitary & EP Tubing',
          tag: 'DAIRY, WATER & FOOD',
          desc: 'Suits cold product lines in dairy, bottled water and food where chloride exposure is low. Lower cost than 316L.',
          specs: [
            'Cr: 18.0–20.0% | Ni: 8.0–12.0% | C: ≤ 0.035% max',
            'Finish: MP SF1 (Ra ≤ 0.51 µm) or EP SF4 (Ra ≤ 0.38 µm)'
          ]
        }
      ]
    },
    specGuide: {
      eyebrow: 'SPECIFICATION GUIDE',
      title: 'How to Specify Electropolished Tube: An 8-Point RFQ Checklist',
      intro: 'A complete RFQ gets an accurate quote the first time. Include these eight items:',
      checklist: [
        '1. Standard — ASTM A270, plus ASME BPE where the system is designed to it.',
        '2. Grade — 316L or 304L.',
        '3. OD × wall — as OD tube sizes, e.g. 2" × 1.65 mm, not NPS pipe schedules.',
        '4. Internal finish — as an ASME BPE designation such as SF4, not just "electropolished" or "mirror".',
        '5. External finish — only if it matters, such as exposed cleanrooms. Otherwise a standard OD saves cost.',
        '6. Sulfur range — 0.005–0.017% if the tube will be orbitally welded to other ASME BPE fittings.',
        '7. Length, quantity and ends — random or fixed lengths, square-cut, capped.',
        '8. Documents — EN 10204 3.1 MTC, Ra report, and any third-party inspection required.'
      ],
      mistakes: [
        '"Electropolished" with no SF designation. Two suppliers can quote very different finishes against the same word.',
        'Pipe schedules for a sanitary line. Sanitary clamps and fittings are made for OD tube, not NPS Sch 10S pipe.',
        '316 instead of 316L on welded systems. The low-carbon L grade protects weld zones from carbide precipitation.',
        'No sulfur range on tube that meets another supplier’s fittings. A sulfur mismatch between the two sides can pull the orbital weld pool off-centre.',
        'OD polish on tube where only the bore touches product. It adds cost with no process benefit.'
      ],
      finishGuide: [
        { app: 'Purified water, WFI loops, clean steam', grade: '316L', finish: 'SF4', needed: 'Usually yes' },
        { app: 'Hospital pharmacy and sterile-services water', grade: '316L', finish: 'SF4', needed: 'Usually yes' },
        { app: 'Laboratory purified water and clean utilities', grade: '316L', finish: 'SF4', needed: 'Often — check your spec' },
        { app: 'Dairy product and CIP lines', grade: '304L or 316L', finish: 'Ra ≤ 0.8 µm (3-A); MP SF1 or better', needed: 'Rarely' },
        { app: 'Bottled water and juice', grade: '316L or 304L', finish: 'Ra ≤ 0.8 µm; MP SF1', needed: 'Rarely' },
        { app: 'Date syrup and food transfer', grade: '304L or 316L', finish: 'Ra ≤ 0.8 µm; MP SF1', needed: 'No' }
      ]
    },
    inspection: {
      eyebrow: 'QUALITY CONTROL',
      title: 'How We Inspect and Test Every Lot',
      table: [
        { stage: 'Every length', check: 'Grade', method: 'PMI (positive material identification)', receives: 'PMI record' },
        { stage: 'Every heat', check: 'Chemistry and traceability', method: 'Heat number checked against the mill certificate', receives: 'EN 10204 3.1 certificate traced to heat number' },
        { stage: 'After electropolishing', check: 'Internal Ra', method: 'Ra measurement on the EP lot', receives: 'Ra report' },
        { stage: 'Before dispatch', check: 'Ends and protection', method: 'Ends capped, tube sleeved', receives: 'Packing list' }
      ],
      storageGuidelines: [
        'Keep hygienic end caps and poly sleeves on until the tube is cut for installation; they keep wind-blown dust and desert sand out of the bore.',
        'Store under shaded cover, out of direct intense sunlight. Heat and UV weaken plastic caps and sleeves over time.',
        'Rack tubes off the ground on timber or plastic supports, never directly on bare carbon steel to prevent galvanic iron transfer.',
        'Handle with clean gloves, and use only stainless-steel dedicated tooling on the bore.',
        'Store 316L and 304L apart in clearly designated bays, with heat-number markings visible for seamless traceability.'
      ]
    },
    logistics: {
      eyebrow: 'EXPORT & LOGISTICS',
      title: 'Shipping Electropolished Tube from Mumbai to Al Ain',
      body: 'Material for Al Ain is shipped from Mumbai. Dispatch, route and transit depend on size, quantity and stock, and are confirmed in writing with each quotation.',
      videoId: 'SJqbbUzYjXg',
      processSteps: [
        { num: 1, text: 'Heat number checked against the EN 10204 3.1 certificate' },
        { num: 2, text: 'PMI on every length' },
        { num: 3, text: 'Electropolishing to SF4 (internal Ra ≤ 0.38 µm)' },
        { num: 4, text: 'Ra report issued for the EP lot' },
        { num: 5, text: 'Ends capped and tube sleeved, then packed and dispatched from Mumbai' }
      ],
      infoRows: [
        { label: 'Dispatch and transit', value: 'Depend on size, quantity and stock; confirmed in writing with each quotation' },
        { label: 'Documents', value: 'EN 10204 3.1 certificate traced to heat number · Ra report per EP lot' }
      ],
      footnote: 'Each dispatch carries an EN 10204 3.1 certificate traced to heat number, and each electropolished lot an Ra report, tested in a NABL-accredited lab.'
    },
    about: {
      eyebrow: 'WHO WE ARE',
      title: 'About Sakshi Forge',
      body: 'Sakshi Forge is an ISO 9001:2015 certified manufacturer of electropolished pipes, industrial flanges, forged fittings and high-precision stainless steel components located in Mumbai, India.',
      companyFacts: [
        { field: 'Head Office', value: `${ADDRESS_LINE}, India` },
        { field: 'Quality System', value: 'ISO 9001:2015 Certified Manufacturing & Quality Assurance' },
        { field: 'Testing Laboratory', value: 'NABL Accredited Partner Laboratory (ILAC-MRA Signatory)' },
        { field: 'Sales & Inquiries', value: 'Quote within 30 minutes via the official RFQ desk' },
      ],
      notSupply: [
        'We do not operate a warehouse in Al Ain; material is dispatched from Mumbai.',
        'We do not supply 904L tube under ASTM A270 — 904L is manufactured under ASTM B677, B673 or B674.',
        'We never disclose client proprietary installation projects without express written authorization.'
      ]
    },
    faqs: [
      {
        q: 'Do you supply electropolished pipes to Al Ain?',
        a: 'Yes. We quote electropolished tube for Al Ain, shipped from Mumbai, with dispatch and transit confirmed in writing. Every order carries an EN 10204 3.1 certificate traced to heat number.'
      },
      {
        q: 'Do I need electropolished tube for a dairy or bottled-water line?',
        a: 'Usually not. 3-A and EHEDG guidance for food-contact surfaces is Ra 0.8 µm or smoother, which a good mechanically polished sanitary tube meets. Electropolishing is typically specified for pharmaceutical, hospital and laboratory water systems. Send your specification and we will advise.'
      },
      {
        q: 'What surface roughness (Ra) finishes can you supply?',
        a: 'We supply electropolished SF4 (Ra ≤ 0.38 µm / 15 µin), and mechanically polished SF1 (Ra ≤ 0.51 µm / 20 µin) for lines that do not need an electropolished bore.'
      },
      {
        q: 'How long does delivery to Al Ain take?',
        a: 'Dispatch and transit depend on size, quantity and stock. Both are confirmed in writing with each quotation.'
      },
      {
        q: 'How is the internal Ra measured and reported?',
        a: 'Internal Ra is measured after electropolishing, and the result is issued as an Ra report for each EP lot, against the ordered SF designation.'
      },
      {
        q: 'Can we add third-party inspection?',
        a: 'Name the inspection you need on the RFQ. What can be arranged is confirmed in writing in the quotation.'
      },
      {
        q: 'How do I order electropolished tube for Al Ain?',
        a: 'Send the grade, OD × wall, finish, length and quantity through the RFQ form, by phone on +91 82913 66340, or to info@steelmanufacturer.in. A written quote comes back within 30 minutes, 24×7.'
      }
    ],
    rfq: {
      title: 'Request a Manufacturer Quotation for Al Ain',
      body: 'Send OD × wall, grade, finish and quantity for ASTM A270 316L or 304L tube, electropolished or mechanically polished, whichever your specification needs. Quote within 30 minutes, 24×7.',
      email: 'info@steelmanufacturer.in',
      footnote: 'EN 10204 3.1 certificate traced to heat number with every dispatch, and an Ra report for each electropolished lot.'
    },
    closing: {
      title: "Tell Us What the Line Carries — We'll Tell You Which Tube It Needs",
      body: 'Send your grade, sizes and specification. A written quote comes back within 30 minutes, 24×7, with dispatch and transit confirmed in writing.',
      buttonText: 'Contact Us'
    }
  },
  ...tamilNaduCityData,
  // Aliases for compatibility
  trichy: tamilNaduCityData.tiruchirappalli,
  tuticorin: tamilNaduCityData.thoothukudi,
  'electropolished-pipe-supplier-chennai': tamilNaduCityData.chennai,
  'electropolished-pipe-supplier-coimbatore': tamilNaduCityData.coimbatore,
  'electropolished-pipe-supplier-hosur': tamilNaduCityData.hosur,
  'electropolished-pipe-supplier-cuddalore': tamilNaduCityData.cuddalore,
  'electropolished-pipe-supplier-tiruchirappalli': tamilNaduCityData.tiruchirappalli,
  'electropolished-pipe-supplier-trichy': tamilNaduCityData.tiruchirappalli,
  'electropolished-pipe-supplier-salem': tamilNaduCityData.salem,
  'electropolished-pipe-supplier-madurai': tamilNaduCityData.madurai,
  'electropolished-pipe-supplier-thoothukudi': tamilNaduCityData.thoothukudi,
  'electropolished-pipe-supplier-tuticorin': tamilNaduCityData.thoothukudi,
  'electropolished-pipe-supplier-erode': tamilNaduCityData.erode,
  'electropolished-pipe-supplier-vellore': tamilNaduCityData.vellore
};
