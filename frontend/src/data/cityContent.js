import { INDUSTRY_LIBRARY, ANGLES, REGULATORS, isIndia, fill } from './cityContentLibrary.js';

// Builds the city-specific sections and FAQs for a market-area page from its VERIFIED
// research row. Every city fact comes from cityData.research; nothing is invented.
// Returns null for cities without verified research (they keep the existing template).

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
  if (ctx.india) {
    return `Material for ${ctx.city} leaves our Taloja MIDC works in Mumbai by road (typical transit: ${r.transit.replace(/ from our Mumbai works$/, '')}). For export-bound projects the nearest gateway is ${r.gateway}.`;
  }
  return `${ctx.city} is supplied by sea from Nhava Sheva (JNPT) through ${r.gateway}; ocean transit is typically ${r.transit.replace(/ from Nhava Sheva.*$/, '')}, plus time for customs clearance and inland delivery.`;
}

// FAQ answers keyed by the client's FAQ-bank number. Numbers whose answer needs a company
// fact we have not been given (7, 12, 18, 33, 36, 39, 40) are intentionally absent.
const FAQ = {
  1: (c, ind) => ({
    q: `Do you supply electropolished pipes in ${c.city}?`,
    a: `Yes. We supply electropolished stainless pipes and tubes to plants in and around ${c.estates}${ind.length ? `, mainly for ${listJoin(ind.map((i) => i.label.toLowerCase()))}` : ''}. ${transitSentence(c)}`
  }),
  2: (c) => ({
    q: `How long does delivery take to ${c.city}?`,
    a: `${transitSentence(c)} Manufacturing time for made-to-order sizes is separate from transit; we confirm both in writing with the quotation.`
  }),
  3: (c, ind) => ({
    q: `Which industries in ${c.city} use electropolished tubing?`,
    a: ind.length
      ? `The main users in ${c.city} are ${listJoin(ind.map((i) => i.label.toLowerCase()))}. ${ind.slice(0, 2).map((i) => fill(i.text, c).split('. ')[0] + '.').join(' ')}`
      : `The industrial base of ${c.city} is ${c.r.industryMix}. EP tube is used where those plants need cleanable, high-purity lines.`
  }),
  4: (c) => ({
    q: `Do you deliver to ${c.estates}?`,
    a: `Yes. We deliver to units across ${c.estates}${c.lead ? `, with ${c.lead} the main cluster we serve` : ''}. Give us the plant address with your enquiry and we will confirm the delivery route and timing for that site.`
  }),
  5: (c) => ({
    q: `Are you a manufacturer or a trader for ${c.city} buyers?`,
    a: `We are the manufacturer. Pipes and tubes are electropolished, tested and certified at our Taloja MIDC works in Mumbai and supplied to ${c.city} directly, so the EN 10204 3.1 certificate you receive is issued by the plant that made the material.`
  }),
  6: (c) => ({
    q: `Can I get bulk or project pricing for a plant in ${c.city}?`,
    a: `Yes. Project prices depend on grade, OD and wall, the Ra or ASME BPE finish required, certification level and total quantity. Send the full line list for your ${c.city} project rather than item-by-item enquiries and we will quote it as one package.`
  }),
  8: (c) => ({
    q: `What is the nearest port for shipments to or from ${c.city}?`,
    a: c.india
      ? `For ${c.city} the reference gateway is ${c.r.gateway}. Domestic deliveries go by road from Mumbai; export-bound project material is routed through this gateway.`
      : `Shipments to ${c.city} arrive through ${c.r.gateway}. Ocean transit from Nhava Sheva is typically ${c.r.transit.replace(/ from Nhava Sheva.*$/, '')}.`
  }),
  9: (c, ind) => {
    const keys = new Set(ind.map((i) => i.key));
    const parts = [];
    if (keys.has('pharma') || keys.has('biotech') || keys.has('semi') || keys.has('medical')) parts.push('316L for pharma, biotech and high-purity lines');
    if (keys.has('food') || keys.has('dairy') || keys.has('brewery')) parts.push('304 or 304L for food, dairy and beverage duty, moving to 316L for salt or aggressive CIP');
    if (keys.has('chem') || keys.has('water')) parts.push('316L for general chemical service and duplex 2205 where chlorides are high');
    if (!parts.length) parts.push('304 for utility and fabrication work and 316L where the end customer specifies it');
    return { q: `Which grades do ${c.city} buyers order most?`, a: `It follows the local industry mix (${c.r.industryMix}): ${listJoin(parts)}.` };
  },
  10: (c) => ({
    q: `Do you supply to EPC contractors working in ${c.city}?`,
    a: `Yes. EPC and fabrication contractors building plants in ${c.city} order from us against their line lists and drawings. Share your installation schedule with the RFQ, and we will quote delivery against it with the certificates your client will ask for at handover.`
  }),
  11: (c) => ({
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
    a: 'Our electropolished range covers 304, 304L, 316 and 316L, with duplex and super duplex for chloride-heavy service. 316L is the standard for pharma and biotech; 304 suits most food, dairy and utility lines.'
  }),
  20: () => ({
    q: 'Can you supply cut lengths or custom lengths?',
    a: 'Yes. Along with standard lengths we cut to the lengths on your drawing or line list; state the required length tolerance on the RFQ.'
  }),
  21: () => ({
    q: 'Do you supply matching fittings and clamps?',
    a: 'Yes - electropolished elbows, tees, reducers, ferrules and clamps. Matching the finish across tube and fittings matters because a hygienic loop is only as cleanable as its roughest component.'
  }),
  22: () => ({
    q: 'How is EP tube packed for transit?',
    a: 'Each length is end-capped and sleeved before it leaves the works so the electropolished bore arrives clean and undamaged. Tell us at RFQ stage if your site needs additional packing.'
  }),
  23: () => ({
    q: 'Do your tubes comply with ASTM A270?',
    a: 'Yes. ASTM A270 covers seamless and welded austenitic stainless sanitary tubing; we supply to it, including the S2 pharmaceutical supplement when your specification calls for it.'
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
    a: 'A 3.1 certificate is validated by the manufacturer\'s own independent inspection function. A 3.2 certificate is additionally countersigned by the purchaser\'s inspector or a third-party agency. Ask for 3.2 when your client or regulator requires witnessed testing.'
  }),
  28: () => ({
    q: 'Which standards apply to semiconductor UHP tubing?',
    a: 'SEMI F19 (surface condition of wetted stainless components) and SEMI F17 are the relevant references. SEMI F57 is sometimes quoted in error - it covers polymer components for ultrapure water, not stainless UHP tube.'
  }),
  29: () => ({
    q: 'Do you do PMI testing?',
    a: 'Yes. Positive material identification by handheld XRF is done on every length before dispatch, and the results accompany the material certificate.'
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
    a: 'PMI on every length, hydrostatic testing and eddy-current or ultrasonic examination, dimensional checks and, for EP tube, internal Ra measurement. The results are recorded on the EN 10204 3.1 certificate.'
  }),
  34: (c) => ({
    q: 'How do I get a quotation?',
    a: `Send grade, OD, wall thickness, length, quantity, the Ra or ASME BPE finish you need, the standard (for example ASTM A270), certification level and the delivery address in ${c.city}. A complete RFQ gets a firm quote fastest.`
  }),
  35: (c) => ({
    q: 'What payment and delivery terms do you offer?',
    a: c.india
      ? 'Terms are agreed per order and confirmed on the quotation, including delivery to your site.'
      : `For export orders to ${c.country} we work on LC at sight or TT; the Incoterm is agreed per order and stated on the quotation.`
  }),
  37: () => ({
    q: 'How is EP tube priced?',
    a: 'Price is driven by grade and the alloy surcharge of the day, OD and wall, the Ra or SF finish required, certification level and quantity. We quote against your specification rather than publishing a list that would go stale.'
  }),
  38: (c) => ({
    q: 'Do you export, and what documentation is provided?',
    a: `Yes. Export shipments carry commercial invoice, packing list, EN 10204 3.1 certificate and certificate of origin${c.india ? '' : `, plus the conformity documents ${c.country} requires (${c.r.regulator})`}.`
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

export function buildCityFaqs(cityData) {
  if (!cityData?.research) return null;
  const c = context(cityData);
  const ind = industriesFor(c.r);
  return (FAQ_SETS[c.r.faqSet] || FAQ_SETS['A-1']).filter((n) => FAQ[n]).map((n) => FAQ[n](c, ind));
}

export function buildCityContent(cityData) {
  if (!cityData?.research) return null;
  const c = context(cityData);
  const { r } = c;
  const ind = industriesFor(r);
  const angle = ANGLES[r.angle] || ANGLES.GENERAL;

  return {
    intro: `${c.city}'s industrial base is concentrated in ${r.estates}${r.leadEstate && r.leadEstate !== r.estates ? `, with ${r.leadEstate} the main cluster` : ''}. The dominant industries are ${r.industryMix.toLowerCase()}. ${fill(angle.intro, c)}`,
    industries: ind.map((i) => ({ label: i.label, text: fill(i.text, c) })),
    angle: { heading: fill(angle.heading, c), points: angle.points },
    compliance: regulatorNotes(r),
    manufacturer: {
      heading: r.h2Manufacturer,
      text: `We manufacture, electropolish and test the tube at our ISO 9001:2015 works in Taloja MIDC, Mumbai${c.india ? '' : ', and export it'} - there is no trading intermediary between the plant and your site in ${c.city}. Every length is checked by PMI before dispatch, lots are hydrostatically and eddy-current tested, and each shipment carries an EN 10204 3.1 certificate traced to heat number, with an internal Ra report on electropolished lots.`
    },
    supplier: {
      heading: r.h2Supplier,
      text: `${transitSentence(c)} Each length is end-capped and sleeved before dispatch so the bore arrives clean.${c.india ? '' : ` Shipments travel with commercial invoice, packing list, 3.1 certificate and certificate of origin, plus the conformity documents ${c.country} requires.`}`
    },
    wholesaler: {
      heading: r.h2Wholesaler,
      text: `Project and bulk prices for ${c.city} depend on grade and alloy surcharge, OD and wall, the Ra or ASME BPE finish, certification level and total quantity. Send the complete line list - grade, OD, wall, length, quantity, finish, standard and delivery address - and we quote the package as one order rather than item by item.`
    },
    faqs: buildCityFaqs(cityData)
  };
}
