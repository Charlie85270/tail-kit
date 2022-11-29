import React from 'react';
import Link from 'next/link';
import Badge from '../../kit/components/elements/badges/Badge';
import SquarePub from '../Pub/SquarePub';

interface Props {
    items: section[];
    title: string;
    id: string;
    isTemplate?: boolean;
    hasCommingSoon?: boolean;
    withPub?: boolean;
}

interface section {
    title: string;
    items: number;
    img: string;
    link: string;
    isNew?: boolean;
}

const SectionDesc = ({ title, items, id, hasCommingSoon, isTemplate, withPub }: Props) => {
    return (
        <div className="mb-8" id={id}>
            <h1 className="w-full mb-4 text-2xl font-light text-left text-gray-600">{title}</h1>

            <div className="flex flex-wrap items-center w-full gap-0 mb-4 md:gap-4 justify-evenly md:justify-start">
                {items.map((section) => {
                    return (
                        <div
                            key={section.title}
                            className={`${
                                section.isNew ? 'border-2 border-green-500' : 'border'
                            } rounded-lg relative w-full sm:w-1/3 m-2 md:m-0  md:w-1/5`}
                        >
                            {section.isNew && (
                                <div className="absolute z-20 -top-3 -right-4">
                                    <Badge
                                        color="bg-green-500"
                                        textColor="text-white"
                                        rounded="rounded"
                                        label="New !"
                                        isSmall={true}
                                        isMediumWeight={true}
                                    />
                                </div>
                            )}
                            <Link href={section.link}>
                                <a className="hover:opacity-100">
                                    <img
                                        src={section.img}
                                        alt={section.title}
                                        className="object-cover w-full rounded-lg w-60 md:h-36 opacity-90 hover:opacity-100"
                                    />
                                    <p className="p-2 text-gray-700 text-md">
                                        {section.title}{' '}
                                        <span className="text-sm font-thin text-gray-500">
                                            ({section.items} {isTemplate ? 'templates' : 'components'})
                                        </span>
                                    </p>
                                </a>
                            </Link>
                        </div>
                    );
                })}
                <>
                    {hasCommingSoon && (
                        <div className="w-full m-2 border rounded-lg opacity-50 sm:w-1/3 md:m-0 md:w-1/5">
                            <div className="">
                                <img
                                    src="/images/sections/coming.gif"
                                    alt="coming soon"
                                    className="object-cover w-full rounded-lg w-60 md:h-36 opacity-90 hover:opacity-100"
                                />
                                <p className="p-2 text-sm text-gray-700">More items will coming soon...</p>
                            </div>
                        </div>
                    )}
                </>
            </div>
            {withPub && <SquarePub />}
        </div>
    );
};
export default SectionDesc;
