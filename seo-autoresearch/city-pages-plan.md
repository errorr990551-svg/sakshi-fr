# City pages fix plan (steelmanufacturer.in/market-area/)

Prepared 2026-11-01 from the built site (commit a9b6537). Every number below was measured on the
built pages; nothing is estimated from Google data, because Search Console data is not available
to us (the Supermetrics connection's trial expired on 2026-05-28).

## 1. Where things stand

| Group | Pages | State |
|---|---|---|
| Rewritten Indian city pages (own researched content, sources cited) | 46 | 44 under 50% shared text; Bhilwara and Kolhapur just over 50%. 43 live, 3 waiting for "merge to main" |
| Indian city pages still on the template | 125 | 63 of them share 50% or more of their text with another city page |
| Foreign city pages (USA 46, Germany 32, UK 32, Italy 30, Spain 28, Australia 22, Vietnam 22, Indonesia 20, Malaysia 20, Saudi Arabia 20, Netherlands 19, UAE 12, Oman 11, Singapore 9, Kuwait 8, Qatar 8, Bahrain 6) | 345 | 301 of them share 60% or more with another city page |
| State and directory hub pages | 6 | Unique, but 3 state pages are short (Telangana 469 words, Gujarat 536, Madhya Pradesh 682) |

Remaining template pages by state (Indian): Maharashtra 14, Tamil Nadu 14, Gujarat 12, West Bengal 10,
Andhra Pradesh 10, Odisha 10, Telangana 9, Karnataka 8, Madhya Pradesh 8, Uttar Pradesh 7, Haryana 4,
Kerala 4, Jharkhand 3, Punjab 3, Chhattisgarh 2, Rajasthan 2, Assam 1, Uttarakhand 1, Bihar 1, Goa 1, Delhi 1.

### Problems found in the shared template (on every city page, including the 46 rewritten ones)

| Text on the page | Pages | Problem |
|---|---|---|
| "Made at Our Taloja MIDC Works" / "Taloja MIDC Works" | 519 | Owner has not confirmed a Taloja factory. If untrue, it is a false business claim on every city page |
| "NABL lab chemical analysis" | 429 | Not confirmed by the owner |
| "904L EP tubing" | 427 | Not confirmed that 904L is supplied electropolished |
| "Get a [City] Quote in 30 Minutes" | 85 | Not confirmed; elsewhere the site promises 24 hours |
| "PESO / OISD rules on hazardous service in India" | 100 foreign pages | Indian regulations shown to buyers in the USA, UK, Germany etc. |
| "1-2 day road transit from our Mumbai works" and sea transit days | most pages | Owner has not confirmed real transit times |
| "ISO 9001:2015 Certified" | 519 | Owner to confirm the certificate is current |

These are fixed once, in the template, so all 519 pages change together.

## 2. Decisions needed from the owner before any page is removed or redirected

1. Is there a factory at Taloja MIDC? If not, what is the correct works address?
2. Is chemical analysis done in an NABL-accredited lab (yours or a third party)?
3. Do you supply 904L tube electropolished?
4. Real quote turnaround (30 minutes, 24 hours, or other) and real transit times.
5. Is ISO 9001:2015 current? (certificate number and expiry)
6. Export: which of the 17 foreign countries have you actually shipped electropolished pipe to?
   This decides what happens to the 345 foreign pages (section 4).
7. Search Console export (I cannot get it myself):
   Search Console, Performance, Search results, last 16 months, Pages tab, filter "URL contains
   /market-area/", Export to Google Sheets or CSV. Also Indexing, Pages, export both the
   "Indexed" and "Not indexed" lists. Share the sheet with me.

Until 1 to 5 are answered, the unconfirmed text is removed (not replaced with a guess).
Until 6 and 7 are answered, no page is noindexed, redirected or deleted.

## 3. Rules that every step follows

- Work only on branch claude/sakshi-seo-fixes-deploy-tjabop. Nothing goes to main or production
  without the owner writing "merge to main".
- No city page is deleted. Pages are only rewritten, noindexed, or 301-redirected, and only after
  the owner approves the exact list.
- Every redirect goes through the existing mechanism (frontend/src/data/redirects.js, which writes
  public/.htaccess, removes the page from prerender and sitemaps and stops internal links to it).
  No hand edits to .htaccess.
- A page that had any Search Console clicks, or a meaningful number of impressions, in the last 16
  months is never noindexed or redirected; it goes to the rewrite queue instead.
- A noindexed page is removed from sitemap-cities.xml in the same change. A redirected page's
  target must be a live, indexable page on the same topic (same city cluster or the country page),
  never the home page.
- No company facts unless the owner confirmed them. City facts only from cited, dated, reachable
  sources (2 or more domains per page).
- Every batch: build, then the existing gates (quality.py, score.py, audit.mjs, faqcheck.py,
  hydall.cjs) must pass; results recorded in seo-autoresearch/results.tsv. A page that fails is
  discarded, not forced through.
- One kind of change per deploy (template fix, then rewrites, then noindex/redirects), so that if
  rankings move we know which change caused it.
- Backup of dist and changed source files before each batch; every change is a separate commit
  that can be reverted.

## 4. The plan, in order

### Phase 1: Template corrections (1 day, after owner answers section 2, questions 1 to 5)

1. Remove or correct the unconfirmed claims in the table above, using only the owner's answers.
2. Show "PESO / OISD" only on Indian pages; foreign pages get no national regulation line
   unless sourced for that country.
3. Build, check that the strings are gone (grep of dist), run all gates, compare the page count
   and sitemap count before and after (both must be unchanged).
4. Owner approval, then merge to main. Check 5 live pages after deploy.

### Phase 2: Triage of the 125 Indian template pages (2 days, needs the Search Console export)

Each page goes into one of three lists, with the reason written next to it:

- **Rewrite**: the city has real, sourceable buyers of hygienic or high-purity tube (pharma, dairy,
  food, biotech, specialty chemicals, semiconductor). Expected to be most of the 125.
- **Merge**: the city is a suburb or twin of a city that has (or will get) its own rewritten page,
  and nothing on the web gives it its own buyers (pattern already used: Bharuch to Dahej,
  Tuticorin to Thoothukudi). 301 to that page.
- **Hold**: no sourceable hygienic-tube industry found. Keep the page live and unchanged until the
  Search Console data is in; then decide between rewrite and merge with the owner.

The triage list is sent to the owner for approval. Nothing is merged before approval.

### Phase 3: Rewrite the Indian pages (daily routine, about 6 to 8 weeks)

1. Daily routine keeps rewriting 5 pages per run from the approved Rewrite list, in this order:
   pages with Search Console impressions first (highest first), then cities in the largest
   pharma/dairy clusters (Hyderabad, Ahmedabad, Vadodara, Pune, Mumbai, Thane, Chennai, Visakhapatnam
   and similar), then the rest.
2. Re-run Bhilwara and Kolhapur to bring them under 50% shared text.
3. Expand the 3 short state pages (Telangana, Gujarat, Madhya Pradesh) into proper hubs that link
   to every rewritten city in the state.
4. Pace: at the current keep rate (about 3 of 5 pages pass the gates per run) the 125 pages take
   about 40 runs.

### Phase 4: Reduce the shared template block on rewritten pages (2 days)

Even the rewritten pages share 36 to 50% of their text, because the hero, logistics strip,
process steps and FAQ block are the same on every page. Shorten the shared blocks on pages that
have city content (the city content already covers delivery, RFQ and finish choice), keeping
everything that works: the quote form, contact details, schema and links. Target: rewritten pages
under 35% shared. Measured with score.py before and after; no visible feature removed.

### Phase 5: Foreign pages (after owner answers question 6 and the Search Console export)

Option A, recommended if exports to a country are real: keep one strong **country page** per
country where you have shipped (for example /market-area/uae/), written from real shipments,
standards and ports, and 301 that country's city pages to it, except any city page that has
Search Console clicks (those get rewritten individually).

Option B, for countries with no real exports: set the city pages to "noindex, follow" and remove
them from the sitemap first (reversible). After 3 months with no clicks, 301 them to /market-area/
with owner approval. They are not deleted.

Either way the owner approves the exact URL list first, and the redirect list is saved in
redirects.js so it is versioned and reversible.

### Phase 6: Measure (every 2 weeks)

- Owner checks the 46 rewritten pages in URL Inspection and the Indexing, Pages report, and shares
  the counts: Indexed / Crawled not indexed / Discovered not indexed.
- Success at 8 weeks: most rewritten pages show "Indexed" and get impressions for
  "electropolished pipes manufacturer in [city]" style searches.
- If rewritten pages stay "Crawled, currently not indexed" after 8 weeks, pause rewriting and
  move Phase 5 forward, because the duplicate foreign pages are then the likely cause.

## 5. What I will not do

- Delete pages, change URLs without a redirect entry, or deploy without "merge to main".
- Invent factory, lab, certification, transit-time or customer details.
- Claim any page is indexed or ranking without Search Console evidence from the owner.
