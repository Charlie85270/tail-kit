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
            <h1 className="w-full text-left text-2xl font-light mb-4 text-gray-600">{title}</h1>

            <div className="flex w-full gap-0 md:gap-4 flex-wrap justify-evenly md:justify-start items-center mb-4">
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
                                        className="rounded-lg w-full object-cover w-60 md:h-36 opacity-90 hover:opacity-100"
                                    />
                                    <p className="text-gray-700 text-md p-2">
                                        {section.title}{' '}
                                        <span className="text-gray-500 font-thin text-sm">
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
                        <div className="opacity-50 border border rounded-lg w-full sm:w-1/3 m-2 md:m-0  md:w-1/5">
                            <div className="">
                                <img
                                    src="/images/sections/coming.gif"
                                    alt="coming soon"
                                    className="rounded-lg w-full object-cover w-60 md:h-36 opacity-90 hover:opacity-100"
                                />
                                <p className="text-gray-700 text-sm p-2">More items will coming soon...</p>
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
