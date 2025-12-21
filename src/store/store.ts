import { create } from "zustand";
import type { DrafItem, Item } from "../types";
import { devtools } from "zustand/middleware";

type State = {
  items: Item[];
  addItem: (item: DrafItem) => void;
};
const createItem = (item: DrafItem): Item => {
  return { ...item, id: crypto.randomUUID() };
};
export const useAppStore = create<State>()(
  devtools((set) => ({
    items: [],
    addItem: (draftItem) => {
      const newItem = createItem(draftItem);
      set((state) => ({
        items: [...state.items, newItem],
      }));
    },
  })),
);
