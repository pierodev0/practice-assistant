import { useState } from "react";

const ItemsPage = () => {
  const [tabbed, setIsTabbed] = useState(true);
  return (
    <section className="grid grid-cols-2">
      <div>
        {tabbed ? (
          <button
            className="btn btn-outline btn-primary w-full"
            onClick={() => setIsTabbed((s) => !s)}
          >
            Add new Item
          </button>
        ) : (
          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base-content/70 uppercase font-bold"
              >
                Title
              </label>
              <input type="text" className="input input-neutral w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base-content/70 uppercase font-bold"
              >
                Description
              </label>
              <input type="text" className="input input-neutral w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base-content/70 uppercase font-bold"
              >
                Duration
              </label>
              <input type="text" className="input input-neutral w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base-content/70 uppercase font-bold"
              >
                Related Link
              </label>
              <input type="text" className="input input-neutral w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base-content/70 uppercase font-bold"
              >
                Statistic Name
              </label>
              <input type="text" className="input input-neutral w-full" />
            </div>
            <div className="flex gap-2 justify-start">
              <button
                className="btn btn-soft"
                onClick={() => setIsTabbed(true)}
              >
                Save
              </button>
              <button
                className="btn btn-soft"
                onClick={() => setIsTabbed(true)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </section>
  );
};

export default ItemsPage;
