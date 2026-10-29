// Long-form technical guides rendered on category pages (CategoryGuide.jsx).
// Inline links use [anchor](/path/) and must point at prerendered pages.
// Company claims here are limited to what the rest of the site already states.

export const CATEGORY_GUIDES = {
  'electropolished-pipes': {
    updated: '2026-10-29',
    sections: [
      {
        h2: 'Electropolished Stainless Steel Pipes: Metallurgy and Process Overview',
        paragraphs: [
          'An electropolished pipe is a stainless steel pipe or tube whose surface has been finished by controlled electrochemical dissolution rather than by abrasion alone. The pipe is made the anode in an electrolyte, usually a blend of phosphoric and sulphuric acids, and a direct current removes metal from its surface. Because current density is highest on micro-peaks, burr tips and the edges of scratches, those features dissolve faster than the valleys around them. The result is a levelled, bright surface with fewer sites where product, biofilm or particles can lodge.',
          'Electropolishing is applied almost entirely to austenitic grades, above all [316L electropolished pipe](/ss-316l-electropolished-pipes/) and [304L electropolished pipe](/ss-304l-electropolished-pipes/), and increasingly to duplex grades such as 2205 where chloride resistance and strength are needed together. The low-carbon "L" grades are the default for welded hygienic systems because they resist sensitisation, the chromium-carbide precipitation at grain boundaries that causes intergranular corrosion next to welds.'
        ],
        subsections: [
          {
            h3: 'Why Electrochemical Removal Beats Abrasion Alone',
            paragraphs: [
              'Mechanical polishing cuts and smears the surface. It lowers the Ra value but can fold metal over itself, trap polishing compound in the laps, and leave a work-hardened, deformed layer with embedded iron from abrasives. Electropolishing removes that disturbed layer instead of pushing it around. Embedded inclusions, free iron and smeared metal at the surface are dissolved, and microscopic burrs left by cutting or drawing are taken off preferentially.',
              'The same process changes the chemistry of the surface. Iron dissolves more readily than chromium, so the passive oxide film that re-forms after electropolishing is enriched in chromium relative to the base metal. That chromium-rich passive layer is the reason electropolished tube resists pitting, rouging and metal-ion pick-up better than the same grade with a mechanical finish of similar roughness.'
            ]
          },
          {
            h3: 'Pipe or Tube: Choosing the Right Product Form',
            paragraphs: [
              'Hygienic systems are normally built from tube sized by outside diameter with a fixed wall, for example 1/2" to 6" OD in 0.065" (1.65 mm) wall, supplied as [ASTM A270 electropolished sanitary tubes](/astm-a270-electropolished-tubes/). Process and utility systems that follow NPS schedules use [ASTM A312 electropolished pipe](/astm-a312-electropolished-pipes/). Both are available as [seamless electropolished pipes](/electropolished-seamless-pipes/) or [welded and ERW electropolished pipes](/electropolished-welded-erw-pipes/). Seamless is chosen where the specification excludes a weld seam; welded tube with a properly finished ID bead is standard in most ASME BPE systems.'
            ]
          }
        ]
      },
      {
        h2: 'Technical Specifications and Surface Finish Metrics',
        paragraphs: [
          'The table below compares the grades most often electropolished. Mechanical values are the specified minimums of ASTM A312 for austenitic pipe and ASTM A789/A790 for duplex; tubing standards such as A269 and A270 control hardness rather than tensile values. Confirm the exact requirement on your purchase specification, because supplementary requirements such as ASTM A270 S2 (pharmaceutical quality) add tighter controls.'
        ],
        table: {
          caption: 'Common electropolished pipe and tube grades',
          head: ['Grade (UNS)', 'Product standards', 'Min. tensile strength (A312 / A789)', 'Min. yield strength', 'Min. elongation', 'Typical use'],
          rows: [
            ['304L (S30403)', 'ASTM A269, A270, A312', '485 MPa', '170 MPa', '35%', 'Dairy, beverage, general food, purified-water utilities'],
            ['316L (S31603)', 'ASTM A269, A270, A312; ASME BPE', '485 MPa', '170 MPa', '35%', 'WFI, purified water, clean steam, bioprocess, chemical transfer'],
            ['316 (S31600)', 'ASTM A269, A312', '515 MPa', '205 MPa', '35%', 'Process lines not welded in situ, instrumentation'],
            ['2205 duplex (S32205)', 'ASTM A789 tube, A790 pipe', '655 MPa', '485 MPa', '25%', 'Chloride-bearing media, brines, higher pressure at thinner wall']
          ]
        },
        subsections: [
          {
            h3: 'ASME BPE Surface Finish Designations',
            paragraphs: [
              'ASME BPE defines product-contact surface finishes by maximum Ra. Mechanically polished finishes are SF1 to SF3; electropolished finishes are SF4 to SF6. SF4 is the usual specification for WFI, clean steam and critical bioprocess lines. Note that 15 µin and 0.38 µm are the same limit: the specification lists both.'
            ],
            table: {
              caption: 'ASME BPE product-contact surface finishes (Ra maximum)',
              head: ['Designation', 'Ra max (µm)', 'Ra max (µin)', 'Finish method'],
              rows: [
                ['SF1', '0.51', '20', 'Mechanically polished'],
                ['SF2', '0.64', '25', 'Mechanically polished'],
                ['SF3', '0.76', '30', 'Mechanically polished'],
                ['SF4', '0.38', '15', 'Mechanically polished and electropolished'],
                ['SF5', '0.51', '20', 'Mechanically polished and electropolished'],
                ['SF6', '0.64', '25', 'Mechanically polished and electropolished']
              ]
            }
          },
          {
            h3: 'Below SF4: Low-Ra and Ultra-High-Purity Requirements',
            paragraphs: [
              'Some buyers specify a finish tighter than SF4, for example Ra 0.25 µm (10 µin) or lower for ultra-high-purity gas or critical pharmaceutical service. These finishes depend on the starting tube, the mechanical pre-polish and the electropolishing cycle, so they are quoted against your written specification rather than offered as a catalogue item. See our [low-Ra electropolished pipes](/low-ra-electropolished-pipes/) for the options, and send the exact Ra limit, measurement method and acceptance criteria with your enquiry.'
            ]
          },
          {
            h3: 'ID and OD Surface Integrity',
            paragraphs: [
              'In a process line the internal diameter is the surface that matters, because it touches the product. [Internal electropolished pipes](/internal-electropolished-pipes/) are finished on the bore, with the ID weld bead of welded tube conditioned before electropolishing so that it is flush and free of crevices. The OD can be left mill-finished, polished for appearance, or electropolished as well where the outside is exposed to cleanroom air or wash-down chemicals.',
              'Ra is only one measure. A surface can meet its Ra limit and still be unacceptable if it shows pits, inclusions, orange peel, weld discolouration or cloudiness. ASME BPE therefore pairs the Ra limit with visual acceptance criteria for electropolished surfaces, and sets chemistry criteria for the passive film, such as a minimum Cr/Fe ratio verified by surface analysis.'
            ]
          },
          {
            h3: 'Passivation and the Chromium-Rich Passive Layer',
            paragraphs: [
              'Every stainless surface carries a thin chromium-oxide passive film. Chemical passivation to ASTM A967 or A380 removes free iron and helps that film re-form. Electropolishing goes further: it removes the disturbed surface layer and leaves a passive film with a higher chromium-to-iron ratio than chemical passivation alone produces. After installation, welds and any reworked areas are passivated again, because welding heat destroys the passive film locally.'
            ]
          }
        ]
      },
      {
        h2: 'Key Industrial Applications and High-Purity Sectors',
        paragraphs: [
          'Electropolished pipe earns its cost where surface cleanliness is part of the product specification: where residue, particles, metal ions or biofilm would contaminate a batch, a wafer or a food line.'
        ],
        subsections: [
          {
            h3: 'Pharmaceutical and Bioprocessing Systems',
            paragraphs: [
              'Water for injection, purified water and clean steam distribution are the classic applications. These loops run hot, are sanitised repeatedly and are audited against GMP. ASME BPE governs the tubing, fittings and surface finish, and SF4 electropolished 316L is the most common choice for WFI and clean steam. A smooth, chromium-rich surface slows rouge formation and makes the cleaning and sanitisation steps validated during qualification repeatable. For loop layout, dead-leg limits and drainability, see our guide to [WFI loop piping design](/blog/wfi-loop-piping-design/), and for the tubing itself our [ASME BPE electropolished tubes](/asme-bpe-electropolished-tubes/).',
              'Bioprocess lines for media, buffers and product transfer, and the CIP and SIP circuits that clean them, use the same tubing. The aim is a system that drains completely, has no crevices at joints, and can be cleaned to a validated residue limit every time.'
            ]
          },
          {
            h3: 'Semiconductor and Ultra-High-Purity Service',
            paragraphs: [
              'In semiconductor fabs, ultra-pure water distribution itself is mostly built in high-purity plastics such as PVDF. Electropolished 316L tube is the standard for ultra-high-purity process gas lines and for stainless components in chemical and water systems, where particle shedding, moisture retention and metal-ion contamination must be minimised. These applications are governed by semiconductor industry specifications that go beyond ASME BPE, so we quote them strictly against your specification.'
            ]
          },
          {
            h3: 'Food, Beverage and Dairy Lines',
            paragraphs: [
              'Dairy and beverage plants use sanitary tube to ASTM A270 with 3-A Sanitary Standards practice, connected by clamp, SMS or welded joints. Mechanically polished tube is adequate for many lines. Electropolishing pays back where product sticks or ferments: cultured products, syrups, flavoured milk, and CIP return legs used to prove a circuit is clean. Our [dairy electropolished pipes](/industries/dairy-electropolished-pipes/) page covers grade selection by product, and [tri-clamp ferrules and fittings](/dairy-fittings/tc-clamp-fittings/) complete the connection.'
            ]
          },
          {
            h3: 'Aerospace Test Stands and Instrumentation',
            paragraphs: [
              'Instrumentation, sampling and test-stand lines use small-bore electropolished tube where cleanliness has to be demonstrated, for example in oxygen service, where systems are cleaned to standards such as ASTM G93, or in analytical sampling, where a contaminated line gives a false reading. A smooth bore cleans more reliably and retains less moisture and particulate. Small-bore [ASTM A269 electropolished tubing](/astm-a269-electropolished-tubing/) is the usual product for this work.'
            ]
          }
        ]
      },
      {
        h2: 'Manufacturing Process and Quality Assurance',
        paragraphs: [
          'Every electropolished lot is inspected and documented so that the certificate can go straight into the buyer\'s quality or validation file. The checks below are those carried out in our [testing and inspection](/testing-inspection/) facility; the exact test plan for an order follows the product standard and your purchase specification.'
        ],
        subsections: [
          {
            h3: 'Positive Material Identification (PMI)',
            paragraphs: [
              'PMI by X-ray fluorescence confirms the alloy of each length before and after finishing, so a 304L length cannot end up in a 316L loop. Results are recorded against the heat number on the certificate.'
            ]
          },
          {
            h3: 'Eddy Current and Hydrostatic Testing',
            paragraphs: [
              'ASTM A269 and A270 require each tube to pass a hydrostatic or non-destructive electric test. Eddy current testing scans the full length for seam and wall defects; hydrostatic testing proves pressure integrity. The method used is stated on the certificate.'
            ]
          },
          {
            h3: 'Ultrasonic Testing',
            paragraphs: [
              'Ultrasonic testing is applied where the specification calls for volumetric inspection, typically on seamless pipe and heavier walls, to detect laminations and internal discontinuities that a surface test cannot find.'
            ]
          },
          {
            h3: 'Profilometer Surface Roughness Testing',
            paragraphs: [
              'Ra is measured with a calibrated stylus profilometer on the internal surface, and the measured values are reported for each electropolished lot. Visual inspection of the bore under good lighting checks for the defects that Ra does not capture, such as pits, haze or weld-bead irregularities.'
            ]
          },
          {
            h3: 'Documentation Supplied',
            bullets: [
              'EN 10204 3.1 mill test certificate traced to heat number, with chemical analysis and mechanical properties.',
              'PMI record for every length.',
              'Ra surface report with measured values for each electropolished lot.',
              'Hydrostatic or eddy current test result, and ultrasonic test report where specified.',
              'Passivation record where passivation is part of the order.'
            ]
          }
        ]
      },
      {
        h2: 'Why Buyers Choose SteelManufacturer.in for Electropolished Pipes',
        paragraphs: [
          'We manufacture and finish electropolished pipe and tube at our Taloja MIDC works in Navi Mumbai and supply buyers across India and in export markets including the USA, UAE, Europe and Southeast Asia.'
        ],
        bullets: [
          'Custom cut lengths and custom sizes, in small lots as well as large ones, with heat-number traceability that survives fabrication.',
          'EN 10204 3.1 certification on every dispatch, written so it can be filed directly in a validation or customer-audit package.',
          'Matching [electropolished pipe fittings](/electropolished-pipe-fittings/), so bends, tees and reducers carry the same finish and documentation as the tube; [stainless steel flanges](/flanges/) and [buttweld fittings](/buttweld-fittings/) for process connections.',
          'Export-grade packing: PVC end caps, polyethylene sleeves and seaworthy wooden boxes, with export documentation prepared in-house.',
          'Dispatch and transit confirmed in writing with each quotation, for delivery to your site or your fabricator\'s shop.'
        ],
        cta: { label: 'Request a quotation for electropolished pipes', href: '/contact/' }
      }
    ],
    faqs: [
      {
        q: 'Can electropolished pipe be welded without losing its finish?',
        a: 'Yes. Electropolished 316L tube is joined by autogenous orbital GTA welding with inert gas purge on the ID, which keeps the weld bead smooth and free of heavy oxide. ASME BPE controls the sulphur content of 316L tube, typically to 0.005 to 0.017 percent, so that weld penetration is consistent between heats. The heat-affected zone loses its electropolished passive film, so welds are inspected and the system is passivated after installation. Specify matched heats or a sulphur range if your fabricator welds tube from different lots together.'
      },
      {
        q: 'How much easier is electropolished pipe to clean than mechanically polished pipe?',
        a: 'Electropolishing removes the folded, smeared surface layer that mechanical polishing leaves, along with embedded abrasive and free iron. There are fewer micro-crevices for residue and biofilm to anchor in, so product releases more readily and CIP chemistry reaches the metal. In practice that gives more consistent cleaning-validation results and can allow shorter or gentler cleaning cycles, which you confirm during your own cleaning validation.'
      },
      {
        q: 'Is electropolished stainless steel resistant to chlorides and cleaning chemicals?',
        a: 'Electropolishing improves pitting resistance compared with the same grade mechanically polished, because the passive film is richer in chromium and the surface has fewer initiation sites. It does not change the alloy. 316L remains limited in hot, concentrated chloride service, where a duplex such as 2205 or a higher alloy is the right choice. Routine caustic and acid CIP chemicals and hot WFI are well within the capability of electropolished 316L.'
      },
      {
        q: 'How is the Ra value of electropolished pipe verified?',
        a: 'Ra is measured on the internal surface with a calibrated stylus profilometer, and the measured values are reported for each electropolished lot alongside the EN 10204 3.1 certificate. ASME BPE also requires visual examination of electropolished surfaces, because a surface can meet its Ra limit and still show pits, haze or weld defects. If your specification requires a particular measurement method, cut-off length or number of readings, include it with your enquiry so the report matches your acceptance criteria.'
      },
      {
        q: 'What is the difference between SF1 and SF4?',
        a: 'SF1 is a mechanically polished finish with a maximum Ra of 0.51 µm (20 µin). SF4 is mechanically polished and then electropolished, with a maximum Ra of 0.38 µm (15 µin). SF4 is the usual specification for WFI, clean steam and critical bioprocess lines; SF1 is often adequate for ambient purified-water loops and general food duty.'
      }
    ]
  }
};
