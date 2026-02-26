import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

// import React from 'react'
interface navbarProps {
  name: string;
  route: string;
}

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState<string>("Home");
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navbar: navbarProps[] = [
    { name: "Home", route: "/home" },
    { name: "Explore", route: "/explore" },
    { name: "My Orders", route: "/orders" },
    { name: "Account", route: "/account" },
  ];
  return (
    <nav className=" flex bg-white items-center justify-between md:justify-between md:gap-12 lg:gap-36 px-10 py-3">
      <Link to="/">
        <h1 className=" font-['Island_Moments'] text-[#FF7A18] text-4xl text-nowrap">
          Chuks Kitchen
        </h1>
      </Link>

      {/* <div className="hidden md:flex md:justify-between w-full items-center"> */}

      <div className=" hidden md:flex gap-6 lg:gap-12">
        {navbar.map((nav) => (
          <Link to={nav.route}>
            <div
              className={` px-2 text-nowrap text-base ${activeNavbar === nav.name && "text-[#FF7A18]"}`}
              onClick={() => setActiveNavbar(nav.name)}
            >
              {nav.name}
            </div>
          </Link>
        ))}
      </div>
      <div className=" hidden md:block">
        <Link to="">
          <Button
            text="Login"
            borderRadius="rounded-sm"
            BG="bg-[#FF7A18]"
            padding="py-2 px-7"
            textColor="text-white"
            textSize="text-base"
            border="border-none"
          />
        </Link>
      </div>
      {/* </div> */}

      {/*  */}
      <div className="  md:hidden" onClick={() => setShowMobileNav(true)}>
        <BiMenu size={40} />
      </div>

      {/* mobile nav */}
      {showMobileNav && (
        <div className=" h-screen bg-[#FF7A18] px-5 py-5 w-full fixed h left-0 top-0 z-9999">
          <div className=" flex items-center justify-between">
            <h1 className=" font-['Island_Moments'] text-white text-4xl">
              Chuks Kitchen
            </h1>
            <div>
              <BiX
                size={40}
                className=" text-white"
                onClick={() => setShowMobileNav(false)}
              />
            </div>
          </div>
          <div className=" flex w-full py-5 gap-4 p flex-col items-center">
            {navbar.map((nav) => (
              <Link to={nav.route}>
                <div className=" text-2xl hover:text-3xl text-white py-5 flex justify-center">
                  {nav.name}
                </div>
              </Link>
            ))}
          </div>
          <Link to="/home">
            <Button
              text="Login"
              borderRadius="rounded-sm"
              BG="bg-white"
              padding="py-2"
              textColor="text-black"
              textSize="text-lg"
              border="border-white border"
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
