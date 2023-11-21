"use client"

import React, { useEffect, useState } from "react";
import ProductNavItem from "./ProductNavItem";
import { formUrlQuery } from "@/sanity/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { productNavCategories } from "@/utils/constants";

const ProductCategoryTabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string | null>(category);

  console.log("category", activeCategory);

  const handleCategoryClick = (category: string | null) => {
    let newUrl = "";

    if (category === null) {
      setActiveCategory(category);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setActiveCategory(category);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: category?.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  useEffect(() => {
    // Update activeCategory when the query parameter changes
    setActiveCategory(category);
  }, [category]);

  return (
    <div className="mt-16 flex flex-center gap-4 flex-wrap rounded-md border border-gray-200 bg-white py-2.5 font-satoshi px-10 text-base shadow-lg font-semibold">
      <ProductNavItem
        label="All"
        active={activeCategory === null}
        onClick={() => handleCategoryClick(null)}
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
  );
};

export default ProductCategoryTabs;
