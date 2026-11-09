// Page-specific guides for electropolished fitting pages, rendered by ProductPage through CategoryGuide.
// Each page's FAQs live in its FAQs field in products.json so the FAQPage schema matches the page.
// Facts are standard references (ASME BPE, ASME B16.9/B16.11, MSS SP-43/83/95/97, AWS D18.1) and
// the company facts the owner has confirmed (3.1 certificate, PMI, Ra report per electropolished lot).

export const FITTING_GUIDES = {
  "electropolished-pipe-fittings/electropolished-elbow": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Choosing the Angle and Radius of an Electropolished Elbow",
        "paragraphs": [
          "An elbow is the most common fitting in a hygienic tube system and the one most often bought wrongly. Hygienic elbows to ASME BPE are made from tube with straight tangents at each end, so the orbital weld head can clamp on a straight section and the weld sits away from the bend. A fabricated short-radius elbow without tangents puts the weld in the bend, where it is hardest to make and inspect.",
          "Choose the angle for the route, not for convenience: a [90° elbow](/electropolished-pipe-fittings/electropolished-90-degree-elbow/) for a right-angle turn, a [45° elbow](/electropolished-pipe-fittings/electropolished-45-degree-elbow/) where a gentler change of direction keeps a line draining, and a [180° return bend](/electropolished-pipe-fittings/electropolished-180-degree-return-bend/) for coils and U-turns in heat-exchange and sampling loops."
        ]
      },
      {
        "h2": "Where Elbows Cause Problems in Hygienic Lines",
        "bullets": [
          "Drainage: on a sloped line, an elbow turned slightly upward leaves a pocket of liquid after CIP. Check the orientation of every elbow against the slope on the isometric.",
          "Weld bead: the bore at the tangent weld must be as smooth as the fitting; inspect it with a borescope rather than trusting the fitting finish.",
          "Mixed series: an inch ASME BPE elbow does not fit DIN 11850 or SMS tube. Order elbows in the same dimension series as the tube.",
          "Finish: the electropolished bore of the elbow should match the line, for example SF4 throughout a WFI loop."
        ]
      },
      {
        "h2": "Ordering Electropolished Elbows",
        "bullets": [
          "Angle, tube OD and wall, and dimension series (ASME BPE, DIN 11850 or ISO 1127).",
          "End type: orbital weld tangent, or clamp ferrule ends for removable sections.",
          "Grade (316L or 304L) and internal finish, for example Ra 0.38 µm.",
          "Documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an elbow quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-90-degree-elbow": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "The 90° Elbow in a Hygienic Tube System",
        "paragraphs": [
          "A 90° electropolished elbow turns a tube line through a right angle. In ASME BPE systems it is made from tube with straight weld tangents and a defined centreline radius, so it fits the same orbital weld heads and clamp ferrules as the tube. The internal finish is electropolished to the same designation as the line, typically Ra 0.38 µm (SF4) in water-for-injection and pure-steam service.",
          "Ninety-degree turns are where flow separates and where deposits form first if a line is under-velocity during cleaning. A smooth electropolished bore through the bend reduces the surface area that holds residue and makes discolouration easy to see on a borescope."
        ]
      },
      {
        "h2": "Installation Points for 90° Elbows",
        "bullets": [
          "Vertical drops: a 90° elbow at the bottom of a vertical leg should feed a line that falls to drain, never one that rises.",
          "Close-coupled elbows: two 90° elbows welded back to back without a straight piece leave no room for the weld head; keep at least the tangent lengths between welds.",
          "Supports: support the line within a short distance of each elbow so the weld at the tangent is not loaded.",
          "Where a gentler turn would keep the line draining, use a [45° elbow](/electropolished-pipe-fittings/electropolished-45-degree-elbow/) instead."
        ]
      },
      {
        "h2": "What to Specify",
        "bullets": [
          "Tube OD, wall and dimension series, matched to your tube.",
          "End connection: orbital weld tangent or clamp ferrule.",
          "Grade and internal Ra, and whether the OD is polished.",
          "Documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a 90° elbow quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-tee": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Equal and Reducing Tees in Hygienic Systems",
        "paragraphs": [
          "An electropolished tee splits or joins flow at 90°. An equal tee has three ports of the same size; a [reducing tee](/electropolished-pipe-fittings/electropolished-reducing-tee/) has a smaller branch, typically for a sample point, instrument or drop to a use point. In ASME BPE tube systems tees are made with weld tangents on all ports so each joint can be orbital welded.",
          "The engineering problem with any tee is the branch that is closed while the main line flows. Liquid in a closed branch does not move during operation or cleaning, and that stagnant pocket is the classic dead leg."
        ]
      },
      {
        "h2": "Keeping the Branch Short: the Dead-Leg Rule",
        "paragraphs": [
          "ASME BPE expresses dead legs as a ratio of branch length to branch diameter, L/D, and recommends keeping it at 2 or less for product-contact systems. In practice that means choosing a tee with the shortest branch that still leaves room for the weld or clamp, and mounting valves directly on the tee rather than on a spool. For instrument connections a short-outlet [instrument tee](/electropolished-pipe-fittings/electropolished-instrument-tee/) keeps L/D low.",
          "Orientation matters too: on a horizontal header, a branch pointing up traps gas and one pointing down traps liquid; the right choice depends on what the branch carries and how it drains."
        ]
      },
      {
        "h2": "Ordering Electropolished Tees",
        "bullets": [
          "Run and branch OD and wall, in one dimension series.",
          "Branch length if your dead-leg calculation needs a short outlet.",
          "End types on each port (weld tangent or clamp ferrule).",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a tee quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-reducing-tee": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Where a Reducing Tee Is Used",
        "paragraphs": [
          "A reducing tee takes a smaller branch off a larger run. In a purified-water or WFI loop it is the usual fitting for a use point, a sample valve or a drop to equipment; in a CIP header it feeds a smaller supply line. Because the branch is smaller than the run, the velocity in the main line sweeps the branch entrance during circulation, which helps keep a short branch clean.",
          "In ASME BPE dimensional tables reducing tees are listed by run and branch OD, with weld tangents on each port. Order them in the same dimension series as the tube and confirm that the branch wall matches the branch tube."
        ]
      },
      {
        "h2": "Design Checks Before Ordering",
        "bullets": [
          "Dead leg: keep the closed branch at an L/D of 2 or less by mounting the use-point valve directly on the tee.",
          "Velocity: a run sized for normal flow but too large for CIP leaves the branch entrance poorly swept; check the run size against the cleaning flow.",
          "Branch orientation: point use-point branches downward or horizontally so they drain to the valve.",
          "Finish continuity: the branch bore should carry the same electropolished finish as the run."
        ]
      },
      {
        "h2": "Ordering Reducing Tees",
        "bullets": [
          "Run OD x branch OD, with walls for each.",
          "Dimension series and end types.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a reducing tee quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-cross": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "When a Cross Is the Right Fitting",
        "paragraphs": [
          "A cross joins four lines at one point. In hygienic piping it is used sparingly, because every port that is closed during operation becomes a potential dead leg and a four-way junction is harder to drain than a tee. Typical uses are CIP distribution manifolds, spray-device feeds and test or instrument manifolds where several connections must sit close together.",
          "Where only three connections are needed, a [tee](/electropolished-pipe-fittings/electropolished-tee/) is the better choice. Where four are needed, a cross keeps the weld count down compared with two tees welded back to back."
        ]
      },
      {
        "h2": "Design Points for Crosses",
        "bullets": [
          "Orientation: install so that at least one port is the low point and drains the body.",
          "Dead legs: every port that can be closed must be kept short, as for a tee branch.",
          "Cleaning: confirm that CIP flow reaches all four ports; a port that only sees flow when its valve is open needs its own cleaning step."
        ]
      },
      {
        "h2": "Ordering Electropolished Crosses",
        "bullets": [
          "OD and wall of each port, in one dimension series.",
          "End types (weld tangent or clamp ferrule).",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a cross quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-concentric-reducer": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Concentric or Eccentric: Choosing by Line Orientation",
        "paragraphs": [
          "A concentric reducer changes tube size along a common centreline. It is the right choice on vertical lines and at pump discharges, where symmetry matters and drainage is by gravity down the line. On a horizontal line, a concentric reducer leaves a step at the bottom of the larger tube that holds liquid after draining; there an [eccentric reducer](/electropolished-pipe-fittings/electropolished-eccentric-reducer/), installed with the flat side down, keeps the line drainable.",
          "In ASME BPE systems, reducers have weld tangents at both ends and are listed by large OD x small OD. The electropolished bore should match the finish of the tube on both sides."
        ]
      },
      {
        "h2": "Common Mistakes",
        "bullets": [
          "Using a concentric reducer on a horizontal product line, leaving a pool behind the step.",
          "Reducing by two or more sizes in one fitting where a standard reducer for that pair does not exist, and then fabricating a cone with an internal weld.",
          "Ordering reducers in a different dimension series from the tube on one side."
        ]
      },
      {
        "h2": "Ordering Concentric Reducers",
        "bullets": [
          "Large OD x small OD and walls.",
          "Dimension series and end types.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a reducer quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-eccentric-reducer": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Why Hygienic Horizontal Lines Use Eccentric Reducers",
        "paragraphs": [
          "An eccentric reducer has one flat side in line with the wall of both tubes. Installed flat side down on a horizontal line, it gives a continuous bottom with no step, so the line drains completely after CIP. That makes it the standard size change on sloped product, purified-water and CIP lines.",
          "The same fitting installed flat side up is used at pump suctions on process lines to avoid trapping air at the top. Hygienic lines usually prioritise drainage, so mark the orientation on the isometric and check it at installation."
        ]
      },
      {
        "h2": "Installation Checks",
        "bullets": [
          "Flat side down for drainability on sloped horizontal lines; flat side up only where air entrapment is the concern.",
          "Keep the line slope continuous through the reducer; a reducer turned off-vertical by a few degrees creates a small pocket.",
          "For vertical lines, use a [concentric reducer](/electropolished-pipe-fittings/electropolished-concentric-reducer/) instead."
        ]
      },
      {
        "h2": "Ordering Eccentric Reducers",
        "bullets": [
          "Large OD x small OD and walls.",
          "Dimension series and end types.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an eccentric reducer quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-end-cap": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "What an Electropolished End Cap Does",
        "paragraphs": [
          "A weld end cap closes the end of a tube permanently. In a hygienic system it is used to terminate a header that may be extended later, to close a drain stub or to make up a test piece. Because it closes a line for good, it should be placed where the closed end is swept by flow or drains completely, otherwise it is a dead end.",
          "Where the end must be opened for inspection or future connection, a clamp ferrule with a [blind cap](/electropolished-pipe-fittings/electropolished-blind-cap/) is easier to work with than a welded cap that must be cut off."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "Location: avoid capped ends on branches that see no flow during CIP.",
          "Orientation: on a sloped header, the capped end should be the high end only if the header drains the other way.",
          "Weld: the cap is orbital welded to the tube end; check the weld bead with a borescope from the open side before it is closed in."
        ]
      },
      {
        "h2": "Ordering End Caps",
        "bullets": [
          "Tube OD and wall, dimension series.",
          "Grade and internal finish.",
          "Documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an end cap quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-tri-clover-clamp": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "How a Tri-Clover Clamp Joint Works",
        "paragraphs": [
          "A tri-clover (tri-clamp) joint has four parts: two [clamp ferrules](/electropolished-pipe-fittings/electropolished-clamp-ferrule/) welded to the tube ends, a gasket between them and the clamp that pulls the ferrule flanges together. Ferrule dimensions are standardised in ASME BPE, DIN 32676 and ISO 2852, and a clamp must match the ferrule standard and size.",
          "The clamp itself does not touch the product; the ferrule bore and the gasket do. The clamp is usually supplied polished on the outside; what matters inside the line is that the gasket finishes flush with the ferrule bore."
        ]
      },
      {
        "h2": "Choosing Clamp Type and Gasket",
        "bullets": [
          "Single-pin hinged clamps with a wing nut suit joints opened often; double-pin and bolted high-pressure clamps suit larger sizes and higher pressures. Pressure rating depends on clamp type, size and temperature, so check it for your duty.",
          "Gasket material follows the chemistry: EPDM for hot water and caustic, FKM where fats and oils are present, PTFE where chemical resistance matters, with controlled compression because PTFE cold-flows.",
          "Over-tightening pushes the gasket into the bore and creates a ledge; under-tightening leaves a crevice. Both trap product."
        ]
      },
      {
        "h2": "Ordering Clamps",
        "bullets": [
          "Ferrule standard and size (ASME BPE, DIN 32676 or ISO 2852).",
          "Clamp type and pressure and temperature duty.",
          "Gasket material, so the clamp and ferrule suit the joint.",
          "Ferrules and clamps from the same standard in one order."
        ],
        "cta": {
          "label": "Request a clamp quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-clamp-ferrule": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "The Clamp Ferrule: Where a Hygienic Joint Is Made or Lost",
        "paragraphs": [
          "A clamp ferrule is the weld-on end that makes a tube line removable. It is welded to the tube, and two ferrules are joined over a gasket by a [tri-clover clamp](/electropolished-pipe-fittings/electropolished-tri-clover-clamp/). The ferrule bore is product contact, so it is electropolished to the same finish as the tube and must line up with the tube bore at the weld.",
          "Ferrule face dimensions are set by ASME BPE, DIN 32676 and ISO 2852. These are not interchangeable: the groove and flange diameters differ, so a ferrule must match its mating ferrule, gasket and clamp."
        ]
      },
      {
        "h2": "Selecting a Ferrule",
        "bullets": [
          "Weld-end length: longer ferrules give the orbital weld head room to clamp; short ferrules suit manual welding or tight spaces.",
          "Bore match: the ferrule bore must equal the tube bore, so order it for your tube OD and wall.",
          "Gasket flushness: the gasket inner edge should finish flush with the ferrule bore; a step either way holds product.",
          "Closing a ferrule: use a [blind cap](/electropolished-pipe-fittings/electropolished-blind-cap/) clamped over a gasket."
        ]
      },
      {
        "h2": "Ordering Clamp Ferrules",
        "bullets": [
          "Ferrule standard and size, and tube OD x wall it welds to.",
          "Weld-end length (short or long).",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a ferrule quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-blind-cap": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Blanking a Clamp Connection",
        "paragraphs": [
          "A blind cap (clamp end cap) closes a [clamp ferrule](/electropolished-pipe-fittings/electropolished-clamp-ferrule/) with a gasket and a clamp. It is used on spare ports of vessels and manifolds, on future connections and on line ends that must be opened for inspection or cleaning. Unlike a welded [end cap](/electropolished-pipe-fittings/electropolished-end-cap/), it can be removed and refitted.",
          "The face of a blind cap that sits inside the joint is product contact. It should carry the same finish as the ferrule bore, and the gasket must be the correct size so it does not protrude into the line."
        ]
      },
      {
        "h2": "Using Blind Caps Well",
        "bullets": [
          "A blanked port on a vessel or manifold is a dead leg; keep the ferrule short and include the blind cap in the cleaning procedure.",
          "Some blind caps are drilled and tapped for an instrument or vent; specify that instead of adding an adapter.",
          "Match the cap to the ferrule standard (ASME BPE, DIN 32676 or ISO 2852)."
        ]
      },
      {
        "h2": "Ordering Blind Caps",
        "bullets": [
          "Ferrule standard and size.",
          "Plain or drilled and tapped (state thread).",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a blind cap quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-stub-end": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Stub Ends and Lap-Joint Flanges",
        "paragraphs": [
          "A stub end is welded to the pipe or tube and seats against a gasket; a loose lap-joint flange slides behind it and carries the bolts. Only the stub end touches the fluid, so it can be in electropolished 316L while the backing flange is in a cheaper material. The loose flange also rotates, which makes bolt-hole alignment easy at equipment nozzles.",
          "Two patterns are made. [Long stub ends](/electropolished-pipe-fittings/electropolished-long-stub-end/) follow ASME B16.9; [short stub ends](/electropolished-pipe-fittings/electropolished-short-stub-end/) follow MSS SP-43 and are used where space is limited. The mating flange is normally to ASME B16.5."
        ]
      },
      {
        "h2": "Where Stub Ends Fit in a Hygienic Plant",
        "bullets": [
          "Connections to pumps, heat exchangers and vessels with flanged nozzles.",
          "Larger pipe-size lines where clamp joints are not practical.",
          "The joint is only as hygienic as the gasket seating: the gasket bore should match the stub end bore and the face finish should suit the gasket."
        ]
      },
      {
        "h2": "Ordering Stub Ends",
        "bullets": [
          "Pipe or tube size and wall, long or short pattern.",
          "Mating flange standard and class.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a stub end quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-lateral-tee": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Why Use a 45° Lateral Instead of a Tee",
        "paragraphs": [
          "A lateral tee joins a branch at 45° instead of 90°. The angled entry reduces turbulence and pressure loss where two flows merge, and it is gentler on products that should not be sheared or that carry solids, such as fruit pulps, slurries and viscous sauces. It is also used on gravity drain and powder transfer lines where a 90° junction would cause build-up.",
          "The trade-off is length and drainage. A lateral is longer than a tee, and its branch must be installed so that it falls towards the run; a lateral branch that rises leaves a pocket."
        ]
      },
      {
        "h2": "Selection and Installation",
        "bullets": [
          "Use laterals where flows merge in the direction of flow; use a [tee](/electropolished-pipe-fittings/electropolished-tee/) where a branch takes flow off the main line.",
          "Check that CIP flow reaches the branch; a lateral branch closed during CIP is a dead leg like any other.",
          "Keep the weld tangents on all ports for orbital welding."
        ]
      },
      {
        "h2": "Ordering Lateral Tees",
        "bullets": [
          "Run and branch OD and walls.",
          "Dimension series and end types.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a lateral tee quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-45-degree-elbow": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Where a 45° Elbow Beats a 90°",
        "paragraphs": [
          "A 45° electropolished elbow changes direction by half a right angle. It is used to offset a line around an obstruction, to bring a branch into a header at an angle, and to keep a line falling to drain where a 90° turn followed by a rise would leave a pocket. Two 45° elbows make a gentler offset than two 90° elbows, with lower pressure loss and less disturbance to shear-sensitive products.",
          "Like other ASME BPE elbows, it has straight tangents at both ends for orbital welding, and its bore is electropolished to match the line."
        ]
      },
      {
        "h2": "Layout Notes",
        "bullets": [
          "Offsets: the length of an offset made with two 45° elbows depends on the elbow tangents; check it on the isometric before cutting tube.",
          "Drainage: a 45° offset in a sloped line must keep falling in the direction of drain.",
          "For a full right-angle turn, use a [90° elbow](/electropolished-pipe-fittings/electropolished-90-degree-elbow/)."
        ]
      },
      {
        "h2": "Ordering 45° Elbows",
        "bullets": [
          "Tube OD, wall and dimension series.",
          "End type (weld tangent or clamp ferrule).",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a 45° elbow quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-180-degree-return-bend": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Return Bends in Coils, Exchangers and Sample Loops",
        "paragraphs": [
          "A 180° return bend turns a line back on itself in one fitting. In hygienic plants it is used to build serpentine heating and cooling coils, tube-in-tube heat exchangers, holding tubes in pasteurisers and compact sample and recirculation loops. A one-piece return bend replaces two 90° elbows and a weld, leaving one fewer joint to inspect in a run that is often hard to reach.",
          "The bore is electropolished to the line finish. In a heat-exchange service, where product sees a temperature change, a smooth bore also slows fouling."
        ]
      },
      {
        "h2": "Drainage and Orientation",
        "bullets": [
          "A return bend in a horizontal plane drains if the line is sloped; one installed in a vertical plane with its curve at the bottom holds liquid unless a drain is provided at the low point.",
          "In holding tubes, check that the bend radius and length are included in the holding-time calculation.",
          "Allow for the bend tangents when setting coil pitch."
        ]
      },
      {
        "h2": "Ordering Return Bends",
        "bullets": [
          "Tube OD, wall and centre-to-centre dimension.",
          "End types and dimension series.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a return bend quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-instrument-tee": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Short-Outlet Tees for Instruments",
        "paragraphs": [
          "An instrument tee has a short branch sized for a pressure, temperature or conductivity sensor. The short outlet keeps the sensor close to the flowing stream, which gives a representative reading and keeps the branch within the dead-leg limit that a standard tee branch can exceed. In WFI and purified-water loops this is where conductivity, TOC and temperature sensors are usually mounted.",
          "The branch normally ends in a clamp ferrule so the instrument can be removed for calibration."
        ]
      },
      {
        "h2": "Selection Checks",
        "bullets": [
          "Insertion depth: the sensor tip should sit in the flowing stream, not in the branch.",
          "Dead leg: with the instrument fitted, the remaining branch should stay within L/D 2.",
          "Orientation: mount horizontally or below the run on liquid lines so the branch does not trap gas over the sensor.",
          "Instrument connection: match the ferrule size to the instrument process connection."
        ]
      },
      {
        "h2": "Ordering Instrument Tees",
        "bullets": [
          "Run tube OD and wall, branch ferrule size.",
          "Instrument type and insertion length.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an instrument tee quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-instrument-elbow": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Instrument Elbows for Small-Bore Sensor and Sampling Lines",
        "paragraphs": [
          "An instrument elbow is a small-bore electropolished elbow for the tubing that runs to analysers, sample coolers and instrument manifolds. These lines are 1/4\" to 1\" OD, carry small flows and are easily contaminated by a rough or crevice-ridden bend. A formed elbow with tangents keeps the bore continuous and lets the joint be orbital welded.",
          "In purified-water and WFI systems, sample lines feed conductivity and TOC analysers; a smooth, short sample path gives a faster, more representative reading."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "Wall: small tube is thin; match the elbow wall to the tube so the weld lines up.",
          "Length: keep sample runs short and falling to the analyser or drain.",
          "Bends on site: hand-bent small tube can wrinkle or flatten; a formed elbow avoids this."
        ]
      },
      {
        "h2": "Ordering Instrument Elbows",
        "bullets": [
          "Tube OD and wall, angle.",
          "End type.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an instrument elbow quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-long-stub-end": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Long Pattern Stub Ends (ASME B16.9)",
        "paragraphs": [
          "A long stub end follows the length given in ASME B16.9. The longer barrel leaves room to make the butt weld clear of the lap and to fit a loose flange that has been slid on before welding. It is the usual choice for new piping where space is not tight and where the stub end may be cut and re-welded later.",
          "In an electropolished line, the barrel bore and the lap face that seats the gasket are both product contact, so both carry the electropolished finish."
        ]
      },
      {
        "h2": "Long or Short?",
        "bullets": [
          "Long (ASME B16.9): more room for welding and inspection; standard for most new work.",
          "Short (MSS SP-43): compact, for tight spaces and skid-mounted equipment. See [short stub ends](/electropolished-pipe-fittings/electropolished-short-stub-end/).",
          "Both mate with an ASME B16.5 lap-joint flange of the required class."
        ]
      },
      {
        "h2": "Ordering Long Stub Ends",
        "bullets": [
          "Pipe or tube size and wall.",
          "Mating flange class.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a long stub end quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-short-stub-end": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Short Pattern Stub Ends (MSS SP-43)",
        "paragraphs": [
          "A short stub end follows MSS SP-43. Its shorter barrel saves length at equipment nozzles and on compact skids where a long stub end would not fit. It is welded to the line and seats against a gasket, with a loose lap-joint flange behind it carrying the bolts.",
          "Because the barrel is short, the butt weld sits close to the lap. Check that the welding method and inspection can reach it, and that the loose flange is on the pipe before welding."
        ]
      },
      {
        "h2": "When to Choose the Short Pattern",
        "bullets": [
          "Pump and exchanger nozzles where the overall length is fixed.",
          "Skid-mounted equipment with tight piping envelopes.",
          "Where space is not limited, a [long stub end](/electropolished-pipe-fittings/electropolished-long-stub-end/) is easier to weld and inspect."
        ]
      },
      {
        "h2": "Ordering Short Stub Ends",
        "bullets": [
          "Pipe or tube size and wall.",
          "Mating flange class.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a short stub end quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-union": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Threaded and Socket-Weld Unions versus Hygienic Unions",
        "paragraphs": [
          "A union lets a line be broken without turning the pipe. Forged threaded and socket-weld unions are covered by MSS SP-83 in Class 3000 and 6000. They are used on utility, instrument-air, drain and chemical lines where a joint must be opened for maintenance.",
          "Product-contact lines in dairies and food plants use hygienic unions instead, such as SMS and DIN 11851 unions, or clamp joints. These are designed to leave no thread in contact with product. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Choosing a Union",
        "bullets": [
          "Utilities and chemicals: MSS SP-83 threaded or socket-weld union, electropolished where a clean bore is wanted.",
          "Dairy and food product lines: an SMS or DIN 11851 union, or a [clamp joint](/electropolished-pipe-fittings/electropolished-tri-clover-clamp/).",
          "Check the seat type and the seal material against the fluid and temperature."
        ]
      },
      {
        "h2": "Ordering Unions",
        "bullets": [
          "Type (MSS SP-83 threaded or socket-weld, or hygienic union standard) and size.",
          "Class and thread form (NPT or BSPT) where applicable.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a union quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-swage-nipple": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Swage Nipples (MSS SP-95)",
        "paragraphs": [
          "A swage nipple reduces pipe size over a short length and is covered by MSS SP-95. It is made concentric or eccentric, with plain, bevelled or threaded ends in combinations such as both ends plain, both ends threaded, or one large end plain and the small end threaded. It is used to step down to an instrument, valve or drain connection.",
          "In tube systems, size changes are normally made with [concentric](/electropolished-pipe-fittings/electropolished-concentric-reducer/) or [eccentric](/electropolished-pipe-fittings/electropolished-eccentric-reducer/) reducers; swage nipples belong on pipe-size utility and process lines."
        ]
      },
      {
        "h2": "Specifying End Combinations",
        "bullets": [
          "State the end on each side, for example large end plain, small end threaded NPT.",
          "Concentric for vertical runs and instrument drops; eccentric where a flat bottom is needed for drainage.",
          "Schedule of each end to match the pipe it joins."
        ]
      },
      {
        "h2": "Ordering Swage Nipples",
        "bullets": [
          "Large x small size, schedule of each end.",
          "Concentric or eccentric, and end types.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a swage nipple quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-half-coupling": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Half Couplings as Weld-On Branch Connections",
        "paragraphs": [
          "A half coupling is a forged coupling with one end threaded or socket-welded, welded onto a pipe or vessel wall to make a small branch connection. Forged half couplings are covered by ASME B16.11. They are used for thermowells, gauges, vents and drains on utility headers and vessels.",
          "The weld around the outside of the half coupling and the hole cut in the run leave an inside edge that is hard to finish smooth. On a hygienic product line a short-outlet [instrument tee](/electropolished-pipe-fittings/electropolished-instrument-tee/) or a clamp ferrule branch gives a cleaner bore. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Installation Notes",
        "bullets": [
          "Cut the run hole to the coupling bore and deburr it; a ragged hole is a crevice.",
          "Socket-weld half couplings need the usual gap at the socket bottom before welding.",
          "Check the pressure class (3000 or 6000) against the line."
        ]
      },
      {
        "h2": "Ordering Half Couplings",
        "bullets": [
          "Size, class and end (threaded NPT/BSPT or socket weld).",
          "Run size it is welded to, if contoured.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a half coupling quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-coupling": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Full Couplings: Joining Two Pipes in Line",
        "paragraphs": [
          "A coupling joins two pipes end to end in a straight line. Forged threaded and socket-weld couplings are covered by ASME B16.11, in Class 3000 and 6000 for threaded and socket-weld service. They are used on small-bore utility, instrument and chemical lines.",
          "In hygienic tube systems, straight joints are made by orbital welding the tube directly or with clamp ferrules, so couplings belong on the utility side. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Selection Notes",
        "bullets": [
          "Threaded couplings need a thread sealant compatible with the fluid; socket-weld couplings avoid sealant but leave a socket crevice.",
          "Where two different sizes must be joined, use a [reducer coupling](/electropolished-pipe-fittings/electropolished-reducer-coupling/).",
          "Match the class to the line pressure and pipe schedule."
        ]
      },
      {
        "h2": "Ordering Couplings",
        "bullets": [
          "Size, class and end type (NPT, BSPT or socket weld).",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a coupling quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-reducer-coupling": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Reducer Couplings for Small-Bore Size Changes",
        "paragraphs": [
          "A reducer coupling joins two pipes of different nominal sizes in a straight line, with a female thread or socket on each end. It is the compact way to step down a small-bore utility or instrument line, for example from 1\" to 1/2\" at a gauge or valve.",
          "Forged reducer couplings follow ASME B16.11 dimensions for threaded and socket-weld fittings. On hygienic tube lines, size changes are made with welded [concentric reducers](/electropolished-pipe-fittings/electropolished-concentric-reducer/) instead."
        ]
      },
      {
        "h2": "Selection Notes",
        "bullets": [
          "The step inside a reducer coupling does not drain on a horizontal line; place it on vertical drops where possible.",
          "Specify each end separately (thread form or socket).",
          "Match the class to the line rating."
        ]
      },
      {
        "h2": "Ordering Reducer Couplings",
        "bullets": [
          "Large x small size and class.",
          "End types (NPT, BSPT or socket weld).",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a reducer coupling quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-socket": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Socket-Weld Fittings and the Crevice Problem",
        "paragraphs": [
          "A socket-weld fitting receives the pipe end into a socket and is fillet welded around the outside. Before welding, the pipe is withdrawn about 1.6 mm (1/16\") from the socket bottom so the weld does not crack as it cools. That gap stays inside the joint as a crevice.",
          "On high-pressure utility and chemical lines the crevice is acceptable. On a product line cleaned in place it is not, because product collects in the gap and cannot be cleaned or inspected. Hygienic systems use butt-welded tube fittings or clamp joints instead. Socket-weld fittings are covered by ASME B16.11 in Class 3000, 6000 and 9000."
        ]
      },
      {
        "h2": "Where Electropolished Socket-Weld Fittings Make Sense",
        "bullets": [
          "High-purity utility and chemical lines where an electropolished bore reduces particle pick-up, but the line is not cleaned in place.",
          "Instrument and analyser lines in pipe sizes.",
          "Not for product-contact lines that are cleaned in place; use [orbital weld fittings](/electropolished-pipe-fittings/electropolished-orbital-weld-fittings/)."
        ]
      },
      {
        "h2": "Ordering Socket-Weld Fittings",
        "bullets": [
          "Fitting type, size and class.",
          "Pipe schedule.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a socket-weld fitting quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-hex-nipple": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Hex Nipples for Threaded Small-Bore Connections",
        "paragraphs": [
          "A hex nipple has male threads on both ends and a hexagon in the middle, so it can be tightened with a spanner without gripping the threads. It joins two female-threaded fittings close together, for example a valve to a gauge or a fitting to a vessel boss.",
          "Thread forms are NPT (ASME B1.20.1) or BSPT (ISO 7-1). The two are not interchangeable even when the size is the same, so the thread form must be stated with every order. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Selection Notes",
        "bullets": [
          "Hex nipples give a short, rigid connection; for a longer plain body, see [barrel nipples](/electropolished-pipe-fittings/electropolished-barrel-nipple/).",
          "Choose the thread sealant for the fluid and temperature.",
          "Pressure class follows the mating fittings."
        ]
      },
      {
        "h2": "Ordering Hex Nipples",
        "bullets": [
          "Size and thread form (NPT or BSPT) on each end.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a hex nipple quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-barrel-nipple": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Barrel Nipples: Plain-Body Threaded Spacers",
        "paragraphs": [
          "A barrel nipple is a length of pipe threaded male at both ends with a plain body between. It spaces two female-threaded fittings apart, for example to bring a gauge clear of insulation or to reach a valve through a panel. Lengths range from close (thread to thread) to longer spacers cut from pipe.",
          "Because the body is plain, it is tightened with a pipe wrench on the barrel; where wrench marks matter, a [hex nipple](/electropolished-pipe-fittings/electropolished-hex-nipple/) gives a flat for a spanner. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Selection Notes",
        "bullets": [
          "State the overall length and the schedule; a close nipple has very little plain body.",
          "Thread form NPT or BSPT must match both mating fittings.",
          "Electropolishing the bore suits clean utilities such as instrument air and purified-water sampling connections."
        ]
      },
      {
        "h2": "Ordering Barrel Nipples",
        "bullets": [
          "Size, schedule, overall length.",
          "Thread form on each end.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a barrel nipple quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-end-plug": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Threaded Plugs: Head Types and Uses",
        "paragraphs": [
          "A threaded plug closes a female-threaded port. ASME B16.11 covers forged plugs with hexagon, square and round heads. Plugs close spare ports on valves, vessel bosses and test connections, and seal drain and vent points that are opened only during maintenance.",
          "Choose the head for access: a [hex plug](/electropolished-pipe-fittings/electropolished-hex-plug/) takes a spanner or socket, a [square plug](/electropolished-pipe-fittings/electropolished-square-plug/) takes a wrench and has a lower profile in some sizes, and round-head plugs suit ports that are not meant to be opened again. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "Thread form (NPT or BSPT) must match the port.",
          "A plugged port on a process line is a dead leg; plug only where the port can be drained or is outside the cleaned envelope.",
          "Use a sealant suitable for the fluid and temperature."
        ]
      },
      {
        "h2": "Ordering Plugs",
        "bullets": [
          "Size, head type and thread form.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a plug quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-hex-plug": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Hex Head Plugs",
        "paragraphs": [
          "A hex head plug has a hexagon head that takes a spanner or socket, which makes it the easiest threaded plug to remove and refit in a confined space. It is the usual choice for drain and vent ports that are opened during routine maintenance and for test points on utility headers.",
          "Hex plugs are forged to ASME B16.11 and threaded NPT or BSPT. An electropolished plug suits clean utilities, where the face of the plug sits in the flowing line and a smooth surface reduces particle pick-up. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Selection Notes",
        "bullets": [
          "For ports opened rarely or needing a lower profile, see [square plugs](/electropolished-pipe-fittings/electropolished-square-plug/).",
          "Match the thread form to the port; a BSPT plug in an NPT port will not seal reliably.",
          "Do not overtighten tapered threads in thin bosses."
        ]
      },
      {
        "h2": "Ordering Hex Plugs",
        "bullets": [
          "Size and thread form.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a hex plug quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-square-plug": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Square Head Plugs",
        "paragraphs": [
          "A square head plug has a square head turned with an adjustable wrench. It is a traditional pattern for ports that are opened rarely, such as spare vessel bosses and line test connections, and is covered with other forged plugs by ASME B16.11.",
          "Where a port will be opened frequently or in a tight space, a [hex head plug](/electropolished-pipe-fittings/electropolished-hex-plug/) is easier to work with. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Selection Notes",
        "bullets": [
          "State thread form (NPT or BSPT) to match the port.",
          "Check that the head clears insulation and adjacent fittings for wrench access.",
          "Use a sealant compatible with the fluid."
        ]
      },
      {
        "h2": "Ordering Square Plugs",
        "bullets": [
          "Size and thread form.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a square plug quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-bushing": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Threaded Bushings for Port Reduction",
        "paragraphs": [
          "A bushing has a male thread outside and a smaller female thread inside. Screwed into a port, it reduces the port to a smaller size, for example to fit a 1/4\" gauge into a 1/2\" boss. Bushings are made hex head, which takes a spanner, or flush, which sits level with the port face. Forged bushings follow ASME B16.11.",
          "A bushing adds a second threaded joint and a step in the bore. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Selection Notes",
        "bullets": [
          "Thread forms on the outside and inside must match the port and the instrument (NPT or BSPT).",
          "Where several reductions are needed, one [reducer coupling](/electropolished-pipe-fittings/electropolished-reducer-coupling/) may be neater than stacking bushings.",
          "Check the pressure class of the bushing against the port."
        ]
      },
      {
        "h2": "Ordering Bushings",
        "bullets": [
          "Outside x inside size, and thread form of each.",
          "Hex or flush pattern.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a bushing quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-adapter": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Adapters: Joining Two Different Connection Types",
        "paragraphs": [
          "An adapter joins two different end connections in one fitting: a clamp ferrule to a thread, a clamp ferrule to an orbital weld end, or a weld end to a thread. Hygienic plants need them wherever equipment with one connection meets piping with another, most often where an instrument, gauge or valve with a threaded process connection must mount on a clamp-connected line.",
          "The adapter sits at a boundary, so choose it by the side that touches product. The clamp or weld side, which faces the cleaned line, is electropolished; the threaded side carries the instrument. For thread-specific versions see [male adapters](/electropolished-pipe-fittings/electropolished-male-adapter/) and [female adapters](/electropolished-pipe-fittings/electropolished-female-adapter/)."
        ]
      },
      {
        "h2": "Selecting an Adapter",
        "bullets": [
          "Name both ends exactly: ferrule standard and size, thread form and size, or tube OD and wall for a weld end.",
          "Keep the adapter short so the instrument stays close to the flowing stream.",
          "Where a hose meets a line, use a [hose adapter](/electropolished-pipe-fittings/electropolished-hose-adapter/)."
        ]
      },
      {
        "h2": "Ordering Adapters",
        "bullets": [
          "End 1 and end 2, fully specified.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an adapter quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-male-adapter": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Male-Thread Adapters for Instruments and Valves",
        "paragraphs": [
          "A male adapter has a male pipe thread on one end and a clamp ferrule or orbital weld end on the other. It lets a component with a female-threaded port, such as a gauge siphon, a pressure switch or a small valve, connect to a hygienic line, or lets a threaded equipment port receive a clamp connection.",
          "The thread form must match the mating port: NPT (ASME B1.20.1) or BSPT (ISO 7-1). The clamp end must match the line ferrule standard, ASME BPE, DIN 32676 or ISO 2852."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "Which side faces the product: if the threaded side faces product, the connection is not hygienic and needs a different arrangement.",
          "Length: short adapters keep sensors close to the stream.",
          "For a female thread, see [female adapters](/electropolished-pipe-fittings/electropolished-female-adapter/)."
        ]
      },
      {
        "h2": "Ordering Male Adapters",
        "bullets": [
          "Thread form and size; clamp standard and size or tube OD and wall.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a male adapter quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-female-adapter": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Female-Thread Adapters",
        "paragraphs": [
          "A female adapter has a female pipe thread on one end and a clamp ferrule or orbital weld end on the other. It receives instruments and components that come with a male thread, such as many pressure gauges and temperature sensors, and mounts them on a hygienic line.",
          "Instruments with male threads screw into the adapter, so the adapter thread form must match the instrument: NPT or BSPT, with the size stated. The clamp end follows the line ferrule standard."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "Check that the threaded cavity does not face the product stream on a line cleaned in place.",
          "Where a diaphragm seal is used on the instrument, a clamp connection on the instrument removes the need for a threaded adapter altogether.",
          "For a male thread, see [male adapters](/electropolished-pipe-fittings/electropolished-male-adapter/)."
        ]
      },
      {
        "h2": "Ordering Female Adapters",
        "bullets": [
          "Female thread form and size; clamp standard and size or tube OD and wall.",
          "Grade, internal Ra and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a female adapter quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-hose-adapter": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Connecting Hoses to Hygienic Lines",
        "paragraphs": [
          "A hose adapter connects a flexible hose to a rigid hygienic line, usually with a clamp ferrule on the line side and a hose tail or thread on the hose side. Hoses are used for tanker unloading, transfer between mobile vessels, and temporary connections during CIP or start-up.",
          "The hose connection is often the least hygienic point in a transfer. A hose fitted with crimped clamp ends gives a smoother, more cleanable joint than a hose pushed onto a barb and held with a band clip; where a barbed tail is used, see [hose barbs](/electropolished-pipe-fittings/electropolished-hose-barb/)."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "Match the hose bore to the adapter bore to avoid a step at the joint.",
          "Hoses and adapters used for product must be cleaned with the line or by a separate validated procedure.",
          "Check that the hose material suits the product and cleaning chemicals."
        ]
      },
      {
        "h2": "Ordering Hose Adapters",
        "bullets": [
          "Line-side connection (ferrule standard and size).",
          "Hose-side connection (tail size or thread).",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a hose adapter quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-hose-barb": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Hose Barbs: Where They Suit and Where They Do Not",
        "paragraphs": [
          "A hose barb is a ribbed tail that a hose is pushed onto and held with a clip, with a clamp ferrule or thread on the other end. It is a simple, low-cost connection for laboratory lines, sampling, drains, cooling water and other low-pressure duties.",
          "The ribs and the hose end create small crevices that are hard to clean, and the joint relies on the clip for pressure rating. For product transfer that must be cleaned and validated, a [hose adapter](/electropolished-pipe-fittings/electropolished-hose-adapter/) with a crimped hose end is the better choice."
        ]
      },
      {
        "h2": "Selection Notes",
        "bullets": [
          "Size the barb to the hose inside diameter.",
          "Use a clip rated for the duty; do not rely on friction alone.",
          "Keep hose barbs off product lines that are cleaned in place."
        ]
      },
      {
        "h2": "Ordering Hose Barbs",
        "bullets": [
          "Barb size (hose ID) and the other end connection.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a hose barb quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-olet": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Branch Outlet Fittings (Olets) and MSS SP-97",
        "paragraphs": [
          "An olet is a forged branch outlet welded onto a run pipe to make a branch without a tee. MSS SP-97 covers these integrally reinforced fittings with butt-weld, socket-weld and threaded outlets: the [weldolet](/electropolished-pipe-fittings/electropolished-weldolet/), [sockolet](/electropolished-pipe-fittings/electropolished-sockolet/) and [threadolet](/electropolished-pipe-fittings/electropolished-threadolet/), with the [elbolet](/electropolished-pipe-fittings/electropolished-elbolet/) for branches on elbows. They are used on pipe-size headers where a tee would mean cutting the run and adding two welds.",
          "Olets belong to pipe systems built to schedules, such as utility, chemical and high-purity process headers. Thin-wall hygienic tube systems make branches with tees or short-outlet tees instead, because the inside edge of an olet branch hole is hard to finish smooth and drainable."
        ]
      },
      {
        "h2": "Choosing the Olet Type",
        "bullets": [
          "Weldolet: butt-weld branch, for full-strength connections and larger branches.",
          "Sockolet: socket-weld branch, for small-bore lines.",
          "Threadolet: threaded branch, for instruments, vents and drains.",
          "Elbolet: branch on the outside radius of an elbow, typically for thermowells."
        ]
      },
      {
        "h2": "Ordering Olets",
        "bullets": [
          "Run size and schedule; branch size and schedule or thread.",
          "Olet type.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an olet quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-weldolet": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Weldolets: Butt-Weld Branch Outlets",
        "paragraphs": [
          "A weldolet is welded to the run pipe over a hole and has a bevelled butt-weld outlet for the branch pipe. Under MSS SP-97 it is integrally reinforced, so it restores the strength lost by cutting the run without a separate reinforcing pad. It is used for branches smaller than the run on headers in utility and process service.",
          "The branch bore of a weldolet matches the branch pipe schedule. For an electropolished system, the bore and the run hole edge should be finished before electropolishing so the inside of the connection is smooth."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "Weldolets are contoured to the run size; order them for the specific run and branch combination.",
          "Match the branch schedule to the branch pipe.",
          "For small-bore branches, a [sockolet](/electropolished-pipe-fittings/electropolished-sockolet/) or [threadolet](/electropolished-pipe-fittings/electropolished-threadolet/) may be simpler."
        ]
      },
      {
        "h2": "Ordering Weldolets",
        "bullets": [
          "Run size x branch size, and branch schedule.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a weldolet quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-sockolet": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Sockolets: Socket-Weld Branch Outlets",
        "paragraphs": [
          "A sockolet is a branch outlet welded to the run with a socket on the outlet to receive a small-bore branch pipe. It follows MSS SP-97 and is rated by class to match socket-weld fittings. It is used for small branches to instruments, drains and vents on headers.",
          "Like any socket-weld joint, the outlet leaves a small gap at the socket bottom. That crevice makes sockolets unsuitable for product lines that are cleaned in place; they suit utility and chemical headers. See [socket-weld fittings](/electropolished-pipe-fittings/electropolished-socket/) for the crevice issue."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "Order for the run size and branch size; the base is contoured to the run.",
          "Match the class (3000 or 6000) to the branch fittings.",
          "Leave the usual gap at the socket bottom before welding the branch pipe."
        ]
      },
      {
        "h2": "Ordering Sockolets",
        "bullets": [
          "Run size x branch size, class.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a sockolet quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-threadolet": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Threadolets: Threaded Branch Outlets",
        "paragraphs": [
          "A threadolet is welded to the run and has a female threaded outlet. It gives a ready threaded connection for a pressure gauge, a thermowell, a vent or a drain plug on a header, without cutting in a tee. It is covered by MSS SP-97 and rated by class to match threaded fittings.",
          "Threadolets are used on utility, steam and chemical headers. Threads hold product in their roots and cannot be cleaned in place, so threaded connections belong on utilities, instrument and drain connections, not on product-contact lines that are cleaned in place."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "State the thread form (NPT or BSPT) and size to match the instrument or plug.",
          "Order for the run size, as the base is contoured.",
          "Close spare threadolets with a [hex plug](/electropolished-pipe-fittings/electropolished-hex-plug/)."
        ]
      },
      {
        "h2": "Ordering Threadolets",
        "bullets": [
          "Run size x outlet size, thread form and class.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a threadolet quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-elbolet": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Elbolets: Branches on Elbows",
        "paragraphs": [
          "An elbolet is a branch outlet shaped to sit on the outside radius of an elbow. Its most common use is a thermowell or sensor placed in the elbow so the probe points along the flow into the straight run, giving a long immersion length in a small line. It is available with butt-weld, socket-weld or threaded outlets under MSS SP-97.",
          "Because the elbolet is contoured to a specific elbow size and radius, it must be ordered for that elbow. It belongs on pipe-size utility and process lines rather than thin-wall hygienic tube."
        ]
      },
      {
        "h2": "Points to Check",
        "bullets": [
          "State the elbow size and radius (long or short) the elbolet sits on.",
          "Check that the probe length suits the elbow geometry.",
          "For straight-run branches, see the general [olet](/electropolished-pipe-fittings/electropolished-olet/) types."
        ]
      },
      {
        "h2": "Ordering Elbolets",
        "bullets": [
          "Elbow size and radius, outlet size and end type.",
          "Grade, finish and documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an elbolet quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-bpe-fittings": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "What Makes a Fitting an ASME BPE Fitting",
        "paragraphs": [
          "ASME BPE fittings are hygienic tube fittings made to the dimensional tables, tolerances and surface finish designations of the ASME BPE standard. Elbows, tees, reducers, ferrules and caps have straight weld tangents for automatic orbital welding, the bore is finished to a designation such as SF1 (mechanically polished) or SF4 (electropolished, Ra 0.38 µm), and the fitting is marked so it can be traced to its heat.",
          "The point of buying to BPE is interchangeability: a BPE elbow from one source lines up with BPE tube and ferrules from another. See [ASME BPE electropolished tubes](/asme-bpe-electropolished-tubes/) for the finish designations and tube requirements."
        ]
      },
      {
        "h2": "The BPE Fitting Range",
        "bullets": [
          "Direction: [elbows](/electropolished-pipe-fittings/electropolished-elbow/), 45° elbows and [return bends](/electropolished-pipe-fittings/electropolished-180-degree-return-bend/).",
          "Branches: [tees](/electropolished-pipe-fittings/electropolished-tee/), reducing tees, [instrument tees](/electropolished-pipe-fittings/electropolished-instrument-tee/) and crosses.",
          "Size change: concentric and eccentric reducers.",
          "Connections: [clamp ferrules](/electropolished-pipe-fittings/electropolished-clamp-ferrule/), blind caps and end caps."
        ]
      },
      {
        "h2": "Ordering BPE Fittings",
        "bullets": [
          "Fitting type, tube OD and wall.",
          "Surface finish designation for the bore.",
          "Grade and the sulphur range if your weld procedure needs it.",
          "Documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request a BPE fittings quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipe-fittings/electropolished-orbital-weld-fittings": {
    "updated": "2026-11-03",
    "sections": [
      {
        "h2": "Why Hygienic Systems Are Orbital Welded",
        "paragraphs": [
          "Orbital welding uses a weld head that clamps around the tube and rotates the tungsten electrode around the joint under programmed current, speed and gas flow. The result is a repeatable, full-penetration autogenous weld with a smooth inside bead, which is what a hygienic bore needs. AWS D18.1 sets the welding requirements for austenitic stainless steel tube and pipe in sanitary applications.",
          "Orbital weld fittings are made with straight tangents so the head can clamp each side of the joint. They are matched to tube OD and wall so the weld lines up without a step."
        ]
      },
      {
        "h2": "What Makes an Orbital Weld Repeatable",
        "bullets": [
          "Consistent sulphur between heats; ASME BPE limits 316L tube to 0.005 to 0.017 percent so weld penetration does not shift between heats.",
          "Square, burr-free tube ends with matching wall thickness.",
          "Inside purge gas to prevent oxidation and discolouration of the weld.",
          "Weld coupons and borescope inspection of production welds, recorded in the weld log."
        ]
      },
      {
        "h2": "Ordering Orbital Weld Fittings",
        "bullets": [
          "Fitting types and tube OD and wall.",
          "Dimension series and finish designation.",
          "Grade and sulphur range.",
          "Documents: EN 10204 3.1 certificate traced to heat number, PMI record per piece and a measured Ra report for each electropolished lot."
        ],
        "cta": {
          "label": "Request an orbital weld fittings quotation",
          "href": "/contact-us/"
        }
      }
    ]
  },
  "electropolished-pipes/duplex-electropolished-pipe": {
    "updated": "2026-11-09",
    "sections": [
      {
        "h2": "When to choose duplex electropolished pipe over 316L",
        "paragraphs": [
          "Type 316L electropolished pipe is the default for clean process lines, but chlorides are its weak point: pitting, crevice corrosion and chloride stress-corrosion cracking start in warm brine, seawater and chloride-bearing chemicals. Duplex stainless steel combines a ferritic and an austenitic phase, which gives it higher chloride resistance and roughly twice the yield strength of 316L. Electropolishing the bore and outside surface then removes the cold-worked layer and leaves a smooth, chromium-rich passive film that is easier to clean and sterilise.",
          "Resistance to pitting is compared with the Pitting Resistance Equivalent Number, PREN = %Cr + 3.3 × %Mo + 16 × %N. 316L sits at about 24, Duplex 2205 at about 35, and super duplex grades 2507 and S32760 at 40 or more. Typical duties are seawater and brackish-water lines, desalination, offshore topsides, chemical dosing and chloride-bearing process streams. For chloride-free service, [316L electropolished pipe](/ss-316l-electropolished-pipes/) is usually the more economical choice."
        ]
      },
      {
        "h2": "Duplex and super duplex grades",
        "paragraphs": [
          "Chemical composition limits per ASTM A790 / A789 (weight %). Carbon is 0.030% maximum for all four grades."
        ],
        "table": {
          "caption": "Duplex and super duplex grades for electropolished pipe and tube",
          "head": [
            "UNS",
            "Common name",
            "EN number",
            "Cr",
            "Ni",
            "Mo",
            "N",
            "Other"
          ],
          "rows": [
            [
              "S31803",
              "Duplex 2205",
              "1.4462",
              "21.0–23.0",
              "4.5–6.5",
              "2.5–3.5",
              "0.08–0.20",
              "—"
            ],
            [
              "S32205",
              "Duplex 2205",
              "1.4462",
              "22.0–23.0",
              "4.5–6.5",
              "3.0–3.5",
              "0.14–0.20",
              "—"
            ],
            [
              "S32750",
              "Super Duplex 2507",
              "1.4410",
              "24.0–26.0",
              "6.0–8.0",
              "3.0–5.0",
              "0.24–0.32",
              "Cu 0.5 max"
            ],
            [
              "S32760",
              "Super duplex (W, Cu)",
              "1.4501",
              "24.0–26.0",
              "6.0–8.0",
              "3.0–4.0",
              "0.20–0.30",
              "W 0.50–1.00, Cu 0.50–1.00"
            ]
          ]
        },
        "bullets": [
          "S32205 is the tighter, higher-PREN version of 2205; material certified to S32205 normally also meets S31803, but not the other way round. State the UNS number on your enquiry.",
          "Confirm limits against the edition of ASTM A790 / A789 named on your purchase order."
        ]
      },
      {
        "h2": "Mechanical properties compared with 316L",
        "table": {
          "caption": "Minimum tensile properties (ASTM A790 pipe)",
          "head": [
            "Grade",
            "Tensile strength, min",
            "Yield strength, min"
          ],
          "rows": [
            [
              "S31803",
              "620 MPa",
              "450 MPa"
            ],
            [
              "S32205",
              "655 MPa",
              "450 MPa"
            ],
            [
              "S32750",
              "800 MPa",
              "550 MPa"
            ],
            [
              "S32760",
              "750 MPa",
              "550 MPa"
            ],
            [
              "316L (ASTM A312, for comparison)",
              "485 MPa",
              "170 MPa"
            ]
          ]
        },
        "paragraphs": [
          "Duplex grades have more than twice the minimum yield strength of 316L. The higher yield strength lets a designer use a thinner wall for the same pressure rating, which partly offsets the higher cost of the alloy; check the wall against your piping code before reducing it."
        ]
      },
      {
        "h2": "Ferrite balance and ASTM A923 testing",
        "paragraphs": [
          "Duplex properties depend on a roughly equal ferrite–austenite microstructure. Incorrect solution annealing, slow cooling or heavy welding heat input can push the ferrite outside its window or form sigma and other intermetallic phases, typically after exposure in the range of about 600–1000 °C. These phases cut toughness and corrosion resistance without changing the chemistry shown on the mill certificate.",
          "ASTM A923 detects detrimental intermetallic phases: Method A is a metallographic etch screen, Method B a Charpy impact test and Method C a ferric chloride corrosion test. Sakshi Forge provides a ferrite measurement and ASTM A923 test report on request. State the method and your acceptance criteria, including the ferrite range, on the enquiry."
        ]
      },
      {
        "h2": "What comes with every duplex EP pipe lot",
        "bullets": [
          "EN 10204 3.1 certificate traced to the heat number; EN 10204 3.2 on request.",
          "PMI on every length to confirm the grade.",
          "Measured Ra report for each electropolished lot.",
          "Hydrostatic, ultrasonic and dye-penetrant testing.",
          "Third-party inspection by SGS, BV or TUV on request.",
          "Ferrite / ASTM A923 test report on request.",
          "Ends capped and each length sleeved to protect the electropolished surface."
        ],
        "paragraphs": [
          "See [quality assurance](/quality-assurance/) for how inspection and documentation are handled."
        ]
      },
      {
        "h2": "How to get a duplex electropolished pipe quote in 24 hours",
        "paragraphs": [
          "Include these details and you will receive a written quotation within 24 hours:"
        ],
        "bullets": [
          "Grade and UNS number (S31803, S32205, S32750 or S32760).",
          "Product standard: ASTM A790 pipe or ASTM A789 tube; seamless or welded.",
          "Size (1/2\" to 12\"), schedule or wall thickness, and length.",
          "Quantity in metres or lengths.",
          "Electropolished surface: bore, outside or both, and target Ra if you have one.",
          "Documents and tests: 3.1 or 3.2, third-party inspection, ferrite / A923 report."
        ],
        "subsections": [
          {
            "h3": "Related electropolished products",
            "paragraphs": [
              "Compare with [electropolished pipes](/electropolished-pipes/), [electropolished tubes](/electropolished-tubes/), [electropolished seamless pipes](/electropolished-seamless-pipes/) and [low-Ra electropolished pipes](/low-ra-electropolished-pipes/)."
            ]
          }
        ],
        "cta": {
          "label": "Request a duplex EP pipe quotation",
          "href": "/contact-us/"
        }
      }
    ]
  }
};
