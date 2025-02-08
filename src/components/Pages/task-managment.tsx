import React, { useEffect } from 'react';

import useTableColumns from '../ui/table/columns';
import TasksTable from '../ui/table/table';
import Header from '../ui/Header';
import taskService from '../../services/taskService';
import useTaskStore from '../../stores/tasks';


const TaskManager: React.FC = () => {

  const {setTasks,setColumns} = useTaskStore()
  const TableCols = useTableColumns();

  useEffect(() => {
    taskService.onTaskUpdate((tasks) => {
      setTasks(tasks);
    });
    setColumns(TableCols);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <Header />
      <div className="p-4">
          <TasksTable />
      </div>
    </div>
  );
};

export default TaskManager;