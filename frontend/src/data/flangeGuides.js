// Page-specific guides for the ten flange-type pages, merged into FITTING_GUIDES and rendered by ProductPage.
// Each page's FAQs live in its FAQs field in products.json so the FAQPage schema matches the page.
// Standards opened and checked 2026-11-28 on asme.org: B16.5 (scope, classes, plate for blinds), B16.36 (orifice
// flange coverage), B16.48 (line blanks), B16.9 (stub ends; MSS SP-43 for low-pressure corrosion-resistant fittings),
// B1.20.1 (NPT). Bores are pipe OD minus twice the wall from the pipe schedule chart (ASME B36.19M values).

const CTA = { label: 'Request a flange quotation', href: '/contact-us/' };

export const FLANGE_GUIDES = {
  'flanges/weld-neck-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'Why a Weld Neck Flange Has a Tapered Hub',
        paragraphs: [
          'A weld neck flange is joined to the pipe by a full-penetration butt weld at the end of a long tapered hub. The taper carries bending and thermal stress gradually from the flange ring into the pipe wall, which is why this type is the usual choice for high pressure, high or cycling temperature and lines that see vibration.',
          'Because the joint is a butt weld, it can be examined by radiography or ultrasonic testing like any other pipe weld. A slip-on or socket-weld flange is attached with fillet welds, which are checked on the surface only.',
        ],
      },
      {
        h2: 'Weld Neck Bore by Pipe Schedule (mm)',
        paragraphs: [
          'The bore of a weld neck flange is machined to the inside diameter of the pipe it meets, so the flow sees no step at the weld. That makes the pipe schedule part of the flange order: an NPS 4 flange bored for Sch 10S has a bore about 6 mm larger than one bored for Sch 40S.',
        ],
        table: {
          caption: 'Pipe OD and the matching weld neck bore for stainless schedules 10S, 40S and 80S (mm)',
          head: ['NPS', 'Pipe OD', 'Bore, Sch 10S', 'Bore, Sch 40S', 'Bore, Sch 80S'],
          rows: [
            ['2', '60.33', '54.79', '52.51', '49.25'],
            ['2-1/2', '73.03', '66.93', '62.71', '59.01'],
            ['3', '88.90', '82.80', '77.92', '73.66'],
            ['4', '114.30', '108.20', '102.26', '97.18'],
            ['6', '168.28', '161.48', '154.06', '146.34'],
            ['8', '219.08', '211.56', '202.72', '193.68'],
            ['10', '273.05', '264.67', '254.51', '247.65'],
            ['12', '323.85', '314.71', '304.79', '298.45'],
          ],
        },
      },
      {
        h2: 'Reading the Bore Table',
        paragraphs: [
          'Each bore is the pipe outside diameter minus twice the wall from the [pipe schedule chart](/pipe-schedule-chart/). A small mismatch can be taken up by tapering the thicker side before welding, but a flange bored for the wrong schedule leaves a ledge that traps product and spoils drainage.',
          'Outside diameter, bolt circle and holes do not depend on the bore; they come from ASME B16.5 for the class. See the [flange dimension chart](/flange-dimension-chart/) for Class 150 values.',
        ],
      },
      {
        h2: 'Weld Neck Flange RFQ Checklist',
        bullets: [
          'NPS, pressure class and the pipe schedule the bore must match, for example NPS 4 Class 300 bored Sch 40S.',
          'Facing: raised face (RF) or ring-type joint (RTJ), and any face-finish requirement.',
          'Grade: ASTM A182 F304, F304L, F316 or F316L.',
          'Quantity per size, and the EN 10204 3.1 certificate traced to heat number with PMI on every piece.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/slip-on-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'How a Slip-On Flange Is Fitted',
        paragraphs: [
          'A slip-on flange slides over the outside of the pipe and is held by two fillet welds: one around the back of the hub and one inside the bore. The pipe end is stopped short of the flange face so that the inner weld stays clear of the gasket seating surface.',
          'Sliding the flange along the pipe makes final alignment easy, and the flange needs no hub taper, so it is lighter and quicker to fit than a [weld neck flange](/flanges/weld-neck-flanges/). The trade-off is that two fillet welds are less able to resist fatigue than one butt weld, and they can only be inspected on the surface.',
        ],
      },
      {
        h2: 'What Each Flange Type Needs to Fit the Pipe',
        paragraphs: [
          'A slip-on flange is the one type whose bore does not depend on the pipe schedule; it only has to pass over the pipe OD. The table shows what else must be stated for each sibling type.',
        ],
        table: {
          caption: 'Pipe-side detail to state on the order, by flange type',
          head: ['Flange type', 'How it joins the pipe', 'State on the order'],
          rows: [
            ['Slip-on', 'Two fillet welds, pipe inside the bore', 'NPS and class; bore fits the pipe OD'],
            ['Weld neck', 'Butt weld at the hub end', 'Pipe schedule, so the bore matches the pipe ID'],
            ['Socket weld', 'Pipe in a socket, one fillet weld', 'Pipe schedule for the bore beyond the socket'],
            ['Threaded', 'Taper pipe thread, no weld', 'Thread form, NPT to ASME B1.20.1'],
            ['Lap joint', 'Loose; the stub end is welded', 'Stub end type and schedule'],
          ],
        },
      },
      {
        h2: 'Where Slip-On Flanges Are and Are Not Used',
        paragraphs: [
          'Slip-on flanges are common on cooling water, utility and low-pressure process lines, and wherever field fit-up is easier with a flange that can be slid into position. Many project piping specifications restrict them in cyclic, high-temperature or toxic service and call for weld neck flanges instead, so check the line class before ordering.',
        ],
      },
      {
        h2: 'Slip-On Flange RFQ Checklist',
        bullets: [
          'NPS, ASME B16.5 class and facing (raised face or flat face).',
          'Pipe OD if the pipe is not to the standard NPS series.',
          'Grade: ASTM A182 F304, F304L, F316 or F316L, matched to the pipe.',
          'Quantity, and whether a 3.1 certificate traced to heat number is needed for each heat.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/blind-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'What a Blind Flange Does',
        paragraphs: [
          'A blind flange is a solid disc drilled to the same bolt pattern as the pipe flange it closes. It seals the end of a line, a spare vessel nozzle or a branch left for a future tie-in, and it is the usual closure for a hydrostatic test section.',
          'With no bore, a blind carries line pressure across its whole face and bends like a loaded plate. It is solid all the way through, so its weight climbs quickly with size.',
        ],
      },
      {
        h2: 'Forged or Plate: Material Forms ASME B16.5 Allows',
        paragraphs: [
          'ASME B16.5 limits flanges to cast or forged material, with one exception: blind flanges, and certain reducing flanges, may also be made from plate. The two routes use different ASTM material specifications, so the specification on the order decides which one is supplied.',
        ],
        table: {
          caption: 'Stainless blind flange material forms and their ASTM specifications',
          head: ['Material form', 'ASTM specification', 'Grades in this range', 'Note'],
          rows: [
            ['Forged', 'A182', 'F304, F304L, F316, F316L', 'The default for B16.5 flanges'],
            ['Plate', 'A240', '304, 304L, 316, 316L', 'Allowed by B16.5 for blinds; state it if accepted'],
          ],
        },
      },
      {
        h2: 'Before You Order a Blind',
        bullets: [
          'Match the class of the mating flange exactly. A Class 150 and a Class 300 blind of the same NPS have different bolt circles; see the [flange bolt chart](/flange-bolt-chart/).',
          'Match the facing too: a raised-face blind against a flat-face cast-iron or lined nozzle can crack the mating flange when the bolts are tightened.',
          'For a temporary closure that will be swapped often, compare a [spectacle blind](/flanges/spectacle-blind-flanges/), which stays in the line.',
        ],
      },
      {
        h2: 'Blind Flange RFQ Checklist',
        bullets: [
          'NPS, class and facing of the flange being closed.',
          'Material form: forged A182, or plate A240 if your specification allows it.',
          'Grade and quantity per size.',
          'Documents: EN 10204 3.1 certificate traced to heat number, PMI on every piece.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/socket-weld-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'Socket Weld Flanges for Small-Bore Lines',
        paragraphs: [
          'A socket weld flange has a counterbore that the pipe end sits in, and it is attached with a single fillet weld around the outside of the hub. It is used on small-bore lines where a butt weld would be hard to make and inspect, such as instrument, sample, drain and chemical-dosing lines.',
          'Before the fillet is laid, the pipe is backed off from the bottom of the socket to leave a small expansion gap; ASME B31.3 shows about 1.5 mm. Butting the pipe hard against the shoulder lets the weld crack as it cools and heats in service.',
        ],
      },
      {
        h2: 'Pipe OD and Bore at the Socket, NPS 1/2 to 3 (mm)',
        paragraphs: [
          'The socket accepts the pipe OD, but the bore beyond it is sized to the pipe ID, so the schedule still has to be stated. A flange bored for Sch 80S on a Sch 40S pipe leaves a step of roughly 1 to 2 mm all round.',
        ],
        table: {
          caption: 'Pipe outside diameter and the matching bore beyond the socket, Sch 40S and Sch 80S (mm)',
          head: ['NPS', 'Pipe OD (socket fit)', 'Bore for Sch 40S', 'Bore for Sch 80S'],
          rows: [
            ['1/2', '21.34', '15.80', '13.88'],
            ['3/4', '26.67', '20.93', '18.85'],
            ['1', '33.40', '26.64', '24.30'],
            ['1-1/4', '42.16', '35.04', '32.46'],
            ['1-1/2', '48.26', '40.90', '38.10'],
            ['2', '60.33', '52.51', '49.25'],
            ['2-1/2', '73.03', '62.71', '59.01'],
            ['3', '88.90', '77.92', '73.66'],
          ],
        },
      },
      {
        h2: 'The Crevice at the Socket Bottom',
        paragraphs: [
          'The expansion gap stays inside the finished joint as a crevice between pipe end and socket. In clean utility service that does not matter; in chloride-bearing water or where the line must be cleaned to a hygienic standard, the crevice can hold liquid and corrode, and a butt-welded joint is the better choice.',
        ],
      },
      {
        h2: 'Socket Weld Flange RFQ Checklist',
        bullets: [
          'NPS, ASME B16.5 class and facing.',
          'Pipe schedule, so the bore beyond the socket matches the pipe ID.',
          'Grade: ASTM A182 F304L or F316L are the usual low-carbon choices for welded joints.',
          'Quantity and the 3.1 certificate requirement.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/threaded-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'When a Threaded Flange Is the Right Joint',
        paragraphs: [
          'A threaded flange screws onto a pipe with a taper pipe thread, so it can be fitted without welding. It suits areas where hot work needs a permit or is not allowed, small utility lines, and connections that may be dismantled later.',
          'Thread engagement is a weaker joint than a weld and can leak under vibration or thermal cycling. Piping codes limit threaded joints in cyclic and some hazardous services; where a threaded flange is allowed in such a line, it is often seal-welded after make-up.',
        ],
      },
      {
        h2: 'NPT Threads per Inch by Size (ASME B1.20.1)',
        paragraphs: [
          'Threaded flanges to ASME B16.5 are tapped with an NPT thread to ASME B1.20.1. The thread pitch changes with size, which is the first thing to check if a pipe will not start in a flange.',
        ],
        table: {
          caption: 'NPT thread pitch and pipe outside diameter by nominal size',
          head: ['NPS', 'Threads per inch (NPT)', 'Pipe OD (mm)'],
          rows: [
            ['1/2', '14', '21.34'],
            ['3/4', '14', '26.67'],
            ['1', '11.5', '33.40'],
            ['1-1/4', '11.5', '42.16'],
            ['1-1/2', '11.5', '48.26'],
            ['2', '11.5', '60.33'],
            ['2-1/2', '8', '73.03'],
            ['3', '8', '88.90'],
            ['4', '8', '114.30'],
          ],
        },
      },
      {
        h2: 'Making Up a Stainless Threaded Joint',
        bullets: [
          'Threading removes wall, so a thin stainless schedule such as 10S is not normally threaded; Sch 40S or 80S pipe is used under threaded flanges.',
          'Stainless threads can gall when tightened dry. Use a thread sealant or anti-seize compound that is approved for stainless steel and for the fluid.',
          'A BSP taper thread (ISO 7-1) has a different thread angle and will not seal in an NPT flange; state the thread form on every order.',
        ],
      },
      {
        h2: 'Threaded Flange RFQ Checklist',
        bullets: [
          'NPS, ASME B16.5 class and facing.',
          'Thread form: NPT to ASME B1.20.1 unless otherwise stated.',
          'Grade: ASTM A182 F304 or F316 to suit the pipe.',
          'Quantity and certificate requirement.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/lap-joint-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'A Two-Part Joint: Stub End and Loose Flange',
        paragraphs: [
          'A lap joint flange is never welded. It slides over a stub end, a short pipe piece with a flared lap that is butt-welded to the line, and it clamps the lap against the gasket when the bolts are tightened. The flange can turn on the pipe, so bolt holes line up with a pump or vessel nozzle without rotating the pipework.',
          'Only the stub end is wetted. On a stainless line, specifiers sometimes choose a different material for the backing flange than for the stub end; state the material of each part separately on the enquiry.',
        ],
      },
      {
        h2: 'Parts of a Lap Joint and the Standard for Each',
        paragraphs: [
          'Stub ends come in two lengths. Long ones are made to ASME B16.9, which points to MSS SP-43 for low-pressure, corrosion-resistant butt-welding fittings; short stub ends are made to SP-43. The flange itself is to ASME B16.5.',
        ],
        table: {
          caption: 'Lap joint assembly: what each part is, whether it touches the fluid and its standard',
          head: ['Part', 'Wetted?', 'Standard', 'Specify'],
          rows: [
            ['Long stub end', 'Yes', 'ASME B16.9', 'NPS, schedule, grade'],
            ['Short stub end', 'Yes', 'MSS SP-43', 'NPS, schedule, grade'],
            ['Lap joint flange', 'No', 'ASME B16.5', 'NPS, class, material'],
            ['Gasket', 'Yes, at the lap face', 'To the line specification', 'Bore matched to the stub end'],
          ],
        },
      },
      {
        h2: 'Where Lap Joints Help',
        bullets: [
          'Lines that are taken apart often for inspection or cleaning, since the flange can be rotated and reused.',
          'Equipment connections where bolt-hole orientation is not known until installation.',
          'Long stub ends leave room to cut and re-weld later; short ones save length on compact skids. The EP versions are on the [long stub end](/electropolished-pipe-fittings/electropolished-long-stub-end/) and [short stub end](/electropolished-pipe-fittings/electropolished-short-stub-end/) pages.',
        ],
      },
      {
        h2: 'Lap Joint Flange RFQ Checklist',
        bullets: [
          'NPS and ASME B16.5 class of the flange.',
          'Stub end: long (B16.9) or short (MSS SP-43), pipe schedule and grade.',
          'Material of the backing flange if it differs from the stub end.',
          'Quantity of flanges and of stub ends, and the certificate requirement for each.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/orifice-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'What an Orifice Flange Pair Is For',
        paragraphs: [
          'Orifice flanges are supplied in pairs and hold an orifice plate between them to measure flow by differential pressure. Each flange has radial tapped holes through the ring for the pressure connections, so the pressure is taken right at the faces of the plate. Jackscrews are usually fitted so that the pair can be pushed apart to inspect or change the plate.',
        ],
      },
      {
        h2: 'Types and Classes Covered by ASME B16.36',
        paragraphs: [
          'ASME B16.36 covers flanges similar to those in B16.5 but with orifice pressure-differential connections. Its coverage is limited to the types and classes below.',
        ],
        table: {
          caption: 'ASME B16.36 orifice flange coverage by type and pressure class',
          head: ['Flange type', 'Classes covered'],
          rows: [
            ['Welding neck', '300, 400, 600, 900, 1500, 2500'],
            ['Slip-on', '300'],
            ['Threaded', '300'],
          ],
        },
      },
      {
        h2: 'Reading the Coverage',
        paragraphs: [
          'There is no Class 150 orifice flange in B16.36. Since an orifice pair is welded to the pipe on both sides and bolts only to itself, Class 300 orifice flanges are commonly used in Class 150 lines; the piping designer confirms this for each meter run.',
          'Welding neck is the only type covered above Class 300, and it is the usual choice because its bore matches the pipe and no pipe end or fillet weld sits close to the plate.',
        ],
      },
      {
        h2: 'Orifice Flange RFQ Checklist',
        bullets: [
          'NPS, B16.36 class and type (welding neck, slip-on or threaded).',
          'Pipe schedule for the bore of welding neck flanges.',
          'Facing (raised face or ring-type joint) and whether jackscrews are required.',
          'Grade, number of pairs, and the 3.1 certificate requirement.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/long-weld-neck-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'A Weld Neck With a Barrel Instead of a Hub',
        paragraphs: [
          'A long weld neck (LWN) flange replaces the short tapered hub of a standard weld neck with a long, straight barrel. The barrel acts as the nozzle neck, so the flange can be welded straight into the shell of a vessel, column or heat exchanger without a separate nozzle pipe.',
          'The flange end takes its bolting from ASME B16.5 for the class, so it mates with a standard flange. The barrel length and bore are not fixed by that table; they come from the equipment drawing or nozzle data sheet.',
        ],
      },
      {
        h2: 'Nozzle Data to Send for a Long Weld Neck',
        table: {
          caption: 'Long weld neck flange: data the quotation needs and why',
          head: ['Item', 'Why it is needed'],
          rows: [
            ['NPS and class', 'Sets the flange OD, thickness and bolt pattern'],
            ['Overall length', 'Barrel length from face to weld end, from the nozzle drawing'],
            ['Bore', 'Decides the barrel wall, which the vessel designer has checked for pressure'],
            ['Barrel style', 'As named on the drawing, for example heavy barrel or equal barrel'],
            ['Facing', 'Raised face or ring-type joint, to match the mating flange'],
            ['Grade', 'ASTM A182 F304, F304L, F316 or F316L, to match the shell'],
          ],
        },
      },
      {
        h2: 'Common Uses',
        bullets: [
          'Nozzles on pressure vessels, distillation columns and reactors.',
          'Heat exchanger channel nozzles, where the barrel takes the place of a pipe and weld neck flange.',
        ],
      },
      {
        h2: 'Long Weld Neck RFQ Checklist',
        bullets: [
          'The nozzle drawing or data sheet, with every dimension in the table above.',
          'Number of pieces per size and length.',
          'EN 10204 3.1 certificate traced to heat number and PMI on every piece; any extra inspection your vessel code requires.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/spectacle-blind-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'How a Spectacle Blind Shows the Line State',
        paragraphs: [
          'A spectacle blind, also called a figure-8 blank, is a solid disc and a ring joined by a web. It sits permanently between two flanges. Turned to the solid side, it isolates the line positively; turned to the ring side, it lets flow pass while the gap between the flanges stays the same, so the piping does not need re-spooling.',
          'Whichever half is not in the line hangs outside the flanges, so anyone on the plant floor can see at a glance whether the line is open or blinded. That is why spectacle blinds are used for isolation during maintenance and at battery limits.',
        ],
      },
      {
        h2: 'Scope of ASME B16.48 Line Blanks',
        table: {
          caption: 'What ASME B16.48 covers for operational line blanks',
          head: ['Item', 'ASME B16.48 coverage'],
          rows: [
            ['Sizes', 'NPS 1/2 through NPS 24'],
            ['Pressure classes', '150, 300, 600, 900, 1500 and 2500'],
            ['Installation', 'Between ASME B16.5 flanges'],
            ['Requirements', 'Pressure-temperature ratings, materials, dimensions, tolerances, marking and testing'],
          ],
        },
      },
      {
        h2: 'Points to Check',
        bullets: [
          'Class 400 is not in the B16.48 list, so a Class 400 line needs its blank specified separately.',
          'The blank thickness adds to the gap between the flanges; allow for it, and for two gaskets, on the isometric.',
          'At larger sizes a figure-8 becomes heavy to swing; [paddle blanks and spacers](/flanges/paddle-blind-spacer-flanges/) are the alternative.',
        ],
      },
      {
        h2: 'Spectacle Blind RFQ Checklist',
        bullets: [
          'NPS and B16.48 class of the flanges it sits between.',
          'Facing: raised face or ring-type joint, to match the flanges.',
          'Grade, quantity, and the 3.1 certificate requirement.',
        ],
        cta: CTA,
      },
    ],
  },
  'flanges/paddle-blind-spacer-flanges': {
    updated: '2026-11-28',
    sections: [
      {
        h2: 'Paddle Blank and Paddle Spacer: Two Pieces Instead of One',
        paragraphs: [
          'A paddle blank is a solid plate with a handle; a paddle spacer is a ring of the same thickness with a handle. They are used as a pair in place of a figure-8: the blank isolates the line, and the spacer goes in when the line is returned to service, keeping the flange gap the same.',
          'Splitting the figure-8 into two pieces matters at larger sizes, where a one-piece spectacle blind is heavy to swing and needs space around the flanges. Each paddle is lifted out and set aside on its own.',
        ],
      },
      {
        h2: 'Comparing the Three Line Blank Types',
        table: {
          caption: 'Figure-8 blank, paddle blank and paddle spacer compared',
          head: ['Type', 'Shape', 'Line state', 'Visible status'],
          rows: [
            ['Figure-8 (spectacle) blank', 'Disc and ring joined by a web', 'Open or closed by turning it', 'The unused half shows outside the flanges'],
            ['Paddle blank', 'Solid plate with a handle', 'Closed', 'Solid handle; often marked or tagged'],
            ['Paddle spacer', 'Ring with a handle', 'Open', 'Handle often has a hole or notch to tell it from the blank'],
          ],
        },
      },
      {
        h2: 'Standard and Practice',
        paragraphs: [
          'ASME B16.48 covers paddle blanks and spacers as well as figure-8 blanks, for NPS 1/2 through 24 between ASME B16.5 flanges in Classes 150 to 2500 (Class 400 is not listed). Full coverage is set out on the [spectacle blind](/flanges/spectacle-blind-flanges/) page.',
        ],
      },
      {
        h2: 'Paddle Blank and Spacer RFQ Checklist',
        bullets: [
          'NPS and class of the flanges, and whether you need blanks, spacers or matched pairs.',
          'Facing to match the flanges, and the handle marking your plant uses.',
          'Grade, quantity, and EN 10204 3.1 certificate traced to heat number.',
        ],
        cta: CTA,
      },
    ],
  },
};
