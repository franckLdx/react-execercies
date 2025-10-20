'use client'
import { use } from 'react'
import { ProductModel } from './declaration'
import { Product } from './Product'

export function Products({
  productsPromise,
}: {
  productsPromise: Promise<ProductModel[]>
}) {
  const products = use(productsPromise)

  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
}