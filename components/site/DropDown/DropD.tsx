import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Props {
    links: HeaderLink[];
    label: string;
}
interface HeaderLink {
    label: string;
    link?: string;
    isSelected?: boolean;
    desc?: string;
    icon?: JSX.Element;
}

const DropD = (props: Props) => {
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
        <div className="relative">
            <button
                ref={selectButton}
                type="button"
                onClick={() => setIsSectionOpen(!isSectionOpen)}
                className="inline-flex items-center text-base text-xl font-light text-gray-800 rounded-md group dark:text-white hover:text-black dark:hover:text-gray-50"
            >
                <span>{props.label}</span>

                <svg
                    className="w-5 h-5 ml-2 text-gray-500 dark:text-gray-100 hover:text-gray-500 dark:hover:text-white"
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
                <div ref={listElement} className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white divide-y divide-gray-300 sm:gap-8 sm:p-8">
                            {props.links.map((entry) => {
                                return (
                                    <Link href={entry.link} key={entry.label}>
                                        <a className="flex items-center py-2 -m-3 text-gray-900 hover:text-indigo-600">
                                            {entry.icon}

                                            <div className="font-normal">
                                                <p className="text-lg">{entry.label}</p>
                                                <p className="mt-0 text-xs text-gray-400">{entry.desc}</p>
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
    );
};
export default DropD;
