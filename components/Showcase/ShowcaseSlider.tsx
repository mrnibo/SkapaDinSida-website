"use client";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface Project {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

// State type for selectedProject, matching the structure of `Project`
type SelectedProject = Project | null;

export function ShowcaseSlider() {
  // State for managing modal

  // Mapping cards to include click handler for opening modal
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}

      // Add click handler to open modal with project data
    />
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

// Define type for `data` array items, matching the `Project` type
const data: Project[] = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/images/projects/001-img-cover.png",
    content: <DummyContent />, // This will serve as `description` in the modal
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/images/projects/001-img-cover-2.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/choose-us-1.webp",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/choose-us-1.webp",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/choose-us-1.webp",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/choose-us-1.webp",
    content: <DummyContent />,
  },
];
