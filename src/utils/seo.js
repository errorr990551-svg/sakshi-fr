/**
 * SEO utility to dynamically inject Meta Tags and JSON-LD Schema markup in the document head.
 */

const BASE_URL = "https://steelmanufacturer.in";

// Helper to remove any previously injected custom script tags
function clearExistingSchemas() {
  const existing = document.querySelectorAll("script.sakshi-seo-schema");
  existing.forEach((el) => el.remove());
}

// Helper to inject a JSON-LD schema
function injectSchema(schemaId, schemaObj) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.className = "sakshi-seo-schema";
  script.id = `seo-schema-${schemaId}`;
  script.text = JSON.stringify(schemaObj);
  document.head.appendChild(script);
}

// Helper to parse key specs like "Alloy: CuZn30 | Dia: 3-300mm | Std: IS 319" into key-value pairs
export function parseKeySpecs(specsString) {
  if (!specsString) return [];
  return specsString.split("|").map((item) => {
    const parts = item.split(":");
    return {
      key: parts[0]?.strip ? parts[0].strip() : parts[0]?.trim() || "",
      value: parts[1]?.strip ? parts[1].strip() : parts[1]?.trim() || "",
    };
  });
}

// Main function to update head elements dynamically
export function updateSEO({ type, data }) {
  clearExistingSchemas();

  let title = "Sakshi Forge | Industrial Flanges, Pipes & Forged Steel Manufacturer";
  let metaDesc = "Sakshi Forge is a leading manufacturer of high-quality forged flanges, industrial steel pipes, tubes, round bars, and steel plates. Serving oil & gas, petrochemical, and heavy industries globally.";
  let keywords = "Sakshi Forge, industrial flanges, forged steel, steel pipes, butt weld fittings, forged fittings, steel manufacturer India";
  let canonicalUrl = BASE_URL;

  // 1. Determine titles, descriptions, keywords, and canonical URL based on route type
  if (type === "about") {
    title = "About Sakshi Forge | Corporate Legacy & Manufacturing Capabilities";
    metaDesc = "Read the legacy of Sakshi Forge, Mumbai. Over 10+ years of manufacturing experience, delivering certified flanges, pipes, and forged steel fittings.";
    keywords = "Sakshi Forge about, corporate overview, manufacturing processes, steel forging legacy, certifications";
    canonicalUrl = `${BASE_URL}/about`;
  } else if (type === "products") {
    title = "Industrial Steel Products Catalog | Sakshi Forge Mumbai";
    metaDesc = "Explore the complete products catalog of Sakshi Forge. High-quality forged flanges, pipes, fittings, tubes, round bars, and sheets. Custom sizes manufactured in Mumbai.";
    keywords = "Sakshi Forge products, forged flanges, steel pipes, butt weld fittings, forged fittings, round bars catalog, steel manufacturer India";
    canonicalUrl = `${BASE_URL}/products`;
  } else if (type === "category") {
    // Data is a category object
    title = data["Category Meta Title"] || `${data["Parent Category"]} Manufacturer Mumbai | Sakshi Forge`;
    metaDesc = data["Category Meta Description"] || `Premium ${data["Parent Category"]} from Sakshi Forge Mumbai. Meet national & international standards. Request quotes online.`;
    keywords = `${data["Primary KW"]}, ${data["Parent Category"]} supplier India, ${data["Parent Category"]} Mumbai manufacturer`;
    canonicalUrl = `${BASE_URL}/${data["Category Slug"]}`;
  } else if (type === "product") {
    // Data is a product object
    title = data["Meta Title (<=60 chars)"] || data["Meta Title"] || `${data["Product Name"]} Manufacturer Mumbai | Sakshi Forge`;
    metaDesc = data["Meta Description (<=160 chars)"] || data["Meta Description"] || `Buy premium ${data["Product Name"]} from Sakshi Forge Mumbai. High quality, MTC provided, custom sizes. Get a quote today.`;
    
    const secKeywords = data["Secondary Keywords (3-5)"] || "";
    const primKeyword = data["Primary Keyword"] || "";
    const excelKeywords = data["Meta Keywords (5-8)"] || "";
    
    if (excelKeywords) {
      keywords = excelKeywords;
    } else {
      keywords = primKeyword ? (secKeywords ? `${primKeyword}, ${secKeywords}` : primKeyword) : "";
    }
    canonicalUrl = `${BASE_URL}/${data["URL Slug"]}`;
  }

  // 2. Update basic head DOM nodes
  document.title = title;

  // Meta description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement("meta");
    descTag.name = "description";
    document.head.appendChild(descTag);
  }
  descTag.setAttribute("content", metaDesc);

  // Meta keywords
  let keywordsTag = document.querySelector('meta[name="keywords"]');
  if (!keywordsTag) {
    keywordsTag = document.createElement("meta");
    keywordsTag.name = "keywords";
    document.head.appendChild(keywordsTag);
  }
  keywordsTag.setAttribute("content", keywords);

  // Canonical link
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.rel = "canonical";
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute("href", canonicalUrl);

  // 3. Inject structured JSON-LD schemas
  // A. Organization Schema (site-wide)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sakshi Forge",
    "url": BASE_URL,
    "logo": `${BASE_URL}/favicon.svg`,
    "telephone": "+91-80458-15130",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "113/117 Dr MG Mahimutra Marg 3rd Kumbharwada Shop No.5",
      "addressLocality": "Mumbai",
      "postalCode": "400078",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.indiamart.com/sakshiforge/",
      "https://www.tradeindia.com/Seller-11111-Sakshi-Forge/"
    ]
  };
  injectSchema("organization", orgSchema);

  // B. BreadcrumbList Schema (on category or product pages)
  if (type === "category") {
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": data["Parent Category"],
          "item": `${BASE_URL}/${data["Category Slug"]}`
        }
      ]
    };
    injectSchema("breadcrumbs", breadcrumbs);
  } else if (type === "product") {
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": data["Category"],
          // We will find category slug dynamically, or fallback to homepage if not found
          "item": `${BASE_URL}` 
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": data["Product Name"],
          "item": `${BASE_URL}/${data["URL Slug"]}`
        }
      ]
    };
    injectSchema("breadcrumbs", breadcrumbs);

    // C. Product Rich Schema (specifically on product page)
    const specsParsed = parseKeySpecs(data["Key Specs"]);
    const additionalProperties = specsParsed.map((s) => ({
      "@type": "PropertyValue",
      "name": s.key,
      "value": s.value
    }));

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data["Product Name"],
      "description": data["Meta Description (<=160 chars)"] || data["Meta Description"] || metaDesc,
      "image": `${BASE_URL}/flanges_pipes.webp`, // fallback standard image
      "sku": `SF-${data["S.No"]}-${data["URL Slug"]}`,
      "brand": {
        "@type": "Brand",
        "name": "Sakshi Forge"
      },
      "material": data["Category"],
      "manufacturer": {
        "@type": "Organization",
        "name": "Sakshi Forge",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Sakshi Forge"
        }
      },
      "additionalProperty": additionalProperties
    };
    injectSchema("product", productSchema);

    // D. FAQPage Schema (specifically on product page)
    const faqEntities = [];
    if (data["FAQ 1 Q"]) {
      for (let i = 1; i <= 4; i++) {
        const qKey = `FAQ ${i} Q`;
        const aKey = `FAQ ${i} A`;
        if (data[qKey] && data[aKey]) {
          faqEntities.push({
            "@type": "Question",
            "name": data[qKey],
            "acceptedAnswer": {
              "@type": "Answer",
              "text": data[aKey]
            }
          });
        }
      }
    } else {
      faqEntities.push(
        {
          "@type": "Question",
          "name": `What are the specifications of ${data["Product Name"]}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${data["Product Name"]} features the following specifications: ${data["Key Specs"]}. It meets national and international industry certifications and is optimized for ${data["Target Industries"]}.`
          }
        },
        {
          "@type": "Question",
          "name": `Which industries are served by ${data["Product Name"]}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${data["Product Name"]} from Sakshi Forge is widely supplied to the ${data["Target Industries"]} industries. It is designed to withstand extreme mechanical tolerances and high pressure/temperature environments.`
          }
        },
        {
          "@type": "Question",
          "name": `Does Sakshi Forge issue test certificates for ${data["Product Name"]}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Sakshi Forge supplies standard quality compliance reports, including Material Test Certificates (MTC) compliant with EN 10204 3.1 standards, raw material certificates, and third-party inspection audits."
          }
        }
      );
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqEntities
    };
    injectSchema("faq", faqSchema);
  }
}
