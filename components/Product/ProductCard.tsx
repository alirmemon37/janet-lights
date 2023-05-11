import React from "react";
import Product from "@/types/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product_card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.productImageUrl}
        className="w-full rounded-md mb-2"
        alt={product.name}
      />
      <span className="font-medium font-inter text-xs text-gray-500 tracking-widest">
        {product.company?.toUpperCase()}
      </span>
      <h3 className="text-base sm:text-lg font-satoshi font-semibold text-gray-900">
        {product.name}
      </h3>
    </div>
  );
};

export default ProductCard;
