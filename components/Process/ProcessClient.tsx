"use client";

import { useState, useEffect, useRef } from "react";
import { TitleSection } from "../ui/titles";
import { BorderBeam } from "../ui/border-beam";
import { BackgroundLines } from "../ui/background-lines";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We learn about your business, goals, and challenges in detail, taking time to understand your brand, industry, and audience. Through in-depth research and discussions, we identify opportunities and areas where we can add value, setting a solid foundation for our collaboration.",
  },
  {
    number: 2,
    title: "Strategy",
    description:
      "We develop a tailored plan to meet your objectives, combining insights from our discovery phase with our expertise in the field. This strategy serves as a roadmap, outlining each step and milestone, ensuring we stay aligned with your vision and reach your goals efficiently and effectively.",
  },
  {
    number: 3,
    title: "Design",
    description:
      "We create intuitive and engaging user experiences, focusing on aesthetics and functionality. Our design process emphasizes creating an interface that resonates with users and enhances your brand, making every interaction seamless, enjoyable, and memorable.",
  },
  {
    number: 4,
    title: "Development",
    description:
      "We build robust and scalable solutions, employing best practices and cutting-edge technologies. Our development process ensures the final product is reliable, fast, and secure, enabling you to grow and adapt to future needs without compromising performance or user experience.",
  },
  {
    number: 5,
    title: "Testing",
    description:
      "We ensure quality and performance across all devices through rigorous testing processes. From functionality to compatibility, our team examines every aspect to identify potential issues, ensuring your solution delivers a flawless experience to every user, regardless of device or platform.",
  },
  {
    number: 6,
    title: "Launch",
    description:
      "We deploy your project and provide ongoing support, ensuring a smooth transition from development to live. Our team monitors the launch and is on hand to address any immediate needs or adjustments, setting the stage for long-term success and continuous improvement.",
  },
];

export default function ProcessClient() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  if (!isVisible) return null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref}>
      <div className="relative">
        <BackgroundLines className=" w-full flex-col top-0 h-full hidden md:flex">
          <div className="flex justify-start items-start py-8">
            <TitleSection text="Our Process" className="px-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mx-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative group flex flex-col justify-center items-center md:items-start bg-gray-100 dark:bg-neutral-900 rounded-xl p-6 w-full h-[20rem] shadow-lg"
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex flex-col justify-start items-start mb-5">
                    <div className="text-blue-500 upercase text-sm font-bold mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      STEP {step.number}
                    </div>
                    <div className="bg-blue-500 w-4 h-1 rounded-full group-hover:translate-x-1 transition-transform duration-500"></div>
                  </div>
                  <h3 className="text-3xl font-semibold text-neutral-700 mb-4 dark:text-neutral-200 group-hover:translate-y-1 transition-transform duration-300">
                    {step.title}
                  </h3>
                  <p className="text-center text-[1rem] md:text-left translate-x-0.5 text-gray-600 dark:text-gray-300 max-w-sm group-hover:translate-y-1 transition-transform duration-500">
                    {step.description}
                  </p>
                </div>
                <BorderBeam
                  size={20}
                  duration={32}
                  delay={9}
                  colorFrom="#3b82f6"
                  colorTo="#3730a3"
                />
              </div>
            ))}
          </div>
        </BackgroundLines>
      </div>
    </section>
  );
}
