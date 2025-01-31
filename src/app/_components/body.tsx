"use client"

import { Kanban } from "@ui/kanban";
import { KanbanItemType, KanbanColumnType } from "@models/kanban-model";
import React, { useState } from "react";

interface IBody {
  data: KanbanItemType[]
}
export default function Body({ data }: IBody) {
  const [cards, setCards] = useState(data);

  const list = [
    { title: "Backlog", column: "backlog" },
    { title: "To Do", column: "todo" },
    { title: "In progress", column: "doing" },
    { title: "Complete", column: "done" },
  ]

  return (
    <div className="flex w-full gap-4 overflow-x-auto px-4 sm:px-12 py-8">
      {list.map((e, index) => {
        const values = {
          column: e.column as KanbanColumnType,
          title: e.title,
          cards,
          setCards
        }

        return (
          <Kanban.Column key={index}   {...values} >
            <Kanban.Indicator beforeId={null}  {...values} />
            <Kanban.Button  {...values} />
          </Kanban.Column>
        )
      })}
    </div>
  );
}

