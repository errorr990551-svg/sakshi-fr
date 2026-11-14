# Foreign city pages: migration plan (plan only, nothing changed)

Date: 2026-11-14. Branch: claude/sakshi-seo-fixes-deploy-tjabop. This file changes nothing on the site.

## Why

The site's goal is to rank for "electropolished pipes / tubes manufacturer / supplier in [Indian city]".
There are 345 city pages for cities outside India (345 built in dist). Most share 60% or more of their text with another
city page (see city-pages-plan.md, section 1). Large sets of near-duplicate pages can lower how Google rates the
whole site, including the Indian city pages. Search Console (owner export, 16 months) shows all /market-area/
pages together earned 7 clicks and 162 impressions.

## What I will not do without the owner's written approval of the exact URL list

- Delete any page.
- Add noindex to any page.
- Redirect any URL.
- Remove any URL from the sitemap.

## Decision needed

The owner said exports go to "all 17 countries in middle east", but only 6 of the 17 are in the Middle East
(UAE, Saudi Arabia, Oman, Kuwait, Qatar, Bahrain). Please confirm, per country, whether you have actually shipped
electropolished pipe or tube there.

## Options per country

**A. Real export market:** keep one country page written from real shipments, standards and ports. 301 that
country's city pages to it, except any city page with Search Console clicks, which is rewritten individually.

**B. No real exports:** step 1, set the city pages to `noindex, follow` and remove them from the sitemap
(reversible in one commit). Step 2, after 3 months with no clicks and with owner approval, 301 them to
/market-area/. Pages are never deleted.

In both cases every redirect goes into src/data/redirects.js, so it is versioned and can be reverted.

## Steps once approved

1. Owner marks each country A or B below.
2. I pull Search Console clicks per URL (owner export) and move any URL with clicks out of the redirect list.
3. One commit per country on the claude branch; build; check page count, sitemap count and that every redirect
   target returns 200.
4. Owner writes "merge to main"; I check 5 redirected URLs live after deploy.
5. Recheck Search Console Indexing > Pages after 4 and 8 weeks.

## URL list by country

| Country | Pages | Middle East | Owner decision (A/B) |
|---|---|---|---|
| USA | 46 | no | |
| Germany | 32 | no | |
| UK | 32 | no | |
| Italy | 30 | no | |
| Spain | 28 | no | |
| Australia | 22 | no | |
| Vietnam | 22 | no | |
| Indonesia | 20 | no | |
| Malaysia | 20 | no | |
| Saudi Arabia | 20 | yes | |
| Netherlands | 19 | no | |
| UAE | 12 | yes | |
| Oman | 11 | yes | |
| Singapore | 9 | no | |
| Kuwait | 8 | yes | |
| Qatar | 8 | yes | |
| Bahrain | 6 | yes | |

### USA (46)

- /market-area/albany-usa
- /market-area/atlanta-usa
- /market-area/austin-usa
- /market-area/baltimore-usa
- /market-area/birmingham-usa
- /market-area/boise-usa
- /market-area/boston-usa
- /market-area/charlotte-usa
- /market-area/chicago-usa
- /market-area/cincinnati-usa
- /market-area/cleveland-usa
- /market-area/columbus-usa
- /market-area/dallas-fort-worth-usa
- /market-area/denver-usa
- /market-area/des-moines-usa
- /market-area/detroit-usa
- /market-area/greenville-usa
- /market-area/houston-usa
- /market-area/indianapolis-usa
- /market-area/kansas-city-usa
- /market-area/las-vegas-usa
- /market-area/los-angeles-usa
- /market-area/louisville-usa
- /market-area/memphis-usa
- /market-area/miami-usa
- /market-area/milwaukee-usa
- /market-area/minneapolis-st-paul-usa
- /market-area/nashville-usa
- /market-area/new-orleans-usa
- /market-area/newark-nj-usa
- /market-area/omaha-usa
- /market-area/orlando-usa
- /market-area/philadelphia-usa
- /market-area/phoenix-usa
- /market-area/pittsburgh-usa
- /market-area/portland-usa
- /market-area/raleigh-durham-usa
- /market-area/richmond-usa
- /market-area/rochester-usa
- /market-area/sacramento-usa
- /market-area/salt-lake-city-usa
- /market-area/san-diego-usa
- /market-area/san-francisco-bay-area-usa
- /market-area/seattle-usa
- /market-area/st-louis-usa
- /market-area/tampa-usa

