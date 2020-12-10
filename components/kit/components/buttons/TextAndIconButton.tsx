import React, { FC } from 'react';
const TextAndIconButton: FC = () => {
    return (
        <button
            type="button"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
        >
            <i className="fas text-gray-800 fa-upload mr-2" />
            Upload
        </button>
    );
};
export default TextAndIconButton;
