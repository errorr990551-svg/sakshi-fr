// Page-specific guides for /industries/ pages, merged into SPEC_GUIDES (specGuides.js) and
// rendered by CategoryGuide inside EPBuildSpecRenderer. Same shape as the dairy guide in
// specGuides.js: sections[{h2, paragraphs?, table?, bullets?, subsections?, cta?}], faqs[{q,a}].
// Inline links use [anchor](/path/) and must be internal. Company claims are limited to those
// the owner has confirmed (see seo-autoresearch/program.md). `sources` is kept for the record
// and is not rendered.

export const INDUSTRY_GUIDES = {
  '/industries/pharmaceutical-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [
      'https://www.asme.org/codes-standards/find-codes-standards/bpe-bioprocessing-equipment',
      'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en',
      'https://en.wikipedia.org/wiki/Clean-in-place'
    ],
    sections: [
      {
        h2: 'Which Pharmaceutical Lines Need an Electropolished Bore',
        paragraphs: [
          'A pharmaceutical plant does not need electropolished pipe everywhere, and a specification that puts SF4 on every line wastes money that should go into the lines that matter. The finish pays for itself on water for injection and purified water distribution loops, on product-contact transfer and holding lines, on the clean utilities that feed sterile filling, and on the CIP return leg that is sampled to prove a circuit is clean. These are the lines an inspector traces when reviewing a water system validation or a cleaning validation.',
          'Plain utilities, solvent recovery, chilled and tower water, and transfer lines for non-sterile intermediates that are flushed rather than validated are well served by SF1 mechanically polished 304L or 316L. ASME BPE, which its publisher describes as the leading standard for designing and building equipment for biopharmaceutical production, sets the surface designations used on the table below.'
        ],
        table: {
          caption: 'Typical specification by pharmaceutical line',
          head: ['Line', 'Grade', 'Internal finish', 'Why'],
          rows: [
            ['WFI generation outlet, storage and distribution loop', '316L', 'SF4 electropolished', 'Hot loop, biofilm and rouge control, inspected on validation'],
            ['Purified water loop', '316L', 'SF4 electropolished', 'Continuous recirculation, sanitised with hot water or ozone'],
            ['Product transfer, holding and formulation', '316L', 'SF4 electropolished', 'Product contact, cleaning validation'],
            ['Sterile filling support (buffer, media, clean gas)', '316L', 'SF4 electropolished', 'Sterile boundary'],
            ['CIP supply', '316L', 'SF1 or SF4', 'Hot caustic and acid at temperature'],
            ['CIP return', '316L', 'SF4 electropolished', 'Sampled to confirm the circuit is clean'],
            ['API solvent lines, non-sterile intermediates', '316L', 'SF1 mechanically polished', 'Flushed, not validated'],
            ['Chilled water, tower water, plant air', '304L', 'SF1 mechanically polished', 'Utility only']
          ]
        }
      },
      {
        h2: '316L and 904L in Pharmaceutical Service',
        paragraphs: [
          '316L is the default for every product-contact and high-purity water line because its molybdenum content resists the chloride pitting that 304L suffers in hot water and chlorinated sanitiser. Rouge, the iron oxide film that forms in hot WFI loops, is slowed by the chromium-rich surface that electropolishing leaves behind, which is the second reason SF4 316L is specified on hot loops rather than SF1. Where an API process carries hydrochloric acid, chlorides at temperature or other aggressive chemistry, ask us to quote [904L](/blog/electropolished-pipes-aggressive-chemical-service/), which we supply electropolished.',
          'Keep 304L for utilities only. Putting it on a water loop to save money is a false economy once the first pit appears, because the loop then has to be drained, inspected and often re-piped during a shutdown.'
        ]
      },
      {
        h2: 'Design Points That Decide Whether a Pharma Loop Validates',
        bullets: [
          'Size loops for the return velocity the water system design assumes, not just for peak draw-off; CIP guidance generally calls for turbulent flow, with a minimum velocity of about 1.5 m/s commonly cited for pipe circuits.',
          'Slope horizontal runs to drain points so the loop empties completely for sanitisation and shutdown, and keep branches within the dead-leg limit written into your design standard.',
          'Use one tube dimension series across the plant. ASME BPE inch tube, DIN 11850 and SMS/ISO 2037 do not match at the joint, and a step at every ferrule holds water and product. See [ASME BPE electropolished tubes](/asme-bpe-electropolished-tubes/) for the BPE series.',
          'Weld orbitally and record each weld. The bore finish you paid for is lost at a hand weld with sugaring on the inside, and the weld map is part of the turnover package an auditor reads.',
          'Specify the sterile filling area to the current EU GMP Annex 1 on the manufacture of sterile medicinal products, which is the document most Indian export plants are inspected against for aseptic processing.'
        ]
      },
      {
        h2: 'What to Send With a Pharmaceutical EP Pipe Enquiry',
        bullets: [
          'The line list, or at least the system each size is for (WFI loop, PW loop, product transfer, CIP, utility), so we can advise grade and finish line by line.',
          'Tube or pipe sizes and the dimension series, with the fittings and valves they will join to.',
          'Internal finish per line and the Ra limit your validation protocol or customer sets; our [low Ra electropolished pipes](/low-ra-electropolished-pipes/) page explains how Ra is measured and reported.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every length, and a measured Ra report for each electropolished lot.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation.'
        ],
        cta: { label: 'Request a pharmaceutical EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Does every line in a pharmaceutical plant need electropolished pipe?', a: 'No. Electropolished SF4 316L belongs on WFI and purified water loops, product-contact lines, sterile filling support and the CIP return leg. Utilities and flushed, non-validated lines are well served by SF1 mechanically polished 304L or 316L.' },
      { q: 'Why is 316L used instead of 304L on water loops?', a: 'The molybdenum in 316L resists chloride pitting in hot water and sanitiser, and the electropolished chromium-rich surface slows rouging in hot WFI loops. 304L is reserved for utilities.' },
      { q: 'Which standard sets the SF1 and SF4 surface finishes?', a: 'ASME BPE, the bioprocessing equipment standard. SF1 is mechanically polished; SF4 is mechanically polished and then electropolished. Both are tied to maximum Ra values that we report per lot.' },
      { q: 'What documents come with pharmaceutical EP pipe?', a: 'An EN 10204 3.1 certificate traced to heat number with NABL-laboratory chemical analysis, a PMI record for every length and a measured Ra report for each electropolished lot. Our quality system is certified to ISO 9001:2015.' }
    ]
  },

  '/industries/biotech-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [
      'https://www.asme.org/codes-standards/find-codes-standards/bpe-bioprocessing-equipment',
      'https://en.wikipedia.org/wiki/Water_for_injection'
    ],
    sections: [
      {
        h2: 'Bioprocess Piping: Upstream, Downstream and the Lines Between',
        paragraphs: [
          'A biotech plant is built around living cultures, and that changes what the piping has to do. Upstream, media and feed lines carry nutrient solutions that any contaminating organism will happily grow in; the bioreactor itself is steamed in place and must stay sterile for days or weeks; downstream, harvest, buffer and chromatography lines carry product that is sensitive to shear, adsorption and endotoxin. The bore finish of every one of these lines decides how well it steams, how well it rinses and whether residue from one batch reaches the next.',
          'This is the industry ASME BPE was written for. The standard covers materials, design, fabrication, inspection, testing and certification of bioprocessing equipment, and its SF4 designation, a mechanically polished and then electropolished bore, is the finish that most bioprocess specifications call for on product-contact and sterile-boundary tube.'
        ],
        table: {
          caption: 'Typical specification by bioprocess line',
          head: ['Line', 'Grade', 'Internal finish'],
          rows: [
            ['Media and feed preparation and transfer', '316L', 'SF4 electropolished'],
            ['Bioreactor and fermenter piping, sterile boundary', '316L', 'SF4 electropolished'],
            ['Harvest and clarified broth', '316L', 'SF4 electropolished'],
            ['Buffer preparation and chromatography feed', '316L', 'SF4 electropolished'],
            ['WFI and purified water loops', '316L', 'SF4 electropolished'],
            ['Clean steam distribution', '316L', 'SF1 or SF4, per design standard'],
            ['CIP supply', '316L', 'SF1 mechanically polished'],
            ['CIP return', '316L', 'SF4 electropolished'],
            ['Seed-train and inoculum transfer', '316L', 'SF4 electropolished'],
            ['Plant utilities, chilled water, instrument air', '304L', 'SF1 mechanically polished']
          ]
        }
      },
      {
        h2: 'Why Bioreactor and Harvest Lines Get SF4 316L',
        paragraphs: [
          'Steam-in-place is the first reason. A sterile boundary is proven by holding every surface inside it at sterilising temperature, and condensate trapped in a rough bore or a crevice cools faster than the surrounding metal. An electropolished bore has fewer micro-crevices for condensate and cell debris to sit in, so the boundary reaches and holds temperature more evenly.',
          'Endotoxin and carry-over are the second. Fragments of gram-negative cell walls bind to rough surfaces and are released later into product, and the smoother, chromium-rich surface that electropolishing leaves gives them less to grip. Water for injection, which pharmacopoeias require to be made by distillation or by purification methods such as reverse osmosis combined with other treatment, is distributed through the same SF4 316L loops for the same reason.',
          'Grade follows the chemistry. 316L handles media, buffers and the caustic and acid CIP steps between them. Where a process uses chloride-rich buffers at temperature or strong acids in cleaning, ask us to quote 904L, which we supply electropolished.'
        ]
      },
      {
        h2: 'Stainless or Single-Use: Where Tube Still Matters',
        paragraphs: [
          'Many newer biotech plants run single-use bioreactors and bags for the product path. Even in those plants, the WFI and purified water loops, the clean steam system, the CIP skids that clean fixed vessels, the buffer and media hold tanks and the utility connections to every skid are hard-piped in stainless. A single-use plant therefore still buys a large quantity of electropolished tube; it simply buys less of it for the product path and more of it for water and utilities.'
        ]
      },
      {
        h2: 'Sending a Biotech or Biopharma Tube Enquiry',
        bullets: [
          'Which systems the tube is for: media and feed, bioreactor sterile boundary, harvest, buffer, WFI or PW loop, clean steam or CIP.',
          'Tube OD, wall and the dimension series, usually [ASME BPE](/asme-bpe-electropolished-tubes/) inch sizes in biotech, with the hygienic fittings they join to.',
          'Surface finish per line and the Ra limit your validation protocol sets; we report measured Ra on each electropolished lot.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI per length, Ra report per lot, and any weld-coupon or marking requirement from your qualification plan.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation.'
        ],
        cta: { label: 'Request a biotech EP tube quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Which bioprocess lines need SF4 electropolished tube?', a: 'Media and feed, bioreactor sterile-boundary piping, harvest, buffer and chromatography feed, WFI and purified water loops and the CIP return. Utilities and CIP supply can use SF1 mechanically polished tube.' },
      { q: 'Does a single-use bioreactor plant still need electropolished stainless tube?', a: 'Yes. The water loops, clean steam, CIP skids, hold tanks and utility connections to each skid are hard-piped in stainless even when the product path is in bags.' },
      { q: 'Why does steam-in-place favour an electropolished bore?', a: 'An electropolished bore has fewer micro-crevices for condensate and debris to sit in, so every surface inside the sterile boundary reaches and holds sterilising temperature more evenly.' },
      { q: 'What grade should bioprocess tube be?', a: '316L for almost every line. 904L, which we supply electropolished, for chloride-rich buffers at temperature or strong acid cleaning. 304L only for plant utilities.' }
    ]
  },

  '/industries/food-processing-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [
      'https://www.3-a.org/',
      'https://www.ehedg.org/guidelines-working-groups/guidelines',
      'https://en.wikipedia.org/wiki/Clean-in-place'
    ],
    sections: [
      {
        h2: 'Where Electropolished Pipe Is Worth It in a Food Plant',
        paragraphs: [
          'Food plants cover a wide range of products, and the right answer for a sauce line is not the right answer for a dry-ingredient conveying line. The common thread is this: electropolished pipe pays on lines where product burns on, sticks, carries allergens or cultures to the next batch, or runs hot and acidic for long periods. On lines that carry a single product at ambient temperature and are cleaned daily by a validated CIP, mechanically polished 304L sanitary tube does the job.',
          'Two bodies set the hygienic-design rules food engineers work to. 3-A Sanitary Standards, developed in the United States for dairy and food equipment, and the European Hygienic Engineering and Design Group, EHEDG, whose guidelines cover hygienic design of equipment and installations. Both treat the internal surface finish of product-contact pipe as a design parameter rather than an afterthought.'
        ],
        table: {
          caption: 'Typical specification by food processing line',
          head: ['Line', 'Grade', 'Internal finish', 'Reason'],
          rows: [
            ['Sauces, ketchup, tomato products', '316L', 'SF4 electropolished', 'Acidic, hot, burns on'],
            ['Fruit pulp, puree and concentrate', '316L', 'SF4 electropolished', 'Acidic and viscous; see our mango pulp page'],
            ['Aseptic and hot-fill product lines', '316L', 'SF4 electropolished', 'Sterility and long hot runs'],
            ['Liquid egg, soups, ready meals', '316L', 'SF4 electropolished', 'Protein fouling, allergen changeover'],
            ['Edible oil and fat transfer', '304L', 'SF1 mechanically polished', 'Non-aqueous, low fouling'],
            ['Sugar syrup and glucose', '304L or 316L', 'SF1 or SF4', 'Depends on temperature and crystallisation'],
            ['Brine, pickling liquor, vinegar', '316L', 'SF4 electropolished', 'Chlorides and acid'],
            ['CIP supply and return', '316L', 'SF1 supply, SF4 return', 'Return leg is sampled'],
            ['Process water, chilled water', '304L', 'SF1 mechanically polished', 'Utility']
          ]
        }
      },
      {
        h2: 'Allergen Changeover and Why the Bore Finish Matters',
        paragraphs: [
          'The expensive failure in a multi-product food plant is not corrosion; it is a changeover that fails verification. When a line switches from a product containing milk, egg, nuts or soya to one that must be free of them, the cleaning has to remove every trace, and residue held in a rough bore or at a poor weld is what shows up on the swab. An electropolished bore has a lower Ra and a chromium-rich passive surface with fewer defects for protein and fat to anchor in, so the same CIP cycle removes more and the changeover verifies first time.',
          'CIP chemistry is the other reason to think about grade. Hot caustic removes fat and protein and an acid step removes mineral scale, and both are followed by sanitiser. On 304L, chlorinated sanitiser standing in a line at temperature is the usual cause of pitting; 316L tolerates it far better, which is why the table puts 316L on every acid, brine and hot product line.'
        ]
      },
      {
        h2: 'Design Rules That Make a Food Line Cleanable',
        bullets: [
          'Size product lines so that CIP reaches turbulent flow; the commonly used rule for pipe circuits is a minimum velocity of about 1.5 m/s. A line sized generously for product flow is often too large to clean well.',
          'Slope every horizontal run to a drain point and keep dead legs short; EHEDG and 3-A both set limits that your hygienic design review will check.',
          'Pick one tube series for the plant, whether SMS/ISO 2037, DIN 11850 or inch ASME BPE, so that every joint lines up without a step. Our [sanitary electropolished pipe](/sanitary-hygienic-ep-pipes/) page compares the series.',
          'Weld orbitally where possible and inspect the inside of each weld with a borescope; a burnt or sugared weld bead undoes the bore finish on either side of it.',
          'Keep FSSAI documentation in mind from the start. Licensed food businesses in India work to the hygiene and sanitary requirements attached to their licence, and the material certificates for product-contact pipe belong in that file.'
        ]
      },
      {
        h2: 'What to Send With a Food Processing EP Pipe Enquiry',
        bullets: [
          'The products each line carries, with temperature and whether it is acidic, salty or allergen-bearing, so we can advise grade and finish line by line.',
          'Tube sizes and the dimension series, with the [dairy and sanitary fittings](/dairy-fittings/) they will join to.',
          'The internal finish per line and any Ra limit your customer, auditor or equipment supplier sets.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every length and a measured Ra report for each electropolished lot.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation.'
        ],
        cta: { label: 'Request a food grade EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Which food lines actually need electropolished pipe?', a: 'Hot, acidic, viscous or allergen-bearing product lines: sauces, fruit pulp and concentrate, aseptic and hot-fill lines, liquid egg and soups, brine and vinegar, and the CIP return. Oils, syrups at ambient temperature and utilities usually run on SF1 mechanically polished 304L.' },
      { q: 'Is 304L food grade?', a: 'Yes, 304L is widely used for food contact and is the economical choice for neutral products and utilities. Switch to 316L for acidic products, brine, vinegar, hot CIP and anywhere chlorinated sanitiser stands in the line.' },
      { q: 'Which hygienic design standards apply to food piping?', a: '3-A Sanitary Standards and EHEDG guidelines cover hygienic design of food equipment and installations. In India, licensed food businesses also work to the hygiene requirements attached to their FSSAI licence.' },
      { q: 'What documents come with food grade EP pipe?', a: 'An EN 10204 3.1 certificate traced to heat number with NABL-laboratory chemical analysis, a PMI record for every length and a measured Ra report for each electropolished lot.' }
    ]
  },

  '/industries/beverage-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [
      'https://www.3-a.org/',
      'https://www.ehedg.org/guidelines-working-groups/guidelines',
      'https://en.wikipedia.org/wiki/Clean-in-place'
    ],
    sections: [
      {
        h2: 'Beverage Lines: Juice, Carbonated Drinks, RTD Tea and Coffee, Water',
        paragraphs: [
          'Beverage plants run a mix of lines that look alike but behave very differently. Fruit juice is acidic and carries pulp and sugar; carbonated soft drinks are acidic too, run cold and must hold dissolved carbon dioxide; ready-to-drink tea, coffee and dairy-based drinks carry protein and are processed hot; packaged water is the most sensitive to any taste or microbial pick-up from the line. One specification does not fit all of them, and the table below is where to start.',
          'The product that most often causes trouble is the sugar syrup. Simple syrup at high Brix is viscous, hot when made and prone to crystallising in a rough bore or at a dead leg, and it is the growth medium for the yeasts and moulds that spoil a batch. That is why syrup rooms and dosing lines are high on the list for an electropolished bore.'
        ],
        table: {
          caption: 'Typical specification by beverage line',
          head: ['Line', 'Grade', 'Internal finish'],
          rows: [
            ['Juice extraction, pulp and concentrate', '316L', 'SF4 electropolished'],
            ['Sugar syrup preparation and dosing', '316L', 'SF4 electropolished'],
            ['Blending and finished beverage to filler', '316L', 'SF4 electropolished'],
            ['Carbonated product, deaerated water', '316L', 'SF4 electropolished'],
            ['RTD tea, coffee and dairy-based drinks (hot process)', '316L', 'SF4 electropolished'],
            ['Packaged drinking water to filler', '316L', 'SF4 electropolished'],
            ['Treated process water, RO permeate', '304L or 316L', 'SF1 mechanically polished'],
            ['CIP supply', '316L', 'SF1 mechanically polished'],
            ['CIP return', '316L', 'SF4 electropolished'],
            ['Chilled water, glycol, utilities', '304L', 'SF1 mechanically polished']
          ]
        }
      },
      {
        h2: 'Acid, Sugar and Carbon Dioxide: Choosing the Grade',
        paragraphs: [
          'Juices and soft drinks sit at a low pH, and citric and phosphoric acids at that pH attack 304L slowly but steadily, especially at the welds and wherever the line stands full between runs. 316L is the safe choice for every product line in a beverage plant; the saving from 304L is small against the cost of a pitted syrup line. Keep 304L for RO permeate, chilled water and glycol.',
          'Carbonation adds a second effect. Dissolved carbon dioxide lowers the pH further and the product is handled cold under pressure, so any crevice or rough patch that holds product is a place where flavour-spoiling organisms can establish. An electropolished bore with its chromium-rich passive film and low Ra gives them fewer places to start and lets the CIP remove them when they do.'
        ]
      },
      {
        h2: 'Keeping a Beverage Plant Cleanable',
        bullets: [
          'Design CIP for turbulent flow in every product circuit; the usual rule for pipe circuits is a minimum velocity of about 1.5 m/s, and syrup lines need it most.',
          'Slope lines to drain and keep dead legs short, following 3-A Sanitary Standards or EHEDG guidelines for hygienic design.',
          'Use one tube series throughout, so that filler, blender and syrup-room connections all meet without a step. Our [sanitary electropolished pipe](/sanitary-hygienic-ep-pipes/) page sets out the series side by side.',
          'Weld orbitally and borescope the welds on product lines; hand welds with sugaring on the inside are where syrup residue hides.',
          'Treat the water line to the filler as a product line. Packaged water has nothing to mask an off-taste, so it deserves the same SF4 316L as the juice.'
        ]
      },
      {
        h2: 'What to Send With a Beverage EP Pipe Enquiry',
        bullets: [
          'The drinks each line carries (juice, carbonated, RTD hot-fill, water) and whether the line runs hot, cold or under carbonation pressure.',
          'Tube sizes and the dimension series, with the clamp or SMS fittings and the filler connections they must match.',
          'Internal finish per line and any Ra limit your brand owner or co-packing customer sets.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every length and a measured Ra report for each electropolished lot.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation.'
        ],
        cta: { label: 'Request a beverage EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Should beverage product lines be 304L or 316L?', a: '316L. Juices and soft drinks are acidic, syrup is hot and viscous, and the line often stands full between runs. 304L is kept for RO permeate, chilled water and glycol.' },
      { q: 'Which beverage lines benefit most from electropolishing?', a: 'Sugar syrup preparation and dosing, juice pulp and concentrate, blending and finished product to the filler, hot RTD lines, packaged water to the filler and the CIP return.' },
      { q: 'Does carbonation change the piping specification?', a: 'Carbon dioxide lowers the product pH and the line runs cold under pressure, so crevices and rough bores that hold product become spoilage sites. An electropolished 316L bore is the usual answer.' },
      { q: 'What documents come with beverage EP pipe?', a: 'An EN 10204 3.1 certificate traced to heat number, a PMI record for every length and a measured Ra report for each electropolished lot. Our quality system is certified to ISO 9001:2015.' }
    ]
  },

  '/industries/brewery-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [
      'https://en.wikipedia.org/wiki/Clean-in-place',
      'https://www.ehedg.org/guidelines-working-groups/guidelines'
    ],
    sections: [
      {
        h2: 'Brewhouse to Bright Beer: Where the Finish Pays',
        paragraphs: [
          'A brewery is two plants in one. The hot side, mash, lauter, kettle and whirlpool, runs at or near boiling, carries sugary wort and is cleaned hard with caustic. The cold side, fermentation, maturation, filtration and bright beer, runs cold, carries live yeast and finished beer, and is where a single contaminating organism costs a whole batch. Distilleries add a third: wash and spirit lines that carry ethanol and congeners through stills and receivers.',
          'Electropolished pipe earns its place on the cold side first. Yeast, hop resins and beer stone, the calcium oxalate scale that forms in fermenters and beer lines, all attach more readily to a rough surface, and the beer that follows picks up haze, off-flavours or infection from what was left behind. The hot side is cleaned by heat and chemistry as much as by surface finish, so mechanically polished 304L serves most of it.'
        ],
        table: {
          caption: 'Typical specification by brewery or distillery line',
          head: ['Line', 'Grade', 'Internal finish'],
          rows: [
            ['Mash, lauter and kettle transfer (hot wort)', '304L', 'SF1 mechanically polished'],
            ['Wort cooling outlet to fermenter', '304L or 316L', 'SF4 electropolished'],
            ['Yeast propagation, pitching and cropping', '316L', 'SF4 electropolished'],
            ['Fermenter and maturation tank connections', '304L or 316L', 'SF4 electropolished'],
            ['Filtered and bright beer to packaging', '316L', 'SF4 electropolished'],
            ['Deaerated water, blending water', '316L', 'SF4 electropolished'],
            ['CIP supply (hot caustic, acid)', '316L', 'SF1 mechanically polished'],
            ['CIP return', '316L', 'SF4 electropolished'],
            ['Distillery wash, low wines and spirit', '304L', 'SF1 or SF4, by product'],
            ['Glycol, chilled water, steam condensate', '304L', 'SF1 mechanically polished']
          ]
        }
      },
      {
        h2: '304L or 316L in a Brewery',
        paragraphs: [
          'Wort and beer are mildly acidic and not heavy in chlorides, so 304L has served breweries for decades on the hot side and on much of the cold side. The lines to move to 316L are those that see chlorinated or acid sanitiser standing at temperature, the CIP supply that carries hot caustic and acid, deaerated water, and the bright beer line to packaging, where the beer is finished and any pick-up shows in the glass. In a distillery, 304L is usual on wash and spirit, but choose 316L where cleaning chemistry is aggressive or the water is high in chlorides.',
          'Electropolishing adds the passive surface that both grades need. By removing the cold-worked skin left by tube drawing and leaving a chromium-rich film, it lowers the Ra and makes beer stone and yeast easier to remove, so CIP cycles can be shorter and the line stays passive against the sanitiser.'
        ]
      },
      {
        h2: 'Brewery Line Design for Clean Beer',
        bullets: [
          'Size beer and wort lines for CIP as well as for transfer; the usual rule for pipe circuits is a minimum cleaning velocity of about 1.5 m/s, and a line that is too large to clean is where beer stone builds up.',
          'Slope lines to drain and keep dead legs short, following hygienic-design guidance such as the EHEDG guidelines.',
          'Keep one tube series through the brewhouse, cellar and packaging hall so that every clamp joint meets without a step. Our [sanitary electropolished pipe](/sanitary-hygienic-ep-pipes/) page compares SMS, DIN and ASME BPE sizes.',
          'Weld orbitally on cold-side lines and borescope the welds; a sugared weld bead on a bright beer line is a permanent infection site.',
          'Specify deaerated and blending water lines as product lines, because the water is the beer.'
        ]
      },
      {
        h2: 'What to Send With a Brewery EP Pipe Enquiry',
        bullets: [
          'Which lines the tube is for: hot wort, wort cooling, yeast, fermenter connections, bright beer, deaerated water, CIP, or distillery wash and spirit.',
          'Tube sizes and series, with the clamp fittings, tank nozzles and filler connections they join to.',
          'Internal finish per line and any Ra limit your brewing consultant or packaging-line supplier sets.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every length and a measured Ra report for each electropolished lot.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation.'
        ],
        cta: { label: 'Request a brewery EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Does a brewery need electropolished pipe on the hot side?', a: 'Usually not. Mash, lauter and kettle transfer lines are cleaned by heat and hot caustic and run well on mechanically polished 304L. The cold side, from wort cooling to bright beer, is where an electropolished bore pays.' },
      { q: 'What is beer stone and why does the bore finish matter?', a: 'Beer stone is calcium oxalate scale that forms in fermenters and beer lines and shelters yeast and bacteria. It attaches more readily to a rough bore, so an electropolished line cleans faster and stays cleaner.' },
      { q: 'Which brewery lines should be 316L?', a: 'CIP supply carrying hot caustic and acid, deaerated and blending water, bright beer to packaging, and any line where chlorinated sanitiser stands at temperature. 304L remains common elsewhere.' },
      { q: 'Can the same tube be used in a distillery?', a: 'Yes. 304L is usual on wash and spirit lines, with SF4 electropolished tube where product quality or cleaning demands it and 316L where cleaning chemistry or water chlorides are aggressive.' }
    ]
  },

  '/industries/cosmetics-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [
      'https://www.asme.org/codes-standards/find-codes-standards/bpe-bioprocessing-equipment',
      'https://en.wikipedia.org/wiki/Good_manufacturing_practice'
    ],
    sections: [
      {
        h2: 'Creams, Lotions and Shampoos: Viscous Products That Cling',
        paragraphs: [
          'Personal-care products are hard on piping for a reason that has nothing to do with corrosion. Creams and lotions are emulsions that are thick, often warm when made and quick to set on a cool surface; shampoos and shower gels are viscous surfactant solutions that foam when disturbed and leave a film; toothpaste and hair colour are abrasive or chemically active. All of them cling to a rough bore, and residue left after a changeover is the usual cause of microbial contamination and batch rejection in a cosmetics plant.',
          'ASME BPE, the standard that defines the SF1 and SF4 surface designations, states that its scope covers equipment for the bioprocessing, pharmaceutical and personal-care products industries. Cosmetics plants that follow good manufacturing practice therefore specify the same surface finishes as pharmaceutical plants on their product-contact lines, and the same cleaning and documentation discipline follows.'
        ],
        table: {
          caption: 'Typical specification by cosmetics and personal-care line',
          head: ['Line', 'Grade', 'Internal finish'],
          rows: [
            ['Emulsion (cream, lotion) transfer from mixer to hold tank and filler', '316L', 'SF4 electropolished'],
            ['Shampoo, shower gel and liquid soap transfer', '316L', 'SF4 electropolished'],
            ['Purified water to batching', '316L', 'SF4 electropolished'],
            ['Oil phase and emollient feed', '304L or 316L', 'SF1 mechanically polished'],
            ['Surfactant and glycerine feed', '316L', 'SF1 or SF4'],
            ['Fragrance and active ingredient dosing', '316L', 'SF4 electropolished'],
            ['Toothpaste and abrasive products', '316L', 'SF4 electropolished'],
            ['CIP supply', '316L', 'SF1 mechanically polished'],
            ['CIP return', '316L', 'SF4 electropolished'],
            ['Jacket water, chilled water, utilities', '304L', 'SF1 mechanically polished']
          ]
        }
      },
      {
        h2: 'Why Cosmetics Lines Lean on 316L',
        paragraphs: [
          'Cosmetic formulations carry salt as a thickener, chelating agents, acids used to adjust pH, and preservative systems, and the lines are cleaned with hot caustic, acid and chlorinated sanitiser. 304L copes with the oils and most raw materials, but it pits where chloride-bearing product or sanitiser stands at temperature. 316L on every product-contact and purified water line removes that risk for a modest premium, which is why the table reserves 304L for oil-phase feeds and utilities.',
          'Electropolishing matters here because emulsions and surfactants are so difficult to rinse. The lower Ra and chromium-rich passive surface give the product film less to hold onto, so the rinse water runs clear sooner and the swab after a changeover comes back clean. On hair colour and other reactive products, the passive surface also resists staining and discolouration that would otherwise mark the line.'
        ]
      },
      {
        h2: 'Design Points for a Cleanable Cosmetics Line',
        bullets: [
          'Keep product lines as short and as straight as the layout allows; viscous emulsions do not CIP well through long runs and many bends.',
          'Slope lines to drain and avoid dead legs; a pocket of cream left at a blanked tee grows organisms between batches.',
          'Use purified water that meets the pharmacopoeial grade your GMP system specifies, and pipe it in SF4 316L like a pharmaceutical purified water loop.',
          'Use one tube series and hygienic clamp fittings throughout; see our [sanitary electropolished pipe](/sanitary-hygienic-ep-pipes/) page for the series.',
          'Weld orbitally where possible and borescope the welds; residue caught at a poor weld is what fails the changeover swab.'
        ]
      },
      {
        h2: 'What to Send With a Cosmetics EP Pipe Enquiry',
        bullets: [
          'The products each line carries (emulsion, surfactant, oil phase, purified water, active or fragrance dosing) and the batching temperature.',
          'Tube sizes and series, with the fittings and the mixer, hold-tank and filler connections they join to.',
          'Internal finish per line and any Ra limit your GMP system or brand owner sets.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every length and a measured Ra report for each electropolished lot.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation.'
        ],
        cta: { label: 'Request a cosmetics EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Do cosmetics plants use the same surface finishes as pharma?', a: 'Yes. ASME BPE, which defines SF1 and SF4, covers personal-care products in its scope, and cosmetics plants following GMP specify SF4 electropolished 316L on product-contact and purified water lines.' },
      { q: 'Which cosmetics lines need electropolished pipe?', a: 'Emulsion transfer for creams and lotions, shampoo and shower gel transfer, purified water to batching, fragrance and active dosing, toothpaste and abrasive products, and the CIP return.' },
      { q: 'Why 316L rather than 304L for cosmetics?', a: 'Formulations carry salt, chelating agents, acids and preservatives, and lines are sanitised with chlorinated chemicals. 316L resists the pitting this causes; 304L is kept for oil-phase feeds and utilities.' },
      { q: 'What documents come with cosmetics EP pipe?', a: 'An EN 10204 3.1 certificate traced to heat number with NABL-laboratory chemical analysis, a PMI record for every length and a measured Ra report for each electropolished lot.' }
    ]
  },

  '/industries/medical-devices-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [
      'https://en.wikipedia.org/wiki/ISO_13485',
      'https://en.wikipedia.org/wiki/ISO_14644',
      'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en'
    ],
    sections: [
      {
        h2: 'Medical Device Plants: Utilities Are the Product-Contact Lines',
        paragraphs: [
          'A medical device plant rarely pipes the product itself. What it pipes are the utilities that touch the product during manufacture: purified water for washing and rinsing components, water for injection where devices are filled or coated with a drug, clean compressed air and nitrogen used for blowing off and drying, clean steam for sterilisation, and the chemical lines of a cleaning, passivation or coating process. A particle, an oil droplet or a bacterium carried by one of these utilities ends up on or in the device, so the utility line is treated as a product-contact line.',
          'The quality system that governs this is ISO 13485, published in its current edition on 1 March 2016, which sets out a comprehensive quality management system for the design and manufacture of medical devices and applies equally to suppliers of products and services to device makers. Cleanrooms where devices are assembled are classified under ISO 14644-1 by airborne particle concentration, and the utilities serving them are specified to match.'
        ],
        table: {
          caption: 'Typical specification by medical device plant utility',
          head: ['Line', 'Grade', 'Internal finish'],
          rows: [
            ['Purified water for component washing and final rinse', '316L', 'SF4 electropolished'],
            ['WFI for drug-device combination filling or coating', '316L', 'SF4 electropolished'],
            ['Clean compressed air and nitrogen to cleanroom points of use', '316L', 'SF4 electropolished'],
            ['Clean steam to sterilisers', '316L', 'SF1 or SF4, per design standard'],
            ['Cleaning, passivation and coating chemical lines', '316L or 904L', 'SF4 electropolished'],
            ['Ultrasonic cleaning bath feed and drain', '316L', 'SF1 mechanically polished'],
            ['Moulding machine cooling water', '304L', 'SF1 mechanically polished'],
            ['Plant air, chilled water, HVAC condensate', '304L', 'SF1 mechanically polished']
          ]
        }
      },
      {
        h2: 'Particles, Bioburden and the Case for an Electropolished Bore',
        paragraphs: [
          'Device manufacturers are inspected on particulate and bioburden limits, and the inside of a utility line is a source of both. A mechanically polished bore sheds abrasive and metal fines for a long time after installation and has a torn, cold-worked surface that holds biofilm. Electropolishing removes that layer, lowers the Ra and leaves a smooth, chromium-rich passive film, so the line sheds fewer particles into the rinse water or clean gas and the biofilm has fewer places to establish. On a final-rinse water line this is the difference between a device that passes its cleanliness test and one that does not.',
          'Grade follows the chemistry of the line. 316L handles purified water, WFI, clean gas and most cleaning solutions. Passivation and etching lines using nitric or citric acid at strength, or chloride-bearing cleaning chemistry at temperature, are the lines to review for 904L, which we supply electropolished.'
        ]
      },
      {
        h2: 'Design and Documentation for a Device Plant',
        bullets: [
          'Specify sterile device manufacturing and aseptic filling areas to the current EU GMP Annex 1 on sterile medicinal products where a drug-device combination is involved, and to ISO 14644-1 classes for the cleanrooms.',
          'Slope water and clean-steam lines to drain and keep dead legs within the design standard; a dead leg on a final-rinse line is a bioburden source.',
          'Pipe clean gas lines in electropolished tube with capped ends kept on until installation, so that the particle count at the point of use is set by the filter, not by the tube.',
          'Use one tube series and hygienic fittings; see our [ASME BPE electropolished tubes](/asme-bpe-electropolished-tubes/) page for the inch series most device plants use.',
          'File the tube certificates in the ISO 13485 supplier records: the 3.1 certificate, the PMI record and the Ra report are the evidence that the utility line meets its specification.'
        ]
      },
      {
        h2: 'What to Send With a Medical Device Utility Tube Enquiry',
        bullets: [
          'Which utilities the tube is for: purified water, WFI, clean air or nitrogen, clean steam, cleaning or passivation chemistry.',
          'Tube OD, wall and series, with the point-of-use fittings and the cleanroom penetrations they must suit.',
          'Internal finish per line and any Ra or particle requirement from your validation master plan.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every length and a measured Ra report for each electropolished lot, plus any supplier-qualification form your ISO 13485 system requires.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation.'
        ],
        cta: { label: 'Request a medical device EP tube quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'What does a medical device plant use electropolished tube for?', a: 'The utilities that touch the device during manufacture: purified water for washing and final rinse, WFI for drug-device filling or coating, clean compressed air and nitrogen, clean steam, and cleaning or passivation chemical lines.' },
      { q: 'Why does the bore finish affect particle counts?', a: 'A mechanically polished bore sheds abrasive and metal fines and holds biofilm in its torn surface layer. Electropolishing removes that layer and leaves a smooth passive film, so the line sheds fewer particles into rinse water or clean gas.' },
      { q: 'Which standards apply to medical device utilities?', a: 'ISO 13485 for the quality management system, ISO 14644-1 for cleanroom classification, and EU GMP Annex 1 where sterile drug-device combinations are made. The tube itself is specified to ASME BPE SF4 and ASTM A270 or A269.' },
      { q: 'Can your documents go into an ISO 13485 supplier file?', a: 'Yes. Each heat has an EN 10204 3.1 certificate traced to heat number, every length is PMI tested and each electropolished lot has a measured Ra report. Our quality system is certified to ISO 9001:2015.' }
    ]
  },

  '/industries/specialty-chemicals-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [],
    sections: [
      {
        h2: 'Where Electropolished Pipe Fits in a Specialty Chemical Plant',
        paragraphs: [
          'Specialty and fine chemical plants are not hygienic plants, and most of their piping is specified for pressure, temperature and corrosion rather than cleanability. Electropolished stainless has three specific jobs in them. The first is high-purity product: electronic-grade solvents, pharmaceutical intermediates, catalysts, flavour and fragrance ingredients and other products sold against a trace-impurity specification, where metal pick-up or residue from the previous campaign is a quality failure. The second is multi-product campaign plants, where a reactor train is cleaned and switched between products and the cleaning has to be verified. The third is the small-bore instrument and sampling tube on which the plant\'s measurements depend.',
          'On those three, the electropolished bore does what it does in a pharmaceutical plant: it lowers the Ra, removes the cold-worked surface layer left by drawing, and leaves a chromium-rich passive film that sheds less iron into the product, holds less residue and resists pitting better than a mill-finish or mechanically polished tube.'
        ],
        table: {
          caption: 'Typical specification by specialty chemical service',
          head: ['Service', 'Grade', 'Internal finish'],
          rows: [
            ['High-purity solvent and electronic-chemical product lines', '316L', 'SF4 electropolished'],
            ['Pharmaceutical intermediate and API-adjacent product transfer', '316L', 'SF4 electropolished'],
            ['Multi-product campaign reactor outlet and filtration', '316L', 'SF4 electropolished'],
            ['Flavour, fragrance and aroma chemical transfer', '316L', 'SF4 electropolished'],
            ['Acid, chloride-bearing or hot halogenated service', '904L', 'Electropolished'],
            ['Analyser sample lines, impulse lines, dosing', '316L or 904L', 'Electropolished instrument tube (ASTM A269)'],
            ['Catalyst slurry and solids-bearing lines', '316L', 'SF1 mechanically polished'],
            ['Bulk solvent storage and recovery headers', '304L or 316L', 'SF1 or mill finish (ASTM A312 pipe)'],
            ['Cooling water, steam, nitrogen utilities', '304L', 'Mill finish']
          ]
        }
      },
      {
        h2: '316L, 904L and When Stainless Is the Wrong Answer',
        paragraphs: [
          '316L covers the majority of specialty chemical services where electropolished tube is used: organic solvents, neutral and mildly acidic aqueous streams, and products where iron pick-up is the concern. 904L, with its higher nickel, chromium and molybdenum and added copper, extends the range to sulphuric and phosphoric acid at moderate concentrations, chloride-bearing streams at temperature and many halogenated organics. We supply 904L electropolished, and our page on [electropolished pipes for aggressive chemical service](/blog/electropolished-pipes-aggressive-chemical-service/) sets out where it is used.',
          'Be honest about the limits. Hot concentrated hydrochloric acid, wet chlorine, hot caustic at high concentration and strongly reducing acids are not stainless services at any finish, and no amount of electropolishing changes that. If your process chemist is unsure, send the stream composition, temperature and concentration with the enquiry and we will say whether 316L or 904L is suitable or whether another alloy is needed.'
        ]
      },
      {
        h2: 'Instrument and Sampling Tube: The Hidden Electropolished Service',
        paragraphs: [
          'The largest quantity of electropolished tube in many chemical plants is not on the product lines at all but in the analyser houses and on the transmitter impulse lines. A rough or contaminated sample line adsorbs trace components and releases them later, so the analyser reads the tube rather than the stream and its response lags. Seamless ASTM A269 instrument tube in 316L, electropolished, keeps the sample representative; 904L does the same on acid and chloride-bearing streams. Our [electropolished instrument tubing](/blog/electropolished-instrument-tubing-aerospace/) article covers sizing and handling of this tube.'
        ]
      },
      {
        h2: 'What to Send With a Specialty Chemical EP Pipe Enquiry',
        bullets: [
          'The service each line carries, with composition, concentration and temperature, so we can confirm 316L, 904L or neither.',
          'Pipe or tube sizes and standard: ASTM A312 pipe for headers, ASTM A270 or A269 tube for product and instrument lines, and the fittings they connect to.',
          'Internal finish per line and any Ra, iron-leach or cleanliness requirement from the product specification.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every length and a measured Ra report for each electropolished lot.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation.'
        ],
        cta: { label: 'Request a specialty chemical EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Why would a chemical plant use electropolished pipe?', a: 'For high-purity products sold against a trace-impurity specification, for multi-product campaign plants where cleaning must be verified, and for analyser sample and impulse lines where a contaminated bore distorts the measurement.' },
      { q: 'When is 904L specified instead of 316L?', a: 'For sulphuric and phosphoric acid at moderate concentrations, chloride-bearing streams at temperature and many halogenated organics. We supply 904L electropolished.' },
      { q: 'Are there chemical services where electropolished stainless is unsuitable?', a: 'Yes. Hot concentrated hydrochloric acid, wet chlorine, hot concentrated caustic and strongly reducing acids are not stainless services at any finish. Send the stream data with your enquiry and we will say whether 316L or 904L is suitable.' },
      { q: 'Which standard applies to electropolished instrument tube?', a: 'ASTM A269 seamless tube in 316L or 904L, electropolished, is the usual specification for sample and impulse lines. Product lines use ASTM A270 tube and headers use ASTM A312 pipe.' }
    ]
  },

  '/industries/mango-pulp-electropolished-pipes/': {
    updated: '2026-11-11',
    sources: [
      'https://apeda.gov.in/node/31'
    ],
    sections: [
      {
        h2: 'How Mango Pulp Is Made, and Where the Pipe Takes the Punishment',
        paragraphs: [
          'APEDA, India\'s agricultural export authority, describes the process: ripened mangoes are washed, blanched, pulped, deseeded, centrifuged and homogenised, concentrated when required, then thermally processed and aseptically filled, or packed in cans and retorted, or pasteurised and deep-frozen. India exports mango pulp to the USA, UK, Saudi Arabia, the Netherlands and Germany among others, and APEDA records two main processing clusters with around 65 units, Chittoor in Andhra Pradesh and Krishnagiri in Tamil Nadu, built on Totapuri and Alphonso fruit, with further units in Maharashtra and Gujarat.',
          'Every stage after pulping is hard on stainless pipe. Mango pulp is acidic, carries fibre and sugar, is heated to sterilising temperature and then cooled, and in an aseptic line it must reach the filler without a single surviving spore. The pulp also burns onto hot surfaces and dries to a varnish in any line left standing. Those are the conditions that make an electropolished 316L bore the right specification from the pulper outlet to the aseptic filler.'
        ],
        table: {
          caption: 'Typical specification by mango pulp and fruit processing line',
          head: ['Line', 'Grade', 'Internal finish'],
          rows: [
            ['Pulper and finisher outlet (fibrous pulp)', '316L', 'SF4 electropolished'],
            ['Deseeding, centrifuge and homogeniser transfer', '316L', 'SF4 electropolished'],
            ['Evaporator feed and concentrate', '316L', 'SF4 electropolished'],
            ['Steriliser (heat, hold, cool) product tube', '316L', 'SF4 electropolished'],
            ['Aseptic surge tank to aseptic filler', '316L', 'SF4 electropolished'],
            ['Hot-fill to cans and retort feed', '316L', 'SF4 electropolished'],
            ['Pasteurised pulp to freezer', '316L', 'SF4 electropolished'],
            ['CIP supply', '316L', 'SF1 mechanically polished'],
            ['CIP return', '316L', 'SF4 electropolished'],
            ['Washing water, cooling water, condensate', '304L', 'SF1 mechanically polished']
          ]
        }
      },
      {
        h2: 'Acid, Heat and Fibre: Why 316L Electropolished',
        paragraphs: [
          'Mango pulp sits at a low pH, and fruit acids at that pH attack 304L steadily, fastest at the welds and wherever pulp stands in a line between campaigns. The season is short and the plant runs hard for a few months, so a line that pits in one season is replaced in the next, which is why 316L is specified on every product line. Keep 304L for washing water and utilities.',
          'The electropolished finish does two jobs. In the steriliser and on the hot side it reduces burn-on, because the lower Ra and passive chromium-rich surface give caramelising sugar less to grip, so heat transfer holds up longer between cleans. On the aseptic side it makes the line sterilisable and keeps it that way: spores and dried pulp hide in surface defects and at poor welds, and a bore with fewer of them steams and rinses clean. Fibre is the third factor; a smooth bore lets fibrous pulp move without matting at bends and reducers.'
        ]
      },
      {
        h2: 'Designing a Pulp Line That Sterilises and Cleans',
        bullets: [
          'Keep the product path from the steriliser outlet to the aseptic filler as short and as straight as possible, with no dead legs; a dead leg here is the usual reason an aseptic line loses sterility.',
          'Slope every horizontal run to drain so that burnt-on pulp and CIP solution do not pool.',
          'Size lines so that CIP reaches turbulent flow after a run of viscous pulp; a line sized only for product may be too large to clean.',
          'Use one tube series and hygienic clamp fittings from pulper to filler; see our [sanitary electropolished pipe](/sanitary-hygienic-ep-pipes/) page for the series.',
          'Weld orbitally and borescope the welds on the aseptic side; a weld that holds pulp is a weld that holds spores.',
          'Plan the off-season. Drain, clean and passivate the lines at season end, and inspect the welds before the next season rather than during it.'
        ]
      },
      {
        h2: 'What to Send With a Mango Pulp Plant Enquiry',
        bullets: [
          'The stages the tube is for: pulper and finisher, evaporator, steriliser, aseptic surge and filler, hot-fill, freezing or CIP.',
          'Tube sizes and series, with the fittings and the pulper, steriliser and aseptic filler connections they must match.',
          'Internal finish per line and any Ra limit your aseptic filler or steriliser supplier specifies.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every length and a measured Ra report for each electropolished lot.',
          'We quote within 24 hours; dispatch and transit are confirmed in writing with each quotation. Our city pages for [Chittoor](/market-area/chittoor/) and [Hosur](/market-area/hosur/) in Krishnagiri district cover delivery to the two main pulp clusters.'
        ],
        cta: { label: 'Request a mango pulp EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Why is mango pulp piping 316L rather than 304L?', a: 'Mango pulp is acidic and fruit acids attack 304L, fastest at welds and where pulp stands between campaigns. 316L is specified on every product line; 304L is kept for washing water and utilities.' },
      { q: 'Which stages of a pulp line need electropolished pipe?', a: 'From the pulper outlet through the evaporator, steriliser and aseptic surge tank to the aseptic filler, plus hot-fill, freezer feed and the CIP return. CIP supply and utilities can use mechanically polished tube.' },
      { q: 'How does the bore finish affect an aseptic pulp line?', a: 'Spores and dried pulp hide in surface defects and at poor welds. An electropolished bore has fewer of them, so the line steams sterile, rinses clean and holds sterility to the filler.' },
      { q: 'Where are India\'s mango pulp plants?', a: 'APEDA records two main clusters with around 65 processing units, Chittoor in Andhra Pradesh and Krishnagiri in Tamil Nadu, built on Totapuri and Alphonso fruit, with further units in Maharashtra and Gujarat.' }
    ]
  }
};
