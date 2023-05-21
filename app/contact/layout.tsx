import Footer from "@/components/General/Footer";
import Navbar from "@/components/General/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact / Janet Lights",
  description:
    "Contact us for more information about our products and services",
};

export default function ContactLayout({
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
