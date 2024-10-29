"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { heroItems } from "@/constants/Constants";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { IconInfoCircle, IconPresentation } from "@tabler/icons-react";

const HeroClient = () => {
  const { theme } = useThemeSafe();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <div className="relative flex h-screen max-w-7xl w-full mx-auto flex-col gap-10 md:gap-20 lg:gap-40 items-center justify-center overflow-hidden bg-background px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-2 w-full">
          {/* Left Side  */}
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-2/5">
            <div className="w-full text-4xl md:text-6xl lg:text-7xl uppercase font-semibold text-center md:text-left leading-tight break-words">
              {heroItems.title}
            </div>
            <div className="text-center md:text-left">
              {heroItems.description}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
              <Link
                href={heroItems.buttonPrimaryLink}
                aria-label={heroItems.buttonPrimaryText}
              >
                <Button
                  size="lg"
                  className="group bg-blue-500 hover:bg-blue-600 text-md w-full sm:w-auto text-white py-6 flex gap-2 items-center"
                >
                  {heroItems.buttonPrimaryText}
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <IconPresentation size={20} />
                  </div>{" "}
                </Button>
              </Link>
              <Link
                href={heroItems.buttonSecondaryLink}
                aria-label={heroItems.buttonSecondaryText}
              >
                <Button
                  size="lg"
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-black dark:text-white text-md w-full sm:w-auto py-6 dark:border border-neutral-800 flex gap-2 items-center"
                >
                  <IconInfoCircle size={20} />
                  {heroItems.buttonSecondaryText}
                </Button>
              </Link>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="relative">
              <Iphone15Pro
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                src={heroItems.image}
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
