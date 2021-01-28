import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';
const BandeauInfo: FC = () => {
    return (
        <section className="max-w-screen-xl bg-green-500 dark:bg-gray-800 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
                    Used by leading architects, home builders renovators.
                </h2>
                <p className="mt-3 text-base leading-7 sm:mt-4 text-white">
                    Feel confident in choosing the best energy assessor for your energy rating.
                </p>
            </div>
            <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                <div>
                    <p className="text-5xl font-extrabold leading-none text-white">119</p>
                    <p className="mt-2 text-base font-medium leading-6 text-white">Energy raters</p>
                </div>
                <div className="mt-10 sm:mt-0">
                    <p className="text-5xl font-extrabold leading-none text-white">6</p>
                    <p className="mt-2 text-base font-medium leading-6 text-white">Quotes on average</p>
                </div>
                <div className="mt-10 sm:mt-0">
                    <p className="text-5xl font-extrabold leading-none text-white">24 hours</p>
                    <p className="mt-2 text-base font-medium leading-6 text-white">Average turnaround</p>
                </div>
            </div>
            <div className="w-52 mx-auto mt-4 p-4 flex">
                <button
                    type="button"
                    className="py-2 px-4  bg-gradient-to-r from-green-400 to-green-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                    Buy the kit
                </button>
            </div>
        </section>
    );
};
export default BandeauInfo;
