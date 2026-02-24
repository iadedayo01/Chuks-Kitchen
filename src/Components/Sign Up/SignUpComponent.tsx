// import React from 'react'
import IMG from "../../assets/Rectangle 1.png";

const SignUpComponent = () => {
  return (
    <div className=" flex h-screen w-full">
        {/* Left Banner */}
      <div
        className=" relative flex basis-1/2 w-full h-screen flex-col bg-cover"
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
    </div>
  )
}

export default SignUpComponent