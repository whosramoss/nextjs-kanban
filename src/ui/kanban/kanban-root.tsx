import { ICommons } from "@utils/utils";

export default function KanbanRoot({ children }: ICommons) {
  return (
    <div className="h-screen w-full bg-stone-100 text-neutral-50">
      <div className="flex w-full px-8 pt-8 sm:px-12 sm:pt-12 text-neutral-900 text-4xl sm:text-6xl font-bold uppercase">
        Kanban
      </div>
      <div className="flex w-full px-8 sm:px-12 py-4 text-neutral-900 text-lg sm:text-2xl">
        A visual workflow management method used to organize tasks and improve the efficiency of processes.
      </div>
      {children}
    </div>
  )
}