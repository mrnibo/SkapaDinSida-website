import type { Metadata } from "next";
import ContactUsBookCallClient from "@/components/ContactUs/ContactUsBookCallClient";
import ServiceClient from "@/components/Service/ServiceClient";
import ServiceHero from "@/components/Service/ServiceHero";
import ServiceMain from "@/components/Service/ServiceMain";
import { Spacer } from "@/components/ui/spacer";
import React from "react";

export const metadata: Metadata = {
  title: "SkapaDinSida | Våra Tjänster",
  description:
    "Utforska våra professionella tjänster inom webbdesign, SEO-optimering och varumärkesstrategi för att hjälpa ert företag att växa online.",
  openGraph: {
    title: "SkapaDinSida | Våra Tjänster",
    description:
      "Se hur våra tjänster inom webbdesign, SEO och branding kan stärka er digitala närvaro och bygga ett starkt varumärke.",
    url: "https://skapadinsida.com/service",
    type: "website",
    images: [
      {
        url: "/opengraph.png", // Shared Open Graph image across all pages
        width: 1200,
        height: 630,
        alt: "SkapaDinSida - Professionell Webbyrå",
      },
    ],
  },
  twitter: {
    title: "SkapaDinSida | Våra Tjänster",
    description:
      "Upptäck våra tjänster inom webbdesign, SEO och varumärkesbyggande för företag.",
    card: "summary_large_image",
    images: ["/opengraph.png"], // Shared Twitter image as well
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function PageService() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div>
        <ServiceHero />
        <Spacer className="py-16" />
        <ServiceClient />
        <Spacer className="py-16" />
        <ServiceMain />
        <Spacer className="py-16" />
        <ContactUsBookCallClient />
        <div className="py-16"></div>
      </div>
    </div>
  );
}
