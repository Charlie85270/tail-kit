import React, { FC } from 'react';

const CovidInfo: FC = () => {
    return (
        <div className="md:p-8 p-6 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row flex-col gap-12">
            <div>
                <span className="text-bold text-gray-700 dark:text-gray-400 block">Total Cases</span>
                <span className="text-yellow-500 text-4xl md:text-5xl mt-2 font-black block">75,858,724</span>
            </div>
            <div className="self-end">
                <div className="md:text-right text-left md:block">
                    <p className="text-xl md:mb-2 mb-0 dark:text-gray-100 flex items-center increase">
                        <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="h-6 w-6 text-red-500 mr-2"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                        </svg>
                        1.2% increase
                    </p>
                </div>
                <p className="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
                    from yesterday (+906,503)
                </p>
            </div>
        </div>
    );
};

export default CovidInfo;
