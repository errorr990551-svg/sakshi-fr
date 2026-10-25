const http=require('http'),fs=require('fs'),path=require('path'),zlib=require('zlib');const root=process.argv[2];const port=+process.argv[3]||4173;
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.svg':'image/svg+xml','.xml':'application/xml','.png':'image/png','.json':'application/json','.mp4':'video/mp4','.avif':'image/avif'};
http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);let f=path.join(root,p);
 if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');
 let code=200; if(!fs.existsSync(f)){code=404;f=path.join(root,'404.html')}
 const t=types[path.extname(f)]||'application/octet-stream';const h={'content-type':t};
 if(/text|javascript|json|svg|xml/.test(t)){h['content-encoding']='gzip';r.writeHead(code,h);return fs.createReadStream(f).pipe(zlib.createGzip()).pipe(r)}
 r.writeHead(code,h);fs.createReadStream(f).pipe(r)}).listen(port);
