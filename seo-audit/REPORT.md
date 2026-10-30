# Technical SEO audit: steelmanufacturer.in

- **Date:** 30 October 2026
- **Branch:** `seo-audit-fixes`. It is not deployed: only `main` deploys, and that needs your approval.
- **Backup tag:** `pre-seo-audit-backup` (= `main` at 5a0ff05)
- **City table:** `seo-audit/city-page-audit.csv`, with all 519 market-area pages

## 1. Why impressions are low (root causes, most important first)

No crawl blocker was found. Every sitemap URL returns 200 to both browsers and Googlebot, and the full content, title, canonical and H1 are in the raw HTML. The problem is what Google finds once it gets there.

1. **City pages are near-duplicates.** 397 of 519 city pages are the same template with the city name changed.
   - Only about 14% of their main text is unique to the page.
   - Their median similarity to the nearest other city page is 0.65.
   - Google usually leaves pages like this in "Discovered / Crawled – currently not indexed". This matches your GSC sheet.
   - Only the 39 pages with researched local content are clearly different (similarity 0.45, 34% unique).
2. **Weak internal links to city pages.** 373 city pages were linked from only one page, `/market-area/`. *Fixed.*
3. **Signals that cost trust.**
   - Every Product block carried an invented price range, "InStock", and free returns and shipping (879 pages). *Fixed.*
   - 22 far-away cities claimed "same-day to next-day" road delivery. *Fixed.*
   - 95 pages had a "What We Hold in Stock" heading. *Fixed.*
4. **The homepage targeted the wrong product.** Its title and H1 led with "Forged Flanges", not electropolished pipes. *Fixed.*
5. **Sitemap `lastmod` was meaningless.** All 985 URLs carried the build date on every deploy, so Google learns to ignore it. *Fixed.*
6. **Not measurable without Search Console:** authority (backlinks), how long the domain has been indexed, and any manual action. See section 9.

## 2. Technology architecture (from the source code)

| Layer | What it is |
|---|---|
| Frontend | React 19, Vite 8 (rolldown) SPA, with its own router in `src/App.jsx` (no React Router) |
| Rendering | **Static prerendering (SSG)**. `prerender.js` runs `renderToString` for all 985 routes into `dist/<path>/index.html`, and the client then calls `hydrateRoot`. |
| Backend | Hono API (`backend/server.js`) on a Cloudflare Worker. `/api/*` is proxied by `.htaccess`. Used for forms only. |
| Hosting | Hostinger shared hosting (LiteSpeed/Apache `.htaccess`) behind the Hostinger CDN (`server: hcdn`). HTML is not edge-cached (`x-hcdn-cache-status: DYNAMIC`). |
| Deploy | GitHub Actions `deploy.yml`, run on push to `main`: `npm run build`, zip, FTP upload, then a PHP unzip step |
| Sitemaps | `generate_sitemap.js` writes 3 sitemaps and an index before the build. `prerender.js` now sets `lastmod`. |
| Robots | Static `public/robots.txt` |
| Redirects | `public/.htaccess`, plus `src/data/redirects.js`, which `prerender.js` writes into `.htaccess` |
| Database | None. All content is JSON/JS in `src/data/`, plus `public/city-content/<slug>.json` for researched city pages. |
| City pages | 519 `/market-area/<slug>/` pages from `market_cities.json`, `customCityData.js` and the per-state data files, rendered by `CityPage.jsx` and `MaharashtraCityPage.jsx`. 39 also have `public/city-content/<slug>.json`. |

## 3. Technical SEO problems found

| Priority | Problem | Status |
|---|---|---|
| P1 | Legacy URL `/electropolished-pipes-manufacturer-in-<any>/` returned a 301 to `/market-area/<any>/` even when that page does not exist (a 301 to a 404, e.g. `-in-zzz/`) | Fixed |
| P1 | Redirect chain `/odisha/` → `/market-area/odisha/` → `/market-area/` | Fixed |
| P1 | Sitemap `lastmod` set to the build date on all 985 URLs | Fixed |
| P1 | Invented `AggregateOffer` (prices, InStock, returns, shipping, MPN) in Product schema on 879 pages | Fixed |
| P2 | 397 thin template city pages (plus 83 only partly unique) | Flagged for human review; the daily research loop continues |
| P2 | 373 city pages had only 1 internal link pointing to them | Fixed: median now 7 linking pages (1 city with no neighbours in its region still has 1) |
| P2 | Unconfirmed delivery claims: "same-day to next-day" to Delhi, Chennai, Kolkata, Kochi and others; "What We Hold in Stock"; "daily dispatch" | Fixed (removed; no new figures written) |
| P2 | Homepage title and H1 led with forged flanges | Fixed |
| P2 | Two different business addresses in LocalBusiness schema: Kumbharwada, Mumbai (homepage) vs Taloja MIDC (city pages) | Needs owner input |
| P3 | 480 city pages requested `/city-content/<slug>.json` on load and got a 404 | Fixed |
| P3 | Breadcrumb links to `/market-area#uae` (a 301 hop) | Fixed |
| P3 | Every page downloads about 4.8 MB of JS (800 KB gzipped), because all data files load on every page | Not fixed (refactor needed; see section 15) |

