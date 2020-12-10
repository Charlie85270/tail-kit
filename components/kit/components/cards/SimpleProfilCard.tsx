import React, { FC } from 'react';
const SimpleProfilCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-36 p-2 py-6 bg-white">
            <div className="flex flex-col items-center justify-center">
                <a href="#">
                    <img alt="profil" src="/images/person/1.jpg" className="rounded-full h-16 w-16 mb-4" />
                </a>
                <span className="absolute w-3 border-2 border-white h-3 bg-green-500 rounded-full"></span>
                <p className="text-gray-800 text-xl font-medium mb-2">Charlie</p>
                <p className="text-gray-400 text-xs">FullStack dev</p>
            </div>
        </div>
    );
};
export default SimpleProfilCard;
