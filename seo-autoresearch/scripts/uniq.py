"""Own-text share per page: how much of a page's main content appears on no other sitemap page.

Main content = the text between </header> and <footer class="footer-sec"> (nav, footer, scripts removed),
split into 5-word shingles. own % = shingles found on this page only. Low own % = mostly shared template text.

Usage (from the repo root, after `npm run build`):
  python3 seo-autoresearch/scripts/uniq.py                         # group summary
  python3 seo-autoresearch/scripts/uniq.py --out baseline.tsv      # also write one row per page
  python3 seo-autoresearch/scripts/uniq.py --compare baseline.tsv  # group medians and changed pages vs a saved run
  python3 seo-autoresearch/scripts/uniq.py --paths /electropolished-tubes/ /sanitary-hygienic-ep-pipes/
                                                                   # per page: own %, in-links, pages sharing its text
"""
import argparse, html, json, os, re, statistics as st
from collections import defaultdict

B = 'https://steelmanufacturer.in'
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'frontend')
COUNTRY = {c['path'].rstrip('/') + '/': c['country']
           for c in json.load(open(os.path.join(ROOT, 'src/data/market_cities.json'), encoding='utf-8'))}
PRODUCT_DIRS = ('/flanges/', '/forged-fittings/', '/buttweld-fittings/', '/seamless-pipes/', '/stainless-steel-pipes/',
                '/round-bars/', '/dairy-fittings/', '/fasteners/')
PRODUCT_SLUGS = {p['URL Slug'].strip('/')
                 for p in json.load(open(os.path.join(ROOT, 'src/data/products.json'), encoding='utf-8'))}


def group(path):
    if path.startswith('/market-area/'):
        return {'India': 'city-india'}.get(COUNTRY.get(path), 'city-foreign' if path in COUNTRY else 'city-hub')
    if path in ('/tamil-nadu/', '/karnataka/'): return 'city-hub'
    if path.startswith('/electropolished-pipe-fittings/'): return 'ep-fittings'
    if path.startswith('/blog/'): return 'blog'
    if re.match(r'/industries/.+-electropolished-pipes/$', path): return 'ep-industry'
    if path.startswith('/resources/') or re.search(r'electropolish|(^|[-/])ep[-/]|high-purity|asme-bpe|en-10204', path):
        return 'ep-pipe-tube'
    top = path.strip('/').split('/')
    if top[-1] in PRODUCT_SLUGS or (path.startswith(PRODUCT_DIRS) and len(top) == 2): return 'product'
    return 'hub-static'


def selftest():
    for p, g in [('/market-area/pune/', 'city-india'), ('/market-area/', 'city-hub'), ('/market-area/gujarat/', 'city-hub'),
                 ('/electropolished-pipe-fittings/ep-elbow/', 'ep-fittings'), ('/electropolished-tubes/', 'ep-pipe-tube'),
                 ('/ultra-high-purity-ep-tubes/', 'ep-pipe-tube'), ('/resources/', 'ep-pipe-tube'),
                 ('/industries/dairy-electropolished-pipes/', 'ep-industry'), ('/industries/', 'hub-static'),
                 ('/flanges/alloy-20-flange/', 'product'), ('/flanges/', 'hub-static'), ('/stainless-steel-tee/', 'product'),
                 ('/blog/pipe-schedule/', 'blog'), ('/about-us/', 'hub-static')]:
        assert group(p) == g, (p, group(p), g)
    assert any(c != 'India' for c in COUNTRY.values()), 'market_cities.json has no foreign cities?'


def norm(h):
    h = h.split('#')[0].split('?')[0]
    if h.startswith(B): h = h[len(B):]
    if not h.startswith('/') or h.startswith('//'): return None
    return h if re.search(r'\.[a-z0-9]{2,5}$', h) or h.endswith('/') else h + '/'


