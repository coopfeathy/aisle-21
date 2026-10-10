import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { useShortlist } from "@/lib/shortlist";

const NAV = [
  { to: "/shelf", label: "Shelf" },
  { to: "/wallets", label: "Wallets" },
  { to: "/guide", label: "Guide" },
  { to: "/saved", label: "Saved" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const count = useShortlist((state) => state.ids.length);
  const hydrated = useShortlist((state) => state.hydrated);

  useEffect(() => {
    let live = true;
    const pending = useShortlist.persist.rehydrate();
    void Promise.resolve(pending).finally(() => {
      if (live) useShortlist.setState({ hydrated: true });
    });
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link to="/" className="font-display text-2xl text-ink">
            Aisle <span className="text-orange">21</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "inline-flex min-h-11 items-center rounded-md px-3 text-sm " +
                    (active ? "bg-ink text-paper" : "text-ink hover:bg-paper-deep")
                  }
                >
                  {item.label}
                  {item.to === "/saved" && hydrated && count > 0 ? (
                    <span className="ml-2 inline-flex min-w-5 items-center justify-center rounded-md bg-orange px-1 text-xs text-paper">
                      {count}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="mt-16 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-xl text-ink">
              Aisle <span className="text-orange">21</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              An edited aisle for Bitcoin gear. Not a catalog of everything Amazon will sell you.
            </p>
          </div>
          <div className="text-sm text-muted">
            <p>As an Amazon Associate I earn from qualifying purchases.</p>
            <p className="mt-2">
              Not financial, tax, or security advice. Self-custody is unforgiving: lose the recovery
              words and the coins are gone.
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 text-sm">
            <Link to="/disclosure" className="min-h-11 inline-flex items-center text-ink underline">
              Affiliate disclosure
            </Link>
            <Link to="/guide" className="min-h-11 inline-flex items-center text-ink underline">
              Build a stack
            </Link>
            <Link to="/shelf" search={{ aisle: "all" }} className="min-h-11 inline-flex items-center text-ink underline">
              Browse the shelf
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
