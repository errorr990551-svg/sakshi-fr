// Master data for SEO workbook new pages (Grades, Standards, Export, Tools)

export const gradePages = {
  'ss-304-pipe-fittings-flanges': {
    slug: 'ss-304-pipe-fittings-flanges',
    title: 'SS 304/304L Pipes, Fittings & Flanges | Sakshi Forge',
    h1: 'Stainless Steel 304 / 304L Products (Flanges, Fittings & Pipes)',
    gradeCode: 'SS 304 / 304L (UNS S30400 / S30403)',
    category: 'Austenitic Stainless Steel',
    desc: 'ISO 9001:2015 certified manufacturer of SS 304 and 304L forged flanges, ASME B16.11 fittings, and ASTM A312 pipes. Complete chemistry, pressure-temperature ratings, and EN 10204 3.1 MTC.',
    chemistryTable: [
      { grade: 'SS 304 (UNS S30400)', c: '0.08 max', cr: '18.0 - 20.0', ni: '8.0 - 10.5', mo: '-', other: 'Si 0.75, Mn 2.0, P 0.045, S 0.03' },
      { grade: 'SS 304L (UNS S30403)', c: '0.03 max', cr: '18.0 - 20.0', ni: '8.0 - 12.0', mo: '-', other: 'Low Carbon for Carbide Weld Protection' }
    ],
    mechanicalTable: [
      { property: 'SS 304 Annealed', tensile: '515 min', yield: '205 min', elongation: '40% min', hardness: '201 HB max' },
      { property: 'SS 304L Annealed', tensile: '485 min', yield: '170 min', elongation: '40% min', hardness: '201 HB max' }
    ],
    applications: [
      { title: 'Food & Dairy Processing', desc: 'Hygienic WFI piping and tank flanges resistant to organic acids and sanitizing agents.' },
      { title: 'Chemical & Petrochemical', desc: 'Low-to-medium temperature nitric acid and general chemical transport.' },
      { title: 'Architectural & Heavy Engineering', desc: 'Structural forging rings, pressure vessel nozzles, and high-strength industrial flanges.' }
    ],
    faqs: [
      { q: 'What is the difference between SS 304 and SS 304L?', a: 'SS 304L has a lower carbon content (<=0.03%) which prevents intergranular chromium carbide precipitation during welding, making 304L superior for heavy welded flange assemblies.' },
      { q: 'What pressure classes do Sakshi Forge SS 304 flanges handle?', a: 'We manufacture ASME B16.5 SS 304 flanges in Class 150, 300, 600, 900, 1500, and 2500.' },
      { q: 'Do SS 304 products come with MTC?', a: 'Yes, every batch is supplied with an EN 10204 3.1 Mill Test Certificate including PMI chemistry reports and heat number traceability.' }
    ]
  },
  'ss-316-316l-pipe-fittings-flanges': {
    slug: 'ss-316-316l-pipe-fittings-flanges',
    title: 'SS 316/316L Pipes, Fittings & Flanges | Sakshi Forge',
    h1: 'Stainless Steel 316 / 316L Products (Marine & EP Grade)',
    gradeCode: 'SS 316 / 316L (UNS S31600 / S31603)',
    category: 'Austenitic Marine Stainless Steel',
    desc: 'High molybdenum austenitic steel flanges, fittings, and electropolished sanitary tubes. Superior chloride pitting resistance for marine, chemical, and pharmaceutical systems.',
    chemistryTable: [
      { grade: 'SS 316 (UNS S31600)', c: '0.08 max', cr: '16.0 - 18.0', ni: '10.0 - 14.0', mo: '2.0 - 3.0', other: 'Si 0.75, Mn 2.0' },
      { grade: 'SS 316L (UNS S31603)', c: '0.03 max', cr: '16.0 - 18.0', ni: '10.0 - 14.0', mo: '2.0 - 3.0', other: 'Low Carbon Marine Grade' }
    ],
    mechanicalTable: [
      { property: 'SS 316 Annealed', tensile: '515 min', yield: '205 min', elongation: '40% min', hardness: '217 HB max' },
      { property: 'SS 316L Annealed', tensile: '485 min', yield: '170 min', elongation: '40% min', hardness: '217 HB max' }
    ],
    applications: [
      { title: 'Pharmaceutical Cleanrooms', desc: 'Electropolished tubes (Ra <= 0.4 um) and BPE fittings for WFI and sterile fluids.' },
      { title: 'Marine & Offshore Piping', desc: 'Seawater handling, ballast systems, and coastal refinery piping.' }
    ],
    faqs: [
      { q: 'Why is SS 316L required for pharmaceutical electropolished tubes?', a: 'The 2-3% Molybdenum addition provides pitting resistance equivalence (PREN >= 25) essential for CIP/SIP steam sterilization.' }
    ]
  },
  'duplex-2205-products': {
    slug: 'duplex-2205-products',
    title: 'Duplex 2205 (S31803/S32205) Flanges & Fittings | India',
    h1: 'Duplex 2205 (S31803 / S32205) Flanges, Fittings & Bars',
    gradeCode: 'Duplex 2205 (UNS S31803 / S32205 / F51 / F60)',
    category: 'Duplex Stainless Steel (PREN >= 34)',
    desc: 'High-strength dual-phase austenitic-ferritic stainless steel flanges and forged fittings. Double the yield strength of 316L with high resistance to stress corrosion cracking.',
    chemistryTable: [
      { grade: 'Duplex 2205 (F51/F60)', c: '0.03 max', cr: '22.0 - 23.0', ni: '4.5 - 6.5', mo: '3.0 - 3.5', other: 'N 0.14 - 0.20 (PREN 34+)' }
    ],
    mechanicalTable: [
      { property: 'Duplex 2205 Annealed', tensile: '620 min', yield: '450 min', elongation: '25% min', hardness: '290 HB max' }
    ],
    applications: [
      { title: 'Oil & Gas Production', desc: 'High-pressure sour gas lines and offshore subsea manifold flanges.' }
    ],
    faqs: [
      { q: 'What is the yield strength advantage of Duplex 2205?', a: 'Duplex 2205 has a yield strength of 450 MPa, nearly double that of standard SS 316L (205 MPa).' }
    ]
  },
  'super-duplex-2507-products': {
    slug: 'super-duplex-2507-products',
    title: 'Super Duplex 2507 (F53/F55) Products | Sakshi Forge',
    h1: 'Super Duplex 2507 (UNS S32750 / S32760 / F53 / F55) Products',
    gradeCode: 'Super Duplex 2507 (UNS S32750 / F53)',
    category: 'Super Duplex Stainless Steel (PREN >= 42)',
    desc: 'Extreme-environment super duplex flanges and fittings engineered for high-salinity seawater desalination, offshore risers, and aggressive chemical plants.',
    chemistryTable: [
      { grade: 'Super Duplex 2507', c: '0.03 max', cr: '24.0 - 26.0', ni: '6.0 - 8.0', mo: '3.0 - 5.0', other: 'N 0.24 - 0.32, Cu 0.5 (PREN 42+)' }
    ],
    mechanicalTable: [
      { property: 'Super Duplex 2507', tensile: '750 min', yield: '550 min', elongation: '15% min', hardness: '310 HB max' }
    ],
    applications: [
      { title: 'Seawater Desalination', desc: 'High-pressure RO pump manifolds and marine intake flanges.' }
    ],
    faqs: [
      { q: 'What is the PREN rating of Super Duplex 2507?', a: 'Super Duplex 2507 achieves a PREN value >= 42, guaranteeing zero pitting corrosion in hot seawater.' }
    ]
  },
  'inconel-625-flanges': {
    slug: 'inconel-625-flanges',
    title: 'Inconel 625 Flanges Supplier | 30-Min Quote | Sakshi Forge',
    h1: 'Inconel 625 (UNS N06625) Forged Flanges & Fittings',
    gradeCode: 'Inconel 625 (UNS N06625 / 2.4856)',
    category: 'High-Nickel Superalloy',
    desc: 'ASTM B564 Inconel 625 forged flanges in Class 150 to Class 2500. Exceptional strength from cryogenic temperatures up to 1800°F (982°C) with high oxidation resistance.',
    chemistryTable: [
      { grade: 'Inconel 625 (N06625)', c: '0.10 max', cr: '20.0 - 23.0', ni: '58.0 min', mo: '8.0 - 10.0', other: 'Nb+Ta 3.15 - 4.15, Fe 5.0 max' }
    ],
    mechanicalTable: [
      { property: 'Inconel 625 Solution Annealed', tensile: '827 min', yield: '414 min', elongation: '30% min', hardness: '220 HB max' }
    ],
    applications: [
      { title: 'Aerospace & Exhaust Systems', desc: 'Extreme temperature flare stacks, turbine components, and chemical headers.' }
    ],
    faqs: [
      { q: 'What ASTM spec governs Inconel 625 flanges?', a: 'Inconel 625 flanges are manufactured under ASTM B564 / ASME SB564 specifications.' }
    ]
  }
};

