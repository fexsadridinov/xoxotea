"use client";

import { useMemo, useState } from "react";
import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import {
  calculator,
  formatMonths,
  midpoint,
  modelledMonthlyProfit,
  money,
  monthlyRevenue,
  simplePaybackMonths,
  startupCost,
} from "@/data/economics";
import { HandNote } from "@/components/hand/HandNote";

export function Calculator({ content, locale }: { content: Content; locale: Locale }) {
  const [orders, setOrders] = useState<number>(calculator.orders.default);
  const [ticket, setTicket] = useState<number>(calculator.ticket.default);

  const revenue = useMemo(() => monthlyRevenue(orders, ticket), [orders, ticket]);
  const profit = useMemo(() => modelledMonthlyProfit(orders, ticket), [orders, ticket]);
  const payback = useMemo(
    () => simplePaybackMonths(midpoint(startupCost.total), profit),
    [profit],
  );

  return (
    <div className="mt-24 border-t border-border pt-16">
      <h3 className="t-h2">{content.calculator.headline}</h3>
      <p className="label-stamp mt-5">{content.calculator.label}</p>

      <div className="mt-10 grid gap-10 rounded-lg bg-surface p-6 md:p-8 lg:grid-cols-2">
        <div className="space-y-8">
          <label className="block">
            <span className="flex justify-between text-[0.95rem]">
              <span>{content.calculator.orders}</span>
              <span className="t-num">{orders}</span>
            </span>
            <input
              type="range"
              className="range-quiet mt-2"
              min={calculator.orders.min}
              max={calculator.orders.max}
              step={5}
              value={orders}
              autoComplete="off"
              suppressHydrationWarning
              onChange={(event) => setOrders(Number(event.target.value))}
            />
          </label>
          <label className="block">
            <span className="flex justify-between text-[0.95rem]">
              <span>{content.calculator.ticket}</span>
              <span className="t-num">{money(ticket, locale)}</span>
            </span>
            <input
              type="range"
              className="range-quiet mt-2"
              min={calculator.ticket.min}
              max={calculator.ticket.max}
              step={5}
              value={ticket}
              autoComplete="off"
              suppressHydrationWarning
              onChange={(event) => setTicket(Number(event.target.value))}
            />
          </label>
        </div>

        <dl className="space-y-6">
          <div>
            <dt className="text-foreground-muted">{content.calculator.revenue}</dt>
            <dd className="t-num mt-1 text-3xl tracking-[-0.05em] md:text-4xl">{money(revenue, locale)}</dd>
          </div>
          <div>
            <dt className="text-foreground-muted">{content.calculator.profit}</dt>
            <dd className="t-num mt-1 text-2xl tracking-[-0.04em]">{money(profit, locale)}</dd>
          </div>
          <div>
            <dt className="text-foreground-muted">{content.calculator.payback}</dt>
            <dd className="t-num mt-1 text-2xl tracking-[-0.04em]">{formatMonths(payback, locale)}</dd>
          </div>
          <HandNote tone="clay">{content.calculator.note}</HandNote>
        </dl>
      </div>
    </div>
  );
}
