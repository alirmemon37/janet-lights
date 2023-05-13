import Product from "@/types/types";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await response.json();

  return products.map((product: Product) => ({
    id: product.id,
  }));
}

export async function getProductData(productId: string) {
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("Product not found");
  }
  const product: Product = await response.json();

  return product;
}

const page = async ({ params }: Props) => {
  const { id: productId } = params;
  const product = await getProductData(productId);

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

export default page;
