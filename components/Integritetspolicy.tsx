import React from "react";
import { useTranslations } from "next-intl";

const Integritetspolicy: React.FC = () => {
  const t = useTranslations("integritetspolicy");

  return (
    <section className="max-w-3xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>

      <p className="mb-4">{t("intro")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("dataStorageTitle")}
      </h2>
      <p className="mb-4">{t("dataStorageDescription")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("purposeTitle")}</h2>
      <p className="mb-4">{t("purposeDescription")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("rightsTitle")}</h2>
      <p className="mb-4">{t("rightsDescription")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("consentTitle")}</h2>
      <p className="mb-4">{t("consentDescription")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("dataControllerTitle")}
      </h2>
      <p className="mb-2">{t("dataControllerName")}</p>
      <p className="mb-4">{t("dataControllerEmail")}</p>
    </section>
  );
};

export default Integritetspolicy;
