// import React from 'react'
import IMG from "../../assets/explorehero.png";

const ExploreHeroSection = () => {
  return (
    <div
      className="relative flex h-110 w-full flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${IMG})` }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-[#000000]/45"></div>

      {/* Content */}

      <div className="relative z-10 flex h-full w-full items-center justify-start px-10">
        <div className=" flex gap-3 flex-col">
          <h1 className=" text-5xl font-bold text-white">Chuks Kitchen</h1>
          <span className=" font-medium text-2xl text-white">Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</span>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeroSection;
