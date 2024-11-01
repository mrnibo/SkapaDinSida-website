import { quality } from "@/constants/Constants";
import React from "react";
import Link from "next/link"; 


const QualityLines = () => {
  return (
    <div className="flex flex-col py-16">
      {quality.map((item, index) => (

        <div
          key={index}
          className="mb-4 flex flex-row items-center cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300 p-4 rounded-lg relative overflow-hidden border border-purple-900"
        >


          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          {/* Optionally add an icon here */}
         
          <h2 className="text-xl md:text-2xl font-semibold mx-4 z-10 ">
            {item.title}
          </h2>
       
          {/* Responsive font size */}
          <p className="text-base md:text-md text-left py-2 z-10">
            {item.description}
          </p>{" "}
       
          {/* Responsive font size */}
        </div>
      ))}
      <Link
        href="/more"
        className="mt-4 text-lg text-blue-500 hover:text-blue-800 transition-colors duration-300"
      >
        More &rarr;
      </Link>
    </div>
  );
};

export default QualityLines;
