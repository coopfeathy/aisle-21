import { createFileRoute } from "@tanstack/react-router";
import { AFFILIATE_TAG } from "@/lib/catalog";

export const Route = createFileRoute("/disclosure")({
  head: () => ({
    meta: [{ title: "Disclosure — Aisle 21" }],
  }),
  component: DisclosurePage,
});

function DisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium text-orange">Plain language</p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Affiliate disclosure</h1>
      <div className="mt-6 space-y-4 text-ink">
        <p className="text-lg">As an Amazon Associate I earn from qualifying purchases.</p>
        <p>
          Aisle 21 is a participant in the Amazon Services LLC Associates Program. When you follow a
          link to Amazon and buy something, we may earn a commission. It does not change the price you
          pay. Amazon handles the order, the shipping, and the return.
        </p>
        <p>
          Links on this site use the associate tag <span className="font-medium">{AFFILIATE_TAG}</span>.
          You can see it in the address bar after you click. We don't cloak links through another
          domain.
        </p>
        <p>
          We do not display prices. Amazon's prices, stock, and shipping change constantly, and a
          number printed here would mislead you. Buttons open the live product page, or a search when
          the exact listing rotates.
        </p>
        <p>
          Recommendations are editorial. The brands listed here do not pay for placement. Amazon's
          commission is the same idea no matter which of these you buy, so it is a poor reason to
          prefer one device over another. We say when we'd buy the thing and when we wouldn't.
        </p>
        <p>
          This is not financial, investment, tax, or security advice. Bitcoin is volatile. Self-custody
          means there is no password reset. If you lose the recovery words and the device, the coins
          are gone. Nothing on this site is an offer to sell Bitcoin, a promise of profit, or a mining
          scheme.
        </p>
        <p>
          Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. Aisle 21 is
          not endorsed by Amazon, Ledger, Trezor, Tangem, Raspberry Pi, or any author whose book we
          link. Product names belong to their owners. The photographs on this site are aisle stills,
          not manufacturer photos of what will arrive in the box.
        </p>
      </div>
    </main>
  );
}
