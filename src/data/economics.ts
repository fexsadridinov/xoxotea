export const daysPerMonth = 30;

export const priceCorridor = { low: 150, high: 230 };

export const priceBands = {
  simpleTea: { low: 120, high: 150 },
  milkTea: { low: 150, high: 180 },
  fruitTea: { low: 170, high: 210 },
  cloud: { low: 180, high: 220 },
  matcha: { low: 200, high: 240 },
} as const;

export const illustrativeCup = {
  price: 195,
  ingredients: 42,
  packaging: 14,
} as const;

export const categoryEconomics = {
  simpleTea: { retail: { low: 130, high: 150 }, cogs: { low: 25, high: 35 } },
  milkBoba: { retail: { low: 160, high: 190 }, cogs: { low: 45, high: 60 } },
  fruitTea: { retail: { low: 170, high: 210 }, cogs: { low: 50, high: 70 } },
  premium: { retail: { low: 190, high: 240 }, cogs: { low: 60, high: 85 } },
} as const;

export const startupCost = {
  total: { low: 1_800_000, high: 3_000_000 },
  items: [
    { id: "renovation", low: 650_000, high: 1_000_000 },
    { id: "equipment", low: 500_000, high: 800_000 },
    { id: "furniture", low: 150_000, high: 250_000 },
    { id: "inventory", low: 80_000, high: 140_000 },
    { id: "pos", low: 50_000, high: 100_000 },
    { id: "preopening", low: 100_000, high: 200_000 },
    { id: "workingCapital", low: 270_000, high: 510_000 },
  ],
} as const;

export const opexShares = {
  productPackaging: { low: 0.28, high: 0.34 },
  labor: { low: 0.15, high: 0.22 },
  occupancy: { low: 0.07, high: 0.12 },
  fees: { low: 0.02, high: 0.04 },
  marketing: { low: 0.03, high: 0.06 },
  misc: { low: 0.05, high: 0.1 },
  operatingMargin: { low: 0.1, high: 0.22 },
} as const;

export const scenarios = {
  conservative: { orders: 130, ticket: 180, profit: { low: 60_000, high: 90_000 } },
  base: { orders: 190, ticket: 195, profit: { low: 150_000, high: 220_000 } },
  strong: { orders: 260, ticket: 205, profit: { low: 280_000, high: 350_000 } },
} as const;

export const calculator = {
  orders: { min: 80, max: 350, default: 190 },
  ticket: { min: 150, max: 230, default: 195 },
} as const;

export const storeFormat = {
  areaM2: { low: 35, high: 40 },
} as const;

export function monthlyRevenue(ordersPerDay: number, averageTicket: number): number {
  return ordersPerDay * averageTicket * daysPerMonth;
}

export function cupDirectCost(ingredients: number, packaging: number): number {
  return ingredients + packaging;
}

export function cupGrossProfit(price: number, ingredients: number, packaging: number): number {
  return price - cupDirectCost(ingredients, packaging);
}

