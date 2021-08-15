import React from 'react';
import classNames from 'classNames';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({
    data,
    getdata,
    count = 0,
    limit = 10,
    page = 1,
    length = 10,
}) => {

    const handleGetData = (page) => {
        if (typeof getdata === 'function') getdata(page)
    }

    const getPageRange = () => {
        const pagecount = Math.ceil(count / limit) // Number of pages
        const rangeindex = Math.ceil(page / length) // In which range of pages
        const end = Math.min(rangeindex * length, pagecount) // The last number in the range
        const start = rangeindex * length - length + 1 // The fisrt number in the range
        const canprev = (page > 1) // Can go forward
        const cannext = (page < pagecount) // Can go backwards
        return {
            start,      // The fisrt number in the range
            end,        // The last number in the range
            canprev,    // Can go forward
            cannext,    // Can go backwards
            pagecount,  // Number of pages
        }
    }

    const { start, end, canprev, cannext, pagecount } = getPageRange()

    const showStart = ((page - 1 ) * limit) + 1
    const showEnd = pagecount === page ? count : (page) * limit

    const renderPaginationItem = (start, end, page) => {
        const items = []
        for (let i = start; i <= end; i++) {
            items.push(
                <div
                    key={i}
                    aria-current="page"
                    className={`relative items-center px-4 py-2 border text-sm font-medium select-none ${classNames({
                        'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex cursor-pointer': i !== page,
                        'inline-flex z-10 bg-indigo-50 border-indigo-500 text-indigo-600 cursor-default': i === page
                    })}`}
                    onClick={() => handleGetData(i)}
                >
                    {i}
                </div>
            )
        }
        return items
    }

    return count <= 0 ? null : (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                {!canprev ? null :
                    <div
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        onClick={() => handleGetData(page - 1)}
                    >
                        Previous
                    </div>
                }
                {!cannext ? null :
                    <div
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        onClick={() => handleGetData(page + 1)}
                    >
                        Next
                    </div>
                }
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        <span className='mr-1'>Showing</span>
                        <span className="mr-1 font-medium">{showStart}</span>
                        <span className='mr-1'>to</span>
                        <span className="mr-1 font-medium">{showEnd}</span>
                        <span className='mr-1'>of{' '}</span>
                        <span className="mr-1 font-medium">{count}</span>
                        <span className=''>results</span>
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <div
                            href="#"
                            className={classNames("relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium", {
                                "text-gray-500": showStart !== 1,
                                "hover:bg-gray-50": showStart !== 1,
                                "text-gray-300": showStart === 1,
                            })}
                            onClick={() => {
                                if (showStart === 1) return
                                handleGetData(page - 1)
                            }}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        {renderPaginationItem(start, end, page)}

                        <div
                            className={classNames("relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium", {
                                "text-gray-500": showEnd !== count,
                                "hover:bg-gray-50": showEnd !== count,
                                "text-gray-300": showEnd === count,
                            })}
                            onClick={() => {
                                if (showEnd === count) return
                                handleGetData(page + 1)
                            }}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;