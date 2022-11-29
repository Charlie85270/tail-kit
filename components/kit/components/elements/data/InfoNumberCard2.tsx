import React, { FC } from 'react';

const InfoNumberCard2: FC = () => {
    return (
        <div className="relative overflow-hidden bg-white rounded-lg shadow w-60 md:w-72">
            <img
                src="https://img.clankapp.com/symbol/btc.svg"
                alt="btc logo"
                className="absolute w-24 h-24 rounded-full opacity-50 -top-6 -right-6 md:-right-4"
            />
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <dt className="text-sm font-medium leading-5 text-gray-500 truncate">Valeur de la transaction</dt>
                    <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">$ 5,749,480</dd>
                    <dd className="font-semibold text-gray-500">
                        <span>
                            500<span className="text-xs">.000</span>BTC
                        </span>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default InfoNumberCard2;
