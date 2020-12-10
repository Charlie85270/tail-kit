import React, { FC } from 'react';
const TagsCard: FC = () => {
    return (
        <div className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  m-auto">
            <img alt="eggs" src="/images/car/1.jpg" className="rounded-t-lg" />
            <div className="bg-white w-full p-4 relative">
                <button
                    type="button"
                    className="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6"
                >
                    <i className="fas fa-paper-plane text-white w-4 h-4"></i>
                </button>
                <p className="text-gray-800 text-xl font-medium mb-2">Natural</p>
                <p className="text-gray-600 text-xs">
                    Dare to take the lead and never let yourself be overtaken by events.
                </p>
                <div className="flex flex-wrap justify-starts items-center mt-6">
                    <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">#car</div>
                    <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">#auto</div>
                    <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">#sport</div>
                </div>
            </div>
        </div>
    );
};
export default TagsCard;
