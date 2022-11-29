import React from 'react';

const NextJSCta = () => {
    return (
        <div className="relative z-20 flex items-center bg-white dark:bg-gray-800">
            <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
                <div className="flex flex-col">
                    <h1 className="w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl dark:text-white">
                        The React Framework for Production
                    </h1>
                    <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-500 dark:text-white">
                        Next.js gives you the best developer experience with all the features you need for production:
                        hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and
                        more. No config needed.
                    </h2>
                    <div className="flex items-center justify-center mt-4">
                        <a
                            href="#"
                            className="px-4 py-2 mr-4 text-white uppercase bg-gray-800 border-2 border-transparent text-md hover:bg-gray-900"
                        >
                            Get started
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                        >
                            Documentation
                        </a>
                    </div>
                </div>
                <div className="relative block w-full mx-auto mt-6 md:mt-0">
                    <img src="/images/object/12.svg" className="max-w-xs m-auto md:max-w-2xl" />
                </div>
            </div>
        </div>
    );
};

export default NextJSCta;
