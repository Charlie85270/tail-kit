import React from 'react';

const NotifyMeCta = () => {
    return (
        <div className="px-6 py-6 bg-purple-700 dark:bg-gray-800 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
                <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                    Receive alert about new commit or pull request on your github
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                    No account or email required. We use push notifications. You can choose between several modes and
                    define your own alert threshold.
                </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-500 hover:bg-purple-400 focus:outline-none focus:bg-purple-400 transition duration-150 ease-in-out">
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
