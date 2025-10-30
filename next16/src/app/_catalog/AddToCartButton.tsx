"use client"
import { Button } from "../../components/Button"
import { addProductToCart } from "../../services/cart/serverFunctions"
import { ProductModel } from "@/src/services/products/declaration"

type ProductProps = {
  product: ProductModel
}

export function AddToCartButton({
  product
}: ProductProps) {
  const onAddProduct = async () => {
    await addProductToCart(product)
  }

  return (
    <Button onClick={onAddProduct}>
      Add to cart
    </Button>
  )
}