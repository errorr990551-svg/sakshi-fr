import epBuildSpecData from '../data/ep_build_spec_data.json';
import { handleLinkClick, withSlash } from '../utils/router';
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

export default function EPRelatedLinks({ path, maxSiblings = 12 }) {
  const self = withSlash(path || '/');
  const current = byUrl.get(self);
  const parent = current && current.parent && current.parent !== '-' && current.parent !== '/' ? withSlash(current.parent) : null;

  const children = [...byUrl.values()].filter((p) => withSlash(p.parent || '') === self).map((p) => withSlash(p.url));
  const siblings = parent
    ? [...byUrl.values()].filter((p) => withSlash(p.parent || '') === parent && withSlash(p.url) !== self).map((p) => withSlash(p.url)).slice(0, maxSiblings)
    : [];

  const groups = [
    parent && { heading: 'Back to', urls: [parent] },
    children.length > 0 && { heading: 'In this section', urls: children },
    siblings.length > 0 && { heading: 'Related pages', urls: siblings }
  ].filter(Boolean);

  if (groups.length === 0) return null;

  return (
    <nav aria-label="Related electropolished pipe pages" style={{ padding: '3rem 0', borderTop: '1px solid var(--border-color, #1e293b)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {groups.map((group) => (
          <div key={group.heading} style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem' }}>{group.heading}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.urls.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    onClick={(e) => handleLinkClick(e, url)}
                    style={{ display: 'inline-block', padding: '0.4rem 0.85rem', border: '1px solid var(--border-color, #334155)', borderRadius: '4px', fontSize: '0.85rem', color: 'inherit', textDecoration: 'none' }}
                  >
                    {labelFor(url)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
