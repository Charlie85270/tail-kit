import React from 'react';

export const DatePicker = () => {
    return (
        <label className="text-gray-700" htmlFor="date">
            <input
                className="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1 dark:bg-gray-800 dark:text-white dark:border-none"
                type="date"
            />
        </label>
    );
};
