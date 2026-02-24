// import React from 'react'

import type { ReactElement } from "react";

interface ButtonProps {
  text: string;
  borderRadius: string;
  textColor: string;
  font?: string;
  padding: string;
  BG?: string;
  width?: string;
  textSize: string;
  border: string;
  icon?: ReactElement;
}

const Button = ({
  text,
  borderRadius,
  textColor,
  BG,
  padding,
  font,
  width,
  icon,
  textSize,
  border,
}: ButtonProps) => {
  return (
    <div
      className={` cursor-pointer gap-2 font-semibold justify-center items-center flex ${font} ${border} ${textSize} ${borderRadius} ${textColor} ${BG} ${padding} ${width}`}
    >
      <div className={` text-2xl`}>{icon}</div>
      {text}
    </div>
  );
};

export default Button;
