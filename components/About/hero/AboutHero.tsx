import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TitleSection } from "@/components/ui/titles";
import SectionHero from "@/components/section/SectionHero";

interface AboutClientProps {
  className?: string;
}
const AboutClient: React.FC<AboutClientProps> = ({ className }) => {
  const t = useTranslations("about.aboutUs");
  return (
    <>
      <div className={className}></div>
      <SectionHero
        title={t("title")}
        description={t("description")}
        image="/images/Programming.svg"
      />
    </>
  );
};

export default AboutClient;
