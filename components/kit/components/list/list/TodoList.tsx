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
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {list.map((list) => {
                        return (
                            <li key={list.categ}>
                                <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="text-md text-gray-700 dark:text-white md:truncate">
                                                {list.title}
                                            </p>
                                            <div className="ml-2 flex-shrink-0 flex">
                                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {list.categ}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
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
                <div className="p-4 w-full md:w-1/2 mx-auto">
                    <Button color="indigo" label="View all" />
                </div>
            </div>
        </div>
    );
};
export default TodoList;
