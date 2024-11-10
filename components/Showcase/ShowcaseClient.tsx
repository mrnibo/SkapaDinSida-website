"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spacer } from "@/components/ui/spacer";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import FadeIn from "@/components/Animation/fade-in";

const data = [
  {
    title: "Foodie",
    description:
      "A vibrant and appetizing restaurant website showcasing delicious dishes and easy reservations.",
    imageSrc: "/images/projects/001-img-cover.png",
  },
  {
    title: "Özen Salong",
    description:
      "En modern och välkomnande frisörsalong, specialiserad på stil och skönhet med en personlig touch. Özen Salong erbjuder en avkopplande atmosfär där varje kunds unika stil och behov står i centrum.",
    imageSrc: "/images/projects/006-img-cover-3.png",
  },
  {
    title: "Colorfolio",
    description:
      "An AI-powered portfolio that generates unique color schemes, perfect for creative projects.",
    imageSrc: "/images/projects/003-img-cover.png",
  },
  {
    title: "Exclusive Store",
    description:
      "A sleek e-commerce platform built to highlight exclusive products and luxury items.",
    imageSrc: "/images/projects/004-img-cover.png",
  },
  {
    imageSrc: "/images/projects/005-img-cover.png",
  },
];

const words = [
  {
    text: "Selected",
  },
  {
    text: "Customer",
  },
  {
    text: "Cases",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function ShowcaseClient() {
  return (
    <section className="px-4 py-24">
      <div className="container mx-auto z-10">
        <div className="flex flex-col justify-center items-center gap-4 py-8">
          <TypewriterEffect words={words} />
          <p className="text-center text-gray-600 dark:text-neutral-400 max-w-2xl text-lg">
            Discover some of our latest projects, crafted to bring each
            client&apos;s unique vision to life. From sleek e-commerce platforms
            to dynamic agency portfolios, each website is designed with
            attention to detail and functionality.
          </p>
          <Spacer className="py-8" />
        </div>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <FadeIn
            delay={0.5}
            className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 lg:row-span-3"
            inView
          >
            <ShowcaseCard {...data[0]} aspectRatio="4/3" />
          </FadeIn>
          <FadeIn
            delay={0.7}
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 lg:row-span-3"
            inView
          >
            <ShowcaseCard {...data[1]} aspectRatio="4/5" />
          </FadeIn>
          <FadeIn
            delay={0.9}
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 md:row-span-2"
            inView
          >
            <ShowcaseCard {...data[2]} aspectRatio="1/1" />
          </FadeIn>
          <FadeIn
            delay={1.1}
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 md:row-span-2 hidden md:block"
            inView
          >
            <ShowcaseCard {...data[3]} aspectRatio="1/1" />
          </FadeIn>
          <FadeIn
            delay={1.3}
            className="col-span-1 row-span-1 md:row-span-2 hidden md:block"
            inView
          >
            <ShowcaseCard {...data[4]} aspectRatio="8/15" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

interface ShowcaseCardProps {
  title?: string;
  description?: string;
  imageSrc: string;
  aspectRatio?: string;
}

const ShowcaseCard = ({
  title,
  description,
  imageSrc,
  aspectRatio = "4/3",
}: ShowcaseCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      className="group bg-gray-200 rounded-xl border border-gray-200 flex justify-center items-center h-full relative overflow-hidden cursor-pointer"
    >
      {/* Black Overlay with opacity transition */}
      <motion.div
        variants={{ hover: { opacity: 0.5 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black z-10"
      />

      {/* Title and Description with fade-in transition */}
      {title && description && (
        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-1 right-1 md:left-4 text-black z-10 bg-gray-100 rounded-xl p-4 max-w-xl"
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
          <BorderBeam
            size={120}
            duration={30}
            delay={5}
            colorFrom="#3a2cd3"
            colorTo="#FFFFFF"
          />
        </motion.div>
      )}

      {/* Middle Button */}
      {!description && (
        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex justify-center items-center text-black bg-black/80 z-10 rounded-xl p-2"
        >
          <Link
            href="/contact"
            className="bg-gradient-to-tr from-blue-500 to-blue-600 shadow-lg text-white rounded-xl p-4 hover:-translate-y-2 duration-500 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      )}

      {/* Image Container with Aspect Ratio */}
      <div
        className="relative w-full h-full transition-transform duration-300 group-hover:scale-105 z-0"
        style={{ aspectRatio }}
      >
        <Image
          src={imageSrc}
          alt={title || "Project Image"}
          fill
          className="rounded-xl object-cover"
        />
      </div>
    </motion.div>
  );
};
