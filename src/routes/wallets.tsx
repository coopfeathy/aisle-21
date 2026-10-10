import { Link, createFileRoute } from "@tanstack/react-router";
import { ProductRow } from "@/components/product-row";
import { btnClass } from "@/components/ui";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/wallets")({
  head: () => ({
    meta: [{ title: "Wallet picker — Aisle 21" }],
  }),
  component: WalletsPage,
});

function WalletsPage() {
  const compared = products.filter((product) => product.compare);
  const wallets = products.filter((product) => product.aisle === "wallet");

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium text-orange">The decision</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl text-ink sm:text-5xl">
          Four ways to hold keys. Pick the compromise you can live with.
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          None of these is "the safest" in the abstract. The safest wallet is the one you will
          actually withdraw to, back up, and not photograph. A coin left on an exchange because the
          hardware felt annoying is not safer.
        </p>
        <Link to="/guide" className={`${btnClass("solid")} mt-6`}>
          Not sure — build my stack
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2">
        {compared.map((product) => (
          <article key={product.id} className="border border-line bg-card p-5">
            <p className="text-sm text-muted">{product.maker}</p>
            <h2 className="mt-1 font-display text-2xl text-ink">{product.name}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="grid grid-cols-3 gap-3">
                <dt className="text-muted">Screen</dt>
                <dd className="col-span-2 text-ink">{product.compare?.screen}</dd>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <dt className="text-muted">Phone</dt>
                <dd className="col-span-2 text-ink">{product.compare?.phone}</dd>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <dt className="text-muted">Backup</dt>
                <dd className="col-span-2 text-ink">{product.compare?.backup}</dd>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <dt className="text-muted">Source</dt>
                <dd className="col-span-2 text-ink">{product.compare?.source}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-muted">{product.why}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl text-ink">Before you click buy</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article>
            <h3 className="font-display text-xl text-ink">An exchange is not a wallet</h3>
            <p className="mt-2 text-sm text-muted">
              It's an IOU in their database. Withdrawal is the moment the coins become yours. The
              device is how you keep them that way.
            </p>
          </article>
          <article>
            <h3 className="font-display text-xl text-ink">Write the words first</h3>
            <p className="mt-2 text-sm text-muted">
              Set the device up, stamp steel, and only then send a small test. If the test doesn't
              show up, you still have the rest sitting where it was.
            </p>
          </article>
          <article>
            <h3 className="font-display text-xl text-ink">A screen is the point</h3>
            <p className="mt-2 text-sm text-muted">
              Tangem is the exception we still recommend, for gifts and for people who will lose a
              phrase. Everyone else should see the address on hardware, not only on a laptop.
            </p>
          </article>
        </div>
        <div className="mt-10">
          {wallets.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
