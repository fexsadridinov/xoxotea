import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const inventory=JSON.parse(readFileSync(new URL('../content/inventory.json',import.meta.url)));
test('launch priorities and source lineage are complete',()=>{
 assert.equal(inventory.length,10);
 assert.equal(new Set(inventory.map(d=>d.id)).size,10);
 assert.equal(inventory.filter(d=>d.tier==='core').length,6);
 assert.equal(inventory.filter(d=>d.tier==='seasonal').length,4);
 for(const d of inventory){
  assert.ok(d.original && d.sourcePages.length);
  assert.ok(d.sourcePages.every(p=>Number.isInteger(p)&&p>=2&&p<=40));
  for(const locale of ['uk','en','ru','zh']) for(const key of ['name','taste','ingredients','adaptation']) assert.ok(d[key][locale]?.trim());
  assert.ok(!('price' in d) && !('calories' in d));
 }
});
test('source-specific formats and ingredient corrections survive',()=>{
 const get=id=>inventory.find(d=>d.id===id);
 assert.equal(get('C04').base,'milk');
 assert.equal(get('C06').pearls,false);
 assert.equal(inventory.filter(d=>d.pearls).length,2);
 assert.equal(get('C05').volumeMl,700);
 assert.ok(inventory.filter(d=>d.tier==='seasonal').every(d=>d.volumeMl===700));
 assert.ok(inventory.filter(d=>d.foam).every(d=>d.dairy));
 assert.equal(get('S02').dairy,false);
 assert.ok(!get('S04').ingredients.en.toLowerCase().includes('coconut'));
 assert.ok(get('S03').adaptation.en.includes('osmanthus'));
});
