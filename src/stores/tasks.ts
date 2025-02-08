import { AccessorKeyColumnDef } from '@tanstack/react-table';
import { create } from 'zustand'

const useTaskStore = create<ITaskStore>((set) => ({
    tasks: [],
    setTasks: (tasks: TTaskTable[]) => set({ tasks }),
    columns: [],
    setColumns: (columns: AccessorKeyColumnDef<TTaskTable, "Pending" | "Completed" | "Overdue">[]) => set({ columns }),
}))

export default useTaskStore;