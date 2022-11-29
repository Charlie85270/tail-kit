import React from 'react';

const HorizontalSkeletonCard = () => {
    return (
        <div className="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
            <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
                <div className="flex flex-col flex-1 gap-3">
                    <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
                    <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                    <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                    <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                    <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                </div>
                <div className="flex gap-3 mt-auto">
                    <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
export default HorizontalSkeletonCard;
