import React from "react";
import TextReveal from "./text-reveal";
import { IconBrandAppleArcade } from "@tabler/icons-react";

interface TitleSectionProps {
  text: string;
  className?: string;
}
export const TitleSection: React.FC<TitleSectionProps> = ({
  text,
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex justify-center sm:justify-start items-center gap-2 uppercase text-4xl font-semibold px-4">
        <span className="text-blue-500 text-lg">&lt;</span>
        {text}
        <span className="text-blue-500 text-lg">/&gt;</span>
      </div>
    </div>
  );
};
