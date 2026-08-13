import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://steelmanufacturer.in';

const corePath = path.join(__dirname, 'src/data/core_pages.json');
const categoriesPath = path.join(__dirname, 'src/data/categories.json');
const productsPath = path.join(__dirname, 'src/data/products.json');

const corePages = JSON.parse(fs.readFileSync(corePath, 'utf-8'));
const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf-8'));
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const marketCities = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/market_cities.json'), 'utf-8'));

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
const formatPriority = (p) => {
  const num = parseFloat(p);
  return isNaN(num) ? '0.7' : num.toFixed(1);
};

// Helper to ensure trailing slash
const formatUrl = (url) => {
  if (url === BASE_URL || url === `${BASE_URL}/`) return `${BASE_URL}/`;
  return url.endsWith('/') ? url : `${url}/`;
};

// 1. Main Sitemap (sitemap.xml)
let mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Core Pages
mainSitemap += `  <!-- Core Pages -->\n`;
corePages.forEach(page => {
  const priorityVal = formatPriority(page['Priority'] || page['Sitemap priority']);
  mainSitemap += `  <url>
    <loc>${formatUrl(page['URL'])}</loc>
    <changefreq>${page['Changefreq'] || 'monthly'}</changefreq>
    <priority>${priorityVal}</priority>
  </url>\n`;
});

// Categories
mainSitemap += `  <!-- Category Pages -->\n`;
categories.forEach(cat => {
  const priorityVal = formatPriority(cat['Sitemap priority']);
  mainSitemap += `  <url>
    <loc>${BASE_URL}/${cat['Category Slug']}/</loc>
    <changefreq>${cat['Changefreq'] || 'weekly'}</changefreq>
    <priority>${priorityVal}</priority>
  </url>\n`;
});

// Products
mainSitemap += `  <!-- Product Pages -->\n`;
products.forEach(prod => {
  const priorityVal = formatPriority(prod['Sitemap priority']);
  mainSitemap += `  <url>
    <loc>${BASE_URL}/${prod['URL Slug']}/</loc>
    <changefreq>${prod['Changefreq'] || 'monthly'}</changefreq>
    <priority>${priorityVal}</priority>
  </url>\n`;
});

// New Pages & Tools
mainSitemap += `  <!-- Tools, Standards & Gallery -->\n`;
newPages.forEach(slug => {
  mainSitemap += `  <url>
    <loc>${BASE_URL}/${slug}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

// Market Area Hub
mainSitemap += `  <!-- Market Area Hub -->\n`;
mainSitemap += `  <url>
    <loc>${BASE_URL}/market-area/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

mainSitemap += `</urlset>\n`;

const mainSitemapPath = path.join(__dirname, 'public/sitemap.xml');
fs.writeFileSync(mainSitemapPath, mainSitemap);
console.log(`Main sitemap generated successfully at ${mainSitemapPath}`);

// 2. Dedicated City Sitemap (sitemap-cities.xml) for GSC tracking
let citySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 102+ Programmatic City Supply Location Pages -->
`;

marketCities.forEach(city => {
  const cityPath = city.path.endsWith('/') ? city.path : `${city.path}/`;
  citySitemap += `  <url>
    <loc>${BASE_URL}${cityPath}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

citySitemap += `</urlset>\n`;

const citySitemapPath = path.join(__dirname, 'public/sitemap-cities.xml');
fs.writeFileSync(citySitemapPath, citySitemap);
console.log(`City sitemap generated successfully at ${citySitemapPath} with ${marketCities.length} city URLs.`);
