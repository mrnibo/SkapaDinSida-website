import { teamdateils } from "@/constants/Constants";
import React from "react";
import Image from "next/image";

const TeamCards = () => {
  return (
    <>
      <div className="relative flex max-w-7xl w-full mx-auto flex-col gap-2 md:gap-10 lg:gap-30 items-center justify-center overflow-hidden bg-background px-4 py-40">
        {/* Title for the Team Section */}

        <h2 className="text-3xl font-bold text-left w-full mb-4">OUR TEAM</h2>
        <div className="flex flex-row gap-8 w-full">
          {teamdateils.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-8 w-full p-4"
            >
              <div className="flex-shrink-0 mr-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-mb"
                />
              </div>
              {/* Text on the right */}
              <div className="flex flex-col">
                <h2 className="text-md font-semibold">{item.name}</h2>
                <p className="text-sm text-left">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamCards;
