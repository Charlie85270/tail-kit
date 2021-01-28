import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';

const PricingCard6: FC = () => {
    return (
        <div className="rounded-lg w-72 p-4 bg-white shadow-lg dark:bg-gray-800 max-w-xs">
            <p className="text-2xl leading-normal text-center font-bold text-black dark:text-white pt-4">Pro</p>
            <p className="text-4xl font-inter leading-normal text-center font-bold text-black dark:text-white pb-4">
                <span className="font-inter text-base leading-loose text-center font-medium text-black  dark:text-white uppercase">
                    $
                </span>
                19
                <span className="text-sm font-inter leading-tight text-center font-bold text-black dark:text-white opacity-50">
                    /user/month
                </span>
            </p>
            <ul>
                <li className="text-xs font-inter leading-normal text-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
                    All features included
                </li>
                <li className="text-xs font-inter leading-normal text-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
                    3 Mailboxes
                </li>
                <li className="text-xs font-inter leading-normal text-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
                    Saved replies
                </li>
                <li className="text-xs font-inter leading-normal text-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
                    Social Inbox
                </li>
                <li className="text-xs font-inter leading-normal text-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
                    Reports
                </li>
                <li className="text-xs font-inter leading-normal text-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
                    Collaboration tools (tags,notes)
                </li>
                <li className="text-xs font-inter leading-normal text-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
                    Satisfaction ratings
                </li>
                <li className="text-xs font-inter leading-normal text-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
                    Workflows
                </li>
            </ul>
            <div className="py-4 text-center">
                <Button label="Try it free" color="indigo" />
            </div>
        </div>
    );
};
export default PricingCard6;
