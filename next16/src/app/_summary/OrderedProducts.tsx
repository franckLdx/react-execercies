"use client"

import { OrderedProduct } from "./OrderedProduct"
import { QueryProdiver } from "@/src/services/query"
import { CartModel } from "@/src/services/cart/declaration"
import { use, useEffect } from "react"

type ProductsProps = {
  cartPromise: Promise<CartModel>
}

export function OrderedProducts({ cartPromise }: ProductsProps) {
  const cart = use(cartPromise)

  return (
    <QueryProdiver>
      <ul>
        {cart.products.map(product => (
          <li key={product.productId}>
            <OrderedProduct cartProduct={product} />
          </li>
        ))}
      </ul>
    </QueryProdiver >
  )
}