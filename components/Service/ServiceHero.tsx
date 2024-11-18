import React from "react";
import { useTranslations } from "next-intl";
import SectionHero from "@/components/section/SectionHero";

const ServiceHero = () => {
  const t = useTranslations("servicesSection.hero");

  return (
    <>
      <SectionHero
        title={t("title")}
        description={<ServiceHeroDescription />}
        image={t("imageUrl")}
        imageMobile={t("imageUrl")}
        buttonPrimaryText={t("btnPrimaryText")}
        buttonPrimaryLink={t("btnPrimaryLink")}
        buttonSecondaryText={t("btnSecondaryText")}
        buttonSecondaryLink={t("btnSecondaryLink")}
      />
    </>
  );
};

const ServiceHeroDescription = () => {
  const t = useTranslations("servicesSection.hero");

  return (
    <div className="flex flex-col gap-4">
      <div>{t("description")}</div>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>{t("bulletPoints.0")}</li>
        <li>{t("bulletPoints.1")}</li>
        <li>{t("bulletPoints.2")}</li>
      </ul>
    </div>
  );
};

export default ServiceHero;
