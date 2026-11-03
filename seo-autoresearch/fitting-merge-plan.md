# Electropolished fitting pages: merge and redirect plan (2026-11-03)

Pages that described the same product under another name are merged into one page.
Each merged URL returns a permanent 301 redirect to the surviving page (generated into
`.htaccess` from `frontend/src/data/redirects.js`, `fittingMerges`), is removed from every
sitemap and from all internal links. No other URL changes.

Survivor choice: the page that had Search Console impressions where one had any
(GSC export, last 16 months), otherwise the most widely used product name.

| Merged URL (301) | Survives at | Reason |
|---|---|---|
| /electropolished-pipe-fittings/electropolished-equal-tee/ | /electropolished-pipe-fittings/electropolished-tee/ | same product (equal tee = tee) |
| /electropolished-pipe-fittings/electropolished-sanitary-tee/ | /electropolished-pipe-fittings/electropolished-tee/ | same product |
| /electropolished-pipe-fittings/electropolished-sanitary-elbow/ | /electropolished-pipe-fittings/electropolished-elbow/ | same product; elbow had 2 impressions |
| /electropolished-pipe-fittings/electropolished-sanitary-reducer/ | /electropolished-pipe-fittings/electropolished-concentric-reducer/ | same product; concentric had 7 impressions |
| /electropolished-pipe-fittings/electropolished-sanitary-cross/ | /electropolished-pipe-fittings/electropolished-cross/ | same product |
| /electropolished-pipe-fittings/electropolished-sanitary-end-cap/ | /electropolished-pipe-fittings/electropolished-end-cap/ | same product; end-cap had 4 impressions |
| /electropolished-pipe-fittings/electropolished-tri-clamp/ | /electropolished-pipe-fittings/electropolished-tri-clover-clamp/ | same product; tri-clover had 5 impressions and 1 click |
| /electropolished-pipe-fittings/electropolished-sanitary-clamp/ | /electropolished-pipe-fittings/electropolished-tri-clover-clamp/ | same product |
| /electropolished-pipe-fittings/electropolished-clamp-gasket/ | /electropolished-pipe-fittings/electropolished-tri-clover-clamp/ | gaskets are elastomer/PTFE and are not electropolished; the clamp page covers gasket choice |
| /electropolished-pipe-fittings/electropolished-ferrule/ | /electropolished-pipe-fittings/electropolished-clamp-ferrule/ | same product |
| /electropolished-pipe-fittings/electropolished-sanitary-ferrule/ | /electropolished-pipe-fittings/electropolished-clamp-ferrule/ | same product |
| /electropolished-pipe-fittings/electropolished-full-coupling/ | /electropolished-pipe-fittings/electropolished-coupling/ | same product; coupling had 1 impression |
| /electropolished-pipe-fittings/electropolished-hex-bushing/ | /electropolished-pipe-fittings/electropolished-bushing/ | hex is a bushing pattern; bushing had 2 impressions |
| /electropolished-pipe-fittings/electropolished-pipe-nipple/ | /electropolished-pipe-fittings/electropolished-barrel-nipple/ | same product; barrel nipple had 5 impressions |

Kept as separate pages (different products): 90° and 45° elbows, 180° return bend, reducing,
lateral and instrument tees, eccentric reducer, long and short stub ends, blind cap, male,
female and hose adapters, hose barb, hex, square and end plugs, half and reducer couplings,
socket, union, swage nipple, the five olet types, BPE fittings, orbital weld fittings.

Rollback: delete the `fittingMerges` entries in `frontend/src/data/redirects.js` and rebuild;
the pages are still in `products.json`.

After going live: in Search Console, inspect two or three merged URLs to confirm the 301,
and request indexing for the surviving pages.
