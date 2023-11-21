"use client";

import { useRouter } from "next/navigation";

const ProductsNotFound = () => {
  const router = useRouter();

  return (
    <div className="mt-16 flex flex-col gap-6">
      <p className="text-black text-2xl text-center font-bold">
        No Items Found
      </p>
      <button
        className="blue_gradient_btn"
        onClick={() => router.push("/products")}
      >
        Show All Products
      </button>
    </div>
  );
};

export default ProductsNotFound;
