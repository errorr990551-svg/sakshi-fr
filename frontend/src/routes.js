// URL -> page type and the data that page renders.
// Imports every data file, so only the prerender (server) and the 404 page load it;
// each prerendered page embeds its resolved route as JSON (script#route-data) instead.
import { customCityData } from './data/customCityData';
import { maharashtraCityData } from './data/maharashtraCityData';
import { karnatakaCityData } from './data/karnatakaCityData';
import { gujaratCityData } from './data/gujaratCityData';
import { telanganaCityData } from './data/telanganaCityData';
import { westBengalCityData } from './data/westBengalCityData';
import { madhyaPradeshCityData } from './data/madhyaPradeshCityData';
import { andhraPradeshCityData } from './data/andhraPradeshCityData';
import { odishaCityData } from './data/odishaCityData';
import { REDIRECTED_PATHS, isRedirectedPath } from './data/redirects';
import productsData from './data/products.json';
import categoriesData from './data/categories.json';
import { blogPosts } from './data/blogData';
import marketCitiesData from './data/market_cities.json';
import { gradePages, standardPages } from './data/seo_master_data';
import epBuildSpecData from './data/ep_build_spec_data.json';
import { SPEC_GUIDES } from './data/specGuides.js';
import { epRelatedGroups } from './utils/epRelated';
import { relatedProductsFor } from './utils/productLinks';
import { categoryProducts, crossLinkSlugs } from './utils/categoryProducts';

// Up to 6 other live city pages in the same state (India) or country, taken in a ring over the
// sorted slugs so every city in a group is linked from the same number of its neighbours.
const regionOf = (c) => ((c.country || 'India') === 'India' ? c.state : c.country);
function siblingCities(city) {
  const group = marketCitiesData
    .filter((c) => c.path && regionOf(c) === regionOf(city) && !REDIRECTED_PATHS[`${c.path.replace(/\/+$/, '')}/`])
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const at = group.findIndex((c) => c.slug === city.slug);
  if (at < 0) return [];
  return group.slice(at + 1).concat(group.slice(0, at)).slice(0, 6).map((c) => ({ city: c.city, path: c.path }));
}

// Legacy city URLs -> their 301 destination, or /electropolished-pipes/ when the city has no page
export function getLegacyRedirect(rawPath) {
  if (!rawPath) return null;
  const clean = rawPath.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '').toLowerCase();

  if (clean === 'home') return '/';
  if (clean === 'marketplace') return '/market-area/';
  if (clean === 'about') return '/about-us/';
  if (clean === 'delhi') return '/market-area/delhi/';
  if (clean === 'bangalore') return '/market-area/bengaluru/';
  if (clean === 'industrial-flanges') return '/flanges/';
  if (clean === 'gujarat') return '/market-area/gujarat/';
  if (clean === 'telangana') return '/market-area/telangana/';
  if (clean === 'west-bengal') return '/market-area/west-bengal/';
  if (clean === 'madhya-pradesh') return '/market-area/madhya-pradesh/';
  if (clean === 'andhra-pradesh') return '/market-area/andhra-pradesh/';
  if (clean === 'odisha') return '/market-area/odisha/';
  if (clean === '306-stainless-steel-round-bar') return '/304-stainless-steel-round-bar/';
  if (clean === 'forged-pipe-fittings-guide-pressure-classes-standards') return '/asme-b16-11-forged-fittings/';

  let citySlug = '';
  const m1 = clean.match(/^electropolished-pipes?-(?:manufacturer|supplier)-(?:in-)?(.+)$/);
  if (m1) {
    citySlug = m1[1];
  } else {
    const m2 = clean.match(/^industrial-pipe-flange-manufacturer-in-(.+)-sakshi-forge$/);
    if (m2) {
      citySlug = m2[1];
    }
  }

  if (!citySlug) return null;

  if (citySlug === 'delhi' || citySlug === 'new-delhi') return '/market-area/delhi/';
  if (citySlug === 'bangalore' || citySlug === 'bengaluru') return '/market-area/bengaluru/';

  const cityExists = marketCitiesData.some(c => c.slug === citySlug || c.path === `/market-area/${citySlug}`) ||
    Boolean(maharashtraCityData[citySlug] || karnatakaCityData[citySlug] || gujaratCityData[citySlug] ||
    telanganaCityData[citySlug] || westBengalCityData[citySlug] || madhyaPradeshCityData[citySlug] ||
    andhraPradeshCityData[citySlug] || odishaCityData[citySlug] || customCityData[citySlug]);

  return cityExists ? `/market-area/${citySlug}/` : '/electropolished-pipes/';
}

