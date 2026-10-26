// Reusable, fact-checked building blocks for city pages that have a VERIFIED research
// row (market_cities.json -> research). Placeholders: {city}, {estates}, {lead}, {region},
// {country}. Company facts used here are limited to ones already published on the site:
// ISO 9001:2015, manufacturing at Taloja MIDC (Mumbai), PMI on every length,
// hydrostatic / eddy-current testing, EN 10204 3.1 MTC, end caps and sleeving,
// ASME BPE SF4 (Ra <= 0.38 um), payment by LC at sight or TT.

// How electropolished (EP) tube is actually used in each industry. Where EP is rarely
// needed, the text says so - honest scoping, not a sales list.
export const INDUSTRY_LIBRARY = [
  {
    key: 'pharma',
    match: /pharma|formulation|bulk drug|\bapi\b|intermediate/i,
    label: 'Pharmaceutical manufacturing',
    text: 'Formulation and API plants in {city} run purified water (PW) and water-for-injection (WFI) loops, clean steam headers and CIP/SIP circuits. These are the lines where an electropolished bore earns its cost: a smooth, crevice-free surface drains fully, cleans faster and slows the onset of rouging in hot WFI. Buyers here typically specify 316L to ASTM A270 with an ASME BPE SF4 finish and expect an EN 10204 3.1 certificate that ties every length to its heat number for audit.'
  },
  {
    key: 'biotech',
    match: /biotech|biologic|vaccine|life science/i,
    label: 'Biotech, biologics and vaccines',
    text: 'Biologics and vaccine suites in {city} use EP tubing on media and buffer transfer, WFI distribution and clean-in-place return lines. Surface finish matters more here than anywhere else in the plant because protein and microbial residues bind to rough steel. Specifications usually call for 316L, ASME BPE SF4 or tighter, documented internal Ra readings and borescope records for welded spools.'
  },
  {
    key: 'medical',
    match: /medical/i,
    label: 'Medical devices',
    text: 'Medical device makers around {city} use EP tube in cleanroom utilities, purified water supply to washers and in components where a smooth, passive surface reduces particle shedding. Orders are usually small diameters in 316L with tight dimensional tolerances and full traceability.'
  },
  {
    key: 'semi',
    match: /semiconductor|wafer|electronics|\bfab\b/i,
    label: 'Semiconductors and electronics',
    text: 'Electronics and semiconductor facilities in {city} need EP tube for ultra-high-purity (UHP) process gas lines, specialty gas cabinets and high-purity water. The relevant references are SEMI F19 for surface condition and SEMI F17 for the related test methods (SEMI F57 covers polymer components and does not apply to stainless UHP tube). Expect 316L, very low internal Ra, cleanroom packing and capped, bagged ends.'
  },
  {
    key: 'dairy',
    match: /dairy|milk/i,
    label: 'Dairy processing',
    text: 'Dairy plants around {city} run milk reception, pasteurisation, cream and CIP lines where product-contact surfaces must clean reliably every shift. Grade 304 or 304L is the usual choice, moving to 316L where aggressive CIP chemistry or salt is involved. Buyers reference 3-A Sanitary Standards and ASTM A270 and look for full drainability and smooth weld beads as much as a low Ra number.'
  },
  {
    key: 'brewery',
    match: /brew|beer|wine|distill|beverage/i,
    label: 'Breweries and beverages',
    text: 'Breweries and beverage plants in {city} need hygienic tube on wort, fermentation, bright-beer and filling lines. In practice an electropolished finish is justified on yeast handling, bright-beer and aseptic filling, while many utility and hot-side lines run well on a lower-cost mechanically polished or pickled tube. We will tell you which is which before you pay for EP you do not need.'
  },
  {
    key: 'food',
    match: /food|agro|spice|fmcg|sugar|palm oil|dates|seafood|fisheries|edible|confection/i,
    label: 'Food and agro processing',
    text: 'Food and agro-processing units in {city} use sanitary stainless tube on product-contact, syrup, edible-oil and CIP lines. Grade 304 covers most duty; 316L is the safer choice where salt, acids or chloride-bearing cleaning chemicals are present. An electropolished finish is worth specifying on lines that must stay clean between batches; utility and non-contact lines rarely need it.'
  },
  {
    key: 'chem',
    match: /chemical|petrochem|refin|fertili[sz]|agrochem|\bdye|oil\b|\bgas\b|\blng\b|oilfield/i,
    label: 'Chemicals, petrochemicals and refining',
    text: 'Chemical and petrochemical units in {city} mostly run process piping in carbon steel or higher alloys, often through EPC contractors. EP tube is used on the clean side: sampling and analyser lines, laboratory and QC utilities, demineralised water and specialty or high-purity chemical dosing. Where chlorides are high, duplex 2205 is usually the better answer than 316L, and hazardous-service lines follow PESO/OISD or local equivalents.'
  },
  {
    key: 'water',
    match: /desalination|water/i,
    label: 'Water and desalination',
    text: 'Water treatment and desalination plants serving {city} use stainless tube on chemical dosing, sampling, instrumentation and permeate lines. Chlorides drive the grade choice: 316L for moderate exposure, duplex 2205 or super duplex where seawater or brine is involved. Electropolishing helps on high-purity permeate and instrument lines rather than on bulk brine piping.'
  },
  {
    key: 'cosmetics',
    match: /cosmetic|personal care/i,
    label: 'Cosmetics and personal care',
    text: 'Cosmetics and personal-care plants in {city} need cleanable product-transfer and purified water lines because creams and emulsions leave residues that rough steel holds on to. 316L with an electropolished bore is common on product contact; 304 serves utilities.'
  },
  {
    key: 'engineering',
    match: /engineering|fabricat|process equipment|food equipment|food machinery|valve|pump|boiler|pressure vessel|skid/i,
    label: 'Engineering and equipment fabrication',
    text: 'The engineering and fabrication base in {city} builds skids, vessels, valves and process equipment that end up in pharma, food and chemical plants. These buyers order EP tube by drawing - cut lengths, specific ODs and finishes to match an end customer\'s specification - and need certificates they can pass straight through to their client at handover.'
  },
  {
    key: 'auto',
    match: /automotive|auto\b/i,
    label: 'Automotive',
    text: 'Automotive plants around {city} rarely need electropolished tube in the process itself. Where they do buy it, it is for paint-shop and lab utilities, purified water to test rigs, and in the supplier base that builds equipment for food or pharma customers.'
  },
  {
    key: 'metals',
    match: /steel|alumin|foundry|mining|metal/i,
    label: 'Steel, metals and mining',
    text: 'Steel, metals and mining operations near {city} do not use electropolished tube in primary processing. Demand comes from water-treatment, laboratory and analytical utilities on site, and from local fabricators supplying other industries.'
  },
  {
    key: 'textile',
    match: /textile|dyeing|garment|cotton/i,
    label: 'Textiles and dyeing',
    text: 'Textile and dyeing units in {city} use stainless tube on dye-kitchen dosing and effluent treatment. Electropolishing is seldom needed for dyeing itself; it matters for the colour-dosing and lab lines where residue carry-over between shades causes rejects.'
  },
  {
    key: 'packaging',
    match: /packaging|plastic|rubber|paper|polymer/i,
    label: 'Packaging, plastics and paper',
    text: 'Packaging, plastics and paper converters in {city} buy EP tube mainly when they serve food or pharma customers - for purified water, coating and cleanroom utilities - rather than for their core process.'
  },
  {
    key: 'energy',
    match: /energy|power|solar|nuclear/i,
    label: 'Energy and power',
    text: 'Power and energy facilities around {city} use stainless tube on sampling, analyser and demineralised-water lines where clean, low-pickup surfaces protect instrument readings. Boiler-code (IBR) requirements apply to some of these lines; tell us at RFQ stage.'
  },
  {
    key: 'marine',
    match: /marine|port|shipbuild|logistic/i,
    label: 'Marine, ports and logistics',
    text: 'Port, marine and logistics operations in {city} mostly need corrosion resistance rather than an electropolished finish. Where EP tube is bought, it goes into on-board or terminal water systems and into the food and chemical facilities clustered near the port.'
  },
  {
    key: 'aerospace',
    match: /aerospace|defen[cs]e/i,
    label: 'Aerospace and defence',
    text: 'Aerospace and defence suppliers in {city} use high-cleanliness stainless tube on hydraulic test rigs, fluid systems and cleanroom utilities, where traceability and documented cleaning matter as much as the surface finish.'
  }
];

