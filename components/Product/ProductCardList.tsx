import React from "react";
import ProductCard from "./ProductCard";
import { getLights } from "@/sanity/actions";

interface Props {
  category: string | undefined;
}

const ProductCardList = async ({ category }: Props) => {
  const products = await getLights(category);

  if (products.length === 0) {
    return (
      <div className="mt-16">
        <p className="text-black text-2xl text-center font-bold">No Items Found</p>
      </div>
    );
  }

  return (
    <div className="mt-10 product_layout">
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductCardList;
