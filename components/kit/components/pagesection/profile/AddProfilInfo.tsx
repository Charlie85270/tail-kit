import React, { FC } from 'react';

const AddProfilInfo: FC = () => {
    return (
        <div className="p-4 bg-white shadow-lg rounded-2xl w-80 dark:bg-gray-800">
            <div className="flex flex-row items-start gap-4">
                <img src="/images/person/1.jpg" className="rounded-lg w-28 h-28" />

                <div className="flex flex-col justify-between w-full h-28">
                    <div>
                        <p className="text-xl font-medium text-gray-800 dark:text-white">John Jackson</p>
                        <p className="text-xs text-gray-400">FullStack dev</p>
                    </div>

                    <div className="w-full p-2 bg-blue-100 rounded-lg dark:bg-white">
                        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                            <p className="flex flex-col">
                                Articles
                                <span className="font-bold text-black dark:text-indigo-500">34</span>
                            </p>
                            <p className="flex flex-col">
                                Followers
                                <span className="font-bold text-black dark:text-indigo-500">455</span>
                            </p>
                            <p className="flex flex-col">
                                Rating
                                <span className="font-bold text-black dark:text-indigo-500">9.3</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-6">
                <button
                    type="button"
                    className="w-1/2 px-4 py-2 text-base bg-white border rounded-lg text-grey-500 hover:bg-gray-200 "
                >
                    Chat
                </button>
                <button
                    type="button"
                    className="w-1/2 px-4 py-2 text-base text-white bg-indigo-500 border rounded-lg hover:bg-indigo-700 "
                >
                    Add friend
                </button>
            </div>
        </div>
    );
};
export default AddProfilInfo;
