"use client";

import { useEffect, useRef } from "react";
import { TitleSection } from "../ui/titles";
import { BorderBeam } from "../ui/border-beam";
import { BackgroundLines } from "../ui/background-lines";
import { useTranslations } from "next-intl";

export default function ProcessClient() {
  const ref = useRef<HTMLDivElement>(null);

  const t = useTranslations("steps");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  const steps = [
    { number: 1, title: t("0.title"), description: t("0.description") },
    { number: 2, title: t("1.title"), description: t("1.description") },
    { number: 3, title: t("2.title"), description: t("2.description") },
    { number: 4, title: t("3.title"), description: t("3.description") },
    { number: 5, title: t("4.title"), description: t("4.description") },
    { number: 6, title: t("5.title"), description: t("5.description") },
  ];

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
                className="relative group flex flex-col justify-center items-center md:items-start bg-gray-100 dark:bg-neutral-900 rounded-xl p-6 w-full h-[22rem] shadow-lg"
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
