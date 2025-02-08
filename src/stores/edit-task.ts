import { create } from 'zustand'

const useEditTaskStore = create<IEditTaskStore>((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
    task: null,
    setTask: (task: TTaskTable) => set({ task }),
}))

export default useEditTaskStore;