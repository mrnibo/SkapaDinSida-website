import React from "react";
import Orbiting from "./OrbitingCircles";
import Meteors from "@/components/ui/meteors";
import HeroClient from "./HeroClient";
const NotHero = () => {
  return (
    <>
      <HeroClient />
      <Meteors number={30} />
      <Orbiting />
    </>
  );
};

export default NotHero;
