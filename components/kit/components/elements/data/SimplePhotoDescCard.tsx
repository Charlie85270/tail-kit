import React, { FC } from 'react';

const SimplePhotoDescCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden">
            <img alt="moto" src="/images/object/1.png" className="absolute -right-16 -bottom-16 h-40 w-40 mb-4" />
            <div className="w-4/6">
                <p className="text-gray-800 text-lg font-medium mb-2">NextJS</p>
                <p className="text-gray-400 text-xs">
                    NextJs build all free components and templates for React website.
                </p>
            </div>
        </div>
    );
};
export default SimplePhotoDescCard;
