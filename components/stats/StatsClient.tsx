import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { stats } from "@/constants/Constants";
import NumberTicker from "@/components/ui/number-ticker";

const StatsClient = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:py-12">
        {stats.map((item, index) => (
          <MagicCard
            key={index}
            className="flex-1 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl m-2"
          >
            <div className="flex flex-row">
              <h2 className="text-md">
                <NumberTicker value={item.number} />
              </h2>
              <p className="text-sm text-center">{item.title}</p>
            </div>
          </MagicCard>
        ))}
      </div>
    </>
  );
};

export default StatsClient;
