import React from "react";
import AboutHero from "./hero/AboutHero";
import QualityClient from "./Quality/QualityClient";
import TeamClient from "./TeamCard/TeamClient";

const AboutClient = () => {
  return (
    <>
      <div className="flex flex-col gap-24">
        <div>
          <AboutHero />
        </div>
        <div>
          <QualityClient />
        </div>
        <div>
          <TeamClient />
        </div>
      </div>
    </>
  );
};

export default AboutClient;
