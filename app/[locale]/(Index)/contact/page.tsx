import React from "react";
import type { Metadata } from "next";
import ContactUsClient from "@/components/ContactUs/ContactUsClient";

export const metadata: Metadata = {
  title: "SkapaDinSida | Kontakta Oss",
  description:
    "Kontakta SkapaDinSida för professionell webbdesign och SEO-tjänster. Vi är här för att hjälpa ert företag att växa online.",
  openGraph: {
    title: "SkapaDinSida | Kontakta Oss",
    description:
      "Har ni frågor? Kontakta oss för att få veta mer om våra tjänster för webbdesign och SEO.",
    url: "https://skapadinsida.com/contact",
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
    title: "SkapaDinSida | Kontakta Oss",
    description:
      "Kontakta SkapaDinSida för professionell hjälp med webbdesign och SEO.",
    card: "summary_large_image",
    images: ["/opengraph.png"], // Shared Twitter image as well
  },
};

export default function PageContact() {
  return (
    <>
      <ContactUsClient />
    </>
  );
}
