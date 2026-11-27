# EP pipe and tube pages: one job per page

Written 2026-11-27 for Phase 1 of the content plan. Own % is the share of a page's main text found on no other
sitemap page (`scripts/uniq.py`, baseline `baseline-2026-11-27.tsv`). Target: every page at 60% or more.

Rules for every page below:
- It answers its own search intent and links to the sibling that owns any other topic, instead of repeating it.
- Facts only from the owner's inputs, the agreed facts list, or cited public standards.
- "Owner proof" is the material only we can show. Until the owner sends it, the slot stays empty; never use stand-ins.

| Page | Own % (words) | Search intent it owns | Unique angle | Do not repeat; link to | Owner proof slot |
|---|---|---|---|---|---|
| /electropolished-pipes/ | 79% (2581) | electropolished pipes manufacturer / supplier India | The range and how to choose: pipe vs tube, grade, finish, standard; process video | Standard detail (A270, A312, BPE pages), grade detail (316L, 304L pages) | Size range table (OD x wall), photos |
| /electropolished-tubes/ | 65% (1342) | electropolished tubes, EP tubing sizes | Tubing sized by OD (inch and metric), tube vs pipe sizing, tube type by duty, handling | Standard detail, sanitary series (sanitary page) | Tube size range table, photos (page has 0 images, 76% bounce) |
| /electropolished-welded-erw-pipes/ | 64% (994) | electropolished ERW / welded pipes and tubes | The longitudinal seam: how it is made, conditioned, polished and checked; what to write on a welded order | HCW detail (A312 page), full receiving checklist (blog/ep-pipe-inspection-checklist), orbital welds (blog/orbital-welding-ep-tube) | Borescope photo of a seam after EP; Ra report with readings across the seam |
| /electropolished-seamless-pipes/ | 63% (1002) | electropolished seamless pipes | When seamless is required, wall eccentricity, bore preparation, NDT | Welded seam content (ERW page) | Photos, size range |
| /sanitary-hygienic-ep-pipes/ | 63% (954) | sanitary / hygienic EP pipes for food and dairy | Tube dimension series (inch OD, DIN 11850 / EN 10357, ISO 2037 / SMS): telling them apart and matching fittings | Dairy line-by-line finish (dairy industry page), fitting standards table (EP fittings hub) | Sizes we supply in each series |
| /ss-316l-electropolished-pipes/ | 64% (1097) | SS 316L electropolished pipes | Chemistry, molybdenum and chlorides, sulphur window for orbital welding | 304L vs 316L comparison (blog) | Redacted 3.1 showing chemistry |
| /ss-304l-electropolished-pipes/ | 66% (1069) | SS 304L electropolished pipes | Where 304L is enough and where it is not | Same | Same |
| /astm-a270-electropolished-tubes/ | 67% (1226) | ASTM A270 EP tubes | What A270 and S2 require, with tables | A270 vs A269 vs A249 vs A312 (blog) | 3.1 sample with A270 marking |
| /astm-a269-electropolished-tubing/ | 72% (1267) | ASTM A269 EP tubing | General-service and instrument tubing | Same | Same |
| /astm-a312-electropolished-pipes/ | 76% (1629) | ASTM A312 EP pipes | NPS and schedule, SMLS / WLD / HCW, B36.19M | Same | Same |
| /asme-bpe-electropolished-tubes/ | 69% (1090) | ASME BPE EP tubes | SF designations, sulphur, marking, what BPE adds to A270 | Ra explanation (low-Ra page) | Same |
| /en-10204-31-mtc/ | 72% (1221) | EN 10204 3.1 MTC | What a 3.1 certificate shows and how to read it | 3.2 and inspection detail (testing page) | Redacted 3.1 certificate |
| /high-purity-stainless-steel-pipes/ | 66% (952) | high purity stainless steel pipes | Purified water, WFI and clean steam: material and finish choices | UHP and semiconductor (UHP page) | Photos |
| /ultra-high-purity-ep-tubes/ | 68% (939) | ultra high purity EP tubes | UHP service, only as far as the owner confirms (SF1/SF4 until then) | SEMI F19 (blog) | Owner confirmation of SF5/SF6 and UHP specs |
| /internal-electropolished-pipes/ | 67% (885) | internal (ID) electropolished pipes | ID-only electropolishing: when the OD is left as is, how the bore is done and measured | Ra report reading (low-Ra page) | Photo of an ID-only finished bore |
| /low-ra-electropolished-pipes/ | 67% (962) | low Ra electropolished pipes | Ra targets, how Ra is measured, reading an Ra report | Ra converter tool | Redacted Ra report with a "how to read it" walkthrough |
| /electropolished-pipes/duplex-electropolished-pipe/ | 84% (1573) | duplex EP pipe | Duplex and super duplex EP pipe (A790 / A789) | Austenitic grade pages | Light touch only |
| /resources/ | 45% (604) | EP technical resources | Hub of charts and tools | Tool pages themselves | None |
| /resources/download-ep-pipe-catalogue/ | 37% (1233) | EP pipe catalogue PDF | Spec sheet | Size chart | Real catalogue once size ranges arrive |
| /resources/ep-pipe-size-chart/ | 57% (1629) | EP pipe size chart | Standard dimension series in one place | Sanitary series detail (sanitary page) | Mark which sizes we supply |
| /resources/ra-surface-finish-converter/ | 62% (832) | Ra micron to microinch converter | The tool and how to use it | Low-Ra page | None |
| /resources/ss-pipe-weight-calculator/ | 43% (1031) | SS pipe weight calculator | The tool and the formula | Size chart | None |

## Order of work

1. ERW and sanitary: both are "Crawled - currently not indexed" in Search Console.
2. Hub and tubes: the most visits; tubes has no images and a 76% bounce rate.
3. The standard pages: A270, A269, A312 and the 3.1 page.
4. The rest, the resources pages under 60% first.
5. New post "Electropolished vs bright annealed (BA) tubes", and a mirror-polish section in the existing "EP vs mechanically polished" post.

## Shared blocks on every EP page (fixed overhead, about 300 words)

Hero badges, RFQ form, the 30-city block and the CTA banner (`EPBuildSpecRenderer.jsx`), plus the process video on
the pages listed in `EP_PROCESS_VIDEO.pages`. These are why no EP page can reach 100% own text.
Claims in the City-type block (line 344: "dedicated logistics channels", "Direct Site Delivery to Industrial Parks",
"Cleanroom Capped & Poly-Bagged Packaging") are unverified and wait for the owner's confirmation.
