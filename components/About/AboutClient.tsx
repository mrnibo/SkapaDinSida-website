import React from "react";
import AboutHero from "./hero/AboutHero";
import QualityClient from "./Quality/QualityClient";
import StatsClient from "./Stats/StatsClient";
import ContactUsBookCallClient from "../ContactUs/ContactUsBookCallClient";
import { ValuesClient } from "../Values/ValuesClient";
import Meteors from "@/components/ui/meteors";

const AboutClient = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col justify-center">
          <div className="py-24 flex flex-col gap-16">
            <AboutHero />
            <StatsClient />
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="w-4 h-2 bg-blue-500 rounded-full self-center"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full self-center"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full self-center"></div>
          </div>

          <div className="py-8">
            <ValuesClient />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-neutral-900 py-16">
        <ContactUsBookCallClient />
      </div>
    </>
  );
};

export default AboutClient;
