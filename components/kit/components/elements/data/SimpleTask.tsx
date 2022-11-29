import React, { FC } from 'react';
import Avatar from '../avatars/Avatar';

const SimpleTask: FC = () => {
    return (
        <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-72 dark:bg-gray-800">
            <a href="#" className="block w-full h-full">
                <div className="flex items-center w-full">
                    <Avatar size="small" />
                    <div className="flex flex-col items-center ml-2">
                        <span className="dark:text-white">Charlie Rabiller</span>
                        <span className="text-sm text-gray-400 dark:text-gray-300">Tailwind-kit.com</span>
                    </div>
                </div>
                <div className="flex items-center justify-between my-2">
                    <p className="text-sm text-gray-300">4/6 task completed</p>
                </div>
                <div className="w-full h-2 bg-blue-200 rounded-full">
                    <div className="w-2/3 h-full text-xs text-center text-white bg-blue-600 rounded-full"></div>
                </div>
            </a>
        </div>
    );
};

export default SimpleTask;
