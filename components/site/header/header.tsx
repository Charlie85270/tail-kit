import React, { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { menuEntry } from '../../layout/AppLayout';

interface Props {
    hideGithub?: boolean;
    hideHelp?: boolean;
}

const Header = ({ hideGithub, hideHelp }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSectionOpen, setIsSectionOpen] = useState(false);
    const listElement = useRef<HTMLDivElement>();
    const selectButton = useRef<HTMLButtonElement>();
    const handleClickOutside = useCallback((event) => {
        const myHTMLWrapper = listElement.current;
        const btnElement = selectButton.current;
        if (
            myHTMLWrapper &&
            btnElement &&
            !myHTMLWrapper.contains(event.target) &&
            !btnElement.contains(event.target)
        ) {
            setIsSectionOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);
    return (
        <div className="relative bg-white z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className={`${
                        hideGithub ? '' : 'border-b-2 '
                    } flex justify-between items-center  border-gray-100 py-6  md:space-x-10`}
                >
                    <div className="flex justify-start items-center gap-12">
                        <Link href="/">
                            <a className="flex items-center">
                                <img className="h-12 w-auto sm:h-12" src="/icons/rocket.svg" alt="site" />
                                <span className="text-indigo-600 ml-2 text-2xl font-bold">Tail-Kit</span>
                            </a>
                        </Link>
                        <nav className="hidden md:flex space-x-10">
                            <div className="relative">
                                <button
                                    ref={selectButton}
                                    type="button"
                                    onClick={() => setIsSectionOpen(!isSectionOpen)}
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
                                        />
                                    </svg>
                                </button>
                                {isSectionOpen && (
                                    <div
                                        ref={listElement}
                                        className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    >
                                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                {menuEntry.map((entry) => {
                                                    return (
                                                        <Link href={entry.link} key={entry.label}>
                                                            <a className="p-2 flex items-center rounded-lg text-indigo-600 hover:bg-gray-50">
                                                                <div className="font-normal">
                                                                    <p className="text-lg text-gray-900">
                                                                        {entry.label}
                                                                    </p>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        {entry.desc}
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>
                    {!hideHelp && (
                        <Link href="/components">
                            <a className="flex items-center">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 1792 1792"
                                    className="mr-2 w-10 h-10 text-gray-400 hover:text-gray-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1024 1376v-192q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23-9t9-23zm256-672q0-88-55.5-163t-138.5-116-170-41q-243 0-371 213-15 24 8 42l132 100q7 6 19 6 16 0 25-12 53-68 86-92 34-24 86-24 48 0 85.5 26t37.5 59q0 38-20 61t-68 45q-63 28-115.5 86.5t-52.5 125.5v36q0 14 9 23t23 9h192q14 0 23-9t9-23q0-19 21.5-49.5t54.5-49.5q32-18 49-28.5t46-35 44.5-48 28-60.5 12.5-81zm384 192q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                </svg>
                            </a>
                        </Link>
                    )}
                    {!hideGithub && (
                        <a href="https://github.com/Charlie85270/tail-kit" className="">
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
                    )}

                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
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
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute top-0 z-20 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="/icons/rocket.svg" alt="Workflow" />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
                            <div className="mt-6">
                                <nav>
                                    {menuEntry.map((entry) => {
                                        return (
                                            <Link href={entry.link} key={entry.label}>
                                                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                    <i className={`flex-shrink-0 h-6 w-6 text-indigo-600`} />
                                                    <span className="ml-3 text-base font-normal text-gray-900">
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
export default Header;
