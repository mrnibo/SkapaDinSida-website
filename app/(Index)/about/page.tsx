import BoxReveal from "@/components/ui/box-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { Meteors } from "@/components/ui/meteors";
import { IconBrandGithubCopilot, IconCup } from "@tabler/icons-react";
import React from "react";
{
  /*jooooon jadet kar kon */
}
export default function PageAbout() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-between h-screen">
          <Meteors number={30} />
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row gap-2">
              <div className="py-1 text-blue-700">
                <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                  <IconBrandGithubCopilot />
                </BoxReveal>
              </div>
              <div className="text-blue-700 font-semibold text-2xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                  <p>ABOUT US</p>
                </BoxReveal>
              </div>
            </div>
            <div>
              <div className="font-bold line-clamp-4 text-2xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                  <p>
                    We are a passionate team that strives to deliver the best
                    services and products to our customers. Our goal is to
                    exceed expectations and create long-lasting relationships
                    with our customers.
                  </p>
                </BoxReveal>
              </div>
            </div>
            <div
              className={
                "flex h-[500px] w-full flex-col gap-4 lg:h-[500px] lg:flex-row py-12"
              }
            >
              {/*items should be mapped */}
              <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl">
                Card
              </MagicCard>
              <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl">
                Card
              </MagicCard>
              <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl">
                Card
              </MagicCard>
            </div>

            <div className="flex flex-row gap-2">
              <div className="py-1 text-blue-700">
                <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                  <IconCup />
                </BoxReveal>
              </div>
              <div className="text-blue-700 font-semibold text-2xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                  <p>OUR TEAM</p>
                </BoxReveal>
              </div>
            </div>
            <div className="font-bold line-clamp-4 text-2xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.8}>
                <p>
                  Our team consists of experienced and committed employees who
                  are experts in their fields. We work together to deliver the
                  best solutions to our customers.
                </p>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
