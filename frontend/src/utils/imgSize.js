import sizes from '../data/imageSizes.json';
import variants from '../data/imageVariants.json';

// Intrinsic width/height for images in /public, so the browser can reserve
// space before they load (prevents layout shift). CSS still sets display size.
// Large images also get a srcset of the smaller copies made by scripts/responsive_images.py:
// Chromium picks by the rendered width (sizes=auto, lazy images); other browsers use the
// fallback, which keeps the full image on desktop.
export function imgSize(src) {
  let key = src || '';
  if (!sizes[key]) {
    try { key = decodeURI(key); } catch { return {}; }
  }
  const s = sizes[key];
  if (!s) return {};
  const widths = variants[key];
  if (!widths) return { width: s[0], height: s[1] };
  const url = (path) => encodeURI(path).replace(/,/g, '%2C'); // commas separate srcset entries
  const srcSet = widths.map((w) => `${url(`/w${w}${key}`)} ${w}w`).concat(`${url(key)} ${s[0]}w`).join(', ');
  return { width: s[0], height: s[1], srcSet, sizes: 'auto, (max-width: 768px) 92vw, 100vw' };
}

// Only the srcset/sizes part, for images whose width/height are set elsewhere
export function responsiveImg(src) {
  const { srcSet, sizes: imgSizes } = imgSize(src);
  return srcSet ? { srcSet, sizes: imgSizes } : {};
}
