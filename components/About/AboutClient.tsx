import React from "react";
import AboutHero from "./hero/AboutHero";
import QualityClient from "./Quality/QualityClient";
import StatsClient from "./Stats/StatsClient";
import ContactUsBookCallClient from "../ContactUs/ContactUsBookCallClient";

const AboutClient = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col justify-center gap-8">
          <div className="py-24">
            <AboutHero />
            <StatsClient />
          </div>
          <div className="py-24">
            <QualityClient />
          </div>
          <ContactUsBookCallClient />
        </div>
      </div>
    </>
  );
};

export default AboutClient;