### Germany (32)

- /market-area/augsburg-germany
- /market-area/berlin-germany
- /market-area/biberach-germany
- /market-area/bielefeld-germany
- /market-area/bremen-germany
- /market-area/chemnitz-germany
- /market-area/cologne-germany
- /market-area/dortmund-germany
- /market-area/dresden-germany
- /market-area/dusseldorf-germany
- /market-area/essen-germany
- /market-area/frankfurt-germany
- /market-area/freiburg-germany
- /market-area/halle-germany
- /market-area/hamburg-germany
- /market-area/hanover-germany
- /market-area/ingelheim-germany
- /market-area/karlsruhe-germany
- /market-area/kiel-germany
- /market-area/leipzig-germany
- /market-area/leverkusen-germany
- /market-area/ludwigshafen-germany
- /market-area/magdeburg-germany
- /market-area/mannheim-germany
- /market-area/marburg-germany
- /market-area/munich-germany
- /market-area/nuremberg-germany
- /market-area/regensburg-germany
- /market-area/rostock-germany
- /market-area/stuttgart-germany
- /market-area/ulm-germany
- /market-area/wuppertal-germany

### UK (32)

- /market-area/aberdeen-uk
- /market-area/belfast-uk
- /market-area/birmingham-uk
- /market-area/bristol-uk
- /market-area/cambridge-uk
- /market-area/cardiff-uk
- /market-area/coventry-uk
- /market-area/derby-uk
- /market-area/dundee-uk
- /market-area/edinburgh-uk
- /market-area/glasgow-uk
- /market-area/hull-uk
- /market-area/leeds-uk
- /market-area/leicester-uk
- /market-area/liverpool-uk
- /market-area/london-uk
- /market-area/macclesfield-uk
- /market-area/manchester-uk
- /market-area/milton-keynes-uk
- /market-area/newcastle-uk
- /market-area/norwich-uk
- /market-area/nottingham-uk
- /market-area/oxford-uk
- /market-area/plymouth-uk
- /market-area/preston-uk
- /market-area/reading-uk
- /market-area/sheffield-uk
- /market-area/southampton-uk
- /market-area/stoke-on-trent-uk
- /market-area/swansea-uk
- /market-area/swindon-uk
- /market-area/teesside-uk

### Italy (30)

- /market-area/ancona-italy
- /market-area/bari-italy
- /market-area/bergamo-italy
- /market-area/bologna-italy
- /market-area/brescia-italy
- /market-area/catania-italy
- /market-area/como-italy
- /market-area/cremona-italy
- /market-area/ferrara-italy
- /market-area/florence-italy
- /market-area/genoa-italy
- /market-area/latina-italy
- /market-area/milan-italy
- /market-area/modena-italy
- /market-area/monza-italy
- /market-area/naples-italy
- /market-area/padua-italy
- /market-area/parma-italy
- /market-area/pavia-italy
- /market-area/perugia-italy
- /market-area/piacenza-italy
- /market-area/ravenna-italy
- /market-area/reggio-emilia-italy
- /market-area/rome-italy
- /market-area/treviso-italy
- /market-area/turin-italy
- /market-area/varese-italy
- /market-area/venice-marghera-italy
- /market-area/verona-italy
- /market-area/vicenza-italy

### Spain (28)

