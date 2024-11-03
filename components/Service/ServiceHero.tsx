import React from "react";
import { useTranslations } from "next-intl";
import SectionHero from "../section/SectionHero";

const ServiceHero = () => {
  const t = useTranslations("services");

  return (
    <>
      <SectionHero
        title={t("title")}
        description={t("description")}
        image="/images/hero/hero-service.svg"
      />
    </>
  );
};

export default ServiceHero;
