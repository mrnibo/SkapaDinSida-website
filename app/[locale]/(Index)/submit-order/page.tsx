import React from "react";
import { useTranslations } from "next-intl";
import GetStarted from "@/components/GetStarted";
import { Spacer } from "@/components/ui/spacer";

export default function PageSubmitOrder() {
  const t = useTranslations("getStartedHero");
  return (
    <>
      <GetStarted />
    </>
  );
}
