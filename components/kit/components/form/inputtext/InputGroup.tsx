import React from 'react';

const InputGroup = () => {
    return (
        <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                    placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>
                    <select
                        id="Currency"
                        name="currency"
                        className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md"
                    >
                        <option>USD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default InputGroup;
