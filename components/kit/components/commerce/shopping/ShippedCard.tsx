import React, { FC } from 'react';
const ShippedCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 m-auto relative">
            <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="mt-4 w-20 h-20 m-auto text-gray-800 dark:text-white"
                        viewBox="0 0 2048 1792"
                    >
                        <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z" />
                    </svg>
                    <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">by express</p>
                    <p className="text-gray-900 dark:text-white text-lg mt-4">Package delivered</p>
                    <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6">
                        Your package was delivered in 1 day and 4 hours by our postal partner
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ShippedCard;
