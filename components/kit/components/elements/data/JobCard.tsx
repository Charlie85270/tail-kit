import React from 'react';
import Avatar from '../avatars/Avatar';
import Badge from '../badges/Badge';
import Button from '../buttons/Button';

const JobCard = () => {
    return (
        <div className="shadow-lg rounded-xl w-full max-w-xs p-6 bg-white dark:bg-gray-800 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center justify-start w-full flex-grow">
                    <Avatar size="small" />
                    <div className="flex flex-col items-start ml-4">
                        <span className="dark:text-white text-gray-700">Charlie Rabiller</span>
                        <span className="text-gray-400 font-light text-sm dark:text-gray-300">Updated 3 min ago</span>
                    </div>
                </div>
                <div className="flex-none hidden md:block ">
                    <span className="w-full px-3 py-1 text-sm rounded-full text-white bg-blue-500">Design</span>
                </div>
            </div>
            <p className="text-gray-800 dark:text-white text-lg mt-4 mb-2">
                Need a designer to form branding for my business.
            </p>
            <p className="text-gray-400 font-normal text-sm">
                Looking for a talented brand designer to create all the branding materials for my new startup. This
                should be a long term project and my hope I hight on the person whom I would like to hire.
            </p>
            <div className="flex items-center rounded justify-between p-2 bg-blue-100 my-6">
                <div className="flex items-start w-full justify-between">
                    <p className="flex-grow w-full text-2xl text-gray-700">
                        <span className="text-gray-400 font-light text-md">$</span> 4,500
                        <span className="text-sm font-light text-gray-400">/Month</span>
                    </p>
                    <span className="px-3 py-1 flex-none text-sm rounded-full text-indigo-500 border border-indigo-500">
                        Full time
                    </span>
                </div>
            </div>
            <Button label="Apply for this Job" color="blue" />
        </div>
    );
};
export default JobCard;
