import React, { FC } from 'react';
const SimpleLoadingButton: FC = () => {
    return (
        <button
            type="button"
            className="w-full shadow-lg flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
            <i className="fas fa-spinner animate-spin mr-2"></i>
            Loading
        </button>
    );
};
export default SimpleLoadingButton;
