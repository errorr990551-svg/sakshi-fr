// Schema/spec helpers used by page components. Kept apart from seo.js so a page does not
// pull in the data files seo.js needs for client-side head updates.

const graphOf = (schema) => (Array.isArray(schema["@graph"]) ? schema["@graph"] : [schema]);

// Schema types already declared by JSON-LD blocks on the page (optionally ignoring one block).
function schemaTypesOnPage(exceptId) {
  const types = new Set();
  document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
    if (exceptId && el.id === exceptId) return;
    try {
      graphOf(JSON.parse(el.textContent)).forEach((n) => [].concat(n["@type"] || []).forEach((t) => types.add(t)));
    } catch {
      // ignore unparsable blocks
    }
  });
  return types;
}

// Drops nodes whose @type another JSON-LD block on the page already declares, so a
// component's schema never duplicates FAQPage/BreadcrumbList/Organization nodes.
export function withoutDuplicateSchemaTypes(schema, ownId) {
  if (typeof document === 'undefined') return schema;
  const present = schemaTypesOnPage(ownId);
  const graph = graphOf(schema).filter((n) => ![].concat(n["@type"] || []).some((t) => present.has(t)));
  return { "@context": "https://schema.org", "@graph": graph };
}

// Removes the given @types from the server-rendered JSON-LD, for pages whose component
// emits the version of those nodes that matches the visible content (e.g. city FAQs).
export function stripPrerenderedSchemaTypes(types) {
  if (typeof document === 'undefined') return;
  document.querySelectorAll("script.sakshi-seo-schema").forEach((el) => {
    try {
      const schema = JSON.parse(el.textContent);
      const graph = graphOf(schema).filter((n) => ![].concat(n["@type"] || []).some((t) => types.includes(t)));
      el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    } catch {
      // leave unparsable blocks untouched
    }
  });
}

// Helper to parse key specs from either the old line or the new multi-line pipe format
export function parseKeySpecs(specsString) {
  if (!specsString) return [];
  
  // If it's the new multi-line pipe format: "Property | Value\n..."
  if (specsString.includes("\n")) {
    const lines = specsString.split("\n").map(l => l.trim()).filter(Boolean);
    const parsed = [];
    lines.forEach(line => {
      if (line.includes("|")) {
        const parts = line.split("|").map(p => p.trim());
        const header = parts[0].toLowerCase();
        if (header === "specification" || header === "property" || header === "feature") {
          return; // skip headers
        }
        parsed.push({
          key: parts[0],
          value: parts[1] || ""
        });
      }
    });
    return parsed;
  }
  
  // Fallback to legacy inline colon-pipe format: "Key: Value | Key2: Value2"
  return specsString.split("|").map((item) => {
    const parts = item.split(":");
    return {
      key: parts[0]?.trim() || "",
      value: parts[1]?.trim() || "",
    };
  }).filter(item => item.key);
}

// Product identifier only. The site publishes no prices, stock levels, return or shipping
// terms, so Product markup carries no `offers` (an invented AggregateOffer was removed:
// structured data must match what the page shows).
export function getProductOfferDetails(slug) {
  return { sku: `SF-${(slug || 'ITEM').replace(/[^a-zA-Z0-9]/g, '-').toUpperCase()}` };
}
