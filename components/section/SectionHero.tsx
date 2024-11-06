"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useThemeSafe } from "@/hooks/useThemeSafe";
import { IconInfoCircle, IconPresentation } from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Spacer } from "@/components/ui/spacer";
import BlurFade from "@/components/ui/blur-fade";
import FadeIn from "@/components/Animation/fade-in";

// Delay function for testing loading states
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Lazy load components with delay
const Particles = React.lazy(() =>
  delay(0).then(() => import("@/components/ui/particles"))
);
const Image = React.lazy(() => delay(0).then(() => import("next/image")));

interface HeroProps {
  title: string;
  description: React.ReactNode;
  image: string;
  imageMobile?: string;
  buttonPrimaryText?: string;
  buttonPrimaryLink?: string;
  buttonSecondaryText?: string;
  buttonSecondaryLink?: string;
}

const SectionHero: React.FC<HeroProps> = ({
  title,
  description,
  image,
  imageMobile,
  buttonPrimaryText,
  buttonPrimaryLink,
  buttonSecondaryText,
  buttonSecondaryLink,
}) => {
  const { theme } = useThemeSafe();

  // Memoize color based on theme for performance
  const color = React.useMemo(
    () => (theme === "dark" ? "#ffffff" : "#000000"),
    [theme]
  );

  return (
    <div className="relative flex h-full md:h-screen max-w-7xl w-full mx-auto flex-col gap-10 md:gap-20 lg:gap-40 items-center justify-center overflow-hidden bg-background px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full py-20 md:py-0">
        {/* Mobile Image */}
        <div className="w-full md:w-3/5 mt-8 md:mt-0 flex justify-center md:justify-end relative md:hidden ">
          <Suspense
            fallback={<Skeleton className="h-[600px] w-[600px] rounded-xl" />}
          >
            <Image
              src={imageMobile || image}
              alt="hero"
              width={550}
              height={550}
              className="w-full h-full"
            />
          </Suspense>
        </div>

        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-2/5">
          <FadeIn yOffset={20} delay={0.25}>
            <h1 className="w-full text-4xl md:text-6xl lg:text-7xl uppercase font-semibold text-center md:text-left leading-tight break-words">
              {title}
            </h1>
          </FadeIn>
          <FadeIn yOffset={20} delay={0.25}>
            <Spacer className="py-4" />
          </FadeIn>
          <FadeIn yOffset={20} delay={0.35}>
            <p className="text-center text-lg md:text-left">{description}</p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
            {/* Conditionally Render Primary Button */}
            {buttonPrimaryText && buttonPrimaryLink && (
              <BlurFade delay={0.4}>
                <Link href={buttonPrimaryLink} aria-label={buttonPrimaryText}>
                  <Button
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 text-md w-full sm:w-auto text-white py-6 flex gap-2 items-center"
                  >
                    <IconPresentation size={20} />
                    {buttonPrimaryText}
                  </Button>
                </Link>
              </BlurFade>
            )}

            {/* Conditionally Render Secondary Button */}
            {buttonSecondaryText && buttonSecondaryLink && (
              <BlurFade delay={0.45}>
                <Link
                  href={buttonSecondaryLink}
                  aria-label={buttonSecondaryText}
                >
                  <Button
                    size="lg"
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-black dark:text-white text-md w-full sm:w-auto py-6 dark:border border-neutral-800 flex gap-2 items-center"
                  >
                    <IconInfoCircle size={20} />
                    {buttonSecondaryText}
                  </Button>
                </Link>
              </BlurFade>
            )}
          </div>
        </div>

        {/* Desktop Image */}
        <div className="w-full md:w-3/5 mt-8 md:mt-0 hidden justify-center md:justify-end relative md:flex">
          <FadeIn xOffset={50} delay={0.35}>
            <Suspense>
              <Image
                src={image}
                alt="hero"
                width={450}
                height={450}
                className="mb-2"
              />
            </Suspense>
          </FadeIn>
        </div>
      </div>

      {/* Background Particles */}
      <Suspense>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </Suspense>
    </div>
  );
};

export default SectionHero;
