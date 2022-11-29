import React from 'react';

const NotifyMeCta = () => {
    return (
        <div className="px-6 py-6 bg-purple-700 rounded-lg dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
                <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
                    Receive alert about new commit or pull request on your github
                </h2>
                <p className="max-w-3xl mt-3 text-lg leading-6 text-indigo-200">
                    No account or email required. We use push notifications. You can choose between several modes and
                    define your own alert threshold.
                </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400">
                        Notify me
                    </button>
                </div>
                <p className="mt-3 text-sm leading-5 text-indigo-200">
                    We care about the protection of your data. Your data is safe and never used for commercial purposes.
                </p>
                <p className="text-sm leading-5 text-indigo-200">
                    In order to receive the notifications, you must give permission sufficient to your web browser.
                </p>
            </div>
        </div>
    );
};

export default NotifyMeCta;
