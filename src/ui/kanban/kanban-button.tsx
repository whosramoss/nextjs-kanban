import { KanbanColumnType, KanbanItemType } from "@models/kanban-model";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState, FormEvent } from "react";
import { FiPlus } from "react-icons/fi";

interface IKanbanButton {
  column: KanbanColumnType;
  setCards: Dispatch<SetStateAction<KanbanItemType[]>>;
};

export default function KanbanButton({ column, setCards }: IKanbanButton) {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    setCards((pv) => [...pv, {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    }]);

    setAdding(false);
  };

  if (adding) {
    return (
      <motion.form layout onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          autoFocus
          placeholder="Add new task..."
          className="w-full rounded border border-stone-400 bg-stone-400/20 p-3 text-sm text-neutral-900 placeholder-stone-700 focus:outline-0"
        />
        <div className="mt-1.5 flex items-center justify-end gap-1.5">
          <button
            onClick={() => setAdding(false)}
            className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
          >
            Close
          </button>
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
          >
            <span>Add</span>
            <FiPlus />
          </button>
        </div>
      </motion.form>
    )
  }
  return (
    <motion.button
      layout
      onClick={() => setAdding(true)}
      className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-800 transition-colors hover:text-neutral-50"
    >
      <span>Add card</span>
      <FiPlus />
    </motion.button>
  );
};