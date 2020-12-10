import React, { FC } from 'react';
const FullPhotoCard: FC = () => {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg relative mb-1 mb-6 w-80 m-auto">
            <img alt="eggs" src="/images/food/2.jpg" className="rounded-lg" />
            <div className="absolute bg-gradient-to-b bg-opacity-60 from-transparent to-black w-full p-4 bottom-0">
                <p className="text-white text-2xl nb-4">Avocado and Egg Toast</p>
                <div className="flex justify-between">
                    <p className="text-sm text-gray-300 flex items-center">18/12/2020</p>
                    <p className="text-sm text-gray-300 flex items-center">
                        <i className="far fa-clock "></i>
                        25 min
                    </p>
                </div>
            </div>
        </div>
    );
};
export default FullPhotoCard;
