// import React from 'react'
import type { ReactElement } from "react";
import { CgShapeCircle } from "react-icons/cg";

interface chooseProteinProps {
  icon: ReactElement;
  name: string;
  price: string;
}

const ChooseProteinComponent = () => {
  const chooseProtein: chooseProteinProps[] = [
    { icon: <CgShapeCircle />, name: "Fried Chicken", price: "(Default)" },
    { icon: <CgShapeCircle />, name: "Grilled Fish", price: "+#500" },
    { icon: <CgShapeCircle />, name: "Beef", price: "+#700" },
  ];
  return (
    <div className=" flex flex-col px-5 py-4">
      <div>
        <h1 className=" text-2xl font-medium">Choose Your Protein</h1>
      </div>
      <div className=" flex gap-2 flex-col py-2">
        {chooseProtein.map((protein) => (
          <div className=" flex border rounded-lg border-[#BDBDBD] py-1 px-2 shadow justify-between">
            <div className=" flex items-center gap-2">
                <h1 className=" text-[#FF7A18] text-3xl">{protein.icon}</h1>
                <h1>{protein.name}</h1>
            </div>
            <div>
                <h1>{protein.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseProteinComponent;
