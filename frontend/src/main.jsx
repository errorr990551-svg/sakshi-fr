import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { loadPage } from './pages.js'
import { initGlobalClickTracking } from './utils/analytics.js'

// Initialize sitewide GA4 click tracking for tel, mailto, whatsapp & catalogue downloads
initGlobalClickTracking();

const container = document.getElementById('root')
const path = window.location.pathname
const embedded = document.getElementById('route-data')

async function start() {
  // Prerendered pages carry their route (script#route-data): load only that page's component
  // and hydrate the server markup, so the first paint is also the final paint (LCP).
  if (embedded && container.hasChildNodes()) {
    const route = JSON.parse(embedded.textContent)
    const Page = await loadPage(route.type)
    hydrateRoot(container, <StrictMode><App path={path} route={route} Page={Page} /></StrictMode>)
    return
  }
  // Dev server (no prerendered HTML): resolve the route in the browser
  const { resolveRoute } = await import('./routes.js')
  const route = resolveRoute(path)
  const Page = await loadPage(route.type)
  createRoot(container).render(<StrictMode><App path={path} route={route} Page={Page} /></StrictMode>)
}

start()
