"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroItems } from "@/constants/Constants";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { IconInfoCircle, IconPresentation } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Skeleton } from "../ui/skeleton";
import SectionHero from "../section/SectionHero";

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
    </>
  );
};

export default HeroClient;
