"""Smaller copies of the large .webp images in public/, for <img srcset>.

Writes public/w400/<path> and public/w800/<path> for images wider than the copy, and
src/data/imageVariants.json ({"/<path>": [400, 800]}) which utils/imgSize.js reads.
Run after adding or replacing images in public/ and commit the output (the deploy build
does not run it):  python3 scripts/responsive_images.py
"""
import json
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, 'public')
WIDTHS = (400, 800)
variants = {}

for dirpath, dirnames, filenames in os.walk(PUBLIC):
    rel_dir = os.path.relpath(dirpath, PUBLIC)
    if rel_dir.split(os.sep)[0] in {f'w{w}' for w in WIDTHS}:
        continue
    for name in filenames:
        if not name.endswith('.webp'):
            continue
        src = os.path.join(dirpath, name)
        rel = os.path.relpath(src, PUBLIC).replace(os.sep, '/')
        with Image.open(src) as im:
            made = []
            for w in WIDTHS:
                if im.width <= w * 1.2:
                    continue
                out = os.path.join(PUBLIC, f'w{w}', rel)
                if not os.path.exists(out) or os.path.getmtime(out) < os.path.getmtime(src):
                    os.makedirs(os.path.dirname(out), exist_ok=True)
                    im.resize((w, round(im.height * w / im.width)), Image.LANCZOS).save(out, 'WEBP', quality=80, method=6)
                made.append(w)
            if made:
                variants['/' + rel] = made

with open(os.path.join(ROOT, 'src/data/imageVariants.json'), 'w') as f:
    json.dump(dict(sorted(variants.items())), f, indent=0, ensure_ascii=False)
print(f'{len(variants)} images have smaller copies')
