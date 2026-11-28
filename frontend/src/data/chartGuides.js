// Own text and tables for the four chart pages, rendered by CategoryGuide.
// Class 150 flange values: ASME B16.5 (inch values converted to mm). Pipe walls: ASME B36.10M / B36.19M
// as tabulated on https://en.wikipedia.org/wiki/Nominal_Pipe_Size (read 2026-11-28).
const PIPE_SOURCE = 'https://en.wikipedia.org/wiki/Nominal_Pipe_Size';

const CLASS_150 = [
  // NPS, OD, bolt circle, bolts, hole dia (mm), bolt dia (in)
  ['1/2', '89', '60.3', '4', '15.9', '1/2'],
  ['3/4', '98', '69.8', '4', '15.9', '1/2'],
  ['1', '108', '79.4', '4', '15.9', '1/2'],
  ['1-1/4', '117', '88.9', '4', '15.9', '1/2'],
  ['1-1/2', '127', '98.4', '4', '15.9', '1/2'],
  ['2', '152', '120.6', '4', '19.0', '5/8'],
  ['2-1/2', '178', '139.7', '4', '19.0', '5/8'],
  ['3', '190', '152.4', '4', '19.0', '5/8'],
  ['4', '229', '190.5', '8', '19.0', '5/8'],
  ['6', '279', '241.3', '8', '22.2', '3/4'],
  ['8', '343', '298.5', '8', '22.2', '3/4'],
  ['10', '406', '362.0', '12', '25.4', '7/8'],
  ['12', '483', '431.8', '12', '25.4', '7/8'],
];

const RFQ = {
  h2: 'What to Put in a Flange RFQ',
  bullets: [
    'Standard and pressure class, for example ASME B16.5 Class 150.',
    'Type and facing: weld neck, slip-on, blind or socket weld; raised face or ring joint.',
    'NPS, and for weld neck flanges the bore schedule of the pipe it is welded to.',
    'Material grade, for example ASTM A182 F316L or ASTM A105.',
    'Quantity, and whether an EN 10204 3.1 certificate traced to the heat number is required.',
  ],
};

