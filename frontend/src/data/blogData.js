/**
 * Steel Knowledge Hub & Technical Guides Data
 * Curated technical articles, metallurgical guides, dimension tables, and engineering specifications.
 */

export const blogPosts = [
  {
    id: "electropolishing-stainless-steel-pipes-guide",
    slug: "electropolishing-stainless-steel-pipes-guide",
    title: "The Ultimate Guide to Electropolishing Stainless Steel Pipes & Tubes",
    category: "Surface Finish & EP",
    date: "July 08, 2026",
    readTime: "7 min read",
    author: "Sakshi Metallurgical & EP Technical Team",
    authorRole: "Surface Engineering Division",
    desc: "Understand the electrochemical process that reduces surface roughness to Ra <= 0.38 µm (15 µin), critical for bioprocess, pharmaceutical, and ultra-high purity (UHP) gas delivery systems.",
    image: "/electropolish_pipes.webp",
    tags: ["Electropolishing", "SS 316L", "ASME BPE", "Surface Roughness", "Ra Finish", "Pharma Piping"],
    keyTakeaways: [
      "Electropolishing (EP) uses a controlled galvanic current in a temperature-regulated acid bath to selectively dissolve microscopic high-spots on stainless steel inner walls.",
      "Achieves ultra-smooth surface finishes down to Ra ≤ 0.38 µm (15 µin) meeting ASME BPE SF4 requirements.",
      "Enhances the chromium-to-iron (Cr/Fe) ratio on the surface from 1.1 up to 2.4+, dramatically increasing passive oxide film corrosion resistance.",
      "Eliminates micro-cracks, inclusions, and mechanical buffing residues that cause bio-burden accumulation in sterile process piping."
    ],
    content: `
<h2>1. Introduction to Electropolishing (EP) in High-Purity Piping</h2>
<p>In high-purity industries such as biopharmaceuticals, semiconductor manufacturing, food & beverage, and chemical processing, internal surface topography directly influences process contamination, corrosion rates, and cleaning validation (CIP/SIP). Mechanical grinding or honing, while effective for bulk dimensioning, leaves micro-scratches, directional striations, embedded abrasive grains, and cold-worked stressed layers on the inner diameter (ID) of steel tubes.</p>

<p>Electropolishing is an electro-chemical surface finishing process that removes metal from a stainless steel workpiece. It acts as an "inverse electroplating" process. By making the stainless steel tube the anode in a temperature-controlled bath of phosphoric and sulfuric acids with an applied DC current, metal dissolves from the surface into the electrolyte.</p>

<h2>2. How the Electrochemical Dissolution Mechanism Works</h2>
<p>During electropolishing, a viscous film of dissolved metal ions (the micro-viscous layer) forms over the ID wall of the pipe. High spots or microscopic peaks project further into this film where electrical current density is highest. Consequently, metal at the peaks dissolves much faster than in the valleys.</p>

<ul>
  <li><strong>Peak Dissolution Rate:</strong> Micro-peaks dissolve up to 3x faster than surrounding micro-troughs.</li>
  <li><strong>Passivation Layer Enrichment:</strong> Iron atoms are preferentially dissolved over Chromium atoms, raising the surface Cr/Fe ratio to 2.0 – 2.8.</li>
  <li><strong>Deburring & Stress Relief:</strong> Removes microscopic burrs and relieves surface tensile stress induced during cold drawing or mill tube forming.</li>
</ul>

<h2>3. Surface Finish Classification (ASME BPE Standards)</h2>
<p>The table below summarizes surface finish designations established by ASME BPE (Bioprocessing Equipment) for electropolished stainless steel tubing (ASTM A270 / ASTM A312):</p>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>ASME BPE Designation</th>
        <th>Process Type</th>
        <th>Max Surface Roughness (Ra) µm</th>
        <th>Max Surface Roughness (Ra) µin</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SF1</strong></td>
        <td>Mechanically Polished</td>
        <td>0.51 µm</td>
        <td>20 µin</td>
      </tr>
      <tr>
        <td><strong>SF2</strong></td>
        <td>Mechanically Polished</td>
        <td>0.64 µm</td>
        <td>25 µin</td>
      </tr>
      <tr>
        <td><strong>SF4</strong></td>
        <td>Electropolished (EP)</td>
        <td>0.38 µm</td>
        <td>15 µin</td>
      </tr>
      <tr>
        <td><strong>SF5</strong></td>
        <td>Electropolished (EP)</td>
        <td>0.51 µm</td>
        <td>20 µin</td>
      </tr>
      <tr>
        <td><strong>SF6</strong></td>
        <td>Electropolished (EP)</td>
        <td>0.64 µm</td>
        <td>25 µin</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>4. Electropolishing vs Mechanical Polishing: Comparison Matrix</h2>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>Property / Parameter</th>
        <th>Mechanical Polishing</th>
        <th>Electropolishing (Sakshi EP Standard)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Surface Profile</td>
        <td>Directional lines, smeared metal overhangs</td>
        <td>Featureless, feature-free specular mirror finish</td>
      </tr>
      <tr>
        <td>Passivation Layer Thickness</td>
        <td>15 – 30 Å (Standard air passivation)</td>
        <td>40 – 60 Å (Enriched Cr2O3 oxide layer)</td>
      </tr>
      <tr>
        <td>Chromium / Iron Ratio</td>
        <td>~1.0 to 1.2</td>
        <td>2.0 to 2.8 (XPS verified)</td>
      </tr>
      <tr>
        <td>Bacterial Adhesion / Biofilm Risk</td>
        <td>Moderate (micro-cavities shelter bacteria)</td>
        <td>Extremely low (ultra-clean CIP cleanable)</td>
      </tr>
      <tr>
        <td>Outgassing Rate (UHP Vacuum)</td>
        <td>Higher due to entrapped moisture/oils</td>
        <td>Ultra-low outgassing under high vacuum</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>5. Quality Inspection & Metallurgical Verification Protocols</h2>
<p>Sakshi Forge subjects every batch of electropolished stainless steel pipes and fittings to stringent quality assurance verification:</p>
<ol>
  <li><strong>Stylus Surface Profilometry:</strong> Multi-point contact profilometer scans along the inner longitudinal axis to verify Ra values ≤ 0.38 µm.</li>
  <li><strong>Auger Electron Spectroscopy (AES) & XPS:</strong> Verification of passive oxide layer depth and Cr/Fe elemental ratio.</li>
  <li><strong>Ferroxyl Test & Salt Spray (ASTM B117):</strong> 100-hour exposure test ensuring zero free iron contamination or pinhole pitting.</li>
  <li><strong>Borescope ID Inspection:</strong> Optical video borescope audit across 100% of pipe interior lengths to ensure no chemical stains, pitting, or uneven oxidation.</li>
</ol>
`,
    faqs: [
      {
        q: "What stainless steel grades are best suited for electropolishing?",
        a: "Austenitic grades SS 316L and SS 304L respond exceptionally well to electropolishing. SS 316L is preferred in biopharma due to its 2-3% Molybdenum content, which enhances pitting corrosion resistance."
      },
      {
        q: "Does electropolishing alter the dimensional tolerances of the pipe?",
        a: "Electropolishing removes approximately 10 to 25 microns (0.0004 to 0.001 inches) of material from the surface. This controlled removal is factored into raw tube wall thickness tolerances to maintain final ASTM A270 specs."
      },
      {
        q: "What EN 10204 certification is provided with electropolished pipes?",
        a: "Sakshi Forge provides complete EN 10204 3.1 Mill Test Certificates (MTC) detailing heat codes, chemical composition, mechanical tensile values, Ra roughness reports, and passivation test records."
      }
    ]
  },
  {
    id: "asme-b16-5-flange-dimensions-pressure-ratings",
    slug: "asme-b16-5-flange-dimensions-pressure-ratings",
    title: "ASME B16.5 Flange Dimensions & Pressure Ratings Explained",
    category: "Flange Standards",
    date: "June 24, 2026",
    readTime: "8 min read",
    author: "Senior Piping Engineering Specialist",
    authorRole: "Flange Engineering Department",
    desc: "A comprehensive engineering guide on Class 150 to Class 2500 Weld Neck, Slip-On, Blind, and Threaded flange specifications, bolt circle dimensions, and hydrotest pressure formulas.",
    image: "/flanges_pipes.webp",
    tags: ["ASME B16.5", "Flange Dimensions", "Weld Neck Flange", "Class 150", "Class 300", "Class 600", "Forged Steel"],
    keyTakeaways: [
      "ASME B16.5 covers pipe flanges and flanged fittings from NPS 1/2 through NPS 24 in pressure classes 150, 300, 400, 600, 900, 1500, and 2500.",
      "Pressure ratings decrease non-linearly as service temperatures increase due to yield strength reduction in parent metals.",
      "Raised Face (RF) flanges feature a standard 1.6 mm (1/16 in) high face for Class 150/300 and 6.35 mm (1/4 in) high face for Class 600+.",
      "Proper bolt tightening sequence (star pattern) with calibrated torque wrenches is critical to prevent gasket crushing or micro-leakage."
    ],
    content: `
<h2>1. Scope & Application of ASME B16.5 Standard</h2>
<p>The ASME B16.5 standard is the global benchmark for steel pipe flanges and flanged fittings. It covers pressure-temperature ratings, materials, dimensions, tolerances, marking, testing, and methods of designating openings for pipe flanges in sizes NPS 1/2 through NPS 24.</p>

<p>Sakshi Forge manufactures forged flanges in accordance with ASME B16.5 using closed-die drop forging and ring rolling processes to ensure optimal grain flow alignment along high-stress flange necks and bolt circle areas.</p>

<h2>2. Material Group Classifications (ASTM Specifications)</h2>
<p>Under ASME B16.5 Table 1A, flange materials are categorized into material groups based on metallurgical behavior under heat and pressure:</p>

<ul>
  <li><strong>Group 1.1 (Carbon Steel):</strong> ASTM A105, ASTM A350 Gr. LF2, ASTM A515 Gr. 70.</li>
  <li><strong>Group 1.9 (Alloy Steel):</strong> ASTM A182 Gr. F11, ASTM A182 Gr. F22 (High temperature steam lines).</li>
  <li><strong>Group 2.1 (Austenitic SS):</strong> ASTM A182 Gr. F304, F304L.</li>
  <li><strong>Group 2.2 (Austenitic SS):</strong> ASTM A182 Gr. F316, F316L, F317L.</li>
  <li><strong>Group 2.8 (Duplex SS):</strong> ASTM A182 Gr. F51 (UNS S31803), F53 (UNS S32750 Super Duplex).</li>
</ul>

<h2>3. ASME B16.5 Class 150 Flange Dimension Reference Table (NPS 1 to NPS 8)</h2>
<p>Below are key nominal dimensions for ASME B16.5 Class 150 Weld Neck (WN) and Slip-On (SO) flanges manufactured by Sakshi Forge:</p>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>NPS (Inches)</th>
        <th>Outside Diameter (O) mm</th>
        <th>Thickness (C) mm</th>
        <th>Bolt Circle Diameter (W) mm</th>
        <th>Number of Bolt Holes</th>
        <th>Bolt Hole Diameter (Y) mm</th>
        <th>Hub Diameter (X) mm</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1"</td>
        <td>108 mm</td>
        <td>14.3 mm</td>
        <td>79.4 mm</td>
        <td>4</td>
        <td>15.9 mm (5/8")</td>
        <td>49.2 mm</td>
      </tr>
      <tr>
        <td>1-1/2"</td>
        <td>127 mm</td>
        <td>17.5 mm</td>
        <td>98.4 mm</td>
        <td>4</td>
        <td>15.9 mm (5/8")</td>
        <td>65.0 mm</td>
      </tr>
      <tr>
        <td>2"</td>
        <td>152 mm</td>
        <td>19.1 mm</td>
        <td>120.7 mm</td>
        <td>4</td>
        <td>19.1 mm (3/4")</td>
        <td>77.7 mm</td>
      </tr>
      <tr>
        <td>3"</td>
        <td>191 mm</td>
        <td>23.9 mm</td>
        <td>152.4 mm</td>
        <td>4</td>
        <td>19.1 mm (3/4")</td>
        <td>108.0 mm</td>
      </tr>
      <tr>
        <td>4"</td>
        <td>229 mm</td>
        <td>23.9 mm</td>
        <td>190.5 mm</td>
        <td>8</td>
        <td>19.1 mm (3/4")</td>
        <td>134.9 mm</td>
      </tr>
      <tr>
        <td>6"</td>
        <td>279 mm</td>
        <td>25.4 mm</td>
        <td>241.3 mm</td>
        <td>8</td>
        <td>22.2 mm (7/8")</td>
        <td>192.1 mm</td>
      </tr>
      <tr>
        <td>8"</td>
        <td>343 mm</td>
        <td>28.6 mm</td>
        <td>298.5 mm</td>
        <td>8</td>
        <td>22.2 mm (7/8")</td>
        <td>246.1 mm</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>4. Maximum Allowable Working Pressure (MAWP) vs Temperature</h2>
<p>For ASTM A182 F316L (Group 2.2), maximum working pressure drops as temperature increases:</p>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>Temperature (°C / °F)</th>
        <th>Class 150 (bar)</th>
        <th>Class 300 (bar)</th>
        <th>Class 600 (bar)</th>
        <th>Class 1500 (bar)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-29 to 38 °C (-20 to 100 °F)</td>
        <td>19.0 bar</td>
        <td>49.6 bar</td>
        <td>99.3 bar</td>
        <td>248.2 bar</td>
      </tr>
      <tr>
        <td>100 °C (212 °F)</td>
        <td>16.2 bar</td>
        <td>42.2 bar</td>
        <td>84.4 bar</td>
        <td>211.0 bar</td>
      </tr>
      <tr>
        <td>200 °C (392 °F)</td>
        <td>13.7 bar</td>
        <td>35.6 bar</td>
        <td>71.3 bar</td>
        <td>178.2 bar</td>
      </tr>
      <tr>
        <td>300 °C (572 °F)</td>
        <td>10.2 bar</td>
        <td>31.6 bar</td>
        <td>63.2 bar</td>
        <td>158.0 bar</td>
      </tr>
      <tr>
        <td>400 °C (752 °F)</td>
        <td>6.5 bar</td>
        <td>29.4 bar</td>
        <td>58.9 bar</td>
        <td>147.2 bar</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>5. Flange Facing Types & Machining Finish</h2>
<ul>
  <li><strong>Raised Face (RF):</strong> Most common facing. 1.6 mm height for Class 150/300; 6.35 mm for Class 600+. Phonographic serrated finish (Ra 3.2 to 6.3 µm / 125 to 250 µin AARH) for spiral wound gaskets.</li>
  <li><strong>Ring Type Joint (RTJ):</strong> Used in high pressure/high temperature oilfield lines (Class 600 to 2500). Utilizes octagonal or oval metallic ring gaskets.</li>
  <li><strong>Flat Face (FF):</strong> Used when mating with cast iron or low-pressure pumps to prevent bending moments during bolt torquing.</li>
</ul>
`,
    faqs: [
      {
        q: "What is the difference between ASME B16.5 and ASME B16.47?",
        a: "ASME B16.5 applies to nominal pipe sizes from NPS 1/2 through NPS 24. For larger piping systems (NPS 26 through NPS 60), ASME B16.47 Series A (MSS SP-44) or Series B (API 605) standards apply."
      },
      {
        q: "Does Sakshi Forge perform Ultrasonic Testing (UT) on raw flange forgings?",
        a: "Yes. All forged blanks for Class 600, 900, 1500, and 2500 flanges undergo 100% Ultrasonic Testing according to ASTM A388 / EN 10228 to detect internal voids or inclusions prior to final CNC machining."
      }
    ]
  },
  {
    id: "pipe-schedules-std-vs-xs-xxs-explained",
    slug: "pipe-schedules-std-vs-xs-xxs-explained",
    title: "Understanding Pipe Schedules: Standard Wall (STD) vs Extra Strong (XS) vs XXS",
    category: "Piping Specifications",
    date: "May 18, 2026",
    readTime: "6 min read",
    author: "Sakshi Quality Assurance Desk",
    authorRole: "Piping Systems Analysis Group",
    desc: "A technical analysis of nominal pipe size (NPS), wall thickness tolerances under ASTM A312 / ASME B36.10M / B36.19M, and internal pressure carrying capacity calculations using Barlow's Formula.",
    image: "/hero_forge.webp",
    tags: ["Pipe Schedules", "ASME B36.10M", "Barlow Formula", "Schedule 40", "Schedule 80", "ASTM A312"],
    keyTakeaways: [
      "Pipe Schedule numbers (e.g. Sch 10S, Sch 40, Sch 80, Sch 160) define wall thickness relative to outer diameter.",
      "For NPS 1/8 to NPS 8, STD wall thickness equals Schedule 40. For NPS 10 and above, STD wall thickness remains constant at 9.53 mm (0.375 in).",
      "For NPS 1/8 to NPS 8, XS wall thickness equals Schedule 80. For NPS 10 and above, XS wall thickness remains fixed at 12.7 mm (0.500 in).",
      "Stainless steel pipe schedules carry an 'S' suffix (e.g. 5S, 10S, 40S, 80S) defined under ASME B36.19M."
    ],
    content: `
<h2>1. Demystifying NPS, DN, and Pipe Schedule Numbers</h2>
<p>In industrial piping engineering, pipe size is designated by <strong>NPS</strong> (Nominal Pipe Size - inches) in North America or <strong>DN</strong> (Diameter Nominal - mm) in Europe and ISO systems. Crucially, NPS does not equal exact outer diameter for sizes below NPS 14.</p>

<p>The term <strong>Schedule (Sch)</strong> was introduced by ASME B36.10 to standardise wall thicknesses. The schedule number is approximately equal to:</p>
<p style="text-align: center; font-weight: bold; background: var(--bg-dark-800); padding: 1rem; border-radius: 6px; color: var(--primary-yellow);">
  Schedule ≈ 1000 × (Internal Service Pressure P / Allowable Stress S)
</p>

<h2>2. Dimension Comparison Matrix: NPS 1" to NPS 10" Pipes</h2>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>NPS (Inches)</th>
        <th>Outside Diameter OD (mm)</th>
        <th>Sch 10S Wall (mm)</th>
        <th>Sch 40 / STD Wall (mm)</th>
        <th>Sch 80 / XS Wall (mm)</th>
        <th>Sch 160 Wall (mm)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1" (DN 25)</td>
        <td>33.4 mm</td>
        <td>2.77 mm</td>
        <td>3.38 mm (STD)</td>
        <td>4.55 mm (XS)</td>
        <td>6.35 mm</td>
      </tr>
      <tr>
        <td>2" (DN 50)</td>
        <td>60.3 mm</td>
        <td>2.77 mm</td>
        <td>3.91 mm (STD)</td>
        <td>5.54 mm (XS)</td>
        <td>8.74 mm</td>
      </tr>
      <tr>
        <td>3" (DN 80)</td>
        <td>88.9 mm</td>
        <td>3.05 mm</td>
        <td>5.49 mm (STD)</td>
        <td>7.62 mm (XS)</td>
        <td>11.13 mm</td>
      </tr>
      <tr>
        <td>4" (DN 100)</td>
        <td>114.3 mm</td>
        <td>3.05 mm</td>
        <td>6.02 mm (STD)</td>
        <td>8.56 mm (XS)</td>
        <td>13.49 mm</td>
      </tr>
      <tr>
        <td>6" (DN 150)</td>
        <td>168.3 mm</td>
        <td>3.40 mm</td>
        <td>7.11 mm (STD)</td>
        <td>10.97 mm (XS)</td>
        <td>14.27 mm</td>
      </tr>
      <tr>
        <td>8" (DN 200)</td>
        <td>219.1 mm</td>
        <td>3.76 mm</td>
        <td>8.18 mm (STD)</td>
        <td>12.70 mm (XS)</td>
        <td>22.23 mm</td>
      </tr>
      <tr>
        <td>10" (DN 250)</td>
        <td>273.1 mm</td>
        <td>4.19 mm</td>
        <td>9.27 mm / (STD=9.53)</td>
        <td>12.70 mm (XS)</td>
        <td>28.58 mm</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>3. Calculating Pressure Rating Using Barlow's Formula</h2>
<p>To determine the internal burst pressure or maximum allowable design pressure for seamless or welded stainless steel pipe, mechanical engineers utilize <strong>Barlow's Formula</strong>:</p>

<p style="text-align: center; font-weight: bold; background: var(--bg-dark-800); padding: 1rem; border-radius: 6px; color: var(--primary-yellow);">
  P = (2 × S × t) / D
</p>

<ul>
  <li><strong>P:</strong> Internal working pressure (PSI or MPa)</li>
  <li><strong>S:</strong> Allowable material stress value (PSI or MPa) under ASTM A312 SS 316L (approx. 16,700 PSI at room temp)</li>
  <li><strong>t:</strong> Nominal wall thickness minus mill manufacturing tolerance (typically -12.5% under ASTM A312)</li>
  <li><strong>D:</strong> Outside Diameter of pipe (inches or mm)</li>
</ul>

<h2>4. Difference Between ASME B36.10M (Carbon Steel) and ASME B36.19M (Stainless Steel)</h2>
<p>While ASME B36.10M dictates heavy carbon steel pipe wall thicknesses up to Schedule 160 and XXS, stainless steel lines operating in corrosive environments often call for thinner wall schedules (5S, 10S) to reduce raw material weight and cost while preserving structural pressure resistance.</p>
`,
    faqs: [
      {
        q: "What is the mill undertolerance percentage for seamless stainless steel pipe wall thickness?",
        a: "Under ASTM A312 / A530, the standard mill undertolerance for wall thickness is 12.5%. Therefore, minimum wall thickness during design calculations should be taken as 0.875 × nominal wall thickness."
      },
      {
        q: "Does Sakshi Forge supply custom wall thickness heavy pipes?",
        a: "Yes. Sakshi Forge manufactures custom seamless and heavy-wall forged bored pipes in non-standard wall thicknesses up to 80 mm wall thickness in Duplex, Super Duplex, and Alloy Steel grades."
      }
    ]
  },
  {
    id: "ss-304l-vs-316l-corrosion-guide",
    slug: "ss-304l-vs-316l-corrosion-guide",
    title: "Grade Selection Guide: SS 304L vs SS 316L for Corrosive Industrial Environments",
    category: "Material Metallurgy",
    date: "April 11, 2026",
    readTime: "9 min read",
    author: "Chief Metallurgist, Sakshi Forge",
    authorRole: "Metallurgy & R&D Laboratory",
    desc: "Analyze chemical compositions, PREN (Pitting Resistance Equivalence Number), intergranular corrosion testing under ASTM A262, and cost-benefit trade-offs for chemical processing, marine, and offshore applications.",
    image: "/316L Stainless Steel Flange.webp",
    tags: ["SS 304L", "SS 316L", "Corrosion Resistance", "PREN", "ASTM A262", "Metallurgy"],
    keyTakeaways: [
      "SS 316L contains 2.0% - 3.0% Molybdenum (Mo), providing vastly superior resistance to chloride-induced pitting and crevice corrosion compared to SS 304L.",
      "The 'L' designation denotes low carbon content (C ≤ 0.030%), preventing chromium carbide precipitation during welding and eliminating intergranular corrosion susceptibility.",
      "SS 316L has a higher PREN rating (~23.0 to 25.0) than SS 304L (~18.0 to 19.0).",
      "For offshore marine splash zones, acidic chemical lines, and biopharma CIP loops, SS 316L is the mandatory minimum specification."
    ],
    content: `
<h2>1. Chemical Composition Comparison (ASTM A182 / ASTM A312)</h2>
<p>Both Grade 304L and Grade 316L belong to the austenitic family of stainless steels, characterized by a face-centered cubic (FCC) crystal structure that remains ductile even at cryogenic temperatures.</p>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>Element</th>
        <th>Grade SS 304L (UNS S30403)</th>
        <th>Grade SS 316L (UNS S31603)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Chromium (Cr)</strong></td>
        <td>17.50% – 19.50%</td>
        <td>16.00% – 18.00%</td>
      </tr>
      <tr>
        <td><strong>Nickel (Ni)</strong></td>
        <td>8.00% – 12.00%</td>
        <td>10.00% – 14.00%</td>
      </tr>
      <tr>
        <td><strong>Molybdenum (Mo)</strong></td>
        <td>— (None)</td>
        <td><strong>2.00% – 3.00%</strong></td>
      </tr>
      <tr>
        <td><strong>Carbon (C)</strong></td>
        <td>Max 0.030%</td>
        <td>Max 0.030%</td>
      </tr>
      <tr>
        <td><strong>Manganese (Mn)</strong></td>
        <td>Max 2.00%</td>
        <td>Max 2.00%</td>
      </tr>
      <tr>
        <td><strong>Silicon (Si)</strong></td>
        <td>Max 0.75%</td>
        <td>Max 0.75%</td>
      </tr>
      <tr>
        <td><strong>Phosphorus (P) / Sulfur (S)</strong></td>
        <td>P: 0.045% / S: 0.030%</td>
        <td>P: 0.045% / S: 0.030%</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>2. Pitting Resistance Equivalence Number (PREN) Calculation</h2>
<p>The PREN value quantifies a steel grade's relative resistance to localized pitting corrosion in chloride environments (such as seawater or brackish process streams). The formula is defined as:</p>

<p style="text-align: center; font-weight: bold; background: var(--bg-dark-800); padding: 1rem; border-radius: 6px; color: var(--primary-yellow);">
  PREN = %Cr + 3.3(%Mo) + 16(%N)
</p>

<ul>
  <li><strong>SS 304L PREN:</strong> 18.0 + 3.3(0) + 16(0.05) ≈ <strong>18.8</strong></li>
  <li><strong>SS 316L PREN:</strong> 17.0 + 3.3(2.2) + 16(0.05) ≈ <strong>25.06</strong></li>
</ul>
<p>The addition of 2% Molybdenum increases pitting resistance by more than 33%, allowing SS 316L to withstand marine atmospheres, dilute sulfuric acids, and organic acids that would rapidly cause pinhole leaks in SS 304L.</p>

<h2>3. Mechanical Property Requirements</h2>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>Mechanical Property</th>
        <th>SS 304L (Forged Flanges A182)</th>
        <th>SS 316L (Forged Flanges A182)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tensile Strength, min (MPa / KSI)</td>
        <td>485 MPa (70 KSI)</td>
        <td>485 MPa (70 KSI)</td>
      </tr>
      <tr>
        <td>Yield Strength (0.2% Offset), min</td>
        <td>170 MPa (25 KSI)</td>
        <td>170 MPa (25 KSI)</td>
      </tr>
      <tr>
        <td>Elongation in 2 in. (50 mm), min</td>
        <td>30%</td>
        <td>30%</td>
      </tr>
      <tr>
        <td>Hardness (Brinell HBW), max</td>
        <td>187 HBW</td>
        <td>187 HBW</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>4. Intergranular Corrosion Resistance & Dual Certification</h2>
<p>During heavy welding of standard SS 304 (with 0.08% carbon), chromium binds with carbon at heat-affected zone (HAZ) grain boundaries between 450°C and 850°C to form chromium carbides (sensitization). This depletes adjacent regions of corrosion-resistant chromium.</p>

<p>By enforcing <strong>C ≤ 0.030%</strong> in low-carbon 304L and 316L grades, carbide precipitation is completely inhibited. Sakshi Forge supplies dual-certified stock (304/304L and 316/316L) tested under <strong>ASTM A262 Practice E (Copper-Copper Sulfate-16% Sulfuric Acid Test)</strong> to guarantee immunity against intergranular attack.</p>
`,
    faqs: [
      {
        q: "When is SS 304L acceptable over SS 316L?",
        a: "SS 304L is suitable for clean fresh water pipelines, food production lines where chlorides are under 200 ppm, structural architectural frames, and dry ambient storage tanks where lower initial raw material cost is desirable."
      },
      {
        q: "What grade should be specified if chloride concentrations exceed 1,000 ppm?",
        a: "For high chloride, warm temperature applications (e.g. seawater cooling systems above 40°C), standard 316L may still suffer pitting. In such conditions, Sakshi Forge recommends Duplex 2205 (PREN 34+) or Super Duplex 2507 (PREN 42+)."
      }
    ]
  },
  {
    id: "butt-weld-vs-forged-fittings-guide",
    slug: "butt-weld-vs-forged-fittings-guide",
    title: "Butt Weld vs Forged Socket Weld & Threaded Fittings: Engineering Comparison",
    category: "Fittings & Valves",
    date: "March 29, 2026",
    readTime: "7 min read",
    author: "Piping Design Consultant",
    authorRole: "Industrial Piping Systems Team",
    desc: "Compare ASME B16.9 butt weld fittings against ASME B16.11 Class 3000/6000 socket weld and threaded fittings for high-pressure, high-vibration hydrocarbon lines.",
    image: "/socketweldfittings.webp",
    tags: ["Butt Weld Fittings", "ASME B16.9", "ASME B16.11", "Socket Weld", "Threaded Fittings", "Forged Fittings"],
    keyTakeaways: [
      "ASME B16.9 Butt Weld (BW) fittings provide a continuous full-penetration welded contour preferred for high-diameter lines (NPS 2 and above).",
      "ASME B16.11 Forged Socket Weld (SW) fittings are ideal for small bore piping (NPS 2 and smaller) subjected to extreme internal pressures up to Class 9000.",
      "Socket weld connections require a 1.6 mm (1/16 in) gap prior to welding to accommodate thermal expansion of the pipe inside the socket pocket.",
      "Threaded fittings (NPT/BSPT) are limited to non-critical, low-hazard utility lines where post-weld heat treatment (PWHT) or hot work is prohibited."
    ],
    content: `
<h2>1. Overview of Fitting Standard Designations</h2>
<p>Industrial piping networks rely on pipe fittings to alter flow direction (elbows), split fluid streams (tees), reduce line dimensions (reducers), or seal ends (caps). The choice between seamless butt weld fittings and high-pressure forged fittings depends on pipe diameter, pressure rating, fluid hazard level, and non-destructive examination (NDE) requirements.</p>

<h2>2. Detailed Structural Comparison Matrix</h2>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>Design Parameter</th>
        <th>ASME B16.9 Butt Weld Fittings</th>
        <th>ASME B16.11 Forged Socket Weld</th>
        <th>ASME B16.11 Forged Threaded</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Size Availability</strong></td>
        <td>NPS 1/2" up to NPS 48"</td>
        <td>NPS 1/8" up to NPS 4" (Commonly ≤ 2")</td>
        <td>NPS 1/8" up to NPS 4"</td>
      </tr>
      <tr>
        <td><strong>Pressure Classes</strong></td>
        <td>Matches mating pipe wall schedule</td>
        <td>Class 3000, Class 6000, Class 9000</td>
        <td>Class 2000, Class 3000, Class 6000</td>
      </tr>
      <tr>
        <td><strong>Internal Flow Turbulence</strong></td>
        <td>Smooth, flush ID transition</td>
        <td>Crevice gap at socket root creates turbulence</td>
        <td>Internal thread steps produce turbulence</td>
      </tr>
      <tr>
        <td><strong>NDT Inspection Method</strong></td>
        <td>100% Radiographic Testing (RT) compliant</td>
        <td>Liquid Penetrant (PT) / Magnetic Particle (MT)</td>
        <td>Visual / Pressure Leak Testing</td>
      </tr>
      <tr>
        <td><strong>Crevice Corrosion Risk</strong></td>
        <td>Zero crevice pocket</td>
        <td>Moderate risk at 1/16" expansion gap</td>
        <td>High risk in root of male/female threads</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>3. Fabrication & Welding Considerations</h2>
<p>When installing <strong>Socket Weld fittings</strong>, piping fitters must insert the pipe into the socket hub until it bottoms out, and then retract the pipe by approximately 1.6 mm (1/16 in) before applying the fillet weld. Failing to leave this thermal expansion gap causes high axial stress at the fillet root when the pipeline heats up during operation, leading to premature fatigue cracking.</p>

<p>Conversely, <strong>Butt Weld fittings</strong> require precise bevel preparation (37.5° ± 2.5° bevel angle per ASME B16.25) and root gap alignment. Full-penetration butt welds offer superior fatigue life under cyclic thermal expansion and severe water hammer vibrations.</p>
`,
    faqs: [
      {
        q: "Why are socket weld fittings discouraged in flammable hydrocarbon or toxic chemical service?",
        a: "The internal 1.6 mm gap acts as a crevice trap for corrosive liquids and solid particulate accumulation. Additionally, radiography cannot easily inspect socket fillet welds for root lack of fusion."
      },
      {
        q: "What pressure class of forged fitting is required for Schedule 80 pipe?",
        a: "As a general industry rule of thumb under ASME B31.3, Class 3000 forged fittings are specified for use with Schedule 80 / XS pipe, while Class 6000 fittings are matched with Schedule 160 or XXS pipe."
      }
    ]
  },
  {
    id: "hydrostatic-pressure-testing-flanges-pipes",
    slug: "hydrostatic-pressure-testing-flanges-pipes",
    title: "Hydrostatic & Pneumatic Testing Protocols for Industrial Flanges & Pipes",
    category: "Quality Testing",
    date: "February 14, 2026",
    readTime: "8 min read",
    author: "Sakshi QA & NDT Level III Inspector",
    authorRole: "Quality Control Division",
    desc: "Step-by-step guide to hydrostatic test pressure calculations (1.5x design pressure), holding times, gauge calibration standards, and safety precautions according to ASME B31.3 and EN 10204 3.1 certification.",
    image: "/molten_furnace.webp",
    tags: ["Hydrostatic Test", "ASME B31.3", "Pressure Testing", "Quality Control", "MTC 3.1", "NDT"],
    keyTakeaways: [
      "Hydrostatic testing uses water as the test medium at a minimum of 1.5 times the internal design pressure per ASME B31.3 Section 345.4.",
      "Pneumatic testing (using air or nitrogen) is far higher risk due to stored elastic energy and is reserved for systems where water contact causes chemical contamination.",
      "Water used for hydrotesting stainless steel piping must contain less than 50 ppm chlorides (ideally < 30 ppm) to prevent stress corrosion cracking (SCC).",
      "Calibrated digital pressure recorders with current test certificates are mandatory to document hold times without pressure loss."
    ],
    content: `
<h2>1. Purpose of Hydrostatic Pressure Testing</h2>
<p>Before any industrial piping loop, manifold, or pressure vessel spool containing Sakshi Forge flanges and pipe components is commissioned into live hydrocarbon, steam, or chemical service, it must undergo proof pressure testing. Hydrostatic pressure testing verifies structural integrity, validates joint leak-tightness, and releases residual manufacturing stresses in welds.</p>

<h2>2. Test Pressure Calculation Formula (ASME B31.3)</h2>
<p>Under ASME B31.3 Process Piping Code paragraph 345.4.2, the minimum hydrostatic test pressure $P_t$ at any point in a metallic piping system is calculated by:</p>

<p style="text-align: center; font-weight: bold; background: var(--bg-dark-800); padding: 1rem; border-radius: 6px; color: var(--primary-yellow);">
  P_t = 1.5 × P × (S_t / S)
</p>

<ul>
  <li><strong>P_t:</strong> Minimum hydrostatic test gauge pressure (bar or PSI)</li>
  <li><strong>P:</strong> Internal design pressure of the piping system</li>
  <li><strong>S_t:</strong> Allowable stress of pipe/flange material at test temperature</li>
  <li><strong>S:</strong> Allowable stress of pipe/flange material at maximum design temperature</li>
</ul>
<p><em>Note: If S_t / S exceeds 6.5, a ratio of 6.5 is used to avoid yielding the steel.</em></p>

<h2>3. Water Quality & Chloride Control for Stainless Steel</h2>
<p>When performing hydrotests on stainless steel (SS 304, SS 316L, Duplex 2205), water quality is of paramount metallurgical importance:</p>

<div className="table-responsive">
  <table className="tech-table">
    <thead>
      <tr>
        <th>Water Parameter</th>
        <th>Maximum Permissible Value</th>
        <th>Risk of Non-Compliance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chloride Content (Cl⁻)</td>
        <td><strong>&lt; 50 ppm</strong> (Preferably &lt; 30 ppm demineralized water)</td>
        <td>Severe Stress Corrosion Cracking (SCC) during dry-out</td>
      </tr>
      <tr>
        <td>pH Level</td>
        <td>6.5 to 8.5</td>
        <td>Acidic pitting corrosion on freshly machined flange faces</td>
      </tr>
      <tr>
        <td>Water Temperature</td>
        <td>Min 16 °C (60 °F) to prevent brittle fracture</td>
        <td>Brittle cleavage failure in low-alloy steel fittings</td>
      </tr>
      <tr>
        <td>Post-Test Draining & Drying</td>
        <td>Complete dry-air blowdown within 4 hours</td>
        <td>Microbiological Influenced Corrosion (MIC) from standing water</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>4. Sakshi Forge Factory Hydrotest Certificate Audit</h2>
<p>Every individual flanged manifold, electropolished spool, or custom forged body manufactured in Sakshi Forge facilities is tested on calibrated automated hydraulic test rigs. Pressure recording charts documenting a minimum 30-minute hold time with zero pressure drop are permanently attached to the EN 10204 3.1 Inspection Certificate bundle.</p>
`,
    faqs: [
      {
        q: "What is the recommended hold time during a shop hydrostatic test?",
        a: "Per ASME B31.3, the hydrotest pressure must be held for a minimum of 10 to 30 minutes to allow thorough visual inspection of all flanged joints, welds, and valve packing glands."
      },
      {
        q: "Can pneumatic testing be performed instead of hydrostatic testing?",
        a: "Pneumatic testing is restricted to systems where water remaining in the system is intolerable for process chemistry. Pneumatic pressure is calculated at 1.1x design pressure with strict safety exclusion zones."
      }
    ]
  }
];

export function getPostBySlug(slug) {
  return blogPosts.find(p => p.slug === slug || p.id === slug);
}

export function getRelatedPosts(currentSlug, limit = 3) {
  return blogPosts.filter(p => p.slug !== currentSlug && p.id !== currentSlug).slice(0, limit);
}