// The page "shape" for each dominant-industry angle (client workbook, sheet 16).
export const ANGLES = {
  PHARMA: {
    heading: 'What pharma plants in {city} specify',
    intro: 'Most enquiries from {city} come from formulation, API and bulk-drug plants, so the questions are about water systems and audit documentation rather than price alone.',
    points: [
      'Standards: ASTM A270 with S2 pharmaceutical supplement, ASME BPE SF4, EN 10204 3.1 certificate.',
      'Grades: 316L for PW, WFI and clean steam; 304 is acceptable for non-critical utilities.',
      'Watch-out: rouging in hot WFI. Electropolishing slows it; passivation after welding and a sensible inspection interval manage it.',
      'Documents an auditor will ask for: heat-number traceability, Ra report, PMI record, weld and passivation records.'
    ]
  },
  BIOTECH: {
    heading: 'What biologics and life-science plants in {city} specify',
    intro: 'Biotech buyers in {city} care most about surface finish, weld quality and the depth of documentation behind every spool.',
    points: [
      'Standards: ASME BPE SF4 (or tighter where your user requirement says so), ASTM A270 S2, EN 10204 3.1.',
      'Grade: 316L only on product and WFI contact.',
      'Watch-out: bacterial adhesion and biofilm start at surface defects - insist on internal Ra readings and borescope records for welded joints.',
      'Documents: Ra report per lot, MTC traced to heat number, weld maps and inspection records for fabricated spools.'
    ]
  },
  SEMI: {
    heading: 'What semiconductor and electronics plants in {city} specify',
    intro: 'Fab and electronics buyers in {city} specify for purity and cleanliness first; mechanical rating is rarely the deciding factor.',
    points: [
      'Standards: SEMI F19 (surface condition) and SEMI F17, with ASTM A269/A270 for the tube itself. Not SEMI F57.',
      'Grade: 316L, electropolished, very low internal Ra.',
      'Watch-out: particles, moisture and outgassing - packing integrity on arrival matters as much as the finish.',
      'Documents: Ra and cleanliness reports, MTC, packing and capping record.'
    ]
  },
  DAIRY: {
    heading: 'What dairy plants in {city} specify',
    intro: 'Dairy enquiries from {city} centre on cleanability: lines must come clean every CIP cycle without hold-up points.',
    points: [
      'Standards: 3-A Sanitary Standards, ASTM A270, EN 10357 where European equipment is installed.',
      'Grades: 304 or 304L for most product lines; 316L where CIP chemistry or salt is aggressive.',
      'Watch-out: drainability and slope - a perfect Ra does not help if the line holds product.',
      'Documents: MTC with heat numbers, Ra report for product-contact lots.'
    ]
  },
  BREWERY: {
    heading: 'What breweries and beverage plants in {city} specify',
    intro: 'Brewery buyers in {city} ask where electropolishing is genuinely needed - and where it is money spent for nothing.',
    points: [
      'Standards: 3-A and EHEDG hygienic design, ASTM A270, DIN 11850 where European brewhouse equipment is installed.',
      'Grade: 304 for most lines.',
      'Where EP pays off: yeast propagation, bright beer and aseptic filling. Hot-side and utility lines usually do not need it.',
      'Documents: MTC; Ra report on the lines you specify as EP.'
    ]
  },
  FOOD: {
    heading: 'What food and agro processors in {city} specify',
    intro: 'Food buyers in {city} balance hygiene against cost, so the right answer is often EP on product contact and a simpler finish elsewhere.',
    points: [
      'Standards: 3-A Sanitary Standards, ASTM A270, plus the local food-safety licensing for the plant.',
      'Grades: 304 for most product lines; 316L for salt, acidic or chloride-bearing streams.',
      'Watch-out: chloride pitting under deposits in brine, sauce and pickling service - grade choice matters more than finish there.',
      'Documents: MTC with heat numbers; Ra report on product-contact lots.'
    ]
  },
  CHEM: {
    heading: 'What chemical and process plants in {city} specify',
    intro: 'Chemical buyers in {city} usually need a straight answer on alloy selection before they need a finish.',
    points: [
      'Standards: ASTM A269 / A312, ASME B31.3 for process piping, PESO / OISD rules on hazardous service in India.',
      'Grades: 316L for general service; duplex 2205 or higher where chlorides or stress-corrosion risk are high.',
      'Where EP pays off: sampling, analyser, lab and high-purity dosing lines.',
      'Documents: MTC, PMI record, pressure-test record.'
    ]
  },
  GENERAL: {
    heading: 'What engineering and general industry buyers in {city} specify',
    intro: 'Most buyers in {city} are fabricators and general industry, so we start by asking whether a hygienic finish is needed at all.',
    points: [
      'Standards: ASTM A269 / A270; ASME BPE only where the end use is hygienic.',
      'Grade: 304 for most utility and fabrication work; 316L where the end customer specifies it.',
      'Where EP pays off: equipment you are building for a pharma, food or dairy end user.',
      'Documents: MTC you can hand straight to your own customer.'
    ]
  }
};

