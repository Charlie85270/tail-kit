import React, { useState, FC } from 'react';
import Link from 'next/link';

interface Props {
    title: string;
    backLink?: string;
}

const SectionHeader = ({ title, backLink }: Props) => {
    return (
        <div className="flex items-center justify-between mb-8">
            <h1 className="font-light text-3xl">{title}</h1>

            <Link href={backLink ? backLink : '/components'}>
                <a className="w-28 flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-gray-700 hover:bg-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        className="mr-4"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                    >
                        <path d="M1792 800v192q0 14-9 23t-23 9h-1248v224q0 21-19 29t-35-5l-384-350q-10-10-10-23 0-14 10-24l384-354q16-14 35-6 19 9 19 29v224h1248q14 0 23 9t9 23z" />
                    </svg>
                    Back
                </a>
            </Link>
        </div>
    );
};
export default SectionHeader;
