import React from 'react';
import NotificationBadge from '../../elements/badges/NotificationBadge';

interface Props {
    headerText?: string;
    headerImg?: string;
    withBorder?: boolean;
    links: Links[];
    bottomLink?: { label: string; icon?: JSX.Element; link?: string };
    withDivider?: boolean;
}
interface Links {
    label: string;
    selected?: boolean;
    icon?: JSX.Element;
    notifications?: number;
}

const Sidebar = (props: Props) => {
    const withHeader = !!props.headerText || props.headerImg;

    return (
        <div className="relative bg-white dark:bg-gray-800">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="w-72 h-screen">
                    {withHeader && (
                        <div className="flex items-center justify-start mx-6 mt-10">
                            {props.headerImg && <img className="h-10" src="/icons/rocket.svg" />}
                            {props.headerText && (
                                <span className={`text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold`}>
                                    {props.headerText}
                                </span>
                            )}
                        </div>
                    )}

                    <nav className={`mt-10 px-6 ${props.withDivider ? 'divide-y divide-gray-200' : ''}`}>
                        {props.links.map((link) => {
                            return (
                                <a
                                    key={link.label}
                                    className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                                        props.withBorder && link.selected
                                            ? 'border-r-2 border-gray-600 dark:border-gray-300'
                                            : ''
                                    } ${
                                        link.selected
                                            ? 'text-gray-800 dark:text-gray-100'
                                            : 'text-gray-600 dark:text-gray-400'
                                    } ${props.withBorder ? '' : 'rounded-lg'} ${
                                        link.selected ? 'bg-gray-100 dark:bg-gray-600' : ''
                                    }`}
                                    href="#"
                                >
                                    {link.icon}

                                    <span className="mx-4 text-lg font-normal">{link.label}</span>
                                    <span className="flex-grow text-right">
                                        {link.notifications && (
                                            <NotificationBadge size="small" number={link.notifications} />
                                        )}
                                    </span>
                                </a>
                            );
                        })}
                    </nav>

                    {props.bottomLink && (
                        <div className="absolute bottom-0 my-10">
                            <a
                                className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8`}
                                href={props.bottomLink.link || '#'}
                            >
                                {props.bottomLink.icon}

                                <span className="mx-4 font-medium">{props.bottomLink.label}</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
