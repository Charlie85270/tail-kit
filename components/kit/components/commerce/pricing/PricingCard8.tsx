import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';

const PricingCard8: FC = () => {
    return (
        <div className="p-4 mx-auto text-center bg-white border-t-4 border-indigo-500 rounded shadow w-72 dark:bg-gray-800">
            <div className="overflow-hidden">
                <div className="mb-8 text-2xl font-medium text-gray-800 dark:text-white">Basic</div>
                <div className="mb-10 text-sm font-light leading-loose text-gray-700 dark:text-gray-50">
                    <div className="font-bold">5000 products</div> <div>All features</div>
                    <div>Free support</div>
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-gray-200">
                    <span>249 $</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-200">/ month</div>
                <div className="px-4 mt-8">
                    <Button color="indigo" label="Start" />
                </div>
            </div>
        </div>
    );
};
export default PricingCard8;
