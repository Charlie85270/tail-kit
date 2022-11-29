import React, { FC } from 'react';
const ShoppingColorChoice: FC = () => {
    return (
        <div className="flex items-center justify-center w-80">
            <div className="w-full p-4">
                <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
                    <div className="prod-title">
                        <p className="text-2xl font-bold text-gray-900 uppercase">Puma Shoes</p>
                        <p className="text-sm text-gray-400 uppercase">The best shoes in the marketplace</p>
                    </div>
                    <div className="prod-img">
                        <img src="/images/object/4.jpg" className="object-cover object-center w-full" />
                    </div>
                    <div className="grid gap-10 prod-info">
                        <div>
                            <ul className="flex flex-row items-center justify-center">
                                <li className="mr-4 last:mr-0">
                                    <span className="block p-1 transition duration-300 ease-in border-2 border-gray-500 rounded-full">
                                        <a href="#blue" className="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                    </span>
                                </li>
                                <li className="mr-4 last:mr-0">
                                    <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                        <a href="#yellow" className="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                    </span>
                                </li>
                                <li className="mr-4 last:mr-0">
                                    <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                        <a href="#red" className="block w-6 h-6 bg-red-500 rounded-full"></a>
                                    </span>
                                </li>
                                <li className="mr-4 last:mr-0">
                                    <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                        <a href="#green" className="block w-6 h-6 bg-green-500 rounded-full"></a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                            <p className="text-xl font-bold">65 $</p>
                            <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ShoppingColorChoice;
