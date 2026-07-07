import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://steelmanufacturer.in';

const productsPath = path.join(__dirname, 'src/data/products.json');
const categoriesPath = path.join(__dirname, 'src/data/categories.json');

const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf-8'));

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/products</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;

// Categories URLs
sitemap += `  <!-- Categories -->\n`;
categories.forEach(cat => {
  if (cat['Category Slug']) {
    sitemap += `  <url>\n    <loc>${BASE_URL}/${cat['Category Slug']}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }
});

// Products URLs
sitemap += `  <!-- Products -->\n`;
products.forEach(prod => {
  if (prod['URL Slug']) {
    sitemap += `  <url>\n    <loc>${BASE_URL}/${prod['URL Slug']}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
  }
});

sitemap += `</urlset>\n`;

const outputPath = path.join(__dirname, 'public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully inside public/sitemap.xml');
