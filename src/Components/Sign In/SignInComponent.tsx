// import React from 'react'
import IMG from "../../assets/Rectangle 1.png";
import { FiMail, FiLock } from "react-icons/fi";
import Input from "../../Shared/Input";
import { Link } from "react-router-dom";
import Button from "../../Shared/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignInComponent = () => {
  return (
    <div className=" flex py-5 md:py-0 items-center h-fit w-full">
      {/* Left Banner */}
      <div
        className=" hidden relative md:py-0 md:flex basis-1/2 w-full h-screen flex-col bg-cover"
        style={{ backgroundImage: `url(${IMG})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#FF7A18B2]/70"></div>

        {/* Content */}
        <div className=" relative z-10 flex h-full w-full items-center justify-center">
          <div className=" flex py-20 max-w-105 flex-col gap-3 justify-center items-center">
            <h1 className=" font-bold text-white text-5xl">Chuks Kitchen</h1>
            <span className=" text-center font-medium text-2xl text-white">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </span>
          </div>
        </div>
      </div>
      {/* Right Banner */}
      <div className=" md:basis-1/2 flex lg:basis-1/2 flex-col px-10 lg:px-30 justify-center space-y-3 w-full h-full">
        <div className=" text-center">
          <h1 className=" text-4xl font-['Island_Moments'] font-normal text-[#FF7A18]">
            Chuks Kitchen
          </h1>
          <span className=" font-medium font-['Inter'] text-sm lg:text-2xl">
            Login your Account
          </span>
        </div>
        <div>
          <Input
            label="Email or phone number"
            name="email"
            type="email"
            padding="py-2"
            placeholder="name@gmail.com"
            icon={<FiMail />}
          />

          <Input
            label="Password"
            name="password"
            padding="py-2"
            type="password"
            placeholder="******"
            icon={<FiLock />}
          />
        </div>
        <div className=" flex justify-end">
          <Link to="">
            <span className=" text-xs font-normal text-[#1E88E5]">
              Forgot password?
            </span>
          </Link>
        </div>
        <Button
          text="Continue"
          BG="bg-[#FF7A18]"
          padding="py-2"
          textColor="text-white"
          border="border-none"
          borderRadius="rounded-lg"
          textSize="text-base"
        />
        <span className=" flex justify-center text-xs text-[#1F2937]">
          Or continue with
        </span>
        <div className=" py-3 flex flex-col gap-4">
          <Link to="https://google.com">
            <Button
              text="Continue with Google"
              BG="bg-[#FFFFFF]"
              padding="py-1"
              textColor="text-[#3B4758]"
              border="border border-{#BDBDBD]"
              borderRadius="rounded-lg"
              font="font-roboto"
              textSize="text-sm"
              icon={<FcGoogle />}
            />
          </Link>
          <Link to="https://apple.com">
            <Button
              text="Continue with Apple"
              BG="bg-[#FFFFFF]"
              padding="py-1"
              textColor="text-[#3B4758]"
              border="border border-{#BDBDBD]"
              borderRadius="rounded-lg"
              font="font-roboto"
              textSize="text-sm"
              icon={<FaApple />}
            />
          </Link>
        </div>
        <div className=" text-xs font-normal justify-center flex">
          <h1 className=" text-[#616161]">
            Don't have an account?
            <Link to="/signup">
              <span className=" text-[#1C7FF9]"> Create an account</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
