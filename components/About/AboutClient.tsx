import React from "react";
import AboutHero from "./hero/AboutHero";
import StatsClient from "./Stats/StatsClient";
import ContactUsBookCallClient from "../ContactUs/ContactUsBookCallClient";
import { ValuesClient } from "../Values/ValuesClient";
import { Spacer } from "../ui/spacer";

const AboutClient = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col justify-center">
          <div className="py-24 flex flex-col gap-16">
            <AboutHero />
            <StatsClient />
          </div>
          <Spacer />

          <div className="py-8">
            <ValuesClient />
          </div>
        </div>
      </div>

      <Spacer />
      <div className="bg-gray-200 dark:bg-neutral-900 py-16">
        <ContactUsBookCallClient />
      </div>
    </>
  );
};

export default AboutClient;
