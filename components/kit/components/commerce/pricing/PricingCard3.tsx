import React, { FC } from 'react';

const includes = ['All illimited components Tailwind', 'Own analitycs templates', '24/24 support link'];
const bonus = ['All free dashboard', 'Best ranking', 'Chocolate and meel'];

const PricingCard3: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
            <p className="text-black dark:text-white text-3xl font-bold">Essential</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">For the basics tailwind</p>
            <p className="text-black dark:text-white  text-3xl font-bold">$99</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">Per agent per month</p>

            <button
                type="button"
                className="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
            >
                Request demo
            </button>

            <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
                {includes.map((price) => {
                    return (
                        <li key={price} className="mb-3 flex items-center">
                            <svg
                                className="mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 1792 1792"
                            >
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                            </svg>
                            {price}
                        </li>
                    );
                })}
            </ul>
            <span className="w-56 block bg-gray-100 h-1 rounded-lg my-2" />
            <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
                {bonus.map((bon, index) => {
                    return (
                        <li key={index} className="mb-3 flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                            >
                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
                            </svg>
                            <div>
                                {bon}
                                {index === 0 && (
                                    <a href="#" className="text-red-500 font-semibold">
                                        free plan
                                    </a>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default PricingCard3;
