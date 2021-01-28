import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';

const PricingCard9: FC = () => {
    return (
        <div className="mx-auto bg-white h-36 w-96 rounded border-indigo-500 dark:bg-gray-800 shadow text-center p-4">
            <div className="flex h-full items-center justify-between">
                <div className="flex h-full flex-col justify-between">
                    <div>
                        <span className="bg-gray-700 dark:bg-gray-400 rounded mr-2 text-white p-2">Business</span>
                        <span className="dark:text-white"> Plan </span>
                    </div>
                    <div>
                        <p className="mb-0 text-left text-gray-500 dark:text-gray-300">12 of 20 user</p>
                        <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                            <div className={`w-2/3 h-full text-center text-xs text-white bg-indigo-500 rounded-full`}>
                                60%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex h-full flex-col justify-between">
                    <p className="text-gray-900 dark:text-white text-4xl font-bold">
                        <span className="text-sm">$</span> 199 <span className="text-gray-300 text-sm">/ month </span>
                    </p>
                    <Button color="indigo" label="Upgrade plan" />
                </div>
            </div>
        </div>
    );
};
export default PricingCard9;
