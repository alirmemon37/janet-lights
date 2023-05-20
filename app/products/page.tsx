"use client";

import React, { useEffect, useState } from "react";
import ProductCardList from "@/components/Product/ProductCardList";
import ProductNavItem from "@/components/Product/ProductNavItem";
import Product from "@/types/types";
import ProductLoader from "@/components/Product/ProductLoader";
import { productNavCategories } from "@/utils/constants";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("/api/products", { cache: "no-store" });
      const products = await response.json();
      setProducts(products);
      setLoading(false);
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
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore <br className="max-md:hidden" />{" "}
        <span className="blue_gradient"> Endless Lighting </span>
        <br className="max-md:hidden" />
        Possibilities
      </h1>
      <p className="desc text-center">
        Choose from wide range of products in different styles and sizes for
        every space
      </p>
      <div className="mt-16 flex flex-center gap-4 flex-wrap rounded-md border border-gray-200 bg-white py-2.5 font-satoshi px-10 text-base shadow-lg font-semibold">
        <ProductNavItem
          label="All"
          active={activeCategory === ""}
          onClick={() => handleCategoryClick("")}
        />
        {productNavCategories.map((category, index) => {
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
        {loading ? (
          <ProductLoader />
        ) : (
          <ProductCardList
            data={filteredProducts.length > 0 ? filteredProducts : products}
          />
        )}
      </div>
    </section>
  );
};

export default Products;
