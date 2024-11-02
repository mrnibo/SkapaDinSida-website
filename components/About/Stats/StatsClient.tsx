import React from "react";
import NumberTicker from "@/components/ui/number-ticker";
import { useTranslations } from "next-intl";

const StatsClient = () => {
  const t = useTranslations("aboutUs");
  const stats = t.raw("stats");

  return (
    <div className="flex flex-col justify-center md:flex-row lg:py-2 md:justify-between gap-16">
      {stats.map((item: any, index: any) => (
        <div key={index} className="flex items-center justify-center">
          <div className="flex flex-row items-center">
            <h2 className="text-7xl font-semibold">
              <NumberTicker value={item.number} />
            </h2>
            <p className="ml-2 max-w-32 text-balance text-left text-[1.4rem]">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsClient;