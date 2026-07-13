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


let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Helper to format priority
const formatPriority = (p) => {
  const num = parseFloat(p);
  return isNaN(num) ? '0.7' : num.toFixed(1);
};

// 1. Core Pages
sitemap += `  <!-- Core Pages -->\n`;
corePages.forEach(page => {
  const priorityVal = formatPriority(page['Priority'] || page['Sitemap priority']);
  sitemap += `  <url>
    <loc>${page['URL']}</loc>
    <changefreq>${page['Changefreq'] || 'monthly'}</changefreq>
    <priority>${priorityVal}</priority>
  </url>\n`;
});

// 2. Categories
sitemap += `  <!-- Category Pages -->\n`;
categories.forEach(cat => {
  const priorityVal = formatPriority(cat['Sitemap priority']);
  sitemap += `  <url>
    <loc>${BASE_URL}/${cat['Category Slug']}/</loc>
    <changefreq>${cat['Changefreq'] || 'weekly'}</changefreq>
    <priority>${priorityVal}</priority>
  </url>\n`;
});

// 3. Products
sitemap += `  <!-- Product Pages -->\n`;
products.forEach(prod => {
  const priorityVal = formatPriority(prod['Sitemap priority']);
  sitemap += `  <url>
    <loc>${BASE_URL}/${prod['URL Slug']}/</loc>
    <changefreq>${prod['Changefreq'] || 'monthly'}</changefreq>
    <priority>${priorityVal}</priority>
  </url>\n`;
});

// 4. Market Area & Cities
sitemap += `  <!-- Market Area Pages -->\n`;
sitemap += `  <url>
    <loc>${BASE_URL}/market-area</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

marketCities.forEach(city => {
  sitemap += `  <url>
    <loc>${BASE_URL}${city.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

sitemap += `</urlset>\n`;

const outputPath = path.join(__dirname, 'public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
const totalCount = corePages.length + categories.length + products.length + 1 + marketCities.length;
console.log(`Dynamic sitemap generated successfully at ${outputPath} with ${totalCount} URLs.`);
