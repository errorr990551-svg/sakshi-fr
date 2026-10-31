import productsData from '../data/products.json';
import { getParentCategoryName } from './categories';

// The fields the category page's product cards render
const card = (p) => ({
  'Product Name': p['Product Name'],
  'URL Slug': p['URL Slug'],
  'Category': p['Category'],
  'Image': p['Image'],
  'Meta Description (<=160 chars)': p['Meta Description (<=160 chars)']
});

// Products that belong to a category
export function categoryProducts(category) {
  return productsData
    .filter((p) => getParentCategoryName(p).toLowerCase() === category['Parent Category']?.toLowerCase())
    .map(card);
}

// Cross-link tag -> slug of the product it names (by product name or slug), for tags that match one
export function crossLinkSlugs(category) {
  const raw = category['Key Sub-Products to Cross-Link'];
  const slugs = {};
  if (!raw) return slugs;
  raw.split('|').map((item) => item.trim()).filter(Boolean).forEach((tag) => {
    const match = productsData.find(
      (p) => p['Product Name']?.toLowerCase() === tag.toLowerCase() || p['URL Slug']?.replace(/-/g, ' ').toLowerCase() === tag.toLowerCase()
    );
    if (match) slugs[tag] = match['URL Slug'];
  });
  return slugs;
}
