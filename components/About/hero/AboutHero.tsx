import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TitleSection } from "@/components/ui/titles";

interface SpacerProps {
  className?: string;
}
const AboutClient: React.FC<SpacerProps> = ({ className }) => {
  const t = useTranslations("aboutUs");
  return (
    <>
      <div className={className}>
        <div className="relative flex max-w-7xl w-full mx-auto flex-col gap-2 items-center justify-center bg-background px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-2/5">
              <TitleSection
                text={t("title")}
                className="text-gray-700 dark:text-gray-400 mb-5"
              />
              <h2 className="text-4xl mx-4 font-bold">{t("subtitle")}</h2>

              <div className=" w-8 h-1 bg-blue-500 rounded-full self-center m-2"></div>

              <p className="mx-4 dark:text-gray-100">{t("description")}</p>
            </div>
            {/* Right Side */}
            <div className="w-full md:w-3/5 flex justify-center md:justify-end mt-4 md:mt-0">
              <div className="relative">
                <Image
                  src={"/images/Programming.svg"}
                  alt={"cat"}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutClient;
