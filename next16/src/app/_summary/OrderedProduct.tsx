import { useGetProduct } from "@/src/services/cart/clientFunctions"
import { CartProduct } from "@/src/services/cart/declaration"
import { useEffect } from "react"

type OrderedProductProps = {
  cartProduct: CartProduct
}

export function OrderedProduct({ cartProduct }: OrderedProductProps) {
  const { isSuccess, isLoading, data: product } = useGetProduct(cartProduct.productId)

  // useEffect(() => console.log("Product " + cartProduct.productId), [])

  // if (isLoading) {
  //   return <p>Loading product</p>
  // }

  // if (!isSuccess) {
  //   return null
  // }

  // return <article><p>{product.title} - {cartProduct.quantity}</p></article>
  return ""
}