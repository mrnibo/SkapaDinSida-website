import GetStarted from "@/components/GetStarted";
import SectionHero from "@/components/section/SectionHero";
import { Spacer } from "@/components/ui/spacer";
import { useTranslations } from "next-intl";
import React from "react";

export default function PageSubmitOrder() {
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

      <Spacer className="py-16" />
      <GetStarted />
    </>
  );
}
