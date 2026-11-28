import { INDUSTRY_LIBRARY, ANGLES, REGULATORS, isIndia, fill } from './cityContentLibrary.js';

// Builds the city-specific sections and FAQs for a market-area page from its research row.
// Indian rows: estates, gateway, industry mix and regulator come from cityData.research.
// Foreign rows: those research fields have no sources, so they are never shown; foreign
// pages get only general, buyer-oriented text plus the company facts.
// Returns null for cities without a research row (they keep the existing template).

const listJoin = (items) => (items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`);

function context(cityData) {
  const r = cityData.research;
  const india = isIndia(cityData.country);
  return {
    city: cityData.city,
    estates: r.estates,
    lead: r.leadEstate,
    region: india ? cityData.state : cityData.country,
    country: cityData.country || 'India',
    india,
    r
  };
}

function industriesFor(r) {
  const seen = new Set();
  const out = [];
  for (const term of r.industryMix.split(/,\s*|\s+and\s+|\//)) {
    const entry = INDUSTRY_LIBRARY.find((e) => e.match.test(term));
    if (entry && !seen.has(entry.key)) {
      seen.add(entry.key);
      out.push(entry);
    }
  }
  return out.slice(0, 4);
}

function regulatorNotes(r) {
  const notes = [];
  for (const reg of REGULATORS) {
    if (reg.match.test(r.regulator) && !notes.includes(reg.text)) notes.push(reg.text);
  }
  return notes;
}

function transitSentence(ctx) {
  const { r } = ctx;
  if (!ctx.india) {
    return `Material for ${ctx.city} is shipped from Mumbai; dispatch and transit depend on size, quantity and stock, and are confirmed in writing with each quotation.`;
  }
  // Owner (2026-11-01): delivery time depends on the order, so no day counts are stated.
  return `Material for ${ctx.city} is dispatched from Mumbai by road; delivery time depends on size, quantity and stock, and is confirmed in writing with each quotation. For export-bound projects the nearest gateway is ${r.gateway}.`;
}

// FAQ answers keyed by the client's FAQ-bank number. Numbers whose answer needs a company
// fact we have not been given (7, 12, 18, 33, 36, 39, 40) are intentionally absent.
// An entry returns null where its answer rests on an unsourced foreign research field.
const FAQ = {
  1: (c, ind) => ({
    q: `Do you supply electropolished pipes in ${c.city}?`,
    a: c.india
      ? `Yes. We dispatch electropolished stainless pipes and tubes from Mumbai to sites in ${c.city}, including ${c.estates}. Send the plant address with your enquiry so we can quote delivery to your site.`
      : `Yes. We quote electropolished stainless pipes and tubes for delivery to ${c.city}, shipped from Mumbai. Send the site address with your enquiry; dispatch and transit are confirmed in writing with the quotation.`
  }),
  2: (c) => ({
    q: `How long does delivery take to ${c.city}?`,
    a: `${transitSentence(c)} Manufacturing time for made-to-order sizes is separate from transit; we confirm both in writing with the quotation.`
  }),
  3: (c, ind) => (!c.india ? {
    q: `Which lines in a ${c.city} plant need electropolished tube?`,
    a: 'Purified water and WFI loops, clean steam, CIP/SIP circuits and product-contact lines in pharma, biotech, food, dairy and beverage plants. Utility and non-contact lines usually run well on a mechanically polished or pickled finish, so EP is specified line by line.'
  } : {
    q: `Which industries in ${c.city} use electropolished tubing?`,
    a: ind.length
      ? `The main users in ${c.city} are ${listJoin(ind.map((i) => i.label.toLowerCase()))}. ${ind.slice(0, 2).map((i) => fill(i.text, c).split('. ')[0].replace(/\.$/, '') + '.').join(' ')}`
      : `The industrial base of ${c.city} is ${c.r.industryMix}. EP tube is used where those plants need cleanable, high-purity lines.`
  }),
  4: (c) => (!c.india ? null : {
    q: `Do you deliver to ${c.estates}?`,
    a: `Yes. We deliver to units across ${c.estates}. Give us the plant address with your enquiry and we will confirm the delivery route and timing for that site.`
  }),
  5: (c) => ({
    q: `Are you a manufacturer or a trader for ${c.city} buyers?`,
    a: !c.india
      ? `We are the manufacturer, based in Mumbai. You deal with us directly: the quote, the EN 10204 3.1 certificate traced to heat number and the Ra report for each EP lot all come from us, not from a trader.`
      : `We are the manufacturer, based in Mumbai. Pipes and tubes are electropolished, tested and certified before they are supplied to ${c.city} directly, with an EN 10204 3.1 certificate traced to heat number, so there is no trading intermediary between us and your plant.`
  }),
  6: (c) => ({
    q: `Can I get bulk or project pricing for a plant in ${c.city}?`,
    a: `Yes. Project prices depend on grade, OD and wall, the Ra or ASME BPE finish required, certification level and total quantity. Send the full line list for your ${c.city} project rather than item-by-item enquiries and we will quote it as one package.`
  }),
  8: (c) => (!c.india ? null : {
    q: `What is the nearest port for shipments to or from ${c.city}?`,
    a: `For ${c.city} the reference gateway is ${c.r.gateway}. Domestic deliveries go by road from Mumbai; export-bound project material is routed through this gateway.`
  }),
  9: (c, ind) => {
    if (!c.india) {
      return {
        q: `Which grade should a ${c.city} plant specify?`,
        a: '316L for pharma, biotech, WFI and clean-steam lines; 304 or 304L for most food, dairy and beverage duty, moving to 316L for salt or aggressive CIP chemistry; 904L where the process engineer specifies it. Where chlorides are high, ask for a material review before ordering.'
      };
    }
    const keys = new Set(ind.map((i) => i.key));
    const parts = [];
    if (keys.has('pharma') || keys.has('biotech') || keys.has('semi') || keys.has('medical')) parts.push('316L for pharma, biotech and high-purity lines');
    if (keys.has('food') || keys.has('dairy') || keys.has('brewery')) parts.push('304 or 304L for food, dairy and beverage duty, moving to 316L for salt or aggressive CIP');
    if (keys.has('chem') || keys.has('water')) parts.push('316L for general chemical service, with a material review where chlorides are high');
    if (!parts.length) parts.push('304 for utility and fabrication work and 316L where the end customer specifies it');
    return { q: `Which grade should a ${c.city} plant specify?`, a: `It follows the local industry mix (${c.r.industryMix}): ${listJoin(parts)}.` };
  },
  10: (c) => ({
    q: `Do you supply to EPC contractors working in ${c.city}?`,
    a: `Yes. We quote EPC and fabrication contractors against their line lists and drawings for ${c.city} sites. Share your installation schedule with the RFQ, and we will quote delivery against it with the certificates your client will ask for at handover.`
  }),
  11: (c) => (!c.india ? null : {
    q: `What certification do plants in ${c.region} usually require?`,
    a: `${c.india ? 'Indian buyers' : `Buyers in ${c.country}`} typically ask for ${c.r.regulator}. Every lot we ship carries an EN 10204 3.1 certificate traced to heat number and a PMI record.`
  }),
  13: () => ({
    q: 'What is electropolishing and why does it matter?',
    a: 'Electropolishing is an electrochemical process that removes a thin layer of metal from the tube surface. It lowers surface roughness, removes the directional grain left by mechanical polishing and leaves a chromium-rich passive layer, so the surface cleans faster, resists corrosion better and gives bacteria and residues less to hold on to.'
  }),
  14: () => ({
    q: 'What Ra values can you achieve?',
    a: 'We supply electropolished tube to ASME BPE SF4, an internal Ra of 0.38 um (15 uin) or better, and to the SF1 mechanically polished grade (Ra <= 0.51 um / 20 uin) where electropolishing is not required. Every EP lot ships with an Ra report.'
  }),
  15: () => ({
    q: 'What is the difference between electropolished and mechanically polished tube?',
    a: 'Mechanical polishing abrades the surface and leaves directional grain lines and, sometimes, embedded abrasive. Electropolishing dissolves the surface electrochemically, rounding off micro-peaks instead of smearing them, which gives a lower and more uniform Ra and a more corrosion-resistant passive layer.'
  }),
  16: () => ({
    q: 'Electropolished vs pickled and passivated - which do I need?',
    a: 'Pickling and passivation removes scale and restores the passive layer but does not reduce roughness. Electropolishing does both. Specify EP for product-contact, WFI, clean steam and high-purity lines; pickled and passivated tube is usually enough for utilities and non-contact service.'
  }),
  17: () => ({
    q: 'Do you supply seamless or welded EP tube?',
    a: 'Both. Welded tube is the economical choice for most hygienic and water-system lines; seamless is specified where higher pressure, critical service or the end-user standard demands it. Tell us the service and pressure and we will recommend one.'
  }),
  19: () => ({
    q: 'What grades do you offer?',
    a: 'Our electropolished range covers 304, 304L, 316 and 316L, and 904L is supplied electropolished. 316L is the standard for pharma and biotech; 304 suits most food, dairy and utility lines.'
  }),
  20: () => ({
    q: 'Can you supply cut lengths or custom lengths?',
    a: 'Yes. Along with standard lengths we cut to the lengths on your drawing or line list; state the required length tolerance on the RFQ.'
  }),
  21: () => ({
    q: 'Do you supply matching fittings?',
    a: 'Yes - electropolished elbows, tees and reducers. Matching the finish across tube and fittings matters because a hygienic loop is only as cleanable as its roughest component.'
  }),
  22: () => ({
    q: 'How is EP tube packed for transit?',
    a: 'Each length is end-capped and sleeved before dispatch so the electropolished bore arrives clean and undamaged. Tell us at RFQ stage if your site needs additional packing.'
  }),
  23: () => ({
    q: 'Do your tubes comply with ASTM A270?',
    a: 'Yes. ASTM A270 covers seamless and welded austenitic stainless sanitary tubing; we supply to it. If your specification adds a supplement, name it on the RFQ so it is confirmed in the quotation.'
  }),
  24: () => ({
    q: 'What is ASME BPE and do you conform?',
    a: 'ASME BPE is the bioprocessing equipment standard. It defines surface finish grades SF1-SF3 (mechanically polished, Ra <= 0.51 / 0.64 / 0.76 um) and SF4-SF6 (electropolished, Ra <= 0.38 / 0.51 / 0.64 um). We supply electropolished tube to SF4.'
  }),
  25: () => ({
    q: 'What is the difference between SF1 and SF4?',
    a: 'SF1 is a mechanically polished finish with a maximum Ra of 0.51 um (20 uin). SF4 is electropolished with a maximum Ra of 0.38 um (15 uin) and is the usual choice for WFI and product-contact pharma lines.'
  }),
  26: () => ({
    q: 'Do you provide EN 10204 3.1 certificates?',
    a: 'Yes, with every lot. A 3.1 certificate is issued by the manufacturer\'s authorised inspection representative, who is independent of production, and records the test results for the specific heat and lot supplied.'
  }),
  27: () => ({
    q: 'What is the difference between EN 10204 3.1 and 3.2?',
    a: 'A 3.1 certificate is validated by the manufacturer\'s own independent inspection function. A 3.2 certificate is additionally countersigned by the purchaser\'s inspector or a third-party agency. Sakshi Forge supplies EN 10204 3.1, traced to the heat number.'
  }),
  28: () => ({
    q: 'Which standards apply to semiconductor UHP tubing?',
    a: 'SEMI F19 is the usual reference for the surface condition of wetted stainless components. Our standard EP finish is ASME BPE SF4; for a SEMI-specified line, send the specification with the RFQ so it can be checked before we quote.'
  }),
  29: () => ({
    q: 'Do you do PMI testing?',
    a: 'Yes. Positive material identification (PMI) is done on every length before dispatch, so each length is confirmed against the grade on its EN 10204 3.1 certificate.'
  }),
  30: () => ({
    q: 'What is ASTM A269 and how does it differ from A270?',
    a: 'ASTM A269 covers austenitic stainless tubing for general service. ASTM A270 is the sanitary specification with surface-finish requirements. A pharma or food buyer should specify A270 - A269 alone says nothing about the bore finish.'
  }),
  31: () => ({
    q: 'Are your tubes dual marked?',
    a: 'Where the chemistry meets both grades - for example 304/304L or 316/316L - the tube can be dual certified. Check that the certificate shows the carbon content and mechanical results that satisfy both grades.'
  }),
  32: () => ({
    q: 'What testing accompanies each lot?',
    a: 'PMI on every length, an EN 10204 3.1 certificate traced to heat number and, for EP tube, an Ra report for each lot. If your specification calls for other tests, list them on the RFQ so they are confirmed in the quotation.'
  }),
  34: (c) => ({
    q: 'How do I get a quotation?',
    a: `Send grade, OD, wall thickness, length, quantity, the Ra or ASME BPE finish you need, the standard (for example ASTM A270), certification level and the delivery address in ${c.city}. A complete RFQ gets a firm quote fastest.`
  }),
  35: (c) => ({
    q: 'What payment and delivery terms do you offer?',
    a: c.india
      ? 'Terms are agreed per order and confirmed on the quotation, including delivery to your site.'
      : `Payment terms and the delivery basis for ${c.country} are agreed per order and stated on the quotation.`
  }),
  37: () => ({
    q: 'How is EP tube priced?',
    a: 'Price is driven by grade and the alloy surcharge of the day, OD and wall, the Ra or SF finish required, certification level and quantity. We quote against your specification rather than publishing a list that would go stale.'
  }),
  38: (c) => ({
    q: 'What documents come with the material?',
    a: 'Each lot carries an EN 10204 3.1 certificate traced to heat number, and each EP lot an Ra report. List any other documents your project or importer needs on the RFQ so they are confirmed in the quotation.'
  }),
  41: () => ({
    q: 'Is EP tube required for a WFI system?',
    a: 'In practice, yes. WFI loops are specified with electropolished 316L because the smooth, passive bore drains fully, cleans and sanitises reliably and delays rouging at WFI temperatures.'
  }),
  42: () => ({
    q: 'What Ra do I need for a CIP/SIP line?',
    a: 'Pharma CIP/SIP lines are commonly specified at ASME BPE SF4 (Ra <= 0.38 um); many food and dairy CIP lines run well at SF1 (Ra <= 0.51 um). The goal is a surface that cleans fully in the cycle time you have, not the lowest number on paper.'
  }),
  43: () => ({
    q: 'Is EP tube suitable for dairy and food processing?',
    a: 'Yes. Electropolished product-contact tube meets the cleanability intent of 3-A Sanitary Standards and shortens CIP cycles. For non-contact and utility lines a mechanically polished tube is usually enough.'
  }),
  44: () => ({
    q: 'Do breweries need electropolished tube?',
    a: 'Only on some lines. EP is worth it on yeast handling, bright beer and aseptic filling; hot-side and utility lines normally run well on a lower-cost finish.'
  }),
  45: () => ({
    q: 'What causes rouging and does EP prevent it?',
    a: 'Rouging is iron-oxide film that forms in hot high-purity water and clean steam systems. Electropolishing delays it by leaving a smoother, chromium-rich surface, but does not prevent it permanently - periodic inspection and derouging remain part of system maintenance.'
  }),
  46: () => ({
    q: 'Can EP tube be orbital welded?',
    a: 'Yes. Orbital welding with proper end preparation and inert-gas purge keeps the weld bead smooth inside the tube. Post-weld passivation restores the passive layer at the heat-affected zone.'
  }),
  47: () => ({
    q: 'How do I inspect EP tube on arrival?',
    a: 'Check heat numbers against the MTC, confirm caps and sleeves are intact, measure Ra on a sample, inspect the bore (borescope for critical lines) and verify OD and wall.'
  }),
  48: () => ({
    q: 'How should EP tube be stored on site?',
    a: 'Keep the end caps on, store lengths off the floor on non-ferrous supports, away from carbon-steel work and grinding dust, in a dry area until installation.'
  })
};

const FAQ_SETS = {
  'A-1': [1, 2, 3, 4, 13, 14, 15, 16, 17, 18], 'A-2': [3, 4, 5, 6, 19, 20, 21, 22, 23, 24],
  'A-3': [5, 6, 7, 8, 25, 26, 27, 28, 29, 30], 'A-4': [7, 8, 9, 10, 31, 32, 33, 34, 35, 36],
  'A-5': [9, 10, 11, 12, 37, 38, 39, 40, 41, 42], 'A-6': [11, 12, 1, 2, 43, 44, 45, 46, 47, 48],
  'B-1': [1, 2, 3, 13, 14, 15, 16, 17], 'B-2': [3, 4, 5, 19, 20, 21, 22, 23],
  'B-3': [5, 6, 7, 25, 26, 27, 28, 29], 'B-4': [7, 8, 9, 31, 32, 33, 34, 35],
  'B-5': [9, 10, 11, 37, 38, 39, 40, 41], 'B-6': [11, 12, 1, 43, 44, 45, 46, 47]
};

const FOREIGN_H2 = [
  [(x) => `Grades, Finish and Checks on Tube for ${x}`, (x) => `Shipping EP Tube from Mumbai to ${x}`, (x) => `Project and Bulk Quotes for ${x}`],
  [(x) => `How Each Length for ${x} Is Checked Before Dispatch`, (x) => `Dispatch and Transit for ${x} Orders`, (x) => `How Bulk EP Tube for ${x} Is Priced`],
  [(x) => `Standards and Certificates on Tube for ${x}`, (x) => `How Your ${x} Order Is Packed and Shipped`, (x) => `Quoting a Full Line List for ${x}`],
  [(x) => `Before It Ships to ${x}: PMI, EP Finish and 3.1`, (x) => `Getting EP Tube to ${x}: Packing and Documents`, (x) => `Bulk Orders for ${x} Projects: What Sets the Price`],
  [(x) => `What You Get with EP Tube Shipped to ${x}`, (x) => `From Quote to Delivery in ${x}`, (x) => `One Quote for Your Whole ${x} Line`],
  [(x) => `Our Quality Steps on ${x} Orders`, (x) => `Packing and Paperwork for ${x} Shipments`, (x) => `Project Pricing for ${x}: What to Send`]
];

export function buildCityFaqs(cityData) {
  if (!cityData?.research) return null;
  const c = context(cityData);
  const ind = c.india ? industriesFor(c.r) : [];
  return (FAQ_SETS[c.r.faqSet] || FAQ_SETS['A-1']).filter((n) => FAQ[n]).map((n) => FAQ[n](c, ind)).filter(Boolean);
}

export function buildCityContent(cityData) {
  if (!cityData?.research) return null;
  const c = context(cityData);
  const { r } = c;
  const ind = c.india ? industriesFor(r) : [];
  const angle = c.india ? (ANGLES[r.angle] || ANGLES.GENERAL) : ANGLES.GENERAL;
  // Foreign research rows carry unsourced headings ("Manufacturer in X", "Stockist"), so foreign
  // pages use these instead, rotated by the row's FAQ set so neighbouring pages differ.
  const h = c.india ? null : FOREIGN_H2[((parseInt(String(r.faqSet || '').split('-')[1], 10) || 1) - 1) % FOREIGN_H2.length];
  const place = c.city.endsWith(c.country) ? c.city : `${c.city}, ${c.country}`;

  return {
    introHeading: c.india ? `Industry in ${c.city} and Where Electropolished Tube Is Used` : `Electropolished Tube for ${c.city}: Where It Is Used`,
    intro: !c.india
      ? `Sakshi Forge ships electropolished stainless tube from Mumbai to ${place}. EP tube earns its cost on purified water and WFI loops, clean steam, CIP/SIP circuits and product-contact lines; utility and non-contact lines usually run well on a mechanically polished or pickled finish. ${fill(angle.intro, c)}`
      : `${c.city}'s industrial base is concentrated in ${r.estates}${r.leadEstate && r.leadEstate !== r.estates ? `, with ${r.leadEstate} the main cluster` : ''}. The dominant industries are ${r.industryMix.toLowerCase()}. ${fill(angle.intro, c)}`,
    industries: ind.map((i) => ({ label: i.label, text: fill(i.text, c) })),
    angle: { heading: fill(angle.heading, c), points: angle.points.map((pt) => fill(pt, c)) },
    compliance: c.india ? regulatorNotes(r) : [],
    manufacturer: {
      heading: h ? h[0](c.city) : r.h2Manufacturer,
      text: `Sakshi Forge is ISO 9001:2015 certified, based in Mumbai, with a NABL lab. Tube for ${c.city} is supplied to ASTM A270, electropolished to ASME BPE SF4 and checked by PMI on every length before dispatch. Each shipment carries an EN 10204 3.1 certificate traced to heat number, with an internal Ra report on electropolished lots.`
    },
    supplier: {
      heading: h ? h[1](c.city) : r.h2Supplier,
      text: `${transitSentence(c)} Each length is end-capped and sleeved before dispatch so the bore arrives clean.${c.india ? '' : ' List any documents your importer needs on the RFQ so they are confirmed in the quotation.'}`
    },
    wholesaler: {
      heading: h ? h[2](c.city) : r.h2Wholesaler,
      text: `Project and bulk prices for ${c.city} depend on grade and alloy surcharge, OD and wall, the Ra or ASME BPE finish, certification level and total quantity. Send the complete line list - grade, OD, wall, length, quantity, finish, standard and delivery address - and we quote the package as one order rather than item by item.`
    },
    faqs: buildCityFaqs(cityData)
  };
}
