import Avatar from '../../elements/avatars/Avatar';
import React from 'react';

interface Props {
    withDesc?: boolean;
    withEffect?: boolean;
    withAction?: boolean;
    withHeader?: boolean;
}

const BlockList = (props: Props) => {
    const lists = [
        {
            img: '/images/person/6.jpg',
            desc: 'Developer',
            label: 'Jean Marc',
        },
        {
            img: '/images/person/10.jpg',
            desc: 'Charlie Moi',
            label: 'Designer',
        },
        {
            img: '/images/person/3.jpg',
            desc: 'Marine Jeanne',
            label: 'CEO',
        },
        {
            img: '/images/person/7.jpg',
            desc: 'Boby PArk',
            label: 'CTO',
        },
    ];

    return (
        <div className="container flex flex-col mx-auto w-full items-center justify-center">
            {props.withHeader && (
                <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">User database</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                        Details and informations about user.
                    </p>
                </div>
            )}
            <ul className="flex flex-col">
                {lists.map((el) => {
                    return (
                        <li className="border-gray-400 flex flex-row mb-2" key={el.label}>
                            <div
                                className={`${
                                    props.withEffect
                                        ? 'transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg '
                                        : 'shadow border '
                                }select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4`}
                            >
                                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                    <Avatar size="small" img={el.img} />
                                </div>
                                <div className="flex-1 pl-1 md:mr-16">
                                    <div className="font-medium dark:text-white">{el.label}</div>
                                    <div className="text-gray-600 dark:text-gray-200 text-sm">{el.desc}</div>
                                </div>
                                {props.withDesc && (
                                    <div className="text-gray-600 dark:text-gray-200 text-xs">6:00 AM</div>
                                )}
                                {props.withAction && (
                                    <button className="w-24 text-right flex justify-end">
                                        <svg
                                            width="12"
                                            fill="currentColor"
                                            height="12"
                                            className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BlockList;
