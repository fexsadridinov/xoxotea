import fs from 'node:fs';
import cp from 'node:child_process';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const server=cp.spawn('node',['scripts/qa/server.cjs','out','4177'],{stdio:'ignore'});
const base='http://127.0.0.1:4177';
for(let i=0;i<30;i++){try{await fetch(base);break;}catch{await new Promise(r=>setTimeout(r,100));}}
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,args:['--no-sandbox','--disable-dev-shm-usage']});
const results=[];
try{
 for(const locale of ['uk','en','ru'])for(const width of [390,1440]){
  const prefix=locale==='uk'?'':`/${locale}`;
  const copy=JSON.parse(fs.readFileSync(`content/${locale}.json`,'utf8'));
  const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce',acceptDownloads:true});
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const path of ['/','/menu/','/investors/']){
   const response=await page.goto(base+prefix+path);assert.equal(response.status(),200);
   const html=await response.text();assert.match(html,new RegExp(`<html[^>]*lang="${locale}"`));
   assert.equal(await page.locator('link[rel=alternate][hreflang=ru]').getAttribute('href'),`https://xoxotea.vercel.app/ru${path}`);
   await page.locator('.language-trigger').click();
   assert.equal(await page.locator('.language-options a').count(),3);
   for(const target of ['uk','en','ru'])assert.equal(await page.locator(`.language-options a[hreflang=${target}]`).getAttribute('href'),(target==='uk'?'':`/${target}`)+path);
   await page.keyboard.press('Escape');assert.equal(await page.locator('.language-trigger').getAttribute('aria-expanded'),'false');
   assert.equal(await page.locator('.language-trigger').evaluate(e=>document.activeElement===e),true);
  }
  await page.locator('#economics').scrollIntoViewIfNeeded();
  for(const [id,max] of [['cups',350],['ticket',260],['rent',120000],['staff',350000]]){
   const slider=page.locator('#'+id);assert.equal(await slider.getAttribute('min'),'0');assert.equal(await slider.getAttribute('max'),String(max));
   await slider.focus();await page.keyboard.press('Home');assert.equal(await slider.inputValue(),'0');
  }
  assert.equal((await page.locator('[data-ebitda]').innerText()).replace(/[\s,]/g,''),'-120000₴');
  assert.ok((await page.locator('.result-grid').innerText()).includes(copy.economics.undefined));
  assert.doesNotMatch(await page.locator('.results').innerText(),/NaN|Infinity/);
  await page.locator('#ticket').focus();await page.keyboard.press('End');assert.equal(await page.locator('#ticket').inputValue(),'260');
  await page.locator('.model-bottom button').click();assert.equal(await page.locator('#ticket').inputValue(),'195');
  assert.equal(await page.locator('.scenario-tabs [aria-pressed=true]').innerText(),copy.economics.scenarios[1]);
  await page.locator('input[name=name]').fill('Проверка локализации');await page.locator('input[name=contact]').fill('invalid');await page.locator('input[name=consent]').check();await page.locator('button.cta').click();
  assert.equal(await page.locator('#contact-error').innerText(),copy.contact.invalid);
  assert.equal(await page.locator('input[name=contact]').getAttribute('aria-invalid'),'true');
  await page.locator('input[name=contact]').fill('audit@example.invalid');await page.locator('input[name=dataRoom]').check();
  const downloadEvent=page.waitForEvent('download');await page.locator('button.cta').click();const download=await downloadEvent;
  const text=fs.readFileSync(await download.path(),'utf8');assert.ok(text.includes(copy.contact.notSent));assert.ok(text.includes(`${copy.contact.room}: ${copy.contact.yes}`));assert.ok(text.includes('Проверка локализации'));
  assert.equal(await page.locator('.confirmation h3').innerText(),copy.contact.success);
  await page.waitForFunction(()=>document.activeElement===document.querySelector('.confirmation h3'));
  await page.locator('header nav > a').first().click();await page.waitForURL(`${base}${prefix}/menu/`);
  await page.locator('.language-trigger').click();await page.locator('.language-options a[hreflang=ru]').click();await page.waitForURL(`${base}/ru/menu/`);
  assert.equal(await page.locator('html').getAttribute('lang'),'ru');
  assert.equal(errors.length,0,errors.join('\n'));
  results.push({locale,width,serverLanguage:true,alternateLinks:true,languageMenuKeyboard:true,zeroInputs:true,maximumsPreserved:true,undefinedMargin:true,reset:true,localizedValidation:true,localizedDownload:true,confirmationFocus:true,routePreserved:true,errors});await context.close();
 }
 const page=await browser.newPage();await page.addInitScript(()=>{Storage.prototype.getItem=()=>{throw new Error('Storage disabled')};Storage.prototype.setItem=()=>{throw new Error('Storage disabled')};});
 await page.goto(base+'/ru/');await page.locator('header nav > a').first().click();await page.waitForURL('**/ru/menu/');await page.waitForTimeout(450);
 assert.equal(await page.locator('.page-wipe').evaluate(e=>getComputedStyle(e).visibility),'hidden');
 await page.goBack();await page.waitForTimeout(450);assert.equal(await page.locator('.page-wipe').evaluate(e=>getComputedStyle(e).visibility),'hidden');
 await page.emulateMedia({reducedMotion:'reduce'});await page.locator('#economics').scrollIntoViewIfNeeded();assert.equal(await page.locator('.economics-pin').evaluate(e=>getComputedStyle(e).position),'relative');assert.equal(await page.evaluate(()=>document.getAnimations().length),0);
 const audit={testedAt:new Date().toISOString(),results,storageDisabledNavigation:true,backNavigation:true,dynamicReducedMotion:true};fs.writeFileSync('audit/localization.json',JSON.stringify(audit,null,2));console.log(JSON.stringify(audit));
}finally{await browser.close();server.kill();}
