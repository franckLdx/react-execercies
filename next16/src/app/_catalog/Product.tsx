import { Card } from "../../components/Card"
import Image from 'next/image'
import { AddToCartButton } from "./AddToCartButton"
import { Suspense } from "react"
import { ProductModel } from "@/src/services/products/declaration"

type ProductProps = {
  product: ProductModel
}

export function Product({
  product
}: ProductProps) {
  return (
    <Card.Root>
      <Card.Title>
        {product.title}
      </Card.Title>
      {/* <Image aria-hidden src={product.image} alt='' width="160" height="160" /> */}
      <img aria-hidden src={product.image} alt='' width="160" height="160" />
      <Card.Buttons>
        <Suspense fallback={<div>Loading...</div>}>
          <AddToCartButton product={product} />
        </Suspense>
      </Card.Buttons>
    </Card.Root>
  )
}