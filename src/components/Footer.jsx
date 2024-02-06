/** @format */

import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-3 h-3 rounded-full border-4 border-[#fff] bg-transparent"></div>
        <div className="w-[100%] md:w-[92%] h-1 bg-white"></div>
        <div className="w-3 h-3 rounded-full border-4 border-[#fff] bg-transparent"></div>
      </div>
      <div>
        <img src="/ANR.png" alt="" />
      </div>
      {/* Section responsive */}
      <div className="flex justify-around gap-5">
        <div className="flex items-center justify-start">
          <div className="w-3 h-3 rounded-full border-4 border-[#fff] bg-transparent"></div>
          <div className="w-20 md:w-[400px] h-1 bg-white"></div>
        </div>
        <div className="px-5 md:px-0">
          {" "}
          {/* Ajout de padding sur cette div */}
          <h1 className="text-white  font-medium text-[20px] sm:text-[26px]">
            Portfolio 2024
          </h1>
        </div>
        <div className="flex items-center justify-start">
          <div className="w-20 md:w-[400px] sm:w-[100px] h-1 bg-white"></div>
          <div className="w-3 h-3 rounded-full border-4 border-[#fff] bg-transparent"></div>
        </div>
      </div>
    </>
  );
};
