interface TTasks {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    status: 'Pending' | 'Completed' | 'Overdue';
}

interface ITaskStore {
    open: boolean;
    setOpen: (open: boolean) => void;
    task: TTasks | null;
    setTask: (task: TTasks) => void;
}