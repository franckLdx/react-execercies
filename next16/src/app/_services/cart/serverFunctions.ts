
'use server'

import { CartModel } from "@/src/services/cart/declaration";
import { ProductModel } from "@/src/services/products/declaration";
import { revalidateTag } from "next/cache";

const TAG = 'cart'

export async function getCart() {
  console.log('******************* START')
  const response = await fetch('https://fakestoreapi.com/carts/5', { next: { tags: [TAG] }, cache: 'no-store' })
  if (!response.ok) {
    throw new Error("Failed to addd product")
  }
  const cart = await response.json() as CartModel
  console.log('******************* STOP')
  return cart
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