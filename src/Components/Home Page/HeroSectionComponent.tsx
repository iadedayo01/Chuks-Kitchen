// import React from 'react'
import IMG from "../../assets/Hero.png";
import Button from "../../Shared/Button";

const HeroSection = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${IMG})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-start px-10">
        <div className=" flex max-w-140 flex-col space-y-5">
          <h1 className=" font-bold text-4xl text-white">
            The Home of Nigerian Home Cooking
          </h1>
          <span className=" font-bold text-white text-2xl">
            Handcrafted with passion, delivered with care.
          </span>
          <Button
            text="Discover what's new"
            BG="bg-[#FF7A18]"
            padding="py-2 px-5"
            textColor="text-white"
            border="border-none"
            textSize="text-base"
            borderRadius="rounded-sm"
            width="w-55"
          />
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
