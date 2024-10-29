import { teamdateils } from "@/constants/Constants";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const TeamCards = () => {
  return (
    <div className="relative flex max-w-7xl w-full mx-auto flex-col gap-2 md:gap-10 lg:gap-30 items-center justify-center overflow-hidden bg-background px-4 py-40">
      {/* Title for the Team Section */}

      <div className="flex flex-col md:flex-row gap-8 w-full">
        {teamdateils.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 w-full p-4 transition-transform transform hover:scale-105 hover:bg-purple-700 hover:text-white rounded-lg shadow-md"
          >
            <div className="flex-shrink-0 mr-2">
              <Image
                src={item.image}
                alt={item.name}
                width={240}
                height={240}
                className="rounded"
              />
            </div>
            {/* Text on the right */}
            <div className="flex flex-col text-left">
              <h2 className="text-md font-semibold">{item.name}</h2>
              <p className="text-sm">{item.description}</p>

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-purple-600 hover:text-purple-800 transition-colors duration-300 cursor-pointer"
              >
                {" "}
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
