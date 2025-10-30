export type CartProduct = { productId: number, quantity: number }

export type CartModel = {
  id: number
  products: CartProduct[]
}