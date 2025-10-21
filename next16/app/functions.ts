'use server'

import { ProductModel } from "./declaration";

export async function addProduct(product: ProductModel) {
  const payload = {
    id: 5,
    useid: 3,
    products: [product]
  }
  const response = await fetch('https://fakestoreapi.com/carts/5', { method: 'PUT', body: JSON.stringify(payload) })
  if (!response.ok) {
    throw new Error("Failed to addd product")
  }
}