// Page-specific guides for the phosphor bronze (P3a) and cast bronze (P3b) bar pages, merged into FITTING_GUIDES and rendered by ProductPage.
// Each page's FAQs live in its FAQs field in products.json so the FAQPage schema matches the page.
// Alloy data opened 2026-11-28 on the Copper Development Association pages (alloys.copper.org/alloy/<UNS>):
// composition, rod tempers and typical properties, physical and fabrication data, typical uses, specifications.
// MPa and °C values are conversions of the CDA ksi and °F figures (1 ksi = 6.895 MPa), rounded.
// PB1/PB2: BS 1400:1985 status from the BSI Knowledge page; EN 1982 designations and ordering format from the
// public preview of EN 1982:2008 (iTeh); grade limits from two distributor datasheets, quoted as such.
// Cast bronzes (C93200 to RG5): CDA alloy pages plus distributor and foundry datasheets (Smiths Metal Centres,
// Righton Blackburns, Vulcan, Zollern), each quoted by name; their figures are indicative, not order minimums.

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
const SMITHS_SAE660 = 'https://www.smithmetal.com/pdf/bronze/sae660.pdf';
const SMITHS_AB2 = 'https://www.smithmetal.com/pdf/bronze/ab2.pdf';
const SMITHS_LG2 = 'https://www.smithmetal.com/pdf/bronze/lg2.pdf';
const RB_LG4 = 'https://www.rightonblackburns.co.uk/datasheets/view/Righton-Blackburns-Ltd_Copper-and-Copper-Alloys-CC492K-LG4-Bar_379.pdf';
const ZOLLERN_RG5 = 'https://www.zollern.com/fileadmin/data/ZGF_ZGM_Gussteile/files/en/datenblaetter/ZOLLERN-21210_Datenblatt_Guss_RG_5.pdf';

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
  'c93200-bronze-round-bar': {
    updated: U,
    sources: [CDA('C93200'), SMITHS_SAE660],
    sections: [
      {
        h2: 'C93200: The General Purpose Leaded Bearing Bronze',
        paragraphs: [
          'C93200 is a cast copper-tin-lead alloy that the Copper Development Association groups with the high-leaded tin bronzes. About 7% tin gives it strength and wear resistance, and about 7% lead gives a soft phase that helps the bearing tolerate brief lapses in lubrication and makes the bar easy to turn.',
          'In bar form it is usually supplied as a continuous casting to ASTM B505/B505M. The UK distributor Smiths Metal Centres sells the same chemistry as SAE660 and lists C93200 and BS 1400 LB4 as related specifications on its datasheet.',
        ],
        table: {
          caption: 'C93200 composition limits, % (CDA); the Smiths SAE660 datasheet gives the same limits',
          head: ['Element', 'Limit'],
          rows: [
            ['Copper (Cu)', '81.0 – 85.0'],
            ['Tin (Sn)', '6.3 – 7.5'],
            ['Lead (Pb)', '6.0 – 8.0'],
            ['Zinc (Zn)', '1.0 – 4.0'],
            ['Nickel (Ni, incl. Co)', '1.0 max'],
            ['Antimony (Sb)', '0.35 max'],
            ['Iron (Fe)', '0.20 max'],
            ['Phosphorus (P)', '0.15 max (CDA notes 1.5 max for continuous castings)'],
            ['Sulphur (S)', '0.08 max'],
            ['Aluminium (Al) / Silicon (Si)', '0.005 max each'],
            ['Cu plus named elements', '99.0 min'],
          ],
        },
      },
      {
        h2: 'Minimum Properties by Casting Method',
        paragraphs: [
          'The same alloy has different minimums depending on how it was cast, so the ASTM specification on the order matters as much as the alloy number. CDA lists the values below as minimums for the standard. Smiths quotes its own minimums for SAE660 continuous cast bar in all sizes: 205 N/mm² tensile, 100 N/mm² proof stress, 15% elongation and 70 HB. The two sets differ, which is a reason to name one specification and not just "SAE 660".',
        ],
        table: {
          caption: 'C93200 minimum tensile properties (CDA)',
          head: ['Form and standard', 'Tensile', 'Yield (0.5% ext.)', 'Elongation'],
          rows: [
            ['Continuous cast, ASTM B505', '35 ksi (≈ 241 MPa)', '20 ksi (≈ 138 MPa)', '10%'],
            ['Centrifugal cast, ASTM B271', '30 ksi (≈ 207 MPa)', '14 ksi (≈ 97 MPa)', '15%'],
            ['Sand cast, ASTM B584 (typical in brackets)', '30 ksi (35 typ.)', '14 ksi (18 typ.)', '15% (20 typ.)'],
          ],
        },
        bullets: [
          'Machinability rating 70, so bushes can be bored and turned at good speeds.',
          'Soldering is rated excellent and brazing good; oxyacetylene and arc welding are not recommended.',
          'Melting range 1570 – 1790 °F (≈ 854 – 977 °C); specific gravity 8.91; conductivity 12% IACS.',
        ],
      },
      {
        h2: 'Typical Uses Listed by CDA',
        paragraphs: ['Almost every use CDA gives is a bearing, bushing or washer running under moderate load with lubrication. For heavier loads and shock, buyers move to the aluminium bronzes such as [C95400](/c95400-bronze-round-bar/); for more lead and easier running, to [C93600](/c93600-bronze-round-bar/).'],
        bullets: [
          'General purpose bushings, insert bearings and thrust washers',
          'Machine tool, main spindle and rolling mill bearings; roll neck and trunnion bearings',
          'Fuel pump and water pump bushings; diesel engine wrist pin bushings',
          'Hydraulic press main linings and stuffing boxes; linkage bushings for presses',
          'Pump impellers, pump fixtures and automotive fittings',
        ],
      },
      {
        h2: 'What to State on a C93200 Enquiry',
        bullets: [
          'Alloy as UNS C93200, and the specification: ASTM B505/B505M for continuous cast bar, B271 for centrifugal tube.',
          'Solid or hollow bar, with outside diameter, bore if hollow, length and quantity.',
          'Whether machining allowance is included or a finished size is needed.',
          'Any minimum mechanical property beyond the specification, and the test document you need.',
          'Whether the part is for potable water or food contact, since the alloy contains lead.',
        ],
        cta: CTA,
      },
    ],
  },
  'c93600-bronze-round-bar': {
    updated: U,
    sources: [CDA('C93600'), CDA('C93200'), CDA('C93700')],
    sections: [
      {
        h2: 'C93600: More Lead, Same Family',
        paragraphs: [
          'C93600 sits in the same CDA family as C93200, the high-leaded tin bronzes, but carries 11 to 13% lead against 6 to 8%. Tin is held at 6 to 8%. The extra lead is the point of the alloy: it raises machinability to a rating of 80 and gives the bearing surface a larger soft phase.',
          'Zinc is limited to 1.0% maximum, much lower than the 1 to 4% allowed in C93200, and the copper plus named elements must total at least 99.3%.',
        ],
        table: {
          caption: 'C93600 composition limits, % (CDA)',
          head: ['Element', 'Limit'],
          rows: [
            ['Copper (Cu)', '79.0 – 83.0'],
            ['Lead (Pb)', '11.0 – 13.0'],
            ['Tin (Sn)', '6.0 – 8.0'],
            ['Zinc (Zn)', '1.0 max'],
            ['Nickel (Ni, incl. Co)', '1.0 max'],
            ['Antimony (Sb)', '0.55 max'],
            ['Iron (Fe)', '0.20 max'],
            ['Phosphorus (P)', '0.15 max (1.5 max for continuous castings)'],
            ['Sulphur (S)', '0.08 max'],
            ['Cu plus named elements', '99.3 min'],
          ],
        },
      },
      {
        h2: 'Three Leaded Bearing Bronzes Side by Side',
        paragraphs: ['These three CDA alloys are the usual choices when a drawing calls for a leaded bearing bronze bar. The table uses the continuous cast minimums, which apply to bar bought to ASTM B505.'],
        table: {
          caption: 'C93200, C93600 and C93700 compared (CDA, continuous cast minimums)',
          head: ['Alloy', 'Tin %', 'Lead %', 'Tensile min', 'Elongation min', 'Machinability'],
          rows: [
            ['[C93200](/c93200-bronze-round-bar/)', '6.3 – 7.5', '6.0 – 8.0', '35 ksi', '10%', '70'],
            ['C93600 (this page)', '6.0 – 8.0', '11.0 – 13.0', '33 ksi', '10%', '80'],
            ['[C93700](/c93700-bronze-round-bar/)', '9.0 – 11.0', '8.0 – 11.0', '35 – 40 ksi', '6%', '80'],
          ],
        },
        bullets: [
          'C93600 continuous cast: 33 ksi (≈ 228 MPa) tensile, 20 ksi (≈ 138 MPa) yield, 10% elongation minimum; typical 35 ksi, 21 ksi, 15% and 65 HB.',
          'Centrifugal cast to ASTM B271: 32 ksi tensile, 16 ksi yield, 10% elongation minimum.',
          'Melting range 1550 – 1720 °F (≈ 843 – 938 °C); specific gravity 9.0; conductivity 11% IACS.',
        ],
      },
      {
        h2: 'Where CDA Says C93600 Is Used',
        paragraphs: ['The list leans toward bearings that work with poor or interrupted lubrication, corrosion or pressure, and toward pump and engine parts.'],
        bullets: [
          'Bearings and bushings for corrosion, lubrication or pressure duty; sleeve, rod and spacer bushings',
          'Crankshaft main bearings, piston pin and wrist pin bearings, cam bushings for diesel engines',
          'Deep well pump bowl bushings and line shaft bearings; pump sleeves',
          'Guide bushings for piston rods and valves; hydraulic gland seals; flow monitor valves',
          'Electric motor bearings, steel mill bushings and backs for lined bearings',
        ],
      },
      {
        h2: 'Before You Order C93600',
        bullets: [
          'Name the specification: CDA lists ASTM B505/B505M for continuous castings, B271 for centrifugal castings and B66 for locomotive wearing parts.',
          'Give outside diameter, bore if hollow, length and quantity.',
          'Say if the part will carry drinking water: this alloy holds 11 to 13% lead.',
          'State the test document type you need with the enquiry.',
        ],
        cta: CTA,
      },
    ],
  },
  'c93700-bronze-round-bar': {
    updated: U,
    sources: [CDA('C93700')],
    sections: [
      {
        h2: 'C93700: The 10% Tin, 10% Lead Bearing Bronze',
        paragraphs: [
          'CDA gives C93700 the common name "Bearing Bronze". It has the most tin of the three high-leaded tin bronzes on this site, 9 to 11%, together with 8 to 11% lead. The tin raises strength and hardness at the bearing face; the lead keeps the alloy forgiving and free cutting, with a machinability rating of 80.',
          'One limit is specific to its use: CDA notes that iron shall be 0.35% maximum when the alloy is used for steel-backed bearings, against 0.7% otherwise.',
        ],
        table: {
          caption: 'C93700 composition limits, % (CDA)',
          head: ['Element', 'Limit'],
          rows: [
            ['Copper (Cu)', '78.0 – 82.0'],
            ['Tin (Sn)', '9.0 – 11.0'],
            ['Lead (Pb)', '8.0 – 11.0'],
            ['Zinc (Zn)', '0.8 max'],
            ['Iron (Fe)', '0.7 max; 0.35 max for steel-backed bearings'],
            ['Nickel (Ni, incl. Co)', '0.50 max'],
            ['Antimony (Sb)', '0.50 max'],
            ['Phosphorus (P)', '0.10 max (1.5 max for continuous castings)'],
            ['Sulphur (S)', '0.08 max'],
            ['Cu plus named elements', '99.0 min'],
          ],
        },
      },
      {
        h2: 'Properties and the Temperature Limit',
        paragraphs: [
          'For continuous castings CDA lists two minimum tensile values, 35 ksi and 40 ksi (≈ 241 and 276 MPa), because different standards set different minimums. Yield is 20 ksi (≈ 138 MPa) and elongation 6%. Write the governing specification on the order so the minimum you receive is clear.',
          'CDA also gives an incipient melting temperature of 600 °F (≈ 316 °C). That is far below the solidus of 1403 °F (≈ 762 °C), so mention any heat treatment, brazing or hot service on the enquiry.',
        ],
        table: {
          caption: 'C93700 properties (CDA)',
          head: ['Property', 'Value'],
          rows: [
            ['Continuous cast, ASTM B505', 'Tensile 35 – 40 ksi min; yield 20 ksi min; elongation 6% min'],
            ['Centrifugal cast, ASTM B271', 'Tensile 30 ksi min; yield 12 ksi min; elongation 15% min'],
            ['Sand cast, typical', 'Tensile 35 ksi; yield 18 ksi; elongation 20%; 60 HB'],
            ['Incipient melting', '600 °F (≈ 316 °C)'],
            ['Melting range', '1403 – 1705 °F (≈ 762 – 929 °C)'],
            ['Specific gravity / conductivity', '8.86 / 10% IACS'],
            ['Joining', 'Soldering and brazing good; welding not recommended'],
          ],
        },
      },
      {
        h2: 'Typical Uses (CDA)',
        paragraphs: ['CDA connects the alloy with high speed and heavy pressure bearings, and with castings that must resist sulphite fluids or hold pressure.'],
        bullets: [
          'High speed, heavy load bearings and bushings; large bearings for ships',
          'Bearing plates, crank shafts and machine parts',
          'Slide guides and maintenance parts for steel mills',
          'Pumps, impellers and pressure tight castings',
          'Applications needing acid resistance to sulphite fluids',
        ],
      },
      {
        h2: 'C93700 Enquiry Checklist',
        bullets: [
          'Alloy UNS C93700 and the standard: ASTM B505/B505M for continuous cast bar; CDA also lists B271, B584 and AMS 4842.',
          'Say if the part is a steel-backed bearing, so the 0.35% iron limit applies.',
          'Outside diameter, bore, length and quantity.',
          'Test document type, and any hardness or tensile minimum beyond the specification.',
        ],
        cta: CTA,
      },
    ],
  },
  'c95400-bronze-round-bar': {
    updated: U,
    sources: [CDA('C95400'), VULCAN],
    sections: [
      {
        h2: 'C95400: A Heat-Treatable Aluminium Bronze',
        paragraphs: [
          'C95400 is a cast copper-aluminium-iron alloy, roughly 11% aluminium and 4% iron, in the CDA aluminium bronze group. It is far stronger than the tin bronzes: as a continuous casting its minimum tensile strength is 85 ksi, more than twice that of [C93200](/c93200-bronze-round-bar/).',
          'Unlike the leaded bronzes, it responds to heat treatment. In the TQ50 condition (quench hardened and temper annealed) the continuous cast minimum rises to 95 ksi, with lower elongation.',
        ],
        table: {
          caption: 'C95400 composition limits, % (CDA)',
          head: ['Element', 'Limit'],
          rows: [
            ['Copper (Cu)', '83.0 min'],
            ['Aluminium (Al)', '10.0 – 11.5'],
            ['Iron (Fe)', '3.0 – 5.0'],
            ['Nickel (Ni, incl. Co)', '1.5 max'],
            ['Manganese (Mn)', '0.50 max'],
            ['Cu plus named elements', '99.5 min'],
          ],
        },
      },
      {
        h2: 'As Cast or Heat Treated',
        paragraphs: ['The temper is part of the order. The values below are CDA minimums for the standard; the heat treated rows trade ductility for strength and hardness.'],
        table: {
          caption: 'C95400 minimum properties by form and temper (CDA)',
          head: ['Form and temper', 'Tensile', 'Yield', 'Elongation', 'Hardness'],
          rows: [
            ['Continuous cast, as cast (M07)', '85 ksi (≈ 586 MPa)', '32 ksi (≈ 221 MPa)', '12%', '—'],
            ['Continuous cast, TQ50', '95 ksi (≈ 655 MPa)', '—', '10%', '—'],
            ['Centrifugal cast, as cast (M02)', '75 ksi (≈ 517 MPa)', '30 ksi', '12%', '150 HB'],
            ['Centrifugal cast, TQ50', '90 ksi (≈ 621 MPa)', '—', '6%', '190 HB'],
            ['Permanent mould, as cast', '100 ksi', '40 ksi', '10%', '—'],
          ],
        },
        bullets: [
          'Machinability rating 60.',
          'Gas-shielded and coated metal arc welding are rated good; oxyacetylene welding is not recommended.',
          'Melting range 1880 – 1900 °F (≈ 1027 – 1038 °C); specific gravity 7.45; conductivity 13% IACS.',
        ],
      },
      {
        h2: 'Bearings Need Full Lubrication',
        paragraphs: [
          'The Vulcan engineering bronze datasheet describes 954 aluminium bronze as suitable for high strength bearings with good impact resistance, but notes that it needs reliable full film lubrication because its anti-seizing properties are poor.',
          'Vulcan lists BS 1400 AB1 among the related specifications for 954 bronze, and gives 260 °C as its maximum recommended operating temperature. Vulcan states that its data carry no warranty, so treat these as guidance and confirm limits on the order.',
        ],
      },
      {
        h2: 'Where CDA Lists C95400',
        bullets: [
          'Heavily loaded worm gears, spur gears and gears in general',
          'Bearings, bushings and bearing segments and pressure blocks for the steel industry',
          'Valve bodies, valve guides and valve seats; pump parts',
          'Large hold down screws, nuts, high strength clamps and pickling hooks',
          'Landing gear parts, weld guns, ship building and covers for marine hardware',
        ],
      },
      {
        h2: 'C95400 Enquiry Checklist',
        bullets: [
          'Alloy UNS C95400 and the specification, ASTM B505/B505M for continuous cast bar.',
          'Temper: as cast or TQ50.',
          'Outside diameter, bore if hollow, length and quantity.',
          'Test document type and any extra hardness or tensile minimum.',
        ],
        cta: CTA,
      },
    ],
  },
  'c95800-bronze-round-bar': {
    updated: U,
    sources: [CDA('C95800'), SMITHS_AB2, EN1982_PREVIEW],
    sections: [
      {
        h2: 'C95800: Nickel Aluminium Bronze for Seawater',
        paragraphs: [
          'C95800 adds 4.0 to 5.0% nickel to an aluminium bronze base. CDA files it with the copper-aluminium-iron-nickel alloys, and lists propeller blades and hubs, marine hardware and valves in contact with sea water among its uses.',
          'One rule in the CDA composition is easy to miss: the iron content shall not exceed the nickel content. A heat that meets every individual range can still fail on this ratio, so it belongs on the inspection list.',
        ],
        table: {
          caption: 'C95800 composition limits, % (CDA)',
          head: ['Element', 'Limit'],
          rows: [
            ['Copper (Cu)', '79.0 min'],
            ['Aluminium (Al)', '8.5 – 9.5'],
            ['Nickel (Ni, incl. Co)', '4.0 – 5.0'],
            ['Iron (Fe)', '3.5 – 4.5, and not more than Ni'],
            ['Manganese (Mn)', '0.8 – 1.5'],
            ['Silicon (Si)', '0.10 max'],
            ['Lead (Pb)', '0.03 max'],
            ['Cu plus named elements', '99.5 min'],
          ],
        },
      },
      {
        h2: 'Related Is Not Identical: C95800 and BS 1400 AB2',
        paragraphs: [
          'The Smiths Metal Centres datasheet for BS 1400 AB2 lists C95800 and the EN 1982 material CC333G as related specifications. EN 1982 names CC333G as CuAl10Fe5Ni5-C. Put the two published composition tables side by side and the ranges overlap but do not match, so a bar certified to one is not automatically compliant with the other.',
        ],
        table: {
          caption: 'C95800 (CDA) against BS 1400 AB2 (Smiths datasheet), %',
          head: ['Element', 'C95800 (CDA)', 'AB2 (Smiths)'],
          rows: [
            ['Aluminium', '8.5 – 9.5', '8.80 – 10.00'],
            ['Nickel', '4.0 – 5.0', '4.00 – 5.50'],
            ['Iron', '3.5 – 4.5', '4.00 – 5.50'],
            ['Manganese', '0.8 – 1.5', '3.00 max'],
            ['Lead', '0.03 max', '0.05 max'],
            ['Silicon', '0.10 max', '0.10 max'],
          ],
        },
        bullets: [
          'Name one specification on the order, for example ASTM B505/B505M for UNS C95800 continuous cast bar.',
          'If a drawing says "NAB" or "AB2", ask which standard the inspector will check against before ordering.',
        ],
      },
      {
        h2: 'C95800 Properties (CDA)',
        table: {
          caption: 'C95800 minimum properties by form (CDA)',
          head: ['Form', 'Tensile', 'Yield (0.5% ext.)', 'Elongation'],
          rows: [
            ['Continuous cast, ASTM B505', '85 ksi (≈ 586 MPa)', '35 ksi (≈ 241 MPa)', '18%'],
            ['Centrifugal cast, ASTM B271', '85 ksi', '35 ksi', '15%'],
            ['Sand cast, ASTM B148 (typical in brackets)', '85 ksi (95 typ.)', '35 ksi (38 typ.)', '15% (25 typ.)'],
          ],
        },
        bullets: [
          'Machinability rating 20: plan for slower cutting than the leaded bronzes.',
          'Gas-shielded and coated metal arc welding rated good; brazing fair.',
          'Melting range 1910 – 1940 °F (≈ 1043 – 1060 °C); specific gravity 7.64; conductivity 7% IACS.',
          'CDA uses: propeller blades and hubs, valve bodies, worms and worm wheels, wear plates, shafts, gears, pickling equipment and ship building.',
        ],
      },
      {
        h2: 'C95800 Enquiry Checklist',
        bullets: [
          'UNS C95800 and the governing specification.',
          'Outside diameter, bore if hollow, length and quantity.',
          'Whether the Fe ≤ Ni rule must be shown on the test document.',
          'Test document type, and any marine class or end-user requirement written out in full.',
        ],
        cta: CTA,
      },
    ],
  },
  'c86300-steel-round-bar': {
    updated: U,
    sources: [CDA('C86300')],
    sections: [
      {
        h2: 'C86300 Is a Manganese Bronze, Not a Steel',
        paragraphs: [
          'C86300 is a cast copper alloy. CDA files it as a manganese bronze in the group "High Strength Yellow Brasses": copper with 22 to 28% zinc, strengthened by 5 to 7.5% aluminium, 2 to 4% iron and 2.5 to 5% manganese. It contains no steel; the strength comes from this alloying.',
          'Its minimum tensile strength is 110 ksi (≈ 758 MPa) whether it is sand cast, centrifugally cast or continuously cast, higher than any other cast bronze in this series of pages.',
        ],
        table: {
          caption: 'C86300 composition limits, % (CDA)',
          head: ['Element', 'Limit'],
          rows: [
            ['Copper (Cu)', '60.0 – 66.0'],
            ['Zinc (Zn)', '22.0 – 28.0'],
            ['Aluminium (Al)', '5.0 – 7.5'],
            ['Manganese (Mn)', '2.5 – 5.0'],
            ['Iron (Fe)', '2.0 – 4.0'],
            ['Nickel (Ni, incl. Co)', '1.0 max'],
            ['Lead (Pb) / Tin (Sn)', '0.20 max each'],
            ['Cu plus named elements', '99.0 min'],
          ],
        },
      },
      {
        h2: 'Strength by Casting Method',
        table: {
          caption: 'C86300 properties (CDA; minimums unless marked typical)',
          head: ['Form and standard', 'Tensile', 'Yield', 'Elongation', 'Hardness'],
          rows: [
            ['Continuous cast, ASTM B505', '110 ksi', '62 ksi (0.5% ext.)', '14%', '—'],
            ['Centrifugal cast, ASTM B271', '110 ksi', '83 ksi typical (0.2% offset)', '12%', '—'],
            ['Sand cast, ASTM B584', '110 ksi (119 typ.)', '60 ksi (62 typ.)', '12% (18 typ.)', '223 HB min (225 typ.)'],
          ],
        },
        bullets: [
          'Machinability rating 8, the lowest of these bronzes: expect slow speeds and heavy tool wear.',
          'Coated metal arc welding is rated good; soldering, brazing, oxyacetylene and gas-shielded arc welding are rated poor.',
          'Melting range 1625 – 1693 °F (≈ 885 – 923 °C); specific gravity 7.83; conductivity 8% IACS; stress relief at 500 °F (≈ 260 °C).',
        ],
      },
      {
        h2: 'Slow, Heavy Loads: Where CDA Lists It',
        paragraphs: ['The CDA uses are parts that carry high static or slow moving loads, often outdoors or near water. CDA also lists ASTM B22, the specification for bronze castings for bridges and turntables.'],
        bullets: [
          'Bridge pins, struts, frames and hooks',
          'Slow speed, heavy load bearings, bushings, cams and gibs',
          'Screw down nuts, gears and high strength machine parts',
          'Hydraulic cylinder parts and large valve stems',
          'Propellers, rudders, clamps and other marine hardware',
        ],
      },
      {
        h2: 'Ordering C86300 Bar',
        bullets: [
          'State UNS C86300 and ASTM B505/B505M for continuous cast bar.',
          'If the part replaces a steel item, send the drawing: the alloy is strong, but its machinability and joining limits differ from steel.',
          'Outside diameter, bore, length and quantity.',
          'Test document type and any hardness minimum.',
        ],
        cta: CTA,
      },
    ],
  },
  'lg2-bronze-round-bar': {
    updated: U,
    sources: [SMITHS_LG2, VULCAN, ZOLLERN_RG5, CDA('C83600'), BS1400, EN1982],
    sections: [
      {
        h2: 'LG2 Leaded Gunmetal: One Grade, Several Names',
        paragraphs: [
          'LG2 is the 5-5-5 leaded gunmetal of the old British standard BS 1400: roughly 5% each of tin, lead and zinc in copper. BSI lists BS 1400 as withdrawn, and EN 1982 now covers copper alloy castings. The Smiths Metal Centres datasheet names the grade "LG2 (CC491K)", and the Zollern datasheet for Rg 5 also gives CC491K, with LG2 as its British name.',
          'In the United States the closest grade is C83600, which CDA calls leaded red brass or ounce metal. Vulcan lists C83600 as related to LG-2, and Zollern marks it as approximately equal. Treat these as related grades, not interchangeable ones.',
        ],
        table: {
          caption: 'LG2 and its related grades, composition % from three published sheets',
          head: ['Element', 'LG2 (Smiths)', 'LG-2 (Vulcan)', 'C83600 (CDA)'],
          rows: [
            ['Tin (Sn)', '4.0 – 6.0', '4.0 – 6.0', '4.0 – 6.0'],
            ['Lead (Pb)', '4.0 – 6.0', '4.0 – 6.0', '4.0 – 6.0'],
            ['Zinc (Zn)', '4.0 – 6.0', '4.0 – 6.0', '4.0 – 6.0'],
            ['Nickel (Ni)', '2.0 max', '1.0 max', '1.0 max'],
            ['Phosphorus (P)', '0.01 max', '—', '0.05 max (1.5 for continuous castings)'],
            ['Copper (Cu)', 'Balance', 'Balance', '84.0 – 86.0'],
          ],
        },
      },
      {
        h2: 'What the Datasheets Say About Its Behaviour',
        paragraphs: [
          'Vulcan describes LG-2 as a general purpose leaded gunmetal with excellent machining, medium strength and no dezincification, with reasonable resistance to saltwater and brine for pump and valve parts, and suitable for light duty bearings and gearing. Smiths says the same about machining and dezincification and adds good pressure tightness.',
          'Typical strength figures differ between the sheets, as typical figures do: Smiths gives 230 N/mm² tensile, 110 N/mm² proof stress, 10% elongation and 65 HB; Vulcan gives 270 – 300 MPa, 120 MPa, 20% and 75 BHN. CDA gives continuous cast minimums for C83600 of 36 ksi (≈ 248 MPa) tensile, 19 ksi (≈ 131 MPa) yield and 15% elongation.',
        ],
        bullets: [
          'Vulcan gives a maximum recommended operating temperature of 230 °C for LG-2.',
          'CDA rates C83600 machinability 84 and soldering excellent; welding is not recommended except coated metal arc, rated fair.',
        ],
      },
      {
        h2: 'Typical Uses',
        bullets: [
          'Pressure tight pumps and valves, and pump impellers (Smiths)',
          'Superheated steam applications and general bearings (Smiths)',
          'Architectural trims (Smiths)',
          'Light duty bearings and gearing with negligible loading (Vulcan)',
        ],
      },
      {
        h2: 'How to Order LG2 Without Ambiguity',
        paragraphs: ['Because BS 1400 is withdrawn, an LG2 order works best when it names the current material code as well, for example EN 1982 CC491K, or UNS C83600 to ASTM B505 if the drawing is American. The German name for the same EN material is Rg 5, covered on our [RG5 page](/rg5-rg25-bronze-round-bar/).'],
        bullets: [
          'Grade name as on the drawing, plus the standard and code the inspector will check.',
          'Outside diameter, bore if hollow, length and quantity.',
          'Whether the part is for potable water, since LG2 contains about 5% lead.',
          'Test document type required.',
        ],
        cta: CTA,
      },
    ],
  },
  'lg4-bronze-round-bar': {
    updated: U,
    sources: [RB_LG4, SMITHS_LG2, EN1982_PREVIEW, BS1400],
    sections: [
      {
        h2: 'LG4: The Higher-Tin Leaded Gunmetal',
        paragraphs: [
          'LG4 is a BS 1400 leaded gunmetal with more tin and less lead than LG2. The Righton Blackburns datasheet for "CC492K (LG4) Bar" lists the alloy designations BS 1400 LG4 and CuSn7Pb3Zn3, with 6 to 8% tin, 2.5 to 3.5% lead and 1.5 to 3.5% zinc. EN 1982 lists CC492K as CuSn7Zn2Pb3-C.',
          'The same sheet calls it a leaded tin bronze. Against LG2 it has more tin and less lead, and the two grades differ in strength and in how they stand up to fast moving water.',
        ],
        table: {
          caption: 'LG4 composition, % (Righton Blackburns datasheet)',
          head: ['Element', 'Range'],
          rows: [
            ['Copper (Cu)', '85.00 – 89.00'],
            ['Tin (Sn)', '6.00 – 8.00'],
            ['Lead (Pb)', '2.50 – 3.50'],
            ['Zinc (Zn)', '1.50 – 3.50'],
            ['Nickel (Ni)', '2.00 max'],
            ['Phosphorus (P)', '0.01 max'],
          ],
        },
      },
      {
        h2: 'LG4 Against LG2',
        paragraphs: ['The table sets the two distributor sheets side by side. They come from different companies and are indicative values, so use them to choose a grade, not as order minimums.'],
        table: {
          caption: 'LG4 (Righton Blackburns) and LG2 (Smiths), published sheet values',
          head: ['Property', 'LG4 / CC492K', '[LG2 / CC491K](/lg2-bronze-round-bar/)'],
          rows: [
            ['Tin %', '6.0 – 8.0', '4.0 – 6.0'],
            ['Lead %', '2.5 – 3.5', '4.0 – 6.0'],
            ['Zinc %', '1.5 – 3.5', '4.0 – 6.0'],
            ['Tensile strength', '240 N/mm²', '230 N/mm²'],
            ['0.2% proof stress', '130 N/mm²', '110 N/mm²'],
            ['Elongation', '12%', '10%'],
            ['Hardness', '70 HB', '65 HB'],
          ],
        },
        bullets: [
          'Righton Blackburns lists better resistance to impingement and cavitation in contact with fast moving fluids, and improved mechanical properties.',
          'The sheet also rates its machining better than other bronzes, with good corrosion resistance and moderate strength.',
        ],
      },
      {
        h2: 'Typical Uses (Righton Blackburns)',
        bullets: [
          'Valve parts',
          'Pump bodies',
          'Sea water handling components',
          'Bushes and bearings',
        ],
      },
      {
        h2: 'LG4 Enquiry Checklist',
        bullets: [
          'Grade as LG4 together with EN 1982 CC492K, because BS 1400 is withdrawn.',
          'If the drawing gives a chemistry or property table, send it; the sheet values here are indicative only.',
          'Outside diameter, bore if hollow, length and quantity.',
          'Test document type required.',
        ],
        cta: CTA,
      },
    ],
  },
  'rg5-rg25-bronze-round-bar': {
    updated: U,
    sources: [ZOLLERN_RG5, EN1982, EN1982_PREVIEW],
    sections: [
      {
        h2: 'Rg 5: The German Name for CC491K Gunmetal',
        paragraphs: [
          'Rg 5 is the German name for the copper-tin-zinc-lead casting alloy now designated CuSn5Zn5Pb5-C, material number CC491K, in EN 1982. The Zollern datasheet for Rg 5 gives the older DIN designation G-CuSn5ZnPb and number 2.1096, LG2 as the British name and approximately C83600 for the United States.',
          'So Rg 5 and [LG2](/lg2-bronze-round-bar/) describe the same EN material. This page uses the Zollern data, which is set out against the EN 1982 minimums. If your drawing says RG25 or another name, send it with the enquiry and the grade will be confirmed in writing before quoting.',
        ],
        table: {
          caption: 'Rg 5 / CC491K composition, % (Zollern datasheet)',
          head: ['Element', 'Limit'],
          rows: [
            ['Copper (Cu)', '83.0 – 87.0'],
            ['Tin (Sn)', '4.0 – 6.0'],
            ['Lead (Pb)', '4.0 – 6.0'],
            ['Zinc (Zn)', '4.0 – 6.0'],
            ['Nickel (Ni)', '2.0 max'],
            ['Iron (Fe)', '0.3 max'],
            ['Antimony (Sb)', '0.25 max'],
            ['Phosphorus (P) / Sulphur (S)', '0.10 max each'],
            ['Aluminium (Al) / Silicon (Si)', '0.01 max each'],
          ],
        },
      },
      {
        h2: 'Minimum Strength and Strength When Hot',
        paragraphs: ['Zollern lists the EN 1982 minimums by casting method, and reference values at temperature. Strength falls steadily with heat, which matters for steam and hot water fittings.'],
        table: {
          caption: 'Rg 5 strength (Zollern datasheet)',
          head: ['Condition', 'Rm N/mm²', 'Rp0.2 N/mm²', 'A5 %'],
          rows: [
            ['EN 1982 sand casting, minimum', '200', '90', '13'],
            ['EN 1982 centrifugal casting, minimum', '250', '110', '13'],
            ['Reference at 20 °C', '220', '90', '16'],
            ['Reference at 150 °C', '200', '76', '13'],
            ['Reference at 200 °C', '194', '70', '11'],
            ['Reference at 250 °C', '188', '65', '10'],
            ['Reference at 300 °C', '182', '59', '8'],
          ],
        },
        bullets: [
          'Hardness minimum 60 HB sand cast and 65 HB centrifugal cast (EN 1982 values on the Zollern sheet).',
          'Density 8.7 kg/dm³; melting range 860 – 1030 °C; conductivity 12 – 16% IACS.',
          'Machinability index about 80, against 100 for CuZn39Pb3; short chips.',
        ],
      },
      {
        h2: 'Thin Walls, Water and Steam',
        paragraphs: [
          'Zollern describes Rg 5 as easy to cast and resistant to seawater, and warns that it solidifies with porosity in the middle of thick sections. Where dense parts are needed it should be used for thin-walled components. It does not become brittle at low temperatures.',
          'Its listed uses are thin-walled castings such as pump housing manifolds and flanges in the cooling water circuit of marine diesel engines, and parts for water and steam fittings up to about 225 °C.',
        ],
        bullets: [
          'Soft soldering good; brazing only to a limited extent.',
          'Welding only to a limited extent, with a tendency to hot cracking; larger parts must be preheated and furnace cooled.',
          'Relaxation annealing at 400 – 600 °C.',
        ],
      },
      {
        h2: 'Rg 5 Enquiry Checklist',
        bullets: [
          'Grade as EN 1982 CuSn5Zn5Pb5-C (CC491K), with the name on your drawing.',
          'Wall thickness of the finished part, given the porosity warning for thick sections.',
          'Service temperature if above room temperature.',
          'Outside diameter, bore, length, quantity and test document type.',
        ],
        cta: CTA,
      },
    ],
  },
};
