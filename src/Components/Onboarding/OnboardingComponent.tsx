// import React from 'react'
import type { ReactElement } from "react";
import IMG from "../../assets/Rectangle 1.png";
import Button from "../../Shared/Button";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiTruckFill } from "react-icons/pi";
import { Link } from "react-router-dom";

interface detailsProps {
  icon: ReactElement;
  info: string;
}

const OnboardingComponent = () => {
  const details: detailsProps[] = [
    { icon: <PiForkKnifeFill />, info: "Freshly Prepared" },
    { icon: <PiForkKnifeFill />, info: "Support Local Businesses" },
    { icon: <PiTruckFill />, info: "Fast & Reliable Delivery" },
  ];
  return (
    <div className="lg:flex flex-row  w-full">
      {/* Left Banner */}
      <div className=" basis-1/2 w-full h-screen">
        <img
          src={IMG}
          alt="image"
          className=" h-full w-full object-cover object-top"
        />
      </div>

      {/* Right Banner */}

      <div className=" relative flex flex-col basis-1/2 w-full justify-center h-screen">
        <div className=" flex text-base px-10 space-y-3 items-start flex-col">
          <h1 className=" font-bold text-3xl text-[#1F2937]">
            Your Authentic Taste of Nigeria
          </h1>
          <h1 className=" text-base font-medium text-[#1F2937] ">
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </h1>
        </div>
        <div className=" grid py-8 px-10 gap-3 grid-cols-1 lg:grid-cols-2">
          {details.map((dets) => (
            <div className=" flex gap-3 items-center">
              <div className=" p-2 rounded-lg bg-[#FFE1C4] text-[#FF7A18] ">
                {dets.icon}
              </div>
              <h1 className=" text-base font-medium ">{dets.info}</h1>
            </div>
          ))}
        </div>
        <div className=" space-y-4 flex flex-col px-10">
          <Link to="/home">
            <Button
              text="Start Your Order"
              textColor="text-white"
              padding="py-2"
              BG="bg-[#FF7A18]"
              border="border-none"
              borderRadius="rounded-lg"
              textSize="text-base"
            />
          </Link>
          <Link to="">
            <Button
              text="Learn More About Us"
              textColor="text-[#1E88E5]"
              padding="py-2"
              BG="bg-white"
              border="border-2"
              borderRadius="rounded-lg"
              textSize="text-base"
            />
          </Link>
        </div>

        {/* Logo Header */}
        <div className=" absolute top-0 flex justify-between py-5 w-full px-10">
          <h1 className=" font-['Island_Moments'] text-[#FF7A18] text-4xl">
            Chuks Kitchen
          </h1>
          <Link to="/signin">
            <Button
              textColor="text-[#1E88E5]"
              borderRadius="rounded-lg"
              text="Sign In"
              padding="py-1 px-10"
              textSize="text-base"
              border="border-[2px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnboardingComponent;
