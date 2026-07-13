/**
 * SEO utility to dynamically inject Meta Tags and JSON-LD Schema markup in the document head.
 */
import corePagesData from '../data/core_pages.json';

const BASE_URL = "https://steelmanufacturer.in";

// Helper to remove any previously injected custom script tags
function clearExistingSchemas() {
  if (typeof document === 'undefined') return;
  const existing = document.querySelectorAll("script.sakshi-seo-schema");
  existing.forEach((el) => el.remove());
}

// Helper to inject a JSON-LD schema
function injectSchema(schemaId, schemaObj) {
  if (typeof document === 'undefined') return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.className = "sakshi-seo-schema";
  script.id = `seo-schema-${schemaId}`;
  script.text = JSON.stringify(schemaObj);
  document.head.appendChild(script);
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

// Main function to update head elements dynamically
export function updateSEO({ type, data }) {
  if (typeof document === 'undefined') return;
  
  clearExistingSchemas();

  let title = "Sakshi Forge | Industrial Flanges, Pipes & Forged Steel Manufacturer";
  let metaDesc = "Sakshi Forge is a leading manufacturer of high-quality forged flanges, industrial steel pipes, tubes, round bars, and steel plates. Serving oil & gas, petrochemical, and heavy industries globally.";
  let keywords = "Sakshi Forge, industrial flanges, forged steel, steel pipes, butt weld fittings, forged fittings, steel manufacturer India";
  let canonicalUrl = BASE_URL;
  let robots = "index, follow";

  // 1. Resolve metadata depending on page type
  if (type === "home") {
    const page = corePagesData.find(p => p.Slug === "" || p.PageName === "Homepage");
    if (page) {
      title = page["Meta Title"];
      metaDesc = page["Meta Description"];
      keywords = page["Primary Keyword"] ? (page["Secondary Keywords"] ? `${page["Primary Keyword"]}, ${page["Secondary Keywords"]}` : page["Primary Keyword"]) : keywords;
      canonicalUrl = page["URL"];
      robots = page["Robots"];
    }
  } else if (type === "about" || type === "quality-assurance" || type === "industries" || type === "contact-us" || type === "certifications" || type === "blog" || type === "privacy-policy" || type === "terms-and-conditions" || type === "weight-calculator") {
    const typeSlugMap = {
      "about": "about-us",
      "quality-assurance": "quality-assurance",
      "industries": "industries",
      "contact-us": "contact-us",
      "certifications": "certifications",
      "blog": "blog",
      "privacy-policy": "privacy-policy",
      "terms-and-conditions": "terms-and-conditions",
      "weight-calculator": "weight-calculator"
    };
    const targetSlug = typeSlugMap[type] || type;
    const page = corePagesData.find(p => p.Slug === targetSlug);
    if (page) {
      title = page["Meta Title"];
      metaDesc = page["Meta Description"];
      keywords = page["Primary Keyword"] ? (page["Secondary Keywords"] ? `${page["Primary Keyword"]}, ${page["Secondary Keywords"]}` : page["Primary Keyword"]) : keywords;
      canonicalUrl = page["URL"];
      robots = page["Robots"];
    } else {
      canonicalUrl = `${BASE_URL}/${targetSlug}/`;
    }
  } else if (type === "products") {
    const page = corePagesData.find(p => p.Slug === "products" || p.PageName === "Products");
    if (page) {
      title = page["Meta Title"];
      metaDesc = page["Meta Description"];
      keywords = page["Primary Keyword"] ? (page["Secondary Keywords"] ? `${page["Primary Keyword"]}, ${page["Secondary Keywords"]}` : page["Primary Keyword"]) : keywords;
      canonicalUrl = page["URL"];
      robots = page["Robots"];
    } else {
      canonicalUrl = `${BASE_URL}/products/`;
    }
  } else if (type === "category" && data) {
    title = data["Category Meta Title"] || title;
    metaDesc = data["Category Meta Description"] || metaDesc;
    keywords = data["Primary KW"] ? (data["Secondary KWs"] ? `${data["Primary KW"]}, ${data["Secondary KWs"]}` : data["Primary KW"]) : keywords;
    canonicalUrl = `${BASE_URL}/${data["Category Slug"]}/`;
    robots = data["Robots"] || robots;
  } else if (type === "product" && data) {
    title = data["Meta Title"] || data["Meta Title (<=60 chars)"] || data["Product Name"] || title;
    metaDesc = data["Meta Description"] || data["Meta Description (<=160 chars)"] || data["Product Description"] || metaDesc;
    keywords = data["Primary Keyword"] ? (data["Secondary Keywords (3-5)"] ? `${data["Primary Keyword"]}, ${data["Secondary Keywords (3-5)"]}` : data["Primary Keyword"]) : keywords;
    canonicalUrl = `${BASE_URL}/${data["URL Slug"]}/`;
    robots = data["Robots"] || robots;
  } else if (type === "market-area") {
    title = "Sakshi Forge | India Cities We Serve - Electropolished Pipes & Fittings Supply";
    metaDesc = "Explore the commercial and industrial cities served by Sakshi Forge across India. High-quality electropolished pipes and industrial steel supply.";
    keywords = "market area, industrial cities, sakshi forge locations, steel pipes supply India";
    canonicalUrl = `${BASE_URL}/market-area`;
    robots = "index, follow";
  } else if (type === "market-city" && data) {
    title = data.pageTitle || title;
    metaDesc = data.metaDescription || metaDesc;
    keywords = data.primaryKeyword ? (data.topSecondaryKeywords ? `${data.primaryKeyword}, ${data.topSecondaryKeywords}` : data.primaryKeyword) : keywords;
    canonicalUrl = `${BASE_URL}${data.path}`;
    robots = "index, follow";
  }


  // 2. Inject meta headers in document head
  document.title = title;

  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement("meta");
    descTag.name = "description";
    document.head.appendChild(descTag);
  }
  descTag.setAttribute("content", metaDesc);

  let keywordsTag = document.querySelector('meta[name="keywords"]');
  if (!keywordsTag) {
    keywordsTag = document.createElement("meta");
    keywordsTag.name = "keywords";
    document.head.appendChild(keywordsTag);
  }
  keywordsTag.setAttribute("content", keywords);

  let robotsTag = document.querySelector('meta[name="robots"]');
  if (!robotsTag) {
    robotsTag = document.createElement("meta");
    robotsTag.name = "robots";
    document.head.appendChild(robotsTag);
  }
  robotsTag.setAttribute("content", robots);

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.rel = "canonical";
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute("href", canonicalUrl);

  // 3. Inject Structured Data Graph Schema
  const graph = [];

  // A. Sitewide components (Organization + WebSite + LocalBusiness)
  // local business goes on homepage and contact page
  const isHomeOrContact = type === "home" || type === "contact-us";
  
  const orgSchema = {
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

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": `${BASE_URL}/`,
    "name": "Sakshi Forge",
    "publisher": {
      "@id": `${BASE_URL}/#org`
    }
  };

  graph.push(orgSchema);
  graph.push(websiteSchema);

  if (isHomeOrContact) {
    const localSchema = {
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
    graph.push(localSchema);
  }

  // B. Category specific schemas (Breadcrumbs + CollectionPage)
  if (type === "category" && data) {
    const breadcrumbs = {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": data["Parent Category"],
          "item": `${BASE_URL}/${data["Category Slug"]}/`
        }
      ]
    };

    const collectionPage = {
      "@type": "CollectionPage",
      "name": data["Category Meta Title"] || title,
      "url": `${BASE_URL}/${data["Category Slug"]}/`,
      "description": data["Category Meta Description"] || metaDesc,
      "isPartOf": {
        "@id": `${BASE_URL}/#website`
      },
      "about": {
        "@type": "Thing",
        "name": data["Parent Category"]
      }
    };

    graph.push(breadcrumbs);
    graph.push(collectionPage);
  }

  // C. Product specific schemas (Breadcrumbs + Product + FAQPage)
  if (type === "product" && data) {
    // Find category slug dynamically (standardize/match slug lookup)
    const catSlug = data["URL Slug"]?.split("/")[0] || "products";
    const breadcrumbs = {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": data["Category"],
          "item": `${BASE_URL}/${catSlug}/`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": data["Product Name"],
          "item": `${BASE_URL}/${data["URL Slug"]}/`
        }
      ]
    };

    // Parse specs for PropertyValues
    const specsList = parseKeySpecs(data["Key Specs"]);
    const addProps = specsList.map(s => ({
      "@type": "PropertyValue",
      "name": s.key,
      "value": s.value
    }));

    // Find material grades or available grades
    const materialGrade = specsList.find(s => s.key.toLowerCase().includes("grade") || s.key.toLowerCase().includes("material"))?.value || "Stainless Steel";

    const productSchema = {
      "@type": "Product",
      "name": data["Product Name"],
      "url": `${BASE_URL}/${data["URL Slug"]}/`,
      "image": [
        `${BASE_URL}${data["Image"] || "/flanges_pipes.webp"}`
      ],
      "description": data["Meta Description"] || metaDesc,
      "brand": {
        "@type": "Brand",
        "name": "Sakshi Forge"
      },
      "manufacturer": {
        "@id": `${BASE_URL}/#org`
      },
      "material": materialGrade,
      "additionalProperty": addProps
    };

    graph.push(breadcrumbs);
    graph.push(productSchema);

    // FAQ schema if FAQs are defined in compiler output
    if (data["FAQs"] && data["FAQs"].length > 0) {
      const faqEntities = data["FAQs"].map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }));
      const faqSchema = {
        "@type": "FAQPage",
        "mainEntity": faqEntities
      };
      graph.push(faqSchema);
    }
  }

  if (type === "market-city" && data && data.schema) {
    try {
      const parsed = JSON.parse(data.schema);
      injectSchema("main", parsed);
      return;
    } catch (e) {
      console.error("Failed to parse compiled schema for city:", e);
    }
  }

  // Inject final combined graph schema
  injectSchema("main", {
    "@context": "https://schema.org",
    "@graph": graph
  });
}

