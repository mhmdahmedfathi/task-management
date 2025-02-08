import {
  AccessorKeyColumnDef,
  type Table as TTable,
  flexRender,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"
import { cn } from "../../lib/utils"

interface DataTableProps {
  table: TTable<TTaskTable>
  columns: AccessorKeyColumnDef<TTaskTable, "Pending" | "Completed" | "Overdue">[]
}

export const DataTable: React.FC<DataTableProps> = ({ table, columns }) => {

  return (
    <div className="rounded-md border !text-black">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  const dueDateStr = row.original.dueDate;
                  const dueDate = new Date(dueDateStr);
                  const isPastDue = (dueDate < new Date()) && row.original.status !== "Completed";
                  const isCompleted = row.original.status === "Completed";
            
                  return (
                    <TableCell 
                      key={cell.id}
                      className={cn(
                        isPastDue ? "bg-red-100 dark:bg-red-900" : "",
                        isCompleted ? "bg-green-100 dark:bg-green-900 line-through" : "",
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
