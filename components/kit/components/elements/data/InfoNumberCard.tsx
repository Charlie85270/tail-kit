import React, { FC } from 'react';
const InfoNumberCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
            <div className="flex items-center">
                <span className="bg-green-500 p-2 h-4 w-4 rounded-full relative">
                    <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        className="text-white h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                    </svg>
                </span>
                <p className="text-md text-gray-700 dark:text-gray-50 ml-2">Sales</p>
            </div>
            <div className="flex flex-col justify-start">
                <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">36K</p>
                <div className="relative w-28 h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-2/3"></div>
                </div>
            </div>
        </div>
    );
};
export default InfoNumberCard;
