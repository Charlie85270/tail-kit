import React, { FC } from 'react';
const SimpleShoppingCard: FC = () => {
    return (
        <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
            <img alt="moto" src="/images/object/1.png" className="absolute w-40 h-40 mb-4 -right-20 -bottom-8" />
            <div className="w-4/6">
                <p className="mb-2 text-lg font-medium text-gray-800">Avg</p>
                <p className="text-xs text-gray-400">
                    Detail is not an obsession, it is the very essence of perfection.
                </p>
                <p className="text-xl font-medium text-indigo-500">$399</p>
            </div>
        </div>
    );
};
export default SimpleShoppingCard;
