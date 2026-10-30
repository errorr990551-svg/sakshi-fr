# SEO autoresearch: daily loop for steelmanufacturer.in

This uses the autoresearch pattern (github.com/karpathy/autoresearch): a human writes this file. Each day the agent does one bounded batch of work, measures it against a fixed metric, keeps what improves the metric and discards what does not, then logs the result. Here the "experiment" is one page, not one training run.

## The one objective
**Make steelmanufacturer.in better every single day.** Every run must leave the site measurably better than it found it: more pages indexed, more unique, more useful, and technically cleaner. If a change does not make the site better, it is discarded. There is no other objective.

## Goal
Get the URLs in `queue.tsv` out of "Discovered – currently not indexed" in Search Console. Every page must earn indexing by being substantially unique and useful. The target searches are **"electropolished pipes manufacturer in <city>"** and **"electropolished tubes manufacturer in <city>"**. Only https://steelmanufacturer.in (https, no www) exists.

## Daily budget
**5 pages per run.** Take the first 5 rows of `queue.tsv` (rows go in priority order) whose path is not already in `results.tsv` with status `keep`, `keep-pending-verify`, `redirect` or `discard`.

## Hard rules (never break)
1. **No invented facts.** Every city-specific claim (industrial estates, companies, regulators, ports, distances, policy) must come from a source you actually opened this run. List each source in the page's `sources`. If you cannot verify something, leave it out.
2. **Company facts we do not have stay off the page:** lead times, MOQ, stock sizes, stockists, site visits, case studies, customers, transit days. The owner has not confirmed them. Allowed company facts: works at Taloja MIDC (Navi Mumbai); EN 10204 3.1 certificate traced to heat number; PMI on every length; internal Ra report for each electropolished lot; grades 304/304L/316/316L; finishes SF1 (mechanical polish) and SF4 (electropolished) per ASME BPE; ASTM A270 / A269 / A249 / A312; "dispatch and transit are confirmed in writing with each quotation".
3. Never use workbook rows marked `VERIFY`. Workbook claims of "1–2 day road transit" are unconfirmed: do not use them.
4. Electropolished pipe/tube is the only product promoted. Mention other products only as internal links.
5. Do not touch pages outside today's 5, except to add an internal link to a new page.
6. Never force-push, never rewrite history, never skip a failing check.
7. **Sources must be opened, not just seen in search snippets.** If WebFetch/curl cannot open source pages (network policy block), write and check the pages but push to the working branch only (status `keep-pending-verify`), do NOT push to `main`, and tell the owner the network access must be widened. At the start of every run, first re-verify any `keep-pending-verify` rows by opening their sources; fix or remove unconfirmed claims, then promote them to `keep` and push to main.
8. **Transactional intent.** Pages are written for a buyer ready to order. Each city page needs a section that tells that city's buyer exactly what to send in an RFQ for their industry, with a link to /contact-us/. It must be specific to the city's plants, not a generic checklist.

## Quality gate (no low-quality content is ever pushed)
A page is pushed only if it passes **all** of these. Otherwise discard it, log `discard` with the reason, and move on. **It is better to push 0 pages than 1 weak page.**
1. `python3 ../seo-autoresearch/scripts/quality.py <slug>` prints PASS. It checks: at least 450 new words; 4–7 sections; at least 2 independent source domains; no marketing filler ("leading manufacturer", "world-class", "one-stop", ...); no unconfirmed company facts (day/week lead times, "in stock", MOQ, named customers, local office or warehouse); a heading names the place; no paragraphs under 15 words; no more than 2 sentences shared with any other city page.
2. The `score.py` overlap falls and the word count rises (see step 5).
3. **Self-review.** Re-read the page as a pharma/dairy plant engineer in that city and answer honestly:
   - Does every paragraph say something true and specific to this place or product that would not fit on another city's page?
   - Is every place fact backed by a cited source you opened?
   - Is anything vague, padded or guessed? Delete it.
   If more than one paragraph could be pasted onto another city page unchanged, rewrite it or drop the page.
