import { getLights } from "@/sanity/actions";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mode = process.env.NEXT_PUBLIC_NODE_MODE;

  let baseUrl: string = "";
  switch (mode) {
    case "development":
      baseUrl = "http://localhost:3000";
      break;
    case "production":
      baseUrl = "https://janet-lights-y3r2.vercel.app";
      break;
    default:
      baseUrl = "https://janet-lights-y3r2.vercel.app";
  }

  // static routes
  const routes = ["", "products", "about", "contact"].map((route) => {
    return {
      url: `${baseUrl}/${route}`,
      lastModified: new Date().toISOString(),
    };
  });

  // dynamic routes
  const products = await getLights();
  const productsRoutes = products.map((product) => {
    return {
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [...routes, ...productsRoutes];
}
