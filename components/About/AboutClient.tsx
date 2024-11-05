import React from "react";
import AboutHero from "./hero/AboutHero";
import StatsClient from "./Stats/StatsClient";
import ContactUsBookCallClient from "@/components/ContactUs/ContactUsBookCallClient";
import { ValuesClient } from "@/components/Values/ValuesClient";
import { Spacer } from "@/components/ui/spacer";

const AboutClient = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <div className="mx-8">
          <AboutHero />
          <StatsClient />
          <Spacer className="py-16" />
          <ValuesClient />
          <Spacer className="py-16" />

          <ContactUsBookCallClient />

          <div className="py-16"></div>
        </div>
      </div>
    </>
  );
};

export default AboutClient;
