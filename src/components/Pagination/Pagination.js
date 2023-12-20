import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    let lastPage = 0;
    if (paginationRange) {
        lastPage = paginationRange[paginationRange?.length - 1];

    }
    return (
        <ul
            className={classnames('pagination-container ', { [className]: className })}
        >
            {/* Left navigation arrow */}
            <li
                className={classnames('pagination-item dark:text-gray-200 text-gray-700', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrow left  
                before:dark:border-r-gray-200
                 before:dark:border-t-gray-200
                  before:border-t-gray-700
                  before:border-r-gray-700
                " />
            </li>
            {paginationRange?.map((pageNumber, index) => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li key={index} className="pagination-item dots dark:text-gray-200 text-gray-700">&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <li key={index}
                        className={classnames('pagination-item dark:text-gray-200 text-gray-700', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={classnames('pagination-item dark:text-gray-200 text-gray-700', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrow right
                 before:dark:border-r-gray-200
                 before:dark:border-t-gray-200
                  before:border-t-gray-700
                  before:border-r-gray-700
                  "
                />
            </li>
        </ul>
    );
};

export default Pagination;