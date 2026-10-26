import re,os,itertools,collections,json,sys
def toks(p):
    h=open(p).read().split('<div id="root">',1)[-1]
    w=re.sub(r'<[^>]+>',' ',re.sub(r'<script[\s\S]*?</script>|<header[\s\S]*?</header>|<footer[\s\S]*?</footer>|<nav[\s\S]*?</nav>','',h)).lower().split()
    return w
pages={d:toks(f'dist/market-area/{d}/index.html') for d in os.listdir('dist/market-area') if os.path.isfile(f'dist/market-area/{d}/index.html')}
sh={k:set(tuple(v[i:i+5]) for i in range(len(v)-4)) for k,v in pages.items()}
best={}
for a,b in itertools.combinations(sh,2):
    A,B=sh[a],sh[b]
    if not A or not B: continue
    j=len(A&B)/len(A|B)
    if j>best.get(a,(0,))[0]: best[a]=(j,b)
    if j>best.get(b,(0,))[0]: best[b]=(j,a)
bins=collections.Counter('>=90%' if j>=.9 else '70-90%' if j>=.7 else '50-70%' if j>=.5 else '30-50%' if j>=.3 else '<30%' for j,_ in best.values())
wc=sorted(len(v) for v in pages.values())
print('pages',len(pages),dict(bins),'words min/median/max',wc[0],wc[len(wc)//2],wc[-1])
for k,(j,b) in sorted(best.items(),key=lambda x:-x[1][0])[:int(sys.argv[1]) if len(sys.argv)>1 else 6]: print(f'  {k} ~ {b}: {j:.0%}')
json.dump({k:[round(j,3),b] for k,(j,b) in best.items()},open('seo-autoresearch/citysim.json','w'))