export function cupGrossMargin(price: number, ingredients: number, packaging: number): number {
  return cupGrossProfit(price, ingredients, packaging) / price;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Interpolate store-level operating margin by daily volume. */
export function modelledMargin(ordersPerDay: number): number {
  const t = clamp(
    (ordersPerDay - calculator.orders.min) / (calculator.orders.max - calculator.orders.min),
    0,
    1,
  );
  return opexShares.operatingMargin.low + t * (opexShares.operatingMargin.high - opexShares.operatingMargin.low);
}

export function modelledMonthlyProfit(ordersPerDay: number, averageTicket: number): number {
  return monthlyRevenue(ordersPerDay, averageTicket) * modelledMargin(ordersPerDay);
}

export function midpoint(range: { low: number; high: number }): number {
  return (range.low + range.high) / 2;
}

export function simplePaybackMonths(capex: number, monthlyProfit: number): number | null {
  if (monthlyProfit <= 0) return null;
  return capex / monthlyProfit;
}

/** Cautious range: capex corridor against the base-case profit band (not best-case). */
export function modelledPaybackRange(): { low: number; high: number } {
  const fast = simplePaybackMonths(startupCost.total.low, scenarios.base.profit.low);
  const slow = simplePaybackMonths(startupCost.total.high, scenarios.base.profit.low);
  return {
    low: Math.max(1, Math.round(fast ?? 12)),
    high: Math.round(slow ?? 24),
  };
}

function groupedInt(value: number, separator: "," | " "): string {
  const rounded = Math.round(value);
  const sign = rounded < 0 ? "-" : "";
  const digits = String(Math.abs(rounded));
  return sign + digits.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function formatUah(value: number, compact = false): string {
  if (compact && Math.abs(value) >= 1_000_000) {
    const millions = value / 1_000_000;
    const digits = millions >= 10 ? 0 : 2;
    return `${millions.toFixed(digits).replace(".", ",")} млн ₴`;
  }
  if (compact && Math.abs(value) >= 1000) {
    return `${Math.round(value / 1000)} тис. ₴`;
  }
  return `${groupedInt(value, " ")} ₴`;
}

export function formatUahRu(value: number, compact = false): string {
  if (compact && Math.abs(value) >= 1_000_000) {
    const millions = value / 1_000_000;
    const digits = millions >= 10 ? 0 : 2;
    return `${millions.toFixed(digits).replace(".", ",")} млн ₴`;
  }
  if (compact && Math.abs(value) >= 1000) {
    return `${Math.round(value / 1000)} тыс. ₴`;
  }
  return `${groupedInt(value, " ")} ₴`;
}

export function formatUahEn(value: number, compact = false): string {
  if (compact && Math.abs(value) >= 1_000_000) {
    const millions = value / 1_000_000;
    const digits = millions >= 10 ? 0 : 2;
    return `₴${millions.toFixed(digits)}M`;
  }
  if (compact && Math.abs(value) >= 1000) {
    return `₴${Math.round(value / 1000)}k`;
  }
  return `₴${groupedInt(value, ",")}`;
}

export function money(value: number, locale: "uk" | "en" | "ru", compact = false): string {
  if (locale === "en") return formatUahEn(value, compact);
  if (locale === "ru") return formatUahRu(value, compact);
  return formatUah(value, compact);
}

export function formatRange(
  low: number,
  high: number,
  locale: "uk" | "en" | "ru",
  compact = false,
): string {
  const cyrillic = locale !== "en";
  if (compact && low >= 1_000_000 && high >= 1_000_000) {
    const l = (low / 1_000_000).toFixed(1);
    const h = (high / 1_000_000).toFixed(1);
    return cyrillic
      ? `${l.replace(".", ",")}–${h.replace(".", ",")} млн ₴`
      : `₴${l}–${h}M`;
  }
  if (compact && high >= 1000) {
    const l = Math.round(low / 1000);
    const h = Math.round(high / 1000);
    const unit = locale === "ru" ? "тыс. ₴" : locale === "uk" ? "тис. ₴" : "";
    return cyrillic ? `${l}–${h} ${unit}` : `₴${l}–${h}k`;
  }
  const sep = locale === "en" ? "," : " ";
  const l = groupedInt(low, sep);
  const h = groupedInt(high, sep);
  return cyrillic ? `${l}–${h} ₴` : `₴${l}–${h}`;
}

export function formatPct(ratio: number): string {
  return `~${Math.round(ratio * 100)}%`;
}

export function formatMonths(value: number | null, locale: "uk" | "en" | "ru"): string {
  if (value === null || !Number.isFinite(value)) return "—";
  const rounded = Math.max(1, Math.round(value));
  const suffix = rounded >= 24 ? "+" : "";
  if (locale === "en") return `${rounded}${suffix} mo.`;
  if (locale === "ru") return `${rounded}${suffix} мес.`;
  return `${rounded}${suffix} міс.`;
}