Checked and found clean:
- One title, meta description, H1 and self-canonical on all 985 pages.
- No duplicate titles, descriptions or H1s.
- No `noindex` on any indexable page.
- No orphan pages.
- No links to redirected or missing pages.
- `www`, no-slash and `/index.html` variants all reach the final URL in 1 hop.
- Unknown URLs return a real 404. Old WordPress paths return 410.

## 4. City pages audited

All 519 `/market-area/` pages are in `seo-audit/city-page-audit.csv`. Each row has: URL, live HTTP status, title, meta description, H1, canonical, indexability, content quality, unique-text share, similarity to the nearest page, words, links in and out, and a flag.

- 519 of 519 return 200, are self-canonical and indexable.
- 0 duplicate titles, H1s or descriptions.
- Content quality:
  - 39 deep (researched and cited)
  - 83 partly unique template
  - 397 thin template
- The 480 non-deep pages are flagged **"Human review: needs verified local research"**.
- No local customers, warehouses or statistics were invented to fill them.

## 5. Duplicate and thin content

- **City pages:** see section 4. The nearest-neighbour similarity for thin pages is 0.65 (65% of 5-word phrases shared).
- **Non-city clusters** found in the previous duplicate analysis:
  - Core EP spec pages, 87–90% similar to each other
  - Standards pages, 86–88%
  - Industry pages, 84–88%
  - 16 thin template pages, 76–85%
- 24 pages that competed for the same searches were already merged with 301s (commit 5a0ff05, live).
- Rewritten guides for 10 core EP pages exist in `src/data/specGuides.js`, but they are **not wired in or committed**. You stopped that step, so it waits for your go-ahead.

## 6. Indexing issues

- Nothing on the site blocks indexing. There is no noindex, no robots block, no wrong canonical and no soft 404.
- The URLs in your GSC sheet ("Discovered – currently not indexed") are mostly thin city pages. That is a content-quality and crawl-priority problem, not a technical one.
- I can't confirm Google-selected canonicals, "Crawled – currently not indexed" counts or manual actions without Search Console (section 9).

## 7. Rendering

- The raw HTML and the browser-rendered page match on title, canonical, H1 and link count (9 live pages tested on mobile).
- The same HTML is served to the Googlebot user agent (identical MD5 on 8 URLs).
- Hydration gives 0 JS errors on 15 pages tested.
- **SSR or a framework change is not needed;** the site is already statically prerendered.

## 8. Redirects

- I tested 666 legacy, queued and merged URLs against the built `.htaccess` rules with a rule simulator. After the fixes there are 0 chains, 0 loops and 0 redirects to a 404.
- Live checks (current production) confirmed 1-hop 301s for `www`, no trailing slash, `/index.html`, `/contact/`, aliases like `/market-area/bangalore/`, and legacy city URLs.
- **Not tested:** plain `http://`. The sandbox proxy blocks it. Please check `http://steelmanufacturer.in/` in a browser.

## 9. Sitemaps, robots and Search Console

- `robots.txt` is correct: everything allowed except `/api/`, with the sitemap index listed.
- **Sitemaps:**
  - Valid XML and an index of 3 sitemaps.
  - 471 main + 514 city URLs, all unique.
  - Every URL is a built 200 page, with no redirects and no noindex.
  - The image sitemap has 366 entries.
- **Search Console:** I don't have API access (the Supermetrics trial expired on 28 May 2026). **Please export** from GSC for steelmanufacturer.in:
  1. Performance → Search results, last 16 months, Queries, Pages, Countries and Devices tabs, plus "Compare: last 28 days vs previous" and "last 3 months vs previous 3 months"
  2. Indexing → Pages: the export of every "Why pages aren't indexed" reason, with example URLs
  3. Settings → Crawl stats: the host status and the "By response" breakdown
  4. Security & Manual actions: a screenshot
  5. Sitemaps: the status line for `sitemap_index.xml`

## 10. Performance

These were measured from the sandbox on a Pixel 5 profile against the live site. They are lab numbers, not Core Web Vitals field data.
- LCP 0.6–1.7 s
- CLS 0
- TTFB 0.4–1.5 s (through the sandbox proxy; the CDN reports 51 ms upstream)

