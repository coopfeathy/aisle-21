import { Bookmark } from "lucide-react";
import { AmazonLink } from "@/components/ui";
import { cartUrl, offerUrl, searchUrl, type Product } from "@/lib/catalog";
import { useShortlist } from "@/lib/shortlist";

export function ProductRow({ product }: { product: Product }) {
  const hydrated = useShortlist((state) => state.hydrated);
  const saved = useShortlist((state) => state.ids.includes(product.id));
  const toggle = useShortlist((state) => state.toggle);
  const showSaved = hydrated && saved;

  return (
    <article className="border-t border-line py-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          {product.badge ? (
            <p className="text-sm font-medium text-orange">{product.badge}</p>
          ) : (
            <p className="text-sm text-muted">{product.maker}</p>
          )}
          <h3 className="mt-1 font-display text-2xl text-ink">{product.name}</h3>
          {product.badge ? <p className="text-sm text-muted">{product.maker}</p> : null}
        </div>
        <button
          type="button"
          onClick={() => toggle(product.id)}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line bg-card px-3 text-sm text-ink hover:border-ink"
          aria-pressed={showSaved}
        >
          <Bookmark className="size-4" aria-hidden="true" fill={showSaved ? "currentColor" : "none"} />
          {showSaved ? "Saved" : "Save"}
        </button>
      </div>
      <p className="mt-3 max-w-3xl text-ink">{product.blurb}</p>
      <p className="mt-2 max-w-3xl text-muted">{product.why}</p>
      <p className="mt-3 text-sm text-ink">
        <span className="text-muted">Best for </span>
        {product.bestFor}
      </p>
      <ul className="mt-3 max-w-3xl space-y-1 text-sm text-muted">
        {product.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      {product.watchout ? (
        <p className="mt-3 max-w-3xl border-l-2 border-flame pl-3 text-sm text-ink">{product.watchout}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <AmazonLink href={offerUrl(product)}>
          {product.asin ? "See it on Amazon" : "Find it on Amazon"}
        </AmazonLink>
        {product.asin ? (
          <AmazonLink href={searchUrl(product.search)} variant="ghost">
            Search instead
          </AmazonLink>
        ) : (
          <p className="text-sm text-muted">Opens Amazon search. The exact listing rotates.</p>
        )}
      </div>
    </article>
  );
}

export function StackActions({
  products,
  label,
}: {
  products: Product[];
  label: string;
}) {
  const asins = products.flatMap((product) => (product.asin ? [product.asin] : []));
  const searches = products.filter((product) => !product.asin);
  if (asins.length === 0 && searches.length === 0) return null;

  return (
    <div className="mt-4 flex flex-col items-start gap-3">
      {asins.length > 0 ? (
        <AmazonLink href={cartUrl(asins)}>{label}</AmazonLink>
      ) : null}
      {searches.length > 0 ? (
        <p className="text-sm text-muted">
          {searches.map((product) => product.name).join(", ")} open as a search, because Amazon
          rotates that listing. The rest can drop into your cart together.
        </p>
      ) : (
        <p className="text-sm text-muted">Affiliate link. One cart, today's prices, on Amazon.</p>
      )}
    </div>
  );
}
