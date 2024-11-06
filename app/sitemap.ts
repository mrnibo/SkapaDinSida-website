import { MetadataRoute } from "next";
import { locales } from "@/i18n/routing"; // Import locales from your routing config

const baseUrl = "https://skapadinsida.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages to include in the sitemap
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/integritetspolicy",
    "/offer",
    "/service",
    "/book-a-call",
  ];

  // Generate localized URLs for each static route
  const localizedRoutes = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route === "/" ? "" : route}`,
      lastModified: new Date().toISOString(),
    }))
  );

  // Return all localized routes as the sitemap
  return localizedRoutes;
}
