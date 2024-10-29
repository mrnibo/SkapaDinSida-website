import { quality } from "@/constants/Constants";
import React from "react";
import Link from "next/link"; // Make sure to import Link from next/link for navigation

const QualityLines = () => {
  return (
    <div className="flex flex-col py-16">
      {quality.map((item, index) => (
        <div
          key={index}
          className="mb-4 flex flex-row items-center cursor-pointer hover:bg-purple-700 hover:text-white transition-colors duration-300 p-4 rounded-lg relative overflow-hidden"
        >
          {/* Shining border effect */}
          <div className="absolute inset-0 border-2 border-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          {/* Optionally add an icon here */}
          <h2 className="text-2xl md:text-3xl font-semibold mx-4 z-10">
            {item.title}
          </h2>{" "}
          {/* Responsive font size */}
          <p className="text-base md:text-2xl text-left py-2 z-10">
            {item.description}
          </p>{" "}
          {/* Responsive font size */}
        </div>
      ))}
      <Link
        href="/more"
        className="mt-4 text-lg text-purple-600 hover:text-purple-800 transition-colors duration-300"
      >
        More &rarr;
      </Link>
    </div>
  );
};

export default QualityLines;
