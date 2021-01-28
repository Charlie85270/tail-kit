import React, { FC } from 'react';
import AppLayout from '../../components/layout/AppLayout';

const RequestPage: FC = () => {
    return (
        <AppLayout
            title="How to request a specific or new component"
            desc="You want a specific or new component that don't exist anymore ? Request it for free"
        >
            <div className="pb-10 border-b border-gray-200 mb-10" id="installation">
                <div className="flex items-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Request a component</h1>
                </div>

                <p className="mt-1 text-lg text-gray-500">
                    If you need a specific or new component that don't exist anymrore request it, it's free !
                </p>
                <ul className="space-y-12 mt-8">
                    <li className="flex items-start justify-start">
                        <span className="flex w-8 h-8 items-center justify-center text-md font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                            1
                        </span>

                        <div className="px-4">
                            <h3 className="text-xl font-semibold dark:text-white">Open a issue on the repo </h3>
                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                Open a issue on the repo and tag it with the "enhancement" label
                                <img src="/request.png" className="w-64 shadow-lg rounded-lg my-2" alt="request icon" />
                            </p>

                            <a
                                href="https://github.com/Charlie85270/tail-kit/issues"
                                className="w-40 flex items-center justify-center px-4 py-1 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2"
                            >
                                Open a issue
                            </a>
                        </div>
                    </li>

                    <li className="flex items-start justify-start">
                        <span className="flex w-8 h-8 items-center justify-center text-md font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                            2
                        </span>

                        <div className="px-4">
                            <h3 className="text-xl font-semibold dark:text-white">
                                Share a screen, link or description about your component
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                Join a screen, description or link (dribble, figma, ...) in your issue about the wanted
                                component. More details you provide, more your component will correspond to your
                                request.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start justify-start">
                        <span className="flex w-8 h-8 items-center justify-center text-md font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                            3
                        </span>

                        <div className="px-4">
                            <h3 className="text-xl font-semibold dark:text-white">Wait a minute</h3>
                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                Wait for me or community developer take your request ! You will be informed on the issue
                                when your component will be available :)
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </AppLayout>
    );
};

export default RequestPage;
