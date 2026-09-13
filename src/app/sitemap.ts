import type { MetadataRoute } from "next";
import { origin, route } from "@/lib/investor-content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return (["uk", "en"] as const).flatMap((l) =>
    ["", "menu", "investors", "press"].map((p) => ({
      url: origin + route(l, p),
      lastModified: new Date("2026-09-13"),
      priority: p ? 0.7 : 1,
    })),
  );
}
