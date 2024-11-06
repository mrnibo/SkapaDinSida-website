import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';


// Define and export locales
export const locales = ['en', 'sv'];

export const routing = defineRouting({
  locales,
  defaultLocale: 'sv',
});

 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);