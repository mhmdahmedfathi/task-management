import { createColumnHelper } from "@tanstack/react-table";
import { ChevronsUpDown, CircleX, Edit } from "lucide-react";
import { Button } from "../button";
import useTaskStore from "../../../stores/edit-task";
import taskService from "../../../services/taskService";


const useTableColumns = () => {
  const columnHelper = createColumnHelper<TTasks>();
  const { setOpen, setTask } = useTaskStore();

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
            {info.getValue()}
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
        return (
          <div className="items-left flex w-full justify-center gap-2 px-4">
            <Button
              variant="ghost"
              className="size-fit !bg-transparent"
              size="icon"
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
              onClick={async () => {
                await taskService.deleteTask(info.row.original.id);
              }}
            >
                <CircleX size={16} />
            </Button>
          </div>
        );
      },
      header: () => {
        return (
          <div className="flex w-full items-center justify-center gap-2 text-base font-bold !bg-transparent">
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
