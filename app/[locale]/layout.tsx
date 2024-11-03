import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NavbarClient from "@/components/Navbar/NavbarClient";
import { ThemeProvider } from "@/components/theme-provider";
import { Sen } from "next/font/google";
import CookieBanner from "@/components/CookieConsent/CookieBanner";
import Footer from "@/components/Footer";

import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkapaDinSida | Professional Web Agency",
  description:
    "SkapaDinSida specializes in creating custom websites that elevate your brand. We offer website design, branding, and SEO optimization services to enhance your online presence.",
  openGraph: {
    title: "SkapaDinSida | Professional Web Agency",
    description:
      "We design and develop user-focused websites, brand identities, and SEO optimization to boost your business’s digital presence.",
    url: "https://skapadinsida.com",
    type: "website",
    siteName: "SkapaDinSida",
  },
};

export default async function LocaleLayout({
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

  // Providing all messages to the client side
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
             fbq('init', '3582989535324506'); 
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=3582989535324506&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <body className={`${sen.variable} font-sen antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            storageKey="theme"
            enableColorScheme
          >
            <NavbarClient />
            <div>{children}</div>
            <Footer />
          </ThemeProvider>
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
