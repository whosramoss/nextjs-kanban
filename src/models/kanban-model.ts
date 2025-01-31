import * as z from "zod";


const SKanbanColumnType = z.union([
  z.literal("backlog"),
  z.literal("todo"),
  z.literal("doing"),
  z.literal("done")
])

const SKanbanItemType = z.object({
  title: z.string(),
  id: z.string(),
  column: SKanbanColumnType
})
export const SApiKanbanResponse = z.object({
  data: z.array(SKanbanItemType),
});

export type KanbanItemType = z.infer<typeof SKanbanItemType>;
export type KanbanColumnType = z.infer<typeof SKanbanColumnType>;
export type ApiKanbanResponse = z.infer<typeof SApiKanbanResponse>;
