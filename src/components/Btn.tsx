"use client";
import React, { useState, ReactElement } from "react";

type ButtonProps = {
  href?: string;
  text: string;
  color?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  minw?: string;
  hidden?: string;
  icon?: ReactElement;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  color,
  border,
  borderColor,
  textColor,
  icon,
  minw,
  hidden,
  onClick
}) => {
  return (
    <button
      className={`custom-button ${color || ""} ${textColor || "text-white"}  ${
        border || ""
      } ${borderColor || ""} ${
        minw || "lg:min-w-[80px]"
      }  md:w-[70px] h-[40px] hover:bg-[#f97416e5] hover:text-white px-[5px] gap-[5px] rounded md:text-[.7rem] lg:text-[15px] flex place-content-center items-center font-semibold`}
      onClick={onClick}
    >
      <span className={`lg:grid md:grid ${hidden}`}>{text}</span>
      <>{icon}</>
    </button>
  );
};

export default Button;
