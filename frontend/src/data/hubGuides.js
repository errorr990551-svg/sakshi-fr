// Family guides for the thin category hubs (rendered by CategoryGuide.jsx via CATEGORY_GUIDES).
// Facts: public ASTM/ASME/ISO definitions and the agreed company facts only. No supply claim
// beyond grades 304/304L/316/316L and standards A312/A269/A249/A270.
const CTA = { label: 'Send your enquiry', href: '/contact-us/' };
const U = '2026-11-28';

export const HUB_GUIDES = {
  'stainless-steel-pipes': {
    updated: U,
    sections: [
      {
        h2: 'Pipe or Tube: Start With How the Size Is Named',
        paragraphs: [
          'Stainless pipe and stainless tube look alike on a rack, but they are sized in different ways. Pipe is named by nominal pipe size (NPS) and schedule: the outside diameter is fixed for each NPS and the schedule sets the wall. Tube is named by its actual outside diameter and wall, for example 1 inch OD × 1.65 mm. A pipe and a tube with the same nominal inch are not the same diameter, so fittings, clamps and supports bought for one will not fit the other.',
          'The table shows how far apart the two series sit. Use it to check a drawing before the enquiry goes out: if a line is marked "2 inch" and the fittings are clamp ferrules, it is almost certainly 50.80 mm OD tube, not NPS 2 pipe.'
        ],
        table: {
          caption: 'Same nominal size, different outside diameter (mm)',
          head: ['Nominal size', 'Pipe OD, ASME B36.19M', 'Tube OD (inch series)', 'Difference'],
          rows: [
            ['1/2"', '21.34', '12.70', '8.64'],
            ['1"', '33.40', '25.40', '8.00'],
            ['1-1/2"', '48.26', '38.10', '10.16'],
            ['2"', '60.33', '50.80', '9.53'],
            ['3"', '88.90', '76.20', '12.70'],
            ['4"', '114.30', '101.60', '12.70']
          ]
        }
      },
      {
        h2: 'Which ASTM Standard Fits the Service',
        paragraphs: [
          'The product standard decides how the pipe or tube is made, tested and certified, so it belongs on every line of the purchase order next to the grade. Sakshi Forge supplies stainless pipe and tube in 304, 304L, 316 and 316L to the four standards below.'
        ],
        table: {
          caption: 'Four common ASTM product standards for austenitic stainless pipe and tube',
          head: ['Standard', 'Product', 'Sized by', 'Typical service'],
          rows: [
            ['ASTM A312', 'Seamless and welded pipe', 'NPS and schedule', 'Process and utility piping, high-temperature and general corrosive service'],
            ['ASTM A269', 'Seamless and welded tubing', 'OD and wall', 'General corrosion-resisting service, instrument and process tubing'],
            ['ASTM A270', 'Seamless and welded sanitary tubing', 'OD and wall', 'Dairy, food and beverage lines; supplementary requirement S2 for pharmaceutical quality'],
            ['ASTM A249', 'Welded tubes', 'OD and wall', 'Heat exchangers, condensers, boilers and superheaters']
          ]
        },
        subsections: [
          {
            h3: 'Grade: 304L or 316L',
            paragraphs: [
              'Both are low-carbon grades that can be welded without losing corrosion resistance next to the weld. 316L adds molybdenum, which raises resistance to pitting in chloride-bearing water, brines and many cleaning chemicals. Where the fluid is plain water, air or a mild product, 304L usually does the job at lower cost; where chlorides, acids or hot cleaning cycles are involved, 316L is the safer choice.'
            ]
          }
        ]
      },
      {
        h2: 'What to Put in a Stainless Pipe Enquiry',
        bullets: [
          'Standard and grade, for example ASTM A312 TP316L.',
          'For pipe: NPS and schedule (Sch 10S, 40S, 80S). For tube: OD and wall in mm or inch.',
          'Seamless or welded, if your piping class fixes it.',
          'Length per piece and total quantity in metres.',
          'End condition: plain, bevelled or square cut.',
          'Any internal finish, such as SF1 or SF4 for hygienic or electropolished lines.'
        ],
        paragraphs: [
          'Every lot is supplied with an EN 10204 3.1 certificate traced to heat number and PMI on every length. The quotation follows within 30 minutes, and dispatch and transit are confirmed in writing with it.'
        ],
        cta: CTA
      }
    ],
    faqs: [
      { q: 'What is the difference between stainless steel pipe and tube?', a: 'Pipe is named by nominal pipe size and schedule, with a fixed outside diameter for each size. Tube is named by its actual outside diameter and wall. A 1 inch pipe is 33.40 mm OD while a 1 inch tube is 25.40 mm OD, so they are not interchangeable.' },
      { q: 'Which standard should I order stainless process pipe to?', a: 'ASTM A312 covers seamless and welded austenitic stainless pipe for high-temperature and general corrosive service, and is the usual choice for process piping sized by NPS and schedule.' },
      { q: 'Is ASTM A270 tube the same as ASTM A269 tube?', a: 'No. Both are sized by outside diameter, but A270 is the sanitary tubing standard with surface-finish requirements for food and dairy lines, and its S2 supplementary requirement adds controls for pharmaceutical use. A269 is for general corrosion-resisting service.' },
      { q: 'What certificate comes with the pipe?', a: 'An EN 10204 3.1 certificate traced to the heat number, with a PMI record for every length.' }
    ]
  },

  'seamless-pipes': {
    updated: U,
    sections: [
      {
        h2: 'Seamless or Welded: How to Decide',
        paragraphs: [
          'A seamless stainless pipe starts as a solid round billet that is pierced and then rolled or drawn to size, so there is no longitudinal joint anywhere in the wall. A welded pipe is formed from strip or plate and closed with a longitudinal weld, then heat treated. Under ASTM A312 both are made to the same chemistry and tensile requirements, and the type of manufacture is stated on the pipe marking and the certificate.',
          'In most plants the choice is not made by the buyer at all. It is set by the piping class in the project specification, which states for each line whether a seam is permitted. When the class allows either, welded pipe is usually the economical option, especially in large diameters with thin walls.'
        ],
        table: {
          caption: 'Seamless and welded stainless pipe compared',
          head: ['Point', 'Seamless', 'Welded'],
          rows: [
            ['How it is made', 'Pierced billet, hot-finished or cold-finished', 'Formed strip or plate with a longitudinal weld'],
            ['How it is identified', 'Marking and certificate state seamless', 'Marking and certificate state welded'],
            ['Where specifications ask for it', 'High pressure, cyclic or critical service where the piping class excludes a seam', 'Utilities, water, low and medium pressure lines'],
            ['Thin walls in large sizes', 'Less common', 'The usual form for Sch 5S and 10S at larger NPS'],
            ['Inside surface', 'No weld bead', 'Weld bead, which hygienic lines finish or remove']
          ]
        }
      },
      {
        h2: 'Writing the Order for Seamless Pipe',
        paragraphs: [
          'Write the manufacturing type into the material line itself, for example "ASTM A312 TP316L SMLS, NPS 2 Sch 40S". A line that gives only the grade and size leaves the type open, and welded pipe would comply with it. If your client specification also asks for supplementary tests or a particular heat-treatment record, list them in the enquiry so they appear on the quotation and the certificate.'
        ],
        bullets: [
          'Standard, grade and SMLS, for example ASTM A312 TP304L SMLS.',
          'NPS and schedule for each size.',
          'Random or fixed lengths, and total metres.',
          'End preparation: plain or bevelled.',
          'Any project specification that adds tests beyond the standard.'
        ],
        cta: CTA
      }
    ],
    faqs: [
      { q: 'Is seamless stainless pipe stronger than welded pipe?', a: 'Under ASTM A312 both must meet the same tensile requirements for the grade. Seamless is chosen where a piping specification excludes a seam, typically for high pressure, cyclic or critical service, rather than for higher strength of the base metal.' },
      { q: 'How do I make sure I receive seamless pipe?', a: 'Write SMLS in the material line, for example ASTM A312 TP316L SMLS, and check that the pipe marking and the certificate state seamless manufacture.' },
      { q: 'Can I get seamless pipe in Sch 5S or 10S?', a: 'Thin walls in larger sizes are normally produced as welded pipe. Send the sizes and the line will be quoted in the form your piping class allows, confirmed in writing on the quotation.' },
      { q: 'What documents come with seamless pipe?', a: 'An EN 10204 3.1 certificate traced to the heat number and PMI on every length.' }
    ]
  },

  'round-bars': {
    updated: U,
    sections: [
      {
        h2: 'ASTM A276 or A479: Which Bar Standard to Ask For',
        paragraphs: [
          'Two ASTM standards cover most stainless round bar. ASTM A276 is the general specification for stainless bars and shapes, used for parts such as shafts, pins, fasteners and machined components. ASTM A479 is for bars and shapes used in boilers and other pressure vessels, and is the one a code fabricator needs when a pressure-retaining part is machined from bar. Both draw their general requirements from ASTM A484.',
          'Many stainless bars are certified to both standards at once when the chemistry and properties meet each of them. If your drawing names one standard, ask for that one on the certificate; if it names A479, do not accept A276 alone.'
        ],
        table: {
          caption: 'A276 and A479 at a glance',
          head: ['Point', 'ASTM A276', 'ASTM A479'],
          rows: [
            ['Intended use', 'General service', 'Boilers and pressure vessels'],
            ['Typical parts', 'Shafts, spindles, pins, fasteners, machined components', 'Pressure-retaining parts machined from bar'],
            ['General requirements', 'ASTM A484', 'ASTM A484'],
            ['When to specify', 'Non-pressure parts', 'When the design code or client specification calls for it']
          ]
        }
      },
      {
        h2: 'Bar Finish and Tolerance',
        paragraphs: [
          'The finish of a bar decides how close it is to the final size and how much machining it needs. State the finish and the diameter tolerance on the enquiry, for example "bright drawn, ISO 286 h9", rather than only "bright bar", because suppliers use the word bright for more than one condition.'
        ],
        table: {
          caption: 'Common round bar conditions',
          head: ['Condition', 'How it is produced', 'Typical use'],
          rows: [
            ['Hot rolled (black)', 'Rolled hot; surface carries scale unless pickled', 'Forging stock, parts machined all over'],
            ['Peeled or turned', 'Skin removed on a lathe or peeling machine', 'Larger diameters needing a clean surface'],
            ['Cold drawn (bright)', 'Drawn through a die after annealing and pickling', 'Shafts and parts using the bar surface as supplied'],
            ['Centreless ground', 'Ground between wheels to a close diameter', 'Pump shafts, valve stems, close-tolerance fits']
          ]
        }
      },
      {
        h2: 'What a Round Bar Enquiry Needs',
        bullets: [
          'Grade (304, 304L, 316 or 316L) and standard (A276, A479 or both).',
          'Diameter and tolerance, for example 40 mm h9.',
          'Condition: hot rolled, peeled, cold drawn or ground.',
          'Length per bar, or cut lengths with their tolerance.',
          'Quantity in pieces or kilograms.'
        ],
        paragraphs: [
          'Every lot is supplied with an EN 10204 3.1 certificate traced to heat number and PMI on every length, and the quotation follows within 30 minutes.'
        ],
        cta: CTA
      }
    ],
    faqs: [
      { q: 'What is the difference between ASTM A276 and ASTM A479 bar?', a: 'ASTM A276 is the general specification for stainless bars. ASTM A479 covers bars for boilers and pressure vessels. Both use ASTM A484 for general requirements, and many bars are certified to both.' },
      { q: 'What does bright bar mean?', a: 'It usually means cold drawn or ground bar with a clean, smooth surface and a closer diameter tolerance than hot-rolled bar. Because the term is used loosely, state the condition and a tolerance class such as ISO 286 h9 on the order.' },
      { q: 'Should I choose 316 or 316L round bar?', a: 'Choose 316L where the part will be welded, because the low carbon content protects corrosion resistance next to the weld. For parts that are only machined, 316 is often specified for its slightly higher strength.' },
      { q: 'What certificate is supplied with round bar?', a: 'An EN 10204 3.1 certificate traced to the heat number and a PMI record for every length.' }
    ]
  },

  'sheets-plates-coils': {
    updated: U,
    sections: [
      {
        h2: 'Sheet, Strip or Plate: Defined by Thickness and Width',
        paragraphs: [
          'Stainless flat products are ordered to ASTM A240, which covers plate, sheet and strip for pressure vessels and general applications. Which word applies is not a matter of habit: the general-requirements standard ASTM A480 defines each form by thickness and width, and the definition decides the tolerances that apply to your order.'
        ],
        table: {
          caption: 'Flat product forms as defined in ASTM A480',
          head: ['Form', 'Thickness', 'Width'],
          rows: [
            ['Plate', '3/16 in (4.76 mm) and over', 'Over 10 in (254 mm)'],
            ['Sheet', 'Under 3/16 in (4.76 mm)', '24 in (610 mm) and over'],
            ['Strip', 'Under 3/16 in (4.76 mm)', 'Under 24 in (610 mm)']
          ]
        }
      },
      {
        h2: 'Surface Finish Codes on a Stainless Sheet Order',
        paragraphs: [
          'The finish code tells the mill how the surface was produced and how it should look. Name it on every line of the enquiry, because a 2B sheet and a BA sheet of the same grade and thickness are different products in price and appearance.'
        ],
        table: {
          caption: 'Common mill and polished finishes for stainless sheet and plate',
          head: ['Code', 'How it is produced', 'Appearance and use'],
          rows: [
            ['No. 1', 'Hot rolled, annealed and descaled', 'Dull and rough; plate for tanks and structural parts'],
            ['2D', 'Cold rolled, annealed and descaled', 'Dull matt; deep-drawn parts'],
            ['2B', 'Cold rolled, annealed, descaled and lightly rolled on polished rolls', 'Smooth, moderately reflective; the general-purpose sheet finish'],
            ['BA', 'Cold rolled and bright annealed in a protective atmosphere', 'Bright and reflective; trim and appliances'],
            ['No. 4', 'Polished with abrasive in one direction', 'Brushed look; food equipment and architecture'],
            ['No. 8', 'Polished to a mirror', 'Highly reflective; decorative panels']
          ]
        }
      },
      {
        h2: 'What to State When You Enquire',
        bullets: [
          'Grade (304, 304L, 316 or 316L) and ASTM A240.',
          'Thickness, width and length, or coil width and weight.',
          'Finish code, and whether a protective film is needed on one side.',
          'Number of sheets or plates, or total weight.',
          'Any cut-to-size pieces, with a drawing or dimensions.'
        ],
        paragraphs: [
          'Each lot carries an EN 10204 3.1 certificate traced to heat number, with PMI on every piece. The quotation follows within 30 minutes.'
        ],
        cta: CTA
      }
    ],
    faqs: [
      { q: 'What is the difference between a stainless sheet and a plate?', a: 'ASTM A480 defines plate as 3/16 in (4.76 mm) thick and over, and sheet as under 3/16 in thick and 24 in (610 mm) wide or more. Thinner material under 24 in wide is strip.' },
      { q: 'What does a 2B finish mean?', a: 'A 2B sheet has been cold rolled, annealed, descaled and given a light final pass on polished rolls. It is smooth and moderately reflective, and it is the most common finish for general-purpose stainless sheet.' },
      { q: 'Is BA the same as a mirror finish?', a: 'No. BA is bright annealed: the sheet is annealed in a protective atmosphere and comes out reflective without polishing. A mirror finish, No. 8, is produced by polishing and is more reflective.' },
      { q: 'Which standard covers stainless plate and sheet?', a: 'ASTM A240 covers chromium and chromium-nickel stainless plate, sheet and strip, with general requirements such as tolerances and finishes in ASTM A480.' }
    ]
  },

  'dairy-fittings': {
    updated: U,
    sections: [
      {
        h2: 'Identify the Connection Before You Order',
        paragraphs: [
          'Dairy and sanitary fittings join tube with a removable connection that can be opened for cleaning or inspection. Several connection systems are in use, and they do not mate with each other even at the same nominal size. Before ordering, check which system the plant already runs: the union threads of each system have their own dimensions, and the tube ODs differ too, so an existing part or its drawing is the surest guide.'
        ],
        table: {
          caption: 'Common hygienic connection systems',
          head: ['Connection', 'Standard', 'Make-up'],
          rows: [
            ['SMS union', 'SMS 1145', 'Threaded male part, nut and seal ring'],
            ['DIN union', 'DIN 11851', 'Threaded male part, slotted nut and seal ring'],
            ['IDF / ISO union', 'ISO 2853', 'Threaded union with seal ring'],
            ['Clamp', 'ISO 2852, DIN 32676, ASME BPE', 'Two flanged ferrules, a gasket and a hinged clamp, no thread']
          ]
        }
      },
      {
        h2: 'Three Tube Series With the Same Nominal Size',
        paragraphs: [
          'Dairy fittings are welded to tube, and the tube itself comes in different OD series. A fitting must be ordered in the same series as the tube it joins, or the weld ends will not match. The table lists outside diameters so you can identify a series on site; it is a measuring aid, not a list of what is supplied.'
        ],
        table: {
          caption: 'Hygienic tube outside diameters by series (mm)',
          head: ['Nominal size', 'ISO 2037 / SMS', 'ASME BPE inch tube', 'DIN 11850 series 2'],
          rows: [
            ['1"  / DN 25', '25.0', '25.40', '29.0'],
            ['1-1/2"  / DN 40', '38.0', '38.10', '41.0'],
            ['2"  / DN 50', '51.0', '50.80', '53.0'],
            ['2-1/2"  / DN 65', '63.5', '63.50', '70.0'],
            ['3"  / DN 80', '76.1', '76.20', '85.0'],
            ['4"  / DN 100', '101.6', '101.60', '104.0']
          ]
        }
      },
      {
        h2: 'Grade, Finish and What to Send',
        paragraphs: [
          '304 or 304L covers most milk, curd and beverage duty. 316L is the better choice where the line sees acid cleaning, salt brines or chloride-bearing water. Ask for the internal finish your plant standard names; a fitting rougher than the tube it joins becomes the hardest spot in the line to clean.'
        ],
        bullets: [
          'Fitting type and connection system, for example SMS union or clamp ferrule.',
          'Tube OD and wall, and which series it belongs to.',
          'Grade and internal finish.',
          'Seal material if seals are included.',
          'Quantity of each item.'
        ],
        cta: CTA
      }
    ],
    faqs: [
      { q: 'Are SMS and DIN dairy unions interchangeable?', a: 'No. SMS 1145 and DIN 11851 unions have different thread dimensions and are made for different tube ODs. Order the same system the plant already uses.' },
      { q: 'How do I tell which tube series my plant uses?', a: 'Measure the outside diameter of the tube. At the 2 inch size, for example, SMS tube is 51.0 mm, inch tube to ASME BPE is 50.80 mm and DIN 11850 series 2 tube is 53.0 mm.' },
      { q: 'Should dairy fittings be 304 or 316L?', a: '304 or 304L covers most milk and beverage lines. 316L is preferred where acid cleaning, brines or chloride-bearing water are present, because its molybdenum content raises resistance to pitting.' },
      { q: 'Do clamp fittings need a special gasket?', a: 'A clamp joint seals with a gasket between the two ferrule faces. The gasket must match the ferrule standard and size, and its material must suit the product and the cleaning chemicals.' }
    ]
  }
};
