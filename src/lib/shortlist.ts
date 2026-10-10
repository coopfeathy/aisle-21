import { create } from "zustand";
import { persist } from "zustand/middleware";

type ShortlistState = {
  ids: string[];
  hydrated: boolean;
  toggle: (id: string) => void;
  addMany: (ids: string[]) => void;
  clear: () => void;
};

export const useShortlist = create<ShortlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      hydrated: false,
      toggle: (id) => {
        const ids = get().ids;
        set({
          ids: ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id],
        });
      },
      addMany: (incoming) => {
        const next = new Set(get().ids);
        for (const id of incoming) next.add(id);
        set({ ids: [...next] });
      },
      clear: () => set({ ids: [] }),
    }),
    {
      name: "aisle21-shortlist",
      partialize: (state) => ({ ids: state.ids }),
      skipHydration: true,
    },
  ),
);
