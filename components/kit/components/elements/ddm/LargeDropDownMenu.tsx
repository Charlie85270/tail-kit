import React, { useState, useRef, useCallback, useEffect } from 'react';

interface Props {
    forceOpen?: boolean;
    label?: string;
    icon?: string;
    items: DDMItem[];
    withBackground?: boolean;
}
interface DDMItem {
    icon?: JSX.Element;
    label: string;
    desc?: string;
    link?: string;
}
const LargeDropDownMenu = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
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
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    ref={selectButton}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={` ${
                        props.withBackground ? 'border border-gray-300 bg-white dark:bg-gray-800 shadow-sm' : ''
                    } flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500`}
                    id="options-menu"
                >
                    {props.label}

                    {props.icon || (
                        <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
                        </svg>
                    )}
                </button>
            </div>

            {(props.forceOpen || isOpen) && (
                <div
                    ref={listElement}
                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8 divide-y divide-gray-100">
                            {props.items.map((item) => {
                                return (
                                    <a
                                        href={item.link || '#'}
                                        key={item.label}
                                        className="-m-3 p-3 flex items-center hover:bg-gray-50"
                                    >
                                        {item.icon}

                                        <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900 dark:text-white">
                                                {item.label}
                                            </p>
                                            {item.desc && (
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                    {item.desc}
                                                </p>
                                            )}
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default LargeDropDownMenu;
