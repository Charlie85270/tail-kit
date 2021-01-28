import React from 'react';

const ActivityCard = () => {
    return (
        <div className="shadow-lg rounded-xl w-full md:w-80 p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
            <div className="w-full flex items-center justify-between mb-8">
                <p className="text-gray-800 dark:text-white text-xl font-normal">Activity</p>
                <a
                    href="#"
                    className="flex items-center text-sm hover:text-gray-600 dark:text-gray-50 dark:hover:text-white text-gray-300 border-0 focus:outline-none"
                >
                    VIEW ALL
                </a>
            </div>
            <div className="flex items-start mb-6 rounded justify-between">
                <span className="rounded-full text-white dark:text-gray-800 p-2 bg-yellow-300">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z" />
                    </svg>
                </span>

                <div className="flex items-center w-full justify-between">
                    <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                        <p className="text-gray-700 dark:text-white">
                            <span className="font-bold mr-1">Andrea &nbsp;</span> uploaded 3 documents on concept deisgn
                            home page
                        </p>
                        <p className="text-gray-300">Aug 10</p>
                    </div>
                </div>
            </div>
            <div className="flex items-start mb-6 rounded justify-between">
                <span className="rounded-full text-white dark:text-gray-800 p-2 bg-green-400">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
                    </svg>
                </span>

                <div className="flex items-center w-full justify-between">
                    <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                        <p className="text-gray-700 dark:text-white">
                            <span className="font-bold mr-1">Karen &nbsp;</span> leave some comments on concept deisgn
                            support page
                        </p>
                        <p className="text-gray-300">Aug 10</p>
                    </div>
                </div>
            </div>
            <div className="flex items-start mb-6 rounded justify-between">
                <span className="rounded-full text-white dark:text-gray-800 p-2 bg-indigo-400">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
                    </svg>
                </span>

                <div className="flex items-center w-full justify-between">
                    <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                        <p className="text-gray-700 dark:text-white">
                            <span className="font-bold mr-1">Karen &nbsp;</span> change project description to
                            "SubMarine protection project"
                        </p>
                        <p className="text-gray-300">Aug 09</p>
                    </div>
                </div>
            </div>
            <div className="flex items-start rounded justify-between">
                <span className="rounded-full text-white dark:text-gray-800 p-2 bg-yellow-300">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z" />
                    </svg>
                </span>

                <div className="flex items-center w-full justify-between">
                    <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                        <p className="text-gray-700 dark:text-white">
                            <span className="font-bold mr-1">John &nbsp;</span> uploaded 17 pictures on concept deisgn
                            galery page
                        </p>
                        <p className="text-gray-300">Aug 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ActivityCard;
