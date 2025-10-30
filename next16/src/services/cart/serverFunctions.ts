
'use server'

import { revalidateTag } from "next/cache";
import { CartModel } from "./declaration";
import { ProductModel } from "../products/declaration";

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

export async function addProductToCart(product: ProductModel) {
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
    revalidateTag(TAG, "max")
  }
}