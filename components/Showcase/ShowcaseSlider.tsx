"use client";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface Project {
  category: string;
  title: string;
  src: string;
  link: string;
  content: React.ReactNode;
}

export function ShowcaseSlider() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} link={card.link} />
  ));

  return (
    <div className="w-full h-full py-0">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
        </div>
      ))}
    </>
  );
};

const data: Project[] = [
  {
    category: "Restaurant",
    title: "Foodie - A Feast for the Senses",
    src: "/images/projects/001-img-cover.png",
    link: "https://resturant-template-main.vercel.app/", // Placeholder image
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Welcome to Foodie!
          </span>{" "}
          Savor a world of flavors crafted to perfection. Join us for a
          memorable culinary journey.
        </p>
      </div>
    ),
  },
  {
    category: "Online Store",
    title: "Exclusive - Luxury Shopping Redefined",
    src: "/images/projects/002-img-cover.png",
    link: "https://nibo-e-commerce.vercel.app/",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Exclusive - Where Luxury Meets You
          </span>{" "}
          Discover exclusive collections of premium products designed for
          elegance and class.
        </p>
      </div>
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "ColorFolio - AI-Driven Palette Creation",
    src: "/images/projects/003-img-cover.png",
    link: "https://colorfolio.app/",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            ColorFolio - Generate Color Palettes Effortlessly
          </span>{" "}
          Use AI to design stunning color schemes for any project with
          ColorFolio. Let creativity flow.
        </p>
      </div>
    ),
  },
  // Remaining items if needed
];
