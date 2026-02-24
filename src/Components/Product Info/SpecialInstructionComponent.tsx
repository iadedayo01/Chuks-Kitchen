// import React from 'react'

import Input from "../../Shared/Input";

const SpecialInstructionComponent = () => {
  return (
    <div className=" flex flex-col px-5 py-4">
      <div>
        <h1 className=" text-2xl font-medium">Special Instructions</h1>
      </div>
      <Input
        placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh
food is tasty"
        name="instructions"
        padding="py-6"
      />
    </div>
  );
};

export default SpecialInstructionComponent;
