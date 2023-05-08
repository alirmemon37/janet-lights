"use client";

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import janetLogo from "@/public/assets/janet-logo.png";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex flex-row items-center px-8 py-4 justify-between bg-secondary text-[#000] z-30 sticky top-0">
        <Link href="/">
          <Image
            src={janetLogo}
            alt="Janet lights logo"
            className="w-[75px] h-auto"
          />
        </Link>
        <AiOutlineMenu
          className="text-[24px] cursor-pointer text-primary"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {showMenu && (
        <>
          <div
            className="fixed bg-[#000] opacity-70 top-0 right-0 left-0 bottom-0 w-full z-40"
            onClick={() => setShowMenu(false)}
          ></div>
          <div className="absolute top-0 right-0 left-0 bottom-0 w-full overflow-hidden ">
            <div
              className={` flex flex-col fixed left-0 transition-all ease-in-out h-[100vh] duration-3000 text-[#000] w-[60%] bg-secondary rounded-r-[10px] z-50`}
            >
              <div className="flex flex-row items-center px-8 py-4 justify-between text-[#000]">
                <Link href="/" onClick={() => setShowMenu(false)}>
                  <Image
                    src={janetLogo}
                    alt="Janet lights logo"
                    className="w-[75px] h-auto"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-4 lg:gap-8 text-primary text-[18px] py-4">
                <Link href="/" onClick={() => setShowMenu(false)}>
                  <div className="hover:bg-primary hover:text-[#fff] hover:font-semibold py-3 px-8">
                    <span className="hover:cursor-pointer">Home</span>
                  </div>
                </Link>
                <Link href="/products" onClick={() => setShowMenu(false)}>
                  <div className="hover:bg-primary hover:text-[#fff] hover:font-semibold py-3 px-8">
                    <span className="hover:cursor-pointer">Products</span>
                  </div>
                </Link>
                <Link href="/about" onClick={() => setShowMenu(false)}>
                  <div className="hover:bg-primary hover:text-[#fff] hover:font-semibold py-3 px-8">
                    <span className="hover:cursor-pointer">About</span>
                  </div>
                </Link>
                <Link href="/contact" onClick={() => setShowMenu(false)}>
                  <div className="hover:bg-primary hover:text-[#fff] hover:font-semibold py-3 px-8">
                    <span className="hover:cursor-pointer">Contact</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNavbar;
