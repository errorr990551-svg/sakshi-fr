import epBuildSpecData from '../data/ep_build_spec_data.json';
import { withSlash } from './router';
import { isRedirectedPath } from '../data/redirects';

// Crawlable links between the electropolished pipe/tube pages, built from the
// parent field in ep_build_spec_data.json: the parent page, its child pages and
// its sibling pages. Without this block most EP pages had no internal links at all.
const byUrl = new Map(epBuildSpecData.filter((p) => p.url && p.url !== '/' && !isRedirectedPath(p.url)).map((p) => [withSlash(p.url), p]));

const labelFor = (url) => {
  const page = byUrl.get(url);
  if (page) return page.h1;
  return url.replace(/^\/|\/$/g, '').split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

// [{ heading, links: [{ url, label }] }] for the page at `path`
export function epRelatedGroups(path, maxSiblings = 12) {
  const self = withSlash(path || '/');
  const current = byUrl.get(self);
  const parent = current && current.parent && current.parent !== '-' && current.parent !== '/' ? withSlash(current.parent) : null;

  const children = [...byUrl.values()].filter((p) => withSlash(p.parent || '') === self).map((p) => withSlash(p.url));
  const siblings = parent
    ? [...byUrl.values()].filter((p) => withSlash(p.parent || '') === parent && withSlash(p.url) !== self).map((p) => withSlash(p.url)).slice(0, maxSiblings)
    : [];

  return [
    parent && { heading: 'Back to', urls: [parent] },
    children.length > 0 && { heading: 'In this section', urls: children },
    siblings.length > 0 && { heading: 'Related pages', urls: siblings }
  ].filter(Boolean).map((g) => ({ heading: g.heading, links: g.urls.map((url) => ({ url, label: labelFor(url) })) }));
}
