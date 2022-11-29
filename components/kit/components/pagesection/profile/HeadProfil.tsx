import React from 'react';
import Avatar from '../../elements/avatars/Avatar';
import Button from '../../elements/buttons/Button';

const HeadProfil = () => {
    return (
        <div className="w-full max-w-xl px-5 py-4 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
            <div className="w-full pt-1 mx-auto -mt-16 text-center">
                <Avatar size="big" />
            </div>
            <div className="w-full">
                <div className="mb-6 text-center">
                    <p className="text-xl font-medium text-gray-800 dark:text-white">John Jackson</p>
                    <p className="text-xs text-gray-400">FullStack dev</p>
                </div>

                <div className="w-full p-2 mb-4 bg-pink-100 rounded-lg dark:bg-white">
                    <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                        <p className="flex flex-col">
                            Art.
                            <span className="font-bold text-black dark:text-indigo-500">34</span>
                        </p>
                        <p className="flex flex-col">
                            Foll.
                            <span className="font-bold text-black dark:text-indigo-500">455</span>
                        </p>
                        <p className="flex flex-col">
                            Rat.
                            <span className="font-bold text-black dark:text-indigo-500">9.3</span>
                        </p>
                    </div>
                </div>
                <Button label="Add" color="indigo" />
            </div>
        </div>
    );
};

export default HeadProfil;
