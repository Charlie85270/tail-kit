import React from 'react';

interface Props {
    withHeader?: boolean;
    links: Links[];
    withBottomLink?: boolean;
}
interface Links {
    label: string;
    selected?: boolean;
    icon?: JSX.Element;
}

const LittleSidebar = (props: Props) => {
    return (
        <div className="flex flex-row h-full">
            <nav className="bg-white dark:bg-gray-800 w-20 h-screen justify-between flex flex-col">
                <div className="mt-10 mb-10">
                    {props.withHeader && (
                        <a href="#">
                            <img src="/images/person/2.jpeg" className="rounded-full w-10 h-10 mb-3 mx-auto" />
                        </a>
                    )}

                    <div className="mt-10">
                        <ul>
                            {props.links.map((link) => {
                                return (
                                    <li className="my-12 text-center" key={link.label}>
                                        <a href="#">
                                            <span
                                                className={`h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200`}
                                            >
                                                {link.icon}
                                            </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {props.withBottomLink && (
                    <div className="mb-4">
                        <a href="#">
                            <span>
                                <svg
                                    className="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-red-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
};
export default LittleSidebar;
