import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';

export const prices = [
    {
        label: 'All illimited components',
        include: true,
    },
    {
        label: ' Own custom Tailwind styles',
        include: true,
    },
    {
        label: 'Unlimited Templates',
        include: true,
    },
    {
        label: ' Free premium dashboard',
        include: true,
    },
    {
        label: 'Best ranking',
        include: true,
    },
    {
        label: 'Prenium svg',
        include: false,
    },
    {
        label: 'My wife',
        include: false,
    },
];

export const notIncluded = [
    ' No Contracts. No monthly, setup, or additional payment processor fees',
    ' No 2-week on-boarding, it takes 20 minutes!',
];

const PricingCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
            <p className="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">Entreprise</p>
            <p className="text-gray-900 dark:text-white text-3xl font-bold">
                $0 <span className="text-gray-300 text-sm">/ month </span>
            </p>
            <p className="text-gray-600 dark:text-gray-100  text-xs mt-4">
                For most businesses that want to optimize web queries.
            </p>

            <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
                {prices.map((price) => {
                    return (
                        <li key={price.label} className={`mb-3 flex items-center ${price.include ? '' : 'opacity-50'}`}>
                            {price.include ? (
                                <svg
                                    className="h-6 w-6 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="6"
                                    height="6"
                                    stroke="currentColor"
                                    fill="#10b981"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="6"
                                    height="6"
                                    className="h-6 w-6 mr-2"
                                    fill="red"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                </svg>
                            )}

                            {price.label}
                        </li>
                    );
                })}
            </ul>

            <Button label="Choose plan" color="indigo" />
        </div>
    );
};
export default PricingCard;
