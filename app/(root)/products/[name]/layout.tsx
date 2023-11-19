import { getLight } from "@/sanity/actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { name: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { name } = params;
  const product = await getLight(name);

  if (!product) {
    notFound();
  }

  return {
    metadataBase:
      new URL(`https://${process.env.VERCEL_URL}`) || "http://localhost:3000",
    title: `${product.name} @ Janet Lights`,
    openGraph: {
      title: `${product.name} @ Janet Lights`,
      // description: product.description,
      images: [
        {
          url: product.image || "",
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
