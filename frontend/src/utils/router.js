/**
 * SPA client-side router utility.
 * Intercepts page transitions using HTML5 history API.
 */

export function navigate(path) {
  // Update browser address bar without page reload
  window.history.pushState(null, "", path);
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
  
  e.preventDefault();
  navigate(path);
}
