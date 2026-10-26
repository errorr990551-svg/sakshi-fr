import re,os,json,html,collections
bad=collections.Counter(); ex={}; tot=pages=0
for r,_,fs in os.walk('dist'):
    if 'index.html' not in fs: continue
    h=open(os.path.join(r,'index.html')).read()
    head,_,body=h.partition('<div id="root">')
    btxt=re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',re.sub(r'<script[\s\S]*?</script>','',body))))
    for m in re.findall(r'<script type="application/ld\+json"[^>]*>([\s\S]*?)</script>',h):
        try: j=json.loads(m)
        except: continue
        for n in j.get('@graph',[j]):
            if n.get('@type')=='FAQPage':
                pages+=1
                for q in n.get('mainEntity',[]):
                    a=re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',q['acceptedAnswer']['text']))).strip()[:80]
                    tot+=1
                    if a not in btxt:
                        k=r.split('/')[1] if '/' in r else r; bad[k]+=1; ex.setdefault(k,(r,a[:60]))
print('pages with FAQ schema',pages,'answers',tot,'answers missing from visible HTML',sum(bad.values()))
for k,v in bad.most_common(10): print(' ',v,k,ex[k])
