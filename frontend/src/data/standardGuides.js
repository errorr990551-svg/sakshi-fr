// Page-specific guides for the EP standards, testing and resources pages (rendered by CategoryGuide
// through SPEC_GUIDES). Standard facts are stated at the level the published standards support;
// company claims are limited to facts confirmed by the owner: Mumbai base, ISO 9001:2015,
// NABL-lab chemical analysis, EN 10204 3.1 certificate traced to heat number, PMI on every length,
// internal Ra report per electropolished lot, quotation within 24 hours, dispatch and transit
// confirmed in writing. No stock, prices, lead times, MOQ or customer claims.

export const STANDARD_GUIDES = {
  '/astm-a312-electropolished-pipes/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "ASTM A312 Is a Pipe Standard: What It Covers",
        paragraphs: [
          "ASTM A312/A312M covers seamless, straight-seam welded and heavily cold-worked welded austenitic stainless steel pipe for high-temperature and general corrosive service. It is a pipe specification in the full sense: product is ordered by nominal pipe size (NPS) and schedule, dimensioned to ASME B36.19M (schedules 5S, 10S, 40S and 80S) or B36.10M for heavier walls, and joined with flanges, buttweld fittings or threaded connections. The common rules on marking, test methods and dimensional tolerances come from the general requirements standard ASTM A999.",
          "A312 is not sanitary tubing, and it says nothing about electropolishing. When a line list asks for \"A312 EP pipe\", two separate requirements are being combined: pipe that meets A312 for chemistry, heat treatment, tests and dimensions, and an electropolished bore whose finish is defined in the purchase order. Most quotation errors on this product come from leaving the second half unwritten."
        ],
        table: {
          caption: "A312 grades we supply electropolished, with the designations buyers meet on drawings",
          head: ["A312 grade", "UNS", "Nearest EN number", "Typical EP pipe use"],
          rows: [
            ["TP304L", "S30403", "1.4307", "Utilities with product contact, purified water at ambient temperature, food and beverage process headers"],
            ["TP316L", "S31603", "1.4404", "Chemical, solvent and chloride-bearing process lines, hot water, CIP supply headers"],
            ["TP304", "S30400", "1.4301", "Non-welded or mechanically joined service where higher carbon is acceptable"],
            ["TP316", "S31600", "1.4401", "Where design stresses are taken from 316; often bought dual-certified 316/316L"]
          ]
        }
      },
      {
        h2: "Seamless, Welded or Heavily Cold-Worked: Choosing the A312 Product Form",
        paragraphs: [
          "A312 allows three manufacturing routes, and the choice changes price, availability by size and how well the bore takes an electropolished finish."
        ],
        subsections: [
          {
            h3: "Seamless (SMLS)",
            paragraphs: [
              "Seamless pipe has no longitudinal weld, so it is the default where an owner's piping class excludes welded pipe, at high pressure, and in cyclic or high-temperature service. The trade-off for EP work is wall eccentricity and a hot-finished or cold-drawn bore that may need more mechanical preparation before electropolishing. Seamless is usually the dearer option in the small and mid sizes."
            ]
          },
          {
            h3: "Welded (WLD)",
            paragraphs: [
              "Welded A312 pipe is formed from strip and welded along its length, then solution annealed. The wall is more uniform than seamless, and the ID surface away from the weld is often smoother, which is why many electropolished process headers are welded pipe. The weld bead on the bore is the area to discuss in an enquiry: whether it is conditioned flush before polishing, and whether your inspection accepts a visible weld line after electropolishing."
            ]
          },
          {
            h3: "Heavily Cold-Worked (HCW)",
            paragraphs: [
              "HCW pipe is welded pipe whose weld and base metal are cold-worked by at least 35% reduction in thickness before the final anneal. The cold work recrystallises the weld so that it behaves much more like the parent metal. HCW is specified where a welded product is acceptable but the owner wants seam properties close to seamless. Ask for it by name, because a plain \"welded\" order will not be HCW."
            ]
          }
        ]
      },
      {
        h2: "What A312 Requires, and What You Must Add for Electropolished Service",
        table: {
          caption: "A312 requirements compared with the electropolishing requirements a purchase order must add",
          head: ["Item", "Set by A312 / A999", "Add to your order for EP pipe"],
          rows: [
            ["Heat treatment", "Solution anneal, 1040 °C (1900 °F) minimum for 304L/316L, then rapid cooling", "Nothing extra; confirm the anneal is reported on the certificate"],
            ["Tension and flattening tests", "Required, results on the certificate", "Nothing extra"],
            ["Leak tightness", "Hydrostatic test or non-destructive electric test on each length", "State if your piping class insists on one method"],
            ["Wall thickness", "Not more than 12.5% under nominal at any point", "Use 87.5% of nominal wall in pressure calculations"],
            ["Surface finish", "Not specified", "ID Ra maximum, OD finish, electropolished or not, and how Ra is measured"],
            ["Intergranular corrosion test", "Supplementary only", "Ask for ASTM A262 Practice E if your specification needs it"],
            ["Material identity", "Chemical analysis per heat", "We add PMI on every length, recorded against the heat number"]
          ]
        },
        subsections: [
          {
            h3: "Dimensional Tolerances Worth Checking Before Fabrication",
            paragraphs: [
              "For NPS 1/8 to 1-1/2, A312 allows the outside diameter to vary from +0.4 mm to -0.8 mm (+1/64 in to -1/32 in). Larger sizes have wider limits, and thin-wall pipe has its own ovality limit. Buttweld fittings are made to the same nominal OD, but the combined tolerance of pipe and fitting decides weld fit-up. If your fabricator orbitally welds pipe, ask for the measured OD and wall on a sample before cutting the whole lot."
            ]
          }
        ]
      },
      {
        h2: "Common A312 Sizes for Electropolished Process Pipe",
        paragraphs: [
          "Schedules 10S and 40S cover most EP process headers; 5S is used for low-pressure, large-bore lines where weight and cost matter. Weights per metre for every schedule are on our [EP pipe size chart](/resources/ep-pipe-size-chart/)."
        ],
        table: {
          caption: "ASME B36.19M outside diameters and wall thicknesses (mm) for the sizes most often electropolished",
          head: ["NPS", "OD (mm)", "Sch 5S", "Sch 10S", "Sch 40S"],
          rows: [
            ["1/2", "21.34", "1.65", "2.11", "2.77"],
            ["3/4", "26.67", "1.65", "2.11", "2.87"],
            ["1", "33.40", "1.65", "2.77", "3.38"],
            ["1-1/2", "48.26", "1.65", "2.77", "3.68"],
            ["2", "60.33", "1.65", "2.77", "3.91"],
            ["3", "88.90", "2.11", "3.05", "5.49"],
            ["4", "114.30", "2.11", "3.05", "6.02"],
            ["6", "168.28", "2.77", "3.40", "7.11"],
            ["8", "219.08", "2.77", "3.76", "8.18"]
          ]
        }
      },
      {
        h2: "Writing the Electropolished Finish Into an A312 Order",
        bullets: [
          "Where: internal surface only (the usual case), external only, or both. Internal electropolishing of a full pipe length needs a cathode drawn through the bore, so say if you need the whole length finished or only the ends.",
          "How smooth: a maximum Ra on the bore, for example 0.38 µm (15 µin), or a stated value agreed with your process engineer. A312 pipe is not normally ordered to ASME BPE surface designations, so quote the Ra in numbers.",
          "Preparation: whether mechanical polishing before electropolishing is required, and whether the ID weld bead of welded pipe must be conditioned flush.",
          "Evidence: how many Ra readings, at which positions on the length, and in which direction. Our internal Ra report for each electropolished lot records this.",
          "Protection: end caps and wrapping that keep the finished bore clean through transport and site storage."
        ]
      },
      {
        h2: "Send an A312 EP Pipe Enquiry",
        paragraphs: [
          "A complete A312 enquiry lets us quote within 24 hours. Put each requirement on its own line rather than listing several standards with \"or\", which invites the cheapest reading."
        ],
        bullets: [
          "Specification line, for example: ASTM A312 TP316L, welded, NPS 2 Sch 10S, ID electropolished Ra 0.38 µm max, OD as annealed.",
          "Quantity in metres per size, and the random or fixed length your fabricator wants.",
          "Product form: seamless, welded or HCW, and any piping-class restriction.",
          "Supplementary tests your specification calls for, such as A262 Practice E.",
          "Documents: we supply an EN 10204 3.1 certificate traced to heat number, chemical analysis from a NABL-accredited laboratory, PMI on every length and an Ra report for each electropolished lot.",
          "Delivery location; dispatch and transit are confirmed in writing with the quotation."
        ],
        cta: { label: "Request an ASTM A312 EP pipe quotation", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "Is ASTM A312 sanitary tubing?", a: "No. A312 is a pipe standard for seamless, welded and heavily cold-worked austenitic stainless steel pipe, ordered by NPS and schedule for high-temperature and general corrosive service. Sanitary tubing is ASTM A270." },
      { q: "Does ASTM A312 specify an electropolished finish?", a: "No. A312 covers chemistry, heat treatment, tests and dimensions. The electropolished bore, its maximum Ra and how it is measured must be written into the purchase order separately." },
      { q: "What wall thickness tolerance does A312 allow?", a: "The wall may be up to 12.5% below nominal at any point, under the general requirements of ASTM A999. Pressure calculations normally use 87.5% of the nominal wall for this reason." },
      { q: "Should I buy seamless or welded A312 pipe for electropolishing?", a: "Welded pipe has a more uniform wall and often a smoother bore, which suits electropolishing, provided the ID weld bead is conditioned. Seamless is chosen where the piping class excludes welded pipe or for high-pressure and cyclic service." },
      { q: "What documents come with A312 EP pipe from Sakshi Forge?", a: "An EN 10204 3.1 certificate traced to heat number, chemical analysis from a NABL-accredited laboratory, a PMI record for every length and an internal Ra report for each electropolished lot." }
    ]
  },

  '/astm-a269-electropolished-tubing/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "ASTM A269: General-Service Tubing, and Why Instrument Lines Use It",
        paragraphs: [
          "ASTM A269/A269M covers seamless and welded austenitic stainless steel tubing for general corrosion-resisting service and for low- or high-temperature service. The sizes usually furnished are 1/4 in (6.4 mm) inside diameter and larger, with a nominal wall of 0.020 in (0.51 mm) and heavier, although other dimensions can be ordered. Like the other ASTM tube standards it takes its general rules from ASTM A1016.",
          "In process plants A269 is the standard of instrument and small-bore tubing: impulse lines to transmitters, sample lines to analysers, chemical injection, hydraulic and pneumatic tubing, and utility gas distribution. Electropolished A269 tube is bought when that small bore must also stay clean: pharmaceutical nitrogen and compressed air drops, analyser sample systems where adsorption on a rough bore distorts readings, and laboratory gas lines."
        ]
      },
      {
        h2: "A269 Tube Is Bought for Compression Fittings, Not for Clamps",
        paragraphs: [
          "Hygienic tube is judged by its bore. Instrument tube is judged as much by its outside surface and hardness, because twin-ferrule and single-ferrule compression fittings seal by biting a ferrule into the tube OD. A tube that is too hard does not let the ferrule grip properly; a scratch running along the OD becomes a leak path under the ferrule. This is why fitting manufacturers publish a maximum hardness and an OD finish for the tube they will warrant, and why fully annealed A269 tube is the norm."
        ],
        subsections: [
          {
            h3: "What This Means for an Electropolished Order",
            paragraphs: [
              "Electropolishing improves the OD as well as the bore if both are finished, which helps ferrule sealing. But electropolishing does not soften tube, and cold work from straightening or bending before polishing remains. Ask for tube supplied in the annealed condition and polished afterwards, and give us the fitting maker's hardness limit if your project has one. If your tube is to be bent on site, tell us the bend radius so the finish and temper suit it."
            ]
          }
        ]
      },
      {
        h2: "Common A269 Instrument Tube Sizes",
        table: {
          caption: "Common A269 fractional tube sizes for instrument and sample lines (304L density, kg/m approximate)",
          head: ["Tube OD (in)", "OD (mm)", "Wall (mm)", "ID (mm)", "Mass (kg/m)"],
          rows: [
            ["1/8", "3.18", "0.71", "1.76", "0.04"],
            ["1/4 (0.035 in wall)", "6.35", "0.89", "4.57", "0.12"],
            ["1/4 (0.049 in wall)", "6.35", "1.24", "3.87", "0.16"],
            ["3/8 (0.035 in wall)", "9.53", "0.89", "7.75", "0.19"],
            ["3/8 (0.049 in wall)", "9.53", "1.24", "7.05", "0.26"],
            ["1/2 (0.049 in wall)", "12.70", "1.24", "10.22", "0.35"],
            ["1/2 (0.065 in wall)", "12.70", "1.65", "9.40", "0.45"]
          ]
        },
        paragraphs: [
          "Wall is chosen from the working pressure and the fitting maker's pressure tables, not by habit. Metric instrument tube (6, 8, 10 and 12 mm OD) is also widely used; do not mix it with fractional tube, because a 6 mm ferrule will not seal on 1/4 in tube."
        ]
      },
      {
        h2: "Tests A269 Requires",
        bullets: [
          "Each tube is given a hydrostatic test or a non-destructive electric test.",
          "Mechanical tests by lot include flare testing for seamless tube, flange and reverse-flattening testing for welded tube, and hardness testing.",
          "Tube is supplied heat treated, with the chemical analysis and test results reported on the certificate.",
          "None of these define a surface finish. An electropolished bore and its maximum Ra must be added to the order."
        ]
      },
      {
        h2: "Electropolishing Small-Bore A269 Tube",
        paragraphs: [
          "The narrower the bore, the harder it is to electropolish uniformly along the full length, because the electrolyte flow and the cathode have to reach every point of a few millimetres of ID. That is why small-bore EP tube is specified carefully: state the length you actually need finished, the maximum ID Ra, and whether the OD is also polished. For gas systems that must meet semiconductor UHP specifications rather than general instrument cleanliness, see our [ultra-high-purity EP tubes](/ultra-high-purity-ep-tubes/) page, which covers the stricter requirements.",
          "If the line is a hygienic product line rather than an instrument line, A269 is usually the wrong standard. Sanitary tolerances and finishes are in [ASTM A270](/astm-a270-electropolished-tubes/), normally with [ASME BPE](/asme-bpe-electropolished-tubes/) dimensions."
        ]
      },
      {
        h2: "Send an A269 EP Tubing Enquiry",
        bullets: [
          "Specification line, for example: ASTM A269 TP316L seamless, 1/4 in OD x 0.035 in wall, annealed, ID electropolished Ra 0.38 µm max.",
          "Seamless or welded, and the fitting brand or hardness limit if your project sets one.",
          "Length per piece (straight lengths or coils) and total metres per size.",
          "OD finish: as annealed, bright annealed or electropolished.",
          "Documents: EN 10204 3.1 certificate traced to heat number, NABL-lab chemical analysis, PMI on every length and an Ra report for each electropolished lot.",
          "Send it through the contact page and we reply with a quotation within 24 hours, with dispatch and transit confirmed in writing."
        ],
        cta: { label: "Request an ASTM A269 EP tubing quotation", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "What is ASTM A269 tubing used for?", a: "General corrosion-resisting and low- or high-temperature service. In practice it is the usual standard for instrument, impulse, sample, hydraulic and utility gas tubing joined with compression fittings." },
      { q: "What sizes does ASTM A269 cover?", a: "The sizes usually furnished are 1/4 in (6.4 mm) inside diameter and larger with a nominal wall of 0.020 in (0.51 mm) and heavier. Other dimensions can be ordered, and fractional instrument sizes such as 1/8, 1/4, 3/8 and 1/2 in OD are common." },
      { q: "Why does hardness matter for A269 tube?", a: "Compression fittings seal by swaging a ferrule into the tube OD. Fitting manufacturers set a maximum tube hardness for their warranty, so instrument tube is normally bought fully annealed." },
      { q: "Can A269 tube be used for hygienic product lines?", a: "It is not the usual choice. Hygienic product lines are normally built from ASTM A270 sanitary tube to ASME BPE dimensions, which match clamp ferrules and orbital weld fittings." },
      { q: "Is A269 tube electropolished as standard?", a: "No. A269 does not define a surface finish. An electropolished bore, its maximum Ra and whether the OD is also polished must be stated in the order." }
    ]
  },

  '/astm-a270-electropolished-tubes/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "ASTM A270: The Sanitary Tube Standard Behind Dairy, Food and Pharma Lines",
        paragraphs: [
          "ASTM A270/A270M covers seamless and welded austenitic and ferritic/austenitic stainless steel sanitary tubing intended for the dairy and food industry and having special surface finishes. Its supplementary requirement S2 defines pharmaceutical-quality tubing. It is a tube standard, dimensioned by actual OD and wall, and it takes its general requirements from ASTM A1016.",
          "Because the clamp ferrules, orbital weld fittings and valves of a hygienic plant are made to tube ODs, A270 is the standard a dairy, brewery or pharmaceutical line list will name for straight tube. For bioprocess systems it is almost always paired with [ASME BPE](/asme-bpe-electropolished-tubes/), which tightens the dimensions and defines the surface designations."
        ]
      },
      {
        h2: "What A270 Controls and What the Order Must Add",
        table: {
          caption: "How ASTM A270, ASME BPE and the purchase order divide the requirements for electropolished sanitary tube",
          head: ["Requirement", "ASTM A270", "ASME BPE adds", "Your order must state"],
          rows: [
            ["Grade and chemistry", "TP304, 304L, 316, 316L and others", "Sulphur 0.005–0.017% for 316L tube", "Grade, and the sulphur window if you orbital-weld"],
            ["Dimensions", "OD and wall tolerances; wall within 12.5% of specified at any point", "Tighter OD and wall tolerances for BPE tube", "OD and wall per size, and whether BPE tolerances apply"],
            ["Surface finish", "Polished finishes as ordered; S2 for pharmaceutical quality", "SF0–SF6 designations by maximum Ra", "ID designation (SF1, SF4) or Ra number, and OD finish"],
            ["Leak tightness", "Hydrostatic or electric test on each tube", "-", "Method, if your specification restricts it"],
            ["Visual acceptance", "General workmanship", "Defined surface defect criteria for product contact", "The acceptance standard your QA will apply"],
            ["Documents", "Test report per heat", "Traceability of each length", "Certificate type: we supply EN 10204 3.1 traced to heat number"]
          ]
        },
        subsections: [
          {
            h3: "Thin-Wall Tube and Ovality",
            paragraphs: [
              "Most sanitary tube is thin-walled (1.65 mm on 1 in to 3 in OD). For thin-wall tube A270 allows the diameter at any cross-section to deviate from the specified OD by up to twice the normal tolerance, which covers the slight ovality thin tube develops in handling. The average OD must still be within tolerance. Orbital weld heads and clamp ferrules forgive very little, so on long runs ask for the tube to be supported and capped in transport, and check roundness at the ends before welding."
            ]
          }
        ]
      },
      {
        h2: "Choosing the Grade and Finish for A270 Tube",
        bullets: [
          "Milk, curd, juice and beverage product lines: 304L A270 tube with an SF1 (Ra 0.51 µm) polished bore is common; electropolish where residue retention or cleaning time is the concern.",
          "Salted, acidic or chloride-bearing products, hot CIP supply and brine: 316L, because molybdenum resists chloride pitting.",
          "Purified water, WFI, clean steam and bioprocess media: 316L to A270 S2 and ASME BPE with an SF4 (Ra 0.38 µm) electropolished bore.",
          "Exterior: specify the OD finish separately. A bright or polished OD is usual on exposed process lines; it is not the product-contact surface."
        ]
      },
      {
        h2: "Seamless or Welded A270 Tube",
        paragraphs: [
          "Most sanitary tube in service is welded: it is made from strip, welded without filler, and the ID bead is conditioned so the bore is smooth enough to polish. Welded tube has a uniform wall and a consistent bore, which suits orbital welding and electropolishing. Seamless A270 tube is specified by some owners for critical product lines or where the user requirement specification excludes a weld seam. If the specification is silent, say which you need; the price and availability by size differ."
        ]
      },
      {
        h2: "A270 S2 or ASME BPE?",
        paragraphs: [
          "Pharmaceutical specifications name one, the other or both. A270 S2 adds pharmaceutical-quality finish and cleanliness requirements to the base standard; ASME BPE brings its own tolerance, sulphur, finish designation and visual acceptance clauses. When a document lists both, the order should say which governs if they differ. We quote against the exact wording of your specification, so copy the clause rather than paraphrasing it."
        ]
      },
      {
        h2: "Send an A270 EP Tube Enquiry",
        bullets: [
          "Specification line, for example: ASTM A270 S2 / ASME BPE, TP316L welded, 1.5 in OD x 0.065 in wall, ID SF4, OD polished.",
          "Sizes with metres per size, and the length per piece your fabricator wants.",
          "Seamless or welded, and the sulphur window if the tube will be orbitally welded.",
          "Matching [electropolished fittings](/electropolished-pipe-fittings/) if you want tube and fittings on one quotation.",
          "Documents: EN 10204 3.1 certificate traced to heat number, NABL-lab chemical analysis, PMI on every length and an internal Ra report for each electropolished lot.",
          "We reply with a quotation within 24 hours of a complete enquiry; dispatch and transit are confirmed in writing with it."
        ],
        cta: { label: "Request an ASTM A270 EP tube quotation", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "What is ASTM A270 tubing?", a: "Seamless and welded austenitic and ferritic/austenitic stainless steel sanitary tubing for the dairy and food industry, with special surface finishes. Supplementary requirement S2 covers pharmaceutical-quality tubing." },
      { q: "Is ASTM A270 tube electropolished?", a: "Not automatically. A270 covers polished finishes, but electropolishing must be specified, usually as an ASME BPE designation such as SF4 or as a maximum Ra with electropolishing." },
      { q: "What is the difference between ASTM A270 and ASME BPE tube?", a: "A270 is the product standard. ASME BPE adds tighter dimensional tolerances, a sulphur window for 316L, SF0 to SF6 surface designations and visual acceptance criteria. A BPE tube order must meet both." },
      { q: "Should I order 304L or 316L A270 tube?", a: "304L suits most milk, juice and beverage product lines. 316L is the choice for salted or acidic products, chloride-bearing streams, hot CIP supply and all pharmaceutical water and bioprocess lines." },
      { q: "What does A270 S2 mean?", a: "S2 is the supplementary requirement for pharmaceutical-quality tubing. It adds finish and cleanliness requirements to the base A270 standard and must be named in the order to apply." }
    ]
  },

  '/en-10204-31-mtc/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "EN 10204 Defines Who Signs the Certificate and What It Proves",
        paragraphs: [
          "EN 10204:2004 is the European standard for the types of inspection document supplied with metallic products. It does not set test methods or acceptance values; those come from the product standard, such as ASTM A270 or A312. What EN 10204 fixes is the type of document, who issues and validates it, and whether its results come from the actual products delivered (specific inspection) or from the manufacturer's general production (non-specific inspection). Ordering \"with MTC\" without naming the type leaves this open."
        ],
        table: {
          caption: "EN 10204:2004 inspection document types",
          head: ["Type", "Document", "Results based on", "Validated by"],
          rows: [
            ["2.1", "Declaration of compliance with the order", "No test results", "The manufacturer"],
            ["2.2", "Test report", "Non-specific inspection (typical production results)", "The manufacturer"],
            ["3.1", "Inspection certificate 3.1", "Specific inspection of the products supplied or their test unit", "The manufacturer's authorised inspection representative, independent of the manufacturing department"],
            ["3.2", "Inspection certificate 3.2", "Specific inspection of the products supplied or their test unit", "The manufacturer's authorised representative and the purchaser's representative or an official inspector"]
          ]
        }
      },
      {
        h2: "Why Electropolished Pipe and Tube Are Ordered With 3.1",
        paragraphs: [
          "A 3.1 certificate reports the chemical analysis and test results of the heat and test lot your pipe actually came from, signed by someone independent of production. That is what pharmaceutical turnover packages, food-plant audits and pressure-equipment rules ask for. Under the European Pressure Equipment Directive, main pressure-bearing parts need documents based on specific inspection, which 3.1 provides. A 2.2 report, by contrast, tells you what the mill typically makes, not what you received.",
          "A 3.2 certificate is needed only when your owner, a notified body or a third-party inspector must witness or validate the tests. It adds time and cost, so specify it only where a document or contract requires it, and say so in the enquiry so the quotation can address it."
        ]
      },
      {
        h2: "What a 3.1 Certificate for EP Pipe Should Show",
        table: {
          caption: "Checklist for reviewing an EN 10204 3.1 certificate on receipt of electropolished pipe or tube",
          head: ["Field", "What to check"],
          rows: [
            ["Certificate type", "States EN 10204 3.1, not 2.2 or a plain \"test certificate\""],
            ["Purchase order reference", "Matches your PO and line item"],
            ["Product standard and grade", "The standard you ordered (A270, A312, A269) and the grade, for example TP316L"],
            ["Heat number", "Matches the heat number marked on each length"],
            ["Size and quantity", "OD and wall or NPS and schedule, and the quantity on this certificate"],
            ["Chemical analysis", "Within the standard's limits; for BPE 316L tube, sulphur within 0.005–0.017%"],
            ["Mechanical and leak tests", "Tensile, flattening or flare results and the hydro or electric test the standard requires"],
            ["Heat treatment", "Solution annealing reported"],
            ["Validation", "Signature or stamp of the authorised inspection representative"]
          ]
        }
      },
      {
        h2: "What We Supply With Every Electropolished Order",
        bullets: [
          "An EN 10204 3.1 certificate traced to the heat number of each length.",
          "Chemical analysis carried out by a NABL-accredited laboratory.",
          "PMI on every length, recorded against the heat number, so 304L and 316L cannot be mixed unnoticed.",
          "An internal Ra report for each electropolished lot, showing where and how the surface roughness was measured.",
          "All issued under our ISO 9001:2015 quality system."
        ],
        paragraphs: [
          "Electropolishing is a surface treatment after the mill tests, so the Ra report is a separate document from the mill results. Keep both together in the turnover package: an auditor asks for chemistry and finish evidence on the same length."
        ]
      },
      {
        h2: "Keeping Heat Traceability Through Fabrication",
        paragraphs: [
          "A certificate only proves something if every piece can still be linked to it. When a length is cut on site, the heat number must be transferred to each offcut before cutting. Weld maps and isometrics then record the heat number of every spool piece, so the turnover package links each weld to two certified heats. Ask your fabricator to show this transfer on the first spool; it is much harder to reconstruct later."
        ]
      },
      {
        h2: "Ask for a Quotation With 3.1 Documentation",
        paragraphs: [
          "Tell us the certificate type and any extra content your quality team needs, such as specific tests, the edition of the product standard or the format of the turnover package. We reply with a quotation within 24 hours of a complete enquiry and list the documents that come with each length."
        ],
        cta: { label: "Request EP pipe with EN 10204 3.1", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "What is an EN 10204 3.1 certificate?", a: "An inspection certificate issued by the manufacturer, based on specific inspection of the products supplied or their test unit, and validated by an authorised inspection representative independent of the manufacturing department." },
      { q: "What is the difference between EN 10204 3.1 and 3.2?", a: "Both report specific inspection results. A 3.1 is validated by the manufacturer's independent inspection representative; a 3.2 is validated by that representative and also by the purchaser's representative or an official inspector, usually after witnessing the tests." },
      { q: "Is a 2.2 test report enough for electropolished pharma piping?", a: "Usually not. A 2.2 report is based on non-specific inspection, so it does not prove the properties of the material delivered. Pharmaceutical and pressure-equipment documentation normally requires 3.1." },
      { q: "Does the 3.1 certificate cover the electropolished finish?", a: "The 3.1 certificate covers the mill chemistry and tests. The finish is reported separately; we supply an internal Ra report for each electropolished lot alongside the certificate." },
      { q: "How do I trace a pipe to its certificate?", a: "Each length is marked with its heat number, which appears on the certificate. When lengths are cut, the heat number must be transferred to every piece before cutting so traceability survives fabrication." }
    ]
  },

  '/standards/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "Which Standard Your Electropolished Line Needs",
        paragraphs: [
          "Electropolished piping is bought against a small set of standards that each answer a different question. A product standard (ASTM A270, A269, A249 or A312) defines the tube or pipe itself. A system standard (ASME BPE) adds dimensions, finishes and material limits for bioprocessing. A document standard (EN 10204) defines how the results are certified. A complete order names one of each, plus the finish."
        ],
        table: {
          caption: "Choosing the governing standard by service",
          head: ["Service", "Product standard", "Usually combined with", "Typical finish"],
          rows: [
            ["WFI, purified water, clean steam, bioprocess", "ASTM A270 (S2)", "ASME BPE", "SF4, Ra 0.38 µm, electropolished"],
            ["Dairy, food, beverage, brewery product lines", "ASTM A270", "ASME BPE dimensions or plant standard", "SF1 polished, or electropolished where residue is the concern"],
            ["Instrument, sample and utility gas lines", "ASTM A269", "Fitting maker's hardness limit", "Annealed; ID electropolished for clean gas"],
            ["Heat exchanger and evaporator tube", "ASTM A249", "Exchanger design code", "Electropolished bore on the product side if specified"],
            ["Chemical and process headers built to pipe sizes", "ASTM A312", "ASME B36.19M, B16.9 fittings", "ID Ra stated in the order"]
          ]
        }
      },
      {
        h2: "The Standards in Detail",
        subsections: [
          {
            h3: "ASTM A270: Sanitary Tube",
            paragraphs: [
              "The tube standard for dairy, food and, with supplement S2, pharmaceutical service. See [ASTM A270 electropolished tubes](/astm-a270-electropolished-tubes/) for what the standard controls and what an EP order must add."
            ]
          },
          {
            h3: "ASME BPE: Bioprocessing Equipment",
            paragraphs: [
              "Not a tube product standard but the system standard that fixes BPE tube dimensions, the SF0 to SF6 surface designations and the 316L sulphur window. See [ASME BPE electropolished tubes](/asme-bpe-electropolished-tubes/)."
            ]
          },
          {
            h3: "ASTM A269: General-Service and Instrument Tube",
            paragraphs: [
              "Small-bore tube for compression-fitted instrument, sample and utility lines. See [ASTM A269 electropolished tubing](/astm-a269-electropolished-tubing/)."
            ]
          },
          {
            h3: "ASTM A312: Stainless Steel Pipe",
            paragraphs: [
              "Pipe by NPS and schedule for high-temperature and general corrosive service, electropolished where a process header needs a clean bore. See [ASTM A312 electropolished pipes](/astm-a312-electropolished-pipes/)."
            ]
          },
          {
            h3: "EN 10204 3.1: The Inspection Certificate",
            paragraphs: [
              "The document type that proves the delivered heat met its standard. See [EN 10204 3.1 certificates for EP pipe](/en-10204-31-mtc/)."
            ]
          }
        ]
      },
      {
        h2: "Writing One Specification Line That Cannot Be Misread",
        paragraphs: [
          "Most wrong quotations trace back to an enquiry that lists several standards with \"or\", names a size without saying tube or pipe, or leaves out the finish. A line such as \"ASTM A270 S2 / ASME BPE, TP316L welded, 2 in OD x 0.065 in wall, ID SF4, EN 10204 3.1\" leaves nothing to interpret: product standard, system standard, grade, product form, size, finish and document type are all fixed. Our [comparison of A270, A269, A249 and A312](/blog/astm-a270-vs-a269-vs-a249-vs-a312/) explains the differences in more depth."
        ],
        bullets: [
          "One product standard per line, with the edition if your specification fixes one.",
          "Tube sizes as OD x wall; pipe sizes as NPS and schedule.",
          "The finish as an ASME BPE designation or a maximum Ra, and whether it applies to the ID, the OD or both.",
          "The certificate type: EN 10204 3.1 unless a contract requires 3.2."
        ]
      },
      {
        h2: "Quoted Against Your Specification",
        paragraphs: [
          "We supply ASTM A270, A269, A249 and A312 in 304, 304L, 316 and 316L, with 904L supplied electropolished for acid and chloride service, under an ISO 9001:2015 quality system. Every length is PMI tested, chemical analysis is done by a NABL-accredited laboratory, each electropolished lot has an internal Ra report and each heat carries an EN 10204 3.1 certificate traced to its heat number. Send your line list and we quote within 24 hours of a complete enquiry."
        ],
        cta: { label: "Send a line list for quotation", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "Which standard should I use for pharmaceutical EP tube?", a: "ASTM A270 with supplement S2, combined with ASME BPE, in 316L with an SF4 electropolished bore. Most pharmaceutical water and bioprocess specifications use this combination." },
      { q: "Is ASME BPE a replacement for ASTM A270?", a: "No. A270 is the tube product standard; ASME BPE adds dimensions, surface designations, sulphur limits and acceptance criteria. A BPE tube order meets both." },
      { q: "What is the difference between tube and pipe standards?", a: "Tube standards (A270, A269, A249) are dimensioned by actual OD and wall. The pipe standard A312 is dimensioned by nominal pipe size and schedule. A 2 in tube has a 2.000 in OD; a 2 in pipe has a 2.375 in OD." },
      { q: "Which certificate type should I ask for?", a: "EN 10204 3.1 for almost all electropolished process piping. Ask for 3.2 only when a contract, owner or notified body requires third-party validation." }
    ]
  },

  '/testing-inspection/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "What Is Checked on Electropolished Pipe and Tube, and When",
        paragraphs: [
          "Electropolished pipe passes through two sets of checks. The first set comes from the product standard (A270, A269, A312 and the others): chemistry, heat treatment, mechanical tests and a leak test, all reported on the mill certificate. The second set concerns what electropolishing and handling add or could spoil: material identity on each individual length, the surface roughness actually achieved, and the condition of the bore. A buyer should know which document proves which check."
        ],
        table: {
          caption: "Checks on an electropolished order and the document that records each",
          head: ["Check", "What it proves", "Recorded on"],
          rows: [
            ["Chemical analysis of the heat", "Grade limits, including sulphur where specified", "EN 10204 3.1 certificate; analysis by a NABL-accredited laboratory"],
            ["Mechanical and leak tests required by the standard", "Strength, ductility and tightness of the tested lot", "EN 10204 3.1 certificate"],
            ["PMI on every length", "Each length is the grade on its certificate; 304L and 316L not mixed", "PMI record against heat number"],
            ["Surface roughness after electropolishing", "The Ra achieved on the specified surface", "Internal Ra report for each electropolished lot"],
            ["Marking and heat number", "Each length traceable to its certificate", "Marking on the length and the certificate"]
          ]
        }
      },
      {
        h2: "Positive Material Identification on Every Length",
        paragraphs: [
          "A certificate describes a heat; PMI confirms the length in front of you belongs to it. Handheld XRF analysers read chromium, nickel and molybdenum in seconds and separate 304L from 316L by molybdenum content. We PMI every length rather than a sample, because a single mixed length in a WFI loop is found only after it has rouged or failed, and because electropolished 304L and 316L look identical. Your own receiving inspection can repeat a spot check cheaply; we recommend it before orbital welding starts."
        ]
      },
      {
        h2: "How Ra Is Measured and Reported",
        paragraphs: [
          "Surface roughness is measured with a stylus profilometer that traces the surface and calculates Ra, the arithmetic average deviation of the profile. The reading depends on how it is taken: measured across the lay of the polish it is higher, and more honest, than along it, and the cut-off length and number of readings change the result. ASME BPE finish values are maximums, so a single reading over the limit fails the requirement, however good the average.",
          "Our internal Ra report for each electropolished lot records the readings and where they were taken. When you write a finish requirement, say which surface it applies to, the maximum Ra in µm or µin, and if your QA has a preference, the number of readings and positions. Use our [Ra converter](/resources/ra-surface-finish-converter/) to move between µm and µin."
        ]
      },
      {
        h2: "Leak, Mechanical and Corrosion Tests From the Product Standard",
        bullets: [
          "Leak tightness: A270, A269 and A312 each require a hydrostatic test or a non-destructive electric test on every tube or pipe. The method used is reported on the certificate.",
          "Mechanical tests: tension, flattening, flare, flange or reverse-flattening tests as the product standard requires for seamless or welded product.",
          "Intergranular corrosion: ASTM A262 Practice E is a supplementary test, not a default; list it in the enquiry if your specification calls for it.",
          "Extra owner tests such as ferrite measurement, borescope inspection of the bore or surface chemistry analysis of the passive film are project-specific. Put them in the enquiry and the quotation will state what can be provided."
        ]
      },
      {
        h2: "Receiving Inspection: A Short Checklist for Your QA Team",
        bullets: [
          "End caps in place and the bore clean and dry; reject lengths with damaged caps or wet packing for closer inspection.",
          "Heat numbers on the lengths match the EN 10204 3.1 certificates in the delivery.",
          "Spot PMI on a sample of lengths, especially where 304L and 316L arrive together.",
          "Visual check of the electropolished surface under good light for pits, stains and handling marks.",
          "Ra report present for each electropolished lot and showing the surface you specified."
        ]
      },
      {
        h2: "Ask for a Quotation With Your Inspection Requirements",
        paragraphs: [
          "Send the product standard, sizes, finish and any tests your specification adds. We reply with a quotation within 24 hours of a complete enquiry, listing the certificate, PMI record and Ra report that come with the order."
        ],
        cta: { label: "Request an inspected EP pipe quotation", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "Is every length of electropolished pipe PMI tested?", a: "Yes. We PMI every length and record the result against its heat number, so 304L and 316L cannot be mixed unnoticed." },
      { q: "How is the Ra of electropolished pipe measured?", a: "With a stylus profilometer, normally across the lay of the polish. Our internal Ra report for each electropolished lot records the readings and where they were taken." },
      { q: "Is the hydrostatic test certificate separate from the mill certificate?", a: "No. The hydrostatic or electric test required by the product standard is reported on the EN 10204 3.1 certificate together with chemistry and mechanical results." },
      { q: "Can I add tests such as ASTM A262 Practice E?", a: "Yes, list them in the enquiry. Supplementary tests are not included by default, and the quotation states what will be provided." }
    ]
  },

  '/resources/ep-pipe-size-chart/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "Pipe or Tube? Read the Size the Right Way First",
        paragraphs: [
          "Stainless steel comes in two size systems that share the same numbers. Pipe is sized by nominal pipe size (NPS, or NB in mm) and schedule: the OD is fixed for each NPS and the wall changes with the schedule. Tube is sized by its actual OD and a wall thickness. A 2 in pipe has an OD of 60.33 mm; a 2 in tube has an OD of 50.80 mm. Fittings, clamps and gaskets fit only one system, so check which one your drawing uses before reading these tables."
        ]
      },
      {
        h2: "Stainless Steel Pipe: ASME B36.19M Schedules With Weight",
        paragraphs: [
          "Each cell gives the wall thickness in mm and the mass in kg per metre, calculated for 304L (density 7.93 g/cm³). For 316L multiply the mass by about 1.01. Schedules 5S and 10S are the usual walls for electropolished process pipe; 40S and 80S are used at higher pressure."
        ],
        table: {
          caption: "ASME B36.19M stainless pipe: wall (mm) / mass (kg/m), 304L",
          head: ["NPS", "OD (mm)", "Sch 5S", "Sch 10S", "Sch 40S", "Sch 80S"],
          rows: [
            ["1/4", "13.72", "-", "1.65 / 0.50", "2.24 / 0.64", "3.02 / 0.81"],
            ["3/8", "17.15", "-", "1.65 / 0.64", "2.31 / 0.85", "3.20 / 1.11"],
            ["1/2", "21.34", "1.65 / 0.81", "2.11 / 1.01", "2.77 / 1.28", "3.73 / 1.64"],
            ["3/4", "26.67", "1.65 / 1.03", "2.11 / 1.29", "2.87 / 1.70", "3.91 / 2.22"],
            ["1", "33.40", "1.65 / 1.31", "2.77 / 2.11", "3.38 / 2.53", "4.55 / 3.27"],
            ["1-1/4", "42.16", "1.65 / 1.67", "2.77 / 2.72", "3.56 / 3.42", "4.85 / 4.51"],
            ["1-1/2", "48.26", "1.65 / 1.92", "2.77 / 3.14", "3.68 / 4.09", "5.08 / 5.46"],
            ["2", "60.33", "1.65 / 2.41", "2.77 / 3.97", "3.91 / 5.50", "5.54 / 7.56"],
            ["2-1/2", "73.03", "2.11 / 3.73", "3.05 / 5.32", "5.16 / 8.72", "7.01 / 11.53"],
            ["3", "88.90", "2.11 / 4.56", "3.05 / 6.52", "5.49 / 11.41", "7.62 / 15.43"],
            ["4", "114.30", "2.11 / 5.90", "3.05 / 8.45", "6.02 / 16.24", "8.56 / 22.55"],
            ["6", "168.28", "2.77 / 11.42", "3.40 / 13.97", "7.11 / 28.55", "10.97 / 42.99"],
            ["8", "219.08", "2.77 / 14.93", "3.76 / 20.17", "8.18 / 42.98", "12.70 / 65.30"],
            ["10", "273.05", "3.40 / 22.84", "4.19 / 28.06", "9.27 / 60.92", "12.70 / 82.37"],
            ["12", "323.85", "3.96 / 31.56", "4.57 / 36.35", "9.53 / 74.63", "12.70 / 98.45"]
          ]
        }
      },
      {
        h2: "Hygienic Tube: ASME BPE OD Series With Weight",
        table: {
          caption: "ASME BPE tube OD and standard product-contact wall, with ID and mass (304L)",
          head: ["Tube OD (in)", "OD (mm)", "Wall (mm)", "ID (mm)", "Mass (kg/m)"],
          rows: [
            ["1/4", "6.35", "0.89", "4.57", "0.12"],
            ["3/8", "9.53", "0.89", "7.75", "0.19"],
            ["1/2", "12.70", "1.65", "9.40", "0.45"],
            ["3/4", "19.05", "1.65", "15.75", "0.72"],
            ["1", "25.40", "1.65", "22.10", "0.98"],
            ["1-1/2", "38.10", "1.65", "34.80", "1.50"],
            ["2", "50.80", "1.65", "47.50", "2.02"],
            ["2-1/2", "63.50", "1.65", "60.20", "2.54"],
            ["3", "76.20", "1.65", "72.90", "3.06"],
            ["4", "101.60", "2.11", "97.38", "5.23"],
            ["6", "152.40", "2.77", "146.86", "10.33"]
          ]
        },
        paragraphs: [
          "These are the sizes clamp ferrules and orbital weld fittings are made for. The ID column matters to process engineers: flow velocity, and therefore turbulence in a WFI loop, depends on the bore, so a heavier wall bought by mistake changes the hydraulics. See [electropolished tubes](/electropolished-tubes/) and [ASME BPE tubes](/asme-bpe-electropolished-tubes/) for how these sizes are specified."
        ]
      },
      {
        h2: "Metric Hygienic Tube: DIN 11850 Series 2",
        paragraphs: [
          "Equipment designed in Europe often uses metric hygienic tube to DIN 11850 rather than inch OD tube. The two series do not interchange: a 25.4 mm clamp ferrule does not fit a 29 mm tube. Series 2 is the most common in dairy and beverage equipment."
        ],
        table: {
          caption: "DIN 11850 series 2 hygienic tube: OD x wall (mm), ID and mass (304L)",
          head: ["OD x wall (mm)", "ID (mm)", "Mass (kg/m)"],
          rows: [
            ["13 x 1.5", "10", "0.43"],
            ["19 x 1.5", "16", "0.65"],
            ["23 x 1.5", "20", "0.80"],
            ["29 x 1.5", "26", "1.03"],
            ["35 x 1.5", "32", "1.25"],
            ["41 x 1.5", "38", "1.48"],
            ["53 x 1.5", "50", "1.92"],
            ["70 x 2", "66", "3.39"],
            ["85 x 2", "81", "4.14"],
            ["104 x 2", "100", "5.08"]
          ]
        }
      },
      {
        h2: "How the Weights Are Calculated",
        paragraphs: [
          "Mass per metre = π x (OD - wall) x wall x density, with OD and wall in mm and density in g/cm³, divided by 1,000 to give kg/m. Using 7.93 g/cm³ for 304L this simplifies to 0.02491 x (OD - wall) x wall. The figures are nominal: real pipe can be up to 12.5% under nominal wall under A312, so freight and handling estimates based on nominal weight are slightly conservative. For other sizes use the [pipe weight calculator](/resources/ss-pipe-weight-calculator/)."
        ]
      },
      {
        h2: "Turning a Size List Into a Quotation",
        paragraphs: [
          "Send the sizes from these tables in the same form: tube as OD x wall, pipe as NPS and schedule, with metres per size, grade, standard and the finish on the ID. We reply with a quotation within 24 hours of a complete enquiry, with an EN 10204 3.1 certificate traced to heat number, PMI on every length and an Ra report for each electropolished lot included. These tables show standard dimension series; they are not a statement of stock."
        ],
        cta: { label: "Get a quotation for your sizes", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "What is the OD of 2 inch stainless steel pipe?", a: "60.33 mm (2.375 in) for every schedule. The wall is 1.65 mm in Sch 5S, 2.77 mm in Sch 10S and 3.91 mm in Sch 40S. A 2 inch hygienic tube is different: 50.80 mm OD." },
      { q: "What is the weight of 1 inch Sch 10S stainless steel pipe?", a: "About 2.11 kg per metre in 304L (33.40 mm OD x 2.77 mm wall). 316L is about 1% heavier." },
      { q: "What wall thickness is standard for ASME BPE tube?", a: "1.65 mm (0.065 in) for 1/2 in to 3 in OD, 2.11 mm (0.083 in) for 4 in and 2.77 mm (0.109 in) for 6 in. The 1/4 and 3/8 in sizes use 0.89 mm (0.035 in)." },
      { q: "Do DIN 11850 tubes fit inch clamp fittings?", a: "No. DIN 11850 tube has metric ODs such as 29 mm or 53 mm, which do not match inch OD clamp ferrules such as 25.4 mm or 50.8 mm. Use fittings made for the same series as the tube." }
    ]
  },

  '/resources/download-ep-pipe-catalogue/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "Electropolished Pipe and Tube Range at a Glance",
        paragraphs: [
          "This page is our electropolished product specification sheet in one place: the products, standards, grades, finishes and documents we quote. To receive a quotation and specification for your own line list, send it through the contact page; we reply within 24 hours of a complete enquiry."
        ],
        table: {
          caption: "Electropolished products, governing standards and finishes",
          head: ["Product", "Standards", "Grades", "Finish options", "Details"],
          rows: [
            ["Sanitary EP tube", "ASTM A270, A270 S2, ASME BPE", "304L, 316L", "SF1, SF4 or stated Ra", "[Electropolished tubes](/electropolished-tubes/)"],
            ["Instrument and general-service EP tube", "ASTM A269", "304L, 316L", "ID electropolished, OD as specified", "[A269 tubing](/astm-a269-electropolished-tubing/)"],
            ["Welded EP tube for exchangers", "ASTM A249", "304L, 316L", "Electropolished bore", "[Welded EP pipes](/electropolished-welded-erw-pipes/)"],
            ["EP process pipe", "ASTM A312", "304, 304L, 316, 316L", "ID Ra stated in the order", "[Electropolished pipes](/electropolished-pipes/)"],
            ["Acid and chloride service", "As ordered", "904L, supplied electropolished", "As specified", "[High purity pipes](/high-purity-stainless-steel-pipes/)"],
            ["Electropolished fittings", "ASME BPE and as ordered", "304L, 316L", "To match the tube", "[EP fittings](/electropolished-pipe-fittings/)"]
          ]
        }
      },
      {
        h2: "Finishes We Quote",
        bullets: [
          "SF1: mechanically polished, Ra 0.51 µm (20 µin) maximum.",
          "SF4: mechanically polished and electropolished, Ra 0.38 µm (15 µin) maximum, the usual pharmaceutical and bioprocess finish.",
          "A stated maximum Ra on the ID of pipe to ASTM A312, where ASME BPE designations are not used.",
          "OD finish stated separately: as annealed, polished or electropolished.",
          "See the [ASME BPE surface finish designations](/asme-bpe-electropolished-tubes/) and our [Ra converter](/resources/ra-surface-finish-converter/)."
        ]
      },
      {
        h2: "Documents With Every Order",
        bullets: [
          "EN 10204 3.1 certificate traced to the heat number of each length. See [what a 3.1 certificate shows](/en-10204-31-mtc/).",
          "Chemical analysis by a NABL-accredited laboratory.",
          "PMI on every length.",
          "Internal Ra report for each electropolished lot.",
          "Issued under our ISO 9001:2015 quality system."
        ]
      },
      {
        h2: "Sizes",
        paragraphs: [
          "Tube is quoted in the ASME BPE OD series from 1/4 in to 6 in and in other OD x wall combinations on request; pipe is quoted by NPS and ASME B36.19M schedule. Full tables with ID and weight per metre are on the [EP pipe size chart](/resources/ep-pipe-size-chart/). The tables are standard dimension series, not a stock list; confirm sizes and quantities in the enquiry."
        ]
      },
      {
        h2: "What to Include in Your Enquiry",
        bullets: [
          "Product standard and grade for each line, for example ASTM A270 / ASME BPE, 316L.",
          "Tube OD x wall or pipe NPS and schedule, with metres per size.",
          "ID finish (designation or Ra) and OD finish.",
          "Any supplementary tests and the certificate type if not 3.1.",
          "Delivery location. Dispatch and transit are confirmed in writing with the quotation, because they depend on the sizes, quantity and finish."
        ],
        cta: { label: "Request a quotation and spec sheet", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "Which electropolished products does Sakshi Forge supply?", a: "Sanitary tube to ASTM A270 and ASME BPE, tube to ASTM A269 and A249, pipe to ASTM A312, in 304, 304L, 316 and 316L, with 904L supplied electropolished, and electropolished fittings to match." },
      { q: "Which finishes are available?", a: "ASME BPE SF1 (Ra 0.51 µm maximum, mechanically polished) and SF4 (Ra 0.38 µm maximum, electropolished), or a stated maximum Ra for pipe ordered to ASTM A312." },
      { q: "How do I get a specification sheet for my project?", a: "Send your line list with standards, grades, sizes and finish through the contact page. We reply with a quotation within 24 hours of a complete enquiry, stating the specification and documents for each line." }
    ]
  },

  '/resources/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "Tools for Each Step From Specification to Purchase Order",
        paragraphs: [
          "These resources follow the order in which an electropolished line is specified and bought. Each is free to use without registration."
        ],
        table: {
          caption: "Which resource to use at each stage",
          head: ["Stage", "Question", "Resource"],
          rows: [
            ["Choosing the standard", "A270, A269, A249 or A312?", "[Standards overview](/standards/)"],
            ["Setting the finish", "What Ra is SF4, and what is it in µin?", "[Ra converter](/resources/ra-surface-finish-converter/)"],
            ["Reading sizes", "What OD and wall does 2 in Sch 10S or 2 in BPE tube have?", "[EP pipe size chart](/resources/ep-pipe-size-chart/)"],
            ["Estimating weight", "How many kilograms per metre for freight and supports?", "[Pipe weight calculator](/resources/ss-pipe-weight-calculator/)"],
            ["Checking documents", "What must the 3.1 certificate show?", "[EN 10204 3.1 explained](/en-10204-31-mtc/)"],
            ["Writing the enquiry", "What does a complete line list contain?", "[Product and spec sheet](/resources/download-ep-pipe-catalogue/)"]
          ]
        }
      },
      {
        h2: "Technical Guides",
        bullets: [
          "[How to specify electropolished pipe](/blog/how-to-specify-electropolished-pipe/): a full specification line, explained clause by clause.",
          "[ASTM A270 vs A269 vs A249 vs A312](/blog/astm-a270-vs-a269-vs-a249-vs-a312/): which standard covers which product.",
          "[Testing and inspection](/testing-inspection/): which check is recorded on which document."
        ]
      },
      {
        h2: "When You Are Ready to Order",
        paragraphs: [
          "Send your sizes, grade, standard and finish through the contact page. We reply with a quotation within 24 hours of a complete enquiry; each order comes with an EN 10204 3.1 certificate traced to heat number, PMI on every length and an Ra report for each electropolished lot."
        ],
        cta: { label: "Request a quotation", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "Are these tools free?", a: "Yes. The size chart, Ra converter and weight calculator can be used without registering." },
      { q: "Where do I find the OD of a pipe or tube size?", a: "On the EP pipe size chart, which lists ASME B36.19M pipe schedules, ASME BPE tube sizes and DIN 11850 series 2 tube with ID and weight per metre." }
    ]
  },

  '/resources/ra-surface-finish-converter/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "Converting Ra Between Micrometres and Microinches",
        paragraphs: [
          "Ra is quoted in micrometres (µm) on metric drawings and in microinches (µin) on American ones. One micrometre equals 39.37 microinches, so µin = µm x 39.37 and µm = µin / 39.37. ASME BPE rounds its finish limits, which is why SF4 appears as both 0.38 µm and 15 µin. The table gives the values buyers meet most often."
        ],
        table: {
          caption: "Common Ra values for stainless steel process pipe and tube",
          head: ["Ra (µm)", "Ra (µin)", "Where you see it"],
          rows: [
            ["0.25", "10", "Tighter-than-SF4 electropolished finishes in some UHP and biopharma specifications"],
            ["0.38", "15", "ASME BPE SF4: mechanically polished and electropolished"],
            ["0.51", "20", "ASME BPE SF1 (mechanically polished) and SF5 (electropolished)"],
            ["0.64", "25", "ASME BPE SF2 (mechanically polished) and SF6 (electropolished)"],
            ["0.76", "30", "ASME BPE SF3: mechanically polished"],
            ["0.8", "32", "A common general hygienic or OD polish value"]
          ]
        }
      },
      {
        h2: "Ra Is Not the Whole Surface Specification",
        paragraphs: [
          "Two surfaces with the same Ra can behave very differently. A mechanically polished bore at 0.5 µm has a smeared surface layer with folded-over metal and embedded abrasive; an electropolished bore at the same Ra has had that layer dissolved and carries a chromium-enriched passive film. This is why ASME BPE separates finishes by route as well as by number: SF1 and SF5 have the same 0.51 µm limit, but only SF5 is electropolished.",
          "Ra also hides peaks. Some specifications add Rz or Rmax limits, which capture the deepest valleys where residue can lodge. If your specification uses them, quote the parameter and value in the enquiry; do not convert Rz to Ra, because there is no fixed ratio between them."
        ],
        subsections: [
          {
            h3: "Grit Numbers Are Not a Finish Specification",
            paragraphs: [
              "Older dairy specifications describe polish by abrasive grit (for example \"180 grit\"). The Ra a grit produces depends on the starting surface, the belt, the pressure and the operator, so a grit number cannot be converted to a reliable Ra. Replace grit callouts with a maximum Ra or an ASME BPE designation when you write a new specification."
            ]
          }
        ]
      },
      {
        h2: "Specifying the Finish in an Order",
        bullets: [
          "Which surface: ID, OD or both.",
          "The maximum Ra in one unit, or an ASME BPE designation such as SF4.",
          "Whether it must be electropolished, not just below a number.",
          "How you want it evidenced: we supply an internal Ra report for each electropolished lot."
        ],
        cta: { label: "Request an EP pipe quotation with your Ra", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "How do I convert Ra from µm to µin?", a: "Multiply by 39.37. For example, 0.38 µm x 39.37 = 15 µin, and 0.8 µm x 39.37 = 31.5 µin, usually rounded to 32 µin." },
      { q: "What Ra is ASME BPE SF4?", a: "A maximum of 0.38 µm (15 µin) on the product-contact surface, mechanically polished and then electropolished." },
      { q: "Can I convert a grit number to Ra?", a: "Not reliably. The Ra produced by a given grit depends on the starting surface and the polishing process, so specify a maximum Ra or an ASME BPE designation instead." }
    ]
  },

  '/resources/ss-pipe-weight-calculator/': {
    updated: '2026-11-15',
    sections: [
      {
        h2: "The Formula Behind the Calculator",
        paragraphs: [
          "Stainless steel pipe and tube mass per metre is the steel cross-section multiplied by density: kg/m = π x (OD - t) x t x ρ / 1,000, with OD and wall t in mm and ρ in g/cm³. The calculator uses this formula, so it works for pipe sizes, hygienic tube and any non-standard OD and wall."
        ],
        table: {
          caption: "Densities commonly used for stainless steel weight estimates",
          head: ["Grade", "Density (g/cm³)", "Shortcut (kg/m)"],
          rows: [
            ["304 / 304L", "7.93", "0.02491 x (OD - t) x t"],
            ["316 / 316L", "8.00", "0.02513 x (OD - t) x t"],
            ["904L", "8.0 (approximately)", "Similar to 316L; use the mill's published density for exact figures"]
          ]
        },
        subsections: [
          {
            h3: "Worked Example",
            paragraphs: [
              "2 in Sch 10S pipe in 316L: OD 60.33 mm, wall 2.77 mm. Mass = 0.02513 x (60.33 - 2.77) x 2.77 = 4.01 kg/m. A 6 m length weighs about 24 kg. The same size in 304L is 3.97 kg/m."
            ]
          }
        ]
      },
      {
        h2: "What Buyers Use the Weight For",
        bullets: [
          "Freight and handling: total kilograms per consignment, and whether lengths can be handled manually on site.",
          "Pipe supports: the empty weight of a run, to which the engineer adds the contents and insulation.",
          "Comparing quotations: some suppliers quote per kilogram and others per metre. Convert both to the same unit with this calculator before comparing.",
          "Checking a delivery: a large difference between invoiced weight and calculated weight is worth a question."
        ]
      },
      {
        h2: "Why Real Weight Can Differ From the Calculation",
        paragraphs: [
          "The calculation uses nominal wall. ASTM A312 pipe may be up to 12.5% under nominal wall at any point, and tube standards allow their own variation, so real lengths are often a little lighter than calculated. Electropolishing removes only a few micrometres of metal, which does not change the weight noticeably. Standard sizes with weights already worked out are on the [EP pipe size chart](/resources/ep-pipe-size-chart/)."
        ]
      },
      {
        h2: "Quote by Metre or by Kilogram",
        paragraphs: [
          "Tell us how you want the quotation expressed. We reply within 24 hours of a complete enquiry, with sizes, grade, standard, finish and the documents for each line: EN 10204 3.1 certificate traced to heat number, PMI on every length and an Ra report for each electropolished lot."
        ],
        cta: { label: "Request a quotation for your sizes", href: "/contact-us/" }
      }
    ],
    faqs: [
      { q: "How do I calculate stainless steel pipe weight per metre?", a: "kg/m = π x (OD - wall) x wall x density / 1,000, with dimensions in mm and density in g/cm³. For 304L this is 0.02491 x (OD - wall) x wall." },
      { q: "Is 316L heavier than 304L?", a: "Slightly. 316L has a density of about 8.00 g/cm³ against 7.93 for 304L, so the same size is about 1% heavier." },
      { q: "Does electropolishing change pipe weight?", a: "Not noticeably. Electropolishing removes only a few micrometres from the surface." }
    ]
  }
};
