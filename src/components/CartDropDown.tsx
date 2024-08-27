import React, { useEffect, useRef } from "react";
import { useCartStore } from "@/store";

const CartDropdown: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const items = useCartStore((state) => state.items);
  console.log("Current Items in CartDropdown:", items); // Debugging

  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log(items);

  useEffect(() => {
    // Close dropdown on scroll
    const handleScroll = () => {
      onClose();
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="fixed bg-white rounded z-50 top-[70px] place-content-center grid p-2 gap-2 "
    >
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex">
              {/* <span>{item.image}</span>  */}- <span>{item.name} </span> -
              <span>{item.quantity}</span> X <span>₦{item.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>No Item in your cart. </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
            Checkout{" "}
          </button>{" "}
        </>
      )}
    </div>
  );
};

export default CartDropdown;
