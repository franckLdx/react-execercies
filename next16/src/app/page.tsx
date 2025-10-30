import { Summary } from "./_summary/Summary";
import { Suspense } from "react";
import { Products } from "./_catalog/Products";

export default async function Home() {
  return (
    <div className="grid grid-cols-[1fr_400px] gap-4">
      <main className="flex gap-4">
        <Suspense fallback={<p>Catalogue</p>}>
          <Products />
        </Suspense>
      </main>
      <aside>
        <Summary />
      </aside>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
