import { useForm } from "react-hook-form";
import type { DrafItem } from "../types";
import { useAppStore } from "../store/store";
type ItemFormProps = {
  onSave: (data: DrafItem) => void;
};
const ItemForm = ({onSave} : ItemFormProps) => {

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<DrafItem>();

  const addItem = useAppStore((state) => state.addItem);

  function createItem(data: DrafItem) {
    onSave(data)
  }
  return (
    <form className="space-y-2" onSubmit={handleSubmit(createItem)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-base-content/70 uppercase font-bold">
          Title
        </label>
        <input
          type="text"
          className="input input-neutral w-full"
          {...register("title")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-base-content/70 uppercase font-bold">
          Description
        </label>
        <input
          type="text"
          className="input input-neutral w-full"
          {...register("description")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-base-content/70 uppercase font-bold">
          Duration
        </label>
        <input
          type="text"
          className="input input-neutral w-full"
          {...register("duration")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-base-content/70 uppercase font-bold">
          Related Link
        </label>
        <input
          type="text"
          className="input input-neutral w-full"
          {...register("relatedLink")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-base-content/70 uppercase font-bold">
          Statistic Name
        </label>
        <input
          type="text"
          className="input input-neutral w-full"
          {...register("statisticName")}
        />
      </div>
      <div className="flex gap-2 justify-start">
        <button className="btn btn-soft" type="submit">
          Save
        </button>
        <button className="btn btn-soft" onClick={() => setIsTabbed(true)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
