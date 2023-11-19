import React, { Suspense } from "react";
import ProductCardList from "@/components/Product/ProductCardList";
import ProductLoader from "@/components/Product/ProductLoader";
import { getLights } from "@/sanity/actions";
import ProductCategoryTabs from "@/components/Product/ProductCategoryTabs";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Products = ({ searchParams }: Props) => {
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
      <ProductCategoryTabs />
      <Suspense fallback={<ProductLoader />}>
        {/* @ts-expect-error Server Component */}
        <ProductCardList category={searchParams.category} />
      </Suspense>
    </section>
  );
};

export default Products;
