import Image from "next/image";
import React, { FC } from "react";

type CardProps = {
  image: string;
  title: string;
  price: number;
  onClick?: () => void;
};

const Card: FC<CardProps> = ({ image, title, price, onClick }) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-md p-4">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="product-info">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">₦{price.toFixed(2)}</p>
        <button
          onClick={onClick}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
        >
          ADD TO CART{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
