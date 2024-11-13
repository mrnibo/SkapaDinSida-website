// next.config.js
import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io", "cdn.sanity.io"], 
  },
};

const sentryConfig = {
  org: "khani-tv",
  project: "skapadinsida",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withNextIntl(withSentryConfig(nextConfig, sentryConfig));
