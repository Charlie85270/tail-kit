import React from 'react';
import Avatar from '../../elements/avatars/Avatar';
import Button from '../../elements/buttons/Button';

const HeadProfil = () => {
    return (
        <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50">
            <div className="w-full pt-1 text-center -mt-16 mx-auto">
                <Avatar size="big" />
            </div>
            <div className="w-full">
                <div className="text-center mb-6">
                    <p className="text-gray-800 dark:text-white text-xl font-medium">John Jackson</p>
                    <p className="text-gray-400 text-xs">FullStack dev</p>
                </div>

                <div className="rounded-lg bg-pink-100 dark:bg-white p-2 w-full mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                        <p className="flex flex-col">
                            Art.
                            <span className="text-black dark:text-indigo-500 font-bold">34</span>
                        </p>
                        <p className="flex flex-col">
                            Foll.
                            <span className="text-black dark:text-indigo-500 font-bold">455</span>
                        </p>
                        <p className="flex flex-col">
                            Rat.
                            <span className="text-black dark:text-indigo-500 font-bold">9.3</span>
                        </p>
                    </div>
                </div>
                <Button label="Add" color="indigo" />
            </div>
        </div>
    );
};

export default HeadProfil;
