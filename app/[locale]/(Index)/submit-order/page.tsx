import React from "react";
import { useTranslations } from "next-intl";
import GetStarted from "@/components/GetStarted";

export default function PageSubmitOrder() {
  const t = useTranslations("getStartedHero");
  return (
    <>
      <GetStarted />
    </>
  );
}
