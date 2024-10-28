"use client";

import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import Iphone15Pro from "../ui/iphone-15-pro";
<<<<<<< Updated upstream
import ContactModal from "./ContactModal";
=======
import { Badge } from "../ui/badge";
import { heroItems } from "@/constants/Constants";
import Link from "next/link";
>>>>>>> Stashed changes

const HeroClient = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <div className="relative flex h-screen max-w-7xl w-full mx-auto flex-col items-center justify-center overflow-hidden bg-background">
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex flex-col items-center gap-2 w-2/3">
<<<<<<< Updated upstream
            <div className="text-7xl uppercase font-semibold">Hero Title</div>
            <div className="text-2xl font-bold text-black dark:text-white">
              ino moshtari bayad hads bezane
=======
            <div className="text-7xl uppercase font-semibold">
              {heroItems.title}
>>>>>>> Stashed changes
            </div>

            <div className="">{heroItems.description}</div>

            <div className="flex items-center gap-4">
<<<<<<< Updated upstream
              <ContactModal />

              <Button
                size="lg"
                className="bg-gray-200 hover:bg-gray-300 dark:bg-neutral-900 text-black dark:text-white text-md "
=======
              <Link
                href={heroItems.buttonPrimaryLink}
                aria-label={heroItems.buttonPrimaryText}
              >
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-md "
                >
                  {heroItems.buttonPrimaryText}
                </Button>
              </Link>
              <Link
                href={heroItems.buttonSecondaryLink}
                aria-label={heroItems.buttonSecondaryText}
>>>>>>> Stashed changes
              >
                <Button
                  size="lg"
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-neutral-900 text-black dark:text-white text-md "
                >
                  {heroItems.buttonSecondaryText}
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-1/3">
            <div className="relative">
              <Iphone15Pro className="size-full h-96" src={heroItems.image} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full mt-5">
          <h3 className="border-b-2 border-blue-500 text-4xl font-bold upercase">
            We Offer
          </h3>
          <div className="flex items-center gap-3">
            {heroItems.offers.offerItems.map((badge, index) => (
              <Badge key={index}>{badge.title}</Badge>
            ))}
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
