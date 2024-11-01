import ServiceClient from "@/components/Service/ServiceClient";
import ServiceHero from "@/components/Service/ServiceHero";
import ServiceMain from "@/components/Service/ServiceMain";
import { Spacer } from "@/components/ui/spacer";
import React from "react";

export default function PageService() {
  return (
    <div>
      <ServiceHero />
      <Spacer />
      <ServiceClient />
      <Spacer />
      <ServiceMain />
    </div>
  );
}
