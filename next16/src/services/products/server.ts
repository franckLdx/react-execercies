'use server'

import { ProductModel } from "./declaration"

export async function getProducts() {
  const data = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' })
  if (!data.ok) {
    throw new Error("Failed to load products")
  }
  return await data.json() as ProductModel[]
}
