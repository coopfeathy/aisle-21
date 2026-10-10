import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProductRow, StackActions } from "@/components/product-row";
import { btnClass } from "@/components/ui";
import { aisleMeta, productsByIds, stacks, type Aisle } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Aisle 21 — Bitcoin gear, edited" }],
  }),
  component: Home,
});

const DOORS: { aisle: Aisle; title: string; text: string }[] = [
  {
    aisle: "wallet",
    title: "Get coins off an exchange",
    text: "A screen you control. Four devices, and the reason we'd pick each one.",
  },
  {
    aisle: "read",
    title: "Read the ones that matter",
    text: "A short invention story, the monetary argument, and the technical manual.",
  },
  {
    aisle: "steel",
    title: "Stop trusting paper",
    text: "The words that recover a wallet should outlive a house fire and a cloud backup.",
  },
  {
    aisle: "node",
    title: "Run a node, not a toy miner",
    text: "A Pi, a real drive, a real power supply. It verifies. It does not pay you.",
  },
];

function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-6">
          <p className="text-sm font-medium text-orange">For people who already hold, or are about to</p>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
            The Bitcoin aisle, edited.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Hardware wallets, five books worth finishing, and steel for the words you cannot lose.
            We don't print prices. They'd be wrong by tonight. Every button opens the live Amazon
            page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/guide" className={btnClass("solid")}>
              Build my stack
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link to="/shelf" search={{ aisle: "all" }} className={btnClass("ghost")}>
              Browse the shelf
            </Link>
          </div>
        </div>
        <figure className="lg:col-span-6">
          <img
            src="/images/hero.jpg"
            alt="Morning light on a desk: an open notebook, a small metal device, a blank steel card, and coffee."
            className="aspect-video w-full rounded-lg object-cover"
          />
          <figcaption className="mt-2 text-sm text-muted">
            An aisle still. Not a photo from the manufacturer, and not the product you'll receive.
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl text-ink">01</p>
            <h2 className="mt-2 text-lg text-ink">Answer four questions</h2>
            <p className="mt-2 text-sm text-muted">
              Phone or desk, gift or your own coins, steel or a second card. You get a short list, not
              forty tabs.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-ink">02</p>
            <h2 className="mt-2 text-lg text-ink">See the tradeoff</h2>
            <p className="mt-2 text-sm text-muted">
              Bluetooth is convenient. A phone-only screen is a compromise. We say so before you buy.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-ink">03</p>
            <h2 className="mt-2 text-lg text-ink">Open one Amazon cart</h2>
            <p className="mt-2 text-sm text-muted">
              A stack lands in your cart with today's price and Prime, if you have it. We never touch
              the payment.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-orange">Three stacks</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Buy a set, not a guess.</h2>
          </div>
          <Link to="/guide" className="inline-flex min-h-11 items-center text-sm text-ink underline">
            Or take the four-question guide
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {stacks.map((stack) => {
            const pieces = productsByIds(stack.productIds);
            return (
              <article key={stack.id} className="flex flex-col border border-line bg-card">
                <img src={stack.image} alt={stack.imageAlt} className="aspect-video w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-medium text-orange">{stack.kicker}</p>
                  <h3 className="mt-1 font-display text-2xl text-ink">{stack.name}</h3>
                  <p className="mt-3 text-sm text-muted">{stack.summary}</p>
                  <ul className="mt-4 space-y-1 text-sm text-ink">
                    {pieces.map((product) => (
                      <li key={product.id}>
                        {product.name}
                        <span className="text-muted"> · {product.maker}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <StackActions products={pieces} label="Add this set to your cart" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Where do you actually need to be?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {DOORS.map((door) => {
            const meta = aisleMeta[door.aisle];
            return (
              <Link
                key={door.aisle}
                to="/shelf"
                search={{ aisle: door.aisle }}
                className="group overflow-hidden border border-line bg-card"
              >
                <img src={meta.image} alt={meta.alt} className="aspect-video w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm text-muted">{meta.label}</p>
                  <h3 className="mt-1 font-display text-2xl text-ink">{door.title}</h3>
                  <p className="mt-2 text-sm text-muted">{door.text}</p>
                  <p className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-orange">
                    Open this aisle
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 border border-line bg-ink p-6 text-paper sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">What we refuse to sell you.</h2>
            <p className="mt-4 text-paper-deep">
              No USB miners. No "passive income" boxes. No starred ratings we didn't earn, and no
              price we can't keep honest. Bitcoin buyers can smell a junk drawer. This aisle is short
              on purpose.
            </p>
          </div>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium">Who pays us</dt>
              <dd className="mt-1 text-paper-deep">
                Amazon, if you buy. The brands do not. That's the whole model, and it's on every page.
              </dd>
            </div>
            <div>
              <dt className="font-medium">What a wallet is not</dt>
              <dd className="mt-1 text-paper-deep">
                It does not hold coins. It holds keys. The coins live on the chain. Lose the recovery
                words and no company can reset them.
              </dd>
            </div>
            <div>
              <dt className="font-medium">The order that saves people</dt>
              <dd className="mt-1 text-paper-deep">
                Device, then steel, then a small test withdrawal, then the rest. Never the other way
                around.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-ink">From the shelf</h2>
          <Link to="/wallets" className="inline-flex min-h-11 items-center text-sm text-ink underline">
            Compare the wallets
          </Link>
        </div>
        {productsByIds(["trezor-safe-3", "ledger-nano-x", "inventing-bitcoin", "steel-tiles"]).map(
          (product) => (
            <ProductRow key={product.id} product={product} />
          ),
        )}
      </section>
    </main>
  );
}