Problems:
- Each page preloads 6 JS chunks totalling about 4.8 MB (about 800 KB gzipped): every product, city and blog record. This slows hydration and INP on mid-range phones.
- HTML is not cached at the Hostinger CDN edge.

Fine as they are:
- Images are WebP with width/height set.
- The large PNGs in `/public` are not used by any page.

## 11. Files modified (branch `seo-audit-fixes`)

- `frontend/public/.htaccess`
- `frontend/prerender.js`
- `frontend/src/utils/seo.js`
- `frontend/src/App.jsx`
- `frontend/src/components/CityPage.jsx`
- `frontend/src/components/CityDeepContent.jsx`
- `frontend/src/components/HomePage.jsx`
- `frontend/src/data/market_cities.json`
- `frontend/src/data/cityContent.js`
- `frontend/src/data/customCityData.js`
- `frontend/src/data/core_pages.json`
- `frontend/index.html`
- `frontend/src/data/lastmod.json` (new)
- `frontend/public/sitemap*.xml` and `image-sitemap.xml` (regenerated)
- `seo-audit/REPORT.md` and `seo-audit/city-page-audit.csv` (new)

## 12. Fixes implemented (commits)

1. `d3c7e2f`: legacy city URLs return a 301 only when the city page exists, otherwise a real 404. The rules are split so each `.htaccess` line stays under 1.7 KB. Also fixes the `/odisha/` chain.
2. `51e970a`: sitemap `lastmod` is now the date a page's content last changed. A content hash per URL is stored in `src/data/lastmod.json`.
3. `f106f6a`: no request for missing city-content JSON; `/market-area/#…` links fixed.
4. `8bd6c4b`: unconfirmed transit and stock claims removed; homepage targets electropolished pipes and tubes.
5. `adcfc52`: each city page links to the next 6 cities in its state or country, using plain city-name anchors.
6. `f63c970`: invented `AggregateOffer` removed from Product schema.

## 13. Tests run (on the final build)

| Test | Result |
|---|---|
| `npm run build` | Pass |
| ESLint | 225 problems before and after: all existing unused imports, none added |
| `audit.mjs` (titles, metas, canonicals, H1s, broken and redirected links, sitemap entries) | 0 issues |
| FAQ schema vs visible text | 4,474 answers, 0 missing |
| Hydration on 15 pages (headless Chromium) | 0 JS errors |
| Mobile render (Pixel 5): no horizontal scroll | Pass |
| `.htaccess` simulator on 666 URLs | 0 chains, 0 loops, 0 redirects to a 404 |
| Sitemaps: XML parse, duplicates, every URL a built page, no noindex | Pass |
| JSON-LD: parse on all pages, no `AggregateOffer` or prices | Pass |
| Build twice, compare content hashes | Identical (`lastmod` is stable) |
| Live crawl of 985 sitemap URLs (current production) | All 200, metadata clean |

Still to do: these `.htaccess` changes can only be proven on the live server. After deploy, re-run the live checks for `-in-zzz/` (expect 404), `-in-pune/` (expect 301 to `/market-area/pune/`) and `/odisha/` (expect 1 hop).

## 14. Needs you (manual)

1. **Approve deploy.** Merge `seo-audit-fixes` into `main` (I can do it once you say so).
2. **Confirm or correct these business facts:**
   - Is the ISO 9001:2015 certificate current? It is claimed on every page.
   - Which address should appear in search: Kumbharwada, Mumbai or Taloja MIDC? Both appear in the schema. It should match your Google Business Profile.
   - Real road transit times by region.
   - Is a hydro test and ferrite check done on every lot? Product schema says so.
   - Optional: real price bands, if you want price markup.
3. **Search Console exports** (section 9).
4. **Check `http://`** redirects in a browser.
5. **Daily routine changed.** It now pushes only to its working branch and asks you before anything goes live, in line with your rule "never deploy to production without approval". Say if you want auto-deploy back.

## 15. Recommended next steps

1. Deploy this branch, then in GSC resubmit `sitemap_index.xml` and request indexing for the homepage and `/electropolished-pipes/`.
2. **Reduce the thin city set.** Give the daily research loop the top cities by industrial relevance. For cities where nothing verifiable can be written, consider (with your approval and a 301 plan) merging them into their state or country page instead of keeping 480 near-duplicates.
3. Wire in the 10 rewritten core EP guides (`specGuides.js`) once you approve.
4. **Performance refactor** (separate PR): load product, city and blog data per route (dynamic `import()`) instead of on every page, to cut about 4 MB of JS per page view.
5. Ask Hostinger to edge-cache HTML for 1 hour, matching the `Cache-Control` already sent.
