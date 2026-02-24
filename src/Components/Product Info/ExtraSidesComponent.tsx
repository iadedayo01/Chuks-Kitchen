// import React from 'react'
interface extraProps {
  name: string;
  price: string;
}

const ExtraSidesComponent = () => {
  const extras: extraProps[] = [
    { name: "Fried Plantain", price: "#700" },
    { name: "Coleslaw", price: "#500" },
    { name: "Extra Pepper Sauce", price: "#300" },
  ];
  return (
    <div className=" flex flex-col px-5 py-4">
      <div>
        <h1 className=" text-2xl font-medium">Choose Your Protein</h1>
      </div>
      <div className=" flex gap-2 flex-col py-2">
        {extras.map((extra) => (
          <div className=" flex border rounded-lg border-[#BDBDBD] py-1 px-2 shadow justify-between">
            <div className=" flex items-center gap-2">
              <div>
                <input type="checkbox" className=" size-5 flex items-center"/>
              </div>
              <h1>{extra.name}</h1>
            </div>
            <div>
              <h1>{extra.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSidesComponent;
