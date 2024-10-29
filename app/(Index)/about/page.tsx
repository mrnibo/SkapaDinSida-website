import BoxReveal from "@/components/ui/box-reveal";
import { MagicCard } from "@/components/ui/magic-card";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { IconBrandGithubCopilot, IconCup } from "@tabler/icons-react";
import React from "react";
import {
  magicCardData,
  magicCardWithoutAvatarData,
} from "../../../constants/Constants";
import Image from "next/image";

export default function PageAbout() {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-4 p-4">
          {/* ABOUT US Section */}
          <div className="flex flex-row gap-2 items-center">
            <div className="py-1 text-blue-700">
              <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                <IconBrandGithubCopilot />
              </BoxReveal>
            </div>
            <div className="text-blue-700 font-semibold text-2xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                <p className="uppercase">about us</p>
              </BoxReveal>
            </div>
          </div>
          <div className="line-clamp-4 text-2xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.8}>
              <p>
                our passionate team is dedicated to delivering exceptional
                services and innovative products. We strive to exceed
                expectations and build lasting relationships based on trust and
                collaboration. Together, let’s create memorable experiences.
              </p>
            </BoxReveal>
          </div>

          {/* Magic Cards  */}
          <div className="flex flex-col gap-4 lg:flex-row lg:py-12">
            {magicCardWithoutAvatarData.map((item, index) => (
              <MagicCard
                key={index}
                className="w-full cursor-pointer items-center justify-center shadow-2xl  text-4xl m-2"
              >
                <div className="flex flex-col justify-center items-center gap-4">
                  <Image src={item.image} alt="pic" height={360} width={360} />
                  <h2 className="text-mb text-center">{item.title}</h2>
                  <p className="text-xl text-center ">{item.description}</p>
                </div>
              </MagicCard>
            ))}
          </div>

          {/* OUR TEAM Section */}
          <div className="flex flex-row gap-2 items-center">
            <div className="py-1 text-blue-700">
              <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                <IconCup />
              </BoxReveal>
            </div>
            <div className="text-blue-700 font-semibold text-2xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                <p className="uppercase">our team</p>
              </BoxReveal>
            </div>
          </div>
          <div className="line-clamp-4 text-2xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.8}>
              <p>
                Our talented team combines expertise and dedication to deliver
                outstanding solutions. Together, we are committed to achieving
                excellence for our customers.
              </p>
            </BoxReveal>
          </div>

          {/* Magic Cards with Avatars */}
          <div className="">
            <div className="flex flex-col justify-center items-center gap-4 lg:flex-row lg:py-12">
              {magicCardData.map((item, index) => (
                <MagicCard
                  key={index}
                  className="flex-1 cursor-pointer shadow-2xl text-4xl m-2 flex flex-col items-center justify-center w-64 h-64"
                >
                  <Avatar className="w-48 h-48">
                    <AvatarImage
                      src={item.src}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                    <AvatarFallback>{item.title}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl text-center">{item.title}</h2>
                  <p className="text-xl text-center">{item.description}</p>
                </MagicCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
