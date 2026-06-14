import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";

const handleMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return handleMiddleware(request);
}

export const config = {
  matcher: [
    "/", 
    "/(ar|en)/:path*", 
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
