import React from "react";
import Product from "@/types/types";
import ProductCard from "./ProductCard";

interface ProductCardListProps {
  data: Product[];
}

const ProductCardList = ({ data }: ProductCardListProps) => {
  return (
    <div className="mt-10 product_layout">
      {data.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductCardList;
