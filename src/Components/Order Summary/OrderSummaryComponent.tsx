// import React from 'react'

import { useState } from "react";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import { Link } from "react-router-dom";

interface detailsProps {
  name: string;
  price: string;
}

const OrderSummaryComponent = () => {
  const [activeState, setActiveState] = useState("Delivery");

  const deliveryInfo = ["Delivery", "PickUp"];

  const details: detailsProps[] = [
    { name: "Subtotal", price: "#9,200" },
    { name: "Delivery Fee", price: "#500" },
    { name: "Service Fee", price: "#200" },
    { name: "Tax", price: "#0" },
  ];
  return (
    <div className=" h- py-5 lg:py-20 w-full flex items-center justify-center">
      <div className=" bg-white px-5 py-10 w-full shadow rounded-lg lg:basis-1/2 basis-3/4 flex flex-col">
        <div className=" border-b border-[#BDBDBD] py-1 w-full">
          <h1 className=" text-3xl font-bold">Order Summary</h1>
        </div>
        <div className=" py-4 space-y-2">
          <h1 className=" font-medium text-base lg:text-xl">Add a Promo Code</h1>
          <div className=" flex items-center gap-2">
            <Input
              type="text"
              placeholder="Enter Code here"
              name="promo"
              width="w-full"
              padding="py-2"
            />
            <Button
              BG="bg-[#FF7A18]"
              text="Login"
              textColor="text-white"
              border="border-none"
              borderRadius="rounded-lg"
              textSize="text-base"
              padding="px-6 py-2"
            />
          </div>
        </div>
        <div className=" border-b border-[#BDBDBD] py-3">
          {details.map((dets) => (
            <div className=" flex py-1 text-[#4B5563] text-base font-medium justify-between">
              <h1>{dets.name}</h1>
              <span>{dets.price}</span>
            </div>
          ))}
        </div>
        <div className=" flex justify-between py-4 text-2xl text-[#1F2937] font-semibold">
          <h1>Total</h1>
          <span>#9,900</span>
        </div>
        <div className=" rounded-lg flex justify-between">
          {deliveryInfo.map((info) => (
            <div
              className={` basis-1/2 text-base text-white py-3 text-center cursor-pointer ${info === activeState ? "bg-[#FF7A18]" : "bg-[#BDBDBD]"}`}
              onClick={() => setActiveState(info)}
            >
              {info}
            </div>
          ))}
        </div>
        <div className=" py-5">
          <h1 className=" font-medium text-xl lg:text-2xl">
            Special Instructions for Restaurant
          </h1>
          <Input
            name="instructions"
            width="w-full"
            padding="py-5"
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
          />
        </div>
        <Link to="">
          <Button
            BG="bg-[#FF7A18]"
            text="Proceed to Checkout"
            textColor="text-white"
            border="border-none"
            borderRadius="rounded-lg"
            textSize="text-base"
            padding="px-6 py-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
