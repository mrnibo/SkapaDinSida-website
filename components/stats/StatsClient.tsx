import React from "react";

import { stats } from "@/constants/Constants";
import NumberTicker from "@/components/ui/number-ticker";

const StatsClient = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:py-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex-1 cursor-pointer flex-col items-center justify-center shadow-2xl  text-4xl m-2 p-4 "
          >
            <div className="flex flex-row items-center">
              <h2 className="text-md">
                <NumberTicker value={item.number} />
              </h2>
              <p className="text-sm text-center ml-2">{item.title}</p>{" "}
              {/* Added margin-left for spacing */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsClient;
