import Product from "@/types/types";
import apiEndpoint from "@/utils/apiEndpoint";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

async function getProductData(productId: string) {
  const response = await fetch(`${apiEndpoint}/products/${productId}`);
  if (!response.ok) {
    throw new Error("Product not found");
  }
  const product: Product = await response.json();

  return product;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id: productId } = params;
  const product = await getProductData(productId);

  return {
    title: `${product.name} @ Janet Lights`,
    openGraph: {
      title: `${product.name} @ Janet Lights`,
      description: product.description,
      images: [
        {
          url: product.productImageUrl || "",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
