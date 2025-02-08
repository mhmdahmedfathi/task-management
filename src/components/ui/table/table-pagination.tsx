import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../pagination"

interface TablePaginationProps {
    currentPage: number;
    totalPages: number;
    handlePagination: (isNext: boolean) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({ currentPage, totalPages, handlePagination }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePagination(false);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePagination(true);
        }
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem className='cursor-pointer'>
                    {
                        currentPage > 1 ? (
                            <PaginationPrevious onClick={handlePrevious} />
                        ) : (
                            null
                        )
                    }
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        aria-label={`Go to page ${currentPage}`}
                        size="lg"
                        className="gap-1 text-lg"
                    >
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem className='cursor-pointer'>
                    {
                        currentPage < totalPages ? (
                            <PaginationNext onClick={handleNext} />
                        ) : (
                            null
                        )
                    }
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    );
};

export default TablePagination;