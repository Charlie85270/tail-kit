import React from 'react';
import Avatar from '../../elements/avatars/Avatar';

interface Props {
    withAction?: boolean;
    withEffect?: boolean;
    withHeader?: boolean;
}

const SimpleList = (props: Props) => {
    const lists = [
        {
            img: '/images/person/6.jpg',
            desc: 'Developer',
            label: 'Jean Marc',
            info: 'Live in Paris with his father',
        },
        {
            img: '/images/person/10.jpg',
            desc: 'Charlie Moi',
            label: 'Designer',
            info: 'Love last ketchup song',
        },
        {
            img: '/images/person/3.jpg',
            desc: 'Marine Jeanne',
            label: 'CEO',
            info: 'Beer, beer, beer and beer',
        },
        {
            img: '/images/person/7.jpg',
            desc: 'Boby PArk',
            label: 'CTO',
            info: 'Nothing to declare',
        },
    ];

    return (
        <div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
            {props.withHeader && (
                <div className="w-full px-4 py-5 border-b sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">User database</h3>
                    <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
                        Details and informations about user.
                    </p>
                </div>
            )}
            <ul className="flex flex-col divide-y divide">
                {lists.map((el) => {
                    return (
                        <li className="flex flex-row" key={el.label}>
                            <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                                <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <Avatar size="small" img={el.img} />
                                </div>
                                <div className="flex-1 pl-1 mr-16">
                                    <div className="font-medium dark:text-white">{el.label}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-200">{el.desc}</div>
                                </div>

                                <div className="text-xs text-gray-600 dark:text-gray-200">6:00 AM</div>
                                {props.withAction && (
                                    <button className="flex justify-end w-24 text-right">
                                        <svg
                                            width="20"
                                            fill="currentColor"
                                            height="20"
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

export default SimpleList;
