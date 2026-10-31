import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App.jsx';
import { resolveRoute } from './routes.js';
import { loadPage, PAGE_COMPONENTS } from './pages.js';

// Renders a URL and returns the HTML with the route it was rendered from; the prerender
// embeds that route in the page so the browser hydrates with identical props.
export async function render(url, route = resolveRoute(url)) {
  const Page = await loadPage(route.type);
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App path={url} route={route} Page={Page} />
    </React.StrictMode>
  );
  return { html, route, component: PAGE_COMPONENTS[route.type] || PAGE_COMPONENTS['404'] };
}
