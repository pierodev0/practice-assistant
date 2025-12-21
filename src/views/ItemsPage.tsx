import { useState } from "react";
import type { DrafItem } from "../types";
import { useAppStore } from "../store/store";
import ItemForm from "../components/ItemForm";
import ItemDetail from "../components/ItemDetail";

const ItemsPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const addItem = useAppStore((state) => state.addItem);
  const items = useAppStore((state) => state.items);

  function createItem(data: DrafItem) {
    setIsOpen(true);
    addItem(data);
  }

  return (
    <section className="grid grid-cols-2">
      <div>
        {isOpen ? (
          <div className="space-y-2">
            {items.length == 0 ? (
              <p className="italic text-base-content/60 text-center py-2">No hay items</p>
            ) : (
              <div>
                {items.map((item) => (
                  <ItemDetail item={item} />
                ))}
              </div>
            )}
            <button
              className="btn btn-outline btn-primary w-full"
              onClick={() => setIsOpen((s) => !s)}
            >
              Add new Item
            </button>
          </div>
        ) : (
          <ItemForm onSave={createItem} />
        )}
      </div>
      <div></div>
    </section>
  );
};

export default ItemsPage;
