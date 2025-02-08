interface TTasks {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: 'Low' | 'Medium' | 'High'
}

interface TTaskTable extends TTasks {
    status: 'Pending' | 'Completed' | 'Overdue'
}

interface IEditTaskStore {
    open: boolean;
    setOpen: (open: boolean) => void;
    task: TTaskTable | null;
    setTask: (task: TTaskTable) => void;
}

interface IDeleteTaskStore {
    open: boolean;
    setOpen: (open: boolean) => void;
    taskId: string;
    setTaskId: (taskId: string) => void;
    onConfirm: (taskId) => void;
}

interface ITaskStore {
    tasks: TTaskTable[];
    setTasks: (tasks: TTaskTable[]) => void;
    columns: AccessorKeyColumnDef<TTaskTable, "Pending" | "Completed" | "Overdue">[];
    setColumns: (columns: AccessorKeyColumnDef<TTaskTable, "Pending" | "Completed" | "Overdue">[]) => void;
}