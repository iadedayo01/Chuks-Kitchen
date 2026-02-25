// import React from 'react'
import type { ReactElement } from "react";
import IMG1 from "../../assets/Popular5.png";
import IMG2 from "../../assets/Popular1.png";
import IMG3 from "../../assets/Popular2.png";
import IMG4 from "../../assets/Popular3.png";
import IMG5 from "../../assets/Popular4.png";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface popularMenuProps {
  image: string;
  name: string;
  info: string;
  price: string;
  addIcon: ReactElement;
  id: number;
}

const PopularComponent = () => {
  const popularMenu: popularMenuProps[] = [
    {
      id: 1,
      image: IMG1,
      name: "Jollof Rice & Fried Chicken",
      info: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "#3,500",
      addIcon: <FaCirclePlus />,
    },
    {
      id: 2,
      image: IMG2,
      name: "Eba & Egusi Soup (Goat Meat)",
      info: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      price: "#3,500",
      addIcon: <FaCirclePlus />,
    },
    {
      id: 3,
      image: IMG3,
      name: "Pounded Yam & Edikaikong",
      info: "Traditional pounded yam with rich, leafy Edikaikong soup.",
      price: "#3,800",
      addIcon: <FaCirclePlus />,
    },
    {
      id: 4,
      image: IMG4,
      name: "Peppered Snail",
      info: "Spicy and savory peppered snail, perfect as a starter.",
      price: "#2,500",
      addIcon: <FaCirclePlus />,
    },
    {
      id: 5,
      image: IMG5,
      name: "Grilled Tilapia Fish",
      info: "Whole grilled tilapia seasoned with our special spices.",
      price: "#4,500",
      addIcon: <FaCirclePlus />,
    },
    {
      id: 6,
      image: IMG1,
      name: "Jollof Rice & Fried Chicken",
      info: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "#3,500",
      addIcon: <FaCirclePlus />,
    },
  ];
  return (
    <div className=" px-5">
      <div>
        <h1 className=" font-bold text-lg lg:text-3xl text-[#1F2937]">Popular</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8 px-5">
        {popularMenu.map((popular) => (
          <Link to={`/explore/product-info/${popular.id}`} state={{ id: popular.id }}>
            <div className=" bg-white gap-5 space-y-3 shadow hover:bg-gray-50 rounded-xl">
              <img src={popular.image} alt="image" className=" rounded-t-xl" />
              <div className=" px-3">
                <h1 className=" font-semibold text-lg lg:text-xl text-[#1F2937]">
                  {popular.name}
                </h1>
                <span className=" text-[#1F2937] text-sm lg:text-base font-medium">
                  {popular.info}
                </span>
              </div>
              <div className="relative flex px-3 py-2 justify-between">
                <span className=" text-base font-medium text-[#FF7A18]">
                  {popular.price}
                </span>
                <Link to="/orders">
                  <div className=" absolute right-2">
                    <h1 className=" text-lg cursor-pointer text-[#FF7A18]">
                      {popular.addIcon}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularComponent;
