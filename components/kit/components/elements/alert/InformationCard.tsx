import React, { FC } from 'react';
import Button from '../buttons/Button';
const InformationCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
            <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                    <svg
                        className="h-12 w-12 mt-4 m-auto text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-gray-600 dark:text-gray-100 text-md py-2 px-6">
                        User <span className="text-gray-800 dark:text-white font-bold">23722873 </span> has been deleted
                        form database.
                    </p>
                    <div className="flex items-center justify-between gap-4 w-full mt-8">
                        <Button color="indigo" label="Close" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InformationCard;
