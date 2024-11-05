import React from "react";
import { useTranslations } from "next-intl";
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
        description={<AboutHeroDescription />}
        image="/images/Programming.svg"
      />
    </>
  );
};

const AboutHeroDescription = () => {
  const t = useTranslations("about.aboutUs");

  return (
    <div className="flex flex-col gap-4">
      <p>{t("description")}</p>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>{t("bulletPoints.0")}</li>
        <li>{t("bulletPoints.1")}</li>
        <li>{t("bulletPoints.2")}</li>
      </ul>
    </div>
  );
};

export default AboutClient;
