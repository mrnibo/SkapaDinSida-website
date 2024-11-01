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
        <div className="mx-8">
          <AboutHero className="py-24" />
          <StatsClient />
          <Spacer className="py-8" />
          <ValuesClient />
          <Spacer className="py-8" />
          <ContactUsBookCallClient />
        </div>
      </div>
    </>
  );
};

export default AboutClient;
