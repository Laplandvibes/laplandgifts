import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
for (const [u,w,h,o] of [
  ['https://laplandgifts.com/fi/',1440,1200,'../_shots/pub-home.png'],
  ['https://laplandgifts.com/fi/gift-guides/',1440,1200,'../_shots/pub-guides.png'],
  ['https://laplandgifts.com/fi/gift-guides/',390,900,'../_shots/pub-guides-mob.png'],
]) {
  const p=await b.newPage(); await p.setCacheEnabled(false);
  await p.setViewport({width:w,height:h,deviceScaleFactor:2});
  const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,110)));
  await p.goto(u,{waitUntil:'networkidle0',timeout:90000});
  await p.evaluate(()=>{try{localStorage.setItem('laplandgifts_cookie_consent','accepted')}catch(e){}});
  await p.reload({waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,3000));
  const d=await p.evaluate(()=>({
    jarjestys:[...document.querySelectorAll('main > *')].slice(0,4).map(e=>e.id||e.tagName.toLowerCase()).join(' > '),
    kortteja:document.querySelectorAll('a[href*="/product/"]').length,
    rikki:[...document.querySelectorAll('img')].filter(i=>i.naturalWidth===0&&i.loading!=='lazy').length,
    scroll:document.documentElement.scrollWidth>window.innerWidth+1,
  }));
  await p.screenshot({path:o});
  console.log(`${o.split('/').pop()} ${JSON.stringify(d)} virheet:${errs.length||'ei'}`);
  await p.close();
}
await b.close();
