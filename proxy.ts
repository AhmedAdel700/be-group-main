import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleMiddleware = createMiddleware(routing);

export function proxy(request: any) {
  return handleMiddleware(request);
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*']
};
