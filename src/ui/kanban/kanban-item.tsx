import { Kanban } from "@ui/kanban";
import KanbanIndicator from "@ui/kanban/kanban-indicator";
import { KanbanItemType } from "@models/kanban-model";
import { motion } from "framer-motion";
import React from "react";

interface IKanbanItem extends KanbanItemType {
  handleDragStart: Function;
};

export default function KanbanItem({ title, id, column, handleDragStart }: IKanbanItem) {
  return (
    <React.Fragment>
      <Kanban.Indicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </React.Fragment>
  );
};