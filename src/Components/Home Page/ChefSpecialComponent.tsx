// import React from 'react'
import IMG1 from "../../assets/Food5.png";
// import IMG2 from "../../assets/Food8.png";
import IMG3 from "../../assets/Food6.png";
import IMG4 from "../../assets/Food7.png";
import Button from "../../Shared/Button";

interface popularFoodProps {
  name: string;
  info: string;
  price: string;
  image: string;
}

const ChefSpecialComponent = () => {
  const popularFood: popularFoodProps[] = [
    {
      name: "Spicy Tilapia Pepper Soup",
      info: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      price: "#3,500",
      image: IMG1,
    },
    {
      name: "Jollof Rice & Fried Chicken",
      info: "Our Signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "#3,500",
      image: IMG3,
    },
    {
      name: "Jollof Rice & Fried Chicken",
      info: "Our Signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "#3,500",
      image: IMG3,
    },
    {
      name: "Jollof Rice & Smoked Chicken",
      info: "Our Signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
      price: "#3,500",
      image: IMG3,
    },
    {
      name: "Jollof Rice & Fried Chicken",
      info: "Our Signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "#3,500",
      image: IMG3,
    },
    {
      name: "Egusi Soup & Pounded Yam",
      info: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      price: "#3,500",
      image: IMG4,
    },
  ];
  return (
    <div className=" flex px-5 py-20 flex-col items-center">
      <div>
        <h1 className=" font-bold text-3xl">Chef's Special</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8 px-5">
        {popularFood.map((chef) => (
          <div className=" rounded-xl gap-5 shadow cursor-pointer hover:bg-gray-50 bg-white">
            <img className=" rounded-t-xl" src={chef.image} />
            <div className="flex px-3 py-1 gap-3 flex-col">
              <h1 className=" font-semibold text-lg lg:text-2xl text-[#1F2937]">{chef.name}</h1>
              <h1 className=" font-medium text-sm lg:text-lg leading-6 text-[#1F2937]">{chef.info}</h1>
            </div>
            <div className=" md:flex flex-row px-3 py-5 items-center justify-between">
              <h1 className=" font-medium text-base text-[#FF7A18] ">{chef.price}</h1>
              <Button text="Add to cart" textColor="text-white" border="border-none" BG="bg-[#FF7A18]" textSize="text-base" padding="py-2 px-5" borderRadius="rounded-lg"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSpecialComponent;
