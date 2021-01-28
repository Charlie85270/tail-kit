import React, { FC } from 'react';

interface Props {
    withBorder?: boolean;
}

const Table = (props: Props) => {
    const headers = ['#', 'First name', 'Last name', 'Username'];
    const rows = [
        {
            data: ['1', 'Jean Marc', 'Louis', 'Jl987'],
        },
        {
            data: ['2', 'Eric', 'Prouve', 'prouveE'],
        },
        {
            data: ['3', 'Julien', 'Clai', 'CJUL87'],
        },
        {
            data: ['4', 'Igor', 'Louth', 'IGL89_9'],
        },
    ];

    const borderClasses = props.withBorder ? 'border' : 'border-b-2';

    return (
        <table className="table p-4 bg-white shadow rounded-lg">
            <thead>
                <tr>
                    {headers.map((head) => {
                        return (
                            <th
                                key={head}
                                className={`${borderClasses} p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900`}
                            >
                                {head}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => {
                    return (
                        <tr className="text-gray-700" key={index}>
                            {row.data.map((text) => {
                                return (
                                    <td key={text} className={`${borderClasses} p-4 dark:border-dark-5`}>
                                        {text}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
