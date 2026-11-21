// Title and meta-description length guards used by the prerender (prerender.js).

// Words a cut title must not end on: they leave "Pipes &", "Guide:" or "(2026" in search results.
const DANGLING = /^(&|and|or|for|in|of|the|to|with|vs\.?|a|an|-|–|—|\|)$/i;

export function formatTitle(title) {
  if (!title) return 'Sakshi Forge | Steel Manufacturer Mumbai';
  let t = title.trim();
  if (t.length <= 60) return t;
  if (t.includes(' | Sakshi Forge')) {
    const withoutBrand = t.replace(' | Sakshi Forge', '').trim();
    if (withoutBrand.length <= 60) return withoutBrand;
    t = withoutBrand;
  }
  t = t.replace(/ Manufacturer & Supplier in India/gi, ' Manufacturer India')
       .replace(/ Manufacturer & Supplier/gi, ' Manufacturer')
       .replace(/ Manufacturer in India/gi, ' Manufacturer India')
       .replace(/ Supplier in India/gi, ' Supplier India')
       .replace(/ across India/gi, ' India');
  if (t.length <= 60) return t;
  const words = [];
  for (const w of t.split(' ')) {
    if ([...words, w].join(' ').length > 57) break;
    words.push(w);
  }
  // A cut inside "( ... )" drops the whole bracket part, then trailing joiners like "&"/"for".
  const open = words.findLastIndex((w) => w.includes('('));
  if (open > 0 && !words.slice(open).join(' ').includes(')')) words.length = open;
  while (words.length > 1 && DANGLING.test(words[words.length - 1])) words.pop();
  const cut = words.join(' ').replace(/[\s:;,\-–—|]+$/, '');
  return cut || t.substring(0, 57);
}

export function formatMetaDesc(desc) {
  if (!desc) return '';
  let d = desc.trim();
  if (d.length <= 160) return d;
  const periodIdx = d.lastIndexOf('.', 159);
  if (periodIdx > 100) return d.substring(0, periodIdx + 1).trim();
  // No sentence end in range: end at the last list comma instead of a trailing "...".
  const commaIdx = Math.max(d.lastIndexOf(', ', 158), d.lastIndexOf('; ', 158));
  const words = (commaIdx > 90 ? d.substring(0, commaIdx) : d.substring(0, 158).replace(/\s+\S*$/, '')).split(' ');
  while (words.length > 1 && DANGLING.test(words[words.length - 1])) words.pop();
  return words.join(' ').replace(/[\s:;,\-–—|(]+$/, '') + '.';
}