function matchRoute(currentPath) {
  const rawPath = currentPath ? currentPath.split('?')[0].split('#')[0] : '/';
  const cleanPath = rawPath === '/' ? '/' : rawPath.replace(/\/+$/, '');

  if (cleanPath === '/' || cleanPath === '') {
    return { type: 'home', data: null };
  }
  if (cleanPath === '/about-us' || cleanPath === '/about') {
    return { type: 'about', data: null };
  }
  if (cleanPath === '/products') {
    return { type: 'products', data: null };
  }
  if (cleanPath === '/quality-assurance') {
    return { type: 'quality-assurance', data: null };
  }
  if (cleanPath === '/industries') {
    return { type: 'industries', data: null };
  }
  if (cleanPath === '/contact-us') {
    return { type: 'contact-us', data: null };
  }
  if (cleanPath === '/certifications') {
    return { type: 'certifications', data: null };
  }
  if (cleanPath === '/blog') {
    return { type: 'blog', data: null };
  }
  if (cleanPath.startsWith('/blog/')) {
    const blogSlug = cleanPath.replace(/^\/blog\//, '').replace(/\/+$/, '');
    const post = blogPosts.find(p => p.slug === blogSlug || p.id === blogSlug);
    if (post) {
      return { type: 'blog-post', data: post };
    }
  }
  if (cleanPath === '/privacy-policy') {
    return { type: 'privacy-policy', data: null };
  }
  if (cleanPath === '/terms-and-conditions') {
    return { type: 'terms-and-conditions', data: null };
  }
  if (cleanPath === '/weight-calculator') {
    return { type: 'weight-calculator', data: null };
  }

  if (cleanPath === '/market-area' || cleanPath === '/marketplace') {
    return { type: 'market-area', data: null };
  }
  if (cleanPath === '/clients') {
    return { type: 'clients', data: null };
  }
  if (cleanPath === '/catalogue') {
    return { type: 'catalogue', data: null };
  }
  if (cleanPath === '/team') {
    return { type: 'team', data: null };
  }
  if (cleanPath === '/stainless-steel-elbow') {
    return { type: 'stainless-steel-elbow', data: null };
  }
  if (cleanPath === '/gallery' || cleanPath === '/media-gallery') {
    return { type: 'gallery', data: null };
  }
  if (cleanPath === '/sitemap') {
    return { type: 'sitemap', data: null };
  }

  // Check chart tool slugs
  if (['/flange-dimension-chart', '/flange-weight-chart', '/flange-bolt-chart', '/pipe-schedule-chart'].includes(cleanPath)) {
    const toolType = cleanPath.substring(1);
    return { type: 'chart-tool', data: { toolType, slug: toolType } };
  }

  // Check export slugs
  if (['/flange-exporter-usa', '/flange-supplier-uae', '/flange-supplier-saudi-arabia'].includes(cleanPath)) {
    const countryType = cleanPath === '/flange-exporter-usa' ? 'usa' : cleanPath === '/flange-supplier-uae' ? 'uae' : 'saudi-arabia';
    return { type: 'export', data: { countryType, slug: cleanPath.substring(1) } };
  }

  const slug = cleanPath.substring(1);

  // Check grade pages
  if (gradePages[slug]) {
    return { type: 'grade', data: gradePages[slug] };
  }

  // Check standard pages
  if (standardPages[slug]) {
    return { type: 'standard', data: standardPages[slug] };
  }

  // Check if matching category slug
  const category = categoriesData.find(c => c['Category Slug'] === slug);
  if (category) {
    return { type: 'category', data: category };
  }

  // Check if matching product slug
  const product = productsData.find(p => p['URL Slug'] === slug);
  if (product) {
    return { type: 'product', data: product };
  }

  if (cleanPath === '/tamil-nadu' || cleanPath === '/market-area/tamil-nadu') {
    return { type: 'tamil-nadu-hub', data: null };
  }

  if (cleanPath === '/karnataka' || cleanPath === '/market-area/karnataka') {
    return { type: 'karnataka-hub', data: null };
  }

  if (cleanPath === '/gujarat' || cleanPath === '/market-area/gujarat') {
    return { type: 'gujarat-hub', data: null };
  }

  if (cleanPath === '/telangana' || cleanPath === '/market-area/telangana') {
    return { type: 'telangana-hub', data: null };
  }

  if (cleanPath === '/west-bengal' || cleanPath === '/market-area/west-bengal') {
    return { type: 'west-bengal-hub', data: null };
  }

  if (cleanPath === '/madhya-pradesh' || cleanPath === '/market-area/madhya-pradesh') {
    return { type: 'madhya-pradesh-hub', data: null };
  }

  if (cleanPath === '/andhra-pradesh' || cleanPath === '/market-area/andhra-pradesh') {
    return { type: 'andhra-pradesh-hub', data: null };
  }

  if (cleanPath === '/maharashtra' || cleanPath === '/market-area/maharashtra') {
    return { type: 'market-area', data: null };
  }

  if (cleanPath === '/odisha' || cleanPath === '/market-area/odisha') {
    return { type: 'market-area', data: null };
  }

  // Merged and legacy URLs: .htaccess 301s them; the 404 page redirects as a fallback
  const normalizedSlashPath = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
  if (REDIRECTED_PATHS[normalizedSlashPath]) {
    return { type: '404', data: null };
  }

  if (getLegacyRedirect(cleanPath)) {
    return { type: '404', data: null };
  }

  // Check if market-area path is for Maharashtra, Karnataka, Gujarat, Telangana, West Bengal, MP, AP, or Odisha rich cities
  if (cleanPath.startsWith('/market-area/')) {
    const marketCityKey = cleanPath.replace('/market-area/', '');
    if (maharashtraCityData[marketCityKey]) {
      return { type: 'maharashtra-city', data: maharashtraCityData[marketCityKey] };
    }
    if (karnatakaCityData[marketCityKey]) {
      return { type: 'maharashtra-city', data: karnatakaCityData[marketCityKey] };
    }
    if (gujaratCityData[marketCityKey]) {
      return { type: 'maharashtra-city', data: gujaratCityData[marketCityKey] };
    }
    if (telanganaCityData[marketCityKey]) {
      return { type: 'maharashtra-city', data: telanganaCityData[marketCityKey] };
    }
    if (westBengalCityData[marketCityKey]) {
      return { type: 'maharashtra-city', data: westBengalCityData[marketCityKey] };
    }
    if (madhyaPradeshCityData[marketCityKey]) {
      return { type: 'maharashtra-city', data: madhyaPradeshCityData[marketCityKey] };
    }
    if (andhraPradeshCityData[marketCityKey]) {
      return { type: 'maharashtra-city', data: andhraPradeshCityData[marketCityKey] };
    }
    if (odishaCityData[marketCityKey]) {
      return { type: 'maharashtra-city', data: odishaCityData[marketCityKey] };
    }
  }

  // Check if direct slug matches Karnataka, Gujarat, Telangana, West Bengal, MP, AP, or Odisha rich cities
  if (karnatakaCityData[slug]) {
    return { type: 'maharashtra-city', data: karnatakaCityData[slug] };
  }
  if (gujaratCityData[slug]) {
    return { type: 'maharashtra-city', data: gujaratCityData[slug] };
  }
  if (telanganaCityData[slug]) {
    return { type: 'maharashtra-city', data: telanganaCityData[slug] };
  }
  if (westBengalCityData[slug]) {
    return { type: 'maharashtra-city', data: westBengalCityData[slug] };
  }
  if (madhyaPradeshCityData[slug]) {
    return { type: 'maharashtra-city', data: madhyaPradeshCityData[slug] };
  }
  if (andhraPradeshCityData[slug]) {
    return { type: 'maharashtra-city', data: andhraPradeshCityData[slug] };
  }
  if (odishaCityData[slug]) {
    return { type: 'maharashtra-city', data: odishaCityData[slug] };
  }

  // Check custom rich city data (Tamil Nadu, Canberra, Abu Dhabi, etc.)
  const customCityKey = cleanPath.startsWith('/market-area/') ? cleanPath.replace('/market-area/', '') : slug;
  if (customCityData[customCityKey]) {
    return { type: 'market-city', data: customCityData[customCityKey] };
  }

  // Check if matching market city slug from standard dataset
  let city = marketCitiesData.find(c => {
    const normPath = c.path ? c.path.replace(/\/+$/, '') : '';
    return c.slug === slug || c.slug === customCityKey || normPath === cleanPath || normPath === '/' + slug;
  });
  if (city) {
    return { type: 'market-city', data: city.nearbyCitySpokes ? city : { ...city, nearbyCitySpokes: siblingCities(city) } };
  }

  // Check if matching EP Build Spec page (106 URLs)
  const epPage = epBuildSpecData.find(p => p.url === cleanPath || p.url === `${cleanPath}/` || p.url === `/${slug}` || p.url === `/${slug}/`);
  if (epPage) {
    // A page-specific guide replaces the template content and its FAQs (visible and in schema)
    const guide = SPEC_GUIDES[epPage.url.replace(/\/?$/, '/')];
    return { type: 'ep-spec', data: guide ? { ...epPage, guide, faqs: guide.faqs.map((f) => ({ question: f.q, answer: f.a })) } : epPage };
  }

  return { type: '404', data: null };
}

// State hub pages that exist; every other state is an anchor on /market-area/.
export const STATE_HUBS = {
  'Tamil Nadu': '/tamil-nadu/',
  Karnataka: '/karnataka/',
  Gujarat: '/market-area/gujarat/',
  Telangana: '/market-area/telangana/',
  'West Bengal': '/market-area/west-bengal/',
  'Madhya Pradesh': '/market-area/madhya-pradesh/',
  'Andhra Pradesh': '/market-area/andhra-pradesh/',
};

const slashed = (u) => (u.endsWith('/') ? u : `${u}/`);
const cleanTitle = (t) => String(t || '').split(' | ')[0].trim();

// The HTML sitemap: only live pages (not 404, not 301-redirected), each listed once.
function buildSitemapGroups() {
  const seen = new Set();
  const live = (url) => {
    const u = slashed(url);
    if (seen.has(u) || isRedirectedPath(u) || matchRoute(u).type === '404') return false;
    seen.add(u);
    return true;
  };
  const link = (name, url) => (live(url) ? { name, url: slashed(url) } : null);
  const links = (arr) => arr.filter(Boolean);
  const ep = (type) => epBuildSpecData.filter((p) => p.page_type === type).map((p) => link(p.h1, p.url));

  const company = links([
    link('Home', '/'), link('About Us', '/about-us/'), link('Quality Assurance', '/quality-assurance/'),
    link('Certifications', '/certifications/'), link('Testing & Inspection', '/testing-inspection/'),
    link('Industries We Serve', '/industries/'), link('Clients', '/clients/'), link('Our Team', '/team/'),
    link('Gallery', '/gallery/'), link('Catalogue', '/catalogue/'), link('Contact Us', '/contact-us/'),
    link('Market Area', '/market-area/'), link('Blog', '/blog/'), link('Sitemap', '/sitemap/'),
    link('Privacy Policy', '/privacy-policy/'), link('Terms & Conditions', '/terms-and-conditions/'),
  ]);

  const electropolished = links(ep('Product (Money)'));

  const categories = categoriesData.map((c) => {
    const url = `/${c['Category Slug']}/`;
    const head = live(url);
    const items = links(categoryProducts(c).map((p) => link(p['Product Name'], `/${p['URL Slug']}/`)));
    return head || items.length ? { title: c['Parent Category'], url: head ? url : undefined, links: items } : null;
  }).filter(Boolean);
  const otherProducts = links([link('Products Catalogue', '/products/'), link('Stainless Steel Elbows', '/stainless-steel-elbow/')]);

  const standards = links([
    link('Standards', '/standards/'),
    ...ep('Standard'),
    ...Object.values(standardPages).map((g) => link(cleanTitle(g.title), `/${g.slug}/`)),
  ]);
  const grades = links(Object.values(gradePages).map((g) => link(cleanTitle(g.title), `/${g.slug}/`)));
  const industries = links(ep('Industry'));
  const resources = links([
    link('Resources', '/resources/'),
    ...epBuildSpecData.filter((p) => p.page_type.startsWith('Resource/')).map((p) => link(p.h1, p.url)),
    link('Metal Weight Calculator', '/weight-calculator/'),
    link('Flange Dimension Chart', '/flange-dimension-chart/'), link('Flange Weight Chart', '/flange-weight-chart/'),
    link('Flange Bolt Chart', '/flange-bolt-chart/'), link('Pipe Schedule Chart', '/pipe-schedule-chart/'),
  ]);
  const exportPages = links([
    link('Flange Exporter USA', '/flange-exporter-usa/'), link('Flange Supplier UAE', '/flange-supplier-uae/'),
    link('Flange Supplier Saudi Arabia', '/flange-supplier-saudi-arabia/'),
  ]);

  const byRegion = (india) => {
    const map = new Map();
    marketCitiesData
      .filter((c) => c.path && ((c.country || 'India') === 'India') === india)
      .forEach((c) => {
        const key = india ? c.state : c.country;
        const l = link(c.city, c.path);
        if (!l) return;
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(l);
      });
    return [...map.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([title, items]) => ({
        title,
        url: india && STATE_HUBS[title] && live(STATE_HUBS[title]) ? STATE_HUBS[title] : undefined,
        links: items.sort((a, b) => a.name.localeCompare(b.name)),
      }));
  };
  const india = byRegion(true);
  const world = byRegion(false);

  const blog = links([
    ...blogPosts.map((p) => link(p.title, `/blog/${p.slug}/`)),
    ...ep('Blog'),
  ]);

  return [
    { title: 'Company', links: company },
    { title: 'Electropolished Pipes & Tubes', links: electropolished },
    { title: 'Products', links: otherProducts, children: categories },
    { title: 'Standards', links: standards },
    { title: 'Grades', links: grades },
    { title: 'Industries', links: industries },
    { title: 'Resources & Tools', links: resources },
    { title: 'Export', links: exportPages },
    { title: 'Market Area: India', url: '/market-area/', links: [], children: india },
    { title: 'Market Area: International', links: [], children: world },
    { title: 'Blog', links: blog },
  ].filter((g) => g.links.length || (g.children && g.children.length));
}

// Adds what the page would otherwise import from the large data files (custom city copy,
// related products, category products, the city directory, related EP links), so the page's own code stays small.
export function resolveRoute(path) {
  const route = matchRoute(path);
  if (route.type === 'market-city') {
    route.custom = customCityData[route.data.slug] || null;
  }
  if (route.type === 'product') {
    route.relatedProducts = relatedProductsFor(route.data);
  }
  if (route.type === 'market-area') {
    route.cities = marketCitiesData.map(({ city, state, country, path: cityPath, slug }) => ({ city, state, country: country || 'India', path: cityPath, slug }));
    route.stateHubs = STATE_HUBS;
  }
  if (route.type === 'sitemap') {
    route.sitemap = buildSitemapGroups();
  }
  if (route.type === 'category') {
    route.products = categoryProducts(route.data);
    route.crossLinkSlugs = crossLinkSlugs(route.data);
  }
  route.related = route.type === '404' ? [] : epRelatedGroups(path);
  return route;
}