export const CHART_GUIDES = {
  'flange-dimension-chart': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'ASME B16.5 Class 150 Flange Dimensions',
        paragraphs: [
          'Outside diameter, bolt circle and bolt holes are the dimensions that decide whether two flanges bolt together. In ASME B16.5 they are the same for weld neck, slip-on, socket weld and blind flanges of the same size and class, so one table serves all four types. Thickness and hub length do change with the type, which is why they are not shown here.',
        ],
        table: {
          caption: 'ASME B16.5 Class 150: outside diameter, bolt circle and bolt holes (mm)',
          head: ['NPS', 'Flange OD', 'Bolt circle', 'No. of holes', 'Hole dia'],
          rows: CLASS_150.map(([nps, od, pcd, n, hole]) => [nps, od, pcd, n, hole]),
        },
      },
      {
        h2: 'Reading the Table',
        paragraphs: [
          'Bolt circle (PCD) is the diameter through the centres of the bolt holes. A Class 150 and a Class 300 flange of the same NPS have different bolt circles and hole counts, so they do not mate even when the bore matches. Check the class on both sides of a joint before ordering.',
          'Values above are Class 150 only. Class 300, 600, 900, 1500 and 2500 flanges are larger and heavier for the same NPS; send the class and size and the quotation gives the dimensions for that class. Bolt sizes for these flanges are on the [flange bolt chart](/flange-bolt-chart/).',
        ],
      },
      RFQ,
    ],
  },
  'flange-bolt-chart': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'ASME B16.5 Class 150 Bolt Size and Quantity',
        paragraphs: [
          'In ASME B16.5 each bolt hole is 1/8 in larger than the bolt that goes through it. The bolt diameter below follows from the hole size in the Class 150 table; the number of bolts equals the number of holes.',
        ],
        table: {
          caption: 'ASME B16.5 Class 150: bolts per flange, hole diameter (mm) and bolt diameter (in)',
          head: ['NPS', 'Bolts', 'Hole dia (mm)', 'Bolt dia (in)', 'Bolt circle (mm)'],
          rows: CLASS_150.map(([nps, , pcd, n, hole, bolt]) => [nps, n, hole, bolt, pcd]),
        },
      },
      {
        h2: 'Stud Length and Bolt Torque',
        paragraphs: [
          'Stud length is not a fixed number per size. It depends on the flange thickness of both flanges, the facing (raised face or ring joint), the gasket thickness and the nuts, so it is worked out from the joint drawing.',
          'There is no single torque value per bolt size either. The torque that gives the right bolt load depends on the bolt material, the lubricant and the gasket. Plants usually follow their own bolting procedure or ASME PCC-1, the guideline for bolted flange joint assembly.',
          'Flange outside diameters for the same sizes are on the [flange dimension chart](/flange-dimension-chart/).',
        ],
      },
      RFQ,
    ],
  },
  'flange-weight-chart': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'Approximate Flange Weight by Class',
        paragraphs: [
          'These weights are approximate and are given only to compare sizes and classes, for example when planning lifting or freight. The actual weight depends on the flange type, the facing and the bore, and is stated on the quotation and the packing list.',
        ],
        table: {
          caption: 'Approximate flange weight (kg) by NPS and ASME B16.5 class',
          head: ['NPS', 'Class 150', 'Class 300', 'Class 600'],
          rows: [
            ['1/2', '0.9', '1.4', '1.8'], ['3/4', '1.2', '1.8', '2.4'], ['1', '1.4', '2.3', '3.0'],
            ['1-1/4', '1.8', '3.0', '4.1'], ['1-1/2', '2.3', '3.6', '5.2'], ['2', '3.2', '4.5', '7.3'],
            ['2-1/2', '4.5', '6.8', '10.5'], ['3', '5.2', '8.2', '13.2'], ['4', '7.5', '13.0', '21.0'],
            ['6', '11.0', '21.0', '37.0'], ['8', '18.0', '34.0', '61.0'], ['10', '26.0', '52.0', '92.0'],
            ['12', '40.0', '78.0', '132.0'],
          ],
        },
      },
      {
        h2: 'Why Weight Rises So Fast With Class',
        paragraphs: [
          'A higher class needs a thicker flange, a larger outside diameter and more or larger bolts for the same NPS. At 4 in the table shows about 7.5 kg for Class 150 against 21 kg for Class 600, close to three times as much. For a rough total, multiply the weight by the number of flanges and add the bolts and gaskets.',
          'Pipe weights per metre are worked out on the [weight calculator](/weight-calculator/).',
        ],
      },
      RFQ,
    ],
  },
  'pipe-schedule-chart': {
    updated: '2026-11-28',
    sources: [PIPE_SOURCE],
    sections: [
      {
        h2: 'Pipe Schedule Chart: Wall Thickness by NPS (mm)',
        paragraphs: [
          'The outside diameter of a pipe is fixed by its nominal pipe size (NPS); the schedule sets the wall, and so the bore. Schedules with an S (5S, 10S, 40S, 80S) are the stainless steel series of ASME B36.19M. Schedules 10, 40, 80 and 160 and the weights STD, XS and XXS are in ASME B36.10M.',
        ],
        table: {
          caption: 'Pipe OD and wall thickness (mm) to ASME B36.10M and B36.19M',
          head: ['NPS', 'OD', 'Sch 5S', 'Sch 10S', 'Sch 40S / STD', 'Sch 40', 'Sch 80S / XS', 'Sch 80', 'Sch 160', 'XXS'],
          rows: [
            ['1/2', '21.34', '1.65', '2.11', '2.77', '2.77', '3.73', '3.73', '4.78', '7.47'],
            ['3/4', '26.67', '1.65', '2.11', '2.87', '2.87', '3.91', '3.91', '5.56', '7.82'],
            ['1', '33.40', '1.65', '2.77', '3.38', '3.38', '4.55', '4.55', '6.35', '9.09'],
            ['1-1/4', '42.16', '1.65', '2.77', '3.56', '3.56', '4.85', '4.85', '6.35', '9.70'],
            ['1-1/2', '48.26', '1.65', '2.77', '3.68', '3.68', '5.08', '5.08', '7.14', '10.16'],
            ['2', '60.33', '1.65', '2.77', '3.91', '3.91', '5.54', '5.54', '8.74', '11.07'],
            ['2-1/2', '73.03', '2.11', '3.05', '5.16', '5.16', '7.01', '7.01', '9.53', '14.02'],
            ['3', '88.90', '2.11', '3.05', '5.49', '5.49', '7.62', '7.62', '11.13', '15.24'],
            ['4', '114.30', '2.11', '3.05', '6.02', '6.02', '8.56', '8.56', '13.49', '17.12'],
            ['6', '168.28', '2.77', '3.40', '7.11', '7.11', '10.97', '10.97', '18.26', '21.95'],
            ['8', '219.08', '2.77', '3.76', '8.18', '8.18', '12.70', '12.70', '23.01', '22.23'],
            ['10', '273.05', '3.40', '4.19', '9.27', '9.27', '12.70', '15.09', '28.58', '-'],
            ['12', '323.85', '3.96', '4.57', '9.53', '10.31', '12.70', '17.45', '33.32', '-'],
          ],
        },
      },
      {
        h2: 'Sch 40 Is Not Always Sch 40S',
        paragraphs: [
          'Up to NPS 8, Sch 40S, STD and Sch 40 give the same wall, and so do Sch 80S, XS and Sch 80. From NPS 10 they split: at NPS 10, Sch 80 is 15.09 mm against 12.70 mm for 80S; at NPS 12, Sch 40 is 10.31 mm against 9.53 mm for 40S. A drawing that says "Sch 40" at 12 in calls for a heavier pipe than one that says "40S", so the two must not be swapped on a purchase order.',
          'XXS is thicker than Sch 160 up to NPS 6, but at NPS 8 it is thinner (22.23 against 23.01 mm). The dash at NPS 10 and 12 means the value is not in the source table used here.',
        ],
      },
      {
        h2: 'Which Schedules Are Used for Stainless and EP Pipe',
        paragraphs: [
          'Stainless process pipe to ASTM A312 is mostly ordered in Sch 5S, 10S and 40S, because the corrosion allowance that drives heavy carbon steel walls is not needed. Sch 10S is a common wall for electropolished pipe. Wall with mass per metre for 5S to 80S is on the [EP pipe size chart](/resources/ep-pipe-size-chart/), and any size can be worked out on the [weight calculator](/weight-calculator/).',
        ],
        bullets: [
          'For the RFQ, state NPS and schedule (for example NPS 2 Sch 10S), the standard (ASTM A312), the grade (TP316L) and, for EP pipe, the internal finish (SF1 or SF4).',
        ],
      },
    ],
  },
};
