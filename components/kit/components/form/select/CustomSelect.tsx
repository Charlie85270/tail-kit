import React, { FC, useEffect, useRef, useState, useCallback } from 'react';

interface Props {
    forceOpen?: boolean;
    hideImage?: boolean;
}

const CustomSelect = (props: Props) => {
    const [showList, setShowList] = useState(false);
    const panelResultElement = useRef<HTMLDivElement>();
    const selectButton = useRef<HTMLButtonElement>();
    const handleClickOutside = useCallback((event) => {
        const myHTMLWrapper = panelResultElement.current;
        const searchElement = selectButton.current;
        if (
            myHTMLWrapper &&
            searchElement &&
            !myHTMLWrapper.contains(event.target) &&
            !searchElement.contains(event.target)
        ) {
            setShowList(false);
        }
    }, []);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className="w-64">
            <div className="relative mt-1">
                <button
                    type="button"
                    ref={selectButton}
                    onClick={() => setShowList(!showList)}
                    className="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <span className="flex items-center">
                        {!props.hideImage && (
                            <img
                                src="/images/person/2.jpeg"
                                alt="person"
                                className="flex-shrink-0 w-6 h-6 rounded-full"
                            />
                        )}

                        <span className="block ml-3 truncate">John Jackson</span>
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </button>

                {(showList || props.forceOpen) && (
                    <div ref={panelResultElement} className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                        <ul
                            tabIndex={-1}
                            role="listbox"
                            aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-item-3"
                            className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            <li
                                id="listbox-item-0"
                                role="option"
                                className="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white pr-9"
                            >
                                <div className="flex items-center">
                                    {!props.hideImage && (
                                        <img
                                            src="/images/person/1.jpg"
                                            alt="person"
                                            className="flex-shrink-0 w-6 h-6 rounded-full"
                                        />
                                    )}
                                    <span className="block ml-3 font-normal truncate">Mick Poulaz</span>
                                </div>

                                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </li>
                            <li
                                id="listbox-item-1"
                                role="option"
                                className="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white pr-9"
                            >
                                <div className="flex items-center">
                                    {!props.hideImage && (
                                        <img
                                            src="/images/person/1.jpg"
                                            alt="person"
                                            className="flex-shrink-0 w-6 h-6 rounded-full"
                                        />
                                    )}
                                    <span className="block ml-3 font-normal truncate">Julien Schiano</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
export default CustomSelect;
