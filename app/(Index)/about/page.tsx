import BoxReveal from "@/components/ui/box-reveal";
import { Meteors } from "@/components/ui/meteors";
import { IconBrandGithubCopilot } from "@tabler/icons-react";
import React from "react";

export default function PageAbout() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-between h-screen">
          <Meteors number={30} />
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row gap-2">
              <div className="py-1 text-blue-700">
                <BoxReveal>
                  <IconBrandGithubCopilot />
                </BoxReveal>
              </div>
              <div className="text-blue-700 font-semibold text-2xl">
                <BoxReveal>
                  <p>ABOUT US</p>
                </BoxReveal>
              </div>
            </div>
            <div>
              <div className="font-bold line-clamp-4 text-2xl">
                <BoxReveal>
                  <p>
                    We are a passionate team that strives to deliver the best
                    services and products to our customers. Our goal is to
                    exceed expectations and create long-lasting relationships
                    with our customers.
                  </p>
                </BoxReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
