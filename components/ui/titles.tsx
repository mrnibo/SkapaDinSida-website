import React from "react";
import BlurFade from "./blur-fade";

interface TitleSectionProps {
  text: string;
  className?: string;
}
export const TitleSection: React.FC<TitleSectionProps> = ({
  text,
  className,
}) => {
  return (
    <div className={`group ${className}`}>
      <BlurFade delay={0.25} inView>
        <div className="flex justify-center sm:justify-start items-center gap-2 uppercase text-2xl md:text-4xl font-semibold px-4">
          <span className="text-blue-500 text-lg group-hover:translate-x-1 scale-95 transition-transform duration-300 ">
            &lt;
          </span>
          {text}
          <span className="text-blue-500 text-lg group-hover:-translate-x-1 scale-95 transition-transform duration-300 ">
            /&gt;
          </span>
        </div>
      </BlurFade>
    </div>
  );
};
