import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://steelmanufacturer.in';

async function runPrerender() {
  console.log('Starting static pre-rendering...');

  // 1. Import render function from compiled server bundle
  const serverBundlePath = path.join(__dirname, 'dist/server/main-ssr.js');
  if (!fs.existsSync(serverBundlePath)) {
    console.error(`Error: Server bundle not found at ${serverBundlePath}. Run vite build --ssr first.`);
    process.exit(1);
  }
  
  const { render } = await import('./dist/server/main-ssr.js');

  // 2. Load template and data models
  const templatePath = path.join(__dirname, 'dist/index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const corePages = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/core_pages.json'), 'utf-8'));
  const categories = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/categories.json'), 'utf-8'));
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/products.json'), 'utf-8'));
  const marketCities = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/market_cities.json'), 'utf-8'));


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
    url: `${BASE_URL}/market-area`,
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
    const cleanPath = c.path.endsWith('/') ? c.path : `${c.path}/`;
    routes.push({
      url: `${BASE_URL}${cleanPath}`,
      type: 'market-city',
      slug: c.path.substring(1), // remove starting slash
      title: c.pageTitle,
      description: c.metaDescription,
      robots: 'index, follow',
      keywords: c.primaryKeyword ? (c.topSecondaryKeywords ? `${c.primaryKeyword}, ${c.topSecondaryKeywords}` : c.primaryKeyword) : '',
      data: c
    });
  });

  // Workbook New Pages & Tools
  const extraPages = [
    { url: `${BASE_URL}/clients/`, type: 'clients', slug: 'clients', title: 'Our Clients & Industries | Sakshi Forge', description: 'Sakshi Forge supplies ISO 9001:2015 certified flanges and fittings globally.', data: null },
    { url: `${BASE_URL}/catalogue/`, type: 'catalogue', slug: 'catalogue', title: 'Download Product Catalogue (PDF) | Sakshi Forge', description: 'Download official Sakshi Forge catalogue with ASME B16.5 flange dimension tables.', data: null },
    { url: `${BASE_URL}/team/`, type: 'team', slug: 'team', title: 'Leadership & Engineering Team | Sakshi Forge', description: 'Meet Sakshi Forge metallurgists and QA team.', data: null },
    { url: `${BASE_URL}/stainless-steel-elbow/`, type: 'stainless-steel-elbow', slug: 'stainless-steel-elbow', title: 'SS Elbow Manufacturer: 45°, 90°, 180° | Sakshi Forge', description: 'ASME B16.9 buttweld and B16.11 forged elbows.', data: null },
    { url: `${BASE_URL}/ss-304-pipe-fittings-flanges/`, type: 'grade', slug: 'ss-304-pipe-fittings-flanges', title: 'SS 304/304L Pipes, Fittings & Flanges | Sakshi Forge', description: 'Stainless Steel 304 / 304L Products.', data: null },
    { url: `${BASE_URL}/ss-316-316l-pipe-fittings-flanges/`, type: 'grade', slug: 'ss-316-316l-pipe-fittings-flanges', title: 'SS 316/316L Pipes, Fittings & Flanges | Sakshi Forge', description: 'Stainless Steel 316 / 316L Products.', data: null },
    { url: `${BASE_URL}/duplex-2205-products/`, type: 'grade', slug: 'duplex-2205-products', title: 'Duplex 2205 Flanges & Fittings | Sakshi Forge', description: 'Duplex 2205 Products.', data: null },
    { url: `${BASE_URL}/super-duplex-2507-products/`, type: 'grade', slug: 'super-duplex-2507-products', title: 'Super Duplex 2507 Products | Sakshi Forge', description: 'Super Duplex 2507 Products.', data: null },
    { url: `${BASE_URL}/inconel-625-flanges/`, type: 'grade', slug: 'inconel-625-flanges', title: 'Inconel 625 Flanges Supplier | Sakshi Forge', description: 'Inconel 625 Forged Flanges.', data: null },
    { url: `${BASE_URL}/asme-b16-11-forged-fittings/`, type: 'standard', slug: 'asme-b16-11-forged-fittings', title: 'ASME B16.11 Forged Fittings: Classes & Dimensions', description: 'ASME B16.11 Forged Fittings.', data: null },
    { url: `${BASE_URL}/asme-b16-5-flanges/`, type: 'standard', slug: 'asme-b16-5-flanges', title: 'ASME B16.5 Flanges: Classes 150-2500 & Dimensions', description: 'ASME B16.5 Flanges.', data: null },
    { url: `${BASE_URL}/astm-a105-flanges/`, type: 'standard', slug: 'astm-a105-flanges', title: 'ASTM A105 Carbon Steel Flanges Manufacturer', description: 'ASTM A105 Carbon Steel Flanges.', data: null },
    { url: `${BASE_URL}/astm-a270-sanitary-tube/`, type: 'standard', slug: 'astm-a270-sanitary-tube', title: 'ASTM A270 Sanitary Tubes | EP & BA Finish', description: 'ASTM A270 Sanitary Tubing.', data: null },
    { url: `${BASE_URL}/flange-dimension-chart/`, type: 'chart-tool', slug: 'flange-dimension-chart', title: 'ASME B16.5 Flange Dimension Chart', description: 'Flange dimension chart.', data: { toolType: 'flange-dimension-chart' } },
    { url: `${BASE_URL}/flange-weight-chart/`, type: 'chart-tool', slug: 'flange-weight-chart', title: 'Flange Weight Chart & Calculator', description: 'Flange weight chart.', data: { toolType: 'flange-weight-chart' } },
    { url: `${BASE_URL}/flange-bolt-chart/`, type: 'chart-tool', slug: 'flange-bolt-chart', title: 'Flange Bolt Chart: Size, Qty & Torque', description: 'Flange bolt chart.', data: { toolType: 'flange-bolt-chart' } },
    { url: `${BASE_URL}/pipe-schedule-chart/`, type: 'chart-tool', slug: 'pipe-schedule-chart', title: 'Pipe Schedule Chart: Sch 5S-XXS', description: 'Pipe schedule chart.', data: { toolType: 'pipe-schedule-chart' } },
    { url: `${BASE_URL}/flange-exporter-usa/`, type: 'export', slug: 'flange-exporter-usa', title: 'Indian Flange & Fittings Exporter to USA', description: 'Flange exporter to USA.', data: { countryType: 'usa' } },
    { url: `${BASE_URL}/flange-supplier-uae/`, type: 'export', slug: 'flange-supplier-uae', title: 'Flange & Pipe Fittings Supplier to UAE', description: 'Flange supplier to UAE.', data: { countryType: 'uae' } },
    { url: `${BASE_URL}/flange-supplier-saudi-arabia/`, type: 'export', slug: 'flange-supplier-saudi-arabia', title: 'Flange Supplier to Saudi Arabia', description: 'Flange supplier to KSA.', data: { countryType: 'saudi-arabia' } }
  ];

  extraPages.forEach(p => routes.push(p));


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

  // 4. Render each route
  for (const route of routes) {
    // Determine path relative to domain
    let routePath = '/' + route.slug;
    if (route.type === 'home') {
      routePath = '/';
    }

    console.log(`Pre-rendering URL: ${routePath}`);

    // Render body using server bundle
    let bodyHtml = '';
    try {
      bodyHtml = render(routePath);
    } catch (err) {
      console.error(`Failed rendering path ${routePath}:`, err);
      bodyHtml = '';
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
    }

    if (route.type === 'product') {
      const catSlug = route.slug.split('/')[0] || 'products';
      const breadcrumbs = {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": route.data['Category'], "item": `${BASE_URL}/${catSlug}/` },
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

      const productSchema = {
        "@type": "Product",
        "name": route.data['Product Name'],
        "url": route.url,
        "image": [ `${BASE_URL}${route.data['Image'] || '/flanges_pipes.webp'}` ],
        "description": route.description,
        "brand": { "@type": "Brand", "name": "Sakshi Forge" },
        "manufacturer": { "@id": `${BASE_URL}/#org` },
        "material": materialGrade,
        "additionalProperty": addProps
      };

      schemasGraph.push(breadcrumbs);
      schemasGraph.push(productSchema);

      if (route.data['FAQs'] && route.data['FAQs'].length > 0) {
        const faqEntities = route.data['FAQs'].map(f => ({
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

    let schemaBlockHtml = '';
    if (route.type === 'market-city' && route.data.schema) {
      schemaBlockHtml = `<script type="application/ld+json" class="sakshi-seo-schema">\n${route.data.schema}\n</script>`;
    } else {
      schemaBlockHtml = `<script type="application/ld+json" class="sakshi-seo-schema">\n${JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schemasGraph
      }, null, 2)}\n</script>`;
    }

    // Replace templates in index.html
    let html = template;
    
    // Inject dynamic head tags
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);
    html = html.replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${route.keywords}" />`);
    
    // Inject robots
    if (html.includes('name="robots"')) {
      html = html.replace(/<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="${route.robots}" />`);
    } else {
      html = html.replace('</head>', `  <meta name="robots" content="${route.robots}" />\n  </head>`);
    }

    // Inject canonical link
    const canonicalHref = route.url.endsWith('/') ? route.url : `${route.url}/`;
    if (html.includes('rel="canonical"')) {
      html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalHref}" />`);
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalHref}" />\n  </head>`);
    }

    // Inject JSON-LD Schema
    html = html.replace('</head>', `${schemaBlockHtml}\n</head>`);

    // Inject rendered body
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

    // Sanitize any non-ASCII dashes or Mojibake before saving
    html = html
      .replace(/(?:Γ|Г)Ç[ôóö]/g, '-')
      .replace(/(?:Γ|Г)Ç—/g, '-')
      .replace(/â€“/g, '-')
      .replace(/â€”/g, '-')
      .replace(/[\u2013\u2014]/g, '-');

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
  }

  // Delete temp SSR folder to keep build clean
  try {
    fs.rmSync(path.join(__dirname, 'dist/server'), { recursive: true, force: true });
  } catch (err) {
    // ignore
  }

  // Create 404.html fallback file in dist for web hosts expecting 404.html
  const mainIndexHtml = path.join(__dirname, 'dist/index.html');
  const dist404Html = path.join(__dirname, 'dist/404.html');
  if (fs.existsSync(mainIndexHtml)) {
    fs.copyFileSync(mainIndexHtml, dist404Html);
    console.log('Created dist/404.html fallback file.');
  }

  console.log('Static pre-rendering complete successfully!');
}

runPrerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
