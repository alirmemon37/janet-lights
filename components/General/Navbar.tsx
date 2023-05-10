import React from "react";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import Image from "next/image";
import janetLogo from "@/public/assets/janet-logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/">
          <Image
            src={janetLogo}
            alt="Janet lights logo"
            className="w-[75px] h-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="sm:flex  hidden">
          <div className="flex gap-3 md:gap-5">
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

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          <MobileNavbar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
