import { getProducts } from '@/src/services/products/server'
import { Product } from './Product'

export async function Products() {
  const products = await getProducts()

  return (
    <section>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  )
}