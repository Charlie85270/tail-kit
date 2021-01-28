import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';
import { prices, notIncluded } from './PricingCard';

const PricingCard7: FC = () => {
    return (
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                        Zero Commission
                    </h3>
                    <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                        Start selling online for free with all the features you need to launch your local delivery and
                        pick-up service, nothing more. We don't charge commission or monthly fees, keep all your margin.
                    </p>
                    <div className="mt-8">
                        <div className="flex items-center">
                            <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                                What's included
                            </h4>
                            <div className="flex-1 border-t-2 border-gray-200"></div>
                        </div>
                        <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                            {prices.map((price) => {
                                return (
                                    <li className="flex items-start lg:col-span-1" key={price.label}>
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="h-6 w-6 mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="6"
                                                stroke="currentColor"
                                                fill="#10b981"
                                                viewBox="0 0 1792 1792"
                                            >
                                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                            {price.label}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="mt-8">
                        <div className="flex items-center">
                            <h4 className="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                                &amp; What's not
                            </h4>
                        </div>
                        <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                            {notIncluded.map((not) => {
                                return (
                                    <li className="flex items-start lg:col-span-1" key={not}>
                                        <div className="flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="6"
                                                className="h-6 w-6 mr-2"
                                                fill="red"
                                                viewBox="0 0 1792 1792"
                                            >
                                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">{not}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-bold text-gray-900 dark:text-white">Free</p>
                    <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
                        <span>$0/mo</span>
                    </div>
                    <p className="mt-4 text-sm leading-5">
                        <span className="block font-medium text-gray-500 dark:text-gray-400">Card payments:</span>
                        <span className=" inline-block font-medium text-gray-500 dark:text-gray-400">
                            2.9% + 20p per transaction
                        </span>
                    </p>
                    <div className="mt-6">
                        <div className="rounded-md shadow">
                            <Button label="Create your store" color="indigo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PricingCard7;
