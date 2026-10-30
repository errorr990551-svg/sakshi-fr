import sizes from '../data/imageSizes.json';

// Intrinsic width/height for images in /public, so the browser can reserve
// space before they load (prevents layout shift). CSS still sets display size.
export function imgSize(src) {
  const s = sizes[src] || sizes[decodeURI(src || '')];
  return s ? { width: s[0], height: s[1] } : {};
}
