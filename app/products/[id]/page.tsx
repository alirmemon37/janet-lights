import ProductCard from "@/components/Product/ProductCard";
import Product from "@/types/types";
import apiEndpoint from "@/utils/apiEndpoint";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const response = await fetch(`${apiEndpoint}/products`);
  const products: Product[] = await response.json();

  return products.map((product: Product) => ({
    id: product.id,
  }));
}

async function getProductData(productId: string) {
  const response = await fetch(`${apiEndpoint}/products/${productId}`);
  if (!response.ok) {
    throw new Error("Product not found");
  }
  const product: Product = await response.json();

  return product;
}

export default async function Page({ params }: PageProps) {
  const { id: productId } = params;
  const product = await getProductData(productId);

  return (
    <ProductCard product={product} />
  );
}
