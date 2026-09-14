import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const p=await b.newPage(); await p.setViewport({width:1440,height:1100});
await p.goto('http://localhost:4344/fi/handicrafts/',{waitUntil:'networkidle0',timeout:90000});
await new Promise(r=>setTimeout(r,2500));
console.log(JSON.stringify(await p.evaluate(()=>[...document.querySelectorAll('img')].filter(i=>i.naturalWidth===0).map(i=>({src:i.currentSrc||i.src, alt:i.alt.slice(0,30)}))),null,1));
await b.close();
