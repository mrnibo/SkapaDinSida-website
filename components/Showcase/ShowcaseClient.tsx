"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShowcaseProjectCard } from "./ShowcaseProjectCard";
import { ShowcaseProjectModal } from "./ShowcaseProjectModal";
import { useModal } from "./use-modal";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack online shopping platform",
    image: "/images/test2.png",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description: "An iOS and Android app for tracking workouts",
    image: "/images/test2.png",
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive charts and graphs for big data",
    image: "/images/test2.png",
    category: "Data Science",
  },
  {
    id: 4,
    title: "AI Chatbot",
    description: "Natural language processing bot for customer service",
    image: "/images/test2.png",
    category: "Artificial Intelligence",
  },
  {
    id: 5,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-sig support",
    image: "/images/test2.png",
    category: "Blockchain",
  },
  {
    id: 6,
    title: "IoT Home Automation",
    description: "Smart home system with voice control",
    image: "/images/test2.png",
    category: "Internet of Things",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Artificial Intelligence",
  "Blockchain",
  "Internet of Things",
];

/**
 * Portfolio component renders a section with a title, a filterable list of project cards and a modal
 * to display project details.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ShowcaseClient() {
  const [filter, setFilter] = useState("All");
  const { isOpen, selectedProject, openModal, closeModal } = useModal();

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ShowcaseProjectCard
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {isOpen && selectedProject && (
        <ShowcaseProjectModal
          project={selectedProject}
          isOpen={isOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
