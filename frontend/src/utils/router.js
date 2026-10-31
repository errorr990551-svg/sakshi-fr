import { REDIRECTED_PATHS } from '../data/redirects';

/**
 * Normalizes internal router paths with standard trailing slash to eliminate 301 redirects
 */
export function normalizePath(path) {
  if (!path || path === '/') return '/';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('tel:') || path.startsWith('mailto:') || path.startsWith('#')) return path;
  const parts = path.split(/(?=[?#])/);
  const base = parts[0];
  const rest = parts.slice(1).join('');
  if (base.includes('.')) return path; // static file like /sitemap.xml
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${rest}`;
}

export function isTrailingSlashCityPath(pathname) {
  return true;
}

/**
 * Normalizes an internal link to the canonical trailing-slash form so links
 * never hit the sitewide trailing-slash 301. External URLs, anchors, mailto/tel
 * and file paths (e.g. /catalogue.pdf) are returned unchanged.
 */
export function withSlash(href) {
  if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return href;
  const [, pathname, rest] = href.match(/^([^?#]*)(.*)$/);
  if (/\.[a-z0-9]{2,5}$/i.test(pathname)) return href;
  const slashed = pathname.endsWith('/') ? pathname : `${pathname}/`;
  // Links to merged pages go straight to the page they were merged into (no 301 hop)
  return (REDIRECTED_PATHS[slashed] || slashed) + rest;
}

export function navigate(path) {
  // Every URL is a prerendered page: load it (the page ships only its own code and data)
  window.location.assign(withSlash(normalizePath(path || '/')));
}

export function handleLinkClick(e, path) {
  if (e.defaultPrevented) return;
  
  // If the link opens in a new tab, or has special modifiers, let the browser handle it
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
    return;
  }
  
  const rawTarget = path || e.currentTarget?.getAttribute('href') || e.target?.getAttribute('href');
  if (!rawTarget) return;

  e.preventDefault();
  navigate(rawTarget);
}
