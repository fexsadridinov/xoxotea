import test from "node:test";
import assert from "node:assert/strict";
import { calculate, defaults, scenarios, formatMoney } from "../src/lib/store-model.ts";
const expected = [
  { revenue: 702000, contribution: 118.6, ebitda: 77540 },
  { revenue: 1111500, contribution: 133.15, ebitda: 373955 },
  { revenue: 1599000, contribution: 142.85, ebitda: 729230 },
];
for (let i = 0; i < 3; i++)
  test(`scenario ${i + 1}: hand-worked cash contribution`, () => {
    const r = calculate(scenarios[i]);
    for (const key of ["revenue", "contribution", "ebitda"])
      assert.ok(Math.abs(r[key] - expected[i][key]) < 0.001);
    assert.ok(Math.abs(r.payback - 2100000 / expected[i].ebitda) < 0.001);
  });
test("loss-making store has no payback", () => {
  const r = calculate({ ...defaults, cups: 30 });
  assert.ok(r.ebitda < 0);
  assert.equal(r.payback, null);
});
test("raising rent lowers EBITDA one for one", () =>
  assert.equal(
    calculate({ ...defaults, rent: 65000 }).ebitda,
    calculate(defaults).ebitda - 10000,
  ));
test("invalid inputs fail explicitly", () =>
  assert.throws(() => calculate({ ...defaults, ticket: -1 }), RangeError));

test("all editable inputs at zero retain other fixed costs without undefined arithmetic", () => {
 const r=calculate({cups:0,ticket:0,rent:0,staff:0});
 assert.deepEqual(r,{revenue:0,grossMargin:null,contribution:-56,ebitda:-120000,payback:null,breakEven:null});
});
test("free drinks still incur ingredients and packaging",()=>{
 const r=calculate({...defaults,ticket:0});
 assert.equal(r.revenue,0);assert.equal(r.ebitda,-704200);assert.equal(r.grossMargin,null);
});
test("all 16 combinations of zero and existing maximum inputs are finite or explicitly undefined",()=>{
 for(const cups of [0,350])for(const ticket of [0,260])for(const rent of [0,120000])for(const staff of [0,350000]){
  for(const value of Object.values(calculate({cups,ticket,rent,staff})))assert.ok(value===null||Number.isFinite(value));
 }
});
test("every input rejects negative and non-finite values",()=>{
 for(const key of Object.keys(defaults))for(const value of [-1,NaN,Infinity,-Infinity])assert.throws(()=>calculate({...defaults,[key]:value}),RangeError);
});

test("currency formatting follows locale conventions, including losses",()=>{
 assert.equal(formatMoney(-42000,'ru',true),'-1 000 $');
 assert.equal(formatMoney(-42000,'en',true),'-$1,000');
 assert.equal(formatMoney(42000,'ru'),'42 000 ₴');
});
