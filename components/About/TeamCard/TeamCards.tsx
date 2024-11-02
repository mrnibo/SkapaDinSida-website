import { teamdateils } from "@/constants/Constants";
import React from "react";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Spacer } from "@/components/ui/spacer";

const TeamCards = () => {
  return (
    <div className="container mx-auto max-w-3xl py-6">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {teamdateils.map(
          (
            { image, name, title, description, github, linkedin, twitter },
            index
          ) => (
            <div
              key={index}
              className="group flex flex-row justify-between items-center gap-4 w-96 p-4 transition-transform transform hover:scale-105 duration-300 bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-md"
            >
              <div className="">
                <Image
                  src={image}
                  alt={name}
                  width={240}
                  height={240}
                  className="rounded-2xl w-28 h-28 object-center object-cover"
                />
              </div>
              <div className="hidden justify-center items-center h-8 w-1 rounded-full bg-blue-500 md:flex"></div>
              <Spacer className="block md:hidden pt-4" />
              <div className="flex flex-col items-start justify-between text-left">
                <h2 className="text-xl font-semibold mt-2">{name}</h2>
                <h3 className="text-[0.9rem] text-gray-500 dark:text-neutral-400">
                  {title}
                </h3>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TeamCards;
