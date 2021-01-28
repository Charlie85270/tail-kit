import React from 'react';
import Button from '../../elements/buttons/Button';

interface Props {
    title: string;
    description?: string;
    isLeft?: boolean;
}

const MultipleImagesCta = (props: Props) => {
    return (
        <div className={`bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center`}>
            <div className={`w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20`}>
                <h2 className={`text-3xl font-extrabold text-black dark:text-white sm:text-4xl`}>
                    <span className="block">{props.title}</span>
                </h2>
                {props.description && <p className={`text-md mt-4 text-gray-400`}>{props.description}</p>}
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className={`mt-12 inline-flex rounded-md shadow`}>
                        <Button label="Get started" color="green"></Button>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-8 p-8 lg:p-24">
                <img src="/images/landscape/3.jpg" className="rounded-lg w-1/2" alt="Tree" />

                <div>
                    <img src="/images/landscape/2.jpg" className="rounded-lg mb-8" alt="Tree" />
                    <img src="/images/landscape/4.jpg" className="rounded-lg" alt="Tree" />
                </div>
            </div>
        </div>
    );
};

export default MultipleImagesCta;
