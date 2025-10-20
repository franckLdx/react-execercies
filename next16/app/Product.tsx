import { ProductModel } from "./declaration"
import { Card } from "./_components/Card"
import Image from 'next/image'

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
      <Image aria-hidden src={product.image} alt='' width="160" height="160" />
    </Card.Root>
  )
}