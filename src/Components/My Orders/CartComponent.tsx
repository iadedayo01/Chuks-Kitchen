// import React from 'react'
import { Link } from "react-router-dom";
import IMG1 from "../../assets/Cart1.png";
import IMG2 from "../../assets/Cart2.png";
import IMG3 from "../../assets/Cart3.png";
import IMG4 from "../../assets/Cart4.png";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import Button from "../../Shared/Button";

interface cartItemsProps {
  image: string;
  name: string;
  info: string;
  price: string;
}

const CartComponent = () => {
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const cartItems: cartItemsProps[] = [
    {
      image: IMG1,
      name: "Jollof Rice & Fried Chicken",
      info: "With plantain, extra pepper sauce",
      price: "₦3,200",
    },
    {
      image: IMG2,
      name: "Jollof Rice & Fried Chicken",
      info: "With plantain, extra pepper sauce",
      price: "₦3,200",
    },
    {
      image: IMG3,
      name: "Jollof Rice & Fried Chicken",
      info: "With plantain, extra pepper sauce",
      price: "₦3,200",
    },
    {
      image: IMG4,
      name: "Jollof Rice & Fried Chicken",
      info: "With plantain, extra pepper sauce",
      price: "₦3,200",
    },
  ];
  return (
    <div className="  w-full py-5 px-10">
      <div className=" py-10 space-y-2 px-2 bg-white ">
        <h1 className=" text-lg lg:text-3xl font-bold py-3">Your Cart</h1>
        {cartItems.map((cart) => (
          <div className=" flex flex-wrap px-10 border shadow border-[#BDBDBD] rounded-sm items-center justify-between ">
            <div className=" py-2 size-40">
              <img src={cart.image} className=" h-full w-full rounded-sm" />
            </div>
            <div className=" flex flex-wrap gap-3 justify-center flex-col">
              <h1 className=" text-3xl font-bold">{cart.name}</h1>
              <h1 className=" text-2xl font-medium text-[#4B5563]">
                {cart.info}
              </h1>
            </div>
            <div className="flex items-center px-3 gap-10 py-1">
              <button
                className="cursor-pointer size-7.5 flex items-center justify-center rounded-lg bg-[#BDBDBD]"
                onClick={decrement}
              >
                <FiMinus />
              </button>
              <p className=" text-5xl font-medium">{count}</p>
              <button
                className="cursor-pointer size-7.5 flex items-center justify-center rounded-lg bg-[#BDBDBD]"
                onClick={increment}
              >
                <FiPlus />
              </button>
            </div>
            <div>
              <h1 className=" text-lg lg:text-3xl font-bold text-[#FF7A18]">
                {cart.price}
              </h1>
            </div>
            <div className=" size-6 cursor-pointer flex items-center justify-center">
              <button className=" text-[#FF7A18] text-xl">
                <MdOutlineCancelPresentation />
              </button>
            </div>
          </div>
        ))}
        <div className=" flex justify-between">
          <div className=" flex items-center text-[#1E88E5]">
            <h1>
              <FiPlus />
            </h1>
            <span className=" text-sm lg:text-base">
              Add more items from Chuks Kitchen
            </span>
          </div>
          <Link to="">
            <Button text="Proceed to Summary"
            BG="bg-[#FF7A18]"
            padding="py-2 px-1"
            textColor="text-white"
            border="border-none"
            textSize="text-base"
            borderRadius="rounded-sm"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
