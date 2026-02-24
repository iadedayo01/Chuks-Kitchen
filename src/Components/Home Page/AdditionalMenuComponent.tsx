// import React from 'react'
import IMG from "../../assets/Addition.png";
import Button from "../../Shared/Button";

const AdditionalMenuComponent = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${IMG})` }}
    >
      <div className="absolute inset-0 bg-[#1D1D1D]/45"></div>

      {/* Content */}

      <div className=" relative z-10 flex h-full w-full items-center justify-start px-10">
        <div className=" flex space-y-5 flex-col">
          <h1 className=" font-extrabold text-lg lg:text-5xl text-white">
            Introducing Our New Menu Additions!
          </h1>
          <span className=" font-semibold text-white max-w-165 lg:leading-8.5 text-sm lg:text-2xl">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </span>
          <Button
            text="Discover what's new"
            textColor="text-white"
            padding="py-2 px-5"
            border="border-none"
            borderRadius="rounded-lg"
            BG="bg-[#FF7A18]"
            textSize="text-base"
            width="w-55"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalMenuComponent;
