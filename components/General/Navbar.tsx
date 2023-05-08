"use client";

import React from "react";
import { IoIosContact } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import useDevice from "@/utils/useDevice";
import Image from "next/image";
import janetLogo from "@/public/assets/janet-logo.png";

const Navbar = () => {
  const { isMobile } = useDevice();

  return (
    <>
      {!isMobile ? (
        <div className="flex flex-row justify-between bg-secondary items-center py-4 px-8">
          <Link href="/">
            <Image
              src={janetLogo}
              alt="Janet lights logo"
              className="w-[75px] h-auto"
            />
          </Link>
          <div className="flex flex-row gap-4 lg:gap-8 text-primary text-[18px] items-center">
            <Link href="/">
              <span className="hover:text-[#ccc] hover:cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/products">
              <span className="hover:text-[#ccc] hover:cursor-pointer">
                Products
              </span>
            </Link>
            <Link href="/about">
              <span className="hover:text-[#ccc] hover:cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-[#ccc] hover:cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <MobileNavbar />
        </>
      )}
    </>
  );
};

export default Navbar;
