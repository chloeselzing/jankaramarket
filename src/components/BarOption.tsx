import Link from "next/link";
import React, { ReactElement } from "react";

type Props = {
  icon?: ReactElement;
  text?: string;
};

const BarOption: React.FC<Props> = ({ icon, text }) => {
  return (
    
    <Link
      href="/"
      className="flex gap-2 h-[50px] px-2 bg-[#F1F3F6] hover:bg-primary items-center"
    >
      <>{icon}</>
      <div>{text}</div>
    </Link>
  );
};

export default BarOption;
