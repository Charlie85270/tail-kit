import React, { FC } from 'react';
import { prices } from './PricingCard';

const PricingCard2: FC = () => {
    return (
        <div className="w-64 p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="flex items-center justify-between text-white">
                <p className="mb-4 text-4xl font-medium">Pro</p>
                <p className="flex flex-col text-3xl font-bold">
                    $99
                    <span className="text-sm font-thin text-right">month</span>
                </p>
            </div>

            <p className="mt-4 text-white text-md">Plan include :</p>

            <ul className="w-full mt-6 mb-6 text-sm text-white">
                {prices.map((price) => {
                    return (
                        <li key={price.label} className={`mb-3 flex items-center ${price.include ? '' : 'opacity-50'}`}>
                            {price.include ? (
                                <svg
                                    className="w-6 h-6 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="6"
                                    height="6"
                                    stroke="currentColor"
                                    fill="white"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="6"
                                    height="6"
                                    className="w-6 h-6 mr-2"
                                    fill="white"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                </svg>
                            )}

                            {price.label}
                        </li>
                    );
                })}
            </ul>

            <button
                type="button"
                className="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
            >
                Choose plan
            </button>
        </div>
    );
};
export default PricingCard2;