// What each local standard or regulator means for a buyer.
export const REGULATORS = [
  { match: /CDSCO/i, text: 'CDSCO and the state FDA license pharma plants in India; inspectors expect material traceability for product-contact and water-system piping.' },
  { match: /WHO-GMP|USFDA/i, text: 'WHO-GMP and USFDA audits look for documented materials, surface finish and weld records on water systems - EP tube with a 3.1 MTC and Ra report supports that file.' },
  { match: /FSSAI/i, text: 'FSSAI licensing covers food plants in India; product-contact surfaces must be cleanable and suitable for food contact.' },
  { match: /state dairy board/i, text: 'Co-operative and state dairy boards often issue their own equipment specifications - share yours at RFQ stage.' },
  { match: /3-A/i, text: '3-A Sanitary Standards set hygienic design and surface requirements for dairy and food equipment.' },
  { match: /ASME BPE/i, text: 'ASME BPE defines surface finish grades SF1-SF6; SF4 (electropolished, Ra <= 0.38 um / 15 uin) is the usual pharma and biotech requirement.' },
  { match: /A270/i, text: 'ASTM A270 is the sanitary tubing specification; its S2 supplement covers pharmaceutical-quality tube.' },
  { match: /EN 10204/i, text: 'EN 10204 3.1 certificates are issued by the manufacturer\'s inspection function, independent of production; 3.2 adds a third-party or purchaser inspector.' },
  { match: /EN 10217-7/i, text: 'EN 10217-7 covers welded stainless tubes for pressure purposes.' },
  { match: /EN 10357/i, text: 'EN 10357 covers welded stainless tubes for the food and chemical industry.' },
  { match: /DIN 11850/i, text: 'DIN 11850 dimensions are common on European-built food and brewery equipment; tell us if your plant uses them.' },
  { match: /PED/i, text: 'Pressure equipment placed on the EU market falls under PED 2014/68/EU (UK: PER 2016); material certification must support the equipment maker\'s conformity file.' },
  { match: /EHEDG/i, text: 'EHEDG guidelines cover hygienic design for food equipment and are widely referenced by European buyers.' },
  { match: /UKCA/i, text: 'UKCA marking applies to equipment placed on the Great Britain market.' },
  { match: /SASO|SABER/i, text: 'Saudi Arabia requires a SASO / SABER certificate of conformity for many imports - confirm the requirement for your tariff code before shipment.' },
  { match: /ESMA|QS conformity|KUCAS|DGSM|BSMD/i, text: 'Gulf markets operate national conformity schemes for imported products; we provide the material certificates your importer needs to file.' },
  { match: /TCVN/i, text: 'Vietnam applies TCVN national standards and conformity rules to imported steel products.' },
  { match: /SNI/i, text: 'Indonesia applies SNI conformity requirements to some steel imports - check your HS code with your importer.' },
  { match: /Halal/i, text: 'Halal-certified plants expect documented, cleanable product-contact surfaces.' },
  { match: /MS hygienic/i, text: 'Malaysian buyers commonly reference MS hygienic standards alongside ASME BPE and ASTM A270.' },
  { match: /AS 1528|AS\/NZS/i, text: 'Australian food and beverage plants commonly specify AS 1528 hygienic tube, with AS/NZS 3500 for plumbing work.' },
  { match: /UNI/i, text: 'Italian equipment builders often reference UNI hygienic norms alongside EN 10357.' },
  { match: /\bBIS\b/i, text: 'BIS rules apply to some steel products in India; most hygienic-tube buyers specify ASTM A270 or ASME BPE directly.' },
  { match: /SEMI F19/i, text: 'SEMI F19 and SEMI F17 are the references for UHP stainless tube in semiconductor fabs.' },
  { match: /FDA 21 CFR 177/i, text: 'FDA 21 CFR 177 governs polymer food-contact materials such as gaskets used with sanitary tube.' },
  { match: /PESO|OISD/i, text: 'PESO and OISD rules govern hazardous-service and petroleum installations in India.' },
  { match: /IBR/i, text: 'Lines under the Indian Boiler Regulations need IBR-compliant material and documentation - say so at RFQ stage.' }
];

export const isIndia = (country) => !country || /india/i.test(country);

export function fill(text, ctx) {
  return text
    .replace(/\{city\}/g, ctx.city)
    .replace(/\{estates\}/g, ctx.estates)
    .replace(/\{lead\}/g, ctx.lead)
    .replace(/\{region\}/g, ctx.region)
    .replace(/\{country\}/g, ctx.country);
}
