import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { REDIRECTED_PATHS, isRedirectedPath } from './src/data/redirects.js';
import { buildCityFaqs } from './src/data/cityContent.js';
import { customCityData } from './src/data/customCityData.js';
import { visibleProductFaqs } from './src/utils/productFaqs.js';
import { CATEGORY_GUIDES } from './src/data/categoryGuides.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://steelmanufacturer.in';


// SEO Title & Description Guards (ensures strict compliance with Google length recommendations)
function formatTitle(title) {
  if (!title) return 'Sakshi Forge | Steel Manufacturer Mumbai';
  let t = title.trim();
  if (t.length <= 60) return t;
  if (t.includes(' | Sakshi Forge')) {
    const withoutBrand = t.replace(' | Sakshi Forge', '').trim();
    if (withoutBrand.length + 5 <= 60) return `${withoutBrand} | SF`;
    if (withoutBrand.length <= 60) return withoutBrand;
    t = withoutBrand;
  }
  t = t.replace(/ Manufacturer & Supplier in India/gi, ' Manufacturer India')
       .replace(/ Manufacturer & Supplier/gi, ' Manufacturer')
       .replace(/ Manufacturer in India/gi, ' Manufacturer India')
       .replace(/ Supplier in India/gi, ' Supplier India')
       .replace(/ across India/gi, ' India');
  if (t.length <= 60) return t;
  const words = t.split(' ');
  let cur = '';
  for (const w of words) {
    if ((cur + (cur ? ' ' : '') + w).length <= 57) {
      cur += (cur ? ' ' : '') + w;
    } else {
      break;
    }
  }
  return cur || t.substring(0, 57);
}

function formatMetaDesc(desc) {
  if (!desc) return '';
  let d = desc.trim();
  if (d.length <= 160) return d;
  const periodIdx = d.lastIndexOf('.', 159);
  if (periodIdx > 100) return d.substring(0, periodIdx + 1).trim();
  const words = d.substring(0, 156).split(' ');
  words.pop();
  return words.join(' ').trim() + '...';
}

