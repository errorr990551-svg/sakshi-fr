import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://steelmanufacturer.in';

const corePath = path.join(__dirname, 'src/data/core_pages.json');
const categoriesPath = path.join(__dirname, 'src/data/categories.json');
const productsPath = path.join(__dirname, 'src/data/products.json');
const marketCitiesPath = path.join(__dirname, 'src/data/market_cities.json');
const epBuildSpecPath = path.join(__dirname, 'src/data/ep_build_spec_data.json');

const corePages = JSON.parse(fs.readFileSync(corePath, 'utf-8'));
const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf-8'));
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const marketCities = JSON.parse(fs.readFileSync(marketCitiesPath, 'utf-8')).filter(c => c.path && c.city && c.path !== '/');
const epBuildSpecData = fs.existsSync(epBuildSpecPath)
  ? JSON.parse(fs.readFileSync(epBuildSpecPath, 'utf-8'))
  : [];

const newPages = [
  'gallery',
  'clients',
  'catalogue',
  'team',
  'ss-304-pipe-fittings-flanges',
  'ss-316-316l-pipe-fittings-flanges',
  'duplex-2205-products',
  'super-duplex-2507-products',
  'inconel-625-flanges',
  'asme-b16-11-forged-fittings',
  'asme-b16-5-flanges',
  'astm-a105-flanges',
  'astm-a270-sanitary-tube',
  'stainless-steel-elbow',
  'flange-dimension-chart',
  'flange-weight-chart',
  'flange-bolt-chart',
  'pipe-schedule-chart',
  'flange-exporter-usa',
  'flange-supplier-uae',
  'flange-supplier-saudi-arabia'
];

// Helper to format priority
const formatPriority = (p, defaultVal = '0.7') => {
  const num = parseFloat(p);
  return isNaN(num) ? defaultVal : num.toFixed(1);
};

// Helper to ensure trailing slash and clean domain
const formatUrl = (url) => {
  let clean = (url || '').trim();
  if (!clean.startsWith('http')) {
    clean = `${BASE_URL}${clean.startsWith('/') ? '' : '/'}${clean}`;
  }
  if (clean === BASE_URL || clean === `${BASE_URL}/`) return `${BASE_URL}/`;
  return clean.endsWith('/') ? clean : `${clean}/`;
};

// Helper to escape XML special characters
const xmlEscape = (str) => {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
};

// 1. Main Sitemap (sitemap.xml)
const mainUrlsSet = new Set();
let mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Helper to append unique URL to main sitemap
const addMainUrl = (url, changefreq, priority, comment = '') => {
  const formatted = formatUrl(url);
  if (mainUrlsSet.has(formatted)) return;
  mainUrlsSet.add(formatted);
  if (comment) mainSitemap += `  <!-- ${comment} -->\n`;
  mainSitemap += `  <url>
    <loc>${formatted}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
};

// Core Pages
corePages.forEach(page => {
  const priorityVal = formatPriority(page['Priority'] || page['Sitemap priority'], '0.8');
  addMainUrl(page['URL'], page['Changefreq'] || 'monthly', priorityVal, `Core: ${page['Page Name'] || page['Slug']}`);
});

// Categories
categories.forEach(cat => {
  const priorityVal = formatPriority(cat['Sitemap priority'], '0.9');
  addMainUrl(`${BASE_URL}/${cat['Category Slug']}/`, cat['Changefreq'] || 'weekly', priorityVal, `Category: ${cat['Category Slug']}`);
});

// Products
products.forEach(prod => {
  const priorityVal = formatPriority(prod['Sitemap priority'], '0.8');
  addMainUrl(`${BASE_URL}/${prod['URL Slug']}/`, prod['Changefreq'] || 'monthly', priorityVal);
});

// New Pages & Tools
newPages.forEach(slug => {
  addMainUrl(`${BASE_URL}/${slug}/`, 'weekly', '0.8');
});

// Market Area Hub
addMainUrl(`${BASE_URL}/market-area/`, 'weekly', '0.8', 'Market Area Hub');

// EP Build Spec Pages
epBuildSpecData.forEach(item => {
  if (item.url) {
    const priorityVal = item.priority === 'P1' ? '1.0' : item.priority === 'P2' ? '0.8' : '0.7';
    addMainUrl(item.url, 'weekly', priorityVal);
  }
});

mainSitemap += `</urlset>\n`;

const mainSitemapPath = path.join(__dirname, 'public/sitemap.xml');
fs.writeFileSync(mainSitemapPath, mainSitemap);
console.log(`Main sitemap generated successfully at ${mainSitemapPath} with ${mainUrlsSet.size} unique URLs.`);

// 2. Dedicated City Sitemap (sitemap-cities.xml)
const cityUrlsSet = new Set();
let citySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

marketCities.forEach(city => {
  if (!city.path || city.path === '/') return;
  const formatted = formatUrl(`${BASE_URL}${city.path}`);
  if (cityUrlsSet.has(formatted)) return;
  cityUrlsSet.add(formatted);
  citySitemap += `  <url>
    <loc>${formatted}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

citySitemap += `</urlset>\n`;

const citySitemapPath = path.join(__dirname, 'public/sitemap-cities.xml');
fs.writeFileSync(citySitemapPath, citySitemap);
console.log(`City sitemap generated successfully at ${citySitemapPath} with ${cityUrlsSet.size} city URLs.`);

// 3. Image Sitemap (image-sitemap.xml)
let imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

let imageCount = 0;
products.forEach(prod => {
  if (prod.Image && prod['URL Slug']) {
    const pageLoc = formatUrl(`${BASE_URL}/${prod['URL Slug']}/`);
    let imgPath = prod.Image.trim();
    if (!imgPath.startsWith('/')) imgPath = '/' + imgPath;
    const imgUrl = `${BASE_URL}${encodeURI(imgPath)}`;
    const imgTitle = xmlEscape(prod['H1 Tag'] || prod['Product Name'] || '');

    imageSitemap += `  <url>
    <loc>${pageLoc}</loc>
    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>${imgTitle}</image:title>
    </image:image>
  </url>\n`;
    imageCount++;
  }
});

imageSitemap += `</urlset>\n`;

const imageSitemapPath = path.join(__dirname, 'public/image-sitemap.xml');
fs.writeFileSync(imageSitemapPath, imageSitemap);
console.log(`Image sitemap generated successfully at ${imageSitemapPath} with ${imageCount} product images.`);

