import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';
const ClassicShoppingCard: FC = () => {
    return (
        <div className="flex bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="relative flex-none w-24 md:w-48">
                <img
                    src="/images/object/8.jpg"
                    alt="shopping image"
                    className="absolute inset-0 object-cover w-full h-full rounded-lg"
                />
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">Classic Utility Jacket</h1>
                    <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">$110.00</div>
                    <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                        In stock
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                    <div className="flex space-x-2">
                        <label className="text-center">
                            <input
                                className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg dark:bg-gray-600"
                                name="size"
                                type="radio"
                                value="xs"
                            />
                            XS
                        </label>
                        <label className="text-center">
                            <input
                                className="flex items-center justify-center w-6 h-6"
                                name="size"
                                type="radio"
                                value="s"
                            />
                            S
                        </label>
                        <label className="text-center">
                            <input
                                className="flex items-center justify-center w-6 h-6"
                                name="size"
                                type="radio"
                                value="m"
                            />
                            M
                        </label>
                        <label className="text-center">
                            <input
                                className="flex items-center justify-center w-6 h-6"
                                name="size"
                                type="radio"
                                value="l"
                            />
                            L
                        </label>
                        <label className="text-center">
                            <input
                                className="flex items-center justify-center w-6 h-6"
                                name="size"
                                type="radio"
                                value="xl"
                            />
                            XL
                        </label>
                    </div>
                    <a href="#" className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">
                        Size Guide
                    </a>
                </div>
                <div className="flex mb-4 text-sm font-medium">
                    <Button label="Buy now" color="indigo" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
            </form>
        </div>
    );
};
export default ClassicShoppingCard;
