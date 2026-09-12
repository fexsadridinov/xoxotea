import { Manrope, Neucha } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const neucha = Neucha({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--font-neucha",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F3EFE7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "XoXo Tea",
  description: "XoXo Tea — сучасний чай в Україні.",
  icons: { icon: "/icon" },
  keywords: ["XoXo Tea", "modern tea", "Ukraine", "Mykolaiv", "Миколаїв", "Николаев", "bubble tea"],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${manrope.variable} ${neucha.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
