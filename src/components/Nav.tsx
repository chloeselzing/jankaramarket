"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../public/JKlogo.png";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import * as Components from "./index";
import { GiShoppingCart } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import { useCartStore } from "@/store";
import CartDropdown from "./CartDropDown";

type Props = {};

const Nav = (props: Props) => {
  const items = useCartStore((state) => state.items);

  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Stop event from bubbling up
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as HTMLElement)?.closest(".dropdown-container")
      ) {
        handleClose();
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        handleClose();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="bg-[#111111]">
      <div
        className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 px-[25px] lg:py-[5px] py-[2px] bg-[#111111]"
        onClick={handleClose}
      >
        <Link href="/" className="grid justify-start">
          <Image
            src={Logo}
            alt="Jos Jankara Market Logo"
            className="w-[4rem]"
          />
        </Link>
        <div className="hidden lg:grid md:grid place-content-center">
          <div className="flex place-items-center gap-3 bg-primary rounded">
            <input
              type="text"
              placeholder="Search..."
              className="bg-none focus:outline-none bg-[#FFFFFF] w-[200px] p-[7px] h-[40px] rounded-l"
            />
            <Link href="/" className="grid place-content-center">
              <CiSearch className="text-white text-[25px] mr-[10px] font-bold" />
            </Link>
          </div>
        </div>
        <div className="grid justify-end place-content-center">
          <div className="flex">
            <Components.Btn
              text="Cart"
              color="bg-primary"
              hidden="hidden"
              icon={<GiShoppingCart className="text-[20px]" />}
              onClick={toggleCart}
            />
            {isCartOpen && <CartDropdown onClose={closeCart} />}

            <div
              className="flex items-center w-[50px] gap-1 px-1 dropdown-container"
              onClick={handleClick}
            >
              <IoPersonSharp className="text-white text-[25px]" />
              <IoIosArrowDown className="text-[20px] text-white" />
            </div>
            {isOpen && (
              <div className="text-black grid z-50 fixed top-[70px] bg-white place-content-center p-[10px] rounded shadow ml-[70px] dropdown-container">
                <Link href="/">Login</Link>
                <Link href="/">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid lg:hidden md:hidden place-items-center py-5">
        <div className="flex gap-3 bg-primary rounded w-[90%]">
          <input
            type="text"
            placeholder="Search..."
            className="bg-none focus:outline-none bg-[#FFFFFF] w-[88%] p-[7px] h-[50px] rounded-l"
          />
          <Link href="/" className="grid place-content-center">
            <CiSearch className="text-white text-[25px] mr-[10px] font-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
