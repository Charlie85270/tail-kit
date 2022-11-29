import React from 'react';

const Natural3Home = () => {
    return (
        <div className="relative h-screen overflow-hidden bg-indigo-900">
            <img src="/images/landscape/7.svg" className="absolute object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <header className="absolute top-0 left-0 right-0 z-20">
                <nav className="container px-6 py-4 mx-auto md:px-12">
                    <div className="items-center justify-center md:flex">
                        <div className="flex items-center justify-between">
                            <div className="md:hidden">
                                <button className="text-white focus:outline-none">
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

                        <div className="items-center hidden md:flex">
                            <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Ticket
                            </a>
                            <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">Info</a>
                            <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
                <div className="relative z-10 flex flex-col items-center justify-between w-full">
                    <p className="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
                        Planet need you
                    </p>
                    <p className="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white">
                        The first European to set eyes on the great river was a Spanish explorer, called De Soto, who
                        came across the mouth of the river in 1541; yet it was not until over a century later that the
                        Mississippi river began to take a significant place in the history of North America.
                    </p>

                    <a
                        href="#"
                        className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900"
                    >
                        Plant a tree
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Natural3Home;
