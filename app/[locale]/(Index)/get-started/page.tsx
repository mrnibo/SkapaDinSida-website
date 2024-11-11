import React from "react";
import { useTranslations } from "next-intl";
import { Spacer } from "@/components/ui/spacer";
import GetStarted from "@/components/GetStarted";
import PriceClient from "@/components/Price/PriceClient";
import SectionHero from "@/components/section/SectionHero";

const PageGetStarted = () => {
  const t = useTranslations("getStartedHero");

  return (
    <>
      <SectionHero
        title={t("title")}
        description={t("description")}
        image={t("image")}
        buttonPrimaryText={t("buttonPrimaryText")}
        buttonPrimaryLink={t("buttonPrimaryLink")}
        buttonSecondaryText={t("buttonSecondaryText")}
        buttonSecondaryLink={t("buttonSecondaryLink")}
      />

      <PriceClient />
      <Spacer className="py-16" />
      <GetStarted />
    </>
  );
};

export default PageGetStarted;
