// Page-specific guides for the phosphor bronze bar pages, merged into FITTING_GUIDES and rendered by ProductPage.
// Each page's FAQs live in its FAQs field in products.json so the FAQPage schema matches the page.
// Alloy data opened 2026-11-28 on the Copper Development Association pages (alloys.copper.org/alloy/<UNS>):
// composition, rod tempers and typical properties, physical and fabrication data, typical uses, specifications.
// MPa and °C values are conversions of the CDA ksi and °F figures (1 ksi = 6.895 MPa), rounded.
// PB1/PB2: BS 1400:1985 status from the BSI Knowledge page; EN 1982 designations and ordering format from the
// public preview of EN 1982:2008 (iTeh); grade limits from two distributor datasheets, quoted as such.

const U = '2026-11-28';
const CTA = { label: 'Request a bronze bar quotation', href: '/contact-us/' };
const CDA = (uns) => `https://alloys.copper.org/alloy/${uns}`;
const B139 = 'https://store.astm.org/b0139_b0139m-12r24.html';
const BS1400 = 'https://knowledge.bsigroup.com/products/specification-for-copper-alloy-ingots-and-copper-alloy-and-high-conductivity-copper-castings';
const EN1982 = 'https://knowledge.bsigroup.com/products/copper-and-copper-alloys-ingots-and-castings-3';
const EN1982_PREVIEW = 'https://cdn.standards.iteh.ai/samples/28874/fe79ece3e6d34bb493d9f1bfbcc16ff2/SIST-EN-1982-2008.pdf';
const SMITHS_PB1 = 'https://www.smithmetal.com/pdf/bronze/pb1.pdf';
const SMITHS_PB2 = 'https://www.smithmetal.com/pdf/bronze/pb2.pdf';
const VULCAN = 'https://vulcan.co/wp-content/uploads/VUL_Engineering_Bronze.pdf';

