import React from "react";
import Product from "@/types/types";
import Image from "next/image";

interface ProductCardListProps {
  data: Product[];
}

const ProductCardList = ({ data }: ProductCardListProps) => {
  return (
    <div className="flex gap-4 p-4">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-4">
            <img
              src={item.productImageUrl}
              width={200}
              height={200}
              alt={item.name}
            />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCardList;
