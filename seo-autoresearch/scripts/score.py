# Usage (from frontend/): python3 ../seo-autoresearch/scripts/score.py /market-area/agra/ /electropolished-tubes/ ...
# For each path: nearest-neighbour 5-shingle Jaccard overlap against every other prerendered page
# of the same kind (market-area pages vs market-area, others vs non-market-area), plus body word count.
# Lower overlap = more unique. Prints TSV: path, overlap, nearest, words.
import re, os, sys
def toks(p):
    h = open(p).read().split('<div id="root">', 1)[-1]
    h = re.sub(r'<script[\s\S]*?</script>|<header[\s\S]*?</header>|<footer[\s\S]*?</footer>|<nav[\s\S]*?</nav>', '', h)
    return re.sub(r'<[^>]+>', ' ', h).lower().split()
def sh(w): return set(tuple(w[i:i+5]) for i in range(len(w) - 4))
pages = {}
for r, _, fs in os.walk('dist'):
    if 'index.html' in fs and '/server' not in r and '/assets' not in r:
        pages['/' + os.path.relpath(r, 'dist').strip('.') .strip('/') + '/'] = os.path.join(r, 'index.html')
pages = {k.replace('//', '/'): v for k, v in pages.items()}
cache = {}
def S(k):
    if k not in cache: cache[k] = sh(toks(pages[k]))
    return cache[k]
for p in sys.argv[1:]:
    if p not in pages: print(f'{p}\tNOPAGE\t-\t-'); continue
    city = p.startswith('/market-area/')
    A = S(p); best = (0, '-')
    for k in pages:
        if k == p or k.startswith('/market-area/') != city: continue
        B = S(k)
        if A and B:
            j = len(A & B) / len(A | B)
            if j > best[0]: best = (j, k)
    print(f'{p}\t{best[0]:.3f}\t{best[1]}\t{len(toks(pages[p]))}')
