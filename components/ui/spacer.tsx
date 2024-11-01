import React from "react";

export const Spacer = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      <div className="w-4 h-2 bg-blue-500 rounded-full self-center"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full self-center"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full self-center"></div>
    </div>
  );
};
