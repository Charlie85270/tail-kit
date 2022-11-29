import React, { FC } from 'react';

const CovidInfo: FC = () => {
    return (
        <div className="flex flex-col justify-between gap-12 p-6 bg-white rounded-lg shadow-xl md:p-8 dark:bg-gray-800 md:items-center md:flex-row">
            <div>
                <span className="block text-gray-700 text-bold dark:text-gray-400">Total Cases</span>
                <span className="block mt-2 text-4xl font-black text-yellow-500 md:text-5xl">75,858,724</span>
            </div>
            <div className="self-end">
                <div className="text-left md:text-right md:block">
                    <p className="flex items-center mb-0 text-xl md:mb-2 dark:text-gray-100 increase">
                        <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="w-6 h-6 mr-2 text-red-500"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                        </svg>
                        1.2% increase
                    </p>
                </div>
                <p className="inline-block text-lg text-left text-gray-600 md:text-right dark:text-gray-400 md:block md:mb-0">
                    from yesterday (+906,503)
                </p>
            </div>
        </div>
    );
};

export default CovidInfo;
