import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const p=await b.newPage(); await p.setCacheEnabled(false);
await p.setViewport({width:1440,height:1100,deviceScaleFactor:2});
const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,120)));
await p.goto('https://laplandgifts.com/fi/experiences/',{waitUntil:'networkidle0',timeout:90000});
await p.evaluate(()=>{try{localStorage.setItem('laplandgifts_cookie_consent','accepted')}catch(e){}});
await p.reload({waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,3000));
const d=await p.evaluate(()=>({
  kortteja:document.querySelectorAll('article').length,
  kuviaKorteissa:document.querySelectorAll('article img').length,
  rikki:[...document.querySelectorAll('article img')].filter(i=>i.naturalWidth===0).length,
  otsikot:[...document.querySelectorAll('article h3')].map(h=>h.textContent.trim().slice(0,34)),
}));
console.log(JSON.stringify(d,null,1)); console.log('virheet:',errs.length?errs.join('|'):'ei');
await p.screenshot({path:'../_shots/live-exp.png'});
await b.close();
