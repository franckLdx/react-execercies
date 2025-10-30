"use client"

import { OrderedProduct } from "./OrderedProduct"
import { QueryProdiver } from "@/src/services/query"
import { CartModel } from "@/src/services/cart/declaration"
import { use, useEffect } from "react"

type SummaryProps = {
  cartPromise: Promise<CartModel>
}

export function Summary({ cartPromise }: SummaryProps) {
  // const cart = use(cartPromise)

  // useEffect(() => console.log("Summary"), [])

  return (
    <QueryProdiver>
      <section>
        <h1>Votre panier</h1>
        {/* {cart.products.map(product => (
          <OrderedProduct key={product.productId} cartProduct={product} />
        ))} */}
      </section>
    </QueryProdiver >
  )
}