import Head from "next/head";
import Script from "next/script";
import type { Metadata } from "next";
import { Sen } from "next/font/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/Footer";
import NavbarClient from "@/components/Navbar/NavbarClient";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkapaDinSida | Professionell Webbyrå",
  description:
    "SkapaDinSida är en professionell webbyrå som erbjuder webbdesign, SEO-tjänster och varumärkesstrategi för företag som vill stärka sin online-närvaro.",
  keywords: ["webbyrå", "webbdesign", "SEO", "webbplatser", "SkapaDinSida"],
  openGraph: {
    title: "SkapaDinSida | Professionell Webbyrå",
    description:
      "Vi skapar användarvänliga och SEO-optimerade webbplatser. Kontakta oss idag för att stärka er digitala närvaro.",
    url: "https://skapadinsida.com",
    type: "website",
    siteName: "SkapaDinSida",

    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Logotyp för SkapaDinSida - Professionell Webbyrå",
      },
    ],
  },
  twitter: {
    title: "SkapaDinSida | Professionell Webbyrå",
    description:
      "Professionell webbdesign och SEO-optimering för företag. Kontakta oss idag!",
    card: "summary_large_image",
    images: ["/opengraph.png"],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fetch client messages
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <script
          type="application/ld+json"
          data-cookieconsent="statistics"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SkapaDinSida",
              url: "https://skapadinsida.com",
              logo: "https://skapadinsida.com/images/brand/logo-icon-dark.png",
              sameAs: [
                "https://facebook.com/skapaDinSida",
                "https://instagram.com/skapaDinSida",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@skapadinsida.com",
                contactType: "Customer Service",
                areaServed: "SE",
                availableLanguage: ["Swedish", "English"],
              },
            }),
          }}
        />
      </Head>

      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="91bc635e-497f-4745-b8fd-2ef17a8f0db3"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>

      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        data-cookieconsent="statistics"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16767027238"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16767027238');
          `,
        }}
      />

      <body className={`${sen.variable} font-sen`}>
        <Script
          async
          id="clarity-script"
          data-cookieconsent="statistics" // Load after consent for statistics
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");`,
          }}
        />
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <NavbarClient className="py-12 px-8" />
            <noscript>
              <img
                height="1"
                width="1"
                src="https://www.facebook.com/tr?id=3582989535324506&ev=PageView&noscript=1"
                alt=""
              />
            </noscript>
            <div>{children}</div>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
