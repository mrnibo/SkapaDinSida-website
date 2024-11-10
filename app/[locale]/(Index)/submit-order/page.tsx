import GetStarted from "@/components/GetStarted";
import SectionHero from "@/components/section/SectionHero";
import { Spacer } from "@/components/ui/spacer";
import React from "react";

export default function PageSubmitOrder() {
  const data = {
    title: "Get Started",
    description:
      "Get started with our services today and take your business to the next level.",
    buttonPrimaryText: "Get Started",
    buttonPrimaryLink: "/submit",
    buttonSecondaryText: "Learn More",
    buttonSecondaryLink: "/services",
    image: "/images/hero/hero-get-started.svg",
  };

  const heroItems = {
    buttonPrimaryLink: data.buttonPrimaryLink,
    buttonSecondaryLink: data.buttonSecondaryLink,
    image: data.image,
  };

  const t = (key: string) => {
    return heroItems[key as keyof typeof heroItems];
  };
  return (
    <>
      <SectionHero
        title={t("title")}
        description={t("description")}
        image={heroItems.image}
        buttonPrimaryText={t("buttonPrimaryText")}
        buttonPrimaryLink={heroItems.buttonPrimaryLink}
        buttonSecondaryText={t("buttonSecondaryText")}
        buttonSecondaryLink={heroItems.buttonSecondaryLink}
      />

      <Spacer className="py-16" />
      <GetStarted />
    </>
  );
}
