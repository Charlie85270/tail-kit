import React, { useState } from 'react';
import FormSubscribe from '../../form/layout/FormSubscribe';
import Ddm from '../../elements/ddm/DropDownMenu';
import Link from 'next/link';

interface Props {
    forceMenuOpenInMobile?: boolean;
    forceDDMOpenInMobile?: boolean;
    links: HeaderLink[];
    ddmItems?: DDMItem[];
    withShadow?: boolean;
    hideGitHubLink?: boolean;
    alignRight?: boolean;
    hideHelp?: boolean;
    withSearchBar?: boolean;
    isFat?: boolean;
    withRequestLink?: boolean;
}
interface HeaderLink {
    label: string;
    link?: string;
    isSelected?: boolean;
    desc?: string;
    icon?: JSX.Element;
}
interface DDMItem {
    icon?: JSX.Element;
    label: string;
    desc?: string;
    link?: string;
}

const Header = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <nav
                className={`bg-white dark:bg-gray-800 ${props.withShadow ? ' shadow' : ''}${
                    props.isFat ? ' py-4' : ''
                } `}
            >
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className={`${props.alignRight ? 'w-full justify-between' : ''} flex items-center`}>
                            <a className="flex-shrink-0" href="/">
                                <img className="h-8 w-8" src="/icons/rocket.svg" alt="Workflow" />
                            </a>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {props.links.map((link) => {
                                        return (
                                            <Link key={link.label} href={link.link || '#'}>
                                                <a
                                                    key={link.label}
                                                    className={`${
                                                        link.isSelected
                                                            ? 'text-gray-800 dark:text-white'
                                                            : 'text-gray-300'
                                                    }  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md ${
                                                        props.isFat ? 'text-md' : 'text-sm'
                                                    } font-medium`}
                                                >
                                                    {link.label}
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            {props.withSearchBar && (
                                <div className="md:block -mr-2 flex">
                                    <FormSubscribe label="Search" placeholder="components" />
                                </div>
                            )}
                            <div className="ml-4 flex items-center md:ml-6">
                                {props.withRequestLink && (
                                    <Link href="/request">
                                        <a className="">
                                            <svg
                                                width="2048"
                                                height="1792"
                                                fill="currentColor"
                                                className="mr-2 w-8 h-8 text-gray-400 hover:text-gray-200"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
                                            </svg>
                                        </a>
                                    </Link>
                                )}
                                {!props.hideHelp && (
                                    <Link href="/started">
                                        <a className="">
                                            <svg
                                                width="2048"
                                                height="1792"
                                                fill="currentColor"
                                                className="mr-2 w-8 h-8 text-gray-400 hover:text-gray-200"
                                                viewBox="0 0 2048 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z" />
                                            </svg>
                                        </a>
                                    </Link>
                                )}
                                {!props.hideGitHubLink && (
                                    <a
                                        href="https://github.com/Charlie85270/tail-kit"
                                        className="p-1 rounded-full text-gray-400 focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        <span className="sr-only">View github</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="currentColor"
                                            className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                                            viewBox="0 0 1792 1792"
                                        >
                                            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
                                        </svg>
                                    </a>
                                )}
                                {props.ddmItems && (
                                    <div className="ml-3 relative">
                                        <Ddm
                                            icon={
                                                <svg
                                                    width="20"
                                                    fill="currentColor"
                                                    height="20"
                                                    className="text-gray-800"
                                                    viewBox="0 0 1792 1792"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
                                                </svg>
                                            }
                                            withBackground={false}
                                            forceOpen={props.forceDDMOpenInMobile}
                                            items={props.ddmItems.map((item) => {
                                                return { label: item.label };
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="h-8 w-8"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {(isMenuOpen || props.forceMenuOpenInMobile) && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {props.links.map((link) => {
                                return (
                                    <Link key={link.label} href={link.link || '#'}>
                                        <a
                                            className={`${
                                                link.isSelected
                                                    ? 'text-gray-800 dark:text-white'
                                                    : 'text-gray-300 hover:text-gray-800 dark:hover:text-white'
                                            } block px-3 py-2 rounded-md text-base font-medium`}
                                        >
                                            {link.label}
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                        {props.withSearchBar && (
                            <div className="p-2 flex">
                                <FormSubscribe label="Search" placeholder="components" />
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
};
export default Header;
