# Usage (from frontend/): python3 ../seo-autoresearch/scripts/quality.py <slug> [<slug> ...]
# Hard quality gate for public/city-content/<slug>.json. Exit 1 if any page fails.
# Guide text in any data file: python3 ../seo-autoresearch/scripts/quality.py --text FILE [FILE ...]
#   lists filler phrases and forbidden claims with file:line. Exit 1 if any are found.
import json, re, sys, os, glob
FILLER = ['leading manufacturer', 'one-stop', 'top-notch', 'world-class', 'unmatched', 'best quality',
          'cutting-edge', 'state-of-the-art', 'second to none', 'unparalleled', 'look no further',
          'in today\'s', 'ever-evolving', 'plays a crucial role', 'it is important to note', 'delve',
          'trusted partner', 'wide range of', 'highest quality', 'premium quality']
BANNED_FACTS = [r'\b\d+\s*[-–]\s*\d+\s*(?:day|week)s?\b', r'\bin stock\b', r'\bMOQ\b', r'\bminimum order\b',
                r'\bour (?:client|customer)s? (?:include|in)\b', r'\bwarehouse in\b', r'\boffice in\b']
# Never allowed, even next to "confirmed": a price for goods, price claims, a factory location, ratings or reviews
NEVER = [r'(?:₹|\bRs\.?|\bINR)\s?[\d,.]+\s*(?:/-?\s*|per\s+)(?:kg|kilo|kilogram|metre|meter|mtr|m|piece|pc|pcs|nos|length|tonne|ton|unit)\b',
         r'\b(?:better|best|lowest|cheapest|competitive)\s+(?:price|pricing|rate)s?\b',
         r'\b(?:our|we|sakshi forge)\b[^.]{0,60}\btaloja\b', r'\bour (?:factory|plant|works|mill|facility|manufacturing unit)s? (?:in|at)\b',
         r'\b\d(?:\.\d)?\s*(?:out of 5|/\s*5)\s*(?:stars?|rating)\b|\b\d(?:\.\d)?\s*stars?\b|\b\d+\+?\s*(?:reviews|testimonials)\b']
def claims(text):
    """Filler phrases, unconfirmed company facts and never-allowed claims in text."""
    out = [f'filler phrase: "{f}"' for f in FILLER if f in text.lower()]
    for p in BANNED_FACTS:
        m = re.search(p, text, re.I)
        if m and 'confirm' not in text[max(0, m.start()-80):m.end()+80]: out.append(f'unconfirmed company fact: "{m.group(0)}"')
    out += [f'forbidden claim: "{m.group(0)}"' for p in NEVER for m in re.finditer(p, text, re.I)]
    return out
if sys.argv[1:2] == ['--text']:
    n = 0
    for f in sys.argv[2:]:
        for i, line in enumerate(open(f, encoding='utf-8'), 1):
            for h in claims(line): print(f'{f}:{i}: {h}'); n += 1
    print(f'{n} problem(s) in {len(sys.argv) - 2} file(s)')
    sys.exit(1 if n else 0)
def sents(d):
    for s in d['sections']:
        for t in s.get('paragraphs', []) + s.get('bullets', []):
            for x in re.split(r'(?<=[.!?])\s+', t):
                if len(x.split()) >= 8: yield x.strip().lower()
others = {}
for f in glob.glob('public/city-content/*.json'):
    sl = os.path.basename(f)[:-5]
    others[sl] = set(sents(json.load(open(f))))
bad = 0
for slug in sys.argv[1:]:
    d = json.load(open(f'public/city-content/{slug}.json')); errs = []
    text = ' '.join(t for s in d['sections'] for t in s.get('paragraphs', []) + s.get('bullets', []))
    words = len(text.split())
    if words < 450: errs.append(f'only {words} words (min 450)')
    if not 4 <= len(d['sections']) <= 7: errs.append(f'{len(d["sections"])} sections (need 4-7)')
    srcs = [s['url'] for s in d.get('sources', [])]
    if len(set(re.sub(r'^https?://(www\.)?', '', u).split('/')[0] for u in srcs)) < 2: errs.append('fewer than 2 independent source domains')
    errs += claims(text)
    toks = [t for t in slug.split('-') if len(t) > 3]
    if not any(any(t in s['heading'].lower() for t in toks) for s in d['sections']): errs.append('no heading names the place')
    mine = set(sents(d))
    for o, S in others.items():
        if o != slug:
            shared = mine & S
            if len(shared) > 2: errs.append(f'{len(shared)} sentences copied from {o}.json')
    for s in d['sections']:
        for p in s.get('paragraphs', []):
            if 0 < len(p.split()) < 15 and not s.get('links'): errs.append(f'thin paragraph in "{s["heading"]}"')
    print(('FAIL ' if errs else 'PASS ') + slug + (': ' + '; '.join(errs) if errs else f' ({words} words, {len(srcs)} sources)'))
    bad += bool(errs)
sys.exit(1 if bad else 0)
