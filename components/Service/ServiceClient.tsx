"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  Smartphone,
  PenTool,
  ShoppingCart,
  BarChart,
  HeadphonesIcon,
} from "lucide-react";
import ServiceCards from "./ServiceCards";
import { TitleSection } from "../ui/titles";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Laptop className="h-20 w-20" />,
    title: "Web Development",
    description: "Custom websites tailored to your business needs.",
  },
  {
    icon: <Smartphone className="h-20 w-20" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications.",
  },
  {
    icon: <PenTool className="h-20 w-20" />,
    title: "UI/UX Design",
    description: "Intuitive and visually appealing user interfaces.",
  },
];

export default function ServiceShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 dark:bg-neutral-900 relative">
      <div className="container mx-auto px-4">
        <TitleSection text="Our Services" className="py-8 px-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <ServiceCards>
                <div className="flex flex-col items-center justify-center gap-4 ">
                  <div className="flex justify-center mb-4 group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <div className="text-xl font-bold group-hover:translate-y-2 transition-transform duration-300">
                    {service.title}
                  </div>

                  <p className="text-center text-gray-600 dark:text-gray-50 group-hover:translate-y-2 transition-transform duration-300">
                    {service.description}
                  </p>
                </div>
              </ServiceCards>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
