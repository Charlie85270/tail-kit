import React, { FC } from 'react';
const SimpleNotificationCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-64 p-4 bg-white flex justify-between items-center">
            <div className="w-2/6">
                <img src="/images/person/2.jpeg" alt="person" className="h-12 w-12 rounded-full" />
            </div>
            <div className="w-3/6">
                <p className="text-gray-500 text-sm">
                    You have
                    <span className="text-indigo-500 font-bold"> 2 </span>new messages
                </p>
            </div>
            <div className="w-1/6 text-right">
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    className="text-indigo-500 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
                </svg>
            </div>
        </div>
    );
};
export default SimpleNotificationCard;
