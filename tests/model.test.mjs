import test from "node:test";
import assert from "node:assert/strict";
import { calculate, defaults, scenarios } from "../src/lib/store-model.ts";
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
  assert.throws(() => calculate({ ...defaults, ticket: 0 }), RangeError));
