import React, { useState } from 'react';
import Link from 'next/link';
import { menuEntry, menuTemplates } from '../../layout/AppLayout';
import DropD from '../DropDown/DropD';

interface Props {
    hideLinks?: boolean;
}

const AppHeader = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative bg-transparent dark:bg-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className={`flex justify-between items-center  border-gray-100 py-6  md:space-x-10`}>
                    <div className="flex justify-start items-center gap-12">
                        <Link href="/">
                            <a className="flex items-center">
                                <img className="h-8 w-auto sm:h-12" src="/icons/rocket.svg" alt="site" />
                            </a>
                        </Link>
                        <nav className="hidden md:flex space-x-10">
                            <DropD label="&#129513; Components" links={menuEntry} />
                            <DropD label="&#127912; Templates" links={menuTemplates} />
                        </nav>
                    </div>
                    {!props.hideLinks && (
                        <div className="flex item-center justify-end">
                            <Link href="/started">
                                <a className="flex items-center">
                                    <svg
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="mr-2 w-10 h-10 text-gray-400 hover:text-gray-200"
                                        viewBox="0 0 2048 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z" />
                                    </svg>
                                </a>
                            </Link>

                            <a
                                href="https://github.com/Charlie85270/tail-kit"
                                target="_blank"
                                rel="noreferrer"
                                className=""
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="mr-2 w-10 h-10 text-gray-400 hover:text-gray-200"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
                                </svg>
                            </a>
                        </div>
                    )}

                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-50 dark:hover:text-white hover:text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute top-0 z-20 inset-x-0 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:bg-gray-800">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="/icons/rocket.svg" alt="Workflow" />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-50 hover:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">Close menu</span>

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
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <nav>
                                    <p className="text-indigo-500 font-bold">Components</p>
                                    {menuEntry.map((entry) => {
                                        return (
                                            <Link href={entry.link} key={entry.label}>
                                                <a className="p-2 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <span className="ml-1 text-base font-normal text-gray-900 dark:text-white">
                                                        {entry.label}
                                                    </span>
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                            <div className="mt-2">
                                <nav>
                                    <p className="text-indigo-500 font-bold">Templates</p>
                                    {menuTemplates.map((entry) => {
                                        return (
                                            <Link href={entry.link} key={entry.label}>
                                                <a className="p-2 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <span className="ml-1 text-base font-normal text-gray-900 dark:text-white">
                                                        {entry.label}
                                                    </span>
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default AppHeader;
