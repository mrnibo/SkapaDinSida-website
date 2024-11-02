import React from "react";
import { Icon } from "../ui/evervault-card";

interface ServiceCardsProps {
  children: React.ReactNode;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className=" border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start justify-center max-w-md p-9 relative w-[25rem] h-[25rem] ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        {children}
      </div>
    </div>
  );
};

export default ServiceCards;
