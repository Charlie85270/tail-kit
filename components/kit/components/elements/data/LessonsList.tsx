import React, { FC } from 'react';

const LessonsList: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
            <div className="flex items-center p-4 justify-between">
                <p className="font-bold text-md text-black dark:text-white">Google</p>
                <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
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

            <div className="py-2 px-4 bg-blue-100 dark:bg-gray-800 text-gray-600 border-l-4 border-blue-500 flex items-center justify-between">
                <p className="text-xs flex items-center dark:text-white">
                    <svg width="20" height="20" fill="currentColor" className="text-blue-500 mr-2" viewBox="0 0 24 24">
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
                    <span className="font-bold text-xs dark:text-gray-200 mr-2 ml-2 md:ml-4">25 min 20s</span>
                    <button className="text-sm p-1 text-gray-400 border rounded bg-blue-500 mr-4">
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

            <div className="flex items-center p-4 justify-between border-b-2 border-gray-100">
                <p className="font-bold text-md text-black dark:text-white">Slack</p>
                <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
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
            <div className="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
                <p className="text-xs flex items-center dark:text-white">
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
                    <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">30 min</span>
                    <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
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
            <div className="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
                <p className="text-xs flex items-center dark:text-white">
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
                    <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">30 min</span>
                    <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
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
            <div className="py-2 px-4 text-gray-600 flex items-center justify-between">
                <p className="text-xs flex items-center dark:text-white">
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
                    <span className="text-xs text-gray-400 mr-2 ml-2 md:ml-4">30 min</span>
                    <button className="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
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
