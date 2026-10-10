import { Link, createFileRoute } from "@tanstack/react-router";
import { ProductRow } from "@/components/product-row";
import { aisleMeta, products, type Aisle } from "@/lib/catalog";

const AISLES = ["all", "wallet", "read", "steel", "node"] as const;
type Filter = (typeof AISLES)[number];

function isFilter(value: unknown): value is Filter {
  return typeof value === "string" && (AISLES as readonly string[]).includes(value);
}

export const Route = createFileRoute("/shelf")({
  validateSearch: (search: Record<string, unknown>) => ({
    aisle: isFilter(search.aisle) ? search.aisle : "all",
  }),
  head: () => ({
    meta: [{ title: "The shelf — Aisle 21" }],
  }),
  component: ShelfPage,
});

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "wallet", label: "Wallets" },
  { id: "read", label: "Reads" },
  { id: "steel", label: "Steel" },
  { id: "node", label: "Nodes" },
];

function ShelfPage() {
  const { aisle } = Route.useSearch();
  const visible = aisle === "all" ? products : products.filter((product) => product.aisle === aisle);
  const banner = aisle === "all" ? null : aisleMeta[aisle as Aisle];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium text-orange">The shelf</p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Everything we'd actually link.</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Short on purpose. If a thing isn't here, it's either a bad buy or a listing we won't pretend is
        stable. Prices stay on Amazon.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((filter) => {
          const active = aisle === filter.id;
          return (
            <Link
              key={filter.id}
              to="/shelf"
              search={{ aisle: filter.id }}
              className={
                "inline-flex min-h-11 items-center rounded-md px-4 text-sm " +
                (active ? "bg-ink text-paper" : "border border-line bg-card text-ink")
              }
            >
              {filter.label}
            </Link>
          );
        })}
      </div>
      {banner ? (
        <figure className="mt-8">
          <img src={banner.image} alt={banner.alt} className="aspect-video w-full rounded-lg object-cover" />
          <figcaption className="mt-2 text-sm text-muted">{banner.line}</figcaption>
        </figure>
      ) : null}
      <div className="mt-8">
        {visible.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
