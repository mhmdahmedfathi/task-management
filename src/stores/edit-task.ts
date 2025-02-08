import { create } from 'zustand'

const useTaskStore = create<ITaskStore>((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
    task: null,
    setTask: (task: TTaskTable) => set({ task }),
}))

export default useTaskStore;