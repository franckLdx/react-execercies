import { Summary } from "./_summary/Summary";
import { getCart } from "../services/cart/serverFunctions";
import { Suspense } from "react";
import { Products } from "./_catalog/Products";

export default async function Home() {
  const cartPromise = getCart()

  return (
    <div className="grid grid-cols-[1fr_400px] gap-4">
      <main className="flex gap-4">
        <Products />
      </main>
      <aside>
        <Suspense fallback={<div>Loading...</div>}>
          <Summary cartPromise={cartPromise} />
        </Suspense>
      </aside>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
