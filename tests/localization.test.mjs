import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {locales,pathFor,languageTag} from '../src/lib/routing.ts';
import {formatMoney,calculate,defaults} from '../src/lib/store-model.ts';
const copy=l=>JSON.parse(readFileSync(new URL(`../content/${l}.json`,import.meta.url)));
function shape(value){if(Array.isArray(value))return value.map(shape);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,shape(v)]));assert.equal(typeof value,'string');assert.ok(value.trim());return 'string';}
test('all four locales have complete copy with matching keys and array lengths',()=>{for(const l of locales)assert.deepEqual(shape(copy(l)),shape(copy('uk')));});
test('Chinese uses a stable route and the explicit Simplified Chinese language tag',()=>{assert.equal(languageTag('zh'),'zh-Hans');for(const view of ['', 'menu', 'investors'])assert.equal(pathFor('zh',view),`/zh/${view?view+'/':''}`);assert.equal(pathFor('uk'),'/');});
test('Chinese money keeps grouping, currency and negative signs unambiguous',()=>{assert.equal(formatMoney(0,'zh'),'₴0');assert.equal(formatMoney(42000,'zh'),'₴42,000');assert.equal(formatMoney(-42000,'zh'),'-₴42,000');assert.equal(formatMoney(-42000,'zh',true),'-US$1,000');assert.equal(formatMoney(42000,'zh',true),'US$1,000');assert.equal(calculate(defaults).ebitda,373955);});
test('Chinese recipe wording retains dairy distinctions and explicit adaptations',()=>{const d=JSON.parse(readFileSync(new URL('../content/inventory.json',import.meta.url)));const get=id=>d.find(x=>x.id===id);assert.ok(get('C03').ingredients.zh.includes('淡奶'));assert.ok(get('C06').ingredients.zh.includes('淡奶 · 炼乳'));assert.ok(get('C04').taste.zh.includes('不含茶底'));assert.ok(get('S02').adaptation.zh.includes('220克'));assert.ok(get('S04').adaptation.zh.includes('180克'));assert.ok(get('S03').adaptation.zh.includes('不宣称含桂花'));assert.ok(copy('zh').economics.explanation.includes('EBITDA 不等于可分配现金'));assert.ok(copy('zh').contact.successBody.includes('尚未发送'));});
