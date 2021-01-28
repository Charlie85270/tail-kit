import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';

const PricingCard8: FC = () => {
    return (
        <div className="w-72 mx-auto bg-white border-t-4 rounded border-indigo-500 dark:bg-gray-800 shadow text-center p-4">
            <div className="overflow-hidden">
                <div className="text-2xl font-medium mb-8 text-gray-800 dark:text-white">Basic</div>
                <div className="leading-loose text-sm font-light text-gray-700 dark:text-gray-50 mb-10">
                    <div className="font-bold">5000 products</div> <div>All features</div>
                    <div>Free support</div>
                </div>
                <div className="font-bold text-2xl mb-2 text-gray-500 dark:text-gray-200">
                    <span>249 $</span>
                </div>
                <div className="text-gray-500 dark:text-gray-200 text-sm">/ month</div>
                <div className="px-4 mt-8">
                    <Button color="indigo" label="Start" />
                </div>
            </div>
        </div>
    );
};
export default PricingCard8;
