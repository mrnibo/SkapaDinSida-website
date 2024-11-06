import { Metadata } from "next";
import AboutClient from "@/components/About/AboutClient";

export const metadata: Metadata = {
  title: "SkapaDinSida | Om Oss",
  description:
    "Lär känna SkapaDinSida, vårt uppdrag och hur vi hjälper företag att skapa professionella webbplatser för att stärka deras online-närvaro.",
  openGraph: {
    title: "SkapaDinSida | Om Oss",
    description:
      "Upptäck SkapaDinSida och vårt engagemang för att hjälpa företag att nå framgång genom skräddarsydd webbdesign, varumärkesbyggande och SEO-optimering.",
    url: "https://skapadinsida.com/about",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "SkapaDinSida - Om Oss",
      },
    ],
  },
  twitter: {
    title: "SkapaDinSida | Om Oss",
    description:
      "Vi specialiserar oss på att skapa professionella webbplatser anpassade för företag. Läs mer om vårt team och våra tjänster på SkapaDinSida.",
    card: "summary_large_image",
    images: ["/opengraph.png"],
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function PageAbout() {
  return (
    <>
      <div className="">
        <AboutClient />
      </div>
    </>
  );
}
