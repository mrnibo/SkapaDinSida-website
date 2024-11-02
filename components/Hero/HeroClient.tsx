"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { heroItems } from "@/constants/Constants";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { IconInfoCircle, IconPresentation } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const HeroClient = () => {
  const { theme } = useThemeSafe();
  const [color, setColor] = useState("#ffffff");

  const t = useTranslations("heroItems");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <div className="relative flex h-screen max-w-7xl w-full mx-auto flex-col gap-10 md:gap-20 lg:gap-40 items-center justify-center overflow-hidden bg-background px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-2 w-full">
          <div className="w-full md:w-3/5 mt-8 md:mt-0 flex justify-center md:justify-end relative md:hidden">
            <div className="">
              <Image
                src={heroItems.imageMobile}
                alt="hero"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* Left Side  */}
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-2/5">
            <div className="w-full text-4xl md:text-6xl lg:text-7xl uppercase font-semibold text-center md:text-left leading-tight break-words">
              {t("title")}
            </div>
            <div className="text-center md:text-left">{t("description")}</div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
              <Link
                href={heroItems.buttonPrimaryLink}
                aria-label={t("buttonPrimaryText")}
              >
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-md w-full sm:w-auto text-white py-6 flex gap-2 items-center"
                >
                  <IconPresentation size={20} />
                  {t("buttonPrimaryText")}
                </Button>
              </Link>
              <Link
                href={heroItems.buttonSecondaryLink}
                aria-label={t("buttonSecondaryText")}
              >
                <Button
                  size="lg"
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-black dark:text-white text-md w-full sm:w-auto py-6 dark:border border-neutral-800 flex gap-2 items-center"
                >
                  <IconInfoCircle size={20} />
                  {t("buttonSecondaryText")}
                </Button>
              </Link>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 mt-8 md:mt-0 hidden justify-center md:justify-end relative md:flex">
            <div className="">
              <Image
                src={heroItems.image}
                alt="hero"
                width={450}
                height={450}
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
