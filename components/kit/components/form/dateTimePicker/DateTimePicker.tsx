import React from 'react';

export const DateTimePicker = () => {
    return (
        <label className="text-gray-700" htmlFor="datetime">
            <input
                className="border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1 dark:bg-gray-800 dark:text-white dark:border-none"
                type="datetime-local"
            />
        </label>
    );
};
