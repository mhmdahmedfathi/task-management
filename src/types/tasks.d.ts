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

interface ITaskStore {
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