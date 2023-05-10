"use client";

import React, { useEffect, useState } from "react";
import ProductCardList from "@/components/Product/ProductCardList";
import ProductNavItem from "@/components/Product/ProductNavItem";
import Product from "@/types/types";

const productCategories = [
  {
    value: "chandelier",
    label: "Chandelier",
  },
  {
    value: "cob",
    label: "COB",
  },
];

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (category: string) => {
    if (category !== activeCategory) {
      if (category === "") {
        setFilteredProducts([]);
        setActiveCategory("");
      } else {
        setFilteredProducts(
          products.filter((item) => item.category === category)
        );
        setActiveCategory(category);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 py-2 px-4">
        <ProductNavItem
          label="All"
          active={activeCategory === ""}
          onClick={() => handleCategoryClick("")}
        />
        {productCategories.map((category, index) => {
          return (
            <ProductNavItem
              key={index}
              label={category.label}
              active={activeCategory === category.value}
              onClick={() => handleCategoryClick(category.value)}
            />
          );
        })}
      </div>
      <div>
        <ProductCardList
          data={filteredProducts.length > 0 ? filteredProducts : products}
        />
      </div>
    </div>
  );
};

export default Products;
