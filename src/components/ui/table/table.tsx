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


interface TableProps {
  columns: AccessorKeyColumnDef<TTasks, string>[]
  data: TTasks[]
}

const TasksTable: React.FC<TableProps> = ({ columns, data }) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [globalFilter, setGlobalFilter] = useState("");


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
    globalFilterFn: (row, columnId, filterValue) => {
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
        onPageChange={table.setPageIndex}
      />
    </div>
  );
};

export default TasksTable;
