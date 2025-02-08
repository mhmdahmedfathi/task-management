"use client";

import { useState } from "react";
import {
  SortingState,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  AccessorKeyColumnDef,
} from "@tanstack/react-table";

import TableFilters from "./table-filters";
import { DataTable } from "../data-table";
import TablePagination from "./table-pagination";
import AddEditTask from "./add-edit-task";
import useTaskStore from "../../../stores/edit-task";


interface TableProps {
  columns: AccessorKeyColumnDef<TTasks, "Pending" | "Completed" | "Overdue">[]
  data: TTasks[]
}

const TasksTable: React.FC<TableProps> = ({ columns, data }) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [globalFilter, setGlobalFilter] = useState("");
  const { open, setOpen, task } = useTaskStore();


  // Table instance
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    globalFilterFn: (row, _, filterValue) => {
      const title = row.getValue("title") as string;
      const description = row.getValue("description") as string;
      return (
        title.toLowerCase().includes(filterValue.toLowerCase()) ||
        description.toLowerCase().includes(filterValue.toLowerCase())
      );
    },
  });


  return (
    <div className="flex h-full flex-col gap-6">
      <TableFilters
        setGlobalFilter={table.setGlobalFilter}
        globalFilter={globalFilter}
      />
      <DataTable
        table={table}
        columns={columns}
      />
      <TablePagination 
        currentPage={table.getState().pagination.pageIndex + 1}
        totalPages={table.getPageCount()}
        handlePagination={(isNext:boolean)=>{
          if(isNext){
            table.nextPage();
          }else{
            table.previousPage();
          }
        }}
      />
      <AddEditTask isEdit task={task} open={open} setOpen={setOpen}  />
    </div>
  );
};

export default TasksTable;
