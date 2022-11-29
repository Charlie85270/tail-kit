import React, { FC } from 'react';

const MultipleButton: FC = () => {
    return (
        <div className="flex items-center">
            <button
                type="button"
                className="w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100"
            >
                Left
            </button>
            <button
                type="button"
                className="w-full px-4 py-2 text-base font-medium text-black bg-white border hover:bg-gray-100"
            >
                Center
            </button>
            <button
                type="button"
                className="w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-r rounded-r-md hover:bg-gray-100"
            >
                Right
            </button>
        </div>
    );
};
export default MultipleButton;
