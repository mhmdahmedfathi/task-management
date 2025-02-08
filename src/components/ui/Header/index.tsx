import React from 'react';
import Login from './login';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Task Manager</h1>
            <div className="flex gap-4">
                <Login />
            </div>
        </header>
    );
};

export default Header;