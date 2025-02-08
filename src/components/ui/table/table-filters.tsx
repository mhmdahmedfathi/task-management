import React, { useState } from 'react';
import DebounceInput from '../debounce-input';
import { Button } from '../button';
import AddEditTask from './add-edit-task';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebaseConfig';

interface TableFiltersProps {
    setGlobalFilter: (value: string | number) => void;
    globalFilter: string;
}
const TableFilters: React.FC<TableFiltersProps> = ({
    globalFilter,
    setGlobalFilter
}) => {
    const [openModal, setOpenModal] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <div className="flex items-center justify-between py-4">
            <DebounceInput
                value={globalFilter}
                onChange={(value) => {
                    setGlobalFilter(value);
                }}
                placeholder="Search for a title or description"
                className="w-96 px-4 py-2 border rounded-md border-black placeholder:text-black text-black"
            />
            {
                user && (
                    <>
                        <Button 
                            onClick={()=>setOpenModal(true)} 
                            className="text-white px-4 py-2 rounded-lg hover:bg-gray-100"
                        >
                            Add Task
                        </Button>
                        <AddEditTask open={openModal} setOpen={setOpenModal} />
                    </>
                )
            }
      </div>
    );
};

export default TableFilters;