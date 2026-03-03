// import React from 'react'

import Button from "../../Shared/Button";
import Input from "../../Shared/Input";

const OrderSummaryComponent = () => {
  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <div className=" bg-white px-5 py-10 w- lg:basis-1/2 basis-3/4 flex flex-col">
        <div className=" border-b py-1 w-full">
          <h1 className=" text-3xl font-bold">Order Summary</h1>
        </div>
        <div>
          <h1>Add a Promo Code</h1>
          <div className=" flex items-center gap-2">
            <Input type="text" name="promo" width="w-full" padding="py-2" />
            <Button
              BG="bg-red-500"
              text="Login"
              textColor="text-white"
              border="border-none"
              borderRadius="rounded-lg"
              textSize="text-base"
              padding="px-6 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
