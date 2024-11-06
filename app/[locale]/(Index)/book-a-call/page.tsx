import React from "react";
import { Metadata } from "next";
import BookingWidgetClient from "@/components/BookingWidget/BookingWidgetClient";

export const metadata: Metadata = {
  title: "SkapaDinSida | Boka ett Samtal",
  description:
    "Boka ett kostnadsfritt samtal med SkapaDinSida för att diskutera era webbdesign- och SEO-behov. Vi hjälper er att skapa en stark online-närvaro.",
  openGraph: {
    title: "SkapaDinSida | Boka ett Samtal",
    description:
      "Boka ett kostnadsfritt samtal med oss för att prata om hur vi kan hjälpa ert företag att växa online.",
    url: "https://skapadinsida.com/book-a-call",
    type: "website",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "SkapaDinSida - Professionell Webbyrå",
      },
    ],
  },
  twitter: {
    title: "SkapaDinSida | Boka ett Samtal",
    description:
      "Boka ett gratis samtal och få professionell rådgivning om webbdesign och SEO.",
    card: "summary_large_image",
    images: ["/opengraph.png"],
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function PageBookACall() {
  return (
    <>
      <BookingWidgetClient />
    </>
  );
}
