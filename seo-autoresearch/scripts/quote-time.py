#!/usr/bin/env python3
"""Change the quote-time promise from 24 hours to 30 minutes (owner decision, 28 Nov 2026: 30 minutes, 24x7).

Only hits near a quote/reply word change; technical "24 hours" (soak, hydrotest, operation) stay.
  python3 seo-autoresearch/scripts/quote-time.py --list    # print quote hits and other hits
  python3 seo-autoresearch/scripts/quote-time.py --write   # replace quote hits in place
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
FILES = [*ROOT.glob('frontend/src/data/*.js'), *ROOT.glob('frontend/src/data/*.json'),
         *ROOT.glob('frontend/src/components/*.jsx'), *ROOT.glob('frontend/src/*.js'),
         *ROOT.glob('frontend/public/city-content/*.json'), ROOT / 'frontend/public/llms.txt',
         ROOT / 'seo-autoresearch/scripts/catalogue-pdf.cjs']
SKIP = {'ClientsPage.jsx'}  # a customer's own words in a testimonial

HIT = re.compile(r'\b24(?:[ -](?:hours?|Hours?|hrs?|h)\b|-Hour\b)')
QUOTE = re.compile(r'quot|repl|respon|rfq|turnaround|revert|get back|offer|enquir|inquir|pric', re.I)
NOT_QUOTE = re.compile(r'hydro|soak|immers|\brins|\bwash|dwell|\bcur(?:e|ed|ing)\b|operation|continuous|round[- ]the[- ]clock|exposure|test duration|salt spray', re.I)
SWAP = {'24 hours': '30 minutes', '24 Hours': '30 Minutes', '24 hour': '30 minute', '24 Hour': '30 Minute',
        '24-hour': '30-minute', '24-Hour': '30-Minute', '24 hrs': '30 min', '24 hr': '30 min', '24 h': '30 min'}


def sentence(text, start, end):
    # the hit's own sentence (or JSON/JS string), at most 120 chars each side
    lo = max(0, start - 120)
    a = max([text.rfind(c, lo, start) for c in '.!?\n"`\''] + [lo - 1]) + 1
    ends = [i for i in (text.find(c, end, end + 120) for c in '.!?\n"`\'') if i != -1]
    return text[a:min(ends) if ends else end + 120]


def is_quote(text, start, end):
    near = sentence(text, start, end)
    return bool(QUOTE.search(near)) and not NOT_QUOTE.search(near)


def scan(write):
    quote = other = 0
    for f in FILES:
        if not f.exists() or f.name in SKIP:
            continue
        text = f.read_text(encoding='utf-8')
        def repl(m):
            nonlocal quote, other
            ctx = sentence(text, m.start(), m.end()).strip()
            if is_quote(text, m.start(), m.end()):
                quote += 1
                if not write:
                    print(f'Q {f.relative_to(ROOT)}: …{ctx}…')
                return SWAP[m.group(0)]
            other += 1
            print(f'O {f.relative_to(ROOT)}: …{ctx}…')
            return m.group(0)
        new = HIT.sub(repl, text)
        if write and new != text:
            f.write_text(new, encoding='utf-8')
    print(f'quote hits {quote} ({"replaced" if write else "would replace"}), other hits {other} (kept)', file=sys.stderr)


def _selftest():
    t = 'We quote within 24 hours. Hydrotest held 24 hours.'
    hits = [(m.group(0), is_quote(t, m.start(), m.end())) for m in HIT.finditer(t)]
    assert hits == [('24 hours', True), ('24 hours', False)], hits
    assert is_quote('{"a": "procurement gets a 24-hour quote"}', 25, 32)


if __name__ == '__main__':
    _selftest()
    if sys.argv[1:] not in (['--list'], ['--write']):
        sys.exit(__doc__)
    scan(sys.argv[1] == '--write')
