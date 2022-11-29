import React from 'react';
import Button from '../../elements/buttons/Button';

const TodoList = () => {
    const list = [
        {
            title: 'Increase sales by 10% year over year',
            desc: 'January 7, 2020',
            categ: ' On-Track',
        },
        {
            title: 'Increase newsletter subscribers by 500',
            desc: 'Jun 14, 2020',
            categ: 'To do',
        },
        {
            title: 'Increase customer satisfaction rating by 10 points',
            desc: 'December 10, 2020',
            categ: 'Backlog',
        },
    ];

    return (
        <div className="px-4 py-5 border-b rounded-t sm:px-6">
            <div className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {list.map((list) => {
                        return (
                            <li key={list.categ}>
                                <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-700 text-md dark:text-white md:truncate">
                                                {list.title}
                                            </p>
                                            <div className="flex flex-shrink-0 ml-2">
                                                <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                    {list.categ}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                                                    {list.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="w-full p-4 mx-auto md:w-1/2">
                    <Button color="indigo" label="View all" />
                </div>
            </div>
        </div>
    );
};
export default TodoList;
