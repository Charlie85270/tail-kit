import React from 'react';
import Button from '../../elements/buttons/Button';

interface Props {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    isVertical?: boolean;
    twoButton?: boolean;
    isLeft?: boolean;
}

const SimpleTextCta = (props: Props) => {
    return (
        <div className={`bg-white dark:bg-gray-800 ${props.image ? 'overflow-hidden relative' : ''}`}>
            <div
                className={`${
                    props.isVertical
                        ? props.isLeft
                            ? 'text-start'
                            : 'text-center'
                        : 'lg:flex lg:items-center lg:justify-between'
                } ${props.image ? 'w-1/2' : 'w-full mx-auto'} py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20`}
            >
                <h2 className={`text-3xl font-extrabold text-black dark:text-white sm:text-4xl`}>
                    <span className="block">{props.title}</span>
                    {props.subtitle && <span className="block text-indigo-500">{props.subtitle}</span>}
                </h2>
                {props.description && (
                    <p
                        className={`text-xl${props.isVertical ? ' mt-4' : ''}${
                            props.image ? '' : ' max-w-md mx-auto'
                        } text-gray-400`}
                    >
                        {props.description}
                    </p>
                )}
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className={`${props.isVertical ? 'mt-12' : ''} inline-flex rounded-md shadow`}>
                        <Button label="Get started" isFat={true} color="indigo"></Button>
                    </div>
                    {props.twoButton && (
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Button label="Invite friend" isFat={true} color="gray" />
                        </div>
                    )}
                </div>
            </div>
            {props.image && (
                <img src={props.image} className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0" />
            )}
        </div>
    );
};

export default SimpleTextCta;
