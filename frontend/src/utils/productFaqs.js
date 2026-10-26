// The FAQs a product page actually displays, so FAQPage schema always matches the page:
// detailed product pages (DetailedProductPage) show "FAQ n Q/A"; the rest show "FAQs".
export function visibleProductFaqs(product) {
  if (!product) return [];
  if (product['What Is This Product? (150-200 words)']) {
    const list = [];
    for (let i = 1; i <= 4; i++) {
      const q = product[`FAQ ${i} Q`];
      const a = product[`FAQ ${i} A`];
      if (q && a) list.push({ q, a });
    }
    return list;
  }
  return Array.isArray(product.FAQs) ? product.FAQs : [];
}
