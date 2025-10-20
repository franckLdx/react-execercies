import Image from "next/image";
import { Suspense } from "react";
import { Products } from "./Products";

export default async function Home() {
  const data = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' })
  const products = data.json()
  if (!data.ok) {
    throw new Error("Failed to load products")
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Suspense fallback={<div>Loading...</div>}>
          <Products productsPromise={products} />
        </Suspense>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
