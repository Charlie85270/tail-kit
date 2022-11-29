import React, { FC } from 'react';
const TagsCard: FC = () => {
    return (
        <div className="w-64 m-auto overflow-hidden shadow-lg rounded-2xl h-90">
            <img alt="eggs" src="/images/car/1.jpg" className="rounded-t-lg" />
            <div className="relative w-full p-4 bg-white">
                <button
                    aria-label="Go to article"
                    type="button"
                    className="absolute w-12 h-12 text-white bg-indigo-500 rounded-full right-8 -top-6"
                >
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6 mx-auto text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                    </svg>
                </button>
                <p className="mb-2 text-xl font-medium text-gray-800">Templates</p>
                <p className="text-xs text-gray-600">
                    Improve UI with beautiful templates and components for Tailwind css.
                </p>
                <div className="flex flex-wrap items-center mt-6 justify-starts">
                    <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">#css</div>
                    <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                        #tailwind
                    </div>
                    <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">#components</div>
                </div>
            </div>
        </div>
    );
};
export default TagsCard;
