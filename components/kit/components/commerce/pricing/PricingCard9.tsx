import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';

const PricingCard9: FC = () => {
    return (
        <div className="p-4 mx-auto text-center bg-white border-indigo-500 rounded shadow h-36 w-96 dark:bg-gray-800">
            <div className="flex items-center justify-between h-full">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <span className="p-2 mr-2 text-white bg-gray-700 rounded dark:bg-gray-400">Business</span>
                        <span className="dark:text-white"> Plan </span>
                    </div>
                    <div>
                        <p className="mb-0 text-left text-gray-500 dark:text-gray-300">12 of 20 user</p>
                        <div className="w-full h-4 mt-3 bg-gray-400 rounded-full">
                            <div className={`w-2/3 h-full text-center text-xs text-white bg-indigo-500 rounded-full`}>
                                60%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between h-full">
                    <p className="text-4xl font-bold text-gray-900 dark:text-white">
                        <span className="text-sm">$</span> 199 <span className="text-sm text-gray-300">/ month </span>
                    </p>
                    <Button color="indigo" label="Upgrade plan" />
                </div>
            </div>
        </div>
    );
};
export default PricingCard9;