def load(dist):
    paths = []
    for f in ('sitemap.xml', 'sitemap-cities.xml'):
        paths += [u[len(B):] or '/' for u in re.findall(r'<loc>([^<]+)</loc>', open(os.path.join(dist, f), encoding='utf-8').read())]
    words, links_main, links_all = {}, defaultdict(set), defaultdict(set)
    for p in paths:
        f = os.path.join(dist, p.strip('/'), 'index.html')
        if not os.path.exists(f): continue
        body = re.sub(r'(?is)<(script|style|noscript)[^>]*>.*?</\1>', ' ', open(f, encoding='utf-8', errors='ignore').read())
        a, b = body.find('</header>'), body.find('<footer class="footer-sec"')
        main = body[a:b] if 0 < a < b else body
        for h in re.findall(r'href="([^"]+)"', main):
            n = norm(h)
            if n and n != p: links_main[n].add(p)
        for h in re.findall(r'href="([^"]+)"', body):
            n = norm(h)
            if n and n != p: links_all[n].add(p)
        words[p] = re.findall(r"[a-z0-9]+(?:[.'-][a-z0-9]+)*", html.unescape(re.sub(r'<[^>]+>', ' ', main)).lower())
    return paths, words, links_main, links_all


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dist', default=os.path.join(ROOT, 'dist'))
    ap.add_argument('--out'); ap.add_argument('--compare'); ap.add_argument('--paths', nargs='*', default=[])
    a = ap.parse_args()
    selftest()
    paths, words, lm, la = load(a.dist)
    sh = {p: {hash(' '.join(w[i:i + 5])) for i in range(max(0, len(w) - 4))} for p, w in words.items()}
    df = defaultdict(int)
    for s in sh.values():
        for x in s: df[x] += 1
    own = {p: (sum(df[x] == 1 for x in s) / len(s) if s else 0.0) for p, s in sh.items()}
    rows = {p: (group(p), len(words[p]), round(100 * own[p]), len(lm[p]), len(la[p])) for p in words}
    print(f'pages analysed: {len(rows)} of {len(paths)} sitemap URLs (missing in dist: {len(paths) - len(rows)})')
    old = {}
    if a.compare:
        for line in open(a.compare, encoding='utf-8').read().splitlines()[1:]:
            c = line.split('\t'); old[c[0]] = (c[1], int(c[2]), int(c[3]), int(c[4]), int(c[5]))
    print(f'{"group":14s} {"n":>4s} {"words":>6s} {"own%":>5s} {"<20%":>5s} {"links":>5s}' + ('   own% before' if old else ''))
    for g in sorted({r[0] for r in rows.values()}) + ['ALL']:
        rs = [r for p, r in rows.items() if g in ('ALL', r[0])]
        line = (f'{g:14s} {len(rs):4d} {st.median(r[1] for r in rs):6.0f} {st.median(r[2] for r in rs):5.0f} '
                f'{sum(r[2] < 20 for r in rs):5d} {st.median(r[3] for r in rs):5.0f}')
        olds = [r for r in old.values() if g in ('ALL', r[0])]
        print(line + (f'   {st.median(r[2] for r in olds):5.0f}' if olds else ''))
    print('(words, own% and content in-links are medians; "<20%" counts pages)')
    if old:
        moved = sorted((rows[p][2] - old[p][2], p) for p in rows if p in old and rows[p][2] != old[p][2])
        print(f'\npages whose own% changed: {len(moved)}; new pages: {sorted(set(rows) - set(old))}; gone: {sorted(set(old) - set(rows))}')
        for d, p in moved: print(f'  {d:+4d}  {old[p][2]:3d}% -> {rows[p][2]:3d}%  {p}')
    for p in a.paths:
        if p not in sh: print(f'\n{p}: not in sitemap/dist'); continue
        s = sh[p]
        sims = sorted(((len(s & sh[q]) / len(s), q) for q in sh if q != p and s), reverse=True)[:5]
        g, w, o, n1, n2 = rows[p]
        print(f'\n{p} [{g}] words {w}, own {o}%, in-links content {n1} / all {n2}')
        print('  content links from: ' + (', '.join(sorted(lm[p])[:12]) or 'none'))
        print('  shares text with:   ' + '; '.join(f'{q} {r:.0%}' for r, q in sims))
    if a.out:
        with open(a.out, 'w', encoding='utf-8') as f:
            f.write('path\tgroup\twords\town_pct\tinlinks_content\tinlinks_all\n')
            for p in sorted(rows): f.write(p + '\t' + '\t'.join(map(str, rows[p])) + '\n')
        print(f'\nwrote {a.out}')


if __name__ == '__main__':
    main()