- /market-area/a-coruna-spain
- /market-area/alicante-spain
- /market-area/barcelona-spain
- /market-area/bilbao-spain
- /market-area/burgos-spain
- /market-area/cartagena-spain
- /market-area/castellon-spain
- /market-area/cordoba-spain
- /market-area/girona-spain
- /market-area/granada-spain
- /market-area/huelva-spain
- /market-area/leon-spain
- /market-area/lleida-spain
- /market-area/madrid-spain
- /market-area/malaga-spain
- /market-area/murcia-spain
- /market-area/oviedo-gijon-spain
- /market-area/pamplona-spain
- /market-area/salamanca-spain
- /market-area/san-sebastian-spain
- /market-area/santander-spain
- /market-area/sevilla-spain
- /market-area/tarragona-spain
- /market-area/valencia-spain
- /market-area/valladolid-spain
- /market-area/vigo-spain
- /market-area/vitoria-gasteiz-spain
- /market-area/zaragoza-spain

### Australia (22)

- /market-area/adelaide-australia
- /market-area/albury-wodonga-australia
- /market-area/ballarat-australia
- /market-area/bendigo-australia
- /market-area/brisbane-australia
- /market-area/cairns-australia
- /market-area/canberra-australia
- /market-area/darwin-australia
- /market-area/geelong-australia
- /market-area/gold-coast-australia
- /market-area/hobart-australia
- /market-area/launceston-australia
- /market-area/melbourne-australia
- /market-area/newcastle-australia
- /market-area/perth-australia
- /market-area/shepparton-australia
- /market-area/sydney-australia
- /market-area/toowoomba-australia
- /market-area/townsville-australia
- /market-area/wagga-wagga-australia
- /market-area/warrnambool-australia
- /market-area/wollongong-australia

### Vietnam (22)

- /market-area/ba-ria-vung-tau-vietnam
- /market-area/bac-giang-vietnam
- /market-area/bac-ninh-vietnam
- /market-area/binh-duong-vietnam
- /market-area/binh-phuoc-vietnam
- /market-area/can-tho-vietnam
- /market-area/da-nang-vietnam
- /market-area/dong-nai-vietnam
- /market-area/hai-duong-vietnam
- /market-area/hai-phong-vietnam
- /market-area/hanoi-vietnam
- /market-area/ho-chi-minh-city-vietnam
- /market-area/hung-yen-vietnam
- /market-area/khanh-hoa-vietnam
- /market-area/long-an-vietnam
- /market-area/nghe-an-vietnam
- /market-area/quang-nam-vietnam
- /market-area/quang-ninh-vietnam
- /market-area/tay-ninh-vietnam
- /market-area/thai-nguyen-vietnam
- /market-area/thanh-hoa-vietnam
- /market-area/vinh-phuc-vietnam

### Indonesia (20)

- /market-area/balikpapan-indonesia
- /market-area/bandung-indonesia
- /market-area/batam-indonesia
- /market-area/bekasi-indonesia
- /market-area/bogor-indonesia
- /market-area/cikarang-indonesia
- /market-area/cilegon-indonesia
- /market-area/gresik-indonesia
- /market-area/jakarta-indonesia
- /market-area/karawang-indonesia
- /market-area/makassar-indonesia
- /market-area/medan-indonesia
- /market-area/palembang-indonesia
- /market-area/pasuruan-indonesia
- /market-area/pekanbaru-indonesia
- /market-area/semarang-indonesia
- /market-area/serang-indonesia
- /market-area/sidoarjo-indonesia
- /market-area/surabaya-indonesia
- /market-area/tangerang-indonesia

### Malaysia (20)

- /market-area/alor-setar-malaysia
- /market-area/bintulu-malaysia
- /market-area/ipoh-malaysia
- /market-area/johor-bahru-malaysia
- /market-area/klang-malaysia
- /market-area/kota-kinabalu-malaysia
- /market-area/kuala-lumpur-malaysia
- /market-area/kuantan-malaysia
- /market-area/kuching-malaysia
- /market-area/kulim-malaysia
- /market-area/melaka-malaysia
- /market-area/nilai-malaysia
- /market-area/pasir-gudang-malaysia
- /market-area/penang-malaysia
- /market-area/petaling-jaya-malaysia
- /market-area/rawang-malaysia
- /market-area/seremban-malaysia
- /market-area/shah-alam-malaysia
- /market-area/subang-jaya-malaysia
- /market-area/sungai-petani-malaysia

