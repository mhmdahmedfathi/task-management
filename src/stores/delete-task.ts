import { create } from 'zustand'
import taskService from '../services/taskService';

const useDeleteTaskStore = create<IDeleteTaskStore>((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
    taskId: "",
    setTaskId: (taskId: string) => set({ taskId }),
    onConfirm: async (taskId:string) => {
        taskService.deleteTask(taskId);
    },
}))

export default useDeleteTaskStore;