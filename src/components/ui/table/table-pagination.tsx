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
    onPageChange: (page: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
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
                <PaginationItem>
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