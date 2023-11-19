"use client";

import React from "react";
import ProductCardList from "@/components/Product/ProductCardList";
import ProductNavItem from "@/components/Product/ProductNavItem";
import ProductLoader from "@/components/Product/ProductLoader";
import { productNavCategories } from "@/utils/constants";
import { getLights } from "@/sanity/actions";

const Products = async () => {
  // const [activeCategory, setActiveCategory] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);

  // const handleCategoryClick = (category: string) => {
  //   if (category !== activeCategory) {
  //     if (category === "") {
  //       setFilteredProducts([]);
  //       setActiveCategory("");
  //     } else {
  //       setFilteredProducts(
  //         products.filter((item) => item.category === category)
  //       );
  //       setActiveCategory(category);
  //     }
  //   }
  // };

  const products = await getLights();

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
      {/* <div className="mt-16 flex flex-center gap-4 flex-wrap rounded-md border border-gray-200 bg-white py-2.5 font-satoshi px-10 text-base shadow-lg font-semibold">
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
      </div> */}
      {/* <div>
        {loading ? (
          <ProductLoader />
        ) : (
          <ProductCardList
            data={filteredProducts.length > 0 ? filteredProducts : products}
          />
        )}
      </div> */}
      <div>
        <ProductCardList data={products} />
      </div>
    </section>
  );
};

export default Products;
