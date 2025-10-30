import { useQuery } from "@tanstack/react-query";
import { ProductModel } from "../products/declaration";

export function useGetProduct(productId: number) {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
      if (!data.ok) {
        throw new Error("Failed to load a product")
      }
      return await data.json() as ProductModel
    }
  })
}