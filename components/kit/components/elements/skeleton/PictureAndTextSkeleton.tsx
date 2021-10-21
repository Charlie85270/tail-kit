import React from 'react';

const PictureAndTextSkeleton = () => {
    return (
        <div className="bg-white rounded w-96 mx-auto rounded-2xl shadow-lg">
            <div className="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse"> </div>
            <div className="h- p-3">
                <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                    <div className=" h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="..."></div>
                    <div className="col-span-2 ..."></div>
                </div>
            </div>
        </div>
    );
};
export default PictureAndTextSkeleton;
