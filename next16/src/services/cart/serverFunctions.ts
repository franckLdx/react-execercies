
'use server'

import { revalidateTag } from "next/cache";
import { CartModel } from "./declaration";
import { ProductModel } from "../products/declaration";

const TAG = 'cart'

export async function getCart() {
  const response = await fetch('https://fakestoreapi.com/carts/5', { next: { tags: [TAG] } })
  if (!response.ok) {
    throw new Error("Failed to addd product")
  }
  return await response.json() as CartModel
}

export async function addProduct(product: ProductModel) {
  try {
    const payload = {
      id: 5,
      useid: 3,
      products: [product]
    }
    const response = await fetch('https://fakestoreapi.com/carts/5', { method: 'PUT', body: JSON.stringify(payload) })
    if (!response.ok) {
      throw new Error("Failed to addd product")
    }
  } finally {
    revalidateTag(TAG)
  }
}