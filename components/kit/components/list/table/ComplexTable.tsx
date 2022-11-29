import React, { FC } from 'react';

import Avatar from '../../elements/avatars/Avatar';
import FormSubscribe from '../../form/layout/FormSubscribe';
import PagerButton from '../../elements/buttons/PagerButton';

interface Props {
    withHeader?: boolean;
    withPager?: boolean;
    withAction?: boolean;
}

const ComplexTable = (props: Props) => {
    const headers = ['User', 'Role', 'Created at', 'status'];

    const rows = [
        {
            user: {
                img: '/images/person/8.jpg',
                name: 'Jean marc',
            },
            role: 'Admin',
            date: '12/09/2020',
            status: 'active',
        },
        {
            user: {
                img: '/images/person/9.jpg',
                name: 'Marcus coco',
            },
            role: 'Designer',
            date: '01/10/2012',
            status: 'active',
        },
        {
            user: {
                img: '/images/person/10.jpg',
                name: 'Ecric marc',
            },
            role: 'Developer',
            date: '02/10/2018',
            status: 'active',
        },
        {
            user: {
                img: '/images/person/6.jpg',
                name: 'Julien Huger',
            },
            role: 'User',
            date: '23/09/2010',
            status: 'active',
        },
    ];

    if (props.withAction) {
        headers.push('');
    }
    return (
        <div className="container max-w-3xl px-4 mx-auto sm:px-8">
            <div className="py-8">
                {props.withHeader && (
                    <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                        <h2 className="text-2xl leading-tight">Users</h2>

                        <div className="text-end">
                            <FormSubscribe placeholder="name" label="Filter" />
                        </div>
                    </div>
                )}

                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    {headers.map((header) => {
                                        return (
                                            <th
                                                scope="col"
                                                key={header}
                                                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                                            >
                                                {header}
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => {
                                    return (
                                        <tr key={row.user.name}>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <Avatar size="small" img={row.user.img} />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {row.user.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">{row.role}</p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">{row.date}</p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                    <span
                                                        aria-hidden
                                                        className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                                    ></span>
                                                    <span className="relative">{row.status}</span>
                                                </span>
                                            </td>
                                            {props.withAction && (
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </a>
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {props.withPager && (
                            <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                                <PagerButton />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplexTable;
