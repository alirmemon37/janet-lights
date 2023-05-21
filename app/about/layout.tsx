import Footer from "@/components/General/Footer";
import Navbar from "@/components/General/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About / Janet Lights",
  description: "About us and our products and services",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
