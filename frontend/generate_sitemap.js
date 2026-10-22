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

import { blogPosts } from './src/data/blogData.js';

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
  'flange-supplier-saudi-arabia',
  'tamil-nadu',
  'karnataka',
  'market-area/gujarat',
  'market-area/telangana',
  'market-area/west-bengal',
  'market-area/madhya-pradesh',
  'market-area/andhra-pradesh',
  'market-area/odisha'
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
  // All pages, including /market-area/ and /market-area/<city>/, use trailing slash to avoid 301 redirects
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

// Current modification date for lastmod tags (YYYY-MM-DD)
const TODAY_LASTMOD = new Date().toISOString().split('T')[0];

// 1. Main Sitemap (sitemap.xml)
const mainUrlsSet = new Set();
let mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Helper to append unique URL to main sitemap
const addMainUrl = (url, changefreq, priority, comment = '', lastmod = TODAY_LASTMOD) => {
  const formatted = formatUrl(url);
  if (mainUrlsSet.has(formatted)) return;
  mainUrlsSet.add(formatted);
  if (comment) mainSitemap += `  <!-- ${comment} -->\n`;
  mainSitemap += `  <url>
    <loc>${formatted}</loc>
    <lastmod>${lastmod}</lastmod>
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
  // Exclude odd/redirected slug to avoid sitemap redirect error (306 redirects to 304)
  if (prod['URL Slug'] === '306-stainless-steel-round-bar') return;
  const priorityVal = formatPriority(prod['Sitemap priority'], '0.8');
  addMainUrl(`${BASE_URL}/${prod['URL Slug']}/`, prod['Changefreq'] || 'monthly', priorityVal);
});

// New Pages & Tools
newPages.forEach(slug => {
  addMainUrl(`${BASE_URL}/${slug}/`, 'weekly', '0.8');
});

// Market Area Hub (with trailing slash)
addMainUrl(`${BASE_URL}/market-area/`, 'weekly', '0.8', 'Market Area Hub');

// EP Build Spec Pages (excluding city pages handled exclusively by sitemap-cities.xml)
const stateHubSlugs = ['gujarat', 'telangana', 'west-bengal', 'madhya-pradesh', 'andhra-pradesh', 'odisha'];
epBuildSpecData.forEach(item => {
  if (item.url) {
    if (item.url.includes('/market-area/')) {
      const isStateHub = stateHubSlugs.some(s => item.url.includes(`/market-area/${s}/`) || item.url.endsWith(`/market-area/${s}`));
      if (!isStateHub) {
        // City page is handled exclusively by sitemap-cities.xml to prevent duplicate entries
        return;
      }
    }
    const priorityVal = item.priority === 'P1' ? '1.0' : item.priority === 'P2' ? '0.8' : '0.7';
    addMainUrl(item.url, 'weekly', priorityVal);
  }
});

// Technical Blog Hub and Posts
addMainUrl(`${BASE_URL}/blog/`, 'weekly', '0.8', 'Steel Knowledge Hub');
blogPosts.forEach(post => {
  addMainUrl(`${BASE_URL}/blog/${post.slug}/`, 'monthly', '0.8', `Blog: ${post.title}`);
});

mainSitemap += `</urlset>\n`;

const mainSitemapPath = path.join(__dirname, 'public/sitemap.xml');
fs.writeFileSync(mainSitemapPath, mainSitemap);
console.log(`Main sitemap generated successfully at ${mainSitemapPath} with ${mainUrlsSet.size} unique URLs.`);

// Master Sitemap Index (sitemap_index.xml)
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${TODAY_LASTMOD}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-cities.xml</loc>
    <lastmod>${TODAY_LASTMOD}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/image-sitemap.xml</loc>
    <lastmod>${TODAY_LASTMOD}</lastmod>
  </sitemap>
</sitemapindex>
`;

const sitemapIndexPath = path.join(__dirname, 'public/sitemap_index.xml');
fs.writeFileSync(sitemapIndexPath, sitemapIndex);
console.log(`Master sitemap index generated successfully at ${sitemapIndexPath}.`);

// 2. Dedicated City Sitemap (sitemap-cities.xml) - Reduced to 30 Highest-Priority Industrial Cities
export const PRIORITY_30_CITY_SLUGS = [
  'mumbai',
  'delhi',
  'chennai',
  'pune',
  'ahmedabad',
  'bengaluru',
  'hyderabad',
  'kolkata',
  'surat',
  'vadodara',
  'thane',
  'indore',
  'visakhapatnam',
  'coimbatore',
  'vapi',
  'ankleshwar',
  'hosur',
  'tarapur',
  'nashik',
  'aurangabad',
  'bhopal',
  'lucknow',
  'jaipur',
  'ludhiana',
  'bhubaneswar',
  'cuttack',
  'rajkot',
  'cuddalore',
  'tiruchirappalli',
  'nagpur'
];

const cityUrlsSet = new Set();
let citySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Filter market cities: 30 priority cities first, then all remaining cities so all 516 live pages are indexed
PRIORITY_30_CITY_SLUGS.forEach(slug => {
  const city = marketCities.find(c => c.slug === slug || c.path === `/market-area/${slug}`);
  if (!city) {
    console.warn(`Warning: Priority city ${slug} not found in marketCities!`);
    return;
  }
  const formatted = formatUrl(`${BASE_URL}${city.path}`);
  if (cityUrlsSet.has(formatted)) return;
  cityUrlsSet.add(formatted);
  citySitemap += `  <url>
    <loc>${formatted}</loc>
    <lastmod>${TODAY_LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

// Add all remaining market cities (resolves H3: ~474 pages missing from sitemap)
marketCities.forEach(city => {
  if (!city.path || city.path === '/') return;
  const formatted = formatUrl(`${BASE_URL}${city.path}`);
  if (cityUrlsSet.has(formatted)) return;
  cityUrlsSet.add(formatted);
  citySitemap += `  <url>
    <loc>${formatted}</loc>
    <lastmod>${TODAY_LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
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

