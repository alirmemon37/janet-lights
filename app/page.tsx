import Footer from "@/components/General/Footer";
import Navbar from "@/components/General/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Find the <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            Perfect Lighting Solutions
          </span>{" "}
          <br className="max-md:hidden" />
          for Every Space
        </h1>
        <p className="desc text-center">
          Elevate your space with Janet Lights! Discover exquisite chandeliers,
          outdoor lights, and more to illuminate your surroundings with elegance
          and style.
        </p>
        <Link href="/products">
          <button className="mt-10 orange_gradient_btn">Find Your Light</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}
