"use client";
import HyperText from "@/components/ui/hyper-text";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";

const HeroClient = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <div className="flex  justify-center">
          {" "}
          <HyperText
            className="text-4xl font-bold text-black dark:text-white"
            text="SkapaDinSida "
          />{" "}
        </div>
        <div className="flex  justify-center">
          <HyperText
            className="text-2xl font-bold text-black dark:text-white"
            text="asdfasdfasdfasfdasdfasdfasdsdsdfsdfasdfasdfasdffasdasdfasdfasdfasdfasdfasdf "
          />
        </div>
        <div className="flex justify-center gap-4">
          <Button>Get Start</Button>
          <Button>Learn More</Button>
        </div>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>
    </>
  );
};

export default HeroClient;
