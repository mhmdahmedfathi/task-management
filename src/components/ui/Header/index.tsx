import React from 'react';
import { Button } from '../button';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Task Manager</h1>
            <div className="flex gap-4">
                <Button className="text-white px-4 py-2 rounded-lg hover:bg-gray-100">Add Task</Button>
            </div>
        </header>
    );
};

export default Header;