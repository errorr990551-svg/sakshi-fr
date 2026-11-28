// Page-specific guides for the stainless pipe product pages, merged into FITTING_GUIDES and rendered by ProductPage.
// Each page's FAQs live in its FAQs field in products.json so the FAQPage schema matches the page.
// Requirements checked 2026-11-28 against the public preview of ASTM A312/A312M-24 (iTeh catalog page in sources):
// sections 1.4, 6.1.2-6.1.7, 6.2 and Table 2, Table 1 (chemistry, footnote D), Table 3 (wall tolerance), Table 4 (tensile).
// Walls in the worked examples are the ASME B36.19M values already shown on /pipe-schedule-chart/.
// PREN = %Cr + 3.3 x %Mo + 16 x %N, computed from the Table 1 limits with N taken as zero (A312 sets no N limit for these grades).

const U = '2026-11-28';
const CTA = { label: 'Request a pipe quotation', href: '/contact-us/' };
const A312 = 'https://standards.iteh.ai/catalog/standards/astm/c7ab4aa9-55f6-4170-863d-7cbdc6036084/astm-a312-a312m-24';

export const PIPE_GUIDES = {
  'stainless-steel-pipe': {
    updated: U,
    sections: [
      {
        h2: 'What ASTM A312 Fixes for Every Stainless Pipe',
        paragraphs: [
          'ASTM A312/A312M is the product standard for seamless, straight-seam welded and heavily cold worked welded austenitic stainless pipe meant for high-temperature and general corrosive service. Whatever the grade, a pipe sold to it has gone through the same chain of requirements before it is marked: how it may be made, how it is heat treated, how each length is tested and how much its wall may vary.',
          'Those requirements are the reason a purchase order can simply say "ASTM A312" instead of listing them. The table sets out what the standard itself demands, so you can see what the specification already covers and what your enquiry still has to add.',
        ],
        table: {
          caption: 'Requirements ASTM A312/A312M-24 applies to all pipe',
          head: ['Requirement', 'What the standard says'],
          rows: [
            ['Seamless (SML)', 'Made by a process with no welding at any stage of production'],
            ['Welded (WLD)', 'Made by an automatic welding process, with no filler metal added during welding'],
            ['Heavily cold worked (HCW)', 'Welded pipe cold worked by at least 35% in both wall and weld before the final anneal; the weld is fully radiographed before cold working'],
            ['Heat treatment', 'Every pipe is heat treated; for TP304, TP304L, TP316 and TP316L at 1040 °C [1900 °F] minimum, then quenched in water or rapidly cooled by other means'],
            ['Testing', 'Each length receives either a hydrostatic test or a nondestructive electric test; section 11 adds tension and flattening tests, with grain size and weld decay tests where they apply'],
            ['Surface', 'Free of scale and contaminating exogenous iron particles; passivation is carried out when the purchaser asks for it'],
            ['Dimensions', 'Table X1.1 lists the ASME B36.19 sizes; other sizes are allowed if every other requirement is met'],
            ['Ordering and general rules', 'Taken from ASTM A999/A999M, which A312 calls up'],
          ],
        },
      },
      {
        h2: 'How Much the Wall May Vary',
        paragraphs: [
          'A312 lets the wall run 12.5% under its nominal value at every size. The allowance above nominal changes with NPS and, from NPS 3 upward, with the ratio of wall to outside diameter (t/D). For welded pipe the weld area is not held to the over tolerance at all.',
          'The under tolerance matters most to the person who sized the line. Pressure-design calculations normally deduct this mill tolerance from the nominal wall, so a schedule picked with no margin can end up thinner than the design minimum and still be correct pipe.',
        ],
        table: {
          caption: 'Wall thickness tolerance, ASTM A312 Table 3 (% of nominal wall)',
          head: ['NPS, pipe type and t/D', 'Over', 'Under'],
          rows: [
            ['NPS 1/8 to 2-1/2, all pipe', '+20.0', '−12.5'],
            ['NPS 3 to 18, t/D up to 5%', '+22.5', '−12.5'],
            ['NPS 3 to 18, t/D over 5%', '+15.0', '−12.5'],
            ['NPS 20 and larger, welded', '+17.5', '−12.5'],
            ['NPS 20 and larger, seamless, t/D up to 5%', '+22.5', '−12.5'],
            ['NPS 20 and larger, seamless, t/D over 5%', '+15.0', '−12.5'],
          ],
        },
        subsections: [
          {
            h3: 'Three worked examples',
            bullets: [
              'NPS 2 Sch 40S, nominal wall 3.91 mm: anything from 3.42 mm to 4.69 mm complies.',
              'NPS 4 Sch 10S, nominal wall 3.05 mm, t/D about 2.7%: 2.67 mm to 3.74 mm.',
              'NPS 6 Sch 80S, nominal wall 10.97 mm, t/D about 6.5%: 9.60 mm to 12.62 mm.',
            ],
            paragraphs: [
              'Applied to three common sizes, with nominal walls taken from the [pipe schedule chart](/pipe-schedule-chart/). The [weight calculator](/weight-calculator/) turns any size and schedule into kilograms per metre.',
            ],
          },
        ],
      },
      {
        h2: 'Reading a Stainless Pipe Material Line',
        paragraphs: [
          'Take "ASTM A312 TP316L WLD, NPS 3 Sch 10S" as an example. ASTM A312 is the product standard. TP316L is the grade, written with the TP prefix A312 uses. WLD fixes the method of manufacture; leave it out and either seamless or welded pipe satisfies the line. NPS 3 fixes the outside diameter at 88.90 mm, and Sch 10S, a stainless schedule from ASME B36.19M, sets the nominal wall at 3.05 mm.',
          'If any one of those five parts is missing, the quotation has to guess it. For the difference between pipe and tube sizing, and the other ASTM standards in this family, see [stainless steel pipes](/stainless-steel-pipes/).',
        ],
        bullets: [
          'Standard and grade on the same line, for example ASTM A312 TP304L.',
          'SML, WLD or HCW, when your piping class decides it.',
          'NPS and schedule for every size on the list.',
          'Metres per size, and fixed or random lengths.',
          'Plain or bevelled ends, and passivation if you need it.',
        ],
        cta: CTA,
      },
    ],
    sources: [A312],
  },

  'ss-erw-pipes': {
    updated: U,
    sections: [
      {
        h2: 'ERW in a Stainless Pipe Enquiry',
        paragraphs: [
          'ERW stands for electric resistance welded, a name that comes from carbon-steel line pipe. In stainless enquiries it is often used loosely for any pipe with a longitudinal seam. ASTM A312 does not use the word: it calls this product welded pipe, coded WLD, and requires an automatic welding process with no filler metal added.',
          'When a drawing or tender says "SS ERW pipe", the safest way to answer it is to name the standard and code: ASTM A312 TP304L WLD, for example. The quotation and the 3.1 certificate then describe exactly the same product, and nothing depends on how the word ERW was meant.',
        ],
      },
      {
        h2: 'Welded Pipe Requirements Under ASTM A312',
        paragraphs: [
          'Welded pipe meets the same chemistry and tensile limits as seamless pipe of the grade. The extra rules concern the seam itself.',
        ],
        table: {
          caption: 'What A312 sets for welded pipe, and what that means for your RFQ',
          head: ['Point', 'ASTM A312/A312M-24', 'On your RFQ'],
          rows: [
            ['Welding', 'Automatic process, no filler metal', 'Write WLD after the grade'],
            ['Seams, NPS 14 and smaller', 'One longitudinal weld', 'Nothing extra'],
            ['Seams, above NPS 14', 'One weld, or two longitudinal sections when the purchaser approves', 'Say whether two-seam pipe is acceptable'],
            ['Seam testing', 'All weld tests, examinations, inspections or treatments are done on each weld seam', 'Name any weld test your specification adds'],
            ['Heat treatment', 'After welding, 1040 °C minimum with rapid cooling for 304, 304L, 316 and 316L', 'Nothing extra; it is mandatory'],
            ['Wall at the weld', 'Not limited by the over tolerance', 'Ask separately if the bore must be flush'],
            ['HCW option', 'Wall and weld cold worked at least 35% before the final anneal', 'Ask for HCW only where your specification names it'],
          ],
        },
      },
      {
        h2: 'Before Welded Pipe Replaces Seamless',
        paragraphs: [
          'Piping codes such as ASME B31.3 can apply a weld joint quality factor to welded pipe when the allowable pressure is worked out, so welded and seamless pipe of the same schedule do not always carry the same rating. Check the factor the line was designed with before switching. The broader comparison of the two forms is on the [seamless pipes](/seamless-pipes/) page.',
        ],
        subsections: [{ h3: 'What to write on a welded pipe RFQ', bullets: [
          'Grade and code, for example ASTM A312 TP316L WLD.',
          'NPS and schedule for each size, and metres of each.',
          'Above NPS 14: one seam only, or two allowed.',
          'Supplementary weld tests named in your project specification.',
          'End finish, and whether the inside bead needs attention.',
        ] }],
        cta: CTA,
      },
    ],
    sources: [A312],
  },

  '304-stainless-steel-pipe': {
    updated: U,
    sections: [
      {
        h2: 'TP304 Limits in ASTM A312',
        paragraphs: [
          'Grade 304, UNS S30400, is the basic chromium-nickel austenitic stainless steel and the most widely used stainless pipe grade. Its everyday name, 18/8, comes from roughly 18% chromium and 8% nickel. A312 actually allows 18.0 to 20.0% chromium and 8.0 to 11.0% nickel, so two lots of correct TP304 pipe can differ noticeably in alloy content.',
          'European drawings often give 1.4301 (X5CrNi18-10) for the same duty. That is a close counterpart under a separate standard, not the same specification, so order and certify to one of them.',
        ],
        table: {
          caption: 'TP304 pipe, ASTM A312/A312M-24 Tables 1 and 4',
          head: ['Property', 'TP304 requirement'],
          rows: [
            ['Carbon', '0.08% max'],
            ['Manganese', '2.00% max'],
            ['Phosphorus', '0.045% max'],
            ['Sulphur', '0.030% max'],
            ['Silicon', '1.00% max'],
            ['Chromium', '18.0 to 20.0%'],
            ['Nickel', '8.0 to 11.0%'],
            ['Tensile strength', '515 MPa [75 ksi] min'],
            ['Yield strength', '205 MPa [30 ksi] min'],
          ],
        },
      },
      {
        h2: 'When 304 Is Enough, and When to Move Up',
        bullets: [
          'Plain water, compressed air, many food products and dry indoor service: 304 is usually adequate.',
          'Lines that are welded and then carry a corrosive fluid: carbon up to 0.08% leaves the heat-affected zone open to sensitisation, so [304L](/304l-stainless-steel-pipe/) is the usual answer.',
          'Chlorides, such as brine, seawater spray or chloride cleaning agents: 304 has no molybdenum, so move to [316](/316-stainless-steel-pipe/) or 316L.',
        ],
        subsections: [{ h3: 'Dual certification', paragraphs: [
          'Pipe that satisfies the limits of both TP304 and TP304L is often certified with both grade names. If your specification asks for dual certification, write TP304/304L on the enquiry.',
        ] }],
        cta: CTA,
      },
    ],
    sources: [A312],
  },

  '304l-stainless-steel-pipe': {
    updated: U,
    sections: [
      {
        h2: 'What the L Changes: TP304 and TP304L Side by Side',
        paragraphs: [
          'The L stands for low carbon. TP304L is grade 304 with the carbon ceiling cut from 0.08% to 0.035%, and A312 widens the nickel range a little to keep the structure fully austenitic. The price of the lower carbon is a lower minimum strength.',
        ],
        table: {
          caption: 'TP304 and TP304L in ASTM A312/A312M-24',
          head: ['Requirement', 'TP304', 'TP304L'],
          rows: [
            ['UNS number', 'S30400', 'S30403'],
            ['Carbon, max', '0.08%', '0.035%'],
            ['Chromium', '18.0 to 20.0%', '18.0 to 20.0%'],
            ['Nickel', '8.0 to 11.0%', '8.0 to 13.0%'],
            ['Tensile strength, min', '515 MPa [75 ksi]', '485 MPa [70 ksi]'],
            ['Yield strength, min', '205 MPa [30 ksi]', '170 MPa [25 ksi]'],
          ],
        },
      },
      {
        h2: 'Why Low Carbon Matters After Welding',
        paragraphs: [
          'Welding heats the metal next to the seam through a temperature band where carbon combines with chromium and settles at the grain boundaries as chromium carbide. The steel right beside those boundaries loses chromium, and in some acids and process fluids it then corrodes along the grain boundaries while the rest of the pipe looks sound. This is called sensitisation, and the attack is intergranular corrosion.',
          'Less carbon leaves less to form carbides, which is why 304L is the usual 304-family choice for pipe that is welded on site and cannot be solution annealed afterwards.',
          'A footnote to A312 Table 1 raises the carbon limit to 0.040% for small or thin products that need many drawing passes: under 12.7 mm outside diameter, or under 1.20 mm average wall. When you check a certificate, compare it with the limit that applies to that size.',
        ],
      },
      {
        h2: 'Before 304L Replaces 304',
        paragraphs: [
          'Because TP304L has lower minimum tensile and yield values, piping codes give it lower allowable stresses. Ask your designer to confirm the rating before 304L goes into a line that was calculated for 304. Pipe that meets both sets of limits can be certified TP304/304L, which avoids the question.',
        ],
        subsections: [{ h3: 'What to send for 304L pipe', bullets: [
          'ASTM A312 TP304L, or TP304/304L if you need both names.',
          'SML or WLD, if your line class fixes it.',
          'NPS and schedule per size, with metres of each.',
          'Ends and any passivation.',
        ] }],
        cta: CTA,
      },
    ],
    sources: [A312],
  },

  '316-stainless-steel-pipe': {
    updated: U,
    sections: [
      {
        h2: 'What Molybdenum Adds to TP316',
        paragraphs: [
          'TP316, UNS S31600, takes the 304 base, lowers chromium slightly to 16.0 to 18.0%, raises nickel to 10.0 to 14.0% and adds 2.00 to 3.00% molybdenum. Molybdenum strengthens the passive film against chlorides, which attack stainless steel in small pits and inside crevices rather than evenly over the surface.',
          'The pitting resistance equivalent number (PREN) gives a rough ranking. Worked out from the A312 limits, 316 comes out clearly above 304 even at the bottom of its range.',
        ],
        table: {
          caption: 'PREN from ASTM A312 Table 1 limits (nitrogen taken as zero)',
          head: ['Grade', 'Cr %', 'Mo %', 'PREN range'],
          rows: [
            ['TP304', '18.0 to 20.0', 'none specified', '18.0 to 20.0'],
            ['TP316', '16.0 to 18.0', '2.00 to 3.00', '22.6 to 27.9'],
          ],
        },
        subsections: [
          {
            h3: 'Where 316 earns its cost',
            bullets: [
              'Coastal plants, where salt-laden air settles on outdoor pipe racks.',
              'Brine, cooling water with chlorides, and process streams that carry chloride salts.',
              'Lines cleaned with chlorinated or acidic chemicals.',
            ],
          },
          {
            h3: 'Where 316 is not enough',
            paragraphs: [
              'PREN is a ranking aid, not a design value. 316 is not immune: warm seawater, stagnant brine and tight crevices can still attack it, and those duties are normally engineered with more highly alloyed materials.',
            ],
          },
        ],
      },
      {
        h2: '316 or 316L',
        paragraphs: [
          'TP316 allows carbon up to 0.08% and has minimum strengths of 515 MPa tensile and 205 MPa yield. [316L](/316l-stainless-steel-pipe/) caps carbon at 0.035% for welded systems, with minimums of 485 MPa and 170 MPa. European drawings often cite 1.4401 (X5CrNiMo17-12-2) as the counterpart of 316; order to one standard.',
        ],
        subsections: [{ h3: 'What to send for 316 pipe', bullets: [
          'ASTM A312 TP316, or TP316/316L for both names.',
          'SML or WLD, as your line class requires.',
          'Each NPS with its schedule and metres.',
          'Ends, and passivation where wanted.',
        ] }],
        cta: CTA,
      },
    ],
    sources: [A312],
  },

  '316l-stainless-steel-pipe': {
    updated: U,
    sections: [
      {
        h2: 'Checking a TP316L Pipe Certificate',
        paragraphs: [
          'TP316L, UNS S31603, is the low-carbon form of 316 and the grade most process and pharmaceutical piping is welded in. Every lot arrives with an EN 10204 3.1 certificate traced to its heat number. The table lists what to look for on that certificate and the A312 value each entry must meet. The certificate type itself is explained on the [EN 10204 3.1 certificate](/en-10204-31-mtc/) page.',
        ],
        table: {
          caption: 'TP316L certificate check against ASTM A312/A312M-24',
          head: ['Certificate entry', 'A312 requirement', 'Why it matters'],
          rows: [
            ['Heat number', 'Same on certificate and pipe marking', 'Links each length to its chemistry and tests'],
            ['Carbon', '0.035% max (0.040% for small or thin product)', 'The reason to choose 316L for welded lines'],
            ['Chromium', '16.0 to 18.0%', 'Forms the passive film'],
            ['Nickel', '10.0 to 14.0%', 'Keeps the structure austenitic'],
            ['Molybdenum', '2.00 to 3.00%', 'Resistance to chloride pitting'],
            ['Sulphur', '0.030% max', 'See the orbital-welding note below'],
            ['Tensile and yield', '485 MPa and 170 MPa min', 'Lower than TP316; the basis of the allowable stress'],
            ['Heat treatment', '1040 °C min, rapid cooling', 'Mandatory for all A312 pipe'],
            ['Manufacture', 'SML, WLD or HCW', 'Must match what your line class allows'],
          ],
        },
      },
      {
        h2: 'Sulphur and Orbital Welding',
        paragraphs: [
          'A312 only caps sulphur at 0.030%. Sulphur also changes how the weld pool flows, and two heats far apart in sulphur can give different penetration with the same orbital weld settings. For that reason ASME BPE restricts sulphur in 316L tubing to a narrow band, typically 0.005% to 0.017%. That band belongs to BPE tubing, not A312 pipe, so if your 316L pipe will be orbitally welded to BPE components, state the sulphur range in the enquiry.',
        ],
      },
      {
        h2: 'Where 316L Pipe Is Used',
        paragraphs: ['Most 316L pipe goes into one of three kinds of line:'],
        bullets: [
          'Welded process lines that carry chlorides and cannot be annealed after fabrication.',
          'Purified water, utilities and CIP lines in pharmaceutical and food plants.',
          'Product-contact lines, where an [electropolished pipe](/electropolished-pipes/) bore with an Ra report per lot is the usual next step.',
        ],
        subsections: [{ h3: 'What to send for 316L pipe', paragraphs: [
          'Give ASTM A312 TP316L, SML or WLD, each NPS with its schedule and metres, the end finish, and any sulphur range or extra test your specification calls for.',
        ] }],
        cta: CTA,
      },
    ],
    sources: [A312],
  },
};
