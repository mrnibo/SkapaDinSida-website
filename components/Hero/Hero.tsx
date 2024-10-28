import React from "react";
import Orbiting from "../BodySections/OrbitingCircles";

import HeroClient from "./HeroClient";
import { MarqueeDemo } from "../BodySections/Marquee";
const Hero = () => {
  return (
    <>
      <HeroClient />
      <Orbiting />
      <MarqueeDemo />
    </>
  );
};

export default Hero;
