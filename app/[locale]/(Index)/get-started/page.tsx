import React from "react";
import { Spacer } from "@/components/ui/spacer";
import GetStarted from "@/components/GetStarted";
import PriceClient from "@/components/Price/PriceClient";
import SectionHero from "@/components/section/SectionHero";

const page = () => {
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
    title: data.title,
    description: data.description,
    buttonPrimaryText: data.buttonPrimaryText,
    buttonPrimaryLink: data.buttonPrimaryLink,
    buttonSecondaryText: data.buttonSecondaryText,
    buttonSecondaryLink: data.buttonSecondaryLink,
    image: data.image,
  };

  const t = (key: string) => {
    return heroItems[key as keyof typeof heroItems];
  };

  return (
    <>
      <SectionHero
        title={data.title}
        description={data.description}
        image={heroItems.image}
        buttonPrimaryText={data.buttonPrimaryText}
        buttonPrimaryLink={heroItems.buttonPrimaryLink}
        buttonSecondaryText={data.buttonSecondaryLink}
        buttonSecondaryLink={heroItems.buttonSecondaryLink}
      />

      <PriceClient />
      <Spacer className="py-16" />
      <GetStarted />
    </>
  );
};

export default page;
