import React from "react";
import { Spacer } from "@/components/ui/spacer";
import GetStarted from "@/components/GetStarted";
import PriceClient from "@/components/Price/PriceClient";
import SectionHero from "@/components/section/SectionHero";
import { useTranslations } from "next-intl";

const PageGetStarted = () => {
  const t = useTranslations("GetStartedHero");

  const data = {
    title: t("title"),
    description: t("description"),
    buttonPrimaryText: t("buttonPrimaryText"),
    buttonPrimaryLink: t("buttonPrimaryLink"),
    buttonSecondaryText: t("buttonSecondaryText"),
    buttonSecondaryLink: t("buttonSecondaryLink"),
    image: t("image"),
  };

  return (
    <>
      <SectionHero
        title={data.title}
        description={data.description}
        image={data.image}
        buttonPrimaryText={data.buttonPrimaryText}
        buttonPrimaryLink={data.buttonPrimaryLink}
        buttonSecondaryText={data.buttonSecondaryText}
        buttonSecondaryLink={data.buttonSecondaryLink}
      />

      <PriceClient />
      <Spacer className="py-16" />
      <GetStarted />
    </>
  );
};

export default PageGetStarted;
