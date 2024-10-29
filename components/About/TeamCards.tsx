import { teamdateils } from "@/constants/Constants";
import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";

const TeamCards = () => {
  return (
    <>
      <div className="container mxx-auto">
        <div className="flex flex-row gap-8 justify-center items-center">
          {teamdateils.map((item, index) => (
            <MagicCard key={index} className=" cursor-pointer h-auto w-auto">
              <div className="flex flex-col justify-center items-center  ">
                <Image src={item.image} alt={"an"} width={60} height={60} />

                <h2 className="text-md">{item.name}</h2>
                <p className="text-sm text-center">{item.description}</p>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamCards;
