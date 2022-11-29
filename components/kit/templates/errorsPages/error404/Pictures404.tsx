import React from 'react';

const Pictures404 = () => {
    return (
        <main className="relative h-screen overflow-hidden bg-white">
            <header className="absolute top-0 left-0 right-0 z-20">
                <nav className="container px-6 py-4 mx-auto md:px-12">
                    <div className="items-center justify-between md:flex">
                        <div className="flex items-center justify-between">
                            <div className="md:hidden">
                                <button className="text-gray-800 focus:outline-none">
                                    <svg
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 6H20M4 12H20M4 18H20"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="hidden space-x-4 md:flex md:items-center md:justify-end">
                            <a
                                href="#"
                                className="px-3 py-2 text-gray-400 uppercase transition duration-200 ease-in hover:text-gray-700 focus:outline-none"
                            >
                                Shop
                            </a>
                            <a
                                href="#"
                                className="px-3 py-2 text-gray-400 uppercase transition duration-200 ease-in hover:text-gray-700 focus:outline-none"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container z-10 flex items-center justify-between h-screen px-6 pt-32 mx-auto md:pt-0">
                <div className="container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row">
                    <div className="w-full mb-16 text-center md:mb-8 lg:text-left">
                        <h1 className="mt-12 font-sans text-5xl font-light text-center text-gray-700 lg:text-left lg:text-8xl md:mt-0">
                            Sorry, this page isn't available
                        </h1>
                        <button className="px-2 py-2 mt-16 text-lg font-light transition duration-200 ease-in bg-yellow-300 border-2 border-gray-700 w-36 hover:bg-yellow-400 focus:outline-none">
                            Go back home
                        </button>
                    </div>

                    <div className="relative block w-full max-w-md mx-auto md:mt-0 lg:max-w-2xl">
                        <img src="/images/illustrations/1.svg" />
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Pictures404;
