import fs from 'node:fs';
import cp from 'node:child_process';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const server = cp.spawn('node', ['scripts/qa/server.cjs', 'out', '4175']);
const base = 'http://127.0.0.1:4175';
for (let i = 0; i < 30; i++) {
  try { await fetch(base); break; } catch { await new Promise(r => setTimeout(r, 100)); }
}
const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH, args:['--no-sandbox','--disable-dev-shm-usage']});
fs.mkdirSync('audit/screenshots', {recursive:true});
const results = [];
try {
  for (const width of [360,390,430,768,1024,1440,1920]) {
    const context = await browser.newContext({viewport:{width,height:width < 768 ? 844 : 900},isMobile:width < 768,hasTouch:width < 768});
    const page = await context.newPage();
    for (const route of ['/', '/en/', '/menu/', '/en/menu/', '/investors/', '/en/investors/', '/ru/', '/ru/menu/', '/ru/investors/']) {
      const errors=[];const handler=e=>errors.push(e.message);page.on('pageerror',handler);
      await page.goto(base+route);
      await page.evaluate(()=>document.fonts.ready);
      const sections = await page.locator('main > section').evaluateAll(es=>es.map(e=>e.id));
      const overflow=[];
      for (const id of sections) {
        await page.locator('#'+id).evaluate(e=>window.scrollTo({top:e.getBoundingClientRect().top+scrollY-80,behavior:'instant'}));
        await page.waitForTimeout(650);
        const flags = await page.evaluate(()=>[...document.querySelectorAll('h1,h2,h3,p,dt,dd,label,button')].filter(e=>e.getBoundingClientRect().width>0&&!e.closest('.honey,.sr-only')&&e.scrollWidth>e.clientWidth+2).map(e=>({tag:e.tagName,text:e.textContent.slice(0,80),width:e.clientWidth,scroll:e.scrollWidth})));
        overflow.push(...flags);
        if (['/','/ru/'].includes(route) && [390,1440].includes(width)) await page.screenshot({path:`audit/screenshots/${route==='/ru/'?'ru-':''}${width}-${id}.jpg`,type:'jpeg',quality:85});
      }
      const layout=await page.evaluate(()=>({documentWidth:document.documentElement.scrollWidth,width:innerWidth,lang:document.documentElement.lang}));
      const axe = [390,1440].includes(width) ? await new AxeBuilder({page}).analyze() : null;
      results.push({width,route,...layout,overflow:[...new Map(overflow.map(x=>[x.text,x])).values()],errors,violations:axe?.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))??null});
      page.off('pageerror',handler);
    }
    await context.close();
    console.log(`Completed ${width}px`);
  }
  const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  await page.goto(base);await page.locator('#economics').scrollIntoViewIfNeeded();
  const reduced=await page.evaluate(()=>({preference:document.documentElement.dataset.reduced,pin:getComputedStyle(document.querySelector('.economics-pin')).position,canvas:getComputedStyle(document.querySelector('canvas')).display,animations:document.getAnimations().length}));
  await page.screenshot({path:'audit/screenshots/390-reduced-motion.jpg',type:'jpeg',quality:85});
  fs.writeFileSync('audit/responsive.json',JSON.stringify({testedAt:new Date().toISOString(),environment:'Chromium emulated viewports; not physical hardware',results,reduced},null,2));
  console.log(JSON.stringify({cases:results.length,failures:results.filter(x=>x.documentWidth>x.width||x.overflow.length||x.errors.length||x.violations?.length),reduced}));
} finally { await browser.close();server.kill(); }
