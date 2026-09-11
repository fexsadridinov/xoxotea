import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (first === "uk") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/uk/, "") || "/";
    return NextResponse.redirect(url);
  }

  if (isLocale(first)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/uk${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|icon|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt)$).*)"],
};
