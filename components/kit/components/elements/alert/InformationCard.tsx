import React, { FC } from 'react';
import Button from '../buttons/Button';
const InformationCard: FC = () => {
    return (
        <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="w-full h-full text-center">
                <div className="flex flex-col justify-between h-full">
                    <svg
                        className="w-12 h-12 m-auto mt-4 text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                        User <span className="font-bold text-gray-800 dark:text-white">23722873 </span> has been deleted
                        form database.
                    </p>
                    <div className="flex items-center justify-between w-full gap-4 mt-8">
                        <Button color="indigo" label="Close" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InformationCard;
