import { teamdateils } from "@/constants/Constants";
import React from "react";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

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
              className="group flex flex-col md:flex-row justify-between items-center gap-4 w-full p-4 transition-transform transform hover:scale-105 duration-300 bg-gray-100 dark:bg-neutral-800 rounded-2xl shadow-md"
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
              <div className="flex justify-center items-center h-8 w-1 rounded-full bg-gray-500"></div>
              <div className="flex flex-col items-start justify-between text-left">
                <h2 className="text-xl font-semibold mt-2">{name}</h2>
                <h3 className="text-[0.9rem] text-gray-500 dark:text-neutral-400">
                  {title}
                </h3>
                <p className="text-sm">{description}</p>
                <div className="flex flex-row items-center gap-3 mt-2 bg-gray-200 dark:bg-neutral-800 rounded-2xl px-2 py-2">
                  {/* github link */}
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 group-hover:text-black group-hover:dark:text-white transition-colors duration-300"
                  >
                    {" "}
                    <IconBrandGithub size={20} />
                  </Link>
                  |{/* linkdin link */}
                  <Link
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 group-hover:text-black group-hover:dark:text-white transition-colors duration-300"
                  >
                    {" "}
                    <IconBrandLinkedin size={20} />
                  </Link>
                  |{/* twitter link */}
                  <Link
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 group-hover:text-black group-hover:dark:text-white transition-colors duration-300"
                  >
                    {" "}
                    <IconBrandX size={20} />
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TeamCards;
