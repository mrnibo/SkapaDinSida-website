"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "We learn about your business, goals, and challenges.",
  },
  {
    number: 2,
    title: "Strategy",
    description: "We develop a tailored plan to meet your objectives.",
  },
  {
    number: 3,
    title: "Design",
    description: "We create intuitive and engaging user experiences.",
  },
  {
    number: 4,
    title: "Development",
    description: "We build robust and scalable solutions.",
  },
  {
    number: 5,
    title: "Testing",
    description: "We ensure quality and performance across all devices.",
  },
  {
    number: 6,
    title: "Launch",
    description: "We deploy your project and provide ongoing support.",
  },
];

export default function ProcessClient() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`flex flex-col items-center mb-8 md:mb-0 md:w-1/3 ${
                index % 2 === 0 ? "md:mt-0" : "md:mt-16"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <svg
                    className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-1/4"
                    width="100"
                    height="20"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H90M90 10L80 0M90 10L80 20"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-center text-gray-600 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
