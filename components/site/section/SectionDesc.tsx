import React from 'react';
import Link from 'next/link';

interface Props {
    items: section[];
    title: string;
    id: string;
    hasCommingSoon?: boolean;
}

interface section {
    title: string;
    items: number;
    img: string;
    link: string;
}

const SectionDesc = ({ title, items, id, hasCommingSoon }: Props) => {
    return (
        <div className="mb-8" id={id}>
            <h1 className="w-full text-left text-2xl font-light mb-4 text-gray-600">{title}</h1>

            <div className="flex w-full gap-0 md:gap-4 flex-wrap justify-evenly md:justify-start items-center">
                {items.map((section) => {
                    return (
                        <div
                            key={section.title}
                            className="hover:opacity-100 border rounded-lg w-full sm:w-1/3 m-2 md:m-0  md:w-1/5"
                        >
                            <Link href={section.link}>
                                <a className="">
                                    <img
                                        src={section.img}
                                        alt={section.title}
                                        className="rounded-lg w-full object-cover w-60 md:h-36 opacity-90 hover:opacity-100"
                                    />
                                    <p className="text-gray-700 text-md p-2">
                                        {section.title}{' '}
                                        <span className="text-gray-500 font-thin text-sm">
                                            ({section.items} components)
                                        </span>
                                    </p>
                                </a>
                            </Link>
                        </div>
                    );
                })}
                {hasCommingSoon && (
                    <div className="opacity-50 border border rounded-lg w-full sm:w-1/3 m-2 md:m-0  md:w-1/5">
                        <div className="">
                            <img
                                src="/images/sections/coming.gif"
                                alt="coming soon"
                                className="rounded-lg w-full object-cover w-60 md:h-36 opacity-90 hover:opacity-100"
                            />
                            <p className="text-gray-700 text-sm p-2">More templates will coming soon...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default SectionDesc;
