import React from 'react';
import Button from '../buttons/Button';

const CookieAlert2 = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md w-72">
            <div className="relative w-16 mx-auto mb-3 -mt-10">
                <img className="-mt-1" src="/icons/cookie.svg" alt="cookie" />
            </div>

            <span className="block w-full mb-3 leading-normal text-gray-800 sm:w-48 text-md">
                We care about your data, and we'd love to use cookies to make your experience better.
            </span>

            <div className="flex items-center justify-between">
                <a className="mr-1 text-xs text-gray-400 hover:text-gray-800" href="#">
                    Privacy Policy
                </a>
                <div className="w-1/2">
                    <Button label="See more" color="indigo" />
                </div>
            </div>
        </div>
    );
};

export default CookieAlert2;
