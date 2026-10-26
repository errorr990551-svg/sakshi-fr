import fs from 'fs'; import path from 'path';
const dist = process.argv[2]; const SITE='https://steelmanufacturer.in';
const pages=[]; (function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);const s=fs.statSync(p);if(s.isDirectory()){if(f!=='server'&&f!=='assets')walk(p)}else if(f==='index.html')pages.push(p)}})(dist);
const route=p=>'/'+path.relative(dist,path.dirname(p)).split(path.sep).filter(Boolean).join('/')+(path.dirname(p)===dist?'':'/');
const exists=new Set(pages.map(route));
const issues={}; const add=(k,v)=>(issues[k]??=[]).push(v);
const titles={},descs={};
for(const p of pages){const r=route(p);const h=fs.readFileSync(p,'utf8');
 const head=h.split('</head>')[0];
 const t=[...head.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/g)].map(m=>m[1]);
 if(t.length!==1)add('title count != 1',`${r} (${t.length})`);
 const title=t[t.length-1]||''; (titles[title]??=[]).push(r);
 if(title.length>65)add('title > 65 chars',`${r} (${title.length})`);
 const d=[...h.matchAll(/<meta name="description" content="[^"]*"[^>]*>/g)];
 if(d.length!==1)add('meta description count != 1',`${r} (${d.length})`);
 const dc=(d[d.length-1]?.[0].match(/content="([^"]*)"/)||[])[1]||''; (descs[dc]??=[]).push(r);
 if(dc.length<70||dc.length>165)add('description length out of 70-165',`${r} (${dc.length})`);
 const c=[...h.matchAll(/<link[^>]+rel="canonical"[^>]*>/g)].map(m=>(m[0].match(/href="([^"]*)"/)||[])[1]);
 if(c.length!==1)add('canonical count != 1',`${r} (${c.length}: ${c.join(' | ')})`);
 if(c.length && c[c.length-1]!==SITE+r)add('canonical != self URL',`${r} -> ${c[c.length-1]}`);
 const h1=(h.match(/<h1[\s>]/g)||[]).length; if(h1!==1)add('h1 count != 1',`${r} (${h1})`);
 if(/name="robots"[^>]*noindex/.test(h))add('noindex',r);
 for(const m of h.matchAll(/<img\b[^>]*>/g)){if(!/\balt="[^"]+"/.test(m[0]))add('img missing alt',r);if(!/\bwidth=/.test(m[0]))add('img missing width',r)}
 for(const m of h.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)){const u=m[1];if(/\.[a-z0-9]{2,5}$/i.test(u))continue;
  if(!u.endsWith('/'))add('internal link w/o trailing slash',`${r} -> ${u}`);
  else if(!exists.has(u))add('internal link to non-prerendered page',`${r} -> ${u}`)}
 for(const m of h.matchAll(/href="(http:\/\/steelmanufacturer[^"]*)"/g))add('http:// self link',`${r} -> ${m[1]}`);
}
for(const[k,v]of Object.entries(titles))if(v.length>1)add('duplicate title',`${v.length}x "${k.slice(0,60)}" e.g. ${v.slice(0,3).join(', ')}`);
for(const[k,v]of Object.entries(descs))if(v.length>1)add('duplicate description',`${v.length}x e.g. ${v.slice(0,3).join(', ')}`);
// sitemap
const locs=[];for(const f of fs.readdirSync(dist).filter(f=>/sitemap.*\.xml$/.test(f))){const x=fs.readFileSync(path.join(dist,f),'utf8');for(const m of x.matchAll(/<loc>([^<]+)<\/loc>/g))locs.push([f,m[1]])}
const smSet=new Set();
for(const[f,l]of locs){if(l.endsWith('.xml'))continue; if(f==='image-sitemap.xml'&&/\.(webp|png|jpe?g)/i.test(l))continue;
 if(!l.startsWith(SITE+'/'))add('sitemap non-canonical host',`${f}: ${l}`);
 const p=l.replace(SITE,''); if(!p.endsWith('/'))add('sitemap URL w/o slash',`${f}: ${l}`); else if(!exists.has(p))add('sitemap URL not prerendered (404)',`${f}: ${l}`);
 if(smSet.has(l))add('sitemap duplicate loc',`${f}: ${l}`); smSet.add(l)}
for(const r of exists)if(!smSet.has(SITE+r))add('prerendered page missing from sitemaps',r);
console.log('pages',pages.length,'sitemap locs',locs.length);
for(const[k,v]of Object.entries(issues)){console.log(`\n### ${k}: ${v.length}`);[...new Set(v)].slice(0,12).forEach(x=>console.log('  '+x))}
