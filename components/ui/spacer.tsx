import React from "react";

interface SpacerProps {
  className?: string;
}
export const Spacer: React.FC<SpacerProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center gap-1 ${className}`}
    >
      <div className="w-4 h-2 bg-blue-500 rounded-full self-center"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full self-center"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full self-center"></div>
    </div>
  );
};
