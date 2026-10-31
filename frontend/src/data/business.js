// Single source for the business name, address and phone (NAP) used in visible text and schema.
// Matches the Google Business Profile exactly (checked 2026-10-31); change it here only if the
// profile changes, so the website and Google never disagree.
export const PHONE = '+91 82913 66340';
export const EMAIL = 'sales@steelmanufacturer.in';

export const ADDRESS = {
  street: 'Shop No. 05, Ground Floor, 113/117, Dr. MG Mahimtura Marg, 3rd Kumbharwada',
  locality: 'Mumbai',
  region: 'Maharashtra',
  postalCode: '400004',
  country: 'IN',
};
export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}`;

// Google Business Profile: "SAKSHI FORGE - Flanges | electropolished pipes manufacturer"
export const GBP = {
  placeId: 'ChIJ-fU4ZJTP5zsRonffjwIkJAc',
  mapsUrl: 'https://maps.google.com/?cid=514575850849400738',
  reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJ-fU4ZJTP5zsRonffjwIkJAc',
  writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJ-fU4ZJTP5zsRonffjwIkJAc',
  // Google's own embed: shows the listing card with its live star rating and review count
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m2!2m1!1sSAKSHI+FORGE+-+Flanges+%7C+electropolished+pipes+manufacturer,+Kumbharwada,+Mumbai+400004!3m1!1sen!5m1!1sen',
  geo: { latitude: 18.9594407, longitude: 72.8273853 },
};

export const postalAddressSchema = () => ({
  "@type": "PostalAddress",
  "streetAddress": ADDRESS.street,
  "addressLocality": ADDRESS.locality,
  "addressRegion": ADDRESS.region,
  "postalCode": ADDRESS.postalCode,
  "addressCountry": ADDRESS.country,
});

// LocalBusiness node (same @id on every page that carries it)
export const localBusinessSchema = (baseUrl, extra = {}) => ({
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#local`,
  "name": "Sakshi Forge",
  "url": `${baseUrl}/`,
  "image": `${baseUrl}/favicon.svg`,
  "telephone": PHONE,
  "email": EMAIL,
  "address": postalAddressSchema(),
  "geo": { "@type": "GeoCoordinates", "latitude": GBP.geo.latitude, "longitude": GBP.geo.longitude },
  "hasMap": GBP.mapsUrl,
  "sameAs": [GBP.mapsUrl],
  "parentOrganization": { "@id": `${baseUrl}/#org` },
  ...extra,
});
