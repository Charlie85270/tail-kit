import React, { FC } from 'react';
const ClickableBadge: FC = () => {
    return (
        <button
            type="button"
            className="flex items-center w-full px-4 py-2 text-base text-red-600 bg-red-200 rounded-full hover:bg-red-300"
        >
            Starter
        </button>
    );
};
export default ClickableBadge;
