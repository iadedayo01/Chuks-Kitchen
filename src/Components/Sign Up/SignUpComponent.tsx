// import React from 'react'
import { FiLock, FiMail, FiPhone } from "react-icons/fi";
import IMG from "../../assets/Rectangle 1.png";
import Input from "../../Shared/Input";
import { Link } from "react-router-dom";
import Button from "../../Shared/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignUpComponent = () => {
  return (
    <div className=" flex md:py-0 items-center h-175 w-full ">
      {/* Left Banner */}
      <div
        className=" hidden relative md:flex basis-1/2 w-full h-full flex-col bg-cover"
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
      <div className=" md:basis-1/2 flex lg:basis-1/2 flex-col px-10  lg:px-30 justify-center space-y-3 w-full h-full">
        {/* Header */}
        <div className=" text-center">
          <h1 className=" font-['Island_Moments'] text-[#FF7A18] text-4xl">
            Chuks Kitchen
          </h1>
          <span className=" text-2xl font-medium">Create Your Account</span>
        </div>
        {/* Input */}
        <div className=" space-y-2">
          <Input
            label="Email"
            name="email"
            width="w-full"
            type="email"
            padding="py-2"
            placeholder="name@gmail.com"
            icon={<FiMail />}
          />

          <Input
            label="Phone number"
            name="number"
            width="w-full"
            type="text"
            padding="py-2"
            placeholder="(123) 456-7890"
            icon={<FiPhone />}
          />

          <Input
            label="Password"
            name="password"
            width="w-full"
            padding="py-2"
            type="password"
            placeholder="******"
            icon={<FiLock />}
          />

          <Input
            label="Confirm Password"
            name="password"
            padding="py-2"
            width="w-full"
            type="password"
            placeholder="******"
            icon={<FiLock />}
          />
          <div className=" items-center flex">
            <Input name="check" type="checkbox" width="w-full" />
            <h1 className=" text-sm text-nowrap">
              I agree to the{" "}
              <span className=" text-blue-400">Terms & Conditions</span> and{" "}
              <span className=" text-blue-400"> Privacy policy</span>
            </h1>
          </div>
          <Link to="/home">
            <Button
              text="Continue"
              BG="bg-[#FF7A18]"
              padding="py-2"
              textColor="text-white"
              border="border-none"
              borderRadius="rounded-lg"
              textSize="text-base"
            />
          </Link>
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
              Already have an account?
              <Link to="/signin">
                <span className=" text-[#1C7FF9]"> Sign In</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
