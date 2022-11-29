import React, { FC } from 'react';

const MutlipleTask: FC = () => {
    return (
        <div className="relative p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 dark:bg-gray-800 dark:text-gray-100">
            <a href="#" className="block w-full h-full">
                <div className="w-full">
                    <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">Task Progress</p>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <p>Design</p>
                        <p>3/8</p>
                    </div>
                    <div className="w-full h-2 mb-4 bg-green-100 rounded-full">
                        <div className="w-1/3 h-full text-xs text-center text-white bg-green-400 rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <p>Development</p>
                        <p>6/10</p>
                    </div>
                    <div className="w-full h-2 mb-4 bg-indigo-100 rounded-full">
                        <div className="w-2/3 h-full text-xs text-center text-white bg-indigo-400 rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <p>DevOps</p>
                        <p>2/8</p>
                    </div>
                    <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
                        <div className="w-1/4 h-full text-xs text-center text-white bg-blue-400 rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <p>Marketing</p>
                        <p>8/8</p>
                    </div>
                    <div className="w-full h-2 bg-pink-100 rounded-full">
                        <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full"></div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default MutlipleTask;
