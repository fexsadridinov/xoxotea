export type Inputs = {
  cups: number;
  ticket: number;
  rent: number;
  staff: number;
};
export const model = {
  days: 30,
  direct: 56,
  fee: 0.03,
  other: 120000,
  funding: 2100000,
  fx: 42,
};
export const defaults: Inputs = {
  cups: 190,
  ticket: 195,
  rent: 55000,
  staff: 210000,
};
export const scenarios: Inputs[] = [
  { ...defaults, cups: 130, ticket: 180 },
  defaults,
  { ...defaults, cups: 260, ticket: 205 },
];
export function calculate(input: Inputs) {
  const { cups, ticket, rent, staff } = input;
  if (
    ![cups, ticket, rent, staff].every(Number.isFinite) ||
    cups < 0 ||
    ticket < 0 ||
    rent < 0 ||
    staff < 0
  )
    throw new RangeError("Invalid model input");
  const volume = cups * model.days;
  const revenue = volume * ticket;
  const grossMargin = ticket > 0 ? (ticket - model.direct) / ticket : null;
  const contribution = ticket * (1 - model.fee) - model.direct;
  const fixed = rent + staff + model.other;
  const ebitda = volume * contribution - fixed;
  return {
    revenue,
    grossMargin,
    contribution,
    ebitda,
    payback: ebitda > 0 ? model.funding / ebitda : null,
    breakEven:
      contribution > 0 ? Math.ceil(fixed / contribution / model.days) : null,
  };
}
export function formatMoney(value: number, locale: "uk" | "en" | "ru", usd = false) {
  const n = new Intl.NumberFormat({uk:"uk-UA", en:"en-US", ru:"ru-RU"}[locale], {
    maximumFractionDigits: 0,
  }).format(value / (usd ? model.fx : 1));
  if (usd && locale === "en") return value < 0 ? `-$${n.slice(1)}` : `$${n}`;
  return `${n.replace(/\u00a0/g, " ")} ${usd ? "$" : "₴"}`;
}
