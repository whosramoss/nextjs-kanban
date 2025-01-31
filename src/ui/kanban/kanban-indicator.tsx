interface IKanbanIndicator {
  beforeId: string | null;
  column: string;
};

export default function KanbanIndicator({ beforeId, column }: IKanbanIndicator) {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-red-400 opacity-0"
    />
  );
};