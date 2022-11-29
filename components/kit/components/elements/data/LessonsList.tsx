import React, { FC } from 'react';

const LessonsList: FC = () => {
    return (
        <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-between p-4">
                <p className="font-bold text-black text-md dark:text-white">Google</p>
                <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                        <g fill="none">
                            <path
                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>

            <div className="flex items-center justify-between px-4 py-2 text-gray-600 bg-blue-100 border-l-4 border-blue-500 dark:bg-gray-800">
                <p className="flex items-center text-xs dark:text-white">
                    <svg width="20" height="20" fill="currentColor" className="mr-2 text-blue-500" viewBox="0 0 24 24">
                        <g fill="none">
                            <path
                                d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </svg>
                    Create wireframe
                </p>
                <div className="flex items-center">
                    <span className="ml-2 mr-2 text-xs font-bold dark:text-gray-200 md:ml-4">25 min 20s</span>
                    <button className="p-1 mr-4 text-sm text-gray-400 bg-blue-500 border rounded">
                        <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                            <g fill="none">
                                <path
                                    d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                                    fill="currentColor"
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between p-4 border-b-2 border-gray-100">
                <p className="font-bold text-black text-md dark:text-white">Slack</p>
                <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                        <g fill="none">
                            <path
                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                <p className="flex items-center text-xs dark:text-white">
                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                        <g fill="none">
                            <path
                                d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </svg>
                    International
                </p>
                <div className="flex items-center">
                    <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
                    <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                            <g fill="none">
                                <path
                                    d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                    fill="currentColor"
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                <p className="flex items-center text-xs dark:text-white">
                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                        <g fill="none">
                            <path
                                d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </svg>
                    Slack logo design
                </p>
                <div className="flex items-center">
                    <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
                    <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                            <g fill="none">
                                <path
                                    d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                    fill="currentColor"
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 text-gray-600">
                <p className="flex items-center text-xs dark:text-white">
                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                        <g fill="none">
                            <path
                                d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </svg>
                    Dahboard template
                </p>
                <div className="flex items-center">
                    <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
                    <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                            <g fill="none">
                                <path
                                    d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                    fill="currentColor"
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default LessonsList;
