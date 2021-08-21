import React, { useState, useEffect } from 'react';

const Counter = ({
    defaultCount=1,
    handleCount,
}) => {
    const [count, setCount] = useState(1)

    // 1=plus, 2=minus, 不能小於 0
    const handleSetCount = (option) => {
        let newCount = 0
        if (option === 1) newCount = count + 1
        if (option === 2) newCount = count - 1
        if (newCount <= 0) newCount = 1
        setCount(newCount)
    }

    useEffect(() => {
        setCount(defaultCount)
    }, [])

    useEffect(() => {
        if (typeof handleCount === 'function') {
            handleCount(count)
        }
    }, [count])

    return (
        <div className="bg-white flex items-center justify-between">
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px">
                        <span 
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 select-none"
                            onClick={() => handleSetCount(2)}
                        >
                            <span className="sr-only">Minus</span>

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                            </svg>
                        </span>
                        <span 
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 select-none"
                        >
                            {count}
                        </span>
                        <span 
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 select-none"
                            onClick={() => handleSetCount(1)}
                        >
                            <span className="sr-only">Plus</span>

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </span>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Counter;