### Saudi Arabia (20)

- /market-area/abha-saudi-arabia
- /market-area/al-hasa-saudi-arabia
- /market-area/al-kharj-saudi-arabia
- /market-area/dammam-saudi-arabia
- /market-area/dhahran-saudi-arabia
- /market-area/hail-saudi-arabia
- /market-area/jeddah-saudi-arabia
- /market-area/jizan-saudi-arabia
- /market-area/jubail-saudi-arabia
- /market-area/kaec-rabigh-saudi-arabia
- /market-area/khobar-saudi-arabia
- /market-area/madinah-saudi-arabia
- /market-area/makkah-saudi-arabia
- /market-area/najran-saudi-arabia
- /market-area/qassim-buraidah-saudi-arabia
- /market-area/ras-al-khair-saudi-arabia
- /market-area/riyadh-saudi-arabia
- /market-area/sudair-saudi-arabia
- /market-area/tabuk-saudi-arabia
- /market-area/yanbu-saudi-arabia

### Netherlands (19)

- /market-area/amsterdam-netherlands
- /market-area/arnhem-netherlands
- /market-area/breda-netherlands
- /market-area/delft-netherlands
- /market-area/eindhoven-netherlands
- /market-area/enschede-netherlands
- /market-area/geleen-netherlands
- /market-area/groningen-netherlands
- /market-area/leiden-netherlands
- /market-area/nijmegen-netherlands
- /market-area/oss-netherlands
- /market-area/rotterdam-netherlands
- /market-area/terneuzen-netherlands
- /market-area/the-hague-netherlands
- /market-area/tilburg-netherlands
- /market-area/utrecht-netherlands
- /market-area/vlissingen-netherlands
- /market-area/wageningen-netherlands
- /market-area/zwolle-netherlands

### UAE (12)

- /market-area/abu-dhabi-uae
- /market-area/ajman-uae
- /market-area/al-ain-uae
- /market-area/dubai-investment-park-uae
- /market-area/dubai-uae
- /market-area/fujairah-uae
- /market-area/hamriyah-uae
- /market-area/jebel-ali-uae
- /market-area/mussafah-uae
- /market-area/ras-al-khaimah-uae
- /market-area/sharjah-uae
- /market-area/umm-al-quwain-uae

### Oman (11)

- /market-area/barka-oman
- /market-area/buraimi-oman
- /market-area/duqm-oman
- /market-area/ibra-oman
- /market-area/ibri-oman
- /market-area/muscat-oman
- /market-area/nizwa-oman
- /market-area/rusayl-oman
- /market-area/salalah-oman
- /market-area/sohar-oman
- /market-area/sur-oman

### Singapore (9)

- /market-area/ang-mo-kio-singapore
- /market-area/bedok-singapore
- /market-area/changi-singapore
- /market-area/jurong-island-singapore
- /market-area/jurong-singapore
- /market-area/kranji-singapore
- /market-area/pioneer-singapore
- /market-area/tuas-singapore
- /market-area/woodlands-singapore

### Kuwait (8)

- /market-area/al-ahmadi-kuwait
- /market-area/al-farwaniyah-kuwait
- /market-area/al-jahra-kuwait
- /market-area/kuwait-city-kuwait
- /market-area/mina-abdullah-kuwait
- /market-area/sabhan-kuwait
- /market-area/shuaiba-kuwait
- /market-area/sulaibiya-kuwait

### Qatar (8)

- /market-area/al-khor-qatar
- /market-area/al-rayyan-qatar
- /market-area/al-wakrah-qatar
- /market-area/doha-qatar
- /market-area/dukhan-qatar
- /market-area/mesaieed-qatar
- /market-area/ras-laffan-qatar
- /market-area/umm-salal-qatar

### Bahrain (6)

- /market-area/hidd-bahrain
- /market-area/isa-town-bahrain
- /market-area/manama-bahrain
- /market-area/riffa-bahrain
- /market-area/salmabad-bahrain
- /market-area/sitra-bahrain
