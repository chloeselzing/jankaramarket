import React from "react";
import * as Component from "@/components/index";

type Props = {};

const Advert = (props: Props) => {
  return (
    <div className="md:w-4/5 w-full md:px-[30px] bg-[#F7F6F6] space-y-30 justify-center flex flex-col gap-5 py-[25px] px-[10px]">
      <Component.Banner />
      <Component.Advert />
      <Component.LatestProducts/>
    </div>
  );
};

export default Advert;
  