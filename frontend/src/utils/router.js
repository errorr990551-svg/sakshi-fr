/**
 * Kept for backward compatibility
 */
export function isTrailingSlashCityPath(pathname) {
  return false;
}

export function navigate(path) {
  const targetPath = path || '/';
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
