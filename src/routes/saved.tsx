import { Link, createFileRoute } from "@tanstack/react-router";
import { ProductRow, StackActions } from "@/components/product-row";
import { btnClass } from "@/components/ui";
import { getProduct } from "@/lib/catalog";
import { useShortlist } from "@/lib/shortlist";

export const Route = createFileRoute("/saved")({
  head: () => ({
    meta: [{ title: "Saved — Aisle 21" }],
  }),
  component: SavedPage,
});

function SavedPage() {
  const ids = useShortlist((state) => state.ids);
  const hydrated = useShortlist((state) => state.hydrated);
  const clear = useShortlist((state) => state.clear);
  const products = ids.flatMap((id) => {
    try {
      return [getProduct(id)];
    } catch {
      return [];
    }
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium text-orange">Saved on this device</p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Your short list.</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Nothing here is an account. It lives in this browser so you can compare tonight and buy when
        you're sure. Clear it whenever you want.
      </p>
      {!hydrated ? <p className="mt-8 text-sm text-muted">Opening your list…</p> : null}
      {hydrated && products.length === 0 ? (
        <div className="mt-10 border border-line bg-card p-6">
          <h2 className="font-display text-2xl text-ink">Nothing saved yet.</h2>
          <p className="mt-2 max-w-xl text-muted">
            The guide builds a set in about a minute. The shelf is there if you already know the
            object.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/guide" className={btnClass("solid")}>
              Build my stack
            </Link>
            <Link to="/shelf" search={{ aisle: "all" }} className={btnClass("ghost")}>
              Browse the shelf
            </Link>
          </div>
        </div>
      ) : null}
      {hydrated && products.length > 0 ? (
        <>
          <StackActions products={products} label="Add saved items to your Amazon cart" />
          <button type="button" onClick={clear} className={`${btnClass("ghost")} mt-3`}>
            Clear the list
          </button>
          <div className="mt-6">
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : null}
    </main>
  );
}
