import React from "react";
import ProductCard from "./ProductCard";
import { getLights } from "@/sanity/actions";
import ProductsNotFound from "./ProductsNotFound";

interface Props {
  category: string | undefined;
}

const ProductCardList = async ({ category }: Props) => {
  const products = await getLights(category);

  if (products.length === 0) {
    return <ProductsNotFound />;
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
