"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { heroItems } from "@/constants/Constants";
import SectionHero from "@/components/section/SectionHero";
import StatsClient from "@/components/About/Stats/StatsClient";

const HeroClient = () => {
  const t = useTranslations("heroItems");

  return (
    <>
      <SectionHero
        title={t("title")}
        description={t("description")}
        image={heroItems.image}
        imageMobile={heroItems.imageMobile}
        buttonPrimaryText={t("buttonPrimaryText")}
        buttonPrimaryLink={heroItems.buttonPrimaryLink}
        buttonSecondaryText={t("buttonSecondaryText")}
        buttonSecondaryLink={heroItems.buttonSecondaryLink}
      />
      <div className="max-w-6xl mx-auto mb-8">
        <StatsClient />
      </div>
    </>
  );
};

export default HeroClient;
