// Title and meta-description length guards, shared by the browser (seo.js) and the
// prerender step so both always produce the same <title> and description.

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
  // Drop an unclosed "(..." word, trailing joiners like "&"/"for", and trailing ":" or ",".
  while (words.length > 1) {
    const last = words[words.length - 1];
    if ((last.includes('(') && !last.includes(')')) || DANGLING.test(last)) { words.pop(); continue; }
    break;
  }
  const cut = words.join(' ').replace(/[\s:;,\-–—|]+$/, '');
  return cut || t.substring(0, 57);
}

export function formatMetaDesc(desc) {
  if (!desc) return '';
  let d = desc.trim();
  if (d.length <= 160) return d;
  const periodIdx = d.lastIndexOf('.', 159);
  if (periodIdx > 100) return d.substring(0, periodIdx + 1).trim();
  const words = d.substring(0, 156).split(' ');
  words.pop();
  return words.join(' ').trim() + '...';
}
