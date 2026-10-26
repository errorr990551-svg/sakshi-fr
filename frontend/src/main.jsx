import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initGlobalClickTracking } from './utils/analytics.js'

// Initialize sitewide GA4 click tracking for tel, mailto, whatsapp & catalogue downloads
initGlobalClickTracking();

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Pre-rendered pages already contain the full markup: hydrate it instead of
// discarding and re-rendering it, so the first paint is also the final paint (LCP).
if (container.hasChildNodes()) {
  window.__SAKSHI_HYDRATED_PATH__ = window.location.pathname
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
