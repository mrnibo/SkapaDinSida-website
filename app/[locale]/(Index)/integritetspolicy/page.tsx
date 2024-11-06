import React from "react";
import type { Metadata } from "next";
import Integritetspolicy from "@/components/Integritetspolicy";

export const metadata: Metadata = {
  title: "SkapaDinSida | Integritetspolicy",
  description:
    "Läs vår integritetspolicy för att förstå hur SkapaDinSida hanterar och skyddar din personliga information.",
  openGraph: {
    title: "SkapaDinSida | Integritetspolicy",
    description:
      "Få insikt i hur SkapaDinSida samlar in, använder och skyddar din personliga information enligt vår integritetspolicy.",
    url: "https://skapadinsida.com/integritetspolicy",
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
    title: "SkapaDinSida | Integritetspolicy",
    description:
      "Läs vår integritetspolicy och få insikt i hur vi skyddar din data.",
    card: "summary_large_image",
    images: ["/opengraph.png"], // Shared Twitter image as well
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function PageIntegritetspolicy() {
  return (
    <div className="mx-4">
      <Integritetspolicy />
    </div>
  );
}
