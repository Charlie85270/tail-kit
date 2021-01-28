import React from 'react';

const TailkitHome = () => {
    return (
        <div className="relative bg-white overflow-hidden h-screen">
            <div className="max-w-7xl mx-auto h-full">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
                    <div className="relative bg-white z-40">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <div className=" flex justify-between items-center  border-gray-100 py-6  md:space-x-10">
                                <div className="flex justify-start items-center gap-12">
                                    <a className="flex items-center" href="/">
                                        <img className="h-12 w-auto sm:h-12" src="/icons/rocket.svg" alt="site" />
                                        <span className="text-indigo-600 ml-2 text-2xl font-bold">Tail-Kit</span>
                                    </a>
                                    <nav className="hidden md:flex space-x-10">
                                        <div className="relative">
                                            <button
                                                type="button"
                                                className="group bg-white rounded-md text-gray-800 inline-flex items-center text-base font-normal hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-xl"
                                            >
                                                <span>Components</span>
                                                <svg
                                                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">Open menu</span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 h-full">
                        <div className="flex flex-col md:flex-row w-full items-start justify-between md:justify-start h-full md:h-1/2">
                            <div className="text-left z-20 md:z-30 w-full md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center h-full">
                                <h1 className="tracking-tight font-extrabold text-gray-900 titleHome text-6xl ">
                                    <span className="flex w-full m-auto text-indigo-600"> Tail-kit</span>
                                    <span className="block font-bold xl:inline">
                                        <span className="absolute">Components</span> <br />
                                        for Tailwind CSS 2.0
                                    </span>
                                </h1>
                                <h2 className="mt-3  text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Tail-kit gives you access to over
                                    <span className="text-gray-700 font-bold">200</span>
                                    fully coded and responsive components and templates, based on Tailwind CSS 2.0.
                                    It&#x27;s all free and open-source.
                                </h2>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start w-full">
                                    <div className="rounded-md shadow">
                                        <a
                                            className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2"
                                            href="/started"
                                        >
                                            Get started
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://github.com/Charlie85270/tail-kit"
                                            className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="ml-2"
                                                viewBox="0 0 1792 1792"
                                            >
                                                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                            </svg>
                                            <span className="ml-2">Github</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    Need specific or new component ?
                                    <span className="underline cursor-pointer">Make a request</span>
                                </div>
                            </div>
                            <div className="opacity-10 z-10 md:z-50 md:opacity-70 sm:text-center absolute lg:text-left transform  w-full -right-10 -top-72  md:w-1/2">
                                <div className="flex gap-4 gap-y-1">
                                    <div className="col-1">
                                        <div className="mb-4">
                                            <div className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  m-auto">
                                                <img alt="eggs" src="/images/car/1.jpg" className="rounded-t-lg" />
                                                <div className="bg-white w-full p-4 relative">
                                                    <button
                                                        aria-label="Go to article"
                                                        type="button"
                                                        className="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6"
                                                    >
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                            className="h-6 w-6 text-white mx-auto"
                                                            viewBox="0 0 1792 1792"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                                        </svg>
                                                    </button>
                                                    <p className="text-gray-800 text-xl font-medium mb-2">Natural</p>
                                                    <p className="text-gray-600 text-xs">
                                                        Dare to take the lead and never let yourself be overtaken by
                                                        events.
                                                    </p>
                                                    <div className="flex flex-wrap justify-starts items-center mt-6">
                                                        <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                                            #car
                                                        </div>
                                                        <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                                            #auto
                                                        </div>
                                                        <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                                            #sport
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden">
                                                <img
                                                    alt="moto"
                                                    src="/images/object/1.png"
                                                    className="absolute -right-16 -bottom-16 h-40 w-40 mb-4"
                                                />
                                                <div className="w-4/6">
                                                    <p className="text-gray-800 text-lg font-medium mb-2">Avg</p>
                                                    <p className="text-gray-400 text-xs">
                                                        Detail is not an obsession, it is the very essence of
                                                        perfection.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
                                                <div className="w-full h-full text-center">
                                                    <div className="flex h-full flex-col justify-between">
                                                        <svg
                                                            width="40"
                                                            height="40"
                                                            className="mt-4 w-12 h-12 m-auto text-indigo-500"
                                                            fill="currentColor"
                                                            viewBox="0 0 1792 1792"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
                                                        </svg>
                                                        <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                                                            Remove card
                                                        </p>
                                                        <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                                                            Are you sure you want to delete this card ?
                                                        </p>
                                                        <div className="flex items-center justify-between gap-4 w-full mt-8">
                                                            <button
                                                                type="button"
                                                                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                            >
                                                                cancel
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="flex flex-wrap items-center justify-center">
                                                <div className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-yellow-500 rounded-lg max-w-xs shadow-lg">
                                                    <svg
                                                        className="absolute bottom-0 left-0 mb-8"
                                                        viewBox="0 0 375 283"
                                                        fill="none"
                                                    >
                                                        <rect
                                                            x="159.52"
                                                            y="175"
                                                            width="152"
                                                            height="152"
                                                            rx="8"
                                                            transform="rotate(-45 159.52 175)"
                                                            fill="#f3c06b"
                                                        ></rect>
                                                        <rect
                                                            y="107.48"
                                                            width="152"
                                                            height="152"
                                                            rx="8"
                                                            transform="rotate(-45 0 107.48)"
                                                            fill="#f3c06b"
                                                        ></rect>
                                                    </svg>
                                                    <div className="relative pt-10 px-10 flex items-center justify-center">
                                                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                                                        <img
                                                            className="relative w-40"
                                                            src="/images/object/5.png"
                                                            alt="shopping"
                                                        />
                                                    </div>
                                                    <div className="relative text-white px-6 pb-6 mt-6">
                                                        <span className="block opacity-75 -mb-1">Indoor</span>
                                                        <div className="flex justify-between">
                                                            <span className="block font-semibold text-xl">
                                                                Peace Lily
                                                            </span>
                                                            <span className="bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                                                $36.00
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
                                                <p className="text-black dark:text-white text-3xl font-bold">
                                                    Essential
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
                                                    For the basics
                                                </p>
                                                <p className="text-black dark:text-white  text-3xl font-bold">$99</p>
                                                <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
                                                    Per agent per month
                                                </p>
                                                <button
                                                    type="button"
                                                    className="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
                                                >
                                                    Request demo
                                                </button>
                                                <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
                                                    <li className="mb-3 flex items-center">
                                                        <svg
                                                            className="mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        All illimited link
                                                    </li>
                                                    <li className="mb-3 flex items-center">
                                                        <svg
                                                            className="mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Own analitycs plateform link
                                                    </li>
                                                    <li className="mb-3 flex items-center">
                                                        <svg
                                                            className="mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        24/24 support link
                                                    </li>
                                                </ul>
                                                <span className="w-56 block bg-gray-100 h-1 rounded-lg my-2"></span>
                                                <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
                                                    <li className="mb-3 flex items-center space-x-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="#10b981"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                                                        </svg>
                                                        <div>
                                                            All illimited link
                                                            <a href="#" className="text-red-500 font-semibold">
                                                                free plan
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3 flex items-center space-x-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="#10b981"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                                                        </svg>
                                                        <div>Best ranking</div>
                                                    </li>
                                                    <li className="mb-3 flex items-center space-x-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="#10b981"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                                                        </svg>
                                                        <div>Chocolate and meel</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="mb-4 flex gap-4">
                                            <button
                                                type="button"
                                                className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                            >
                                                Annuler
                                            </button>
                                            <button
                                                type="button"
                                                className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                            >
                                                Confirmer
                                            </button>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800">
                                                <img
                                                    alt="profil"
                                                    src="/images/landscape/1.jpg"
                                                    className="rounded-t-lg h-28 w-full mb-4"
                                                />
                                                <div className="flex flex-col items-center justify-center p-4 -mt-16">
                                                    <a href="#" className="block relative">
                                                        <img
                                                            alt="profil"
                                                            src="/images/person/1.jpg"
                                                            className="mx-auto rounded-full h-16 w-16 "
                                                        />
                                                    </a>
                                                    <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                                                        Charlie
                                                    </p>
                                                    <p className="text-gray-400 text-xs flex items-center">
                                                        <svg
                                                            width="10"
                                                            height="10"
                                                            fill="currentColor"
                                                            className="h-4 w-4 mr-2"
                                                            viewBox="0 0 1792 1792"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                                        </svg>
                                                        Nantes
                                                    </p>
                                                    <p className="text-gray-400 text-xs">FullStack dev</p>
                                                    <div className="flex items-center justify-between gap-4 w-full mt-8">
                                                        <button
                                                            type="button"
                                                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                        >
                                                            See profile
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl w-64 p-4 bg-white flex justify-between items-center">
                                                <div className="w-2/6">
                                                    <img
                                                        src="/images/person/2.jpeg"
                                                        alt="person"
                                                        className="h-12 w-12 rounded-full"
                                                    />
                                                </div>
                                                <div className="w-3/6">
                                                    <p className="text-gray-500 text-sm">
                                                        You have
                                                        <span className="text-indigo-500 font-bold">2</span>
                                                        new messages
                                                    </p>
                                                </div>
                                                <div className="w-1/6 text-right">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        viewBox="0 0 1792 1792"
                                                        className="text-indigo-500 h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl p-4 bg-gray-900 w-64 m-auto relative">
                                                <div className="w-full h-full text-center">
                                                    <div className="flex h-full flex-col justify-between">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="40"
                                                            height="40"
                                                            fill="currentColor"
                                                            className="mt-4 w-20 h-20 m-auto text-white dark:text-white"
                                                            viewBox="0 0 2048 1792"
                                                        >
                                                            <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z"></path>
                                                        </svg>
                                                        <p className="absolute text-sm italic text-white top-2 right-2">
                                                            by express
                                                        </p>
                                                        <p className="text-white text-lg mt-4">Package delivered</p>
                                                        <p className="text-gray-50 text-xs font-thin py-2 px-6">
                                                            Your package was delivered in 1 day and 4 hours by our
                                                            postal partner
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="w-64">
                                                <div className="mt-1 relative">
                                                    <button
                                                        type="button"
                                                        className="relative w-full bg-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <span className="flex items-center">
                                                            <img
                                                                src="/images/person/2.jpeg"
                                                                alt="person"
                                                                className="flex-shrink-0 h-6 w-6 rounded-full"
                                                            />
                                                            <span className="ml-3 block truncate">John Jackson</span>
                                                        </span>
                                                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                            <svg
                                                                className="h-5 w-5 text-gray-400"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
                                                <p className="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                                                    Entreprise
                                                </p>
                                                <p className="text-gray-900 dark:text-white text-3xl font-bold">
                                                    $199
                                                    <span className="text-gray-300 text-sm">/ month</span>
                                                </p>
                                                <p className="text-gray-600 dark:text-gray-100  text-xs mt-4">
                                                    For most businesses that want to optimize web queries.
                                                </p>
                                                <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="#10b981"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        All illimited link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="#10b981"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Own analitycs plateform link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="#10b981"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        24/24 support link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="#10b981"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Unlimited user
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="#10b981"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Best ranking
                                                    </li>
                                                    <li className="mb-3 flex items-center opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            className="h-6 w-6 mr-2"
                                                            fill="red"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Prenium svg
                                                    </li>
                                                    <li className="mb-3 flex items-center opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            className="h-6 w-6 mr-2"
                                                            fill="red"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        My wife
                                                    </li>
                                                </ul>
                                                <button
                                                    type="button"
                                                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                >
                                                    Choose plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl w-64 bg-indigo-500 dark:bg-gray-800 p-4">
                                                <div className="flex text-white  items-center justify-between">
                                                    <p className="text-4xl font-medium mb-4">Pro</p>
                                                    <p className="text-3xl font-bold flex flex-col">
                                                        $99
                                                        <span className="font-thin text-right text-sm">month</span>
                                                    </p>
                                                </div>
                                                <p className="text-white text-md mt-4">Plan include :</p>
                                                <ul className="text-sm text-white w-full mt-6 mb-6">
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        All illimited link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Own analitycs plateform link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        24/24 support link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Unlimited user
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Best ranking
                                                    </li>
                                                    <li className="mb-3 flex items-center opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            className="h-6 w-6 mr-2"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Prenium svg
                                                    </li>
                                                    <li className="mb-3 flex items-center opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            className="h-6 w-6 mr-2"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        My wife
                                                    </li>
                                                </ul>
                                                <button
                                                    type="button"
                                                    className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 "
                                                >
                                                    Choose plan
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
                                                <div className="flex items-center">
                                                    <span className="bg-green-500 p-2 h-4 w-4 rounded-full relative">
                                                        <svg
                                                            width="20"
                                                            fill="currentColor"
                                                            height="20"
                                                            className="text-white h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                            viewBox="0 0 1792 1792"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                                        </svg>
                                                    </span>
                                                    <p className="text-md text-gray-700 dark:text-gray-50 ml-2">
                                                        Sales
                                                    </p>
                                                </div>
                                                <div className="flex flex-col justify-start">
                                                    <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
                                                        36K
                                                    </p>
                                                    <div className="relative w-28 h-2 bg-gray-200 rounded">
                                                        <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-2/3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50">
                                                <div className="w-full pt-1 text-center -mt-16 mx-auto">
                                                    <a href="#" className="block relative">
                                                        <img
                                                            alt="profil"
                                                            src="/images/person/1.jpg"
                                                            className="mx-auto rounded-full h-20 w-20 "
                                                        />
                                                    </a>
                                                </div>
                                                <div className="w-full">
                                                    <div className="text-center mb-6">
                                                        <p className="text-gray-800 dark:text-white text-xl font-medium">
                                                            John Jackson
                                                        </p>
                                                        <p className="text-gray-400 text-xs">FullStack dev</p>
                                                    </div>
                                                    <div className="rounded-lg bg-pink-100 dark:bg-white p-2 w-full mb-4">
                                                        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                                                            <p className="flex flex-col">
                                                                Art.
                                                                <span className="text-black dark:text-indigo-500 font-bold">
                                                                    34
                                                                </span>
                                                            </p>
                                                            <p className="flex flex-col">
                                                                Foll.
                                                                <span className="text-black dark:text-indigo-500 font-bold">
                                                                    455
                                                                </span>
                                                            </p>
                                                            <p className="flex flex-col">
                                                                Rat.
                                                                <span className="text-black dark:text-indigo-500 font-bold">
                                                                    9.3
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="w-72 bg-white rounded-lg shadow-md p-6">
                                                <div className="w-16 mx-auto relative -mt-10 mb-3">
                                                    <img className="-mt-1" src="/icons/cookie.svg" alt="cookie" />
                                                </div>
                                                <span className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">
                                                    We care about your data, and we&#x27;d love to use cookies to make
                                                    your experience better.
                                                </span>
                                                <div className="flex items-center justify-between">
                                                    <a
                                                        className="text-xs text-gray-400 mr-1 hover:text-gray-800"
                                                        href="#"
                                                    >
                                                        Privacy Policy
                                                    </a>
                                                    <div className="w-1/2">
                                                        <button
                                                            type="button"
                                                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                        >
                                                            See more
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="shadow-lg rounded-2xl w-64 bg-indigo-500 dark:bg-gray-800 p-4">
                                                <div className="flex text-white  items-center justify-between">
                                                    <p className="text-4xl font-medium mb-4">Pro</p>
                                                    <p className="text-3xl font-bold flex flex-col">
                                                        $99
                                                        <span className="font-thin text-right text-sm">month</span>
                                                    </p>
                                                </div>
                                                <p className="text-white text-md mt-4">Plan include :</p>
                                                <ul className="text-sm text-white w-full mt-6 mb-6">
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        All illimited link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Own analitycs plateform link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        24/24 support link
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Unlimited user
                                                    </li>
                                                    <li className="mb-3 flex items-center ">
                                                        <svg
                                                            className="h-6 w-6 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            stroke="currentColor"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Best ranking
                                                    </li>
                                                    <li className="mb-3 flex items-center opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            className="h-6 w-6 mr-2"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        Prenium svg
                                                    </li>
                                                    <li className="mb-3 flex items-center opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="6"
                                                            height="6"
                                                            className="h-6 w-6 mr-2"
                                                            fill="white"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                                        </svg>
                                                        My wife
                                                    </li>
                                                </ul>
                                                <button
                                                    type="button"
                                                    className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 "
                                                >
                                                    Choose plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
export default TailkitHome;