export const BRONZE_GUIDES = {
  'c51000-bronze-round-bar': {
    updated: U,
    sources: [CDA('C51000'), B139],
    sections: [
      {
        h2: 'C51000: The 5% Tin Phosphor Bronze',
        paragraphs: [
          'C51000 is a wrought copper-tin alloy, often called grade A phosphor bronze, with tin held between 4.2 and 5.8%. The phosphorus left in it, 0.03 to 0.35%, is what remains after the melt is deoxidised, and it gives the alloy its name. Lead, zinc and iron are kept to traces.',
          'Because the alloy is almost pure copper and tin, it takes heavy cold work without cracking. That is why it is drawn to hard and spring tempers for parts that flex millions of times, and why it is the usual first choice when a drawing simply says "phosphor bronze rod".',
        ],
        table: {
          caption: 'C51000 composition limits, % (Copper Development Association)',
          head: ['Element', 'Limit'],
          rows: [
            ['Tin (Sn)', '4.2 – 5.8'],
            ['Phosphorus (P)', '0.03 – 0.35'],
            ['Lead (Pb)', '0.05 max'],
            ['Zinc (Zn)', '0.30 max'],
            ['Iron (Fe)', '0.10 max'],
            ['Copper (Cu)', 'Remainder; Cu plus named elements 99.5 min'],
          ],
        },
      },
      {
        h2: 'Rod Properties: Why Springs and Contacts Use It',
        paragraphs: [
          'The figures below are typical values the CDA publishes for drawn rod, not guaranteed minimums. Strength comes from cold drawing: the same alloy in the annealed condition is far softer, so the temper you name on the order decides what you receive.',
          'Its electrical conductivity is low for a copper alloy, about 15% IACS, but the combination of spring strength, fatigue life and solderability is what makes C51000 the standard metal for fuse clips, switch blades and connector springs.',
        ],
        table: {
          caption: 'C51000 rod, typical values (CDA)',
          head: ['Property', 'Value'],
          rows: [
            ['Half hard (H02), 1 in rod, 20% cold work', 'Tensile 70 ksi (≈ 483 MPa); elongation 25%'],
            ['Half hard (H02), 0.5 in rod', 'Tensile 75 ksi (≈ 517 MPa); yield 65 ksi (≈ 448 MPa); elongation 25%'],
            ['Electrical conductivity', '15% IACS'],
            ['Specific gravity', '8.86'],
            ['Modulus of elasticity', '16,000 ksi'],
            ['Melting range', '1750 – 1920 °F (≈ 954 – 1049 °C)'],
            ['Annealing', '900 – 1250 °F (≈ 482 – 677 °C)'],
            ['Machinability rating', '20'],
          ],
        },
        bullets: [
          'Cold working is rated excellent, so the alloy draws well to small diameters and high tempers.',
          'Hot forming is rated poor: blanks are machined or cold formed rather than hot forged.',
          'A machinability rating of 20 means slow cutting and long chips. For screw-machined parts look at [C54400](/c54400-bronze-round-bar/), which is rated 80.',
        ],
      },
      {
        h2: 'Where C51000 Is Used',
        paragraphs: ['The CDA lists these typical uses for the alloy. They follow from its spring properties and its corrosion resistance, not from bearing performance at high load, where the higher-tin [C52100](/c52100-bronze-round-bar/) is usually preferred.'],
        bullets: [
          'Springs, spring components and flexing contact blades',
          'Electrical connectors, fuse clips and switch parts',
          'Bellows, Bourdon tubes and diaphragms',
          'Cotter pins and lock washers',
          'Sleeve bushings, bridge bearing plates and textile machinery parts',
          'Welding rods',
        ],
      },
      {
        h2: 'Writing a C51000 Rod Enquiry',
        paragraphs: ['For rod and bar the CDA lists ASTM B139/B139M, the specification for phosphor bronze rod, bar and shapes. Quote the alloy and specification together, then add what the specification leaves open.'],
        bullets: [
          'Alloy and specification: UNS C51000 to ASTM B139/B139M',
          'Temper, by its code (for example H02 half hard), or the tensile range the drawing requires',
          'Diameter, tolerance and length, or a cut-length list',
          'Quantity in pieces or kilograms',
          'Which test document you need with the delivery',
          'The finished part, so the temper and machining allowance can be checked against it',
        ],
        cta: CTA,
      },
    ],
  },

  'c52100-bronze-round-bar': {
    updated: U,
    sources: [CDA('C52100'), CDA('C51000'), B139],
    sections: [
      {
        h2: 'C52100: Eight Percent Tin for Load and Wear',
        paragraphs: [
          'C52100, sometimes called grade C phosphor bronze, carries 7.0 to 9.0% tin, roughly half as much again as C51000. More tin raises strength and resistance to wear and fatigue, which is why it appears in thrust bearings, gears and heavy-duty springs rather than in light contact springs.',
          'The extra tin has a price in working: the alloy hardens faster as it is drawn, and its cold working is rated good rather than excellent. Hot forming is rated poor, as it is for C51000.',
        ],
        table: {
          caption: 'C52100 composition limits, % (Copper Development Association)',
          head: ['Element', 'Limit'],
          rows: [
            ['Tin (Sn)', '7.0 – 9.0'],
            ['Phosphorus (P)', '0.03 – 0.35'],
            ['Lead (Pb)', '0.05 max'],
            ['Zinc (Zn)', '0.20 max'],
            ['Iron (Fe)', '0.10 max'],
            ['Copper (Cu)', 'Remainder; Cu plus named elements 99.5 min'],
          ],
        },
      },
      {
        h2: 'C52100 Against C51000, Figure by Figure',
        paragraphs: ['Both alloys are bought to the same rod specification, so the decision is about the part. The CDA figures below show where the higher tin changes things.'],
        table: {
          caption: 'Typical values from the CDA alloy pages',
          head: ['Property', 'C52100', 'C51000'],
          rows: [
            ['Tin, %', '7.0 – 9.0', '4.2 – 5.8'],
            ['Half hard (H02) rod tensile, 0.5 in', '80 ksi (≈ 552 MPa)', '75 ksi (≈ 517 MPa)'],
            ['Half hard (H02) rod elongation', '33%', '25%'],
            ['Electrical conductivity', '13% IACS', '15% IACS'],
            ['Melting range', '1620 – 1880 °F (≈ 882 – 1027 °C)', '1750 – 1920 °F (≈ 954 – 1049 °C)'],
            ['Specific gravity', '8.8', '8.86'],
            ['Cold working', 'Good', 'Excellent'],
          ],
        },
        bullets: [
          'The wider melting range of C52100 matters when parts are brazed or soldered: keep joint temperatures well below 1620 °F.',
          'Where the part is a spring that must also carry current, the slightly higher conductivity of [C51000](/c51000-bronze-round-bar/) can decide it.',
          'Neither alloy machines freely; both carry a machinability rating of 20.',
        ],
      },
      {
        h2: 'Typical Uses the CDA Lists for C52100',
        bullets: [
          'Thrust bearings, sleeve bushings and bridge bearing plates',
          'Gears and pinions',
          'Heavy-duty springs and fasteners, and cold-headed parts',
          'Doctor blades for paper machines',
          'Thermostat bellows',
          'Pneumatic hammers, well drill equipment and marine parts',
          'Welding wire',
        ],
      },
      {
        h2: 'What a C52100 Enquiry Should State',
        paragraphs: ['Rod and bar in this alloy are covered by ASTM B139/B139M, the same specification as C51000, so the alloy number on the order is what separates them.'],
        bullets: [
          'UNS C52100 and ASTM B139/B139M, written together',
          'The temper code, or the strength the drawing calls for',
          'Diameter with tolerance, and length or cut pieces',
          'Number of pieces or total weight',
          'The test document expected with the material',
          'Whether the part will be brazed, soldered or heavily cold formed after purchase',
        ],
        cta: CTA,
      },
    ],
  },

  'c54400-bronze-round-bar': {
    updated: U,
    sources: [CDA('C54400'), CDA('C51000'), B139],
    sections: [
      {
        h2: 'C54400: Phosphor Bronze Made to Machine',
        paragraphs: [
          'C54400 is a phosphor bronze with lead and zinc added on purpose. The 3.0 to 4.0% lead forms tiny separate particles that break the chip as the tool cuts, which lifts its machinability rating to 80, four times that of C51000. The zinc, 1.5 to 4.5%, adds strength and helps keep cost down.',
          'Tin, at 3.5 to 4.5%, is a little lower than in C51000. The result is a bar meant for turned bushings, screw machine parts and valve components, where the cutting time costs more than the metal.',
        ],
        table: {
          caption: 'C54400 composition limits, % (Copper Development Association)',
          head: ['Element', 'Limit'],
          rows: [
            ['Tin (Sn)', '3.5 – 4.5'],
            ['Lead (Pb)', '3.0 – 4.0'],
            ['Zinc (Zn)', '1.5 – 4.5'],
            ['Phosphorus (P)', '0.01 – 0.50'],
            ['Iron (Fe)', '0.10 max'],
            ['Copper (Cu)', 'Remainder; Cu plus named elements 99.5 min'],
          ],
        },
      },
      {
        h2: 'What the Lead Gives, and What It Takes Away',
        paragraphs: ['The lead that makes C54400 easy to cut also limits how the finished part can be joined. The CDA rates the alloy as follows.'],
        table: {
          caption: 'C54400 fabrication and rod data (CDA)',
          head: ['Property', 'Value'],
          rows: [
            ['Machinability rating', '80'],
            ['Hard (H04) rod, 1 in, 25% cold work', 'Tensile 68 ksi (≈ 469 MPa); yield 57 ksi (≈ 393 MPa); elongation 20%'],
            ['Hard (H04) rod, 0.5 in, 35% cold work', 'Tensile 75 ksi (≈ 517 MPa); yield 63 ksi (≈ 434 MPa); elongation 15%'],
            ['Soldering', 'Excellent'],
            ['Arc welding', 'Not recommended'],
            ['Cold working', 'Good'],
            ['Electrical conductivity', '19% IACS'],
            ['Melting range', '1700 – 1830 °F (≈ 927 – 999 °C)'],
          ],
        },
        bullets: [
          'If the part has to be welded into an assembly, choose a lead-free grade such as [C51000](/c51000-bronze-round-bar/) instead.',
          'Lead-bearing alloys can be restricted in parts that touch drinking water or food. Check the rules that apply to the end product before choosing C54400 for them.',
        ],
      },
      {
        h2: 'Parts the CDA Lists for C54400',
        bullets: [
          'Bearings, sleeve bearings and thrust bearings',
          'Bushings and thrust washers',
          'Gears, pinions and shafts',
          'Screw machine products',
          'Valve parts',
          'Electrical connectors',
        ],
      },
      {
        h2: 'Ordering C54400 Rod',
        paragraphs: ['C54400 is one of the alloys bought as rod to ASTM B139/B139M. Because it is chosen for machining, tell us about the machining as well as the metal.'],
        bullets: [
          'UNS C54400 to ASTM B139/B139M',
          'Temper code, for example H04 hard, if the drawing sets one',
          'Bar diameter and tolerance, chosen from the finished part size plus machining allowance',
          'Bar lengths that suit your lathe or bar feeder',
          'Quantity, and the test document you need',
          'Whether any part will be soldered, welded, or used in contact with drinking water or food',
        ],
        cta: CTA,
      },
    ],
  },

  'phosphor-bronze-round-bar': {
    updated: U,
    sources: [CDA('C51000'), CDA('C52100'), CDA('C54400'), B139, BS1400],
    sections: [
      {
        h2: 'Three Wrought Phosphor Bronzes, Side by Side',
        paragraphs: [
          'Phosphor bronze is copper alloyed with tin and deoxidised with phosphorus. For drawn rod and bar, three UNS alloys cover most drawings: C51000 with about 5% tin, C52100 with about 8%, and C54400, which adds lead and zinc so it machines freely. All three are bought as rod to ASTM B139/B139M.',
          'The table puts the CDA figures for the three together. The first row links to each alloy\u2019s own page, with its full composition, properties and enquiry checklist.',
        ],
        table: {
          caption: 'Wrought phosphor bronze rod alloys compared (Copper Development Association data)',
          head: ['Property', 'C51000', 'C52100', 'C54400'],
          rows: [
            ['Page', '[C51000 bar](/c51000-bronze-round-bar/)', '[C52100 bar](/c52100-bronze-round-bar/)', '[C54400 bar](/c54400-bronze-round-bar/)'],
            ['Tin, %', '4.2 – 5.8', '7.0 – 9.0', '3.5 – 4.5'],
            ['Lead, %', '0.05 max', '0.05 max', '3.0 – 4.0'],
            ['Zinc, %', '0.30 max', '0.20 max', '1.5 – 4.5'],
            ['Phosphorus, %', '0.03 – 0.35', '0.03 – 0.35', '0.01 – 0.50'],
            ['Typical rod tensile, 0.5 in', '75 ksi, half hard', '80 ksi, half hard', '75 ksi, hard'],
            ['Conductivity, % IACS', '15', '13', '19'],
            ['Machinability rating', '20', '20', '80'],
            ['Typical job', 'Springs and contacts', 'Bearings, gears, heavy springs', 'Turned and screw machine parts'],
          ],
        },
      },
      {
        h2: 'Choosing Between Them',
        bullets: [
          'The part flexes or carries current through a spring: C51000.',
          'The part carries load or slides under wear, as a thrust bearing, gear or heavy spring does: C52100.',
          'The part is mostly machining time, with no welding afterwards: C54400.',
          'The drawing names a British cast grade such as PB1 or PB2: that is a cast bronze with far more tin, covered below, not one of these three.',
        ],
      },
      {
        h2: 'Wrought Rod or Cast Bar?',
        paragraphs: [
          'The alloys above are wrought: cast, then drawn to size, which work hardens them. Many bronze bars on the market are instead continuously cast and only machined, and their tin content can be much higher than any wrought phosphor bronze reaches.',
          'Old British drawings name such bars PB1 or PB2. These are grades of BS 1400, the British standard for copper alloy castings, which BSI lists as withdrawn since 15 March 1999. Distributor datasheets put their tin at roughly 10 to 13%, two to three times that of C51000. See [PB1](/pb1-bronze-round-bar/) and [PB2](/pb2-bronze-round-bar/) for what that means for an order.',
        ],
        cta: CTA,
      },
    ],
  },

  'pb1-bronze-round-bar': {
    updated: U,
    sources: [BS1400, EN1982, EN1982_PREVIEW, SMITHS_PB1, VULCAN, CDA('C90700')],
    sections: [
      {
        h2: 'PB1 Is a Cast Phosphor Bronze',
        paragraphs: [
          'PB1 is a grade name from BS 1400, the British standard for copper alloy ingots and castings. It is a cast bronze with a high tin content, sold as continuously cast solid and hollow bar for bushes, bearings and gears. It is not the same as the wrought alloy C51000, which has about half the tin.',
          'BS 1400:1985 is listed by BSI as withdrawn on 15 March 1999. Its place is taken by BS EN 1982, Copper and copper alloys: Ingots and castings, now current as BS EN 1982:2024. The PB1 name is still in daily use, so drawings that call for it are common, but there is no live British standard behind it.',
        ],
      },
      {
        h2: 'What Two Distributor Datasheets Say',
        paragraphs: [
          'With the standard withdrawn, the limits buyers see come from suppliers. Two published datasheets give slightly different figures, which is the reason to write the agreed limits on the order rather than rely on the grade name.',
        ],
        table: {
          caption: 'PB1 as quoted in two distributor datasheets (sources below); not standard limits',
          head: ['Item', 'Smiths Metal Centres', 'Vulcan Engineering Bronze'],
          rows: [
            ['Tin, %', '10.00 – 12.00', '10.0 – 11.0'],
            ['Phosphorus, %', '0.50 – 1.20', '0.50 – 1.0'],
            ['Lead, %', '0.25 max', '0.25 max'],
            ['Related designation named', 'CC481K (EN 1982)', 'UNS C90700/C90710'],
            ['Tensile, continuous cast', '360 MPa min', '340 – 360 MPa, for guidance only'],
          ],
        },
      },
      {
        h2: 'PB1 and the ASTM Alloy C90700',
        paragraphs: [
          'One datasheet names UNS C90700 as related. The CDA lists C90700 with 10.0 to 12.0% tin and 88.0 to 90.0% copper, and names ASTM B505/B505M for continuous castings. For continuous castings its phosphorus limit is 1.5% maximum, but it sets no phosphorus minimum.',
          'So a bar ordered as C90700 may meet the tin of PB1 without the 0.50% minimum phosphorus both datasheets give. If the higher phosphorus matters to your bearing or gear, state the minimum on the order.',
        ],
      },
      {
        h2: 'Ordering a PB1 Bar Today',
        paragraphs: ['EN 1982 names each casting by material, casting process and drawing. Continuous casting is coded GC; sand, permanent mould, centrifugal and pressure die casting are GS, GM, GZ and GP. Its own example of a product designation reads "Casting EN 1982 – CuAl10Fe5Ni5-C – GS – XXXX", where XXXX is the pattern or drawing number.'],
        bullets: [
          'The standard and grade your drawing uses: PB1 to BS 1400, an EN 1982 material, or a UNS alloy to ASTM B505/B505M',
          'The tin and phosphorus limits you accept, written out, so the grade name cannot be read two ways',
          'Casting process, normally continuous cast for bar',
          'Solid or hollow; outside diameter, bore and length',
          'Quantity, and which test document you need',
        ],
        cta: CTA,
      },
    ],
  },

  'pb2-bronze-round-bar': {
    updated: U,
    sources: [BS1400, EN1982, EN1982_PREVIEW, SMITHS_PB2, SMITHS_PB1],
    sections: [
      {
        h2: 'PB2: The Higher-Tin Gear Bronze',
        paragraphs: [
          'PB2 is the second phosphor bronze grade of the withdrawn British casting standard BS 1400. It carries more tin than PB1, and one distributor calls it a gear bronze: the extra tin raises wear resistance for gears, thrust washers and bearings under medium to high loads.',
          'Like PB1 it is a cast alloy, bought as continuously cast bar and machined. It has nothing in common with the wrought rod alloys of ASTM B139 except copper, tin and phosphorus; its tin is about one and a half times that of the 8% tin wrought alloy [C52100](/c52100-bronze-round-bar/).',
        ],
        table: {
          caption: 'PB2 next to PB1, as given in the Smiths Metal Centres datasheets',
          head: ['Item', 'PB2', 'PB1'],
          rows: [
            ['Tin, %', '11.0 – 13.0', '10.00 – 12.00'],
            ['Phosphorus, %', '0.15 max', '0.50 – 1.20'],
            ['Nickel, %', '0.5 max', '0.10 max'],
            ['Zinc, %', '0.3 max', '0.05 max'],
            ['Typical tensile', '220 – 230 N/mm² (typical)', '360 MPa min, continuous cast'],
            ['Uses named', 'Gears, bearings, thrust washers, pump and valve parts', 'Bushes, bearings, worms and gears, pump and valve parts'],
          ],
        },
      },
      {
        h2: 'Why the Datasheet Is Not Enough',
        paragraphs: [
          'BSI lists BS 1400:1985 as withdrawn on 15 March 1999, so no current standard fixes what "PB2" means. Datasheets from different suppliers can and do differ: the PB2 sheet above caps phosphorus at 0.15%, while its own PB1 sheet asks for at least 0.50%. Before any bar is cut, both sides should agree the limits in writing.',
        ],
      },
      {
        h2: 'Copper-Tin Casting Materials in EN 1982',
        paragraphs: ['The current European standard, BS EN 1982:2024 in the UK, names cast materials by symbol and number. Its table of contents lists these copper-tin alloys. Which one, if any, matches a given PB2 drawing is a decision for the buyer, not something a grade name settles.'],
        table: {
          caption: 'Copper-tin casting materials listed in EN 1982 (symbol and number)',
          head: ['Symbol', 'Number'],
          rows: [
            ['CuSn10-C', 'CC480K'],
            ['CuSn11P-C', 'CC481K'],
            ['CuSn11Pb2-C', 'CC482K'],
            ['CuSn12-C', 'CC483K'],
            ['CuSn12Ni2-C', 'CC484K'],
          ],
        },
        bullets: [
          'The -C suffix marks a casting; ingots use -B.',
          'EN 1982 asks the order to state quantity, the standard, the material, the casting process and the drawing or pattern.',
          'Continuous cast bar carries the process code GC.',
        ],
      },
      {
        h2: 'Checklist for a PB2 Enquiry',
        bullets: [
          'The grade as your drawing names it, plus the tin and phosphorus range you will accept',
          'Whether an EN 1982 material or a UNS alloy may be offered in its place',
          'Solid or hollow bar, with diameters and lengths',
          'The gear or bearing duty, so the alloy choice can be checked against it',
          'Quantity and the test document required',
        ],
        cta: CTA,
      },
    ],
  },
};
