"use client";

import React from "react";
import { heroItems } from "@/constants/Constants";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { useTranslations } from "next-intl";
import SectionHero from "../section/SectionHero";
import StatsClient from "../About/Stats/StatsClient";

// Delay function for testing loading states
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Lazy load components with delay
const Particles = React.lazy(() =>
  delay(0).then(() => import("@/components/ui/particles"))
);
const Image = React.lazy(() => delay(0).then(() => import("next/image")));

const HeroClient = () => {
  const { theme } = useThemeSafe();
  const t = useTranslations("heroItems");

  // Memoize color based on theme for performance
  const color = React.useMemo(
    () => (theme === "dark" ? "#ffffff" : "#000000"),
    [theme]
  );

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
