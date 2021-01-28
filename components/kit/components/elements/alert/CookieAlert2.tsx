import React from 'react';
import Button from '../buttons/Button';

const CookieAlert2 = () => {
    return (
        <div className="w-72 bg-white rounded-lg shadow-md p-6">
            <div className="w-16 mx-auto relative -mt-10 mb-3">
                <img className="-mt-1" src="/icons/cookie.svg" alt="cookie" />
            </div>

            <span className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">
                We care about your data, and we'd love to use cookies to make your experience better.
            </span>

            <div className="flex items-center justify-between">
                <a className="text-xs text-gray-400 mr-1 hover:text-gray-800" href="#">
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
