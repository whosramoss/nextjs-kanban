"use client"

import { KanbanItemType, KanbanColumnType } from "@models/kanban-model";
import { Dispatch, SetStateAction } from "react";
import { useKanbanSettings } from "@hooks/useKanbanSettings";
import { cn, ICommons } from "@utils/utils";
import { Kanban } from "@ui/kanban";

interface IKanbanColumn extends ICommons {
  title: string;
  cards: KanbanItemType[];
  column: KanbanColumnType;
  setCards: Dispatch<SetStateAction<KanbanItemType[]>>;
};

export default function KanbanColumn({
  title,
  cards,
  column,
  setCards,
  children
}: IKanbanColumn) {
  const {
    active,
    filteredCards,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
  } = useKanbanSettings({ cards, column, setCards });

  return (
    <div className="w-90 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium text-neutral-500`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={
          cn('h-full w-full transition-colors', active ? "bg-neutral-800/50" : "bg-neutral-800/0")}
      >
        {filteredCards.map((c) => {
          return <Kanban.Item key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        {children}
      </div>
    </div>
  );
};
