import React, { FC } from 'react';
const ProductWithEval: FC = () => {
    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="w-1/3 bg-cover bg-landscape"></div>
            <div className="w-2/3 p-4">
                <h1 className="text-2xl font-bold text-gray-900">Tomorow</h1>
                <p className="mt-2 text-sm text-gray-600">
                    You can't buy your future, but you can do it. Money is nothing, you'r everything.
                </p>
                <div className="flex mt-2 item-center">
                    <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                </div>
                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-xl font-bold text-gray-700">$220</h1>
                    <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                        Add to Card
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductWithEval;
