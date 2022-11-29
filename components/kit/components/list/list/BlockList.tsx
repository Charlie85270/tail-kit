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
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
            {props.withHeader && (
                <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">User database</h3>
                    <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
                        Details and informations about user.
                    </p>
                </div>
            )}
            <ul className="flex flex-col">
                {lists.map((el) => {
                    return (
                        <li className="flex flex-row mb-2 border-gray-400" key={el.label}>
                            <div
                                className={`${
                                    props.withEffect
                                        ? 'transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg '
                                        : 'shadow border '
                                }select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4`}
                            >
                                <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <Avatar size="small" img={el.img} />
                                </div>
                                <div className="flex-1 pl-1 md:mr-16">
                                    <div className="font-medium dark:text-white">{el.label}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-200">{el.desc}</div>
                                </div>
                                {props.withDesc && (
                                    <div className="text-xs text-gray-600 dark:text-gray-200">6:00 AM</div>
                                )}
                                {props.withAction && (
                                    <button className="flex justify-end w-24 text-right">
                                        <svg
                                            width="12"
                                            fill="currentColor"
                                            height="12"
                                            className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200"
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
