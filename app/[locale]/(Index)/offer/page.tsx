import type { Metadata } from "next";
import SectionHeroMiddle from "@/components/section/SectionHeroMiddle";
import React from "react";

export const metadata: Metadata = {
  title: "SkapaDinSida | Våra Erbjudanden",
  description:
    "Upptäck våra erbjudanden inom webbdesign, varumärkesbyggande och SEO-optimering för att stärka er online-närvaro.",
  openGraph: {
    title: "SkapaDinSida | Våra Erbjudanden",
    description:
      "Utforska våra tjänster för att skapa professionella webbplatser, stärka varumärket och öka SEO-resultaten.",
    url: "https://skapadinsida.com/offer",
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
    title: "SkapaDinSida | Våra Erbjudanden",
    description: "Upptäck våra erbjudanden inom webbdesign, branding och SEO.",
    card: "summary_large_image",
    images: ["/opengraph.png"], // Shared Twitter image as well
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function PageOffer() {
  return (
    <div>
      <SectionHeroMiddle />
    </div>
  );
}
