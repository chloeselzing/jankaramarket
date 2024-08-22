import React from "react";
import SideBar from "./SideBar";
import Products from "./Products";

type Props = {};

const MainSection = (props: Props) => {
  return (
    <div className="flex mt-2">
      <SideBar />
      <Products />
    </div>
  );
};

export default MainSection;
