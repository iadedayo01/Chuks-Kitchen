// import React from 'react'
// import IMG from "../../assets/info.png";
import IMG1 from "../../assets/Popular5.png";
import IMG2 from "../../assets/Popular1.png";
import IMG3 from "../../assets/Popular2.png";
import IMG4 from "../../assets/Popular3.png";
import IMG5 from "../../assets/Popular4.png";
import { Link, useLocation } from "react-router-dom";
import { CiStopwatch } from "react-icons/ci";
import type { ReactElement } from "react";
import ChooseProteinComponent from "./ChooseProteinComponent";
import ExtraSidesComponent from "./ExtraSidesComponent";
import SpecialInstructionComponent from "./SpecialInstructionComponent";
import Button from "../../Shared/Button";

interface productInfoProps {
  image: string;
  name: string;
  info: string;
  price: string;
  id: number;
}

interface optionsProps {
  icon: ReactElement;
  info: string;
}

const ProductInfoComponent = () => {
  const productInfo: productInfoProps[] = [
    {
      id: 1,
      image: IMG1,
      name: "Jollof Rice & Fried Chicken",
      info: "Our signature Jollof rice, served with crispy fried chicken and plantain. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.",
      price: "#3,500",
    },
    {
      id: 2,
      image: IMG2,
      name: "Eba & Egusi Soup (Goat Meat)",
      info: "Hearty Egusi soup with tender goat meat, served with soft Eba. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.",
      price: "#3,500",
    },
    {
      id: 3,
      image: IMG3,
      name: "Pounded Yam & Edikaikong",
      info: "Traditional pounded yam with rich, leafy Edikaikong soup. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.",
      price: "#3,800",
    },
    {
      id: 4,
      image: IMG4,
      name: "Peppered Snail",
      info: "Spicy and savory peppered snail, perfect as a starter. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.",
      price: "#2,500",
    },
    {
      id: 5,
      image: IMG5,
      name: "Grilled Tilapia Fish",
      info: "Whole grilled tilapia seasoned with our special spices. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.",
      price: "#4,500",
    },
    {
      id: 6,
      image: IMG1,
      name: "Jollof Rice & Fried Chicken",
      info: "Our signature Jollof rice, served with crispy fried chicken and plantain. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.",
      price: "#3,500",
    },
  ];

  const options: optionsProps[] = [
    { icon: <CiStopwatch />, info: "Mildly Spicy" },
    { icon: <CiStopwatch />, info: "Vegetarian option available" },
    { icon: <CiStopwatch />, info: "View Allergies" },
  ];

  const location = useLocation();
  const id = location.state.id;

  console.log(id);

  const selectedProduct = productInfo.find(
    (productInfo) => productInfo.id == id,
  );
  console.log(selectedProduct);

  if (!selectedProduct) {
    return (
      <div className=" h-screen w-full flex items-center justify-center">
        <h1 className=" text-4xl text-red">Not found</h1>
      </div>
    );
  }

  return (
    <div className=" h-full w-full">
      <div className=" grid grid-cols-1 lg:grid-cols-2 h-full  w-full">
        {/* Left Banner */}
        <div className=" lg:basis-1/2 h-full w-full">
          <img
            src={selectedProduct?.image}
            className=" h-full w-full object-cover"
          />
        </div>
        {/* Right Banner */}
        <div className=" lg:basis-1/2 h-fit w-full flex py-3 px-5 flex-col">
          <div className=" bg-white py-5 shadow rounded-sm flex flex-col">
            <div className=" px-5 flex flex-col gap-2">
              <h1 className=" text-3xl font-bold">{selectedProduct?.name}</h1>
              <span className=" font-semibold text-2xl text-[#FF7A18]">
                {selectedProduct?.price}
              </span>
              <span className=" font-normal text-base leading-5">
                {selectedProduct?.info}
              </span>
              <div className=" flex flex-wrap justify-between">
                {options.map((option, index) => (
                  <div className=" gap-1 items-center flex">
                    <h1 className=" text-xl">{option.icon}</h1>
                    <h1
                      className={` text-base ${index == 2 && "text-[#1E88E5]"}`}
                    >
                      {option.info}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <ChooseProteinComponent />
            <ExtraSidesComponent />
            <SpecialInstructionComponent />
            <Link to="/orders">
              <div className=" px-5">
                <Button
                  text="Add to Cart"
                  BG="bg-[#FF7A18]"
                  padding="py-2"
                  textColor="text-white"
                  border="border-none"
                  borderRadius="rounded-lg"
                  textSize="text-base"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoComponent;
