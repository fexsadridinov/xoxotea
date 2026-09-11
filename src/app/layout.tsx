import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "XoXo Tea",
  description: "XoXo Tea — сучасний чай в Україні.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
