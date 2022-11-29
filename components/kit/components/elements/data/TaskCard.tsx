import React, { FC } from 'react';
import MultipleAvatar from '../avatars/MultipleAvatar';

const TaskCard: FC = () => {
    return (
        <div className="relative max-w-xs p-4 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
            <a href="#" className="block w-full h-full">
                <div className="w-full">
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        Improve css design of the carousel
                    </p>
                    <p className="mb-2 text-xs font-medium text-gray-400 dark:text-gray-300">Sunday 13 october</p>
                    <p className="mb-4 text-sm text-gray-400 dark:text-gray-300">
                        You’ve been coding for a while now and know your way around a CSS file. You’re certainly no
                        master, but with enough fiddling you can get where you want to go.
                    </p>
                    <div className="flex items-center justify-between dark:text-gray-200">
                        <p>Task progress</p>
                        <p>33%</p>
                    </div>
                    <div className="w-full h-2 mt-3 mb-6 bg-gray-400 rounded-full">
                        <div className={`w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full`}></div>
                    </div>
                    <div className="flex items-center">
                        <MultipleAvatar size="small" />
                        <span className="ml-2 text-gray-500 dark:text-gray-300">+ 4 more</span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default TaskCard;