export const standardPages = {
  'asme-b16-11-forged-fittings': {
    slug: 'asme-b16-11-forged-fittings',
    title: 'ASME B16.11 Forged Fittings: Classes & Dimensions',
    h1: 'ASME B16.11 Forged Fittings (Socket Weld & Threaded)',
    standardCode: 'ASME B16.11 / BS 3799',
    desc: 'Comprehensive engineering guide and commercial product catalog for ASME B16.11 socket weld and NPT threaded forged fittings in Class 2000, 3000, 6000, and 9000.',
    pressureClasses: [
      { class: 'Class 2000', desc: 'NPT Threaded fittings for medium pressure piping up to 2000 PSI.' },
      { class: 'Class 3000', desc: 'Standard Socket Weld & Threaded fittings for heavy industrial plants.' },
      { class: 'Class 6000', desc: 'Extra heavy pressure fittings for hydraulic systems and sour gas.' },
      { class: 'Class 9000', desc: 'Extreme high-pressure forged fittings for critical power & subsea lines.' }
    ],
    dimensionSummary: [
      { nps: '1/2"', od: '21.3 mm', c150: 'Sch 80 / Class 3000', c300: 'Class 3000 Socket Weld', c600: 'Class 6000 Socket Weld' },
      { nps: '3/4"', od: '26.7 mm', c150: 'Sch 80 / Class 3000', c300: 'Class 3000 Socket Weld', c600: 'Class 6000 Socket Weld' },
      { nps: '1"', od: '33.4 mm', c150: 'Sch 80 / Class 3000', c300: 'Class 3000 Socket Weld', c600: 'Class 6000 Socket Weld' },
      { nps: '2"', od: '60.3 mm', c150: 'Sch 80 / Class 3000', c300: 'Class 3000 Socket Weld', c600: 'Class 6000 Socket Weld' }
    ],
    faqs: [
      { q: 'What fittings are covered under ASME B16.11?', a: 'ASME B16.11 covers forged 90° elbows, 45° elbows, tees, crosses, full & half couplings, caps, plugs, bushings, street elbows, and boss fittings.' }
    ]
  },
  'asme-b16-5-flanges': {
    slug: 'asme-b16-5-flanges',
    title: 'ASME B16.5 Flanges: Classes 150-2500 & Dimensions',
    h1: 'ASME B16.5 Pipe Flanges Standard & Pressure Classes',
    standardCode: 'ASME B16.5 (NPS 1/2 to 24)',
    desc: 'Technical specs, pressure-temperature ratings, facing types (RF, RTJ, FF), and bolt hole dimensions for ASME B16.5 pipe flanges in Class 150 to Class 2500.',
    pressureClasses: [
      { class: 'Class 150 & 300', desc: 'Standard commercial & industrial process plant flanges.' },
      { class: 'Class 600 & 900', desc: 'High-pressure oil & gas transmission lines.' },
      { class: 'Class 1500 & 2500', desc: 'Subsea and ultra-high pressure steam power plants.' }
    ],
    dimensionSummary: [
      { nps: '1/2"', od: '89 mm', c150: 'Class 150 (4 Holes)', c300: 'Class 300 (4 Holes)', c600: 'Class 600 (4 Holes)' },
      { nps: '1"', od: '108 mm', c150: 'Class 150 (4 Holes)', c300: 'Class 300 (4 Holes)', c600: 'Class 600 (4 Holes)' },
      { nps: '2"', od: '152 mm', c150: 'Class 150 (4 Holes)', c300: 'Class 300 (4 Holes)', c600: 'Class 600 (8 Holes)' },
      { nps: '4"', od: '229 mm', c150: 'Class 150 (8 Holes)', c300: 'Class 300 (8 Holes)', c600: 'Class 600 (8 Holes)' }
    ],
    faqs: [
      { q: 'What size range is covered by ASME B16.5?', a: 'ASME B16.5 covers flange sizes from NPS 1/2" up to NPS 24". Sizes 26" to 60" are governed by ASME B16.47.' }
    ]
  },
  'astm-a105-flanges': {
    slug: 'astm-a105-flanges',
    title: 'ASTM A105 Carbon Steel Flanges Manufacturer | India',
    h1: 'ASTM A105 Carbon Steel Forged Flanges',
    standardCode: 'ASTM A105 / ASME SA105',
    desc: 'High quality normalized carbon steel forged flanges for ambient and higher-temperature service in pressure systems. Available with NACE MR0175 and EN 10204 3.1 MTC.',
    pressureClasses: [
      { class: 'Class 150 to 2500', desc: 'Full range of pressure ratings in weld neck, slip-on, blind, and socket weld patterns.' }
    ],
    faqs: [
      { q: 'Is ASTM A105 carbon steel suitable for high temperature?', a: 'Yes, ASTM A105 forged flanges are rated for ambient and elevated temperature service up to 800°F (425°C).' }
    ]
  },
  'astm-a270-sanitary-tube': {
    slug: 'astm-a270-sanitary-tube',
    title: 'ASTM A270 Sanitary Tubes | EP & BA Finish | Sakshi Forge',
    h1: 'ASTM A270 Seamless & Welded Sanitary Stainless Steel Tubing',
    standardCode: 'ASTM A270 / DIN 11850 / 3A',
    desc: 'Electropolished (EP) and bright annealed (BA) sanitary tubing for pharmaceutical, biotechnology, dairy, and food processing applications. Mechanical Ra <= 0.4 um finish.',
    pressureClasses: [
      { class: 'Sanitary Finish Grades', desc: 'Ra <= 0.4 um electropolished finish, 100% eddy current tested.' }
    ],
    faqs: [
      { q: 'What surface roughness options exist for ASTM A270 tubes?', a: 'Sakshi Forge provides mechanically polished (Ra <= 0.6 um) and electro-polished (Ra <= 0.4 um / 15 micro-inch) finishes.' }
    ]
  }
};
