import { Copy, Pencil, X } from "lucide-react";
import type { Item } from "../types";
import { useState } from "react";

type ItemDetailProps = {
  item: Item;
};
const ItemDetail = ({ item }: ItemDetailProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-3 border-t border-gray-300 first:border-t last:border-b space-y-2">
      <section className="flex justify-between items-center">
        {item.title}
        {!isOpen && (
          <div className="flex gap-1">
            <button className="bg-gray-400 rounded-full p-0.5 hover:cursor-pointer size-5 flex items-center justify-center">
              <Pencil className="size-3" />
            </button>
            <button className="bg-blue-400 rounded-full p-0.5 hover:cursor-pointer size-5 flex items-center justify-center">
              <Copy className="size-3" />
            </button>
            <button
              className="bg-red-400 rounded-full p-0.5 hover:cursor-pointer size-5 flex items-center justify-center"
              onClick={() => setIsOpen(true)}
            >
              <X className="size-3" />
            </button>
          </div>
        )}
      </section>
      {isOpen && (
        <div className="space-x-2 display">
          <button className="btn btn-outline btn-error">Eliminar</button>
          <button className="btn btn-outline" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
