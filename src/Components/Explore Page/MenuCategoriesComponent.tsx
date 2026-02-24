// import React from 'react'

import { useState } from "react";

const MenuCategoriesComponent = () => {
  const menus = [
    "Popular",
    "Jollof Rice & Entrees",
    "Swallow & Soups",
    "Grills & sides",
    "Beverages",
    "Desserts",
  ];

    const [activeState, setActiveState] = useState("Popular")

  return (
    <div className=" py-10 px-5 ">
      <div className=" flex flex-col py-5 px-5 shadow rounded-t-xl bg-white">
        <div className=" py-5">
          <h1 className=" text-2xl font-semibold ">Menu Categories</h1>
        </div>
        {menus.map((menu) => (
          <div className={` cursor-pointer ${activeState === menu && "bg-[#FFE1C4]"}`} onClick={() => setActiveState(menu)}>
            <h1 className=" font-medium text-2xl">{menu}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoriesComponent;
