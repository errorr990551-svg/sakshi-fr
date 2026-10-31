import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

// The fields the related-products cards render
const card = (p) => ({
  isCategory: p.isCategory,
  'Product Name': p['Product Name'],
  'URL Slug': p['URL Slug'],
  'Category': p['Category'],
  'Meta Description (<=160 chars)': p['Meta Description (<=160 chars)']
});

// Products/categories a (non-detailed) product page links to, parsed from its Internal Links field
export function relatedProductsFor(product) {
  return findRelated(product).map(card);
}

function findRelated(product) {
  const raw = product['Internal Links Raw'] || product['Internal Links'];
  if (!raw) return [];

  // Check if it has the new formatting: 'Anchor' -> URL
  if (raw.includes("->")) {
    const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
    const links = [];
    lines.forEach(line => {
      const parts = line.split("->").map(p => p.trim());
      if (parts.length === 2) {
        const anchor = parts[0].replace(/'/g, "").trim();
        const targetUrl = parts[1].trim();
        const slug = targetUrl.replace("https://steelmanufacturer.in/", "").replace(/\/$/, "");
        const matchedProd = productsData.find(p => p['URL Slug'] === slug);
        if (matchedProd) {
          links.push(matchedProd);
        } else {
          const matchedCat = categoriesData.find(c => c['Category Slug'] === slug);
          if (matchedCat) {
            links.push({
              isCategory: true,
              'Product Name': matchedCat['Parent Category'],
              'URL Slug': matchedCat['Category Slug'],
              'Category': 'Category',
              'Meta Description (<=160 chars)': matchedCat['Category Meta Description']
            });
          }
        }
      }
    });
    return links.slice(0, 4);
  }

  // Fallback legacy pipe format
  const linkNames = raw.split('|').map((item) => item.trim().toLowerCase());
  return productsData.filter((p) => {
    const name = p['Product Name']?.toLowerCase();
    const cat = p['Category']?.toLowerCase();
    return linkNames.some(link => name.includes(link) || link.includes(name) || cat === link);
  }).slice(0, 3);
}
