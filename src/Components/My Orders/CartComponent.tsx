// import React from 'react'
import IMG1 from "../../assets/Cart1.png";
import IMG2 from "../../assets/Cart2.png";
import IMG3 from "../../assets/Cart3.png";
import IMG4 from "../../assets/Cart4.png";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOutlineCancelPresentation } from "react-icons/md";

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
    <div className=" h-220 w-full py-5 px-10">
      <div className=" py-10 space-y-2 px-2 bg-white ">
        {cartItems.map((cart) => (
          <div className=" flex px-10 border border-[#BDBDBD] rounded-sm items-center justify-between ">
            <div className=" py-2 size-40">
              <img src={cart.image} className=" h-full w-full rounded-sm" />
            </div>
            <div className=" flex gap-3 justify-center flex-col">
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
              <h1 className=" text-3xl font-bold text-[#FF7A18]">
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
      </div>
    </div>
  );
};

export default CartComponent;
