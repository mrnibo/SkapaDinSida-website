"use client";
import HyperText from "@/components/ui/hyper-text";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import Iphone15Pro from "../ui/iphone-15-pro";

const HeroClient = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <div className="relative flex h-screen max-w-8xl mx-auto flex-col items-center justify-center overflow-hidden bg-background">
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex flex-col items-center gap-2 w-2/3">
            <div className="text-7xl uppercase font-semibold">Hero Title</div>
            <div className="">
              <HyperText
                className="text-2xl font-bold text-black dark:text-white"
                text="ino moshtari bayad hads bezane "
              />
            </div>
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-md "
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                className="bg-gray-200 hover:bg-gray-300 dark:bg-neutral-900 text-black dark:text-white text-md "
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-1/3">
            <div className="relative">
              <Iphone15Pro
                className="size-[680px]"
                src="https://via.placeholder.com/430x880"
              />
            </div>
          </div>
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
