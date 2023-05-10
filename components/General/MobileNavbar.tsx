"use client";

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const MobileNavbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <>
      <div className="sm:hidden flex relative">
        <div className="flex">
          <AiOutlineMenu
            className="text-[24px] cursor-pointer text-primary"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />
          {toggleDropdown && (
            <>
              <div
                className="fixed bg-[#000] opacity-70 top-0 right-0 left-0 bottom-0 w-full z-40"
                onClick={() => setToggleDropdown(false)}
              ></div>
              <div className="dropdown z-50">
                <Link
                  href="/products"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Contact
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
