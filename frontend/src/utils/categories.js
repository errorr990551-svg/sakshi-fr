import categoriesData from '../data/categories.json';

export const getParentCategoryName = (p) => {
  const slug = (p['URL Slug'] || '').toLowerCase();
  const cat = (p['Category'] || '').toLowerCase();
  const name = (p['Product Name'] || '').toLowerCase();

  // 1. If slug contains a slash (new structured products)
  if (slug.includes('/')) {
    const catSlug = slug.split('/')[0];
    const matchedCategory = categoriesData.find(c => c['Category Slug'] === catSlug);
    if (matchedCategory) {
      return matchedCategory['Parent Category'];
    }
  }

  // 2. Fallback classification logic for original products
  if (cat.includes('round bar') || slug.includes('round-bar') || name.includes('round bar') || name.includes('bright bar')) {
    return 'Round Bars';
  }
  if (cat.includes('flange') || slug.includes('flange') || name.includes('flange')) {
    return 'Flanges';
  }
  if (cat.includes('dairy') || slug.includes('dairy') || name.includes('dairy') || name.includes('tri-clover') || name.includes('union')) {
    return 'Dairy & Sanitary Fittings';
  }
  if (cat.includes('fastener') || slug.includes('fastener') || name.includes('bolt') || name.includes('nut') || name.includes('stud') || name.includes('washer')) {
    return 'Fasteners';
  }
  if (cat.includes('electropolish') || slug.includes('electropolish') || name.includes('electropolished')) {
    if (name.includes('fitting') || cat.includes('fitting')) {
      return 'Electropolished Pipe Fittings';
    }
    return 'Electropolished Pipes';
  }
  if (name.includes('elbow') || name.includes('tee') || name.includes('reducer') || name.includes('cap') || name.includes('stub end') || name.includes('bend') || name.includes('cross') || cat === 'ss fittings' || slug.includes('elbow') || slug.includes('bend') || slug.includes('fitting')) {
    return 'Buttweld Pipe Fittings';
  }
  if (cat.includes('forged') || name.includes('socket weld') || name.includes('threaded') || slug.includes('socket-weld') || slug.includes('threaded')) {
    return 'Forged Fittings';
  }
  if (cat.includes('pipe') || cat.includes('tube') || slug.includes('pipe') || slug.includes('tube') || name.includes('pipe') || name.includes('tube')) {
    return 'Stainless Steel Pipes & Tubes';
  }
  if (cat.includes('shim') || cat.includes('coil') || slug.includes('shim') || slug.includes('coil') || name.includes('plate') || name.includes('sheet') || name.includes('coil') || slug.includes('plate') || slug.includes('sheet')) {
    return 'Sheets, Plates & Coils';
  }

  return 'Other';
};
