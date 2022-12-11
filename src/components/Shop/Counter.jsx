import React, { useState, useEffect } from 'react';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/solid'
import { product_limit } from 'Config'

const Counter = ({
    defaultCount = 1,
    handleCount,
    handleRemove,
}) => {
    const [count, setCount] = useState(1)

    // 1=plus, 2=minus, 不能小於 0
    const handleSetCount = (option) => {
        let newCount = 0
        if (option === 1) newCount = count + 1
        if (option === 2) newCount = count - 1
        if (newCount <= 0) {
            newCount = 1
            if (typeof handleRemove === 'function') handleRemove()
        }
        if (newCount > product_limit) newCount = product_limit
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
        <div className="bg-white flex items-center justify-between mr-2 mb-4">
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px">
                        <span
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 select-none"
                            onClick={() => handleSetCount(2)}
                        >
                            <span className="sr-only">Minus</span>

                            <MinusSmallIcon className="h-5 w-5" />
                        </span>
                        <input
                            className="w-14 text-center relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 select-none focus:outline-0"
                            value={count}
                            onChange={e => {
                                let count = e.target.value
                                if (count > product_limit) count = product_limit
                                if (count < 1) count = 1
                                setCount(count)
                            }}
                        />
                        <span
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 select-none"
                            onClick={() => handleSetCount(1)}
                        >
                            <span className="sr-only">Plus</span>

                            <PlusSmallIcon className="h-5 w-5" />
                        </span>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Counter;