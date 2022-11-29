import React, { FC } from 'react';

const PricingCard5: FC = () => {
    return (
        <section className="px-2 py-1 mb-4 bg-white border-2 border-t-8 border-purple-600 rounded w-72 dark:bg-gray-800">
            <section className="w-full">
                <header className="text-3xl text-center md:mt-5 dark:text-white">Recruiter</header>
                <header className="justify-center w-full mb-2 text-center md:flex">
                    <span className="text-6xl text-purple-600">50</span>
                    <span className="text-2xl dark:text-white">$</span>
                    <span className="text-6xl line-through dark:text-white">150</span>
                </header>

                <ul className="p-1 mt-5 text-gray-600 text-md dark:text-gray-200">
                    <li className="flex py-1 mb-1">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 font-bold text-indigo-800 dark:text-white"
                        >
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        &nbsp;Everything in Access
                    </li>
                    <li className="flex py-1 mb-1">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 font-bold text-indigo-800 dark:text-white"
                        >
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        &nbsp;100+ members
                    </li>
                    <li className="flex py-1 mb-1">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 font-bold text-indigo-800 dark:text-white"
                        >
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        &nbsp;All videos
                    </li>
                    <li className="flex py-1 mb-1">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 font-bold text-indigo-800 dark:text-white"
                        >
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        &nbsp;1 Job Post for 30 days
                    </li>
                </ul>
            </section>
        </section>
    );
};
export default PricingCard5;
