import React, { FC } from 'react';

const InfoNumberCard2: FC = () => {
    return (
        <div className="bg-white  overflow-hidden shadow rounded-lg w-60 md:w-72 relative">
            <img
                src="https://img.clankapp.com/symbol/btc.svg"
                alt="btc logo"
                className="h-24 w-24 rounded-full absolute opacity-50 -top-6 -right-6 md:-right-4"
            />
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Valeur de la transaction</dt>
                    <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">$ 5,749,480</dd>
                    <dd className="text-gray-500 font-semibold">
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
