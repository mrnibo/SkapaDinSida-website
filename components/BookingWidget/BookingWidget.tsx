"use client";
import React from "react";

const BookingWidget = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://tidycal.com/skapadinsida"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BookingWidget;
