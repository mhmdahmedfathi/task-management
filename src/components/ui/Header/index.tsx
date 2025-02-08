import React from 'react';
import { Button } from '../button';
import AddEditTask from '../table/add-edit-task';

const Header: React.FC = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <header className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Task Manager</h1>
            <div className="flex gap-4">
                <Button 
                    onClick={()=>setOpenModal(true)} 
                    className="text-white px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                    Add Task
                </Button>
                <AddEditTask open={openModal} setOpen={setOpenModal} />
            </div>
        </header>
    );
};

export default Header;