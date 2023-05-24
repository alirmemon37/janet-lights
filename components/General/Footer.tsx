import React from "react";
import Link from "next/link";
import Image from "next/image";
import janetLogo from "@/public/assets/janet-logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-primary text-lg font-semibold text-center sm:text-left body-font my-8 flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 backdrop-blur-lg backdrop-filter w-full h-fit flex flex-col sm:flex-row items-center sm:justify-between gap-4">
      <span>© 2023 Janet Lights. All Right Reserved</span>
      <span className="flex gap-5">
        <FaFacebookF className="hover:cursor-pointer" />
        <FaTwitter className="hover:cursor-pointer" />
        <FaInstagram className="hover:cursor-pointer" />
      </span>
    </footer>
  );
};

export default Footer;
