// import React from 'react'

import AdditionalMenuComponent from "../Components/Home Page/AdditionalMenuComponent";
import ChefSpecialComponent from "../Components/Home Page/ChefSpecialComponent";
import HeroSection from "../Components/Home Page/HeroSectionComponent";
import PopularComponent from "../Components/Home Page/PopularComponent";

const Homepage = () => {
  return (
    <div className=" bg-[#F3F4F6]">
      <HeroSection />
      <PopularComponent />
      <ChefSpecialComponent />
      <AdditionalMenuComponent />
    </div>
  );
};

export default Homepage;
