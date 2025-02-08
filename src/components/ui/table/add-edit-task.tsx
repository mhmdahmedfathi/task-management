import React, { useEffect } from 'react';

import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "../dialog";
import { Input } from '../input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../select";
import { Button } from '../button';
import { cn } from '../../../lib/utils';
import taskService from '../../../services/taskService';

interface IAddEditTask {
    open: boolean;
    setOpen: (open: boolean) => void;
    isEdit?: boolean;
    task?: TTasks | null;
}

// Zod Schema for Validation
const taskSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    dueDate: z.string().min(1, "Due date is required"),
    status: z.enum(["Pending", "Completed", "Overdue"]),
});

// Infer Type from Zod Schema
type TaskFormData = z.infer<typeof taskSchema>;

const AddEditTask: React.FC<IAddEditTask> = ({
    open,
    setOpen,
    isEdit = false,
    task,
}) => {

    const taskForm = useForm<TaskFormData>({
        resolver: zodResolver(taskSchema),
    });

    const onSubmit: SubmitHandler<TaskFormData> = (data) => {
        if (isEdit && task) {
            taskService.updateTask({ ...task, ...data });
        }
        else {
            const newTask = { ...data, id: crypto.randomUUID() };
            taskService.createTask(newTask);
        }
        taskForm.reset();
        setOpen(false);
    };

    const onError: SubmitErrorHandler<TaskFormData> = (errors) => {
        console.log(errors);
    }

    useEffect(() => {
        if (isEdit && task) {
            taskForm.reset(task);
        }
    }, [isEdit,task]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                        {isEdit ? "Edit Task" : "Add Task"}
                    </DialogTitle>
                </DialogHeader>
                <Form {...taskForm}>
                    <form onSubmit={taskForm.handleSubmit(onSubmit, onError)} className="space-y-6">
                        <FormField
                            control={taskForm.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium text-gray-700">
                                        Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter title"
                                            {...field}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-sm text-red-600" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={taskForm.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium text-gray-700">
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter description"
                                            {...field}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-sm text-red-600" />
                                </FormItem>
                            )}
                        />

                        <FormField
                        control={taskForm.control}
                        name="dueDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-2">
                                <FormLabel className="text-sm font-medium text-gray-700">Due Date</FormLabel>
                                <DatePicker
                                    onChange={(date) => field.onChange(date instanceof Date ? date.toLocaleDateString('en-GB') : '')}
                                    className={cn("w-full text-black p-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500")}
                                    value={field.value ? new Date(field.value) : null}
                                    format="dd/MM/yyyy"
                                />     
                                <FormMessage className="text-sm text-red-600" />                           
                            </FormItem>
                        )}
                        />


                        <FormField
                            control={taskForm.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium text-gray-700">
                                        Status
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger className="!bg-white mt-1 !p-1 block w-full rounded-md !border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white text-black rounded-md shadow-lg">
                                                <SelectGroup>
                                                    <SelectLabel>Status</SelectLabel>
                                                    <SelectItem value="Pending" className="hover:bg-gray-100 cursor-pointer">
                                                        Pending
                                                    </SelectItem>
                                                    <SelectItem value="Completed" className="hover:bg-gray-100 cursor-pointer">
                                                        Completed
                                                    </SelectItem>
                                                    <SelectItem value="Overdue" className="hover:bg-gray-100 cursor-pointer">
                                                        Overdue
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage className="text-sm text-red-600" />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddEditTask;