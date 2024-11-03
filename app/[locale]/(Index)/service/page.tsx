import ContactUsBookCallClient from "@/components/ContactUs/ContactUsBookCallClient";
import ServiceClient from "@/components/Service/ServiceClient";
import ServiceHero from "@/components/Service/ServiceHero";
import ServiceMain from "@/components/Service/ServiceMain";
import { Spacer } from "@/components/ui/spacer";
import React from "react";

export default function PageService() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div>
        <ServiceHero />
        <Spacer className="py-16" />
        <ServiceClient />
        <Spacer className="py-16" />
        <ServiceMain />

        <Spacer className="py-16" />

        <ContactUsBookCallClient />

        <div className="py-16"></div>
      </div>
    </div>
  );
}
