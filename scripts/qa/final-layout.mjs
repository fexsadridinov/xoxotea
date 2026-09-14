import fs from 'node:fs';import cp from 'node:child_process';import assert from 'node:assert/strict';import {chromium} from 'playwright';import AxeBuilder from '@axe-core/playwright';
const server=cp.spawn('node',['scripts/qa/server.cjs','out','4179'],{stdio:'ignore'});await new Promise(r=>setTimeout(r,600));
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,args:['--no-sandbox','--disable-dev-shm-usage']});const results=[];
try{
 for(const width of [360,390,430,768,1024,1440,1920]){
  const context=await browser.newContext({viewport:{width,height:width<768?844:900}});const page=await context.newPage();
  for(const locale of ['uk','ru','en'])for(const view of ['','menu','investors']){
   const path=(locale==='uk'?'':`/${locale}`)+'/'+(view?view+'/':'');await page.goto('http://127.0.0.1:4179'+path);await page.evaluate(()=>document.fonts.ready);
   const layout=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,headerOverlap:document.querySelector('.wordmark').getBoundingClientRect().right>document.querySelector('.topbar nav').getBoundingClientRect().left,heading:[...document.querySelectorAll('h1')].filter(e=>!e.classList.contains('sr-only')).some(e=>e.scrollWidth>e.clientWidth+2)}));assert.deepEqual(layout,{overflow:false,headerOverlap:false,heading:false});
   if(!view&&[390,1440].includes(width)&&locale!=='en')for(const id of ['thesis','product','market','economics','scale','terms','contact']){await page.locator('#'+id).evaluate(e=>scrollTo({top:e.getBoundingClientRect().top+scrollY-80,behavior:'instant'}));await page.waitForTimeout(600);await page.screenshot({path:`audit/screenshots/${locale==='ru'?'ru-':''}${width}-${id}.jpg`,type:'jpeg',quality:85});}
   let violations=null;if([390,1440].includes(width)){const a=await new AxeBuilder({page}).analyze();violations=a.violations.map(v=>({id:v.id,targets:v.nodes.map(n=>n.target)}));assert.equal(violations.length,0,JSON.stringify(violations));}
   results.push({width,locale,view:view||'home',...layout,violations});
  }await context.close();console.log(`Final header/layout ${width}px passed`);
 }
 fs.writeFileSync('audit/final-layout.json',JSON.stringify({testedAt:new Date().toISOString(),results},null,2));
}finally{await browser.close();server.kill();}
