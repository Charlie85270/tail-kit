import React, { FC } from 'react';
const TextButton: FC = () => {
    return (
        <button
            type="button"
            className="w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
        >
            Validate
        </button>
    );
};
export default TextButton;