4. If research finds too little verifiable local information (common for small foreign towns), do **not** pad. Log `discard: insufficient verifiable sources`, leave the page as it is, and take the next queue row so the day still gets 5 good attempts. Never exceed 8 attempts in one run.
5. `upgrade` rows are wave-1 pages that fail the gate. Extend them with researched, cited content until they pass. Do not delete existing correct content.

## Per-page procedure
For each of the 5 paths:

1. **Baseline.** `cd frontend && python3 ../seo-autoresearch/scripts/score.py <path>` gives nearest-neighbour overlap and word count. Read the current rendered page at `dist/<path>index.html`. If `dist/` is missing, run `npm install && npm run build` first.
2. **Research.** Use web search. Look for the place's named industrial estates or parks, the pharma, dairy, food, chemical and biotech units there (from government, industry-body or reputable news sources), the regulator, the nearest port or ICD, and recent investments. Then answer: which lines in this city's plants actually need electropolished 316L tube, and why?
3. **Write by page type:**
   - `city-in` / `city-foreign` / `state-hub`: create `frontend/public/city-content/<slug>.json` in the existing format. Copy the shape of `public/city-content/patna.json`: `{slug, updated, sections:[{heading, paragraphs?, bullets?, links?}], sources:[{title,url}]}`. Aim for 4–6 sections of 450–900 new words. Headings must name the place or its estates, never generic ones like "Our Products". Include one SF1-vs-SF4 or grade-selection section tailored to the city's dominant industry, and a delivery section with 2–4 links to nearby `/market-area/<slug>/` pages that exist in `dist/`. For foreign cities, use the local regulator and standards (FDA/3-A, EHEDG/EU GMP, SFDA, GCC, TGA, HSA, etc.) and the nearest seaport. Never claim local stock or an office.
   - `ep-hub` / `ep-fitting` / `non-ep`: edit that page's data (find it with `grep -rn "<slug>" frontend/src/data`). Replace boilerplate shared with sibling pages with product-specific engineering content: dimensions/standards, where it is used in a hygienic system, selection and installation pitfalls, and inspection and documentation. Keep the FAQ schema identical to the visible FAQs.
4. **Build and check** (from `frontend/`):
   ```
   npm run build
   node ../seo-autoresearch/scripts/audit.mjs dist        # no new issue types vs. before
   python3 ../seo-autoresearch/scripts/faqcheck.py        # must print 0 missing
   node ../seo-autoresearch/scripts/serve.cjs dist 4180 & # then:
   printf '%s\n' <the 5 paths> > /tmp/p.txt && node ../seo-autoresearch/scripts/hydall.cjs /tmp/p.txt   # 0 JS errors
   python3 ../seo-autoresearch/scripts/score.py <path>
   ```
5. **Keep or discard.** Keep the page only if the quality gate passes, all checks pass **and** nearest-neighbour overlap fell (city pages: target < 0.35) **and** words rose. Otherwise run `git checkout -- <files>` for that page, or delete the new JSON, and log `discard` with the reason.
6. **Log** one row per page in `seo-autoresearch/results.tsv`: `date path type status overlap_before overlap_after words_before words_after notes`. In notes, name the main sources and anything you could not verify.

## Finish the run
- `git add -A && git commit` with message `content(autoresearch): <date> – <5 slugs>`, then push the working branch and fast-forward `main`. A push to `main` auto-deploys via GitHub Actions: `git push origin HEAD:main`, and only if it is a fast-forward. If it is not, stop and report.
- Final message to the owner, in plain words: the 5 URLs, kept or discarded, overlap before→after, and any open questions. Remind them to request indexing for the 5 URLs in Search Console (URL Inspection → Request indexing).

## Open questions for the owner (do not guess; ask in the final message only if a page needs one)
- Real lead times (the site says both 24–48 h and 2–4 days for stock; 2–3 and 2–4 weeks for made-to-order), MOQ, sample policy, OD/wall range, and stockists or agents per region.
- Per-city proof points: past supplies or projects the owner is happy to name.
