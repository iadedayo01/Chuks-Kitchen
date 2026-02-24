// import React from 'react'

import ExploreHeroSection from "../Components/Explore Page/ExploreHeroSection";
import JollofRiceComponent from "../Components/Explore Page/JollofRiceComponent";
import MenuCategoriesComponent from "../Components/Explore Page/MenuCategoriesComponent";
import PopularComponent from "../Components/Explore Page/PopularComponent";

const ExplorePage = () => {
  return (
    <div className=" bg-[#F3F4F6]">
      <ExploreHeroSection />
      <MenuCategoriesComponent />
      <PopularComponent />
      <JollofRiceComponent />
    </div>
  );
};

export default ExplorePage;
