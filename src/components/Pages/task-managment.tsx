import React, { useEffect, useState } from 'react';

import useTableColumns from '../ui/table/columns';
import TasksTable from '../ui/table/table';
import { AccessorKeyColumnDef } from '@tanstack/react-table';
import Header from '../ui/Header';
import taskService from '../../services/taskService';


const TaskManager: React.FC = () => {

  const [tasks, setTasks] = useState<TTasks[]>([]);

  useEffect(() => {
    taskService.onTaskUpdate((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const columns = useTableColumns() as AccessorKeyColumnDef<TTasks, "Pending" | "Completed" | "Overdue">[]

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