import Footer from "@/components/General/Footer";
import Navbar from "@/components/General/Navbar";

export const metadata = {
  title: "Products / Janet Lights",
  description: "Choose from wide range of products in different styles and sizes for every space",
};

export default function ProductLayout({
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
