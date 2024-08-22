import React from "react";
import * as Component from "@/components/index";
import { MdOutlineNoFood } from "react-icons/md";
import { SideBarData } from "@/data/SideBarData";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="space-y-1 sticky top-0 left-0 h-screen hidden md:block w-1/5 ">
      {SideBarData.map((data, index) => (
        <Component.BarOption text={data.text} icon={<data.icon />} />
      ))}
    </div>
  );
};

export default SideBar;
