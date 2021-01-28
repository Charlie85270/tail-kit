import React from 'react';

const FeaturesImage = () => {
    return (
        <div className="relative bg-white dark:bg-gray-800 p-4">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="lg:col-start-2 md:pl-20">
                    <h4 className="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
                        Manage everything
                    </h4>
                    <ul className="mt-10">
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="h-6 w-6"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                        One-look dashboard
                                    </h5>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                        Know everything about your business in a single glance with your new dashboard.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="h-6 w-6"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                        Orders, managed
                                    </h5>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                        All your orders in one place so you can manage your delivery, collection, asap
                                        and pre-orders in one place.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="h-6 w-6"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                        Email &amp; SMS Notifications
                                    </h5>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                        Never miss a new order with notifications via your dashboard, by sound, and to
                                        your email and phone.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
                    <img
                        src="/images/object/8.jpg"
                        alt="illustration"
                        className="relative mx-auto shadow-lg rounded w-auto"
                    />
                </div>
            </div>
        </div>
    );
};
export default FeaturesImage;
