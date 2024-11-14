import React from "react";
import { useTranslations } from "next-intl";
import NumberTicker from "@/components/ui/number-ticker";
import FadeIn from "@/components/Animation/fade-in";

const StatsClient = () => {
  const t = useTranslations("about.aboutUs");

  // Retrieve stats items dynamically and parse numbers
  const stats = Object.entries(
    t.raw("stats") as Record<string, { number: string; title: string }>
  ).map(([, stat]) => ({
    number: parseInt(stat.number, 10),
    title: stat.title,
  }));

  return (
    <div className="flex flex-col justify-center md:flex-row lg:py-2 md:justify-between gap-16">
      {stats.map((item, index) => (
        <FadeIn
          key={index}
          delay={index * 0.3}
          className="flex items-center justify-center"
          inView
        >
          <div className="flex flex-row items-center">
            <h2 className="text-7xl font-semibold">
              <NumberTicker value={item.number} />
            </h2>
            <p className="ml-2 max-w-32 text-balance text-left text-[1.4rem]">
              {item.title}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default StatsClient;
