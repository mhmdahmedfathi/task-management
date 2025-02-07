import React from 'react';
import DebounceInput from '../debounce-input';

interface TableFiltersProps {
    setGlobalFilter: (value: string | number) => void;
    globalFilter: string;
}
const TableFilters: React.FC<TableFiltersProps> = ({
    globalFilter,
    setGlobalFilter
}) => {
    return (
        <div className="flex items-center py-4">
            <DebounceInput
                value={globalFilter}
                onChange={(value) => {
                    setGlobalFilter(value);
                }}
                placeholder="Search for a title or description"
                className="w-96 px-4 py-2 border rounded-md border-black placeholder:text-black text-black"
            />
      </div>
    );
};

export default TableFilters;