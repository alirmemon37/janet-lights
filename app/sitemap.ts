import apiEndpoint from "@/utils/apiEndpoint"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', 'products', 'about', 'contact'].map((route) => {
    return {
      url: `${apiEndpoint}/${route}`,
      lastModified: new Date().toISOString(),
    }
  })

  const response = await fetch(`${apiEndpoint}/api/products`)
  const products = await response.json()
  const productsRoutes = products.map((product: any) => {
    return {
      url: `${apiEndpoint}/products/${product.id}`,
      lastModified: new Date().toISOString(),
    }
  })

  return [...routes, ...productsRoutes]
}
