import type { ReactElement } from "react";
import IMG1 from "../../assets/Jollof1.png";
import IMG2 from "../../assets/Popular5.png";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

// import React from 'react'
interface jRiceProps {
  image: string;
  id: number;
  name: string;
  info: string;
  price: string;
  addIcon: ReactElement;
}

const JollofRiceComponent = () => {
  const jRice: jRiceProps[] = [
    {
        id: 7,
      image: IMG1,
      name: "Jollof Rice & Smoked Fish",
      info: "Flavorful jollof rice served with perfectly smoked fish.",
      price: "#3,500",
      addIcon: <FaCirclePlus />,
    },
    {
        id: 8,
      image: IMG2,
      name: "Party Jollof Rice (Veg)",
      info: "Delicious vegetarian party jollof, full of rich flavors.",
      price: "#2,800",
      addIcon: <FaCirclePlus />,
    },
    {
        id: 9,
      image: IMG2,
      name: "Party Jollof Rice (Veg)",
      info: "Delicious vegetarian party jollof, full of rich flavors.",
      price: "#3,500",
      addIcon: <FaCirclePlus />,
    },
  ];
  return (
    <div className=" px-5">
      <div>
        <h1 className=" font-bold text-3xl text-[#1F2937]">
          Jollof Rice & Entrees
        </h1>
      </div>
      <div className=" grid grid-cols-3 gap-10 py-8 px-5">
        {jRice.map((rice) => (
          <Link to={`/explore/product-info/${rice.id}`} state={{ id: rice.id}}>
            <div className=" bg-white gap-5 space-y-3 shadow hover:bg-gray-50 rounded-xl">
              <img src={rice.image} alt="image" className=" rounded-t-xl" />
              <div className=" px-3">
                <h1 className=" font-semibold text-xl text-[#1F2937]">
                  {rice.name}
                </h1>
                <span className=" text-[#1F2937] text-base font-medium">
                  {rice.info}
                </span>
              </div>
              <div className=" flex px-3 py-2 justify-between">
                <span className=" text-base font-medium text-[#FF7A18]">
                  {rice.price}
                </span>
                <h1 className=" cursor-pointer text-[#FF7A18]">
                  {rice.addIcon}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JollofRiceComponent;
