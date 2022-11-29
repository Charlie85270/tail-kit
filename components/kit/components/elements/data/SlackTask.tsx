import React, { FC } from 'react';
import MultipleAvatar from '../avatars/MultipleAvatar';
const SlackTask: FC = () => {
    return (
        <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <span className="relative p-2 bg-blue-100 rounded-xl">
                        <svg width="25" height="25" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                            <g clipRule="evenodd" fillRule="evenodd">
                                <path
                                    d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                                    fill="#36c5f0"
                                />
                                <path
                                    d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                                    fill="#2eb67d"
                                />
                                <path
                                    d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                                    fill="#ecb22e"
                                />
                                <path
                                    d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                                    fill="#e01e5a"
                                />
                            </g>
                        </svg>
                    </span>
                    <div className="flex flex-col">
                        <span className="ml-2 font-bold text-black text-md dark:text-white">Slack</span>
                        <span className="ml-2 text-sm text-gray-500 dark:text-white">Slack corporation</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="p-1 border border-gray-200 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            className="w-4 h-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                        </svg>
                    </button>
                    <button className="text-gray-200">
                        <svg
                            width="25"
                            height="25"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4 space-x-12">
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">
                    COMPLETED
                </span>
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
                    MEDIUM PRIORITY
                </span>
            </div>

            <div className="block m-auto">
                <div>
                    <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                        Task done : <span className="font-bold text-gray-700 dark:text-white">50 </span> /50
                    </span>
                </div>
                <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                    <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full"></div>
                </div>
            </div>

            <div className="flex items-center justify-start my-4 space-x-4">
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                    IOS APP
                </span>
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-200 rounded-md">
                    ANDROID
                </span>
            </div>

            <MultipleAvatar size="small" />

            <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                DUE DATE : 18 JUN
            </span>
        </div>
    );
};
export default SlackTask;
