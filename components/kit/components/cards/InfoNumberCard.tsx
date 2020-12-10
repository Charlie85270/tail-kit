import React, { FC } from 'react';
const InfoNumberCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-36 p-4 bg-white">
            <div className="flex items-center">
                <span className="bg-green-500 p-2 h-4 w-4 rounded-full relative">
                    <i className="fas fa-dollar-sign text-white h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
                </span>
                <p className="text-md text-gray-700 ml-2">Sales</p>
            </div>
            <div className="flex flex-col justify-start">
                <p className="text-gray-800 text-4xl text-left font-bold my-4">36K</p>
                <div className="relative w-28 h-2 bg-gray-200 rounded">
                    <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-2/3"></div>
                </div>
            </div>
        </div>
    );
};
export default InfoNumberCard;
