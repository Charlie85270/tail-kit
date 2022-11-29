import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';

const PricingCard6: FC = () => {
    return (
        <div className="max-w-xs p-4 bg-white rounded-lg shadow-lg w-72 dark:bg-gray-800">
            <p className="pt-4 text-2xl font-bold leading-normal text-center text-black dark:text-white">Pro</p>
            <p className="pb-4 text-4xl font-bold leading-normal text-center text-black font-inter dark:text-white">
                <span className="text-base font-medium leading-loose text-center text-black uppercase font-inter dark:text-white">
                    $
                </span>
                19
                <span className="text-sm font-bold leading-tight text-center text-black opacity-50 font-inter dark:text-white">
                    /user/month
                </span>
            </p>
            <ul>
                <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
                    All features included
                </li>
                <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
                    3 Mailboxes
                </li>
                <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
                    Saved replies
                </li>
                <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
                    Social Inbox
                </li>
                <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
                    Reports
                </li>
                <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
                    Collaboration tools (tags,notes)
                </li>
                <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
                    Satisfaction ratings
                </li>
                <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
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
