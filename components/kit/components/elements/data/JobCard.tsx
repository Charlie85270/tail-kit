import React from 'react';
import Avatar from '../avatars/Avatar';
import Badge from '../badges/Badge';
import Button from '../buttons/Button';

const JobCard = () => {
    return (
        <div className="w-full max-w-xs p-6 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex items-center justify-start flex-grow w-full">
                    <Avatar size="small" />
                    <div className="flex flex-col items-start ml-4">
                        <span className="text-gray-700 dark:text-white">Charlie Rabiller</span>
                        <span className="text-sm font-light text-gray-400 dark:text-gray-300">Updated 3 min ago</span>
                    </div>
                </div>
                <div className="flex-none hidden md:block ">
                    <span className="w-full px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Design</span>
                </div>
            </div>
            <p className="mt-4 mb-2 text-lg text-gray-800 dark:text-white">
                Need a designer to form branding for my business.
            </p>
            <p className="text-sm font-normal text-gray-400">
                Looking for a talented brand designer to create all the branding materials for my new startup. This
                should be a long term project and my hope I hight on the person whom I would like to hire.
            </p>
            <div className="flex items-center justify-between p-2 my-6 bg-blue-100 rounded">
                <div className="flex items-start justify-between w-full">
                    <p className="flex-grow w-full text-2xl text-gray-700">
                        <span className="font-light text-gray-400 text-md">$</span> 4,500
                        <span className="text-sm font-light text-gray-400">/Month</span>
                    </p>
                    <span className="flex-none px-3 py-1 text-sm text-indigo-500 border border-indigo-500 rounded-full">
                        Full time
                    </span>
                </div>
            </div>
            <Button label="Apply for this Job" color="blue" />
        </div>
    );
};
export default JobCard;
