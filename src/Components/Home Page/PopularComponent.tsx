// import React from 'react'
import IMG1 from "../../assets/Food1.png";
import IMG2 from "../../assets/Food2.png";
import IMG3 from "../../assets/Food3.png";
import IMG4 from "../../assets/Food4.png";
import Input from "../../Shared/Input";
import { FaSearch } from "react-icons/fa";

interface categoriesProps {
  name: string;
  image: string;
}

const PopularComponent = () => {
  const categories: categoriesProps[] = [
    { name: "Jollof Delights", image: IMG1 },
    { name: "Swallow & Soups", image: IMG2 },
    { name: "Grills & BBQ", image: IMG3 },
    { name: "Sweet Treats", image: IMG4 },
    { name: "Jollof Delights", image: IMG2 },
    { name: "Jollof Delights", image: IMG3 },
  ];
  return (
    <>
      <div className=" px-5 py-20 relative flex flex-col">
        <div className=" flex w-full absolute top-0 items-center justify-center -translate-y-4">
          <Input
            padding="py-2"
            type="text"
            placeholder="What are you craving for today?"
            name="search"
            BG="bg-white"
            icon={<FaSearch />}
            width="w-full max-w-[800px]"
          />
        </div>

        <div className=" flex justify-center">
          <h1 className="font-bold lg:text-3xl text-[#1F2937]">
            Popular Categories
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 px-5 gap-10">
          {categories.map((category) => (
            <div className=" rounded-xl shadow hover:bg-gray-50 cursor-pointer bg-white">
              <img className=" rounded-t-xl" src={category.image} />
              <div className=" flex bg-wite py-10 text-center justify-center">
                <h1 className=" font-semibold text-2xl text-[#1F2937]">
                  {category.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularComponent;
