import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initGlobalClickTracking } from './utils/analytics.js'

// Initialize sitewide GA4 click tracking for tel, mailto, whatsapp & catalogue downloads
initGlobalClickTracking();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
