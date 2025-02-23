import { createColumnHelper } from "@tanstack/react-table";
import { ChevronsUpDown, CircleX, Edit } from "lucide-react";
import { Button } from "../button";
import useEditTaskStore from "../../../stores/edit-task";
import useDeleteTaskStore from "../../../stores/delete-task";
import { cn } from "../../../lib/utils";


const useTableColumns = () => {
  const columnHelper = createColumnHelper<TTaskTable>();
  const { setOpen, setTask } = useEditTaskStore();
  const { setOpen:setDeleteOpen,setTaskId } = useDeleteTaskStore();

  const columns = [
    columnHelper.accessor("title", {
      cell: (info) => {
        return (
          <div className="dark:text-dark-text px-4 text-left text-sm font-normal text-[#7a7a7a]">
            {info.getValue()}
          </div>
        );
      },
      header: ({ column }) => {
        return (
          <Button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex w-full items-center justify-between gap-2 text-base font-bold !bg-transparent"
          >
            Title
            <ChevronsUpDown className="size-3 text-[#7a7a7a]" />
          </Button>
        );
      },
      size: 23,
      minSize: 150,
    }),

    columnHelper.accessor("description", {
        cell: (info) => {
          return (
            <div className="dark:text-dark-text px-4 text-left text-sm font-normal text-[#7a7a7a]">
              {info.getValue()}
            </div>
          );
        },
        header: ({ column }) => {
          return (
            <Button
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex w-full items-center justify-between gap-2 text-base font-bold !bg-transparent"
            >
                Description
              <ChevronsUpDown className="size-3 text-[#7a7a7a]" />
            </Button>
          );
        },
        size: 23,
        minSize: 150,
      }),

    columnHelper.accessor("dueDate", {
      cell: (info) => {
        return (
            <div className="dark:text-dark-text px-4 text-left text-sm font-normal text-[#7a7a7a]">
            {new Date(info.getValue()).toLocaleDateString('en-GB')}
            </div>
        );
      },
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => {
                column.toggleSorting(column.getIsSorted() === "asc");
                console.log(column, column.getIsSorted());
                
            }}
            className="flex w-full items-center justify-between gap-2 text-base font-bold !bg-transparent"
          >
            Due Date
            <ChevronsUpDown className="size-3 text-[#7a7a7a]" />
          </Button>
        );
      },
      size: 15,
      minSize: 150,
    }),
    columnHelper.accessor("priority", {
      cell: (info) => {
        return (
          <div className="dark:text-dark-text px-4 text-left text-sm font-normal text-[#7a7a7a]">
            {info.getValue()}
          </div>
        );
      },
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex w-full items-center justify-between gap-2 text-base font-bold !bg-transparent"
          >
            Priority
            <ChevronsUpDown className="size-3 text-[#7a7a7a]" />
          </Button>
        );
      },
      size: 15,
      minSize: 150,
    }),
    columnHelper.accessor("status", {
      cell: (info) => {
        return (
          <div className="dark:text-dark-text px-4 text-left text-sm font-normal text-[#7a7a7a]">
            {info.getValue()}
          </div>
        );
      },
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex w-full items-center justify-between gap-2 text-base font-bold !bg-transparent"
          >
            Status
            <ChevronsUpDown className="size-3 text-[#7a7a7a]" />
          </Button>
        );
      },
      size: 15,
      minSize: 150,
    }),
    columnHelper.accessor("id", {
      cell: (info) => {
        const completed = info.row.original.status === "Completed";
        const overdue = new Date(info.row.original.dueDate) < new Date();
        return (
          <div className={cn(
            "items-left flex w-full justify-center gap-2 px-4",
          )}>
            <Button
              variant="ghost"
              className="size-fit !bg-transparent"
              size="icon"
              disabled={completed || overdue}
              onClick={() => {
                setOpen(true);
                setTask(info.row.original);
              }}
            >
                <Edit size={16} />
            </Button>
            <Button
              variant="ghost"
              className="size-fit !bg-transparent"
              size="icon"
              disabled={completed || overdue}
              onClick={
                () => {
                  setTaskId(info.getValue());
                  setDeleteOpen(true);
                }
              }
            >
                <CircleX size={16} />
            </Button>
          </div>
        );
      },
      header: () => {
        return (
          <div className={cn(
            "flex w-full items-center justify-center gap-2 text-base font-bold !bg-transparent",
          )}>
            Action
          </div>
        );
      },
      size: 23,
      minSize: 150,
    }),
  ];

  return columns;
};

export default useTableColumns;
