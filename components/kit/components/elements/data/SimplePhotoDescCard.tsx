import React, { FC } from 'react';

const SimplePhotoDescCard: FC = () => {
    return (
        <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
            <img alt="moto" src="/images/object/1.png" className="absolute w-40 h-40 mb-4 -right-16 -bottom-16" />
            <div className="w-4/6">
                <p className="mb-2 text-lg font-medium text-gray-800">NextJS</p>
                <p className="text-xs text-gray-400">
                    NextJs build all free components and templates for React website.
                </p>
            </div>
        </div>
    );
};
export default SimplePhotoDescCard;
