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

export function navigate(path) {
  const targetPath = normalizePath(path);
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
  
  const rawTarget = path || e.currentTarget?.getAttribute('href') || e.target?.getAttribute('href');
  if (!rawTarget) return;

  e.preventDefault();
  navigate(rawTarget);
}
