import type { Content } from "@/content";
import { storeFormat } from "@/data/economics";
import { HandKicker } from "@/components/hand/HandNote";

export function StorePlan({ content }: { content: Content }) {
  const [order, tea, fruit, assembly, pickup, storage, seating] = content.store.zones;

  return (
    <section className="py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <HandKicker>{content.store.kicker}</HandKicker>
          <h2 className="t-h1 mt-4 whitespace-pre-line">{content.store.headline}</h2>
          <p className="hand mt-5 text-xl text-tea-dark">
            {content.store.area.replace("35–40", `${storeFormat.areaM2.low}–${storeFormat.areaM2.high}`)}
          </p>
          <p className="t-lede mt-6 max-w-md">{content.store.lede}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="label-stamp mb-6">{content.stamps.targetFormat}</p>
          <svg viewBox="0 0 420 280" className="h-auto w-full text-foreground" role="img" aria-label={content.store.headline} style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
            <rect x="8" y="8" width="404" height="264" fill="var(--surface)" stroke="currentColor" strokeWidth="1.2" rx="6" />
            <rect x="20" y="22" width="110" height="70" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="28" y="62" fontSize="11" fill="currentColor">
              {order}
            </text>
            <rect x="140" y="22" width="120" height="70" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="148" y="62" fontSize="11" fill="currentColor">
              {tea}
            </text>
            <rect x="270" y="22" width="126" height="70" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="278" y="62" fontSize="11" fill="currentColor">
              {fruit}
            </text>
            <rect x="20" y="102" width="376" height="70" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="28" y="142" fontSize="11" fill="currentColor">
              {assembly}
            </text>
            <rect x="20" y="182" width="150" height="74" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="28" y="224" fontSize="11" fill="currentColor">
              {pickup}
            </text>
            <rect x="180" y="182" width="120" height="74" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="188" y="224" fontSize="11" fill="currentColor">
              {seating}
            </text>
            <rect x="310" y="182" width="86" height="74" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="318" y="224" fontSize="11" fill="currentColor">
              {storage}
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
