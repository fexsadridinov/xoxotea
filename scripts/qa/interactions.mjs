import fs from 'node:fs';
import cp from 'node:child_process';
import zlib from 'node:zlib';
import {chromium} from 'playwright';

const server=cp.spawn('node',['scripts/qa/server.cjs','out','4176']);
const base='http://127.0.0.1:4176';
for(let i=0;i<30;i++){try{await fetch(base);break;}catch{await new Promise(r=>setTimeout(r,100));}}
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,args:['--no-sandbox','--disable-dev-shm-usage']});
const results=[];
try{
 for(const width of [390,1440]){
  const context=await browser.newContext({viewport:{width,height:900},isMobile:width<768,hasTouch:width<768});
  const page=await context.newPage();const scripts=new Set();
  page.on('response',r=>{if(new URL(r.url()).pathname.endsWith('.js'))scripts.add(new URL(r.url()).pathname);});
  await page.goto(base);await page.waitForTimeout(400);
  const at=async(selector,fraction=0)=>{await page.locator(selector).evaluate((e,f)=>scrollTo({top:e.getBoundingClientRect().top+scrollY-100+f*Math.max(1,e.clientHeight-innerHeight),behavior:'instant'}),fraction);await page.waitForTimeout(100);};
  await at('[data-cup-stage]');
  const parallax=await page.locator('[data-depth]').evaluateAll(es=>es.map(e=>e.style.transform));
  const progress=await page.locator('.top-progress i').evaluate(e=>e.style.transform);
  await at('.gallery');await page.locator('.gallery').evaluate(e=>e.scrollTo({left:e.scrollWidth,behavior:'instant'}));await page.waitForTimeout(200);
  const gallery=await page.locator('[data-gallery-index]').innerText();
  const cycle=[];
  for(const f of [0,.6,.99]){await at('[data-economics]',f);cycle.push(await page.locator('.scenario-tabs [aria-pressed=true]').innerText());}
  await page.locator('.scenario-tabs button').nth(1).click();
  const conservative=await page.locator('[data-ebitda]').innerText();
  await page.locator('#rent').evaluate(e=>{e.focus();});await page.keyboard.press('ArrowRight');
  const changed=await page.locator('[data-ebitda]').innerText();
  await page.locator('.currency button').nth(1).click();const usd=await page.locator('[data-ebitda]').innerText();
  await at('#contact');
  await page.locator('input[name=name]').fill('Audit Example');
  await page.locator('input[name=contact]').fill('bad-contact');await page.locator('input[name=consent]').check();await page.locator('button.cta').click();
  const invalid=await page.locator('#contact-error').count();
  await page.locator('input[name=contact]').fill('audit@example.invalid');
  const downloaded=page.waitForEvent('download');await page.locator('button.cta').click();await downloaded;
  const fallback=await page.locator('.confirmation').innerText();
  await page.locator('.confirmation button').click();
  const press=await page.locator('.magnet').last().evaluate(e=>{e.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,pointerType:'touch'}));const value=e.style.transform;e.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,pointerType:'touch'}));return value;});
  await page.waitForTimeout(350);
  const gzipJs=[...scripts].reduce((sum,path)=>sum+zlib.gzipSync(fs.readFileSync('out'+path)).length,0);
  await page.locator('header nav a').first().click();await page.waitForURL('**/menu/');await page.waitForTimeout(500);
  const transition=await page.locator('.page-wipe').evaluate(e=>getComputedStyle(e).visibility);
  results.push({width,parallax,progress,gallery,cycle,conservative,changed,usd,invalid,fallback,press,gzipJs,transition});
  await context.close();
 }
 fs.writeFileSync('audit/interactions.json',JSON.stringify({environment:'Emulated Chromium; does not certify physical Android 60fps',results},null,2));
 console.log(JSON.stringify(results));
}finally{await browser.close();server.kill();}
