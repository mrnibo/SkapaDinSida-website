import type { Metadata } from "next";
import { Sen } from "next/font/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/Footer";
import NavbarClient from "@/components/Navbar/NavbarClient";
import { ThemeProvider } from "@/components/theme-provider";
import CookieBanner from "@/components/CookieConsent/CookieBanner";

import "./globals.css";
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
      <Script id="clarity-script" strategy="afterInteractive">
        {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
      </Script>
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
