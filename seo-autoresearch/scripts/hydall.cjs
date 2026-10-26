const {chromium}=require('playwright');const fs=require('fs');const urls=fs.readFileSync(process.argv[2],'utf8').trim().split('\n');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext();await ctx.route(/googletagmanager|clarity|google-analytics/,r=>r.abort());const bad={};
await Promise.all([0,1,2,3].map(async w=>{const p=await ctx.newPage();let cur;p.on('pageerror',e=>{(bad[cur]=bad[cur]||[]).push(e.message.slice(0,90))});
for(let i=w;i<urls.length;i+=4){cur=urls[i];try{await p.goto('http://localhost:4180'+cur,{waitUntil:'load'});await p.waitForTimeout(300)}catch(e){(bad[cur]=bad[cur]||[]).push('nav')}}}));
const k=Object.keys(bad);console.log('pages with JS errors:',k.length,'of',urls.length);k.slice(0,15).forEach(u=>console.log(u,bad[u][0]));await b.close()})();
