import React from "react";

import { stats } from "@/constants/Constants";
import NumberTicker from "@/components/ui/number-ticker";

const StatsClient = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:py-12 justify-between">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="flex flex-row items-center">
              <h2 className="text-7xl font-semibold">
                <NumberTicker value={item.number} />
              </h2>
              <p className="ml-2 max-w-32 text-balance text-left text-[1rem]">
                {item.title}
              </p>{" "}
              {/* Added margin-left for spacing */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsClient;
