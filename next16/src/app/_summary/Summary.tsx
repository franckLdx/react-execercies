
import { QueryProdiver } from "@/src/services/query"
import { Suspense } from "react"
import { OrderedProducts } from "./OrderedProducts"
import { getCart } from "@/src/services/cart/serverFunctions"

export function Summary() {
  const cartPromise = getCart()

  return (
    <QueryProdiver>
      <section>
        <h1>Votre panier</h1>
        <Suspense fallback={<div>Loading cart...</div>}>
          <OrderedProducts cartPromise={cartPromise} />
        </Suspense>
      </section>
    </QueryProdiver >
  )
}