import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
for (const [u,w,h,o] of [
  ['http://localhost:4355/fi/handicrafts/',1440,1100,'../_shots/v4-handicrafts.png'],
  ['http://localhost:4355/fi/experiences/',1440,1100,'../_shots/v4-experiences.png'],
  ['http://localhost:4355/fi/product/marttiini-lapinleuku-255/',1440,1100,'../_shots/v4-details.png'],
  ['http://localhost:4355/fi/design/',390,844,'../_shots/v4-design-mob.png'],
]) {
  const p=await b.newPage(); await p.setViewport({width:w,height:h,deviceScaleFactor:2});
  await p.goto(u,{waitUntil:'networkidle0',timeout:90000});
  await p.evaluate(()=>{try{localStorage.setItem('laplandgifts_cookie_consent','accepted')}catch(e){}});
  await p.reload({waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,2500));
  const d=await p.evaluate(()=>({
    kortteja:document.querySelectorAll('a[href*="/product/"], article').length,
    brandit:[...new Set([...document.querySelectorAll('a[href*="/product/"] span')].map(s=>s.textContent.trim()).filter(t=>t&&t===t.toUpperCase()&&t.length<30))].slice(0,6),
    rikkinaisiaKuvia:[...document.querySelectorAll('img')].filter(i=>i.naturalWidth===0).length,
  }));
  await p.screenshot({path:o}); console.log(o.split('/').pop(), JSON.stringify(d)); await p.close();
}
await b.close();
