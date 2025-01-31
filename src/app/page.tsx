"use client";

import React from "react";
import { useApiFetchFromQuery } from "@hooks/useApiFetchFromQuery";
import { ApiKanbanResponse } from "@models/kanban-model";
import Body from "@app/_components/body";
import { Kanban } from "@ui/kanban";

export default function Page() {
  const { data, isLoading, error } = useApiFetchFromQuery<ApiKanbanResponse>({
    url: '/api/kanban',
    key: "kanban",
  });

  if (error) {
    return (
      <Kanban.Root>
        <div className="sm:px-12 py-4 text-neutral-900 ">
          Error
        </div>
      </Kanban.Root>

    );
  }

  if (isLoading) {
    return (
      <Kanban.Root>
        <div className="sm:px-12 py-4 text-neutral-900 ">
          Loading
        </div>
      </Kanban.Root>
    );
  }
  return (
    <Kanban.Root>
      <Body data={data?.data || []} />
    </Kanban.Root>
  );
}
