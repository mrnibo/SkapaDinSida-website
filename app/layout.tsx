import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarClient from "@/components/Navbar/NavbarClient";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Sen } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sen.variable} font-sen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Set a fixed default theme
          disableTransitionOnChange
        >
          <NavbarClient />
          {children}
        </ThemeProvider>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
        `}
        </Script>
      </body>
    </html>
  );
}
