import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import StatsClient from "../Stats/StatsClient";

const AboutClient = () => {
  return (
    <>
      <div className="relative flex max-w-7xl w-full mx-auto flex-col gap-2 md:gap-10 lg:gap-30 items-center justify-center overflow-hidden bg-background px-4 py-40">
        <Meteors number={30} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-2/5">
            <h2 className="text-2xl">Hello I'm Leo Khani</h2>
            <p>I'm a Professional Web Developer</p>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 flex justify-center md:justify-end mt-4 md:mt-0">
            <div className="relative">
              <Image
                src={"/photo_2024-10-29_16-30-41.jpg"}
                alt={"cat"}
                width={240}
                height={240}
              />
            </div>
          </div>
        </div>
      </div>
      <StatsClient />
    </>
  );
};

export default AboutClient;
