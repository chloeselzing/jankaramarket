import React from "react";
import * as Components from "@/components/index";
import { CardData } from "@/data/CardData";
type Props = {};

const LatestProducts = (props: Props) => {
  return (
    <div className="">
      <div className="my-5">
      <Components.Heading text="Latest Products" />

      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-3">
        {CardData.map((data, index) => (
          <Components.Card
            key={index}
            title={data.title}
            image={data.image}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
