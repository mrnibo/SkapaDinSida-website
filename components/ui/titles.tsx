import React from "react";

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
      <div className="flex justify-center sm:justify-start items-center gap-2 uppercase text-4xl font-semibold px-4">
        <span className="text-blue-500 text-lg group-hover:translate-x-1 scale-95 transition-transform duration-300 ">
          &lt;
        </span>
        {text}
        <span className="text-blue-500 text-lg group-hover:-translate-x-1 scale-95 transition-transform duration-300 ">
          /&gt;
        </span>
      </div>
    </div>
  );
};
