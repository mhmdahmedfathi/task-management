import React, { useState } from 'react';

import useTableColumns from '../ui/table/columns';
import TasksTable from '../ui/table/table';
import { AccessorKeyColumnDef } from '@tanstack/react-table';
import Header from '../ui/Header';


const TaskManager: React.FC = () => {

  const [tasks, setTasks] = useState<TTasks[]>([
    {
      id: '1',
      title: 'Task 1',
      description: '14 This is a description for Task 1',
      dueDate: '2025-12-31',
      status: 'Pending',
    },
    {
      id: '2',
      title: 'Task 2',
      description: '3 This is a description for Task 2',
      dueDate: '2022-12-31',
      status: 'Pending',
    },
    {
      id: '3',
      title: 'Task 3',
      description: ' 4 This is a description for Task 3',
      dueDate: '2023-12-31',
      status: 'Pending',
    },
  ]);

  const columns: AccessorKeyColumnDef<TTasks, string>[] = useTableColumns()

  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <Header />
      <div className="p-4">
            <TasksTable columns={columns} data={tasks} />
      </div>
    </div>
  );
};

export default TaskManager;