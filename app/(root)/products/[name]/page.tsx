import ProductCard from "@/components/Product/ProductCard";
import { getLight, getLights } from "@/sanity/actions";
import { notFound } from "next/navigation";

interface Props {
  params: {
    name: string;
  };
}

export async function generateStaticParams() {
  const products = await getLights();

  return products.map((product) => ({
    name: product.name,
  }));
}

export default async function Page({ params }: Props) {
  const { name } = params;
  const product = await getLight(name);

  if (!product) {
    notFound();
  }

  return <ProductCard product={product} />;
}
