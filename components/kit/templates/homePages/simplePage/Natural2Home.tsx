import React from 'react';

const Natural2Home = () => {
    return (
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <img src="/images/landscape/6.svg" className="absolute h-full w-full object-cover" />
            <div className="inset-0 bg-black opacity-25 absolute"></div>
            <header className="absolute top-0 left-0 right-0 z-20">
                <nav className="container mx-auto px-6 md:px-12 py-4">
                    <div className="md:flex justify-center items-center">
                        <div className="flex justify-between items-center">
                            <div className="md:hidden">
                                <button className="text-white focus:outline-none">
                                    <svg
                                        className="h-12 w-12"
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

                        <div className="hidden md:flex items-center">
                            <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                                Ticket
                            </a>
                            <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">Info</a>
                            <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
                        Life-changing
                    </h1>

                    <a
                        href="#"
                        className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10"
                    >
                        Start Now
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Natural2Home;
