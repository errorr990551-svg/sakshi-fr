import { REDIRECTED_PATHS } from '../data/redirects';

/**
 * Kept for backward compatibility
 */
export function isTrailingSlashCityPath(pathname) {
  return false;
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
  const targetPath = withSlash(path || '/');
  // Leaving the pre-rendered page: from now on the head is managed client-side.
  window.__SAKSHI_HYDRATED_PATH__ = null;
  // Update browser address bar without page reload
  window.history.pushState(null, "", targetPath);
  // Trigger popstate event so our App router hears it and updates the view
  window.dispatchEvent(new PopStateEvent("popstate"));
  // Scroll to top of the page smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function handleLinkClick(e, path) {
  if (e.defaultPrevented) return;
  
  // If the link opens in a new tab, or has special modifiers, let the browser handle it
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
    return;
  }
  
  const targetPath = path || e.currentTarget?.getAttribute('href') || e.target?.getAttribute('href');
  if (!targetPath) return;

  e.preventDefault();
  navigate(targetPath);
}
