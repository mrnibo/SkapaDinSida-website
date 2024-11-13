import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './i18n/navigation';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'sv'
});

// Modify the matcher to exclude /studio
export const config = {
  matcher: [
    // Match all pathnames except /studio, /api, /_next, and files with extensions
    '/((?!api|_next|.*\\..*).*)'
  ]
};