async function runPrerender() {
  console.log('Starting static pre-rendering...');

  // 1. Import render function from compiled server bundle
  const serverBundlePath = path.join(__dirname, 'dist/server/main-ssr.js');
  if (!fs.existsSync(serverBundlePath)) {
    console.error(`Error: Server bundle not found at ${serverBundlePath}. Run vite build --ssr first.`);
    process.exit(1);
  }
  
  const { render } = await import('./dist/server/main-ssr.js');
  const { odishaCityData } = await import('./src/data/odishaCityData.js');
  const { maharashtraCityData } = await import('./src/data/maharashtraCityData.js');
  const { karnatakaCityData } = await import('./src/data/karnatakaCityData.js');
  const { gujaratCityData } = await import('./src/data/gujaratCityData.js');
  const { telanganaCityData } = await import('./src/data/telanganaCityData.js');
  const { westBengalCityData } = await import('./src/data/westBengalCityData.js');
  const { madhyaPradeshCityData } = await import('./src/data/madhyaPradeshCityData.js');
  const { andhraPradeshCityData } = await import('./src/data/andhraPradeshCityData.js');
  const { blogPosts } = await import('./src/data/blogData.js');

  // 2. Load template and data models
  const templatePath = path.join(__dirname, 'dist/index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Each page component is its own chunk: preload the page's chunk (and its imports and CSS)
  // so it downloads in parallel with the entry script instead of after it.
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'dist/.vite/manifest.json'), 'utf-8'));
  const entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry);
  const entryDeps = new Set();
  const collectDeps = (key, into) => {
    if (!manifest[key] || into.has(key)) return;
    into.add(key);
    (manifest[key].imports || []).forEach((k) => collectDeps(k, into));
  };
  collectDeps(entryKey, entryDeps);
  const pageAssetTags = (component) => {
    const keys = new Set();
    collectDeps(`src/components/${component}.jsx`, keys);
    const tags = [];
    keys.forEach((k) => {
      if (entryDeps.has(k)) return;
      tags.push(`<link rel="modulepreload" crossorigin href="/${manifest[k].file}">`);
      (manifest[k].css || []).forEach((css) => tags.push(`<link rel="stylesheet" crossorigin href="/${css}">`));
    });
    return tags.join('\n    ');
  };
  const embedRoute = (route) => `<script id="route-data" type="application/json">${JSON.stringify(route).replace(/</g, '\\u003c')}</script>`;

  const corePages = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/core_pages.json'), 'utf-8'));
  const categories = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/categories.json'), 'utf-8'));
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/products.json'), 'utf-8'));
  const marketCities = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/market_cities.json'), 'utf-8')).filter(c => c.path && c.city && c.path !== '/');
  const epBuildSpecData = fs.existsSync(path.join(__dirname, 'src/data/ep_build_spec_data.json'))
    ? JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/ep_build_spec_data.json'), 'utf-8'))
    : [];


  // 3. Assemble routes list
  const routes = [];

  // Core Pages
  corePages.forEach(p => {
    routes.push({
      url: p.URL,
      type: p.Slug === '' ? 'home' : p.Slug,
      slug: p.Slug,
      title: p['Meta Title'],
      description: p['Meta Description'],
      robots: p['Robots'] || 'index, follow',
      keywords: p['Primary Keyword'] ? (p['Secondary Keywords'] ? `${p['Primary Keyword']}, ${p['Secondary Keywords']}` : p['Primary Keyword']) : '',
      data: p
    });
  });

  // Categories
  categories.forEach(c => {
    routes.push({
      url: `${BASE_URL}/${c['Category Slug']}/`,
      type: 'category',
      slug: c['Category Slug'],
      title: c['Category Meta Title'],
      description: c['Category Meta Description'],
      robots: c['Robots'] || 'index, follow',
      keywords: c['Primary KW'] ? (c['Secondary KWs'] ? `${c['Primary KW']}, ${c['Secondary KWs']}` : c['Primary KW']) : '',
      data: c
    });
  });

  // Products
  products.forEach(p => {
    routes.push({
      url: `${BASE_URL}/${p['URL Slug']}/`,
      type: 'product',
      slug: p['URL Slug'],
      title: p['Meta Title'] || p['Meta Title (<=60 chars)'] || p['Product Name'],
      description: p['Meta Description'] || p['Meta Description (<=160 chars)'] || p['Product Description'] || '',
      robots: p['Robots'] || 'index, follow',
      keywords: p['Primary Keyword'] ? (p['Secondary Keywords (3-5)'] ? `${p['Primary Keyword']}, ${p['Secondary Keywords (3-5)']}` : p['Primary Keyword']) : '',
      data: p
    });
  });
  
  // Market Area page
  routes.push({
    url: `${BASE_URL}/market-area/`,
    type: 'market-area',
    slug: 'market-area',
    title: 'Sakshi Forge | India Cities We Serve - Electropolished Pipes & Fittings Supply',
    description: 'Explore the commercial and industrial cities served by Sakshi Forge across India. High-quality electropolished pipes and industrial steel supply.',
    robots: 'index, follow',
    keywords: 'market area, industrial cities, sakshi forge locations, steel pipes supply India',
    data: null
  });

  // Market Cities pages
  marketCities.forEach(c => {
    const cleanPath = c.path.replace(/\/+$/, '');
    routes.push({
      url: `${BASE_URL}${cleanPath}`,
      type: 'market-city',
      slug: cleanPath.startsWith('/') ? cleanPath.substring(1) : cleanPath, // remove starting slash
      title: c.pageTitle,
      description: c.metaDescription,
      robots: 'index, follow',
      keywords: c.primaryKeyword ? (c.topSecondaryKeywords ? `${c.primaryKeyword}, ${c.topSecondaryKeywords}` : c.primaryKeyword) : '',
      data: c
    });
  });

  // Workbook New Pages & Tools
  const extraPages = [
    { url: `${BASE_URL}/gallery/`, type: 'gallery', slug: 'gallery', title: 'Factory Media & Video Gallery | Sakshi Forge Manufacturing Infrastructure', description: 'Watch live videos and explore photos of Sakshi Forge forging presses, heat treatment furnaces, CNC lathes, and industrial steel flange inventory.', data: null },
    { url: `${BASE_URL}/clients/`, type: 'clients', slug: 'clients', title: 'Our Clients & Industries | Sakshi Forge', description: 'Sakshi Forge supplies ISO 9001:2015 certified flanges and fittings globally.', data: null },
    { url: `${BASE_URL}/catalogue/`, type: 'catalogue', slug: 'catalogue', title: 'Download Product Catalogue (PDF) | Sakshi Forge', description: 'Download official Sakshi Forge catalogue with ASME B16.5 flange dimension tables.', data: null },
    { url: `${BASE_URL}/team/`, type: 'team', slug: 'team', title: 'Leadership & Engineering Team | Sakshi Forge', description: 'Meet the Sakshi Forge leadership, metallurgy and quality assurance team behind our stainless steel flanges, forged fittings and electropolished pipes.', data: null },
    { url: `${BASE_URL}/stainless-steel-elbow/`, type: 'stainless-steel-elbow', slug: 'stainless-steel-elbow', title: 'SS Elbow Manufacturer: 45°, 90°, 180° | Sakshi Forge', description: 'Stainless steel 45°, 90° and 180° elbows to ASME B16.9 (buttweld) and ASME B16.11 (forged) in 304/304L, 316/316L and duplex grades from Sakshi Forge.', data: null },
    { url: `${BASE_URL}/ss-304-pipe-fittings-flanges/`, type: 'grade', slug: 'ss-304-pipe-fittings-flanges', title: 'SS 304/304L Pipes, Fittings & Flanges | Sakshi Forge', description: 'SS 304 / 304L pipes, pipe fittings, flanges and forged fittings from Sakshi Forge, supplied to ASTM and ASME standards with mill test certificates.', data: null },
    { url: `${BASE_URL}/ss-316-316l-pipe-fittings-flanges/`, type: 'grade', slug: 'ss-316-316l-pipe-fittings-flanges', title: 'SS 316/316L Pipes, Fittings & Flanges | Sakshi Forge', description: 'SS 316 / 316L pipes, pipe fittings, flanges and forged fittings from Sakshi Forge for chemical, pharma and food plants, with mill test certificates.', data: null },
    { url: `${BASE_URL}/duplex-2205-products/`, type: 'grade', slug: 'duplex-2205-products', title: 'Duplex 2205 Flanges & Fittings | Sakshi Forge', description: 'Duplex 2205 (UNS S31803 / S32205) flanges, pipe fittings and forged fittings from Sakshi Forge for chloride-rich, high-strength process service.', data: null },
    { url: `${BASE_URL}/super-duplex-2507-products/`, type: 'grade', slug: 'super-duplex-2507-products', title: 'Super Duplex 2507 Products | Sakshi Forge', description: 'Super duplex 2507 (UNS S32750) flanges, pipe fittings and forged fittings from Sakshi Forge for offshore, desalination and severe chloride duty.', data: null },
    { url: `${BASE_URL}/inconel-625-flanges/`, type: 'grade', slug: 'inconel-625-flanges', title: 'Inconel 625 Flanges Supplier | Sakshi Forge', description: 'Inconel 625 (UNS N06625) forged flanges from Sakshi Forge: weld neck, slip-on, blind and socket weld types for high-temperature, corrosive service.', data: null },
    { url: `${BASE_URL}/asme-b16-11-forged-fittings/`, type: 'standard', slug: 'asme-b16-11-forged-fittings', title: 'ASME B16.11 Forged Fittings: Classes & Dimensions', description: 'ASME B16.11 forged fittings guide: socket weld and threaded classes 2000, 3000, 6000 and 9000, dimensions and grades supplied by Sakshi Forge.', data: null },
    { url: `${BASE_URL}/asme-b16-5-flanges/`, type: 'standard', slug: 'asme-b16-5-flanges', title: 'ASME B16.5 Flanges: Classes 150-2500 & Dimensions', description: 'ASME B16.5 flanges in pressure classes 150 to 2500: types, dimensions and materials, manufactured and supplied by Sakshi Forge in Mumbai, India.', data: null },
    { url: `${BASE_URL}/astm-a105-flanges/`, type: 'standard', slug: 'astm-a105-flanges', title: 'ASTM A105 Carbon Steel Flanges Manufacturer', description: 'ASTM A105 carbon steel forged flanges from Sakshi Forge: weld neck, slip-on, blind and socket weld flanges to ASME B16.5 dimensions.', data: null },
    { url: `${BASE_URL}/astm-a270-sanitary-tube/`, type: 'standard', slug: 'astm-a270-sanitary-tube', title: 'ASTM A270 Sanitary Tubes | EP & BA Finish', description: 'ASTM A270 sanitary stainless steel tubing in 304L and 316L with electropolished (EP) and bright annealed (BA) finishes for food, dairy and pharma lines.', data: null },
    { url: `${BASE_URL}/flange-dimension-chart/`, type: 'chart-tool', slug: 'flange-dimension-chart', title: 'ASME B16.5 Flange Dimension Chart', description: 'ASME B16.5 flange dimension chart: outside diameter, thickness, bolt circle and bolt holes for weld neck, slip-on and blind flanges, class 150 to 2500.', data: { toolType: 'flange-dimension-chart' } },
    { url: `${BASE_URL}/flange-weight-chart/`, type: 'chart-tool', slug: 'flange-weight-chart', title: 'Flange Weight Chart & Calculator', description: 'Flange weight chart and calculator: approximate weights of ASME B16.5 weld neck, slip-on and blind flanges by nominal size and pressure class.', data: { toolType: 'flange-weight-chart' } },
    { url: `${BASE_URL}/flange-bolt-chart/`, type: 'chart-tool', slug: 'flange-bolt-chart', title: 'Flange Bolt Chart: Size, Qty & Torque', description: 'Flange bolt chart: stud bolt size, quantity and length for ASME B16.5 flanges by nominal pipe size and pressure class, with torque guidance.', data: { toolType: 'flange-bolt-chart' } },
    { url: `${BASE_URL}/pipe-schedule-chart/`, type: 'chart-tool', slug: 'pipe-schedule-chart', title: 'Pipe Schedule Chart: Sch 5S-XXS', description: 'Pipe schedule chart from Sch 5S to XXS: outside diameter, wall thickness and weight per metre for stainless and carbon steel pipe sizes.', data: { toolType: 'pipe-schedule-chart' } },
    { url: `${BASE_URL}/flange-exporter-usa/`, type: 'export', slug: 'flange-exporter-usa', title: 'Indian Flange & Fittings Exporter to USA', description: 'Sakshi Forge exports ASME B16.5 flanges, forged fittings and stainless steel pipe fittings from India to buyers in the USA, with full material traceability.', data: { countryType: 'usa' } },
    { url: `${BASE_URL}/flange-supplier-uae/`, type: 'export', slug: 'flange-supplier-uae', title: 'Flange & Pipe Fittings Supplier to UAE', description: 'Sakshi Forge supplies flanges, forged fittings and stainless steel pipe fittings from India to oil, gas and process plants across the UAE.', data: { countryType: 'uae' } },
    { url: `${BASE_URL}/flange-supplier-saudi-arabia/`, type: 'export', slug: 'flange-supplier-saudi-arabia', title: 'Flange Supplier to Saudi Arabia', description: 'Sakshi Forge supplies ASME flanges, forged fittings and stainless steel pipe fittings from India to industrial and oil and gas projects in Saudi Arabia.', data: { countryType: 'saudi-arabia' } },
    { url: `${BASE_URL}/tamil-nadu/`, type: 'tamil-nadu-hub', slug: 'tamil-nadu', title: 'Electropolished Pipe Supplier in Tamil Nadu | 10 Industrial Belts | Sakshi Forge', description: 'Factory-direct electropolished SS 304L, 316L and duplex pipes supplied across Tamil Nadu: Chennai, Coimbatore, Hosur, Cuddalore, Trichy, Salem, Madurai, Thoothukudi, Erode, Vellore.', data: null },
    { url: `${BASE_URL}/karnataka/`, type: 'karnataka-hub', slug: 'karnataka', title: 'Electropolished Pipe Manufacturer Across Karnataka | Sakshi Forge', description: 'Sakshi Forge supplies electropolished SS 316L, 304L and duplex pipes across Karnataka industrial corridors: Bengaluru, Tumakuru, Mysuru, Mangaluru, Bidar, Hubballi-Dharwad, Belagavi, Hassan, Raichur and Mandya.', data: null },
    { url: `${BASE_URL}/market-area/gujarat/`, type: 'gujarat-hub', slug: 'market-area/gujarat', title: 'Electropolished Pipe Manufacturer Across Gujarat | Sakshi Forge', description: 'Sakshi Forge supplies electropolished SS 316L, 304L and duplex pipes across Gujarat industrial belts: Ahmedabad, Vadodara, Vapi, Sanand, Ankleshwar, Surat, Dahej, Anand and Mehsana.', data: null },
    { url: `${BASE_URL}/market-area/telangana/`, type: 'telangana-hub', slug: 'market-area/telangana', title: 'Electropolished Pipe Manufacturer Across Telangana | Sakshi Forge', description: 'Sakshi Forge supplies electropolished SS 316L, 304L and duplex pipes across Telangana industrial belts: Hyderabad, Sangareddy, Patancheru, Karimnagar, Mahabubnagar, Warangal, Nizamabad, Siddipet, Ramagundam and Khammam.', data: null },
    { url: `${BASE_URL}/market-area/west-bengal/`, type: 'west-bengal-hub', slug: 'market-area/west-bengal', title: 'Electropolished Pipe Manufacturer Across West Bengal | Sakshi Forge', description: 'Sakshi Forge supplies electropolished SS 316L, 304L and duplex 2205 pipes across West Bengal industrial corridors: Kolkata, Haldia, Kalyani, Howrah, Dankuni, Durgapur, Siliguri, Kharagpur, Asansol and Bardhaman.', data: null },
    { url: `${BASE_URL}/market-area/madhya-pradesh/`, type: 'madhya-pradesh-hub', slug: 'market-area/madhya-pradesh', title: 'Electropolished Pipe Manufacturer Across Madhya Pradesh | Sakshi Forge', description: 'Sakshi Forge supplies electropolished SS 316L and 304L pipes across Madhya Pradesh industrial corridors: Indore, Pithampur SEZ, Dewas, Ujjain Vikram Udyogpuri, Bhopal, Ratlam, Gwalior Malanpur, Jabalpur and Neemuch.', data: null },
    { url: `${BASE_URL}/market-area/andhra-pradesh/`, type: 'andhra-pradesh-hub', slug: 'market-area/andhra-pradesh', title: 'Electropolished Pipes Across Andhra Pradesh | Sakshi Forge', description: 'Sakshi Forge supplies electropolished SS 316L, 304L and duplex 2205 pipes across Andhra Pradesh industrial corridors: Visakhapatnam Vizag SEZ, Anakapalle Parawada Pharma City, Tirupati Sri City, Kakinada Port SEZ, Vijayawada Autonagar, Guntur Spices Park, Rajahmundry, Chittoor, Nellore Krishnapatnam and Kurnool Orvakal.', data: null },
    { url: `${BASE_URL}/market-area/odisha/`, type: 'market-area', slug: 'market-area/odisha', title: 'Electropolished Pipes Across Odisha | Sakshi Forge', description: 'Sakshi Forge supplies electropolished SS 316L, 304L and duplex pipes across Odisha industrial corridors: Bhubaneswar, Cuttack, Berhampur, Angul, Rourkela, Sambalpur, Jharsuguda, Jajpur, Paradip, and Balasore.', data: null }
  ];

  extraPages.forEach(p => routes.push(p));

  // EP Build Spec 106 Pages
  epBuildSpecData.forEach(p => {
    if (p.url && p.url !== '/') {
      const cleanSlug = p.url.replace(/^\/|\/$/g, '');
      // Avoid duplicate route if already present
      // Blog posts with the same URL replace the template page
      if (!routes.some(r => r.slug === cleanSlug) && !blogPosts.some(b => `blog/${b.slug}` === cleanSlug)) {
        routes.push({
          url: `${BASE_URL}/${cleanSlug}/`,
          type: 'ep-spec',
          slug: cleanSlug,
          title: p.title,
          description: p.meta,
          robots: 'index, follow',
          keywords: p.primary_kw ? (p.secondary_kws?.length ? `${p.primary_kw}, ${p.secondary_kws.join(', ')}` : p.primary_kw) : '',
        });
      }
    }
  });

  // Technical Blog Hub Page
  routes.push({
    url: `${BASE_URL}/blog/`,
    type: 'blog',
    slug: 'blog',
    title: 'Steel Knowledge Hub & Technical Guides | Sakshi Forge',
    description: 'Deep technical briefings, ASME dimension matrices, surface electropolishing standards, and metallurgical grade selection guides curated by Sakshi Forge engineers.',
    robots: 'index, follow',
    keywords: 'steel knowledge hub, electropolished pipes guide, ASME BPE standards, pharma piping specs',
    data: null
  });

  // Individual Technical Blog Posts
  blogPosts.forEach(post => {
    routes.push({
      url: `${BASE_URL}/blog/${post.slug}/`,
      type: 'blog-post',
      slug: `blog/${post.slug}`,
      title: post.seoTitle ? `${post.seoTitle} | Sakshi Forge` : `${post.title} | Sakshi Forge`,
      description: post.desc,
      robots: 'index, follow',
      keywords: post.tags ? post.tags.join(', ') : '',
      data: post
    });
  });

  console.log(`Prepared ${routes.length} routes to render.`);

  // Helper to parse key specs
  function parseSpecs(specsString) {
    if (!specsString) return [];
    if (specsString.includes('\n')) {
      const lines = specsString.split('\n').map(l => l.trim()).filter(Boolean);
      const parsed = [];
      lines.forEach(line => {
        if (line.includes('|')) {
          const parts = line.split('|').map(p => p.trim());
          if (parts[0].toLowerCase() === 'specification' || parts[0].toLowerCase() === 'property') return;
          parsed.push({ key: parts[0], value: parts[1] || '' });
        }
      });
      return parsed;
    }
    return specsString.split('|').map(item => {
      const parts = item.split(':');
      return { key: parts[0]?.trim() || '', value: parts[1]?.trim() || '' };
    }).filter(item => item.key);
  }

  // Product identifier only. The site publishes no prices, stock levels, return or shipping
  // terms, so Product markup carries no `offers` (an invented AggregateOffer was removed:
  // structured data must match what the page shows).
  function getProductOfferDetails(slug) {
    return { sku: `SF-${(slug || 'ITEM').replace(/[^a-zA-Z0-9]/g, '-').toUpperCase()}` };
  }

  // Write the merged-page 301 rules into the deployed .htaccess
  const htaccessPath = path.join(__dirname, 'dist/.htaccess');
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const mergedRules = Object.entries(REDIRECTED_PATHS)
    .map(([from, to]) => `RewriteRule ^${escapeRegex(from.replace(/^\/|\/$/g, ''))}/?$ ${BASE_URL}${to} [L,R=301]`)
    .join('\n');
  // Legacy city URLs redirect only to market-area pages that are actually built
  const citySlugs = routes
    .map((r) => (r.slug.match(/^market-area\/([a-z0-9-]+)$/) || [])[1])
    .filter((slug) => slug && !isRedirectedPath(`/market-area/${slug}`));
  // Each rule line holding @CITY_SLUGS@ is repeated with ~1,500-character slug groups,
  // keeping every line well under Apache/LiteSpeed's 8 KB config line limit
  const slugChunks = [];
  for (const slug of [...new Set(citySlugs)].sort()) {
    const last = slugChunks[slugChunks.length - 1];
    if (last && last.join('|').length + slug.length < 1500) last.push(slug);
    else slugChunks.push([slug]);
  }
  fs.writeFileSync(htaccessPath, fs.readFileSync(htaccessPath, 'utf-8')
    .replace('# @MERGED_PAGES@', mergedRules)
    .replace(/^.*@CITY_SLUGS@.*$/gm, (line) => slugChunks.map((chunk) => line.replace('@CITY_SLUGS@', chunk.join('|'))).join('\n')));

  // 4. Render each route (skipping merged pages the server 301-redirects, see src/data/redirects.js)
  const contentHashes = {};
  for (const route of routes) {
    if (isRedirectedPath(`/${route.slug}`)) continue;
    // Determine path relative to domain
    let routePath = '/' + route.slug;
    if (route.type === 'home') {
      routePath = '/';
    }

    console.log(`Pre-rendering URL: ${routePath}`);

    // Render body using server bundle
    // In-depth city content (public/city-content/<slug>.json): visible to the server render
    // and embedded in the page so hydration renders the same markup.
    const citySlugMatch = routePath.match(/^\/market-area\/([^/]+)\/?$/);
    const cityDeepPath = citySlugMatch ? path.join(__dirname, 'public/city-content', `${citySlugMatch[1]}.json`) : null;
    // Cities without a file embed { slug, none: true } so the client does not request a missing JSON
    const cityDeep = !cityDeepPath ? null
      : fs.existsSync(cityDeepPath) ? JSON.parse(fs.readFileSync(cityDeepPath, 'utf-8'))
      : { slug: citySlugMatch[1], none: true };
    globalThis.__CITY_DEEP__ = cityDeep;

    let bodyHtml = '';
    let rendered = null;
    try {
      rendered = await render(routePath);
      bodyHtml = rendered.html;
      // The browser hydrates from the embedded JSON copy of the route: it must render the same HTML
      const fromJson = await render(routePath, JSON.parse(JSON.stringify(rendered.route)));
      if (fromJson.html !== bodyHtml) {
        throw new Error(`route data for ${routePath} does not survive JSON embedding (hydration would differ)`);
      }
    } catch (err) {
      console.error(`Failed rendering path ${routePath}:`, err);
      process.exit(1);
    }

    // Build Schemas graph
    const schemasGraph = [];

    // Sitewide schema
    const org = {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org`,
      "name": "Sakshi Forge",
      "url": `${BASE_URL}/`,
      "logo": `${BASE_URL}/favicon.svg`,
      "sameAs": [
        "https://www.sakshiforge.com",
        "https://www.indiamart.com/sakshiforge"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8045815130",
        "contactType": "sales",
        "email": "info@sakshiforge.in"
      }
    };
    const website = {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}/`,
      "name": "Sakshi Forge",
      "publisher": { "@id": `${BASE_URL}/#org` }
    };
    schemasGraph.push(org);
    schemasGraph.push(website);

    if (route.type === 'home' || route.type === 'contact-us') {
      const local = {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#local`,
        "name": "Sakshi Forge",
        "image": `${BASE_URL}/favicon.svg`,
        "telephone": "+91-8045815130",
        "email": "info@sakshiforge.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "113/117 Dr. M.G. Mahimtura Marg, 3rd Kumbharwada, Shop No. 5, Ground Floor",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400004",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.9602",
          "longitude": "72.8263"
        }
      };
      schemasGraph.push(local);
    }

    if (route.type === 'category') {
      const breadcrumbs = {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": route.data['Parent Category'], "item": route.url }
        ]
      };
      const collectionPage = {
        "@type": "CollectionPage",
        "name": route.title,
        "url": route.url,
        "description": route.description,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": { "@type": "Thing", "name": route.data['Parent Category'] }
      };
      schemasGraph.push(breadcrumbs);
      schemasGraph.push(collectionPage);
      const guide = CATEGORY_GUIDES[route.data['Category Slug']];
      if (guide) {
        schemasGraph.push({
          "@type": "FAQPage",
          "mainEntity": guide.faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        });
      }
    }

    if (route.type === 'blog-post' && route.data) {
      const post = route.data;
      const isoDate = (d) => { const t = new Date(d); return isNaN(t) ? undefined : t.toISOString().slice(0, 10); };
      schemasGraph.push({
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Steel Knowledge Hub", "item": `${BASE_URL}/blog/` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": route.url }
        ]
      });
      schemasGraph.push({
        "@type": "BlogPosting",
        "@id": `${route.url}#article`,
        "headline": post.title,
        "description": post.desc,
        "datePublished": isoDate(post.date),
        "dateModified": isoDate(post.date),
        "author": { "@type": "Organization", "name": "Sakshi Forge" },
        "publisher": { "@id": `${BASE_URL}/#org` },
        "mainEntityOfPage": { "@type": "WebPage", "@id": route.url },
        "image": post.image ? `${BASE_URL}${encodeURI(post.image)}` : undefined
      });
      if (post.faqs && post.faqs.length) {
        schemasGraph.push({
          "@type": "FAQPage",
          "mainEntity": post.faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        });
      }
    }

    if (route.type === 'product') {
      const catSlug = route.slug.split('/')[0] || 'products';
      const parentCat = categories.find(c => c['Category Slug'] === catSlug);
      const catName = parentCat ? parentCat['Category Name'] : (route.data['Category'] || 'Products');
      const breadcrumbs = {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": catName, "item": `${BASE_URL}/${catSlug}/` },
          { "@type": "ListItem", "position": 3, "name": route.data['Product Name'], "item": route.url }
        ]
      };

      const specsList = parseSpecs(route.data['Key Specs']);
      const addProps = specsList.map(s => ({
        "@type": "PropertyValue",
        "name": s.key,
        "value": s.value
      }));
      const materialGrade = specsList.find(s => s.key.toLowerCase().includes("grade") || s.key.toLowerCase().includes("material"))?.value || "Stainless Steel";

      const offerData = getProductOfferDetails(route.slug, route.data['Category'], route.url);

      const productSchema = {
        "@type": "Product",
        "name": route.data['Product Name'],
        "url": route.url,
        "image": [ `${BASE_URL}${encodeURI(route.data['Image'] || '/flanges_pipes.webp')}` ],
        "description": route.description,
        "sku": offerData.sku,
        "mpn": offerData.mpn,
        "brand": { "@type": "Brand", "name": "Sakshi Forge" },
        "manufacturer": { "@id": `${BASE_URL}/#org` },
        "material": materialGrade,
        "additionalProperty": addProps,
        "offers": offerData.offers
      };

      schemasGraph.push(breadcrumbs);
      schemasGraph.push(productSchema);

      const productFaqs = visibleProductFaqs(route.data);
      if (productFaqs.length > 0) {
        const faqEntities = productFaqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }));
        schemasGraph.push({
          "@type": "FAQPage",
          "mainEntity": faqEntities
        });
      }
    }

    if (route.type === 'ep-spec' && route.data) {
      const parentPath = route.data.parent || "/";
      const parentName = parentPath === "/" ? "Home" : parentPath.replace(/^\/|\/$/g, "").replace(/-/g, " ");

      const breadcrumbList = {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` }
        ]
      };

      if (parentPath !== "/") {
        const cleanParent = parentPath.replace(/\/+$/, '') + '/';
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": parentName,
          "item": `${BASE_URL}${cleanParent.startsWith('/') ? '' : '/'}${cleanParent}`
        });
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": 3,
          "name": route.data.h1 || route.title,
          "item": route.url
        });
      } else {
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": route.data.h1 || route.title,
          "item": route.url
        });
      }

      schemasGraph.push(breadcrumbList);

      if (route.data.faqs && route.data.faqs.length > 0) {
        const faqEntities = route.data.faqs.map(f => ({
          "@type": "Question",
          "name": f.question || f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer || f.a }
        }));
        schemasGraph.push({
          "@type": "FAQPage",
          "mainEntity": faqEntities
        });
      }

      if (route.data.page_type && route.data.page_type.includes("Product")) {
        const epOffer = getProductOfferDetails(route.slug, 'Electropolished Pipes', route.url);
        schemasGraph.push({
          "@type": "Product",
          "name": route.data.h1 || route.title,
          "url": route.url,
          "image": [ `${BASE_URL}/electropolish_pipes.webp` ],
          "description": route.description,
          "sku": epOffer.sku,
          "mpn": epOffer.mpn,
          "brand": { "@type": "Brand", "name": "Sakshi Forge" },
          "manufacturer": { "@id": `${BASE_URL}/#org` },
          "material": "Stainless Steel 316L / 304L",
          "additionalProperty": [
            { "@type": "PropertyValue", "name": "Surface Finish", "value": "Ra 0.38 um (15 uin) - ASME BPE SF4" },
            { "@type": "PropertyValue", "name": "Standard", "value": "ASTM A270 / ASTM A312" },
            { "@type": "PropertyValue", "name": "Certification", "value": "EN 10204 3.1 MTC" }
          ],
          "offers": epOffer.offers
        });
      }
    }

    if (route.type === 'market-city' && route.data) {
      const citySlug = route.data.slug || route.slug.replace('market-area/', '');
      const richData = odishaCityData[citySlug] || maharashtraCityData[citySlug] || karnatakaCityData[citySlug] || gujaratCityData[citySlug] || telanganaCityData[citySlug] || westBengalCityData[citySlug] || madhyaPradeshCityData[citySlug] || andhraPradeshCityData[citySlug];

      const rawCityPath = route.data.path || ('/market-area/' + citySlug);
      const cleanCityPath = rawCityPath.replace(/\/+$/, '') + '/';
      const currentUrl = `${BASE_URL}${cleanCityPath.startsWith('/') ? '' : '/'}${cleanCityPath}`;
      const cityName = richData?.city || route.data.city;
      const stateName = richData?.state || route.data.state || 'India';
      // Must match the FAQs CityPage shows: custom city data first, then generated research FAQs
      const customCity = customCityData[citySlug];
      const faqsList = richData?.faqs || (customCity ? customCity.faqs : buildCityFaqs(route.data)) || route.data.faqs;
      const hasDuplex = richData?.hasDuplex || route.data.hasDuplex;

      // BreadcrumbList
      schemasGraph.push({
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Market Areas", "item": `${BASE_URL}/market-area/` },
          { "@type": "ListItem", "position": 3, "name": cityName, "item": currentUrl }
        ]
      });

      // LocalBusiness
      schemasGraph.push({
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#org`,
        "name": "Sakshi Forge",
        "url": `${BASE_URL}/`,
        "telephone": "+918291366340",
        "email": "sales@steelmanufacturer.in",
        "description": "ISO 9001:2015 certified manufacturer of electropolished stainless steel pipes and tubes, industrial flanges and forged fittings.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Balaji Industrial Compound, Taloja MIDC",
          "addressLocality": "Navi Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "410208",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": cityName },
          ...(stateName ? [{ "@type": "AdministrativeArea", "name": stateName }] : [])
        ]
      });

      // Product
      const cityEpOffer = getProductOfferDetails('electropolished-pipes-' + citySlug, 'Electropolished Pipes', currentUrl);
      schemasGraph.push({
        "@type": "Product",
        "@id": `${currentUrl}#product`,
        "name": hasDuplex 
          ? `Electropolished SS 316L and Duplex 2205 Pipes and Tubes - ${cityName}`
          : `Electropolished SS 304L / 316L Sanitary Pipes and Tubes - ${cityName}`,
        "description": route.data.metaDescription || `Welded and seamless electropolished stainless steel pipes and tubes in 316L, 304L${hasDuplex ? ' and duplex 2205' : ''} for ${cityName}, supplied with MTC EN 10204 3.1 and 100% PMI testing.`,
        "image": [ `${BASE_URL}/electropolish_pipes.webp` ],
        "sku": cityEpOffer.sku,
        "mpn": cityEpOffer.mpn,
        "brand": { "@type": "Brand", "name": "Sakshi Forge" },
        "manufacturer": { "@id": `${BASE_URL}/#org` },
        "material": hasDuplex
          ? "SS 316L (UNS S31603 / 1.4404), SS 304L (UNS S30403 / 1.4307), Duplex 2205 (UNS S31803 / 1.4462)"
          : "SS 304L (UNS S30403 / 1.4307), SS 316L (UNS S31603 / 1.4404)",
        "category": "Electropolished stainless steel pipes and tubes",
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Internal surface roughness (Ra)", "maxValue": 0.4, "unitCode": "4H", "unitText": "µm" },
          { "@type": "PropertyValue", "name": "Manufacturing standards", "value": hasDuplex ? "ASTM A269, ASTM A270, ASTM A790 (duplex)" : "ASTM A269, ASTM A270" },
          { "@type": "PropertyValue", "name": "Material certificate", "value": "EN 10204 3.1" },
          { "@type": "PropertyValue", "name": "Testing", "value": "100% PMI, Ra test, hydro test, passivation verification, ferrite check" },
          { "@type": "PropertyValue", "name": "Types", "value": "Welded and seamless" }
        ],
        "offers": cityEpOffer.offers
      });

      // FAQPage
      if (faqsList && faqsList.length > 0) {
        const faqEntities = faqsList.map(f => ({
          "@type": "Question",
          "name": f.q || f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a || f.answer
          }
        }));
        schemasGraph.push({
          "@type": "FAQPage",
          "mainEntity": faqEntities
        });
      }
    }

    const schemaBlockHtml = `<script type="application/ld+json" class="sakshi-seo-schema">\n${JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemasGraph
    }, null, 2)}\n</script>`;

    // Replace templates in index.html
    let html = template;
    
    // Inject dynamic head tags
    const pageTitle = formatTitle(route.title);
    const pageDesc = formatMetaDesc(route.description);
    html = html.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${pageDesc}" />`);
    const pageKeywords = route.keywords || 'electropolished pipe, stainless steel 316L, electropolishing, Sakshi Forge';
    const pageRobots = route.robots || 'index, follow';
    html = html.replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${pageKeywords}" />`);
    
    // Inject robots
    if (html.includes('name="robots"')) {
      html = html.replace(/<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="${pageRobots}" />`);
    } else {
      html = html.replace('</head>', `  <meta name="robots" content="${pageRobots}" />\n  </head>`);
    }

    // Inject canonical link
    let canonicalHref = `${BASE_URL}/`;
    if (route.type !== 'home') {
      const cleanSlug = route.slug.replace(/^\/+|\/+$/g, '');
      canonicalHref = `${BASE_URL}/${cleanSlug}/`;
    }
    if (html.includes('rel="canonical"')) {
      html = html.replace(/<link rel="canonical" href=".*?" \/?>/, `<link rel="canonical" href="${canonicalHref}" />`);
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalHref}" />\n  </head>`);
    }

    // Inject Open Graph & Twitter Card tags (resolves M3)
    const escapeAttr = (s) => (s || '').replace(/"/g, '&quot;');
    let ogImageUrl = `${BASE_URL}/sakshi-forge-banner.webp`;
    if (route.type === 'product' && route.data?.Image) {
      const imgPath = route.data.Image.startsWith('/') ? route.data.Image : `/${route.data.Image}`;
      ogImageUrl = `${BASE_URL}${encodeURI(imgPath)}`;
    }
    const ogType = route.type === 'product' ? 'product' : 'website';
    const ogTags = `  <meta property="og:type" content="${ogType}" />
  <meta property="og:site_name" content="Sakshi Forge" />
  <meta property="og:title" content="${escapeAttr(pageTitle)}" />
  <meta property="og:description" content="${escapeAttr(pageDesc)}" />
  <meta property="og:url" content="${canonicalHref}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(pageTitle)}" />
  <meta name="twitter:description" content="${escapeAttr(pageDesc)}" />
  <meta name="twitter:image" content="${ogImageUrl}" />`;

    // Remove existing generic og / twitter tags if any, then insert updated
    html = html.replace(/<meta property="og:.*?" content=".*?" \/>\n?/g, '');
    html = html.replace(/<meta name="twitter:.*?" content=".*?" \/>\n?/g, '');
    html = html.replace('</head>', `${ogTags}\n</head>`);

    // Inject JSON-LD Schema
    html = html.replace('</head>', `${schemaBlockHtml}\n</head>`);

    if (cityDeep) {
      const embedded = JSON.stringify(cityDeep).replace(/</g, '\\u003c');
      html = html.replace('</head>', `<script id="city-deep-data" type="application/json">${embedded}</script>\n</head>`);
    }
    globalThis.__CITY_DEEP__ = null;

    html = html.replace('</head>', `    ${pageAssetTags(rendered.component)}\n  </head>`);
    // Inject rendered body and the route it was rendered from
    html = html.replace('<div id="root"></div>', () => `<div id="root">${bodyHtml}</div>${embedRoute(rendered.route)}`);

    // 5. Write to output folder
    let outputFilePath = '';
    if (route.type === 'home') {
      outputFilePath = path.join(__dirname, 'dist/index.html');
    } else {
      const outputDir = path.join(__dirname, 'dist', route.slug);
      fs.mkdirSync(outputDir, { recursive: true });
      outputFilePath = path.join(outputDir, 'index.html');
    }

    fs.writeFileSync(outputFilePath, html, 'utf-8');
    console.log(`Saved pre-rendered output: ${outputFilePath}`);
    contentHashes[`${BASE_URL}${routePath.replace(/\/?$/, '/')}`] = crypto
      .createHash('sha1').update(`${pageTitle}\n${pageDesc}\n${bodyHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ')}`).digest('hex').slice(0, 16);
  }

  writeSitemapLastmods(contentHashes);


  // Create genuine 404.html pre-rendered page
  let rendered404 = null;
  try {
    rendered404 = await render('/404');
  } catch (err) {
    console.error('Failed to render SSR 404 page:', err);
    process.exit(1);
  }
  const body404Html = rendered404.html;
  let html404 = template;
  html404 = html404.replace(/<title>.*?<\/title>/, '<title>404 - Page Not Found | Sakshi Forge</title>');
  html404 = html404.replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="The page you requested could not be found. Explore Sakshi Forge electropolished pipes, flanges, and forged steel products." />');
  if (html404.includes('name="robots"')) {
    html404 = html404.replace(/<meta name="robots" content=".*?" \/>/, '<meta name="robots" content="noindex, follow" />');
  } else {
    html404 = html404.replace('</head>', '  <meta name="robots" content="noindex, follow" />\n  </head>');
  }
  html404 = html404.replace(/<link rel="canonical" href=".*?" \/?>/, `<link rel="canonical" href="${BASE_URL}/404.html" />`);
  html404 = html404.replace('</head>', `    ${pageAssetTags(rendered404.component)}\n  </head>`);
  html404 = html404.replace('<div id="root"></div>', () => `<div id="root">${body404Html}</div>${embedRoute(rendered404.route)}`);
  fs.writeFileSync(path.join(__dirname, 'dist/404.html'), html404, 'utf-8');
  console.log('Created dist/404.html pre-rendered error page with noindex.');

  // Delete temp SSR folder (after the last render: pages load their chunks from it)
  try {
    fs.rmSync(path.join(__dirname, 'dist/server'), { recursive: true, force: true });
    fs.rmSync(path.join(__dirname, 'dist/.vite'), { recursive: true, force: true });
  } catch (err) {
    // ignore
  }

  console.log('Static pre-rendering complete successfully!');
}

