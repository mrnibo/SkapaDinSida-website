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
import { ServiceCard } from "./ServiceCards";
import { CardSpotlight } from "../ui/card-spotlight";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom websites tailored to your business needs.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications.",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Intuitive and visually appealing user interfaces.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "E-commerce Solutions",
    description: "Robust online stores and payment integrations.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Data Analytics",
    description: "Insights and visualizations from your data.",
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and maintenance.",
  },
];

export default function ServiceShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full transition-all duration-300 ease-in-out transform hover:scale-105"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button
                    variant="outline"
                    className={`transition-colors duration-300 ${
                      hoveredIndex === index
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
