import React from "react";
import Product from "@/types/types";
import ProductCard from "./ProductCard";
import { Light } from "@/types/light";

interface Props {
  data: Light[]
}

const ProductCardList = ({ data }: Props) => {
  return (
    <div className="mt-10 product_layout">
      {data.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductCardList;
