// Page-specific technical guides for EP spec pages (rendered by CategoryGuide inside
// EPBuildSpecRenderer). When a URL has a guide, the shared template blocks are not
// rendered and the guide's FAQs replace the template FAQs (visible and in schema).
// Inline links use [anchor](/path/). Company claims are limited to those stated elsewhere
// on the site; sizes are standard dimension series, not stock claims.

export const SPEC_GUIDES = {
  '/electropolished-tubes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'Tube, Not Pipe: How Electropolished Tubes Are Sized and Specified',
        paragraphs: [
          'Electropolished tube is ordered by outside diameter and a fixed wall thickness, not by nominal pipe size and schedule. A 1" tube is 25.4 mm OD in every wall thickness, so its bore changes with the wall; a 1" NPS pipe is 33.4 mm OD whatever its schedule. This is why hygienic systems, which are built around clamp ferrules and orbital weld heads that fit a fixed OD, use tube, and why mixing the two vocabularies in an enquiry is the most common cause of wrong quotations.',
          'Tube for hygienic duty is made to [ASTM A270](/astm-a270-electropolished-tubes/) (sanitary tubing), [ASTM A269](/astm-a269-electropolished-tubing/) (general corrosion-resistant tubing) or the [ASME BPE](/asme-bpe-electropolished-tubes/) dimensional and finish tables that reference A270. Pipe to NPS schedules is covered on our main [electropolished pipes](/electropolished-pipes/) page.'
        ],
        table: {
          caption: 'ASME BPE tube OD series with standard wall (product-contact tubing)',
          head: ['Tube OD (inch)', 'OD (mm)', 'Wall (inch)', 'Wall (mm)', 'Nominal ID (mm)'],
          rows: [
            ['1/4"', '6.35', '0.035', '0.89', '4.57'],
            ['3/8"', '9.53', '0.035', '0.89', '7.75'],
            ['1/2"', '12.70', '0.065', '1.65', '9.40'],
            ['3/4"', '19.05', '0.065', '1.65', '15.75'],
            ['1"', '25.40', '0.065', '1.65', '22.10'],
            ['1-1/2"', '38.10', '0.065', '1.65', '34.80'],
            ['2"', '50.80', '0.065', '1.65', '47.50'],
            ['2-1/2"', '63.50', '0.065', '1.65', '60.20'],
            ['3"', '76.20', '0.065', '1.65', '72.90'],
            ['4"', '101.60', '0.083', '2.11', '97.38'],
            ['6"', '152.40', '0.109', '2.77', '146.86']
          ]
        },
        subsections: [
          {
            h3: 'Why the Bore, Not the OD, Sets Flow Capacity',
            paragraphs: [
              'Process engineers size lines on internal diameter and velocity, while buyers order by OD. Before releasing an order, confirm the ID the designer used. A loop designed on a 1.65 mm wall that is bought in 2.11 mm wall loses bore area, changes velocity and can push a WFI loop below the turbulence its design assumed.'
            ]
          }
        ]
      },
      {
        h2: 'Choosing the Right Tube Type for the Duty',
        bullets: [
          'Purified water, WFI, clean steam and bioprocess lines: 316L tube to ASME BPE dimensions with an SF4 electropolished bore.',
          'Dairy, beverage and food product lines: 304L or 316L sanitary tube to A270, with an electropolished bore where residue retention is the concern.',
          'Instrumentation and sampling lines: small-bore A269 tube, fully annealed so compression fittings seal.',
          'Ultra-high-purity gas lines: [UHP electropolished tube](/ultra-high-purity-ep-tubes/) to the governing semiconductor specification, not ordinary sanitary tube.'
        ]
      },
      {
        h2: 'What a Purchase Manager Should Check on Every Tube Quotation',
        subsections: [
          {
            h3: 'Dimensional Basis',
            paragraphs: [
              'The quotation should repeat OD, wall and length in the units of your enquiry and name the dimensional standard. If a supplier quotes "1 inch tube" without a wall, or quotes a metric OD against an inch enquiry, the fittings will not match. Ask for the OD and wall tolerance basis as well: A269 and A270 reference the general requirements of ASTM A1016, and ASME BPE adds its own tighter limits for BPE tube.'
            ]
          },
          {
            h3: 'Finish and Where It Is Measured',
            paragraphs: [
              'A finish such as "Ra 0.38 µm" means little unless the quotation says whether it applies to the ID, the OD or both, whether it is a maximum or an average, and how it is measured. Electropolished tube is normally specified on the ID, with the OD left bright-annealed or polished for appearance.'
            ]
          },
          {
            h3: 'Lot Documentation',
            paragraphs: [
              'Each lot should be traceable from heat number to the certificate. We supply an EN 10204 3.1 certificate traced to heat number, a PMI record for every length and a measured Ra report for each electropolished lot. If your project needs a turnover package, list the documents in the enquiry so they are priced and prepared with the tube.'
            ]
          }
        ]
      },
      {
        h2: 'Handling, Capping and Storage on Site',
        paragraphs: [
          'An electropolished bore is easily spoiled after delivery. Tube should arrive with end caps fitted and individually sleeved, and should stay capped until it is cut. Store it off the floor, away from carbon-steel work: grinding dust from carbon steel embeds in stainless and rusts. Cut with dedicated stainless tools and deburr without abrasives that leave iron. These steps cost nothing at purchase and decide whether the finish you paid for survives installation.'
        ]
      },
      {
        h2: 'Ordering Electropolished Tubes',
        bullets: [
          'OD and wall for each size, in one unit system, with the dimensional standard (ASME BPE, A270 or A269).',
          'Grade (304L or 316L) and any sulphur range required for orbital welding.',
          'Internal finish designation or Ra limit, and whether the OD needs polishing.',
          'Metres per size, length preference, and matching [electropolished fittings](/electropolished-pipe-fittings/).',
          'Documents required for your quality or validation file.'
        ],
        cta: { label: 'Request a quotation for electropolished tubes', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'What is the difference between electropolished tube and electropolished pipe?', a: 'Tube is specified by outside diameter and a fixed wall thickness, for example 1" OD x 0.065" wall, and is used in hygienic systems built around clamp ferrules and orbital welding. Pipe is specified by nominal pipe size and schedule, so its OD stays fixed while the wall changes with schedule. The two are not interchangeable.' },
      { q: 'Which wall thickness is standard for electropolished sanitary tube?', a: 'For ASME BPE tube, 0.065" (1.65 mm) is standard from 1/2" to 3" OD, 0.083" (2.11 mm) at 4" and 0.109" (2.77 mm) at 6", with 0.035" (0.89 mm) for 1/4" and 3/8". Other walls are available for specific pressure or process needs.' },
      { q: 'Is the OD of electropolished tube also electropolished?', a: 'Not by default. The bore is the product-contact surface and is electropolished; the OD is usually bright-annealed or mechanically polished. Specify an electropolished or polished OD if the tube runs exposed in a cleanroom or wash-down area.' },
      { q: 'How should electropolished tube be stored on site?', a: 'Capped and sleeved, off the floor and away from carbon-steel fabrication. Keep the caps on until the tube is cut, cut with stainless-only tools, and deburr without iron-bearing abrasives.' }
    ]
  },

  '/ss-316l-electropolished-pipes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'SS 316L Electropolished Pipe: The Default Grade for Pharma and Chloride Service',
        paragraphs: [
          '316L (UNS S31603, EN 1.4404) is austenitic stainless steel with about 2% molybdenum and carbon limited to 0.030%. Molybdenum raises resistance to pitting and crevice corrosion by chlorides; the low carbon prevents chromium carbide precipitation next to welds. Electropolishing then removes surface inclusions and leaves a chromium-enriched passive film. Together these make 316L EP the standard material for WFI, purified water, clean steam and most bioprocess and chemical product lines.'
        ],
        table: {
          caption: '316L composition limits (% by weight) and the ASME BPE sulphur window',
          head: ['Element', 'ASTM / UNS S31603', 'Why it matters to a buyer'],
          rows: [
            ['Carbon', '0.030 max', 'Prevents weld sensitisation without heat treatment'],
            ['Chromium', '16.0–18.0', 'Forms the passive film; enriched further by electropolishing'],
            ['Nickel', '10.0–14.0', 'Stabilises austenite; a major cost driver'],
            ['Molybdenum', '2.00–3.00', 'Chloride pitting and crevice resistance'],
            ['Sulphur', '0.030 max (ASME BPE tube: 0.005–0.017)', 'Controls weld penetration consistency between heats'],
            ['Manganese / Silicon', '2.00 max / 0.75 max', 'Deoxidation; high Mn can influence weld pool and inclusions']
          ]
        },
        subsections: [
          {
            h3: '1.4404 or 1.4435? Reading European Pharma Specifications',
            paragraphs: [
              'European pharmaceutical specifications often call for EN 1.4435 rather than 1.4404. Both are 316L-type, but 1.4435 has higher minimum molybdenum and nickel (about 2.5–3.0% Mo and 12.5–15% Ni), which gives a lower delta-ferrite content and slightly better corrosion resistance. A 316L heat can meet 1.4435 if its analysis falls inside the tighter ranges. If your owner specifies 1.4435, say so in the enquiry: the mill certificate must show the chemistry meets it, not just 316L.'
            ]
          },
          {
            h3: 'Dual-Certified 316/316L',
            paragraphs: [
              'Much 316L is dual-certified as 316/316L: low enough in carbon for 316L and strong enough to meet the higher minimum strength of 316. Dual certification simplifies design calculations and stock control. Ask for it if your pressure calculations use 316 allowable stresses.'
            ]
          }
        ]
      },
      {
        h2: 'When 316L Is Required and When It Is Over-Specification',
        bullets: [
          'Required: WFI, clean steam and hot purified water; bioprocess media, buffer and product lines; salted, acidic or brine food products; hot CIP supply; chloride-bearing process streams.',
          'Usually over-specified: ambient purified water for oral solids where the owner accepts [304L](/ss-304l-electropolished-pipes/); plain milk and beverage lines; utilities with no product contact.',
          'Not enough: hot concentrated chlorides, seawater, and service where chloride stress corrosion cracking is a risk above roughly 60 °C. Look at [duplex electropolished pipe](/electropolished-pipes/duplex-electropolished-pipe/) or higher alloys.'
        ]
      },
      {
        h2: 'Verifying You Received 316L',
        paragraphs: [
          '304L and 316L look identical, and mixed-up lengths are a real risk on projects that use both. Positive material identification by XRF distinguishes them through molybdenum content. We PMI every length and record the result against the heat number on the certificate. On receipt, a spot PMI check by your own QA on a sample of lengths is cheap insurance, especially before orbital welding begins.'
        ],
        subsections: [
          {
            h3: 'Delta Ferrite and Magnetic Response',
            paragraphs: [
              'Annealed 316L is essentially non-magnetic. Cold work or a ferrite-forming chemistry can make it slightly magnetic, which is not by itself a defect, but some pharmaceutical owners limit delta ferrite in product-contact components. If your specification limits ferrite, include the limit and the measurement method in the enquiry.'
            ]
          }
        ]
      },
      {
        h2: 'Ordering SS 316L Electropolished Pipe',
        bullets: [
          'Grade designation required on the certificate: 316L, 316/316L dual, or EN 1.4404 / 1.4435.',
          'Sulphur range if the material will be orbitally welded (ASME BPE: 0.005–0.017%).',
          'Tube OD and wall or pipe NPS and schedule; finish designation (SF4 is typical for pharma).',
          'Ferrite or Mo minimum limits if the owner specifies them.',
          'Certificates: EN 10204 3.1 traced to heat number, PMI per length, measured Ra report per electropolished lot.'
        ],
        cta: { label: 'Request a 316L EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Is 316L electropolished pipe suitable for WFI systems?', a: 'Yes. 316L with an ASME BPE SF4 electropolished finish is the standard choice for WFI, clean steam and hot purified water distribution, because molybdenum improves chloride resistance and the electropolished surface slows rouge and supports cleaning validation.' },
      { q: 'What is the difference between EN 1.4404 and 1.4435?', a: 'Both are 316L-type steels. 1.4435 requires higher molybdenum and nickel, which lowers delta ferrite and slightly improves corrosion resistance. Many European pharma owners specify it; a 316L heat qualifies only if its certified chemistry falls within the 1.4435 ranges.' },
      { q: 'Why does sulphur content matter for 316L tube?', a: 'Sulphur changes how the weld pool flows. When two heats with different sulphur are orbitally welded, penetration shifts toward the lower-sulphur side. ASME BPE limits 316L tube sulphur to 0.005–0.017% so welds are consistent across heats.' },
      { q: 'How can I confirm I received 316L and not 304L?', a: 'By PMI. XRF analysis detects the molybdenum that 316L contains and 304L does not. Every length we supply is PMI-checked and recorded against its heat number on the EN 10204 3.1 certificate.' }
    ]
  },

  '/ss-304l-electropolished-pipes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'SS 304L Electropolished Pipe: Where the Lower-Cost Grade Is the Right Grade',
        paragraphs: [
          '304L (UNS S30403, EN 1.4307) is austenitic stainless steel with about 18% chromium, 8–12% nickel, no deliberate molybdenum and carbon limited to 0.030%. It contains less nickel and no molybdenum compared with 316L, which makes it the more economical grade. In clean, low-chloride service an electropolished 304L line performs very well, and specifying 316L there adds cost without adding service life.'
        ],
        table: {
          caption: '304L against 316L for typical hygienic duties',
          head: ['Duty', '304L EP', '316L EP'],
          rows: [
            ['Milk, cream, most beverages', 'Suitable, usual choice', 'Suitable, not usually needed'],
            ['Ambient purified water (oral solids)', 'Accepted by many owners', 'Preferred by some owners'],
            ['WFI, clean steam, hot purified water', 'Not recommended', 'Standard choice'],
            ['Salted, acidic or brine products', 'Pitting risk', 'Recommended'],
            ['Hot caustic CIP supply', 'Acceptable if chloride-free', 'Recommended'],
            ['Cosmetics and personal-care bases', 'Often suitable', 'For chloride or acidic formulations']
          ]
        },
        subsections: [
          {
            h3: 'The Chloride Question',
            paragraphs: [
              'The deciding factor between 304L and 316L is chloride at temperature. Chloride enters through process water, salt in the product, hypochlorite sanitisers and residues trapped under deposits. 304L tolerates clean water and normal CIP chemistry; it pits where chloride concentrates, particularly in crevices and warm stagnant zones. If you cannot rule out chloride, choose 316L for that section and keep 304L elsewhere.'
            ]
          }
        ]
      },
      {
        h2: 'Running 304L and 316L in One Plant',
        paragraphs: [
          'Many dairies and food plants use 304L for product lines and 316L for CIP supply and salted-product sections. That is sensible engineering, but it creates a materials-control risk: the two grades look the same. Ask for each length to be marked with grade and heat number, keep the grades segregated in stores, and PMI-check before welding. We PMI every length before dispatch and record it against the heat number.',
          'Welding 304L to 316L is acceptable: the joint behaves like the less-alloyed side, so treat a mixed joint as 304L for corrosion purposes.'
        ]
      },
      {
        h2: 'Electropolishing 304L: What Changes and What Does Not',
        paragraphs: [
          'Electropolishing gives 304L the same surface benefits it gives 316L: removal of embedded particles and folded metal, a lower Ra and a chromium-enriched passive film. It does not add molybdenum. An electropolished 304L surface resists pitting better than a mechanically polished 304L surface, but not as well as electropolished 316L in chloride service. Choose the grade for the chemistry and the finish for cleanability.'
        ]
      },
      {
        h2: 'Ordering SS 304L Electropolished Pipe',
        bullets: [
          'Grade on certificate: 304L, 304/304L dual, or EN 1.4307 if a European equivalent is specified.',
          'The services the line will carry, so chloride exposure can be checked before you commit to 304L.',
          'Tube OD and wall or pipe NPS and schedule, and the internal finish designation.',
          'Marking requirements for grade segregation if the plant uses both 304L and 316L.',
          'EN 10204 3.1 certificate traced to heat number, PMI per length and a measured Ra report per electropolished lot.'
        ],
        cta: { label: 'Request a 304L EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Is 304L electropolished pipe food grade?', a: 'Yes. 304L is widely used for milk, beverage and general food product lines. Choose 316L where products are salted or acidic or where hypochlorite sanitisers are used heavily.' },
      { q: 'Can 304L be used for purified water?', a: 'Many owners accept 304L for ambient purified-water loops serving oral solid dosage plants. WFI, clean steam and hot purified water systems normally specify 316L.' },
      { q: 'Can 304L and 316L be welded together?', a: 'Yes. The joint behaves like the less-alloyed material, so treat it as 304L for corrosion purposes and keep mixed joints out of chloride-bearing sections.' },
      { q: 'Does electropolishing make 304L as corrosion resistant as 316L?', a: 'No. Electropolishing improves the surface but does not add molybdenum. Electropolished 304L outperforms mechanically polished 304L, but in chloride service 316L remains the better choice.' }
    ]
  },

  '/electropolished-seamless-pipes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'Electropolished Seamless Pipe: When the Specification Excludes a Weld Seam',
        paragraphs: [
          'Seamless stainless pipe and tube is made without a longitudinal weld: a solid billet is pierced into a hollow, then reduced by hot extrusion or cold pilgering and drawing to size, and solution annealed. The product has a uniform wrought structure around the whole circumference. It is chosen where a specification excludes welded product, for higher-pressure duties and heavier walls, and where an owner prefers no seam in product-contact tubing.',
          'For most hygienic tube in ASME BPE systems, welded tube with a properly conditioned bead is accepted and widely used; see [welded electropolished pipe](/electropolished-welded-erw-pipes/). Seamless is a deliberate choice, not an automatic upgrade.'
        ],
        table: {
          caption: 'Seamless against welded electropolished tube and pipe',
          head: ['Property', 'Seamless', 'Welded and conditioned'],
          rows: [
            ['Longitudinal seam', 'None', 'Weld seam, bead conditioned and annealed'],
            ['Wall uniformity and concentricity', 'Wider variation, depends on process', 'Very uniform, set by strip thickness'],
            ['ID finish before polishing', 'Drawing marks, needs more ID work for SF4', 'Smooth strip surface, bead conditioned'],
            ['Typical use', 'High pressure, heavy wall, specifications excluding welds', 'Standard hygienic tube, ASME BPE systems'],
            ['Standards', 'ASTM A312 (seamless), A269, A270, A213', 'ASTM A270, A269, A249, A312 (welded)'],
            ['Relative cost', 'Usually higher', 'Usually lower']
          ]
        },
        subsections: [
          {
            h3: 'Why Seamless Tube Needs More Work to Reach SF4',
            paragraphs: [
              'Cold-drawn seamless tube carries longitudinal drawing marks on its bore. To reach an electropolished SF4 finish, those marks must be removed by mechanical ID polishing before electropolishing, because electropolishing levels micro-roughness but does not remove deeper marks. This extra ID work is one reason seamless EP tube costs more and takes longer than welded EP tube of the same size.'
            ]
          },
          {
            h3: 'Fit-Up for Orbital Welding',
            paragraphs: [
              'Seamless tube can show more wall-thickness variation and eccentricity than welded tube made from rolled strip. In autogenous orbital welding, a step at the joint caused by uneven wall or ovality produces uneven penetration. Specify tight wall tolerance and buy from consistent heats when seamless tube will be orbitally welded.'
            ]
          }
        ]
      },
      {
        h2: 'Testing Seamless Pipe',
        paragraphs: [
          'ASTM product standards require each length to pass a hydrostatic or non-destructive electric test. For seamless pipe and heavier walls, ultrasonic testing is the usual volumetric method where the specification calls for it, detecting laminations and internal discontinuities that a surface test cannot see. State the required NDT method in the enquiry so it is included in the price and recorded on the certificate. Our [testing and inspection](/testing-inspection/) page lists the checks we apply.'
        ]
      },
      {
        h2: 'Ordering Electropolished Seamless Pipe',
        bullets: [
          'Confirm that the specification actually requires seamless; if not, welded tube may be faster and more economical.',
          'Pipe NPS and schedule (for example 10S or 40S) or tube OD and wall, with the governing standard.',
          'Wall tolerance and ovality limits if the pipe will be orbitally welded.',
          'NDT method: hydrostatic, eddy current or ultrasonic.',
          'Internal finish designation, grade, and certificates (EN 10204 3.1, PMI per length, measured Ra report).'
        ],
        cta: { label: 'Request a seamless EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Is seamless electropolished pipe better than welded?', a: 'Not universally. Seamless has no weld seam, which some specifications require, and suits high-pressure and heavy-wall duty. Welded tube with a conditioned, annealed bead has more uniform wall and concentricity and is standard in most ASME BPE hygienic systems.' },
      { q: 'Why is seamless EP pipe more expensive?', a: 'The seamless process itself costs more, and cold-drawn seamless tube needs more internal mechanical polishing to remove drawing marks before it can be electropolished to an SF4 finish.' },
      { q: 'Which standards cover seamless electropolished pipe?', a: 'ASTM A312 covers seamless and welded pipe to NPS schedules; ASTM A269 and A270 cover seamless and welded tubing. The electropolished finish is specified separately, for example by ASME BPE surface finish designation.' },
      { q: 'What NDT should be specified for seamless pipe?', a: 'At minimum the hydrostatic or electric test the ASTM standard requires. Specify ultrasonic testing where volumetric inspection is needed, typically for heavier walls and critical service.' }
    ]
  },

  '/electropolished-welded-erw-pipes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'Welded Electropolished Pipe and Tube: How It Is Made and Why It Dominates Hygienic Systems',
        paragraphs: [
          'Welded stainless tube starts as precision-rolled strip, which is formed into a tube and fusion-welded along its length. The weld bead is then conditioned, typically by rolling or cold working so it blends with the wall, and the tube is solution annealed, often bright-annealed in a protective atmosphere. Because strip thickness is tightly controlled, welded tube has excellent wall uniformity and concentricity, which is exactly what orbital welding needs.',
          'A note on terminology: buyers in India often call this product "ERW" pipe. In carbon steel, ERW means electric resistance welding. Stainless hygienic tube is normally welded by autogenous fusion processes such as TIG (GTAW), plasma or laser welding. If your specification says ERW, confirm what it actually requires so the quotation and certificate match.'
        ],
        table: {
          caption: 'What to specify for the weld seam',
          head: ['Item', 'What it means', 'Why it matters'],
          rows: [
            ['Weld process', 'TIG, plasma or laser fusion weld', 'Must match any process named in your specification'],
            ['Bead condition', 'As-welded, or rolled/conditioned flush', 'A conditioned bead drains and polishes like the wall'],
            ['Heat treatment', 'Solution annealed (bright annealed)', 'Restores corrosion resistance of weld and HAZ'],
            ['Seam inspection', 'Eddy current or hydrostatic test per length', 'Detects seam defects before polishing'],
            ['ID finish', 'Polished and electropolished including the seam', 'The seam must meet the same Ra as the wall']
          ]
        },
        subsections: [
          {
            h3: 'The Seam After Electropolishing',
            paragraphs: [
              'On a properly conditioned and annealed tube, the seam is difficult to see after ID polishing and electropolishing, and it meets the same surface finish as the rest of the bore. Ask for the Ra report to include readings across the seam if your validation team will inspect it, and reject tube where the seam shows a ridge, groove or discolouration on borescope inspection.'
            ]
          }
        ]
      },
      {
        h2: 'Standards for Welded Electropolished Tube',
        bullets: [
          'ASTM A270: welded or seamless sanitary tubing; the basis for ASME BPE tube.',
          'ASTM A249: welded austenitic tubes, commonly used for heat exchangers and higher-pressure tubing.',
          'ASTM A269: welded or seamless tubing for general corrosion-resistant service.',
          'ASTM A312 (welded): pipe to NPS schedules for process lines.'
        ]
      },
      {
        h2: 'When to Choose Seamless Instead',
        paragraphs: [
          'Choose [seamless electropolished pipe](/electropolished-seamless-pipes/) when a specification excludes welded product, for higher-pressure or heavier-wall service, or where an owner policy requires it. For standard hygienic duty, welded tube offers better dimensional consistency at a lower cost and shorter lead time.'
        ]
      },
      {
        h2: 'Ordering Welded Electropolished Tube',
        bullets: [
          'Governing standard (A270, A249, A269 or A312 welded) and whether the specification permits welded product.',
          'Weld process if specified, and the requirement for a conditioned, annealed bead.',
          'Tube OD and wall, grade, sulphur range for orbital welding, and ID finish designation.',
          'Seam inspection method and whether Ra readings across the seam are required.',
          'EN 10204 3.1 certificate, PMI per length and measured Ra report per electropolished lot.'
        ],
        cta: { label: 'Request a welded EP tube quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Is welded electropolished tube acceptable for pharmaceutical systems?', a: 'Yes. ASME BPE tube is commonly welded tube to ASTM A270 with the weld bead conditioned and annealed and the bore electropolished. Some owners require seamless for specific services; check your specification.' },
      { q: 'Is stainless ERW pipe the same as welded electropolished tube?', a: 'The term is used loosely. Stainless hygienic tube is normally fusion-welded by TIG, plasma or laser, not electric resistance welded. Confirm what your specification requires so the certificate names the correct process.' },
      { q: 'Does the weld seam meet the same Ra as the rest of the bore?', a: 'On correctly conditioned, annealed and electropolished tube, yes. Ask for Ra readings across the seam if your validation team requires them.' },
      { q: 'Why is welded tube preferred for orbital welding?', a: 'Because it is made from rolled strip, its wall thickness and concentricity are very uniform, so the two ends of an orbital weld match well and penetration is consistent.' }
    ]
  },

  '/internal-electropolished-pipes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'Internally Electropolished Pipe: Paying for the Surface That Touches the Product',
        paragraphs: [
          'In an internally electropolished (ID-EP) pipe, only the bore is electropolished. A cathode is drawn through the tube while electrolyte is pumped through it, so current flows between the cathode and the inside wall; the outside is not treated. Since the bore is the only product-contact surface, ID-EP delivers the hygienic and corrosion benefits where they matter and avoids the cost of finishing an OD that nobody sees.'
        ],
        table: {
          caption: 'ID-only, OD-only and full electropolishing compared',
          head: ['Option', 'Surfaces treated', 'Typical use'],
          rows: [
            ['Internal (ID) EP', 'Bore only; OD bright-annealed or mill finish', 'Process and utility lines in plant areas'],
            ['ID EP with polished OD', 'Bore electropolished; OD mechanically polished', 'Lines visible in production halls'],
            ['ID and OD EP', 'Both surfaces electropolished', 'Cleanrooms, wash-down areas, exposed runs'],
            ['OD only', 'Outside only', 'Architectural or decorative tube, not process duty']
          ]
        },
        subsections: [
          {
            h3: 'Uniformity Along a Long Length',
            paragraphs: [
              'In long tubes, the finish depends on cathode centring and electrolyte flow along the whole length. Poor centring gives uneven removal around the circumference; poor flow gives a different finish at the ends from the middle. Good practice uses centred cathodes and controlled flow and inspects the bore along its length, not just at the ends.'
            ]
          },
          {
            h3: 'How the Bore Finish Is Verified',
            paragraphs: [
              'A profilometer stylus can reach only a limited distance into a small bore, so Ra is usually measured near the ends or on a sample section, and visual inspection along the length is done with a borescope. Agree with your supplier where readings will be taken and how many, and ask for borescope inspection of a sample of lengths if your project requires it.'
            ]
          }
        ]
      },
      {
        h2: 'When ID-Only Electropolishing Is the Wrong Choice',
        bullets: [
          'Cleanroom and aseptic areas, where the OD is wiped and sanitised: specify a polished or electropolished OD.',
          'Wash-down food areas, where the outside collects soil and is cleaned daily.',
          'Visible exposed runs where appearance is part of the audit impression.'
        ],
        paragraphs: [
          'For a full comparison of finishing routes see our article on [passivation and electropolishing](/blog/passivation-after-electropolishing/).'
        ]
      },
      {
        h2: 'Ordering Internally Electropolished Pipe',
        bullets: [
          'ID finish designation or Ra limit, and the OD condition required (mill, bright-annealed, polished or electropolished).',
          'Tube OD, wall and length; long lengths should be stated so the process can be planned.',
          'Where Ra will be measured and whether borescope inspection is required.',
          'Grade, standard and certificates: EN 10204 3.1, PMI per length and measured Ra report.'
        ],
        cta: { label: 'Request an ID electropolished pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'What is internally electropolished pipe?', a: 'Pipe or tube whose bore is electropolished by drawing a cathode through it with electrolyte flowing inside, while the outside is left bright-annealed or mill finished. It puts the cost of finishing where the product touches the steel.' },
      { q: 'Is ID-only electropolishing cheaper than full electropolishing?', a: 'Usually, because only one surface is processed and the OD needs no polishing. The saving depends on size and length; ask for both options on the same quotation if you are unsure.' },
      { q: 'How is the inside finish checked on long tubes?', a: 'Ra is measured with a profilometer where the stylus can reach, usually near the ends or on a sample section, and the bore is inspected along its length with a borescope. Agree the inspection plan before ordering.' },
      { q: 'When should the OD be polished too?', a: 'In cleanrooms, aseptic areas and food wash-down zones, where the outside of the line is cleaned and inspected, and on exposed runs where appearance matters.' }
    ]
  },

  '/high-purity-stainless-steel-pipes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'High-Purity Stainless Steel Pipe for Pharmaceutical Water and Steam Systems',
        paragraphs: [
          'A high-purity water system is the most inspected utility in a pharmaceutical plant. Purified water and water for injection must meet pharmacopoeial quality at every point of use, and the distribution piping must not add particles, metal ions, endotoxin or micro-organisms. That puts specific demands on the pipe: a cleanable, drainable, corrosion-resistant bore, documented material, and a system design that keeps water moving and sanitised.',
          'Material is almost always 316L with an electropolished bore to ASME BPE. What separates a high-purity order from an ordinary EP pipe order is the system around the pipe: matching fittings, controlled welding and a complete documentation trail.'
        ],
        table: {
          caption: 'Typical specification by water and steam system',
          head: ['System', 'Typical operating regime', 'Usual tube specification'],
          rows: [
            ['Purified water, ambient loop', 'Continuously recirculated, periodic sanitisation (hot water or ozone)', '316L; SF1 accepted by many owners, SF4 where specified'],
            ['Purified water, hot loop', 'Held hot, typically about 65–80 °C', '316L, SF4 electropolished'],
            ['Water for injection', 'Hot recirculation, typically around 80 °C or above', '316L, SF4 electropolished, full BPE controls'],
            ['Pure / clean steam', 'Saturated steam to sterilisers and SIP points', '316L, SF4; rouge management planned'],
            ['RO permeate and pretreatment outlet', 'Ambient, pre-final purification', '316L or approved polymer; finish per owner']
          ]
        },
        subsections: [
          {
            h3: 'Design Rules That Affect What You Buy',
            paragraphs: [
              'Loops are designed for turbulent flow, commonly around 1 to 1.5 m/s or more at the most distant point of use, so the tube ID used in the hydraulic design must be the one supplied. Branches to points of use are kept short; ASME BPE recommends limiting dead legs to about two branch diameters. Lines slope to drain. Each of these rules turns into a purchasing item: correct wall, short-outlet tees and point-of-use valves, and enough fittings with tangent ends for orbital welding.'
            ]
          },
          {
            h3: 'Rouge',
            paragraphs: [
              'Hot water and steam systems develop rouge, an iron-oxide film, over time. Electropolished 316L slows its formation, and derouging and re-passivation are planned maintenance. The guide to [WFI loop piping design](/blog/wfi-loop-piping-design/) covers loop layout in more detail.'
            ]
          }
        ]
      },
      {
        h2: 'The Turnover Package Starts at Purchase',
        paragraphs: [
          'Installation qualification checks that what was installed matches what was specified. The evidence starts with the material: EN 10204 3.1 certificates traced to heat number for every tube and fitting, PMI records, measured Ra reports for electropolished lots, and later the weld map, weld logs, borescope records and passivation report. Ask suppliers to quote these documents explicitly, in a format your validation team accepts, rather than discovering gaps at handover.'
        ]
      },
      {
        h2: 'Ordering High-Purity Piping',
        bullets: [
          'System and service for each line (PW ambient, PW hot, WFI, clean steam) so finish and grade are matched to duty.',
          'Tube OD and wall per the hydraulic design, plus [ASME BPE electropolished tubes](/asme-bpe-electropolished-tubes/) dimensional basis.',
          'Fitting list with matching finish: elbows, tees, reducers, ferrules, all electropolished.',
          'Sulphur range for orbital welding, delta-ferrite limits if specified, and the document list for the turnover package.'
        ],
        cta: { label: 'Request a high-purity piping quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'What material is used for pharmaceutical high-purity water piping?', a: 'Almost always 316L stainless steel to ASME BPE, with an electropolished SF4 bore for WFI, clean steam and hot purified water. Some owners accept SF1 mechanically polished tube for ambient purified-water loops.' },
      { q: 'Why do high-purity loops need short branches?', a: 'Water in a long branch is not refreshed by loop flow and can support microbial growth. ASME BPE recommends limiting dead legs to about two branch diameters for new designs.' },
      { q: 'Does electropolished pipe prevent rouge?', a: 'It slows rouge formation but does not prevent it indefinitely in hot water and steam systems. Derouging and re-passivation are part of normal maintenance.' },
      { q: 'What documents should come with high-purity pipe?', a: 'EN 10204 3.1 certificates traced to heat number, PMI records, and measured Ra reports for electropolished lots. Weld maps, weld logs, borescope records and passivation reports follow during installation.' }
    ]
  },

  '/ultra-high-purity-ep-tubes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'Ultra-High-Purity Electropolished Tube: A Different Specification From Pharma Grade',
        paragraphs: [
          'Ultra-high-purity (UHP) tube is used for semiconductor process gases, specialty gas distribution and other systems where a single particle, a few ppb of moisture or a trace of metallic contamination can ruin a wafer or a measurement. It is governed by semiconductor industry specifications, notably SEMI F19 for the surface condition of stainless steel components, rather than by the ASME BPE tables used for pharmaceutical systems.',
          'The tube looks similar to pharma-grade electropolished tube, but almost every aspect of its manufacture, cleaning and inspection is tighter. Treat UHP as its own specification, not as "very good" pharma tube.'
        ],
        table: {
          caption: 'Pharma-grade EP tube against UHP tube',
          head: ['Aspect', 'Pharma grade (ASME BPE)', 'UHP / semiconductor'],
          rows: [
            ['Governing documents', 'ASME BPE, ASTM A270', 'SEMI F19 and related SEMI specifications, owner specifications'],
            ['Base material', '316L to ASTM chemistry, BPE sulphur window', 'Often 316L produced by VIM-VAR remelting for low inclusion content'],
            ['Surface finish', 'Ra limit (SF4: 0.38 µm max)', 'Tighter roughness plus limits on visible and SEM surface defects'],
            ['Surface chemistry', 'Cr/Fe ratio for passivated surfaces', 'Surface chemistry and oxide verified by AES or XPS as specified'],
            ['Cleanliness tests', 'Visual, cleaning per owner', 'Particle, moisture and contamination tests as specified'],
            ['Packaging', 'Capped and sleeved', 'Cleaned, purged, capped and double-bagged in a clean environment']
          ]
        },
        subsections: [
          {
            h3: 'Why Remelted Material Matters',
            paragraphs: [
              'Inclusions such as oxides and sulphides exposed at the surface are where electropolishing leaves pits and where particles originate. Vacuum induction melting followed by vacuum arc remelting reduces inclusion content, so the electropolished surface has fewer defects. UHP specifications frequently call for this route; confirm the melting route required before quoting.'
            ]
          }
        ]
      },
      {
        h2: 'Semiconductor and Specialty Gas Applications',
        bullets: [
          'Process and bulk specialty gas lines in fabs and research facilities.',
          'Gas cabinets, valve manifold boxes and analytical gas panels.',
          'High-purity nitrogen, argon and other inert gas distribution in electronics and solar manufacturing.'
        ],
        paragraphs: [
          'Ultra-pure water distribution in fabs is largely built in high-purity polymers such as PVDF; stainless UHP tube is primarily a gas-system product.'
        ]
      },
      {
        h2: 'How We Quote UHP Tube',
        paragraphs: [
          'Because UHP requirements vary by owner and application, we quote strictly against your written specification. Send the specification revision, the required melting route, surface roughness and defect criteria, the cleaning and packaging requirement, and every test you need reported. Some tests, such as surface analysis by AES or XPS, are performed by specialist laboratories; the quotation will state how each requirement is met. Pharma-grade requirements are covered on our [low-Ra electropolished pipes](/low-ra-electropolished-pipes/) page.'
        ]
      },
      {
        h2: 'Ordering UHP Electropolished Tube',
        bullets: [
          'Specification and revision (for example SEMI F19 surface requirements) and any owner addenda.',
          'Material and melting route, tube OD, wall and length.',
          'Roughness, defect, surface-chemistry and cleanliness acceptance criteria.',
          'Cleaning, purging, capping and bagging requirements, and the test reports to be supplied.'
        ],
        cta: { label: 'Send a UHP tube specification', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'What is the difference between UHP tube and ASME BPE tube?', a: 'ASME BPE tube is specified for pharmaceutical systems mainly by Ra and visual criteria. UHP tube follows semiconductor specifications such as SEMI F19, with tighter roughness, limits on microscopic surface defects, surface-chemistry analysis, cleanliness testing and cleanroom packaging.' },
      { q: 'Why is VIM-VAR material used for UHP tube?', a: 'Vacuum induction melting followed by vacuum arc remelting lowers inclusion content. Fewer inclusions at the surface mean fewer pits after electropolishing and fewer particle sources.' },
      { q: 'Is UHP tube used for ultra-pure water in fabs?', a: 'Mostly not. Fab ultra-pure water distribution is largely built in high-purity polymers such as PVDF. UHP stainless tube is used mainly for process and specialty gas systems.' },
      { q: 'What should a UHP tube enquiry include?', a: 'The specification and revision, material and melting route, sizes, roughness and defect criteria, surface-chemistry and cleanliness tests, and the cleaning and packaging requirements.' }
    ]
  },

  '/low-ra-electropolished-pipes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'Low-Ra Electropolished Pipe: Specifying Roughness So It Can Be Measured and Accepted',
        paragraphs: [
          'Ra is the arithmetic average of profile deviations from the mean line over a measured length. It is the number most specifications use, but a low Ra on paper only helps if the specification also says how it is measured and accepted. Most disputes over electropolished pipe finish come from an Ra limit with no stated method, location or acceptance rule.'
        ],
        table: {
          caption: 'Common Ra targets for electropolished pipe and tube',
          head: ['Target', 'Ra max (µm)', 'Ra max (µin)', 'Typical application'],
          rows: [
            ['ASME BPE SF6', '0.64', '25', 'Less critical electropolished product contact'],
            ['ASME BPE SF5', '0.51', '20', 'General electropolished product contact'],
            ['ASME BPE SF4', '0.38', '15', 'WFI, clean steam, critical bioprocess'],
            ['Custom tighter limit', 'e.g. 0.25', 'e.g. 10', 'Selected critical services, quoted against specification'],
            ['Semiconductor UHP', 'Per SEMI / owner specification', '—', 'Gas systems; see UHP tube']
          ]
        },
        subsections: [
          {
            h3: 'What Determines How Low Ra Can Go',
            paragraphs: [
              'Electropolishing reduces micro-roughness but cannot remove scratches, drawing marks or weld irregularities deeper than the layer it dissolves. The achievable Ra therefore depends on the starting tube surface and on the mechanical polishing sequence before electropolishing, typically progressively finer abrasive stages. Tight Ra limits need a good starting tube and more mechanical work, which is why they cost more and take longer.'
            ]
          },
          {
            h3: 'Measurement Method',
            paragraphs: [
              'Ra is measured with a stylus profilometer following ASME B46.1 (or ISO equivalents), with a defined cut-off length, commonly 0.8 mm, and traverse length. Readings are taken in the direction that gives the most meaningful result, usually across the polishing lay. The specification should state the cut-off, the number of readings, where on each length they are taken and whether acceptance is on the maximum single reading or an average.'
            ]
          }
        ]
      },
      {
        h2: 'Ra Is Not the Whole Surface',
        paragraphs: [
          'A surface can pass an Ra limit and still be unacceptable: Ra averages away isolated pits, scratches and inclusions. ASME BPE therefore adds visual acceptance criteria for electropolished surfaces. For critical services, consider also specifying a peak parameter such as Rz or Rmax, and borescope inspection for visible defects. The [Ra values guide for EP pipe](/blog/ra-value-ep-pipes-surface-finish/) explains the parameters in more detail, and our [Ra converter](/resources/ra-surface-finish-converter/) translates between µm and µin.'
        ]
      },
      {
        h2: 'Avoiding Over-Specification',
        paragraphs: [
          'Every step below SF4 adds cost and rejection risk. Specify the tightest finish only where the process needs it, for example in WFI distribution or critical product contact, and use SF4 or SF5 elsewhere. Splitting the line list by required finish often reduces project cost noticeably without any hygienic compromise.'
        ]
      },
      {
        h2: 'Ordering Low-Ra Electropolished Pipe',
        bullets: [
          'Ra limit in µm or µin, and whether it is a maximum or an average.',
          'Measurement standard, cut-off length, number and location of readings.',
          'Any additional criteria: Rz or Rmax, visual acceptance, borescope inspection.',
          'Which lines need the tight finish and which can use SF4 or SF5.',
          'Measured Ra report per lot, EN 10204 3.1 certificate and PMI per length.'
        ],
        cta: { label: 'Request a low-Ra EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'What is the lowest Ra for electropolished pipe?', a: 'ASME BPE SF4 sets 0.38 µm (15 µin) maximum. Tighter limits are possible for selected services and are quoted against the written specification, because they depend on the starting tube and the mechanical polishing before electropolishing.' },
      { q: 'How should Ra be specified on a purchase order?', a: 'State the limit and whether it is a maximum or an average, the measurement standard and cut-off length, the number and location of readings, and any additional criteria such as Rz or visual acceptance.' },
      { q: 'Can a pipe pass Ra and still be rejected?', a: 'Yes. Ra averages out isolated pits, scratches and inclusions. ASME BPE adds visual acceptance criteria, and some owners add peak parameters or borescope inspection.' },
      { q: 'Does a lower Ra always justify its cost?', a: 'No. Specify the tightest finish only where the process needs it and use SF4 or SF5 elsewhere; splitting the line list by required finish usually reduces cost without hygienic compromise.' }
    ]
  },

  '/sanitary-hygienic-ep-pipes/': {
    updated: '2026-10-30',
    sections: [
      {
        h2: 'Sanitary Electropolished Pipe: Matching the Dimension Series to Your Fittings',
        paragraphs: [
          'Sanitary pipe for food, dairy, beverage, cosmetics and personal-care plants is thin-wall stainless tube that joins to clamp, union and weld fittings. In India three dimensional series are in use side by side: inch-based ASME BPE / 3-A tube, metric DIN 11850 tube used with DIN fittings, and ISO 2037 / SMS tube used with SMS unions. Each series has different ODs. Ordering tube from one series and fittings from another is the single most common and most expensive mistake in sanitary piping.'
        ],
        table: {
          caption: 'Approximate equivalents across sanitary tube series (OD x wall, mm)',
          head: ['Nominal', 'ASME BPE / 3-A (inch OD)', 'DIN 11850 Series 2', 'ISO 2037 / SMS'],
          rows: [
            ['DN25 / 1"', '25.40 x 1.65', '29 x 1.5', '25.0 x 1.2'],
            ['DN40 / 1-1/2"', '38.10 x 1.65', '41 x 1.5', '38.0 x 1.2'],
            ['DN50 / 2"', '50.80 x 1.65', '53 x 1.5', '51.0 x 1.2'],
            ['DN65 / 2-1/2"', '63.50 x 1.65', '70 x 2.0', '63.5 x 1.6'],
            ['DN80 / 3"', '76.20 x 1.65', '85 x 2.0', '76.1 x 1.6'],
            ['DN100 / 4"', '101.60 x 2.11', '104 x 2.0', '101.6 x 2.0']
          ]
        },
        subsections: [
          {
            h3: 'Which Series to Choose',
            paragraphs: [
              'Follow the equipment you already have. Many Indian dairies built on SMS unions use ISO 2037 / SMS tube; European process skids often arrive with DIN 11850 connections; export-oriented and US-referenced projects use ASME BPE / 3-A inch tube. A new plant should choose one series and hold every supplier to it. Our [dairy fittings](/dairy-fittings/) and [sanitary tri-clamp fittings](/dairy-fittings/tc-clamp-fittings/) are available to match.'
            ]
          }
        ]
      },
      {
        h2: 'Hygienic Standards Buyers Are Asked About',
        bullets: [
          '3-A Sanitary Standards: product-contact surfaces at least as smooth as a No. 4 finish, about 0.8 µm Ra, without pits, folds or crevices.',
          'EHEDG guidelines: hygienic design principles used by European buyers and equipment makers.',
          'FSSAI licensing in India: equipment must be easy to clean and made of suitable food-contact material.',
          'ASTM A270: the product standard for sanitary tubing, with polishing requirements stated on the order.'
        ],
        paragraphs: [
          'Electropolishing is not required by these standards for ordinary food duty. It is worth specifying where residue retention is the failure mode, as explained in our guide to [sanitary electropolished pipes for dairy and food equipment](/blog/dairy-plant-piping-guide/).'
        ]
      },
      {
        h2: 'Grade Choice for Food and Personal-Care Products',
        paragraphs: [
          '304L covers milk, beverages, most bakery and confectionery liquids and many cosmetic bases. 316L is the safer choice for salted, acidic or chloride-bearing products such as brines, sauces, pickles, fruit pulps and some personal-care formulations, and for hot CIP supply lines. Where one plant uses both, specify grade marking on every length.'
        ]
      },
      {
        h2: 'Ordering Sanitary Electropolished Pipe',
        bullets: [
          'Dimension series (ASME BPE / 3-A, DIN 11850 or ISO 2037 / SMS) and sizes in that series.',
          'Grade per product, and internal finish (3-A baseline or electropolished).',
          'Fitting types to match: clamp ferrules, SMS unions, bends and tees in the same series.',
          'EN 10204 3.1 certificate, PMI per length and measured Ra report for electropolished lots.'
        ],
        cta: { label: 'Request a sanitary EP pipe quotation', href: '/contact-us/' }
      }
    ],
    faqs: [
      { q: 'Are DIN 11850 and SMS tube interchangeable?', a: 'No. They have different outside diameters, for example 29 x 1.5 mm in DIN 11850 Series 2 against 25.0 x 1.2 mm in ISO 2037 / SMS at DN25. Fittings from one series do not fit tube from the other.' },
      { q: 'What surface finish does 3-A require?', a: 'At least as smooth as a No. 4 finish, generally taken as about 0.8 µm Ra, free of pits, folds and crevices. Electropolishing goes beyond that baseline.' },
      { q: 'Is 304L or 316L better for sanitary pipe?', a: '304L suits milk, beverages and most neutral products. 316L is safer for salted, acidic or chloride-bearing products and hot CIP supply.' },
      { q: 'Do food plants need electropolished pipe?', a: 'Not by regulation for ordinary duty. It is justified on lines where product sticks or ferments, on flavoured and cultured products and on CIP return legs used to verify cleaning.' }
    ]
  }
};
