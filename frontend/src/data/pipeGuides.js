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
  'stainless-steel-seamless-pipe': {
    updated: U,
    sections: [
      {
        h2: 'Seamless Routes ASTM A312 Allows',
        paragraphs: [
          'In ASTM A312 a seamless pipe, coded SML, is one made by a process with no welding at any stage of production. Inside that single rule the standard leaves the mill several choices. The table separates what A312 fixes for seamless pipe from what it leaves open, so you can tell which points your order needs to settle.',
        ],
        table: {
          caption: 'Seamless pipe under ASTM A312/A312M-24: fixed points and open choices',
          head: ['Stage', 'What A312 fixes', 'Left to the manufacturer'],
          rows: [
            ['Forming', 'No welding at any stage', 'The piercing and forming method'],
            ['Finishing', 'Hot finished and cold finished pipe both comply (6.1.6)', 'Which of the two'],
            ['Solution anneal', '1040 °C [1900 °F] minimum for TP304, TP304L, TP316 and TP316L, then water quench or other rapid cooling', 'Furnace and cooling equipment'],
            ['Direct quench', 'Seamless only: each pipe quenched on its own straight after hot forming, while still at or above the Table 2 temperature', 'Whether to use it in place of a separate anneal'],
            ['Surface', 'Free of scale and exogenous iron; pickling, blasting or surface finishing is not mandatory when the pipe is bright annealed', 'How the clean surface is reached'],
            ['Wall', 'Table 3 tolerances, plus the weight limit of ASTM A999 for seamless pipe', 'Nothing'],
          ],
        },
      },
      {
        h2: 'Points the Standard Leaves to the Manufacturer',
        paragraphs: [
          'Because finishing route and anneal route are the mill\'s call, two seamless lengths that both meet A312 may have reached their final condition by different paths. If your project specification insists on one, for example cold finished pipe, the order has to say it; quoting the standard alone will not.',
          'Proof of the anneal works the same way. Footnote C to Table 2 asks for cooling fast enough to stop carbides forming again, and says passing ASTM A262 Practice E can demonstrate it. The manufacturer is not obliged to run that test unless the purchase order names Supplementary Requirement S7.',
        ],
        subsections: [
          {
            h3: 'What to add to a seamless pipe enquiry',
            bullets: [
              'ASTM A312, the grade with its TP prefix, and SML.',
              'Hot finished or cold finished, only if your specification fixes it.',
              'S7, if the A262 Practice E result must be reported.',
              'Passivation, if the line needs it; A312 applies it only when the purchaser asks.',
              'Each NPS with its schedule, metres and end finish.',
            ],
            paragraphs: [
              'Grade pages: [304 seamless](/304-stainless-steel-seamless-pipe/), [304L seamless](/304l-stainless-steel-seamless-pipe/), [316 seamless](/316-stainless-steel-seamless-pipe/) and [316L seamless](/316l-stainless-steel-seamless-pipe/).',
            ],
          },
        ],
        cta: CTA,
      },
    ],
    sources: [A312],
  },
  '304-stainless-steel-seamless-pipe': {
    updated: U,
    sections: [
      {
        h2: 'Checking Small-Bore TP304 Seamless on Arrival',
        paragraphs: [
          'Small-bore TP304 seamless is mostly bought by NPS and schedule, and the receiving check that catches most problems is the wall. Up to NPS 2-1/2, Table 3 of A312 allows 20% over and 12.5% under the nominal wall, at any point measured. A seamless length has no weld area, so no part of its circumference is excused from the upper limit.',
        ],
        table: {
          caption: 'Sch 40S walls that comply, NPS 1/2 to 2 (A312 Table 3; nominal walls from ASME B36.19M)',
          head: ['NPS', 'OD (mm)', 'Nominal wall (mm)', 'Accepted range (mm)'],
          rows: [
            ['1/2', '21.34', '2.77', '2.42 to 3.32'],
            ['3/4', '26.67', '2.87', '2.51 to 3.44'],
            ['1', '33.40', '3.38', '2.96 to 4.06'],
            ['1-1/4', '42.16', '3.56', '3.12 to 4.27'],
            ['1-1/2', '48.26', '3.68', '3.22 to 4.42'],
            ['2', '60.33', '3.91', '3.42 to 4.69'],
          ],
        },
        subsections: [
          {
            h3: 'What the intergranular test proves on TP304',
            paragraphs: [
              'When an order adds Supplementary Requirement S7, ASTM A262 Practice E is run. For TP304 the specimen is tested as shipped, not sensitized first, so a pass shows the length was solution annealed and cooled correctly. It tells you nothing about metal beside a weld made later on site. Where that matters, [304L seamless pipe](/304l-stainless-steel-seamless-pipe/) is the usual answer.',
            ],
          },
          {
            h3: 'What to send for 304 seamless',
            bullets: [
              'ASTM A312 TP304 SML on one line.',
              'NPS, schedule and metres for each size.',
              'Plain or bevelled ends.',
              'S7, if the intergranular test has to be reported.',
            ],
          },
        ],
        cta: CTA,
      },
    ],
    sources: [A312],
  },
  '304l-stainless-steel-seamless-pipe': {
    updated: U,
    sections: [
      {
        h2: 'Which Seamless Sizes Get the 0.040% Carbon Allowance',
        paragraphs: [
          'A312 holds TP304L to 0.035% carbon. Footnote D to Table 1 relaxes that to 0.040% for small or thin product: an outside diameter under 12.7 mm [0.500 in], or an average wall under 1.20 mm [0.049 in]. Run against the standard seamless sizes, the allowance reaches only the very smallest pipe.',
        ],
        table: {
          caption: 'TP304L carbon limit by size (A312 Table 1 footnote D; ODs and walls from ASME B36.19M)',
          head: ['Size', 'OD (mm)', 'Thinnest listed wall (mm)', 'Carbon max'],
          rows: [
            ['NPS 1/8', '10.29', '1.24 (Sch 10S)', '0.040%, because the OD is under 12.7 mm'],
            ['NPS 1/4', '13.72', '1.65 (Sch 10S)', '0.035%'],
            ['NPS 3/8', '17.15', '1.65 (Sch 10S)', '0.035%'],
            ['NPS 1/2 and up', '21.34 and larger', '1.65 or more', '0.035%'],
            ['Size outside B36.19', 'Under 12.7, or any', 'Under 1.20 average, or any', '0.040% if either condition is met'],
          ],
        },
        subsections: [
          {
            h3: 'Why the L only counts once it is shown',
            paragraphs: [
              'For low-carbon grades, A262 Practice E is run on a sensitized specimen, so a pass speaks for metal that has already seen welding temperatures, which is the reason to buy TP304L at all. The mill runs it only when the order calls up Supplementary Requirement S7. Without S7, the carbon value in the heat analysis on the 3.1 certificate is the record that the pipe is low carbon.',
            ],
          },
          {
            h3: 'What to send for 304L seamless',
            bullets: [
              'ASTM A312 TP304L SML.',
              'Each NPS and schedule, with metres per size.',
              'S7, if your welding procedure or end client needs proof against intergranular attack.',
              'End finish, and passivation if required.',
            ],
          },
        ],
        cta: CTA,
      },
    ],
    sources: [A312],
  },
  '316-stainless-steel-seamless-pipe': {
    updated: U,
    sections: [
      {
        h2: 'Where the Over Tolerance Changes on 316 Seamless',
        paragraphs: [
          'From NPS 3 upward, Table 3 of A312 sets the allowance above nominal wall by the ratio of wall to outside diameter, t/D. Up to 5% it is +22.5%; above 5% it is +15.0%. The minus side stays at −12.5% throughout. Seamless pipe is also limited indirectly by the weight tolerance of ASTM A999. Since t/D depends on schedule as well as size, one schedule can sit on different sides of the 5% line.',
        ],
        table: {
          caption: 'TP316 seamless, NPS 3 to 12: t/D and the wall that complies (A312 Table 3; walls from ASME B36.19M)',
          head: ['NPS', 'Sch 40S t/D (over)', 'Sch 40S range (mm)', 'Sch 10S t/D (over)', 'Sch 10S range (mm)'],
          rows: [
            ['3', '6.18% (+15.0)', '4.80 to 6.31', '3.43% (+22.5)', '2.67 to 3.74'],
            ['4', '5.27% (+15.0)', '5.27 to 6.92', '2.67% (+22.5)', '2.67 to 3.74'],
            ['6', '4.23% (+22.5)', '6.22 to 8.71', '2.02% (+22.5)', '2.98 to 4.17'],
            ['8', '3.73% (+22.5)', '7.16 to 10.02', '1.72% (+22.5)', '3.29 to 4.61'],
            ['10', '3.39% (+22.5)', '8.11 to 11.36', '1.53% (+22.5)', '3.67 to 5.13'],
            ['12', '2.94% (+22.5)', '8.34 to 11.67', '1.41% (+22.5)', '4.00 to 5.60'],
          ],
        },
        subsections: [
          {
            h3: 'Reading the table',
            paragraphs: [
              'Sch 40S crosses the 5% line between NPS 4 and NPS 6, so an NPS 6 Sch 40S length may legitimately carry more extra metal, relative to nominal, than an NPS 4 one. Sch 10S stays below 5% at every size shown. Metal on the plus side adds weight, which matters if you buy by the metre and check by the kilogram; the [weight calculator](/weight-calculator/) gives the nominal figure. Why TP316 is picked over 304 is covered by the PREN comparison on the [316 pipe page](/316-stainless-steel-pipe/).',
            ],
          },
          {
            h3: 'What to send for 316 seamless',
            bullets: [
              'ASTM A312 TP316 SML.',
              'NPS and schedule for each line item, since together they decide the tolerance band.',
              'Metres per size, and plain or bevelled ends.',
              'Passivation, if the line needs it.',
            ],
          },
        ],
        cta: CTA,
      },
    ],
    sources: [A312],
  },
  '316l-stainless-steel-seamless-pipe': {
    updated: U,
    sections: [
      {
        h2: 'What Each Record Proves for 316L Seamless',
        paragraphs: [
          'Three records travel with a 316L seamless length: the heat analysis on the EN 10204 3.1 certificate, the PMI result taken on the length itself, and the SML marking. Each one proves different things, and none proves everything. Knowing which record answers which question tells you what to check, and where to look.',
        ],
        table: {
          caption: 'TP316L seamless: what each record can show',
          head: ['To prove', '3.1 heat analysis', 'PMI by XRF', 'PMI by OES', 'Marking and certificate'],
          rows: [
            ['Cr, Ni and Mo content', 'Yes, for the heat', 'Yes, on the length', 'Yes, on the length', 'No'],
            ['Carbon (the L)', 'Yes, for the heat', 'No: XRF does not read carbon', 'Yes, on the length', 'No'],
            ['Seamless manufacture', 'No', 'No', 'No', 'Yes: SML marked and stated'],
            ['Link to the heat', 'Heat number', 'Not by itself', 'Not by itself', 'Heat number on each length'],
          ],
        },
        subsections: [
          {
            h3: 'What this means when checking 316L',
            paragraphs: [
              'PMI separates 316L from 304L by molybdenum, which the usual instruments all read. Separating 316L from 316 is a carbon question, and only an OES reading or the heat analysis settles it. The certificate\'s carbon figure is the one to compare with 0.035%, or 0.040% where footnote D applies to very small or thin sizes. Sakshi Forge, Mumbai, runs PMI on every length and supplies the 3.1 certificate traced to the heat number, so both records come with the pipe.',
            ],
          },
          {
            h3: 'What to send for 316L seamless',
            bullets: [
              'ASTM A312 TP316L SML.',
              'Each NPS and schedule, with metres per size.',
              'S7, if the intergranular test must be run; for TP316L it is done on a sensitized specimen.',
              'End finish, and passivation if needed.',
            ],
          },
        ],
        cta: CTA,
      },
    ],
    sources: [A312],
  },
  'stainless-steel-pipes/ss-seamless-pipes': {
    updated: U,
    sections: [
      {
        h2: 'Heat Analysis or Product Analysis',
        paragraphs: [
          'Every A312 pipe comes with a heat analysis, the chemistry of the heat of steel it was made from. Section 8 adds a second check, product analysis, made only at the purchaser\'s request. It is taken from one billet or one length of flat-rolled stock from each heat, or from two pipes in each lot.',
          'For this purpose a lot is the lengths of one size and wall from one heat, and how many lengths it may hold depends on NPS:',
        ],
        table: {
          caption: 'Lot size for product analysis, ASTM A312 section 8.1',
          head: ['NPS', 'Lengths per lot', 'Pipes analysed per lot'],
          rows: [
            ['Under 2', '400 or fraction thereof', '2'],
            ['2 to 5', '200 or fraction thereof', '2'],
            ['6 and over', '100 or fraction thereof', '2'],
          ],
        },
        subsections: [
          {
            h3: 'A worked example',
            paragraphs: [
              'Take 1,000 m of NPS 4 from one heat, in 6 m lengths: 167 lengths. That is under 200, so it forms one lot and two pipes are analysed. The same metres in NPS 1 are still one lot, being under 400. In NPS 8 they make two lots, 100 lengths and 67, so four pipes are analysed.',
            ],
          },
          {
            h3: 'If one analysis fails',
            paragraphs: [
              'Section 8.3 lets each billet or pipe from that heat or lot be analysed on its own, and those that conform are accepted. Results of product analysis are reported to the purchaser (section 8.2).',
            ],
          },
          {
            h3: 'Asking for product analysis',
            bullets: [
              'Write "product analysis per ASTM A312 section 8" on the enquiry.',
              'Give lengths per size, so the number of lots is clear from the start.',
              'Grade and SML against each line item.',
            ],
            paragraphs: [
              'How A312 treats seamless forming, finishing and annealing is set out on the [seamless pipe page](/stainless-steel-seamless-pipe/).',
            ],
          },
        ],
        cta: CTA,
      },
    ],
    sources: [A312],
  },
  'stainless-steel-pipes/ss-welded-pipes': {
    updated: U,
    sections: [
      {
        h2: 'WLD and HCW: The Two Welded Forms in A312',
        paragraphs: [
          'ASTM A312 recognises two kinds of welded pipe. WLD pipe is welded by an automatic process with no filler metal. HCW pipe starts the same way but is then heavily cold worked before its final anneal. The table puts the two side by side.',
        ],
        table: {
          caption: 'WLD and HCW pipe under ASTM A312/A312M-24',
          head: ['Requirement', 'WLD', 'HCW'],
          rows: [
            ['Welding', 'Automatic, no filler metal', 'Automatic, no filler metal'],
            ['Weld radiography', 'Not called for by the WLD clause', '100% before cold working, to ASME BPVC Section VIII Division 1, UW-51'],
            ['Cold work', 'None required', 'At least 35% reduction in thickness of both wall and weld'],
            ['Final heat treatment', 'Table 2; 1040 °C minimum for 304, 304L, 316 and 316L', 'Table 2, after the cold work'],
            ['Longitudinal seams', 'One up to NPS 14; above that, one, or two sections if the purchaser approves', 'Same rule'],
            ['Sizes', 'ASME B36.19, or others meeting every other requirement', 'The same (section 1.4)'],
            ['Marking code', 'WLD', 'HCW'],
          ],
        },
        subsections: [
          {
            h3: 'Naming the welded pipe you need',
            paragraphs: [
              'ERW and EFW are trade names for how a seam is fused. Under A312 what counts is that the weld is automatic and adds no filler metal; pipe made that way is WLD, whatever the trade name. Pipe welded with filler metal falls outside A312 and is bought to a different standard, such as ASTM A358 for electric-fusion-welded stainless pipe. Sakshi Forge, Mumbai, quotes welded pipe to ASTM A312.',
              'If a specification calls for HCW, write HCW on the enquiry: it is a separate product form with its own marking. The seam and weld-area rules for WLD pipe are explained on the [SS ERW pipe page](/ss-erw-pipes/).',
            ],
          },
          {
            h3: 'What to send for welded pipe',
            bullets: [
              'ASTM A312, the grade, and WLD (or HCW, where specified).',
              'NPS and schedule for every line item.',
              'Metres per size, end finish, and passivation if needed.',
            ],
          },
        ],
        cta: CTA,
      },
    ],
    sources: [A312],
  },
};
