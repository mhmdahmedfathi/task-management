import {
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
import useTaskStore from "../../stores/tasks"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebaseConfig"

interface DataTableProps {
  table: TTable<TTaskTable>
}

export const DataTable: React.FC<DataTableProps> = ({ table }) => {
  const { columns } = useTaskStore()
  const [user] = useAuthState(auth);

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
                  if(cell.id.includes("id") && !user) {
                    return (
                    <TableCell 
                      key={cell.id}
                      className={cn(
                        isPastDue ? "bg-red-100 dark:bg-red-900" : "",
                        isCompleted ? "bg-green-100 dark:bg-green-900 line-through" : "",
                      )}
                    >
                      <p className="text-red-500 text-center">Login to view</p>
                    </TableCell>
                    )
                  }
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
