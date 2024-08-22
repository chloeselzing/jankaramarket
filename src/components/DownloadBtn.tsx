import React, { ReactElement } from "react";

interface ButtonProps {
  icon: ReactElement;
  text: string;
  className?: string;
}

const Button = ({ icon, text, className }: ButtonProps) => {
  return (
    <div
      className={`bg-[#121212] rounded-lg w-fit flex flex-cols cursor-pointer border-gray-200 px-3 py-2 space-x-1 items-center ${className}`}
    >
      <>{icon}</>
      <div className="flex flex-col">
        <span className="text-xs text-gray-300">Download On</span>
        <span className="text-sm text-gray-200">{text}</span>
      </div>
    </div>
  );
};

export default Button;