// Sitemap <lastmod> is the date a page's rendered content (title, description, body text) last
// changed, not the build date. src/data/lastmod.json stores { url: [contentHash, date] };
// commit it with the content change so later builds keep the same date.
function writeSitemapLastmods(contentHashes) {
  const manifestPath = path.join(__dirname, 'src/data/lastmod.json');
  const today = new Date().toISOString().split('T')[0];
  const previous = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) : {};
  const manifest = {};
  for (const url of Object.keys(contentHashes).sort()) {
    const prev = previous[url];
    manifest[url] = prev && prev[0] === contentHashes[url] ? prev : [contentHashes[url], today];
  }
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 0).replace(/\],"/g, '],\n"') + '\n');

  const sitemapLatest = {};
  for (const file of ['sitemap.xml', 'sitemap-cities.xml', 'image-sitemap.xml']) {
    for (const dir of ['dist', 'public']) {
      const filePath = path.join(__dirname, dir, file);
      if (!fs.existsSync(filePath)) continue;
      let latest = '';
      const xml = fs.readFileSync(filePath, 'utf-8').replace(
        /<loc>([^<]+)<\/loc>(\s*<lastmod>)[^<]*(<\/lastmod>)?/g,
        (match, loc, lastmodOpen, lastmodClose) => {
          const date = manifest[loc] && manifest[loc][1];
          if (date && date > latest) latest = date;
          return date && lastmodClose ? `<loc>${loc}</loc>${lastmodOpen}${date}${lastmodClose}` : match;
        }
      );
      fs.writeFileSync(filePath, xml);
      sitemapLatest[file] = latest || today;
    }
  }
  for (const dir of ['dist', 'public']) {
    const indexPath = path.join(__dirname, dir, 'sitemap_index.xml');
    if (!fs.existsSync(indexPath)) continue;
    const xml = fs.readFileSync(indexPath, 'utf-8').replace(
      /<loc>[^<]+\/([^/<]+\.xml)<\/loc>\s*<lastmod>[^<]*<\/lastmod>/g,
      (match, file) => (sitemapLatest[file] ? match.replace(/<lastmod>[^<]*</, `<lastmod>${sitemapLatest[file]}<`) : match)
    );
    fs.writeFileSync(indexPath, xml);
  }
  const changed = Object.keys(manifest).filter((u) => manifest[u][1] === today).length;
  console.log(`Sitemap lastmod: ${changed} of ${Object.keys(manifest).length} pages dated ${today}, the rest keep their stored date.`);
}

runPrerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
