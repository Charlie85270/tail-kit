import React, { FC } from 'react';

const AddProfilInfo: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-80 p-4 bg-white dark:bg-gray-800">
            <div className="flex flex-row items-start gap-4">
                <img src="/images/person/1.jpg" className="w-28 h-28 rounded-lg" />

                <div className="h-28 w-full flex flex-col justify-between">
                    <div>
                        <p className="text-gray-800 dark:text-white text-xl font-medium">John Jackson</p>
                        <p className="text-gray-400 text-xs">FullStack dev</p>
                    </div>

                    <div className="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                            <p className="flex flex-col">
                                Articles
                                <span className="text-black dark:text-indigo-500 font-bold">34</span>
                            </p>
                            <p className="flex flex-col">
                                Followers
                                <span className="text-black dark:text-indigo-500 font-bold">455</span>
                            </p>
                            <p className="flex flex-col">
                                Rating
                                <span className="text-black dark:text-indigo-500 font-bold">9.3</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-6">
                <button
                    type="button"
                    className="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 "
                >
                    Chat
                </button>
                <button
                    type="button"
                    className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 "
                >
                    Add friend
                </button>
            </div>
        </div>
    );
};
export default AddProfilInfo;
