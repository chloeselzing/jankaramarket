import React from "react";
import { Sacramento } from "next/font/google";

type Props = { text: string };

const sacramento = Sacramento({ subsets: ["latin-ext"], weight: "400" });

const Heading = ({ text }: Props) => {
  return (
    <div>
      <h1
        className={`text-center text-4xl  ${sacramento.className}  underline decoration-primary `}
      >
        {text}
      </h1>
    </div>
  );
};

export default Heading;
